# Cairo Nights

A modern, multilingual web application showcasing Cairo Nights company services, built with Next.js 15 and TypeScript.

## 🌟 Features

- **🌐 Internationalization**: Full support for English and Arabic languages
- **🎨 Modern UI**: Built with HeroUI component library and Tailwind CSS
- **🌓 Theme Support**: Dark and light mode with seamless theme switching
- **📱 Responsive Design**: Fully responsive layout for all device sizes
- **⚡ Performance**: Built on Next.js 15 with Turbopack for optimal performance
- **🎯 Type-Safe**: Full TypeScript support for better developer experience

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Available Scripts](#available-scripts)
- [Features Overview](#features-overview)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+ and npm/yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cairo-nights
```

2. Install dependencies:
```bash
bun install
```

or with npm:
```bash
npm install
```

## 💻 Development

Start the development server:

```bash
bun dev
```

or with npm:
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
cairo-nights/
├── app/                    # Next.js app directory
│   └── [lang]/            # Internationalized routes
│       ├── about/         # About page
│       ├── drivers/       # Company captains page
│       ├── offers/        # Travels and offers page
│       ├── services/      # Services page
│       └── page.tsx       # Home page
├── components/            # React components
├── config/               # Configuration files
├── diconaries/           # Translation dictionaries (i18n)
├── public/               # Static assets
├── repositories/         # Data repositories
├── styles/              # Global styles
└── types/               # TypeScript type definitions
```

## 🛠 Technologies

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [HeroUI](https://heroui.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Internationalization**: Custom i18n implementation
- **Package Manager**: [Bun](https://bun.sh/)

## 📜 Available Scripts

- `bun dev` or `npm run dev` - Start development server with Turbopack
- `bun build` or `npm run build` - Build the application for production
- `bun start` or `npm start` - Start the production server
- `bun lint` or `npm run lint` - Run ESLint and fix issues

## 🎯 Features Overview

### Pages

- **About**: Company information and details
- **Services**: Available services offered by Cairo Nights
- **Drivers**: Company captains information
- **Offers**: Travel packages and special offers

### Internationalization

The application supports two languages:
- English (en)
- Arabic (ar)

Default locale is Arabic. Language switching is handled automatically based on user preferences.

### Theme

The application includes a theme switcher that allows users to toggle between light and dark modes. Theme preference is persisted across sessions.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file.

---

Built with ❤️ using Next.js and HeroUI
