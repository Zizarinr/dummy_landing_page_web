# Landing Page Dummy — Program Studi Teknik Informatika

Landing page **dummy / template** untuk Program Studi Teknik Informatika.
Fokus saat ini: **desain, struktur, dan layout** — seluruh konten (teks, angka,
foto, tautan, data) adalah **placeholder** dan **bukan data resmi**.

Stack: **Vite + vanilla HTML/CSS/JavaScript**. Tanpa backend, tanpa database.

---

## 1. Cara Menjalankan

```bash
npm install
npm run dev       # development server (biasanya http://localhost:5173)
```

Build untuk produksi:

```bash
npm run build     # hasilnya di folder dist/
npm run preview   # menjalankan hasil build
```

---

## 2. Struktur Project

```text
index.html                 entry HTML (skip link, font, meta)
public/
  assets/images/           semua gambar placeholder (.png)
src/
  main.js                  merangkai section + navbar toggle + scroll reveal
  data/content.js          ★ SEMUA KONTEN DUMMY ADA DI SINI
  styles/
    variables.css          design token: warna, radius, container, font
    global.css             reset, layout utility, button, glass, reveal, a11y
  components/
    Navbar/  Hero/  Stats/  Features/  Programs/  Projects/
    StudentLife/  Achievements/  Testimonial/  CTA/  Footer/
    (setiap folder berisi .js untuk markup + .css untuk style)
dist/                      hasil build (generated, jangan diedit manual)
```

---

## 3. Cara Mengganti Teks / Data

Semua teks terpusat di **`src/data/content.js`**.
Cukup ubah isi objek `siteContent` — **layout dan CSS tidak perlu disentuh**.

```js
export const siteContent = {
  hero: {
    title: "Ganti judul di sini",
    description: "Ganti deskripsi di sini",
    // ...
  },
  stats: [
    { value: "15+", label: "Tahun Berdiri" },
    // ...
  ],
};
```

Konteks yang perlu diketahui:

- Setiap blok yang angka/datanya dummy sudah diberi komentar `// DUMMY`.
- `stats`, `achievements`, `testimonial` adalah **data dummy** — jangan
  tampilkan sebagai klaim resmi sebelum konten asli masuk.
- `navbar.links[].url` memakai anchor (`#tentang`, `#akademik`, ...) yang
  cocok dengan `id` section. Section baru tinggal diberi `id` lalu link-nya
  diarahkan ke sana.
- `hero.floatingCard.value` sengaja diisi `"XX%"` placeholder.

---

## 4. Cara Mengganti Gambar

1. Siapkan file gambar (format `.png` / `.webp` / `.jpg` asli).
2. Taruh di `public/assets/images/`.
3. Referensikan dari `content.js` dengan path **relatif tanpa garis miring
   di depan**:

```js
image: "assets/images/hero.png"    // ✅ benar (aman untuk sub-path deploy)
image: "/assets/images/hero.png"   // ❌ patah jika deploy ke sub-path
```

4. Perbarui `alt` yang ada di `content.js` (`imageAlt`, `imageMainAlt`, dll).
   *Catatan: file placeholder saat ini berekstensi `.png` — pastikan ekstensi
   sesuai isi filenya.*

Ukuran yang dipakai sekarang: 800×600. Rasio yang dipakai layout:
hero `4/5`, program `4/3`, project `16/10`.

---

## 5. Cara Mengganti Warna / Desain

Semua token ada di **`src/styles/variables.css`**:

```css
:root {
  --navy: #0B2341;        /* warna utama gelap */
  --blue: #2878E8;        /* aksen biru */
  --blue-light: #EAF3FF;
  --blue-soft: #F3F8FF;
  --surface: #F8FBFF;     /* background halaman */
  --text: #102A43;
  --text-muted: #6B7C93;
  --border: #DCE8F5;

  --radius-sm: 12px;      /* sudut card kecil */
  --radius-md: 20px;
  --radius-lg: 32px;

  --container: 1180px;    /* lebar kontainer */
  --font-family: 'Plus Jakarta Sans', sans-serif;
}
```

Ganti nilainya, seluruh halaman ikut menyesuaikan.

---

## 6. Catatan Teknis

- **Animasi scroll** (`fade-up`) ada di `main.js → initReveal()`, memakai
  `IntersectionObserver` dan otomatis mati jika user mengaktifkan
  *prefers-reduced-motion*.
- **Menu mobile** aktif di lebar ≤ 992px (tombol hamburger + panel).
- **Navbar** berubah menjadi glass/blur saat scroll (`navbar.is-scrolled`).
- Gambar di bawah fold memakai `loading="lazy"`; gambar hero diprioritaskan.
- Utility bersama (`.container`, `.section`, `.section-title`,
  `.text-center`, `.btn`, `.glass`) ada di `global.css` — jangan definisikan
  ulang di komponen.

---

## 7. Yang Belum / Menyusul

- Konten resmi prodi (nama, sejarah, visi-misi, dosen, kurikulum, berita,
  kontak, akun sosial) belum ada — semuanya masih placeholder.
- Foto masih placeholder grafis, bukan foto asli.
- Section **Berita** belum dibuat (link nav-nya masih `#`).
- Link `#` lainnya adalah placeholder sengaja, menunggu halaman/detail asli.
