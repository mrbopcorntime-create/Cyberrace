"""Cycles turntable stills of a built model (shape/style check). Usage: python preview.py <cls> <detail> <out_png>"""
import sys, os, math, bpy
sys.path.insert(0, os.path.dirname(__file__))
import build_models as B
from mathutils import Vector

cls, detail, out = sys.argv[1], int(sys.argv[2]), sys.argv[3]
B.DETAIL = detail
B.reset()
root = B.empty('VEHICLE_' + cls, (0, 0, 0))
{'kart': B.kart, 'quad': B.quad, 'bike': B.bike}[cls](root)
sc = bpy.context.scene
sc.render.engine = 'CYCLES'; sc.cycles.device = 'CPU'; sc.cycles.samples = int(os.environ.get('SAMPLES', 24)); sc.cycles.use_denoising = True
sc.render.resolution_x, sc.render.resolution_y = 960, 540
w = bpy.data.worlds.new('w'); sc.world = w; w.use_nodes = True
w.node_tree.nodes['Background'].inputs['Color'].default_value = (0.01, 0.02, 0.035, 1)
# glossy dark floor
bpy.ops.mesh.primitive_plane_add(size=40)
fl = bpy.context.object; m = bpy.data.materials.new('floor'); m.use_nodes = True
bs = m.node_tree.nodes['Principled BSDF']; bs.inputs['Base Color'].default_value = (0.02, 0.03, 0.04, 1); bs.inputs['Roughness'].default_value = 0.12; bs.inputs['Metallic'].default_value = 0.3
fl.data.materials.append(m)
for loc, energy, col, size in (((4, -4, 5), 900, (0.6, 0.85, 1), 4), ((-5, 3, 3), 500, (1, 0.5, 0.9), 3), ((0, 6, 2.5), 400, (1, 0.7, 0.4), 3)):
    L = bpy.data.lights.new('l', 'AREA'); L.energy = energy; L.color = col; L.size = size
    o = bpy.data.objects.new('l', L); o.location = loc; sc.collection.objects.link(o)
    o.rotation_euler = (Vector((0, 0, 0.6)) - Vector(loc)).to_track_quat('-Z', 'Y').to_euler()
cam = bpy.data.objects.new('cam', bpy.data.cameras.new('cam')); sc.collection.objects.link(cam); sc.camera = cam
cam.data.lens = 40
views = os.environ.get('VIEWS', 'front34,rear34,side').split(',')
pos = {'front34': (3.6, -4.4, 2.0), 'rear34': (-3.4, 4.6, 2.3), 'side': (5.4, 0.0, 1.2), 'top': (0.01, -0.5, 7)}
import subprocess
paths = []
for v in views:
    cam.location = pos[v]
    cam.rotation_euler = (Vector((0, 0, 0.62)) - cam.location).to_track_quat('-Z', 'Y').to_euler()
    sc.render.filepath = out.replace('.png', f'_{v}.png'); bpy.ops.render.render(write_still=True); paths.append(sc.render.filepath)
print('rendered', paths)
