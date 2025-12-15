# Next.js + TypeScript Template

A production-ready template for technical tests and projects using Next.js 15, React 19, and TypeScript.

## Features

- Next.js 15 with App Router
- TypeScript for type safety
- CSS Modules for component styling
- Example components and utilities
- Type definitions included
- ESLint configured
- Ready for deployment

## Project Structure

```
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/          # Reusable React components
│   │   └── WelcomeCard.tsx
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/              # Utility functions
│   │   └── helpers.ts
│   └── styles/             # Additional styles
├── public/                 # Static assets
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Building Your Application

Start editing the files:

- **Pages**: Edit `src/app/page.tsx` for the home page
- **Layout**: Modify `src/app/layout.tsx` for the root layout
- **Components**: Add new components in `src/components/`
- **Styles**: Update global styles in `src/app/globals.css`
- **Types**: Define TypeScript types in `src/types/`
- **Utils**: Add utility functions in `src/utils/`

## Key Concepts

### Client Components

Components that use hooks or browser APIs need the `"use client"` directive:

```tsx
"use client";

import { useState } from "react";

export function MyComponent() {
  const [state, setState] = useState(0);
  // ...
}
```

### Server Components

Components without `"use client"` are Server Components by default (better performance):

```tsx
export default function Page() {
  return <div>This is a server component</div>;
}
```

### Styling

This template uses CSS Modules for component-scoped styles:

```tsx
import styles from "./Component.module.css";

export function Component() {
  return <div className={styles.container}>Content</div>;
}
```

## TypeScript

This project uses strict TypeScript configuration. Key features:

- Strict mode enabled
- Path aliases configured (`@/*` points to `src/*`)
- Type checking available via `npm run type-check`

Example usage:

```tsx
import { User } from "@/types";
import { formatDate } from "@/utils/helpers";
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy

### Other Platforms

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)

## License

MIT
