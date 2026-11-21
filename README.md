# Linux Pelajar Edition 1.0

**Proyek remastering Kubuntu 26.04.1 menggunakan Cubic** untuk menghasilkan Linux Pelajar Edition 1.0, dengan fokus pada identitas dan penggunaan di lingkungan pendidikan.

> Repository ini adalah dokumentasi dan koleksi berkas yang dimodifikasi. Ini **bukan** seluruh kode sumber Kubuntu, tidak berisi ISO, dan bukan skrip otomatis untuk membangun ISO dari nol. Berkas dikumpulkan dari proyek remastering yang dikerjakan melalui Cubic.

## Teknologi

- **Kubuntu 26.04.1 / Ubuntu 26.04 LTS** — basis sistem operasi.
- **Cubic** — menyesuaikan filesystem dan membangun ISO.
- **KDE Plasma** — lingkungan desktop.
- **Plymouth** — tema dan skrip boot splash.
- **SDDM / AccountsService** — konfigurasi tampilan avatar pengguna.
- **Calamares** — installer sistem berbasis Kubuntu.
- **Qt 6 / CMake** — menyunting dan membangun ulang `kubuntu-installer-prompt`.
- **Shell Script / systemd** — konfigurasi otomatis avatar pengguna.

## Struktur

| Lokasi | Fungsi |
|---|---|
| `scripts/linux-pelajar-default-avatar` | Skrip pengaturan ikon akun setelah instalasi. |
| `configs/linux-pelajar-default-avatar.service` | Unit systemd untuk menjalankan skrip avatar. |
| `configs/90-linux-pelajar-avatar.conf` | Mengaktifkan avatar pada SDDM. |
| `configs/os-release`, `configs/issue` | Bukti perubahan identitas sistem. |
| `plymouth/` | Deskripsi tema, skrip animasi, logo. |
| `installer/` | `installerprompt.ui`, logo, dan background installer prompt. |
| `assets/` | Gambar avatar bawaan pengguna. |
| `DAFTAR-PAKET.md` | Bukti penambahan dan penghapusan paket dari riwayat APT. |
| `PANDUAN-UPLOAD.md` | Petunjuk membuat repository baru dan mengunggah isinya. |

## Perubahan paket

Berdasarkan riwayat APT tanggal **15 November 2026**:

- **7 paket aplikasi baru** terpasang secara langsung: `korganizer`, `kalarm`, `kwrite`, `kalgebra`, `kalzium`, `ktouch`, dan `kgeography`.
- **111 paket dependensi otomatis** ikut terpasang, sehingga total tercatat **118 paket baru**.
- **5 paket dihapus**: `ksudoku`, `kmines`, `kmahjongg`, `kpat`, dan `elisa`.

Perhatian: 118 **paket** tidak sama dengan 118 **aplikasi pendidikan**. Daftar selengkapnya ada di [`DAFTAR-PAKET.md`](DAFTAR-PAKET.md).

## Proses remastering

1. Menyiapkan ISO dasar Kubuntu dan membuat proyek Cubic.
2. Menambah paket yang mendukung kegiatan belajar dan menghapus paket yang dipilih.
3. Mengubah identitas sistem, logo, dan wallpaper.
4. Menyesuaikan Plymouth, SDDM, dan konfigurasi pengguna.
5. Memodifikasi antarmuka Qt pada `kubuntu-installer-prompt` dan mengompilasi ulang.
6. Memasukkan perubahan ke root filesystem dan membangun ISO baru melalui Cubic.
7. Menyalin ISO hasil build ke Windows dan memeriksa kecocokan checksum.

**Berkas hasil:** `linux-pelajar-edition-1.0-amd64.iso` (tidak disimpan di repository karena ukuran besar).

## Status pengujian

Pembuatan ISO berhasil dan hasil salinan ISO diverifikasi identik. Berjalannya seluruh detail tampilan Plymouth dan avatar otomatis untuk akun baru tetap perlu dikonfirmasi dengan instalasi dan boot pada mesin virtual.

## Catatan lisensi

Linux Pelajar Edition adalah karya remastering berbasis Kubuntu/Ubuntu dengan komponen dari berbagai proyek. Masing-masing komponen sumber tetap mengikuti lisensinya. Lisensi gambar asli perlu dikonfirmasi sebelum redistribusi lebih luas.
