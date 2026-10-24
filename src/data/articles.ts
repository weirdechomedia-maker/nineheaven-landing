export interface Article {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: number
}

export const articles: Article[] = [
  {
    slug: 'ai-agent-di-workflow-harian',
    title: 'AI Agent di Workflow Harian: Mulai dari Mana?',
    excerpt: 'AI agents tidak lagi masa depan. Mulai dari manajemen email hingga penjadwalan, berikut cara praktis memulai tanpa ribet.',
    date: '2026-10-20',
    readTime: 4,
    content: `AI agent bukan lagi istilah sci-fi. Di tahun 2026, banyak yang sudah pakai untuk hal-hal sehari-hari yang simple tapi memakan waktu.

Kita mulai dari yang paling mudah: manajemen email. Dengan tool seperti Gmail diintegrasikan dengan AI agent, kamu bisa auto-respond pertanyaan umum, filter spam, bahkan susun draft singkat. Tidak perlu lagi nunggu lama untuk kasih tahu "sudah dibaca" atau "nanti kita diskusikan di meeting".

Selanjutnya, penjadwalan. Klik satu kali di kalender digital, AI agent tanya preferensi (pagi, sore, jumlah orang, budget) lalu beri 3-5 pilihan meeting yang cocok. Kalau ada yang bentrok, AI-nya otomatis cari alternatif. Ini yang bener bikin hidup lebih ringan.

Untuk proyek, AI agent bisa monitor progres. Input targetakhir, lalu tiap hari cek update dari tim. Kalau ada yang telat, AI kasih reminder ringan sambil cari alasan (meeting lama, dependensi belum selesai). Tidak perlu manual follow-up berulang.

Yang terpenting: start small. Pilih satu workflow yang paling repot dulu, bukan semua sekaligus. AI yang baik itu bukan yang bisa lakikan semuanya, tapi yang ngerti buat bantu manusia tetap relevan.

Data pun tetap di tangan kamu. Semua interaksi bisa dilihat, diedit, atau di-hapus. Karena di akhir hari, AI-agent cuma sebuah alat, bukan pengganti yang mengganti logika manusiawi.`
  },
  {
    slug: 'local-ai-vs-cloud-ai-2026',
    title: 'Local AI vs Cloud AI: Praktikum di 2026',
    excerpt: 'Di era AI canggih, mana yang benar-benar cocok untuk kebutuhan kamu? Perbandingan langsung antara eksekusi local vs cloud.',
    date: '2026-10-18',
    readTime: 5,
    content: `Perbandingan local AI vs cloud AI di 2026 bukan lagi soal mana yang lebih canggih, tapi mana yang cocok untuk kebutuhan spesifik.

Eksekusi local (run di laptop/PC) kini relatif adem. Dengan GPU 4090 atau Apple Silicon M4, model 7-14B sudah ngepak dengan latency 1-2 detik untuk inference. Keuntungannya: total kontrol atas data. Kalau data sensitif, atau ingin eksperimen tanpa biaya API, local adalah pilihan paling aman. API endpoint juga bisa dijalankan offline (kecuali untuk update model). Kebutuhan spek: GPU dengan minimal 8GB VRAM untuk model 7B, 16GB untuk 14B. RAM sistemi minimal 32GB biar tidak bottleneck.

Cloud AI tetap unggul untuk beban besar. Inference satu klik dari API endpoint, latency 200ms-an. Baik untuk produksi serta integrasi ke aplikasi. Harga: $0,001-$0,01 per 1000 token tergantung model. Budget harian untuk developer biasa mungkin $5-15 yang cukup untuk beberapa ratus request.

Skenario praktis: buat prototype atau eksperimen cepat, pakai local. Kalau butuh scale atau integrausi ke backend, pakai cloud. Kalau data bersifat sensitif (mis: analisis dokumen konsultasi klien), wajib pakai local. Kalau butuh fitur multimodal (image+text), cloud sering lebih mupuni dulu.

Yang sering salah paham: kamu harus pilih masing-masing. Banyak yang suka camping-campingin ke “lokal dulu semua”. Padahal, workflow produksi biasanya campur: preprocessing local, inference cloud, post-processing local lagi. Dengan framework seperti LangChain atau llama.cpp, kombinasi ini mulai mudah diatur.

Rekomendasi 2026: jika perangkatmu spek aga kencang, hadirkan satu endpoint lokal untuk data sensitif.untuk yang lain, cloud-API sebagai fallback utama.`
  },
  {
    slug: 'praktikum-ai-tools-2026',
    title: 'Tools AI Praktis yang Wajib Dipakai di 2026',
    excerpt: 'Dari coding hingga presentasi, berikut rajutan tools yang benar-benar bikin produktivitas naik level.',
    date: '2026-10-15',
    readTime: 4,
    content: `![Placeholder](https://placehold.co/600x400)

Banyak sekali tools AI yang dibicarakan, tapi sebagian kecil yang benar-benar bikin hidup lebih gampang. Ini yang udah aku coba dan rekomendasikan:

**Coding Companion**: GitHub Copilot atau Tabnine. Auto-complete yang ngerti konteks proyek, bukan sekadar boilerplate. Penggunaan: pas menulis fungsi baru atau error handling, tidak perlu bikin dari nol.

**Design Mockup**: Figma + AI plugin (seperti Magician). Kasih deskripsi singkat, bikin UI prototype dalam 5 menit. Seru buat validasi sebelum investasi waktu ke CSS.

**Presentasi Cepat**: Canva AI atau PowerPoint Designer. Upload beberapa slide, AI bantu susun layout yang rapi. Tersedia template responsive untuk presentasi klien.

**Analisis Data**: PandasAI atau Copilot Data. Upload CSV/Excel, ajukan pertanyaan natural. Hasilnya CSV yang bisa diproses lanjutan pakai tool biasa.

**Penyuntingan Teks**: Grammarly AI atau Hemingway App. Bukan cuma cek tata bahasa, tapi juga sugestion gaya tulisan supaya lebih jelas.

Yang penting: setiap tools itu harus bisa di-ollash dengan data lokal bila perlu. Jangan sampai semua data kena keluar ke server pihak.`
  }
]
