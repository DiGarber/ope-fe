# Open Source Economy Frontend

A modern React application showcasing open source security solutions and vulnerability protection services.

## 🛠 Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v4 with custom theme
- **State Management**: TanStack Query (React Query)
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Code Quality**: ESLint with TypeScript rules

## 🚀 Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+ (current: warns on 20.13.1)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd open-source-economy
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or next available port).

## 📜 Available Scripts

- `npm run dev` - Start development server with Tailwind CSS watch mode
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint code analysis
- `npm run css:build` - Build Tailwind CSS once
- `npm run css:watch` - Watch Tailwind CSS for changes

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Theme**: Custom dark color palette with gradient accents
- **Performance Optimized**: Built with Vite for fast development and builds
- **Type Safety**: Full TypeScript implementation
- **Modern React**: Uses React 19 with latest patterns and hooks

## �� Project Structure

```
src/
├── components/         # Reusable UI components
│   └── Home/          # Homepage specific components
├── pages/             # Page components
├── services/          # API and external services
├── styles/            # Shared styling utilities
├── types/             # TypeScript type definitions
└── App.tsx           # Main application component
```

## 🔧 Development Notes

- Uses Tailwind CSS v4 with CLI-based compilation
- Custom theme variables defined in `src/index.css`
- ESLint configured for React and TypeScript best practices
- Hot module replacement enabled for fast development

## 📄 License

This project is private and not open for public distribution.
