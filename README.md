# LeluhurCoffee

SUKSMA LELUHUR

# LELUHUR COFFEE - Single Page Application

Website ini adalah platform e-commerce untuk kedai kopi "Leluhur Coffee". Dibangun menggunakan **Vanilla JavaScript** murni (tanpa framework) dengan arsitektur **Single Page Application (SPA)** berbasis Hash-Routing. Proyek ini mendemonstrasikan bagaimana membuat website dinamis yang cepat, di mana perpindahan halaman tidak memerlukan _reload_ browser, serta memiliki sistem keranjang belanja yang persisten.

## Fitur Utama

- **SPA Navigation**: Navigasi halaman yang mulus tanpa refresh browser menggunakan `fetch` API.
- **Dynamic Routing**: Sistem routing custom untuk menangani URL hash (`#/menu`, `#/about`, dll).
- **Shopping Cart System**: Keranjang belanja fungsional dengan perhitungan otomatis (Subtotal + Pajak).
- **Data Persistence**: Data keranjang belanja disimpan di `localStorage`, sehingga tidak hilang saat browser ditutup.
- **Live Search**: Fitur pencarian menu yang terintegrasi antar halaman via URL Parameter.
- **Responsive Design**: Layout yang menyesuaikan tampilan Mobile (Hamburger Menu) dan Desktop.

---

## Struktur Direktori

Berikut adalah susunan folder dan peran setiap file dalam proyek ini:

```text
/ (Root Directory)
│
├── index.html           # "Shell" utama aplikasi. Satu-satunya file yang dimuat browser.
│
├── css/
│   └── style.css        # Stylesheet global (Variabel warna, layout, reset).
│
├── js/
│   ├── routers.js       # Otak navigasi (Menangani logika perpindahan halaman).
│   └── script.js        # Logika UI global (Toggle hamburger menu, navbar).
│
├── pages/               # (Partial Views) Potongan halaman yang akan di-inject ke index.html
│   ├── home.html        # Tampilan Landing Page / Hero Section.
│   ├── about.html       # Informasi tentang kami & galeri.
│   ├── menu.html        # Katalog produk, database menu (JSON), & logika Add-to-Cart.
│   ├── contact.html     # Link sosial media & kontak.
│   ├── cart.html        # Halaman keranjang, logika kalkulasi harga & checkout.
│   └── search.html      # Form pencarian sederhana.
│
└── img/                 # Aset gambar produk dan background.




1. Konsep SPA & Shell Utama (index.html)
Website ini tidak memuat halaman HTML baru saat navigasi diklik.
Shell: index.html bertindak sebagai kerangka. File ini memuat Navbar (tetap) dan wadah kosong <div id="app"></div>.
Injection: Konten dari folder pages/ diambil secara dinamis dan dimasukkan ke dalam <div id="app"> tersebut.



2. Sistem Routing (js/routers.js)
File ini adalah inti dari navigasi aplikasi.
Hash Listener: Script mendengarkan event hashchange. Jika URL berubah (misal dari #/ ke #/menu), fungsi redirect() akan berjalan.
Fetch API: Script mengambil konten file HTML target menggunakan fetch(route).
HTML Injection: Hasil fetch dimasukkan ke innerHTML elemen #app.
Page Specific Styling: Script secara otomatis mengganti className pada tag <body> (misal: <body class="menu-page">) agar styling CSS bisa dibedakan per halaman.



3. Logika Produk & Menu (pages/menu.html)
Halaman ini memiliki "database" produk dalam bentuk JSON object (menuData) yang tertanam langsung di script.
Rendering: Daftar menu (Cold, Hot, Pastry) dirender menggunakan JavaScript .map().
Add to Cart: Saat tombol beli diklik, fungsi addToCart() menyimpan objek produk ke localStorage browser dengan key "coffee_cart".
Search Handling: Script mendeteksi parameter URL (misal: ?search=latte) dan otomatis memfilter menu yang ditampilkan.



4. Sistem Keranjang Belanja (pages/cart.html)
Logika bisnis utama berjalan di sini:
Load Data: Mengambil string JSON dari localStorage dan mengubahnya kembali menjadi Objek.
Kalkulasi Real-time:
Menghitung Subtotal (Harga x Jumlah).
Menghitung Pajak (10% dari Subtotal).
Menghitung Total Bayar.
Format Rupiah: Menggunakan regex dan formatting untuk mengubah angka mentah (35000) menjadi format mata uang (Rp 35.000).



5. Styling (css/style.css)
Menggunakan variabel CSS (:root) untuk konsistensi tema.
Glassmorphism: Efek transparan/blur pada kartu menu menggunakan backdrop-filter.
Grid System: Halaman keranjang dan menu menggunakan CSS Grid untuk tata letak yang responsif.


6. Karena proyek ini menggunakan fetch() API untuk memuat halaman, browser akan memblokir request jika file dibuka langsung (protokol file://) karena kebijakan CORS (Cross-Origin Resource Sharing).
Anda WAJIB menggunakan Local Server.
Cara Menggunakan VS Code Live Server (Direkomendasikan):
- Buka folder proyek ini di Visual Studio Code.
- Install ekstensi Live Server (oleh Ritwick Dey).
- Buka file index.html.
- Klik kanan pada area kode, lalu pilih "Open with Live Server".
- Browser akan terbuka otomatis di alamat http://127.0.0.1:5500.
```
