# Nuxt Dashboard Template

This project is a modern, robust, and highly responsive dashboard template built using **Nuxt 4**, **Nuxt UI v4**, and **Tailwind CSS v4**. It features a modular directory structure that separates application frontend (`app`), server-side API (`server`), and shared code/utilities (`shared`).

---

## 🚀 Key Features

- **Nuxt 4 & Vue 3**: Leverages the latest Nuxt framework release with optimal performance and advanced features like the new directory layout.
- **Nuxt UI v4**: A premium component library built specifically for Nuxt, offering accessibility (WAI-ARIA compliance) and stunning visuals.
- **Tailwind CSS v4**: The next-generation, lightning-fast utility-first CSS engine for unlimited styling freedom.
- **Full TypeScript Integration**: Complete type safety across all layers of the application.
- **Data Visualization**: Integrated with `@unovis/vue` and `@unovis/ts` to render beautiful and interactive charts.
- **Shared Validation Schemas**: Consistent client-side and server-side data validation powered by **Zod**.
- **Automated Linting & Formatting**: Clean and consistent code style maintained automatically via **ESLint** and **Prettier**.

---

## 🛠️ Tech Stack & Dependencies

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Nuxt v4](https://nuxt.com/) | Hybrid Vue.js framework for high-performance web applications. |
| **UI & Styling** | [Nuxt UI v4](https://ui.nuxt.com/) & [Tailwind CSS v4](https://tailwindcss.com/) | Premium, accessible components and utility classes. |
| **Vue Utilities** | [VueUse](https://vueuse.org/) | A collection of essential Vue composition utilities. |
| **Data Visualization**| [Unovis](https://unovis.dev/) | A modular data visualization and charting framework. |
| **Validation** | [Zod](https://zod.dev/) | TypeScript-first schema validation. |
| **Table** | [TanStack Table](https://tanstack.com/table/v8) | Headless UI for building powerful tables & datagrids. |
| **Date Utils** | `date-fns` & `@internationalized/date` | Reliable date management and internationalization. |

---

## 📁 Directory Structure

This project adopts the standardized Nuxt 4 directory structure:

```text
├── app/                  # Frontend Application
│   ├── assets/           # Media, stylesheets, global Tailwind imports
│   ├── components/       # Reusable Vue components
│   ├── composables/      # State management and shared logic
│   ├── layouts/          # Application layouts (Default dashboard, etc.)
│   ├── pages/            # File-based routing
│   ├── utils/            # Frontend helper functions
│   ├── app.vue           # Main application entry point
│   └── app.config.ts     # Nuxt UI theme configurations
├── server/               # Backend API / Nitro Server
│   ├── api/              # API Route endpoints (/api/...)
│   └── utils/            # Backend-specific utility functions
├── shared/               # Shared Code (Client & Server)
│   ├── types/            # TypeScript interface & DTO definitions
│   └── utils/            # Shared validation schemas (Zod) & formatters
├── nuxt.config.ts        # Main Nuxt configuration file
└── package.json          # Dependencies and package scripts
```

---

## ⚙️ Setup & Installation

Ensure you have [Node.js](https://nodejs.org/) (latest LTS version recommended) and [pnpm](https://pnpm.io/) installed.

### 1. Install Dependencies
Install all required libraries by running the following command in your terminal:
```bash
pnpm install
```

### 2. Start the Development Server
Launch the local development environment:
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 📦 Available Scripts

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts the development server at `http://localhost:3000`. |
| `pnpm build` | Builds the application for production. |
| `pnpm preview` | Runs the locally built production application for previewing. |
| `pnpm format` | Formats all codebase files using Prettier. |
| `pnpm lint` | Audits the code quality using ESLint. |
| `pnpm lint:fix` | Audits and automatically corrects fixable ESLint errors. |
| `pnpm typecheck` | Validates TypeScript types across the entire codebase. |

---

## 🛡️ Code Quality & Standards

This project maintains high-quality standards through strict guidelines:
- **ESLint** is configured with Nuxt and Prettier configurations to auto-format and lint code on save.
- All API Data Transfer Objects (DTOs) should be declared inside `shared/types/dto` to ensure identical contracts are shared between the frontend and the backend.
- Form and authentication schemas are hosted inside `shared/utils/validations` using **Zod**, allowing immediate verification on the client side before submission and on the server side upon receiving requests.

## 🤖 AI Assisted Development

This project comes with Claude Code configurations available at [.claude](./.claude) diractory. Review and customize it to match your development preferences and conventions. 
