# 🧠 NodeMS – Linux Server Pool Management System

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/nodems-io/admin/pulls)
![Next.js](https://img.shields.io/badge/Next.js-14+-black?logo=nextdotjs)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-blue?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-Enabled-blue?logo=typescript)
![Status](https://img.shields.io/badge/status-WIP-orange)

> NodeMS is a next-generation open-source **server farm management platform** for Linux environments.  
> Built with **Next.js App Router**, it helps system administrators track, visualize and interact with their infrastructure — fast, modern, and responsive.

---

## ✨ Features

- 🧭 **Dashboard Overview** – server stats, alerts, uptime chart
- 💼 **Server Cards** – shows OS, name, datacenter, and IP
- 🌐 **i18n Support** – Turkish 🇹🇷 & English 🇬🇧 via dynamic `[locale]` routes
- 🔔 **Notification Dropdown** – real-time alerts UI
- 👤 **User Avatar Menu** – placeholder profile support
- 📈 **Interactive Charts** – uptime, usage, and future logs
- 📱 **Fully Responsive** – mobile-first design
- 🧩 **Composable Components** – sidebar, topbar, cards via `shadcn/ui`

---

## 📸 Preview

![Dashboard Preview](https://raw.githubusercontent.com/atak011/nodems/main/public/preview.png)

---

## 🛠️ Tech Stack

| Tool           | Usage                              |
|----------------|-------------------------------------|
| [Next.js](https://nextjs.org) | App Router + SSR/CSR Framework |
| [Tailwind CSS](https://tailwindcss.com) | Styling |
| [shadcn/ui](https://ui.shadcn.dev) | Component system |
| [Lucide Icons](https://lucide.dev) | Icon set |
| [Recharts](https://recharts.org) | Data visualization |
| TypeScript     | Static typing                       |

---

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/nodems.git
cd nodems
npm install
npm run dev
```

📍 Visit: [http://localhost:3000/tr](http://localhost:3000/tr)

---

## 🌍 Localization (i18n)

NodeMS uses **route-based localization** instead of deprecated `i18n` config:

```
/[locale]/dashboard
         ├── /tr → Turkish
         └── /en → English
```

Translation keys are in `src/locales/` and accessed via `getT(locale)` utility.

---

## 🧪 Development Details

- ✅ Layout components (`Sidebar`, `Topbar`) live in `[locale]/layout.tsx`
- ✅ Pages are shared across locales (`[locale]/nodes/page.tsx`)
- ✅ Translations injected from `JSON` with type-safe fallback
- ✅ Uptime chart uses static data via `recharts` (switchable to API)

---

## 📈 Roadmap

- [ ] API backend for live server status
- [ ] Authentication & session
- [ ] Role-based access control (RBAC)
- [ ] WebSocket real-time metrics
- [ ] Theme toggle (Light / Dark)
- [ ] Docker & deployment pipeline
- [ ] Sentry or GlitchTip integration

---

## 🤝 Contributing

Contributions, ideas, and bug reports are welcome!

```bash
git checkout -b feature/your-feature
git commit -m "Add: Your feature"
git push origin feature/your-feature
```

Then open a [pull request](https://github.com/nodems-io/admin/pulls).

---

## 📄 License

Licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Recai Atak**  
[github.com/atak011](https://github.com/atak011)

> Created with 💙 using Open Source tools.
