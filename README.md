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
| `assets/cv/CV-Rafael.pdf` | CV. Setelah file ada, hapus atribut `hidden` pada tombol Download CV di `index.html` |

Selama file belum ada, website menampilkan placeholder otomatis.

## Mengubah teks

- Teks Bahasa Indonesia ada langsung di `index.html`.
- Terjemahan Bahasa Inggris ada di objek `EN` pada `js/main.js` (kuncinya sama dengan atribut `data-i18n`).

## Deploy

Import repo ini di Vercel sebagai proyek statis. Tidak perlu build command.
