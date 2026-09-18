# Portofolio — M. Rafael Al Ghazali

Website portofolio statis (HTML, CSS, JS murni) dengan dua bahasa (ID/EN).

## Menjalankan di lokal

```bash
python -m http.server 5500
```

Lalu buka http://localhost:5500.

## Mengganti aset

| File | Keterangan |
|---|---|
| `assets/img/paeng.jpg` | Foto utama di hero (rasio potret, wajah di bagian atas) |
| `assets/img/logo-sang-bamboo.png` | Logo UMKM Sang Bamboo |
| `assets/img/logo-cantuka.png` | Logo UMKM Cantuka Kreatif |
| `assets/cv/CV-Muhammad-Rafael-Al-Ghazali.pdf` | CV versi web (tanpa nomor HP) untuk tombol Download CV |

Selama file belum ada, website menampilkan placeholder otomatis.

## Mengubah teks

- Teks Bahasa Indonesia ada langsung di `index.html`.
- Terjemahan Bahasa Inggris ada di objek `EN` pada `js/main.js` (kuncinya sama dengan atribut `data-i18n`).

## Deploy

Import repo ini di Vercel sebagai proyek statis. Tidak perlu build command.

## Analytics pengunjung

Website memakai **Vercel Web Analytics** (tanpa cookie). Script-nya sudah terpasang di `index.html` dan hanya aktif di domain Vercel.

Setelah deploy: buka proyek di dashboard Vercel → tab **Analytics** → **Enable**, lalu redeploy sekali. Data pengunjung (jumlah kunjungan, halaman, negara, perangkat, sumber traffic) muncul di tab tersebut.
