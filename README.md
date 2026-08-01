# Next.js Template with QA Architecture

This is a [Next.js](https://nextjs.org) starter project with a lightweight QA setup and freedom to use the package manager and workflow that best fit your team.

## ✨ Features

- ⚡ **Next.js 15.5.4** with React 19
- 🎨 **Tailwind CSS 4** for styling
- 📘 **TypeScript** with strict mode
- 🧪 **Vitest** for unit testing
- ✅ **ESLint** + **Prettier** for code quality
- 🔒 **Husky** + **lint-staged** for automated validation
- 🚀 **Turbopack** for faster builds

## 🚀 Quick Start

### 1. Install Dependencies

Use your preferred package manager:

```bash
npm install
# or
pnpm install
# or
yarn install
```

### 2. Finalize QA Setup (First Time Only)

```bash
bash scripts/COMANDOS_FINAIS.sh
```

### 3. Start Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## 🛡️ QA Architecture

This project includes a lightweight QA baseline:

- ✅ **Pre-commit hooks** - Lint + Format automatically
- ✅ **Pre-push hooks** - Type-check + Tests before push
- ✅ **Automated testing** with Vitest
- ✅ **Code formatting** with Prettier
- ✅ **Type safety** with TypeScript

### Essential Commands

Run these scripts with the package manager of your choice (`npm run`, `pnpm`, `yarn`, etc.):

```bash
# Development
dev                   # Start dev server
build                 # Build for production
start                 # Start production server

# Quality Assurance
lint                  # Run linting
format                # Format code
type-check            # Check types
test                  # Run tests (watch mode)
test:run              # Run tests once
validate              # Run all validations
verify-qa             # Verify QA setup
```

### 📚 Documentation

- **[README.md](./README.md)** - Project overview and quick start
- **[package.json](./package.json)** - Available scripts and dependencies
- **[`scripts/`](./scripts)** - Optional setup and verification helpers

## 🔒 Automated Validation

### On Commit (`git commit`)

- ✅ ESLint fixes errors automatically
- ✅ Prettier formats code
- ❌ Commit blocked if errors exist

### On Push (`git push`)

- ✅ TypeScript type-check
- ✅ All tests run
- ❌ Push blocked if tests fail

**No manual intervention needed!** The hooks handle everything automatically.

## 📁 Project Structure

```
.
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── page.tsx      # Home page
│   │   └── page.test.tsx # Page tests
│   └── lib/              # Utility functions
│       ├── utils.ts
│       └── utils.test.ts
├── .husky/               # Git hooks
├── scripts/              # Utility scripts
└── README.md             # Project guide
```

## 🧪 Testing

```bash
npm run test
npm run test:run
npm run test:ui
npm run test:coverage
```

## 🎯 Next Steps

1. Run `bash scripts/COMANDOS_FINAIS.sh` to finalize setup
2. Review the available scripts in [package.json](./package.json)
3. Start developing with the package manager of your choice
4. Make commits and let the hooks validate the staged changes

## 📖 Learn More

### Next.js Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub](https://github.com/vercel/next.js)

### QA Resources

- [Vitest Documentation](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

## 🚀 Deploy

The easiest way to deploy is using [Vercel](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-repo)

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📊 QA Status

- ✅ Vitest configured and working
- ✅ Prettier integrated with ESLint
- ✅ Husky hooks active
- ✅ TypeScript strict mode enabled
- ✅ Example tests included
- ✅ Starter documentation available

---

**Built as a fast starting point**
