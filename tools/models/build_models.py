"""
Neon Cyber Rush — procedural hard-surface vehicles + riders (Blender 5.x, run as a Python module).

    pip install bpy==5.3.0
    python tools/models/build_models.py [out_dir]

Builds kart / quad / bike, each with a posed armoured rider, at two levels of detail
(<cls>_hi.glb, <cls>_lo.glb). Look: glossy black hard-surface panels with bevelled edges,
neon trim tubes running along the panel character lines, glowing wheel rims, flaming exhausts.

Coordinates while modelling: (x = right, f = forward, z = up), metres. Vehicles face +f, which is
written to Blender as -Y so the glTF export faces +Z (the game's forward axis).

Material names are a contract with src/vehicles.js, which swaps in runtime PBR/emissive materials:
  BODY  BODY_DARK  TRIM  METAL  TIRE  RIM  RIMGLOW  SEAT  GLASS  LIGHT  EXHAUST
  SUIT  ARMOR  SUITGLOW  HELMET  VISOR
Node names: WHEEL_<id> (origin at the hub, spin about local X; ids starting with F steer),
FX_EXHAUST_<n> (flame origin, flame points along the node's -Z in glTF = backwards),
FX_TAIL_<n> (light-trail emitters).
AO is baked into the 'AO' colour attribute (exported as COLOR_0) for every non-emissive mesh.
"""
import bpy, bmesh, math, os, sys
from math import sin, cos, pi, radians
from mathutils import Vector, Matrix

OUT = sys.argv[1] if len(sys.argv) > 1 and not sys.argv[1].startswith('-') else os.path.join(os.path.dirname(__file__), '..', '..', 'src', 'assets', 'models')
EMISSIVE = {'TRIM', 'RIMGLOW', 'LIGHT', 'EXHAUST', 'SUITGLOW'}
DETAIL = 2
COL = None


def P(x, f, z):
    return Vector((x, -f, z))


# ─── scene / materials ───────────────────────────────────────────────────────
MATS = {}
MAT_DEFS = {
    'BODY': ((0.012, 0.013, 0.016), 0.6, 0.22, None),
    'BODY_DARK': ((0.006, 0.006, 0.008), 0.3, 0.45, None),
    'TRIM': ((1, 0.35, 0.02), 0, 0.5, (1, 0.35, 0.02)),
    'METAL': ((0.35, 0.36, 0.4), 1.0, 0.25, None),
    'TIRE': ((0.01, 0.01, 0.012), 0, 0.85, None),
    'RIM': ((0.04, 0.04, 0.05), 0.9, 0.3, None),
    'RIMGLOW': ((1, 0.35, 0.02), 0, 0.5, (1, 0.35, 0.02)),
    'SEAT': ((0.02, 0.02, 0.025), 0, 0.7, None),
    'GLASS': ((0.05, 0.08, 0.1), 0.2, 0.05, None),
    'LIGHT': ((1, 1, 1), 0, 0.3, (1, 0.95, 0.9)),
    'EXHAUST': ((1, 0.4, 0.05), 0, 0.5, (1, 0.4, 0.05)),
    'SUIT': ((0.015, 0.016, 0.02), 0.1, 0.55, None),
    'ARMOR': ((0.02, 0.022, 0.028), 0.5, 0.28, None),
    'SUITGLOW': ((1, 0.4, 0.05), 0, 0.5, (1, 0.4, 0.05)),
    'HELMET': ((0.02, 0.022, 0.028), 0.6, 0.18, None),
    'VISOR': ((0.01, 0.015, 0.02), 0.3, 0.04, None),
}


def reset():
    global COL, MATS
    bpy.ops.wm.read_factory_settings(use_empty=True)
    COL = bpy.context.scene.collection
    MATS = {}
    for name, (c, m, r, e) in MAT_DEFS.items():
        mat = bpy.data.materials.new(name)
        mat.use_nodes = True
        b = mat.node_tree.nodes.get('Principled BSDF')
        b.inputs['Base Color'].default_value = (*c, 1)
        b.inputs['Metallic'].default_value = m
        b.inputs['Roughness'].default_value = r
        if e:
            b.inputs['Emission Color'].default_value = (*e, 1)
            b.inputs['Emission Strength'].default_value = 6
        MATS[name] = mat


def link(o, parent=None):
    COL.objects.link(o)
    if parent is not None:
        o.parent = parent
    return o


def empty(name, loc, parent=None):
    e = bpy.data.objects.new(name, None)
    e.location = loc
    e.empty_display_size = 0.1
    return link(e, parent)


def obj_from_bm(name, bm, material, parent=None, smooth=True, recalc=True):
    if recalc:
        bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:])
    me = bpy.data.meshes.new(name)
    bm.to_mesh(me)
    bm.free()
    for p in me.polygons:
        p.use_smooth = smooth
    me.materials.append(MATS[material])
    o = bpy.data.objects.new(name, me)
    return link(o, parent)


def hard(o, width=0.012, angle=32, seg=None):
    """Hard-surface finish: angle-limited bevel with hardened normals + weighted normals."""
    b = o.modifiers.new('bevel', 'BEVEL')
    b.width = width
    b.segments = seg if seg is not None else (3 if DETAIL > 1 else 1)
    b.limit_method = 'ANGLE'
    b.angle_limit = radians(angle)
    b.harden_normals = True
    w = o.modifiers.new('wn', 'WEIGHTED_NORMAL')
    w.keep_sharp = True
    return o


# ─── primitives ──────────────────────────────────────────────────────────────
def octo(w, zb, zt, c=0.06, tw=None, cb=None, x0=0.0):
    """Chamfered 8-point cross-section (x, z): bottom width w, top width tw."""
    tw = w if tw is None else tw
    cb = c if cb is None else cb
    c = min(c, (zt - zb) * 0.45, tw * 0.45)
    cb = min(cb, (zt - zb) * 0.45, w * 0.45)
    return [(x0 + w / 2 - cb, zb), (x0 + w / 2, zb + cb), (x0 + tw / 2, zt - c), (x0 + tw / 2 - c, zt),
            (x0 - tw / 2 + c, zt), (x0 - tw / 2, zt - c), (x0 - w / 2, zb + cb), (x0 - w / 2 + cb, zb)]


def loft(name, sections, material, parent=None, cap=True, finish=True, width=0.012):
    """sections: [(f, [(x,z), ...]), ...] — closed rings with equal point counts."""
    bm = bmesh.new()
    rings = [[bm.verts.new(P(x, f, z)) for (x, z) in pts] for f, pts in sections]
    n = len(rings[0])
    for a, b in zip(rings, rings[1:]):
        for i in range(n):
            bm.faces.new((a[i], a[(i + 1) % n], b[(i + 1) % n], b[i]))
    if cap:
        bm.faces.new(rings[0][::-1])
        bm.faces.new(rings[-1])
    o = obj_from_bm(name, bm, material, parent)
    if finish:
        hard(o, width)
    return o


def loft3(name, sections, material, parent=None, cap=True, finish=True, width=0.01):
    """sections: [[(x,f,z), ...], ...] — arbitrary 3D rings."""
    bm = bmesh.new()
    rings = [[bm.verts.new(P(*p)) for p in ring] for ring in sections]
    n = len(rings[0])
    for a, b in zip(rings, rings[1:]):
        for i in range(n):
            bm.faces.new((a[i], a[(i + 1) % n], b[(i + 1) % n], b[i]))
    if cap:
        bm.faces.new(rings[0][::-1])
        bm.faces.new(rings[-1])
    o = obj_from_bm(name, bm, material, parent)
    if finish:
        hard(o, width)
    return o


def trim_line(sections, idx, out=0.012):
    """3D points along ring corner `idx` of a loft, nudged outward from each ring's centre."""
    pts = []
    for f, ring in sections:
        cx = sum(p[0] for p in ring) / len(ring)
        cz = sum(p[1] for p in ring) / len(ring)
        x, z = ring[idx]
        d = Vector((x - cx, z - cz))
        d = d.normalized() if d.length > 1e-6 else Vector((0, 1))
        pts.append(P(x + d.x * out, f, z + d.y * out))
    return pts


def tube(name, pts, r, material, parent=None, closed=False, smooth=True):
    cu = bpy.data.curves.new(name, 'CURVE')
    cu.dimensions = '3D'
    cu.bevel_depth = r
    cu.bevel_resolution = 2 if DETAIL > 1 else 0
    cu.use_fill_caps = True
    sp = cu.splines.new('NURBS' if smooth and len(pts) > 2 else 'POLY')
    sp.points.add(len(pts) - 1)
    for i, p in enumerate(pts):
        sp.points[i].co = (p[0], p[1], p[2], 1)
    sp.use_cyclic_u = closed
    if smooth and len(pts) > 2:
        sp.order_u = 3
        sp.use_endpoint_u = not closed
        sp.resolution_u = 6 if DETAIL > 1 else 2
    cu.materials.append(MATS[material])
    o = bpy.data.objects.new(name, cu)
    return link(o, parent)


def lathe(name, prof, segs, material, parent=None, closed=False, finish=False, rot_offset=0.0):
    """Revolve profile [(axial x, radius), ...] around the local X axis."""
    bm = bmesh.new()
    rings = []
    for i in range(segs):
        a = 2 * pi * i / segs + rot_offset
        rings.append([bm.verts.new((x, r * cos(a), r * sin(a))) for (x, r) in prof])
    m = len(prof)
    for i in range(segs):
        A, B = rings[i], rings[(i + 1) % segs]
        for j in range(m if closed else m - 1):
            j2 = (j + 1) % m
            if A[j] is A[j2]:
                continue
            bm.faces.new((A[j], A[j2], B[j2], B[j]))
    bmesh.ops.remove_doubles(bm, verts=bm.verts[:], dist=1e-5)
    o = obj_from_bm(name, bm, material, parent)
    if finish:
        hard(o, 0.006, 40)
    return o


def torus_x(name, x, R, r, material, parent=None, segs=None, tsegs=None):
    segs = segs or (48 if DETAIL > 1 else 20)
    tsegs = tsegs or (8 if DETAIL > 1 else 4)
    prof = [(x + r * cos(2 * pi * k / tsegs), R + r * sin(2 * pi * k / tsegs)) for k in range(tsegs)]
    return lathe(name, prof, segs, material, parent, closed=True)


def box(name, center, size, material, parent=None, rot=None, finish=True, width=0.008, smooth=True):
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    bmesh.ops.scale(bm, vec=size, verts=bm.verts)
    if rot is not None:
        bmesh.ops.rotate(bm, verts=bm.verts, cent=(0, 0, 0), matrix=rot)
    bmesh.ops.translate(bm, vec=center, verts=bm.verts)
    o = obj_from_bm(name, bm, material, parent, smooth=smooth)
    if finish:
        hard(o, width, 30)
    return o


def cyl(name, a, b, r, material, parent=None, segs=None, r2=None, finish=True):
    """Cylinder from point a to point b (Blender coords)."""
    segs = segs or (24 if DETAIL > 1 else 10)
    a, b = Vector(a), Vector(b)
    d = b - a
    bm = bmesh.new()
    bmesh.ops.create_cone(bm, cap_ends=True, segments=segs, radius1=r, radius2=r2 if r2 is not None else r, depth=d.length)
    q = d.normalized().to_track_quat('Z', 'Y')
    bmesh.ops.rotate(bm, verts=bm.verts, cent=(0, 0, 0), matrix=q.to_matrix())
    bmesh.ops.translate(bm, vec=(a + b) / 2, verts=bm.verts)
    o = obj_from_bm(name, bm, material, parent)
    if finish:
        hard(o, 0.004, 40)
    return o


def sphere(name, c, r, material, parent=None, scale=(1, 1, 1), segs=None, band=None):
    segs = segs or (32 if DETAIL > 1 else 12)
    bm = bmesh.new()
    bmesh.ops.create_uvsphere(bm, u_segments=segs, v_segments=segs // 2, radius=r)
    if band:  # keep only verts satisfying band(v) (in unit sphere coords) → partial shells (visors)
        kill = [v for v in bm.verts if not band(v.co / r)]
        bmesh.ops.delete(bm, geom=kill, context='VERTS')
    bmesh.ops.scale(bm, vec=scale, verts=bm.verts)
    bmesh.ops.translate(bm, vec=c, verts=bm.verts)
    return obj_from_bm(name, bm, material, parent, recalc=band is None)


def helix(name, a, b, r, turns, wire, material, parent=None):
    a, b = Vector(a), Vector(b)
    d = b - a
    n = int(turns * (16 if DETAIL > 1 else 6))
    q = d.normalized().to_track_quat('Z', 'Y').to_matrix()
    pts = [a + q @ Vector((r * cos(2 * pi * turns * k / n), r * sin(2 * pi * turns * k / n), d.length * k / n)) for k in range(n + 1)]
    return tube(name, pts, wire, material, parent, smooth=False)


# ─── wheels ──────────────────────────────────────────────────────────────────
def wheel(name, x, f, z, R, W, side, style, parent):
    """Wheel assembly under an empty at the hub (spins about local X)."""
    e = empty('WHEEL_' + name, P(x, f, z), parent)
    seg = 56 if DETAIL > 1 else 22
    hw = W / 2
    rin = R * (0.62 if style == 'quad' else 0.7)
    sh = min(hw, R - rin) * 0.45
    # tyre: rounded box section, two shallow tread grooves on slicks
    prof = [(-hw, rin), (-hw, R - sh), (-hw + sh * 0.3, R - sh * 0.3), (-hw + sh, R)]
    if style != 'quad' and DETAIL > 1:
        for gx in (-0.22, 0.22):
            prof += [(gx * W - 0.012, R), (gx * W - 0.008, R - 0.012), (gx * W + 0.008, R - 0.012), (gx * W + 0.012, R)]
    prof += [(hw - sh, R), (hw - sh * 0.3, R - sh * 0.3), (hw, R - sh), (hw, rin)]
    lathe(name + '_tire', prof, seg, 'TIRE', e, closed=True)
    if style == 'quad':  # knobby lugs
        n = 22 if DETAIL > 1 else 14
        for k in range(n):
            a = 2 * pi * k / n
            for lx in ((-0.22, 0.22) if k % 2 else (0.0,)):
                rot = Matrix.Rotation(a, 3, 'X')
                c = rot @ Vector((lx * W, 0, R + 0.018))
                box(f'{name}_lug{k}_{lx}', c, (W * 0.3, 0.07, 0.04), 'TIRE', e, rot=rot, finish=False, smooth=False)
    # rim: dished barrel + spokes + hub
    rim_r = rin * 0.98
    lathe(name + '_rim', [(-hw * 0.8, rim_r), (-hw * 0.6, rim_r * 0.94), (hw * 0.6, rim_r * 0.94), (hw * 0.8, rim_r)], seg, 'RIM', e)
    face = side * hw * 0.55
    n_sp = {'kart': 5, 'quad': 6, 'bike': 3}[style]
    for k in range(n_sp):
        a = 2 * pi * k / n_sp
        rot = Matrix.Rotation(a, 3, 'X')
        c = rot @ Vector((face, 0, rim_r * 0.52))
        box(f'{name}_spoke{k}', c, (0.035, rim_r * (0.22 if style == 'bike' else 0.16), rim_r * 0.82), 'RIM', e, rot=rot, width=0.006)
    lathe(name + '_hub', [(face - 0.03, 0.0), (face - 0.03, rim_r * 0.28), (face + side * 0.035, rim_r * 0.24), (face + side * 0.05, 0.0)], 24 if DETAIL > 1 else 10, 'METAL', e)
    # glowing rings: rim lip (both faces) + thin sidewall line
    for s in (-1, 1):
        torus_x(f'{name}_glow{s}', s * hw * 0.72, rim_r * 0.96, 0.016 if style != 'bike' else 0.014, 'RIMGLOW', e)
    torus_x(name + '_wall', side * (hw - 0.004), (rin + R) / 2 + 0.01, 0.006, 'RIMGLOW', e, tsegs=4)
    # brake disc + calliper
    lathe(name + '_disc', [(-side * hw * 0.15, rim_r * 0.3), (-side * hw * 0.15, rim_r * 0.78), (-side * hw * 0.05, rim_r * 0.78), (-side * hw * 0.05, rim_r * 0.3)], 32 if DETAIL > 1 else 12, 'METAL', e, closed=True)
    box(name + '_caliper', (-side * hw * 0.1, 0, rim_r * 0.62), (0.07, 0.16, 0.08), 'TRIM', e)
    return e


# ─── rider ───────────────────────────────────────────────────────────────────
def rider(pose, parent):
    """Armoured rider: skin-modifier body, plates, helmet with visor, neon seam lines."""
    J = {k: Vector(v) for k, v in pose.items()}  # (x, f, z)
    W = lambda v: P(*v)
    names = ['pelvis', 'chest', 'neck', 'shL', 'elL', 'haL', 'shR', 'elR', 'haR', 'hipL', 'knL', 'ftL', 'hipR', 'knR', 'ftR']
    radii = {'pelvis': (0.17, 0.13), 'chest': (0.21, 0.155), 'neck': (0.07, 0.07), 'shL': (0.092, 0.092), 'shR': (0.092, 0.092),
             'elL': (0.07, 0.07), 'elR': (0.07, 0.07), 'haL': (0.056, 0.056), 'haR': (0.056, 0.056),
             'hipL': (0.1, 0.1), 'hipR': (0.1, 0.1), 'knL': (0.082, 0.082), 'knR': (0.082, 0.082), 'ftL': (0.062, 0.062), 'ftR': (0.062, 0.062)}
    edges = [('pelvis', 'chest'), ('chest', 'neck'), ('chest', 'shL'), ('shL', 'elL'), ('elL', 'haL'), ('chest', 'shR'), ('shR', 'elR'), ('elR', 'haR'),
             ('pelvis', 'hipL'), ('hipL', 'knL'), ('knL', 'ftL'), ('pelvis', 'hipR'), ('hipR', 'knR'), ('knR', 'ftR')]
    bm = bmesh.new()
    vs = {n: bm.verts.new(W(J[n])) for n in names}
    for a, b in edges:
        bm.edges.new((vs[a], vs[b]))
    me = bpy.data.meshes.new('rider_body')
    bm.to_mesh(me)
    bm.free()
    body = link(bpy.data.objects.new('rider_body', me), parent)
    me.materials.append(MATS['SUIT'])
    sk = body.modifiers.new('skin', 'SKIN')
    sk.use_smooth_shade = True
    for i, n in enumerate(names):
        d = me.skin_vertices[0].data[i]
        d.radius = radii[n]
        d.use_root = n == 'pelvis'
    ss = body.modifiers.new('sub', 'SUBSURF')
    ss.levels = ss.render_levels = 2 if DETAIL > 1 else 1

    def off(a, b, t, side_vec, amt):
        p = J[a].lerp(J[b], t)
        return W(p + side_vec * amt)

    up = Vector((0, 0, 1))
    # armour: chest plate, back plate, shoulder pads, knee pads, gloves, boots
    ch, pe = J['chest'], J['pelvis']
    spine = (ch - pe).normalized()
    fwd = Vector((0, 1, 0))
    nrm = (fwd - spine * fwd.dot(spine)).normalized()
    plate = []
    for t, wdt in ((0.2, 0.2), (0.55, 0.26), (0.95, 0.27)):
        c = pe.lerp(ch, t) + nrm * (0.105 + 0.03 * t)
        ring = []
        for (dx, dn) in ((wdt / 2, -0.03), (wdt / 2 - 0.03, 0.01), (-wdt / 2 + 0.03, 0.01), (-wdt / 2, -0.03), (-wdt / 2 + 0.02, -0.06), (wdt / 2 - 0.02, -0.06)):
            ring.append(tuple(c + Vector((dx, 0, 0)) + nrm * dn))
        plate.append(ring)
    loft3('rider_chestplate', plate, 'ARMOR', parent, width=0.008)
    back = []
    for t, wdt in ((0.3, 0.22), (0.95, 0.3)):
        c = pe.lerp(ch, t) - nrm * 0.11
        back.append([tuple(c + Vector((dx, 0, 0)) - nrm * dn) for (dx, dn) in ((wdt / 2, -0.02), (-wdt / 2, -0.02), (-wdt / 2 + 0.02, 0.04), (wdt / 2 - 0.02, 0.04))])
    loft3('rider_backplate', back, 'ARMOR', parent, width=0.008)
    for s in ('L', 'R'):
        sx = 1 if s == 'R' else -1
        sphere('rider_pad' + s, W(J['sh' + s] + Vector((sx * 0.025, 0, 0.035))), 0.118, 'ARMOR', parent, scale=(1.05, 1.0, 0.75), band=lambda v: v.z > -0.1)
        sphere('rider_knee' + s, W(J['kn' + s] + Vector((0, 0.035, 0.02))), 0.092, 'ARMOR', parent, scale=(0.9, 1.0, 1.0), band=lambda v: v.y > -0.25)
        sphere('rider_glove' + s, W(J['ha' + s]), 0.07, 'ARMOR', parent, scale=(1.0, 1.25, 0.85))
        ft = J['ft' + s]
        box('rider_boot' + s, W(ft + Vector((0, 0.06, -0.01))), (0.13, 0.27, 0.13), 'ARMOR', parent)
        # forearm guards
        ea, ha = J['el' + s], J['ha' + s]
        cyl('rider_bracer' + s, W(ea.lerp(ha, 0.2)), W(ea.lerp(ha, 0.75)), 0.074, 'ARMOR', parent, r2=0.064)
        # neon seams: arm and leg outer lines, glove cuff ring
        out = Vector((sx, 0, 0))
        tube('rider_armglow' + s, [off('sh' + s, 'el' + s, 0.2, (out + up * 0.4).normalized(), 0.088), off('sh' + s, 'el' + s, 0.9, (out + up * 0.3).normalized(), 0.072), off('el' + s, 'ha' + s, 0.22, (out + up * 0.3).normalized(), 0.078), off('el' + s, 'ha' + s, 0.72, (out + up * 0.3).normalized(), 0.068)], 0.009, 'SUITGLOW', parent)
        tube('rider_legglow' + s, [off('hip' + s, 'kn' + s, 0.1, out, 0.102), off('hip' + s, 'kn' + s, 0.85, out, 0.086), off('kn' + s, 'ft' + s, 0.2, out, 0.08), off('kn' + s, 'ft' + s, 0.85, out, 0.066)], 0.009, 'SUITGLOW', parent)
        tube('rider_padglow' + s, [W(J['sh' + s] + Vector((sx * 0.025, 0, 0.035)) + Vector((cos(a) * 0.124, sin(a) * 0.118, -0.005))) for a in [k * pi / 8 for k in range(17)]], 0.007, 'SUITGLOW', parent, smooth=False)
        tube('rider_cuff' + s, [W(ha.lerp(ea, 0.22) + Matrix.Rotation(a, 3, (ha - ea).normalized()) @ ((ha - ea).cross(up).normalized() * 0.066)) for a in [k * pi / 6 for k in range(13)]], 0.006, 'SUITGLOW', parent, smooth=False)
    # chest V and spine line
    cp = [plate[0], plate[1], plate[2]]
    tube('rider_chestglowL', [W(Vector(cp[2][2]) + nrm * 0.012), W(Vector(cp[1][2]) * 0.5 + Vector(cp[1][1]) * 0.5 + nrm * 0.012), W(pe.lerp(ch, 0.2) + nrm * 0.14)], 0.008, 'SUITGLOW', parent)
    tube('rider_chestglowR', [W(Vector(cp[2][1]) + nrm * 0.012), W(Vector(cp[1][1]) * 0.5 + Vector(cp[1][2]) * 0.5 + nrm * 0.012), W(pe.lerp(ch, 0.2) + nrm * 0.14)], 0.008, 'SUITGLOW', parent)
    tube('rider_spine', [W(pe.lerp(ch, t) - nrm * (0.16 + 0.02 * t)) for t in (0.25, 0.6, 1.0)], 0.009, 'SUITGLOW', parent)
    # helmet
    hd = J['head']
    hdir = Vector(pose.get('look', (0, 1, -0.15))).normalized()
    sphere('rider_helmet', W(hd), 0.178, 'HELMET', parent, scale=(0.93, 1.12, 1.0))
    ang = math.atan2(hdir.z, hdir.y)
    visor = sphere('rider_visor', W(hd), 0.185, 'VISOR', parent, scale=(0.94, 1.13, 1.01),
                   band=lambda v: (v.y * cos(-ang) - v.z * sin(-ang)) < -0.35 and -0.38 < (v.y * sin(-ang) + v.z * cos(-ang)) < 0.42)
    # chin guard + helmet crest + visor outline
    box('rider_chin', W(hd + hdir * 0.15 + Vector((0, 0, -0.1))), (0.14, 0.08, 0.06), 'HELMET', parent)
    crest = [W(hd + Vector((0, 0.2 * cos(a) * 1.12, 0.183 * sin(a)))) for a in [radians(d) for d in range(40, 181, 20)]]
    tube('rider_crest', crest, 0.01, 'SUITGLOW', parent)
    ring = [W(hd + Vector((sin(a) * 0.172, cos(a) * 0.204, -0.035))) for a in [radians(d) for d in range(70, 291, 15)]]
    tube('rider_helmring', ring, 0.008, 'SUITGLOW', parent)
    return body


# ─── vehicles ────────────────────────────────────────────────────────────────
def kart(root):
    # floor pan
    pan = [(f, octo(1.02, 0.09, 0.19, 0.04)) for f in (-1.25, 1.2)]
    loft('kart_pan', pan, 'BODY_DARK', root)
    # nose: long wedge with sharp character lines
    nose = [(0.2, octo(0.98, 0.14, 0.5, 0.11, 0.66, 0.06)), (0.7, octo(0.86, 0.13, 0.42, 0.1, 0.55, 0.05)),
            (1.2, octo(0.62, 0.12, 0.31, 0.08, 0.38, 0.04)), (1.55, octo(0.4, 0.13, 0.22, 0.05, 0.22, 0.03))]
    loft('kart_nose', nose, 'BODY', root)
    for i in (2, 5):
        tube(f'kart_nosetrim{i}', trim_line(nose, i), 0.012, 'TRIM', root)
    for i in (3, 4):
        tube(f'kart_noseridge{i}', trim_line(nose[:3], i, 0.008), 0.008, 'TRIM', root)
    # front wing + endplates
    wing = [(1.38, octo(1.86, 0.08, 0.15, 0.03)), (1.7, octo(1.7, 0.09, 0.12, 0.02))]
    loft('kart_fwing', wing, 'BODY', root)
    tube('kart_fwingtrim', [P(-0.86, 1.71, 0.125), P(0, 1.73, 0.125), P(0.86, 1.71, 0.125)], 0.01, 'TRIM', root, smooth=False)
    for s in (-1, 1):
        box(f'kart_endplate{s}', P(s * 0.93, 1.5, 0.17), (0.04, 0.42, 0.2), 'BODY_DARK', root)
    # side pods with intake mouths
    for s in (-1, 1):
        pod = [(-0.72, octo(0.5, 0.12, 0.5, 0.09, 0.4, 0.04, s * 0.64)), (0.0, octo(0.54, 0.12, 0.47, 0.09, 0.42, 0.04, s * 0.64)), (0.5, octo(0.42, 0.13, 0.32, 0.07, 0.3, 0.04, s * 0.6))]
        loft(f'kart_pod{s}', pod, 'BODY', root)
        tube(f'kart_podtrim{s}', trim_line(pod, 2 if s > 0 else 5), 0.011, 'TRIM', root)
        tube(f'kart_podlow{s}', trim_line(pod, 1 if s > 0 else 6, 0.006), 0.008, 'TRIM', root)
        box(f'kart_intake{s}', P(s * 0.6, 0.51, 0.22), (0.28, 0.03, 0.11), 'BODY_DARK', root)
    # cockpit rim + seat
    loft('kart_seat', [(-0.62, octo(0.5, 0.18, 0.62, 0.08, 0.46)), (-0.35, octo(0.48, 0.18, 0.32, 0.05)), (-0.05, octo(0.44, 0.18, 0.28, 0.04))], 'SEAT', root)
    # engine block + intake cowl
    eng = [(-1.15, octo(0.74, 0.14, 0.52, 0.1, 0.5, 0.05)), (-0.62, octo(0.86, 0.14, 0.68, 0.12, 0.5, 0.05))]
    loft('kart_engine', eng, 'BODY', root)
    for i in (2, 5):
        tube(f'kart_engtrim{i}', trim_line(eng, i), 0.011, 'TRIM', root)
    cowl = [(-1.0, octo(0.26, 0.6, 0.72, 0.05, 0.2)), (-0.55, octo(0.3, 0.6, 0.86, 0.06, 0.22))]
    loft('kart_cowl', cowl, 'BODY_DARK', root)
    tube('kart_cowltrim', trim_line(cowl, 3, 0.006), 0.008, 'TRIM', root)
    # rear wing on twin struts
    rw = [(-1.62, octo(1.7, 0.84, 0.9, 0.025)), (-1.32, octo(1.7, 0.86, 0.95, 0.03))]
    loft('kart_rwing', rw, 'BODY', root)
    tube('kart_rwingtrim', [P(-0.84, -1.63, 0.875), P(0, -1.64, 0.875), P(0.84, -1.63, 0.875)], 0.012, 'TRIM', root, smooth=False)
    for s in (-1, 1):
        box(f'kart_strut{s}', P(s * 0.32, -1.38, 0.68), (0.05, 0.12, 0.42), 'METAL', root)
        box(f'kart_rplate{s}', P(s * 0.86, -1.47, 0.86), (0.035, 0.42, 0.26), 'BODY_DARK', root)
    # twin exhausts with glowing throats
    for k, s in enumerate((-1, 1)):
        a, b = P(s * 0.36, -0.9, 0.5), P(s * 0.5, -1.5, 0.74)
        cyl(f'kart_exhaust{s}', a, b, 0.07, 'METAL', root, r2=0.095)
        cyl(f'kart_exhaustin{s}', b + (a - b).normalized() * 0.02, b + (b - a).normalized() * 0.005, 0.08, 'EXHAUST', root, finish=False)
        tube(f'kart_exhaustring{s}', [b + Matrix.Rotation(k * pi / 8, 3, (b - a).normalized()) @ ((b - a).cross(Vector((0, 0, 1))).normalized() * 0.1) for k in range(17)], 0.008, 'TRIM', root, smooth=False)
        fx = empty(f'FX_EXHAUST_{k}', b + (b - a).normalized() * 0.03, root)
        fx.rotation_euler = (b - a).normalized().to_track_quat('Y', 'Z').to_euler()
    # steering wheel + column
    sw = empty('kart_wheelmount', P(0, 0.28, 0.62), root)
    sw.rotation_euler = (radians(-55), 0, 0)
    torus_x('kart_steer', 0, 0.15, 0.022, 'BODY_DARK', sw, segs=32 if DETAIL > 1 else 12)
    sw.rotation_euler = (radians(-55), 0, radians(90))
    cyl('kart_column', P(0, 0.28, 0.6), P(0, 0.75, 0.28), 0.025, 'METAL', root)
    # headlights + tail lights
    for s in (-1, 1):
        box(f'kart_head{s}', P(s * 0.13, 1.56, 0.19), (0.1, 0.02, 0.035), 'LIGHT', root, finish=False)
        box(f'kart_tail{s}', P(s * 0.3, -1.16, 0.42), (0.14, 0.02, 0.05), 'TRIM', root, finish=False)
        empty(f'FX_TAIL_{(s + 1) // 2}', P(s * 0.55, -1.6, 0.6), root)
    # rear suspension coils
    if DETAIL > 1:
        for s in (-1, 1):
            helix(f'kart_spring{s}', P(s * 0.48, -0.95, 0.2), P(s * 0.72, -0.95, 0.5), 0.05, 6, 0.008, 'TRIM', root)
            cyl(f'kart_damper{s}', P(s * 0.48, -0.95, 0.2), P(s * 0.72, -0.95, 0.5), 0.022, 'METAL', root)
    wheel('FL', -0.92, 1.0, 0.36, 0.36, 0.32, -1, 'kart', root)
    wheel('FR', 0.92, 1.0, 0.36, 0.36, 0.32, 1, 'kart', root)
    wheel('RL', -0.98, -0.95, 0.43, 0.43, 0.42, -1, 'kart', root)
    wheel('RR', 0.98, -0.95, 0.43, 0.43, 0.42, 1, 'kart', root)
    rider({'pelvis': (0, -0.36, 0.36), 'chest': (0, -0.24, 0.78), 'neck': (0, -0.2, 0.92), 'head': (0, -0.17, 1.08), 'look': (0, 1, -0.1),
           'shL': (-0.2, -0.22, 0.86), 'elL': (-0.27, 0.0, 0.66), 'haL': (-0.14, 0.26, 0.66),
           'shR': (0.2, -0.22, 0.86), 'elR': (0.27, 0.0, 0.66), 'haR': (0.14, 0.26, 0.66),
           'hipL': (-0.12, -0.3, 0.34), 'knL': (-0.17, 0.2, 0.46), 'ftL': (-0.14, 0.72, 0.26),
           'hipR': (0.12, -0.3, 0.34), 'knR': (0.17, 0.2, 0.46), 'ftR': (0.14, 0.72, 0.26)}, root)


def quad(root):
    core = [(-0.9, octo(0.6, 0.42, 0.74, 0.08)), (0.95, octo(0.6, 0.45, 0.72, 0.08))]
    loft('quad_core', core, 'BODY_DARK', root)
    cowl = [(0.3, octo(1.02, 0.58, 1.0, 0.14, 0.8, 0.08)), (0.8, octo(0.98, 0.56, 0.92, 0.13, 0.74, 0.08)), (1.18, octo(0.82, 0.6, 0.78, 0.09, 0.6, 0.06))]
    loft('quad_cowl', cowl, 'BODY', root)
    for i in (2, 5, 3, 4):
        tube(f'quad_cowltrim{i}', trim_line(cowl, i), 0.012 if i in (2, 5) else 0.009, 'TRIM', root)
    # fenders: arched plates over each wheel
    for (fx, sx, R) in ((0.85, -1, 0.5), (0.85, 1, 0.5), (-0.85, -1, 0.5), (-0.85, 1, 0.5)):
        secs = []
        for k in range(9 if DETAIL > 1 else 5):
            a = radians(20 + 140 * k / (8 if DETAIL > 1 else 4))
            ff, zz = fx + cos(a) * (R + 0.1), 0.5 + sin(a) * (R + 0.08)
            secs.append([(sx * 0.74, ff, zz), (sx * 1.17, ff, zz), (sx * 1.17, ff + cos(a) * 0.04, zz + sin(a) * 0.04), (sx * 0.74, ff + cos(a) * 0.04, zz + sin(a) * 0.04)])
        loft3(f'quad_fender{fx}{sx}', secs, 'BODY', root)
        tube(f'quad_fendertrim{fx}{sx}', [P(sx * 1.18, fx + cos(radians(20 + 140 * k / 10)) * (R + 0.13), 0.5 + sin(radians(20 + 140 * k / 10)) * (R + 0.11)) for k in range(11)], 0.011, 'TRIM', root)
    # seat + tank
    loft('quad_seat', [(-0.6, octo(0.46, 0.74, 0.88, 0.06, 0.4)), (0.0, octo(0.5, 0.74, 0.9, 0.07, 0.44)), (0.35, octo(0.42, 0.74, 0.94, 0.07, 0.34))], 'SEAT', root)
    tank = [(0.2, octo(0.56, 0.72, 1.02, 0.1, 0.44)), (0.55, octo(0.6, 0.72, 1.06, 0.11, 0.46))]
    loft('quad_tank', tank, 'BODY', root)
    tube('quad_tanktrim', trim_line(tank, 3, 0.006) + [], 0.008, 'TRIM', root)
    # rear armour rack
    rack = [(-1.18, octo(1.0, 0.66, 0.98, 0.1, 0.9)), (-0.6, octo(1.04, 0.66, 0.92, 0.1, 0.94))]
    loft('quad_rack', rack, 'BODY', root)
    for i in (2, 5):
        tube(f'quad_racktrim{i}', trim_line(rack, i), 0.012, 'TRIM', root)
    # bull bar + headlights
    tube('quad_bullbar', [P(-0.5, 1.2, 0.45), P(-0.52, 1.36, 0.6), P(0, 1.42, 0.66), P(0.52, 1.36, 0.6), P(0.5, 1.2, 0.45)], 0.035, 'METAL', root)
    tube('quad_bullglow', [P(-0.45, 1.39, 0.64), P(0, 1.45, 0.69), P(0.45, 1.39, 0.64)], 0.012, 'TRIM', root)
    for s in (-1, 1):
        box(f'quad_head{s}', P(s * 0.22, 1.19, 0.72), (0.18, 0.03, 0.07), 'LIGHT', root, finish=False)
        box(f'quad_tail{s}', P(s * 0.4, -1.19, 0.86), (0.16, 0.02, 0.05), 'TRIM', root, finish=False)
        empty(f'FX_TAIL_{(s + 1) // 2}', P(s * 0.6, -1.25, 0.7), root)
    # handlebar
    tube('quad_bars', [P(-0.45, 0.48, 1.08), P(-0.2, 0.52, 1.1), P(0.2, 0.52, 1.1), P(0.45, 0.48, 1.08)], 0.022, 'METAL', root)
    cyl('quad_riser', P(0, 0.52, 1.08), P(0, 0.45, 0.9), 0.03, 'METAL', root)
    for s in (-1, 1):
        cyl(f'quad_grip{s}', P(s * 0.38, 0.49, 1.08), P(s * 0.5, 0.47, 1.08), 0.03, 'SEAT', root)
        box(f'quad_peg{s}', P(s * 0.5, 0.0, 0.42), (0.14, 0.22, 0.04), 'METAL', root)
    # exhaust
    a, b = P(0.32, -0.7, 0.55), P(0.42, -1.25, 0.7)
    cyl('quad_exhaust', a, b, 0.065, 'METAL', root, r2=0.08)
    cyl('quad_exhaustin', b + (a - b).normalized() * 0.02, b + (b - a).normalized() * 0.005, 0.068, 'EXHAUST', root, finish=False)
    fx = empty('FX_EXHAUST_0', b + (b - a).normalized() * 0.03, root)
    fx.rotation_euler = (b - a).normalized().to_track_quat('Y', 'Z').to_euler()
    if DETAIL > 1:
        for (fx2, s) in ((0.85, -1), (0.85, 1), (-0.85, -1), (-0.85, 1)):
            helix(f'quad_spring{fx2}{s}', P(s * 0.4, fx2 * 0.8, 0.45), P(s * 0.72, fx2, 0.68), 0.055, 6, 0.009, 'TRIM', root)
    for nm, x, f in (('FL', -0.95, 0.85), ('FR', 0.95, 0.85), ('RL', -0.95, -0.85), ('RR', 0.95, -0.85)):
        wheel(nm, x, f, 0.5, 0.5, 0.45, -1 if x < 0 else 1, 'quad', root)
    rider({'pelvis': (0, -0.32, 0.98), 'chest': (0, -0.16, 1.38), 'neck': (0, -0.12, 1.52), 'head': (0, -0.08, 1.68), 'look': (0, 1, -0.2),
           'shL': (-0.21, -0.14, 1.45), 'elL': (-0.34, 0.15, 1.24), 'haL': (-0.42, 0.47, 1.12),
           'shR': (0.21, -0.14, 1.45), 'elR': (0.34, 0.15, 1.24), 'haR': (0.42, 0.47, 1.12),
           'hipL': (-0.13, -0.28, 0.95), 'knL': (-0.3, 0.12, 0.92), 'ftL': (-0.48, 0.0, 0.48),
           'hipR': (0.13, -0.28, 0.95), 'knR': (0.3, 0.12, 0.92), 'ftR': (0.48, 0.0, 0.48)}, root)


def bike(root):
    # main fairing: twin-spar sport body, narrow and tall, with a raked nose
    body = [(-0.45, octo(0.36, 0.5, 0.98, 0.08, 0.28, 0.06)), (0.15, octo(0.5, 0.46, 1.08, 0.1, 0.34, 0.08)),
            (0.7, octo(0.46, 0.5, 1.02, 0.1, 0.3, 0.07)), (1.12, octo(0.3, 0.62, 0.9, 0.06, 0.18, 0.05))]
    loft('bike_body', body, 'BODY', root)
    for i in (2, 5, 1, 6):
        tube(f'bike_bodytrim{i}', trim_line(body, i), 0.011 if i in (2, 5) else 0.008, 'TRIM', root)
    # windscreen
    loft3('bike_screen', [[(-0.13, 0.7, 1.04), (0.13, 0.7, 1.04), (0.12, 0.7, 1.06), (-0.12, 0.7, 1.06)],
                          [(-0.1, 1.0, 1.0), (0.1, 1.0, 1.0), (0.09, 1.0, 1.02), (-0.09, 1.0, 1.02)],
                          [(-0.05, 1.12, 0.92), (0.05, 1.12, 0.92), (0.04, 1.12, 0.94), (-0.04, 1.12, 0.94)]], 'GLASS', root)
    # engine block + belly pan
    loft('bike_engine', [(-0.35, octo(0.42, 0.3, 0.62, 0.08)), (0.4, octo(0.44, 0.28, 0.6, 0.08))], 'BODY_DARK', root)
    belly = [(-0.3, octo(0.38, 0.24, 0.34, 0.04)), (0.55, octo(0.34, 0.28, 0.4, 0.04))]
    loft('bike_belly', belly, 'BODY', root)
    tube('bike_bellytrim', trim_line(belly, 1, 0.006), 0.007, 'TRIM', root)
    tube('bike_bellytrim2', trim_line(belly, 6, 0.006), 0.007, 'TRIM', root)
    # tail section
    tail = [(-0.4, octo(0.32, 0.86, 1.02, 0.06, 0.26)), (-0.85, octo(0.24, 0.9, 1.06, 0.05, 0.18)), (-1.12, octo(0.12, 0.94, 1.08, 0.03, 0.08))]
    loft('bike_tail', tail, 'BODY', root)
    for i in (2, 5):
        tube(f'bike_tailtrim{i}', trim_line(tail, i), 0.009, 'TRIM', root)
    box('bike_taillight', P(0, -1.13, 1.0), (0.1, 0.02, 0.05), 'TRIM', root, finish=False)
    empty('FX_TAIL_0', P(0, -1.2, 0.98), root)
    # seat
    loft('bike_seat', [(-0.75, octo(0.22, 0.98, 1.06, 0.04)), (-0.25, octo(0.3, 0.96, 1.06, 0.05))], 'SEAT', root)
    # front forks, clip-ons, headlights, fender
    for s in (-1, 1):
        cyl(f'bike_fork{s}', P(s * 0.11, 0.98, 1.0), P(s * 0.11, 1.18, 0.5), 0.032, 'METAL', root)
        cyl(f'bike_forkglow{s}', P(s * 0.145, 1.06, 0.8), P(s * 0.145, 1.15, 0.57), 0.008, 'TRIM', root, finish=False)
        cyl(f'bike_clipon{s}', P(s * 0.12, 0.82, 1.03), P(s * 0.3, 0.76, 1.02), 0.018, 'METAL', root)
        box(f'bike_head{s}', P(s * 0.07, 1.14, 0.82), (0.07, 0.03, 0.03), 'LIGHT', root, finish=False, rot=Matrix.Rotation(radians(s * 10), 3, 'Z'))
    fend = []
    for k in range(7 if DETAIL > 1 else 4):
        a = radians(40 + 100 * k / (6 if DETAIL > 1 else 3))
        ff, zz = 1.18 + cos(a) * 0.6, 0.5 + sin(a) * 0.58
        fend.append([(-0.1, ff, zz), (0.1, ff, zz), (0.1, ff + cos(a) * 0.03, zz + sin(a) * 0.03), (-0.1, ff + cos(a) * 0.03, zz + sin(a) * 0.03)])
    loft3('bike_fender', fend, 'BODY', root)
    # swingarm (both sides) + exhaust
    for s in (-1, 1):
        loft3(f'bike_swing{s}', [[(s * 0.12 + dx, -0.25, 0.5 + dz) for dx, dz in ((-0.025, -0.05), (0.025, -0.05), (0.025, 0.05), (-0.025, 0.05))],
                                 [(s * 0.15 + dx, -1.1, 0.52 + dz) for dx, dz in ((-0.02, -0.035), (0.02, -0.035), (0.02, 0.035), (-0.02, 0.035))]], 'BODY_DARK', root)
        tube(f'bike_swingglow{s}', [P(s * 0.15, -0.3, 0.56), P(s * 0.175, -1.05, 0.56)], 0.007, 'TRIM', root, smooth=False)
    a, b = P(0.12, -0.2, 0.35), P(0.2, -1.0, 0.82)
    cyl('bike_exhaust', a, b, 0.055, 'METAL', root, r2=0.07)
    cyl('bike_exhaustin', b + (a - b).normalized() * 0.02, b + (b - a).normalized() * 0.005, 0.058, 'EXHAUST', root, finish=False)
    fx = empty('FX_EXHAUST_0', b + (b - a).normalized() * 0.03, root)
    fx.rotation_euler = (b - a).normalized().to_track_quat('Y', 'Z').to_euler()
    wheel('F', 0, 1.18, 0.5, 0.5, 0.2, 1, 'bike', root)
    wheel('R', 0, -1.1, 0.52, 0.52, 0.27, 1, 'bike', root)
    rider({'pelvis': (0, -0.5, 1.12), 'chest': (0, -0.05, 1.36), 'neck': (0, 0.07, 1.45), 'head': (0, 0.2, 1.52), 'look': (0, 1, -0.05),
           'shL': (-0.19, 0.0, 1.42), 'elL': (-0.3, 0.32, 1.2), 'haL': (-0.27, 0.74, 1.04),
           'shR': (0.19, 0.0, 1.42), 'elR': (0.3, 0.32, 1.2), 'haR': (0.27, 0.74, 1.04),
           'hipL': (-0.13, -0.46, 1.08), 'knL': (-0.26, -0.05, 0.86), 'ftL': (-0.2, -0.45, 0.58),
           'hipR': (0.13, -0.46, 1.08), 'knR': (0.26, -0.05, 0.86), 'ftR': (0.2, -0.45, 0.58)}, root)


# ─── bake + export ───────────────────────────────────────────────────────────
def realize():
    """Apply every modifier / convert curves → plain meshes (so baking and export see final geometry)."""
    dg = bpy.context.evaluated_depsgraph_get()
    for o in list(COL.all_objects):
        if o.type not in ('MESH', 'CURVE'):
            continue
        ev = o.evaluated_get(dg)
        me = bpy.data.meshes.new_from_object(ev, preserve_all_data_layers=False, depsgraph=dg)
        n = bpy.data.objects.new(o.name, me)
        n.matrix_world = o.matrix_world.copy()
        COL.objects.link(n)
        n.parent = o.parent
        n.matrix_parent_inverse = o.matrix_parent_inverse.copy()
        n.matrix_basis = o.matrix_basis.copy()
        for ch in list(o.children):
            ch.parent = n
        bpy.data.objects.remove(o)
        n.name = n.name.split('.')[0] if n.name.endswith('.001') else n.name


def bake_ao(samples):
    sc = bpy.context.scene
    sc.render.engine = 'CYCLES'
    sc.cycles.device = 'CPU'
    sc.cycles.samples = samples
    sc.world = sc.world or bpy.data.worlds.new('w')
    targets = []
    for o in COL.all_objects:
        if o.type != 'MESH' or not o.data.polygons:
            continue
        mat = o.data.materials[0].name if o.data.materials else ''
        if mat in EMISSIVE:
            continue
        o.data.color_attributes.new('AO', 'BYTE_COLOR', 'CORNER')
        o.data.color_attributes.active_color = o.data.color_attributes['AO']
        targets.append(o)
    for o in COL.all_objects:
        o.select_set(False)
    for o in targets:
        o.select_set(True)
    bpy.context.view_layer.objects.active = targets[0]
    sc.render.bake.target = 'VERTEX_COLORS'
    sc.cycles.bake_type = 'AO'
    sc.world.light_settings.distance = 0.35
    bpy.ops.object.bake(type='AO', target='VERTEX_COLORS')
    return len(targets)


def join_by_material():
    """Merge meshes sharing (parent, material) — wheels stay separate so they can spin/steer."""
    groups = {}
    for o in list(COL.all_objects):
        if o.type == 'MESH' and o.data.materials:
            groups.setdefault((o.parent.name if o.parent else '', o.data.materials[0].name), []).append(o)
    for (par, mat), objs in groups.items():
        for o in objs:  # ensure every member carries an AO layer (emissive ones get none → add white)
            if mat not in EMISSIVE and 'AO' not in o.data.color_attributes:
                a = o.data.color_attributes.new('AO', 'BYTE_COLOR', 'CORNER')
                for d in a.data: d.color = (1, 1, 1, 1)
        if len(objs) > 1:
            with bpy.context.temp_override(active_object=objs[0], selected_editable_objects=objs, object=objs[0]):
                bpy.ops.object.join()
        objs[0].name = f'{par}_{mat}' if par else mat


def stats():
    tris = 0
    for o in COL.all_objects:
        if o.type == 'MESH':
            tris += sum(len(p.vertices) - 2 for p in o.data.polygons)
    return tris


def build(cls, detail):
    global DETAIL
    DETAIL = detail
    reset()
    root = empty('VEHICLE_' + cls, (0, 0, 0))
    {'kart': kart, 'quad': quad, 'bike': bike}[cls](root)
    realize()
    n = bake_ao(48 if detail > 1 else 16)
    join_by_material()
    os.makedirs(OUT, exist_ok=True)
    path = os.path.join(OUT, f'{cls}_{"hi" if detail > 1 else "lo"}.raw.glb')
    bpy.ops.export_scene.gltf(filepath=path, export_format='GLB', export_apply=True, export_yup=True, export_normals=True,
                              export_materials='EXPORT', export_vertex_color='ACTIVE', export_all_vertex_colors=False,
                              export_image_format='NONE', export_attributes=False)
    final = path.replace('.raw.glb', '.glb')
    # meshopt-compress (keep named nodes/materials: wheels, FX anchors and the material contract)
    import subprocess
    gp = os.path.join(os.path.dirname(__file__), '..', '..', 'node_modules', '.bin', 'gltfpack')
    subprocess.run([gp, '-i', path, '-o', final, '-kn', '-km', '-cc', '-vp', '14', '-vn', '10'], check=True, stdout=subprocess.DEVNULL)
    os.remove(path)
    meshes = sum(1 for o in COL.all_objects if o.type == 'MESH')
    print(f'{cls:5s} detail {detail}: {stats():6d} tris, {meshes} meshes ({n} AO-baked) → {os.path.basename(final)} {os.path.getsize(final) // 1024} KB', flush=True)


if __name__ == '__main__':
    which = os.environ.get('ONLY', 'kart,quad,bike').split(',')
    levels = [int(x) for x in os.environ.get('LEVELS', '2,1').split(',')]
    for c in which:
        for d in levels:
            build(c, d)
