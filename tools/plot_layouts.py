# Plot authored layouts dumped by tools/layouts.mjs:  python3 tools/plot_layouts.py layouts.json out.png
import json, sys, math
import matplotlib; matplotlib.use('Agg'); import matplotlib.pyplot as plt
d = json.load(open(sys.argv[1]))
fig, axs = plt.subplots(4, 6, figsize=(24, 16), facecolor='#0b0d14')
for ax, t in zip(axs.T.flat, d):
    ax.set_facecolor('#0b0d14'); ax.set_aspect('equal'); ax.axis('off')
    x, z, y = t['x'], t['z'], t['y']
    sc = ax.scatter(x, [-v for v in z], c=y, cmap='plasma', s=10 * 30 / 30, linewidths=0)
    ax.plot(x[0], -z[0], 'w*', ms=14)
    ax.annotate('', xy=(x[6], -z[6]), xytext=(x[0], -z[0]), arrowprops=dict(color='w', arrowstyle='->', lw=2))
    for a, b in t['ag']:
        i0, i1 = int(a / t['step']), int(b / t['step'])
        ax.plot([x[i % len(x)] for i in range(i0, i1)], [-z[i % len(z)] for i in range(i0, i1)], color='#ff3df0', lw=5, alpha=.6)
    for j in t['jumps']:
        i = int(j / t['step']) % len(x); ax.plot(x[i], -z[i], 'o', color='#ffd84d', ms=8)
    ax.set_title(f"{t['name']}  ({len(x) * t['step']:.0f} m)", color='w', fontsize=12)
    xs = max(x) - min(x); zs = max(z) - min(z); ax.text(min(x), -max(z) - 30, f'{xs:.0f}×{zs:.0f} m', color='#889', fontsize=9)
plt.tight_layout(); plt.savefig(sys.argv[2], dpi=55, facecolor='#0b0d14')
