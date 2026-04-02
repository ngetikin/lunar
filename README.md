<div align="center">
  <img src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" alt="Lunar Community Banner" width="100%" />
  
  <h1>Lunar Community</h1>
  <p><em>A Space to Create & Connect</em></p>
  
  <p>
    <a href="https://lunarid.vercel.app/">🌐 Live Site</a> •
    <a href="https://discord.com/invite/lunarid">💬 Discord</a> •
    <a href="https://www.instagram.com/lunar_idn/">📸 Instagram</a>
  </p>
</div>

---

## 🌙 Tentang Project

Lunar Community adalah landing page modern untuk komunitas online yang fokus pada kreativitas dan koneksi. Dibangun dengan teknologi web terkini, website ini menjadi pintu masuk utama bagi anggota baru untuk mengenal dan bergabung dengan komunitas kami.

## ✨ Features

- **🎨 Modern UI/UX** - Desain clean dengan animasi smooth dan dark theme aesthetic
- **📱 Fully Responsive** - Tampilan optimal di semua device (mobile, tablet, desktop)
- **⚡ Fast Performance** - Dibangun dengan Vite untuk development dan production build yang cepat
- **🎭 Smooth Animations** - Transisi halus menggunakan Motion library
- **🔗 Social Integration** - Direct link ke Discord dan Instagram
- **♿ Accessible** - Mengikuti best practices untuk aksesibilitas web

## 🛠️ Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| **Framework** | React 19 |
| **Build Tool** | Vite 6 |
| **Language** | TypeScript 5.8 |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Motion (motion/react) |
| **Icons** | Lucide React |
| **Hosting** | Vercel |

## 📸 Preview

![Lunar Community Preview](https://github.com/ngetikin/lunar/blob/main/lunar-preview.jpeg?raw=true)

## 🚀 Installation

### Prerequisites
- Node.js (versi LTS terbaru)
- npm / yarn / pnpm

### Langkah Install

```bash
# Clone repository
git clone https://github.com/ngetikin/lunar.git
cd lunar

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local dan tambahkan GEMINI_API_KEY jika diperlukan

# Jalankan development server
npm run dev
```

Server akan berjalan di `http://localhost:3000`

### Build untuk Production

```bash
# Build
npm run build

# Preview build
npm run preview
```

## 📁 Folder Structure

```
lunar/
├── src/
│   ├── components/
│   │   └── LandingPage.tsx    # Semua komponen landing page
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles & Tailwind config
├── public/
│   └── lunar.png              # Favicon & OG image
├── index.html                 # HTML template dengan meta tags
├── package.json               # Dependencies & scripts
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
└── README.md                  # Project documentation
```

## 🤝 Contributing

Kami terbuka untuk kontribusi! Berikut cara berkontribusi:

1. **Fork** repository ini
2. **Create branch** baru (`git checkout -b feature/amazing-feature`)
3. **Commit** perubahan (`git commit -m 'Add amazing feature'`)
4. **Push** ke branch (`git push origin feature/amazing-feature`)
5. **Open Pull Request**

### Guidelines
- Gunakan kode yang clean dan readable
- Ikuti existing code style
- Test perubahan di local sebelum submit PR
- Jelaskan perubahan dengan jelas di PR description

## 🗺️ Roadmap

- [ ] ✨ Tambah halaman events/community activities
- [ ] 💬 Integrasi Discord widget untuk member count
- [ ] 📧 Newsletter subscription
- [ ] 🌐 Multi-language support (EN/ID)
- [ ] 🎨 Dark/Light mode toggle
- [ ] 📊 Analytics integration

## 👥 Team

Dibuat dengan ❤️ oleh **Lunar Community**

Terima kasih untuk semua kontributor yang telah membantu mengembangkan project ini!

## 📬 Contact

- **Website:** [lunarid.vercel.app](https://lunarid.vercel.app)
- **Discord:** [discord.com/invite/lunarid](https://discord.com/invite/lunarid)
- **Instagram:** [@lunar_idn](https://www.instagram.com/lunar_idn/)

---

<div align="center">
  <p>© 2022 - 2026 Lunar Community. All rights reserved.</p>
  <p><em>A chill and creative online community where people connect, share ideas, and grow together.</em></p>
</div>
