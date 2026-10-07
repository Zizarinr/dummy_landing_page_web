/*
 * SUMBER KONTEN — SELURUH ISI FILE INI ADALAH DUMMY / PLACEHOLDER.
 *
 * Semua teks, angka, foto, tautan, dan data di bawah ini dibuat sementara
 * untuk keperluan desain. BUKAN data resmi program studi / universitas.
 *
 * Ganti isi file ini dengan konten resmi saat sudah tersedia.
 * Layout dan CSS tidak perlu diubah — cukup ubah data di sini.
 *
 * Catatan path gambar: gunakan path relatif tanpa garis miring di depan
 * ("assets/images/hero.png" bukan "/assets/images/hero.png") agar aman
 * saat di-deploy ke sub-path (mis. GitHub Pages).
 */

export const siteContent = {
  navbar: {
    logoText: "Teknik Informatika",
    subText: "Universitas Dummy",
    // url "#xxx" mengacu pada id section. "Berita" masih placeholder
    // karena section-nya belum dibuat.
    links: [
      { text: "Beranda", url: "#beranda" },
      { text: "Tentang", url: "#tentang" },
      { text: "Akademik", url: "#akademik" },
      { text: "Mahasiswa", url: "#mahasiswa" },
      { text: "Prestasi", url: "#prestasi" },
      { text: "Berita", url: "#" }
    ],
    ctaText: "Daftar Sekarang"
  },

  hero: {
    eyebrow: "PROGRAM STUDI TEKNIK INFORMATIKA",
    title: "Teknologi Hari Ini, Peluang Esok.",
    description: "Kami mendidik para pembuat perubahan. Program studi yang mempersiapkan Anda untuk memimpin inovasi digital dan memecahkan tantangan dunia nyata.",
    primaryCta: "Kenali Program Studi \u2192",
    secondaryCta: "\u25b6 Tonton Profil",
    image: "assets/images/hero.png",
    imageAlt: "Placeholder mahasiswa sedang memprogram",
    // DUMMY — jangan tampilkan angka ini sebagai klaim nyata.
    floatingCard: {
      value: "XX%",
      label: "Lulusan terserap industri (data dummy)"
    }
  },

  // DUMMY — semua angka di bawah hanya placeholder desain.
  statsTitle: "Dalam Angka",
  stats: [
    { value: "15+", label: "Tahun Berdiri" },
    { value: "500+", label: "Mahasiswa Aktif" },
    { value: "30+", label: "Dosen & Praktisi" },
    { value: "20+", label: "Mitra Industri" }
  ],

  whyInformatics: {
    title: "Bukan hanya belajar coding.",
    description: "Kurikulum kami dirancang untuk menyeimbangkan fondasi teoritis yang kuat dengan pengalaman praktis mendalam. Anda akan belajar merancang solusi, bukan sekadar menulis sintaks.",
    features: [
      { title: "Software Engineering", icon: "code" },
      { title: "Artificial Intelligence", icon: "ai" },
      { title: "Cyber Security", icon: "shield" },
      { title: "Data & Technology", icon: "data" }
    ]
  },

  programs: {
    title: "Dari Teori Menjadi Karya Nyata.",
    items: [
      {
        title: "Pengembangan Perangkat Lunak",
        description: "Pelajari arsitektur perangkat lunak modern, dari frontend hingga backend.",
        image: "assets/images/program-software.png"
      },
      {
        title: "Kecerdasan Buatan",
        description: "Pahami algoritma machine learning dan implementasi AI di berbagai sektor.",
        image: "assets/images/program-ai.png"
      },
      {
        title: "Keamanan Siber",
        description: "Lindungi data dan sistem dari ancaman digital yang terus berkembang.",
        image: "assets/images/program-cyber.png"
      },
      {
        title: "Data Science",
        description: "Olah dan analisis data skala besar untuk menghasilkan wawasan bisnis yang tajam.",
        image: "assets/images/program-data.png"
      }
    ]
  },

  // DUMMY CONTENT — replace with official student projects.
  studentProjects: {
    title: "Karya Mahasiswa",
    items: [
      {
        title: "Portal UMKM",
        category: "Web App",
        description: "Platform digitalisasi untuk ratusan UMKM lokal.",
        image: "assets/images/project-1.png"
      },
      {
        title: "E-Kinerja",
        category: "System",
        description: "Sistem pemantauan kinerja berbasis dashboard interaktif.",
        image: "assets/images/project-2.png"
      },
      {
        title: "AI Chatbot",
        category: "Artificial Intelligence",
        description: "Asisten virtual untuk layanan informasi akademik kampus.",
        image: "assets/images/project-3.png"
      }
    ]
  },

  studentLife: {
    title: "Lebih dari Sekadar Ruang Kelas.",
    description: "Kehidupan kampus yang dinamis dengan berbagai komunitas dan fasilitas lab berstandar industri.",
    activities: [
      "Laboratorium Riset AI",
      "Komunitas Programmer Campus",
      "Hackathon Tahunan",
      "Seminar & Workshop Teknologi"
    ],
    imageMain: "assets/images/student-life.png",
    imageMainAlt: "Placeholder kegiatan mahasiswa di kampus",
    imagesSmall: [
      "assets/images/student-life-1.png",
      "assets/images/student-life-2.png"
    ],
    imagesSmallAlt: [
      "Placeholder komunitas mahasiswa",
      "Placeholder laboratorium kampus"
    ]
  },

  // DUMMY — semua prestasi di bawah adalah placeholder, bukan data resmi.
  achievements: {
    title: "Prestasi Kami",
    items: [
      {
        title: "Hackathon Nasional",
        award: "Juara 1",
        year: "2026"
      },
      {
        title: "GEMASTIK",
        award: "Finalis",
        year: "2026"
      },
      {
        title: "Inovasi Teknologi",
        award: "Best Project",
        year: "2025"
      },
      {
        title: "Kompetisi UI/UX",
        award: "Juara 2",
        year: "2025"
      }
    ]
  },

  // DUMMY — testimoni placeholder.
  testimonial: {
    quote: "Di sini saya tidak hanya belajar bagaimana membuat program, tetapi juga belajar bagaimana memecahkan masalah. Pendekatan praktisnya sangat membantu di dunia kerja.",
    name: "Nama Mahasiswa",
    role: "Mahasiswa Teknik Informatika",
    image: "assets/images/profile.png"
  },

  cta: {
    title: "Siap Jadi Bagian dari Teknik Informatika?",
    subText: "Bergabunglah dengan ratusan mahasiswa lainnya yang telah memulai langkah sukses mereka di dunia teknologi.",
    buttonText: "Daftar Sekarang \u2192"
  },

  footer: {
    title: "Teknik Informatika",
    university: "Universitas Dummy",
    tagline: "Inovasi Digital Berawal dari Sini.",
    email: "info@universitas.ac.id",
    phone: "+62 xxx xxxx xxxx",
    address: "Jl. [Alamat Kampus], Kota, Negara",
    quickLinks: [
      { text: "Tentang Prodi", url: "#tentang" },
      { text: "Kurikulum", url: "#akademik" },
      { text: "Pendaftaran", url: "#daftar" },
      { text: "Hubungi Kami", url: "#kontak" }
    ],
    // DUMMY — akun sosial placeholder, ganti dengan akun resmi.
    socials: [
      { name: "Instagram", url: "#", icon: "instagram" },
      { name: "YouTube", url: "#", icon: "youtube" },
      { name: "LinkedIn", url: "#", icon: "linkedin" },
      { name: "GitHub", url: "#", icon: "github" }
    ],
    copyright: "\u00a9 2026 Teknik Informatika Universitas Dummy. All rights reserved."
  }
};
