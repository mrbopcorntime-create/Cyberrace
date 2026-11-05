#!/usr/bin/env python3
"""Minimal zipalign: rewrites an APK so every STORED entry's data starts on a
4-byte boundary (required for resources.arsc on targetSdk >= 30).
Usage: zipalign.py in.apk out.apk"""
import struct, sys, zipfile

ALIGN = 4

def main(src, dst):
    zin = zipfile.ZipFile(src)
    with zipfile.ZipFile(dst, "w") as zout:
        for info in zin.infolist():
            data = zin.read(info.filename)
            ni = zipfile.ZipInfo(info.filename, date_time=(2008, 1, 1, 0, 0, 0))
            ni.compress_type = info.compress_type
            ni.external_attr = info.external_attr
            ni.create_system = 0
            if info.compress_type == zipfile.ZIP_STORED:
                offset = zout.fp.tell()
                name_len = len(info.filename.encode("utf-8"))
                base = offset + 30 + name_len
                # extra block header itself is 4 bytes + 2 bytes alignment value
                pad = (-(base + 6)) % ALIGN
                ni.extra = struct.pack("<HHH", 0xD935, 2 + pad, ALIGN) + b"\0" * pad
            zout.writestr(ni, data, compress_type=info.compress_type,
                          compresslevel=9 if info.compress_type == zipfile.ZIP_DEFLATED else None)
    # verify
    z = zipfile.ZipFile(dst)
    with open(dst, "rb") as f:
        for i in z.infolist():
            if i.compress_type != zipfile.ZIP_STORED:
                continue
            f.seek(i.header_offset)
            h = f.read(30)
            n, e = struct.unpack("<HH", h[26:30])
            start = i.header_offset + 30 + n + e
            assert start % ALIGN == 0, (i.filename, start)
    print("aligned", dst)

if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
