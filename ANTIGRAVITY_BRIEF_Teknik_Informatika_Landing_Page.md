# TASK BRIEF — Landing Page Dummy Teknik Informatika

## 0. Peran untuk Antigravity

Kamu bertindak sebagai **frontend developer + UI implementer**.

Tugas utama:
- Membuat landing page dummy untuk **Program Studi Teknik Informatika**.
- Fokus utama saat ini adalah **DESAIN dan STRUKTUR**, bukan konten final.
- Konten resmi prodi belum diberikan, jadi seluruh teks, angka, foto, tautan, dan data harus dibuat **dummy dan mudah diganti**.
- Jangan mengarang data resmi universitas/prodi dan jangan membuat klaim yang seolah-olah nyata.
- Prioritaskan maintainability: ketika konten resmi datang, pengguna seharusnya cukup mengubah data/content tanpa membongkar layout dan CSS.

---

# 1. KONTEKS PROYEK

Saya sedang menyiapkan landing page untuk Program Studi Teknik Informatika.

Arah visual yang dipilih:
- modern dan clean
- banyak whitespace
- foto besar dengan rounded/organic shape
- layout editorial yang tidak terlalu simetris
- warna utama **navy + putih**, dengan aksen biru
- sedikit nuansa glassmorphism/liquid glass
- tetap terasa sebagai website institusi pendidikan, tetapi tidak kaku

Final visual direction:

> **Clean + Soft Glass + Organic Shape + Editorial**

Bukan desain yang penuh dekorasi.

---

# 2. ARAH VISUAL FINAL

Website harus terasa:

- modern
- clean
- profesional
- friendly
- sedikit fun
- youthful
- technology-oriented
- akademis tetapi tidak kaku
- premium tetapi tidak berlebihan

Bayangkan perpaduan:

**Modern university × technology × editorial website × subtle glassmorphism**

---

# 3. YANG HARUS DIHINDARI

Jangan membuat:
- website kampus yang terasa kuno
- terlalu banyak card
- terlalu banyak gradient
- terlalu banyak doodle/sketch
- terlalu banyak icon dekoratif
- neon cyberpunk
- hacker aesthetic
- glassmorphism berlebihan
- animasi berlebihan
- layout terlalu simetris/kaku
- warna terlalu ramai
- typography yang sulit dibaca
- section yang semuanya berbentuk card yang sama

### Sketch/doodle

Eksplorasi sebelumnya sempat menggunakan tulisan sketch/dekorasi handwritten. Setelah dievaluasi, elemen tersebut **DIHILANGKAN**.

Kalaupun nanti ada dekorasi tambahan, harus sangat minimal dan tidak mengganggu konten.

Untuk deployment, animasi harus seamless dan subtle.

---

# 4. COLOR SYSTEM

Gunakan CSS variables/design tokens.

Contoh awal:

```css
:root {
    --navy: #0B2341;
    --navy-dark: #071A30;

    --blue: #2878E8;
    --blue-light: #EAF3FF;
    --blue-soft: #F3F8FF;

    --white: #FFFFFF;
    --surface: #F8FBFF;

    --text: #102A43;
    --text-muted: #6B7C93;

    --border: #DCE8F5;

    --radius-sm: 12px;
    --radius-md: 20px;
    --radius-lg: 32px;

    --container: 1180px;
}
```

Nilai boleh disesuaikan selama hasil visual tetap berada pada arah **navy / white / soft blue**.

---

# 5. TYPOGRAPHY

Gunakan sans-serif modern dan mudah dibaca.

Prioritas:
- heading tegas
- body text ringan
- hierarchy jelas
- maksimal 1–2 font family

Pilihan:
- Inter
- Plus Jakarta Sans
- Manrope
- DM Sans

Heading boleh menggunakan weight 700–800.

Body menggunakan weight 400–500.

---

# 6. LAYOUT PRINCIPLES

Gunakan:
- whitespace besar
- max-width container sekitar 1180–1240px
- rounded corners
- thin border
- subtle shadow
- organic image crop
- asymmetric composition secukupnya
- section spacing konsisten

Contoh:

```css
.container {
    width: min(1180px, calc(100% - 40px));
    margin-inline: auto;
}
```

Jangan membuat setiap section terlihat seperti blok terpisah yang kaku.

Beberapa section boleh mengalir ke section berikutnya.

---

# 7. STRUKTUR LANDING PAGE

Landing page dummy terdiri dari:

1. Navbar
2. Hero
3. Statistics
4. Why Teknik Informatika?
5. Program / bidang keahlian
6. Student Projects
7. Student Life
8. Achievements
9. Testimonial
10. CTA
11. Footer

Tidak semua section harus penuh dengan konten.

Prioritas saat ini adalah mendapatkan **komposisi visual yang bagus**.

---

# 8. NAVBAR

Navbar:
- logo dummy
- nama "Teknik Informatika"
- subtext "Universitas ..."
- menu:
  - Beranda
  - Tentang
  - Akademik
  - Mahasiswa
  - Prestasi
  - Berita
- CTA "Daftar Sekarang"
- search icon optional

Navbar harus clean.

Desktop:
- horizontal navigation
- banyak whitespace

Mobile:
- hamburger menu

Saat scroll:
- boleh berubah menjadi semi-transparent / glass navbar
- backdrop blur
- border tipis

Jangan terlalu banyak efek.

---

# 9. HERO

Hero adalah bagian paling penting.

Kiri:
- eyebrow kecil:
  `PROGRAM STUDI TEKNIK INFORMATIKA`
- headline besar:
  `Teknologi Hari Ini, Peluang Esok.`
- deskripsi dummy
- CTA utama
- CTA sekunder / play profile

Kanan:
- foto dummy mahasiswa sedang coding
- image diberi organic rounded shape
- boleh menggunakan beberapa translucent blue shapes di belakangnya
- satu small glass card boleh digunakan sebagai dekorasi

Contoh:

```text
PROGRAM STUDI TEKNIK INFORMATIKA

Teknologi Hari Ini,
Peluang Esok.

Deskripsi dummy...

[ Kenali Program Studi → ]   [ ▶ Tonton Profil ]

                           ┌───────────────┐
                           │ FOTO MAHASISWA│
                           └───────────────┘
```

Jangan membuat hero terlalu penuh.

---

# 10. STATISTICS

Section kecil setelah hero.

Gunakan background soft blue / glass.

Contoh dummy:

```text
Dalam Angka

15+   Tahun Berdiri
500+  Mahasiswa Aktif
30+   Dosen & Praktisi
20+   Mitra Industri
```

**SEMUA ANGKA DI ATAS ADALAH DUMMY.**

Buat data terpusat agar mudah diganti.

---

# 11. WHY TEKNIK INFORMATIKA

Judul dummy:

`Bukan hanya belajar coding.`

Deskripsi singkat dummy.

Kemudian 4 item:
1. Software Engineering
2. Artificial Intelligence
3. Cyber Security
4. Data & Technology

Gunakan icon outline sederhana.

Layout:
- kiri = heading + description
- kanan = 4 feature items/cards

Card jangan terlalu berat.

---

# 12. PROGRAM / BIDANG KEAHLIAN

Section dengan nuansa soft glass.

Judul dummy:

`Dari Teori Menjadi Karya Nyata.`

Isi:
- foto mahasiswa
- beberapa project/program cards
- contoh dummy:
  - Pengembangan Perangkat Lunak
  - Kecerdasan Buatan
  - Keamanan Siber
  - Data Science

Semua data harus mudah diganti.

---

# 13. STUDENT PROJECTS

Section khusus showcase.

Tujuan:
Membuat website terasa benar-benar "Informatika", bukan sekadar website universitas.

Gunakan project cards dengan:
- image
- project title
- category
- short description
- arrow

Contoh DUMMY:
- Portal UMKM
- E-Kinerja
- SI Kampus
- AI Chatbot

Jangan mengklaim project tersebut benar-benar milik prodi.

Tambahkan komentar kode:

```html
<!-- DUMMY CONTENT — replace with official student projects -->
```

---

# 14. STUDENT LIFE

Gunakan foto mahasiswa.

Judul dummy:

`Lebih dari Sekadar Ruang Kelas.`

Isi dapat berupa:
- organisasi
- komunitas
- event
- kegiatan kampus
- lab

Gunakan layout editorial:
- satu foto besar
- beberapa foto kecil
- teks di samping

Jangan membuat semua gambar menjadi card identik.

---

# 15. ACHIEVEMENTS

Section prestasi.

Gunakan list/card minimal:

```text
Juara 1
Hackathon Nasional
2026

Finalis
GEMASTIK
2026

Best Project
Inovasi Teknologi
2025

Juara 2
Kompetisi UI/UX
2025
```

**SEMUA DATA DUMMY.**

Jangan menampilkan seolah-olah ini data resmi.

---

# 16. TESTIMONIAL

Gunakan 1 testimonial dummy.

Contoh:

> "Di sini saya tidak hanya belajar bagaimana membuat program, tetapi juga belajar bagaimana memecahkan masalah."

Nama:
`Nama Mahasiswa`

Jabatan:
`Mahasiswa Teknik Informatika`

Foto dummy.

Tambahkan label jelas di source/data bahwa ini placeholder.

---

# 17. CTA

CTA menggunakan navy.

Contoh:

`Siap Jadi Bagian dari Teknik Informatika?`

Subtext dummy.

Button:

`Daftar Sekarang →`

Gunakan foto kampus sebagai background yang sangat subtle jika tersedia.

Kalau tidak tersedia, gunakan gradient navy/blue saja.

---

# 18. FOOTER

Footer dark navy.

Isi:
- logo
- Teknik Informatika
- Universitas ...
- tagline dummy
- Quick Links
- Kontak
- social media icons
- copyright dummy

Jangan mengarang alamat, nomor telepon, email, atau akun sosial resmi.

Gunakan placeholder:

```text
info@universitas.ac.id
+62 xxx xxxx xxxx
Jl. [Alamat Kampus]
```

---

# 19. CONTENT ARCHITECTURE — SANGAT PENTING

Karena konten resmi belum diberikan, **JANGAN hardcode semua teks langsung di HTML jika bisa dihindari.**

Gunakan pendekatan data-driven.

Contoh:

```js
const siteContent = {
    hero: {
        eyebrow: "PROGRAM STUDI TEKNIK INFORMATIKA",
        title: "Teknologi Hari Ini, Peluang Esok.",
        description: "Deskripsi sementara...",
        primaryCta: "Kenali Program Studi",
        secondaryCta: "Tonton Profil"
    },

    stats: [
        {
            value: "15+",
            label: "Tahun Berdiri"
        },
        {
            value: "500+",
            label: "Mahasiswa Aktif"
        }
    ],

    programs: [
        {
            title: "Software Engineering",
            description: "Deskripsi sementara...",
            image: "/assets/images/program-software.jpg"
        }
    ]
};
```

Tujuan:

Ketika konten resmi datang, cukup mengganti `siteContent` tanpa mengubah layout.

---

# 20. PISAHKAN CONTENT DARI UI

Jika stack memungkinkan, buat:

```text
src/
├── data/
│   └── content.js
│
├── components/
│   ├── Navbar
│   ├── Hero
│   ├── Stats
│   ├── Features
│   ├── Programs
│   ├── Projects
│   ├── StudentLife
│   ├── Achievements
│   ├── Testimonial
│   ├── CTA
│   └── Footer
│
├── assets/
├── styles/
└── App
```

Jika project menggunakan vanilla HTML/CSS/JS, gunakan struktur setara.

---

# 21. IMAGE SYSTEM

Semua foto saat ini adalah placeholder.

Folder:

```text
assets/images/
```

Contoh:
```text
hero.jpg
student-life.jpg
student-project.jpg
project-1.jpg
project-2.jpg
project-3.jpg
achievement.jpg
campus.jpg
profile.jpg
```

Jangan embed gambar sebagai base64.

Gunakan `object-fit: cover`.

Gunakan `aspect-ratio` agar layout stabil.

---

# 22. GLASSMORPHISM

Gunakan secara subtle.

```css
.glass {
    background: rgba(255, 255, 255, 0.65);
    border: 1px solid rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
}
```

Jangan semua section menggunakan glass.

Glass hanya untuk:
- floating card
- navbar saat scroll
- statistic panel
- beberapa UI card

---

# 23. ORGANIC SHAPES

Gunakan rounded/organic shapes untuk gambar.

Contoh:

```css
.image-organic {
    border-radius: 32px 64px 32px 64px;
}
```

Boleh menggunakan pseudo-element/blob:

```css
.hero::before {
    content: "";
    position: absolute;
    background: rgba(80, 150, 255, .12);
    border-radius: 50%;
    filter: blur(20px);
}
```

Dekorasi harus subtle.

---

# 24. ANIMATION

Animasi bukan prioritas pertama.

Setelah layout selesai, tambahkan:
- fade-up saat masuk viewport
- subtle translate
- image reveal
- navbar transition
- hover card
- button hover
- smooth scrolling

Gunakan transisi sekitar:

```css
transition: 250ms ease;
```

Hindari:
- parallax berlebihan
- bouncing
- rotating cards
- excessive floating
- loading animation yang mengganggu

Target:

**seamless, bukan flashy.**

---

# 25. RESPONSIVE

WAJIB bagus pada:
- desktop
- tablet
- mobile

Desktop:
- layout split
- grid

Tablet:
- grid lebih kecil

Mobile:
- hero satu kolom
- navbar hamburger
- statistik 2 kolom atau horizontal scroll
- typography mengecil proporsional
- cards ditata ulang sesuai kebutuhan

Jangan hanya mengecilkan desktop.

---

# 26. ACCESSIBILITY

Minimal:
- semantic HTML
- `alt` pada image
- tombol benar-benar `<button>` / `<a>`
- keyboard accessible
- contrast cukup
- focus state
- reduced motion support

Contoh:

```css
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

---

# 27. PERFORMANCE

Karena ini landing page:
- optimize image
- gunakan WebP/AVIF jika memungkinkan
- lazy-load image di bawah fold
- jangan menggunakan library besar tanpa alasan
- hindari JS untuk sesuatu yang bisa dilakukan CSS
- jangan membuat animasi berat

---

# 28. TECH STACK

Jika belum ada stack yang ditentukan, gunakan:
- HTML
- CSS
- JavaScript

Jika project existing sudah menggunakan framework tertentu, **ikuti stack existing** dan jangan migrasi tanpa alasan.

Tidak perlu:
- backend
- database
- authentication
- CMS

Ini hanya:

> **frontend landing page dummy**

---

# 29. PRIORITAS IMPLEMENTASI

## Phase 1 — Foundation
- setup project
- design tokens
- typography
- container
- global CSS
- responsive base

## Phase 2 — Above the Fold
- navbar
- hero
- stats

Pastikan ini sudah terlihat sangat bagus sebelum lanjut.

## Phase 3 — Main Content
- why informatics
- programs
- projects
- student life

## Phase 4 — Closing
- achievements
- testimonial
- CTA
- footer

## Phase 5 — Polish
- responsive
- animation
- hover states
- accessibility
- performance
- cleanup

---

# 30. DEFINITION OF DONE

Landing page dianggap selesai apabila:

- [ ] Visual mengikuti arah desain
- [ ] Navy + white menjadi warna utama
- [ ] Tidak terasa kaku seperti website institusi lama
- [ ] Tidak terlihat norak
- [ ] Tidak menggunakan doodle/sketch berlebihan
- [ ] Glassmorphism digunakan secukupnya
- [ ] Foto menggunakan organic/rounded treatment
- [ ] Whitespace cukup
- [ ] Typography modern
- [ ] Mobile responsive
- [ ] Semua konten dummy mudah diganti
- [ ] Tidak ada data resmi yang diada-adakan
- [ ] Tidak membutuhkan backend
- [ ] Tidak ada error console
- [ ] Semua link/button dummy diberi tujuan jelas atau placeholder
- [ ] Struktur kode mudah diteruskan developer lain

---

# 31. HAL PALING PENTING

Jangan terlalu terpaku pada contoh teks.

Yang paling penting adalah visual language:

**Clean**
+
**Modern**
+
**Navy / White**
+
**Soft Blue**
+
**Organic Shapes**
+
**Subtle Glass**
+
**Editorial Layout**
+
**Friendly**
+
**Technology**

Hasil akhir harus terasa seperti:

> "Website program studi Informatika modern"

bukan:

> "Template website universitas"

dan bukan:

> "Website startup yang terlalu ramai."

---

# 32. REFERENSI VISUAL

Gunakan gambar/referensi landing page yang diberikan user dalam percakapan sebagai acuan komposisi dan rasa visual.

Referensi terakhir memiliki karakter:
- background putih
- hero image besar dengan rounded organic frame
- typography besar tetapi sederhana
- blue/navy accents
- section yang lapang
- rounded cards
- soft blue translucent surfaces
- minimal decoration
- clean travel/startup-like editorial composition

**Adaptasikan prinsip visualnya, jangan copy desain secara literal.**

---

# 33. OUTPUT YANG DIHARAPKAN DARI ANTIGRAVITY

Pada akhir implementasi, berikan:

1. Struktur project.
2. Landing page yang bisa langsung dijalankan.
3. Content/data dummy yang terpusat.
4. Instruksi singkat:
   - cara menjalankan project
   - cara mengganti teks
   - cara mengganti gambar
   - cara mengganti warna
5. Pastikan developer berikutnya bisa mengganti konten resmi tanpa membongkar UI.

---

# 34. KONTEN RESMI NANTI

Konten resmi yang mungkin diberikan:
- nama resmi prodi
- nama universitas
- tagline
- sejarah
- visi
- misi
- profil kaprodi
- dosen
- kurikulum
- konsentrasi
- fasilitas
- laboratorium
- prestasi
- kegiatan mahasiswa
- organisasi
- berita
- kontak
- alamat
- social media
- CTA pendaftaran

Jangan membuat struktur final yang menyulitkan data tersebut untuk dimasukkan.

Desain harus menjadi **template yang siap diisi**.

---

# FINAL DIRECTION

Bangun landing page dummy Teknik Informatika yang:

**minimal → modern → sedikit playful → profesional → teknologi → tidak kaku → tidak norak.**

Gunakan referensi visual yang sudah diberikan user sebagai inspirasi utama.

**Prioritas #1: kualitas visual dan layout.**

**Prioritas #2: responsive.**

**Prioritas #3: content architecture yang mudah diganti.**

**Prioritas #4: animation/polish.**

Konten resmi belum tersedia, jadi jangan mengunci desain pada data dummy.
