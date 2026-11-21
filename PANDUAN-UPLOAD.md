# Membuat Repository GitHub Baru — Linux Pelajar Edition 1.0

## Membuat repository online

1. Masuk ke https://github.com/new menggunakan akun `ekallngoding`.
2. Repository name: **Linux-Pelajar-Edition-1.0**.
3. Pilih **Public** jika memang diminta dapat diakses penguji.
4. **Jangan** centang penambahan README, `.gitignore`, atau lisensi otomatis (semuanya ditangani pada paket ini).
5. Klik **Create repository**.

## Cara mudah: unggah lewat browser

1. Ekstrak arsip ZIP ini di komputer Windows.
2. Buka https://github.com/ekallngoding/Linux-Pelajar-Edition-1.0/upload/main .
3. Buka folder hasil ekstraksi `Linux-Pelajar-Edition-1.0`.
4. Seret **seluruh file dan folder di dalamnya** ke halaman unggah GitHub (bukan ZIP mentah).
5. Pilih commit langsung ke `main`, lalu klik **Commit changes**.
6. Buka halaman repository dan periksa `README.md`, `DAFTAR-PAKET.md`, folder `assets`, `configs`, `installer`, `plymouth`, dan `scripts`.

## Alternatif: terminal Git

Jalankan di dalam folder hasil ekstraksi (bukan direktori Cubic / custom-root):

```bash
git init -b main
git add .
git commit -m "Initial Linux Pelajar Edition 1.0 remastering files"
git remote add origin https://github.com/ekallngoding/Linux-Pelajar-Edition-1.0.git
git push -u origin main
```

Catatan: diperlukan autentikasi akun GitHub yang memiliki izin menulis repository, misalnya melalui Git Credential Manager atau GitHub CLI. GitHub tidak menerima kata sandi akun biasa untuk autentikasi HTTPS Git.

Jangan mengunggah ISO, seluruh `custom-root`, token akses, kata sandi, atau kunci privat.
