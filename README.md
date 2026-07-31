# Next.js Template with QA Architecture 🛡️

This is a [Next.js](https://nextjs.org) project with a **complete and automated QA architecture** implemented.

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

```bash
pnpm install
```

### 2. Finalize QA Setup (First Time Only)

```bash
bash scripts/COMANDOS_FINAIS.sh
```

### 3. Start Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## 🛡️ QA Architecture

This project includes a **complete automated QA pipeline**:

- ✅ **Pre-commit hooks** - Lint + Format automatically
- ✅ **Pre-push hooks** - Type-check + Tests before push
- ✅ **Automated testing** with Vitest
- ✅ **Code formatting** with Prettier
- ✅ **Type safety** with TypeScript

### Essential Commands

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm start            # Start production server

# Quality Assurance
pnpm lint             # Run linting
pnpm format           # Format code
pnpm type-check       # Check types
pnpm test             # Run tests (watch mode)
pnpm test:run         # Run tests once
pnpm validate         # Run all validations
pnpm verify-qa        # Verify QA setup
```

### 📚 Documentation

- **[README_QA.md](./README_QA.md)** - QA architecture overview
- **[QUICK_START_QA.md](./QUICK_START_QA.md)** - Daily usage guide
- **[QA_ARCHITECTURE.md](./QA_ARCHITECTURE.md)** - Complete technical documentation
- **[INDICE_DOCUMENTACAO.md](./INDICE_DOCUMENTACAO.md)** - Documentation index

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
└── docs/                 # QA documentation
```

## 🧪 Testing

```bash
pnpm test              # Watch mode
pnpm test:run          # Run once
pnpm test:ui           # Visual UI
pnpm test:coverage     # Coverage report
```

## 🎯 Next Steps

1. ✅ Run `bash scripts/COMANDOS_FINAIS.sh` to finalize setup
2. ✅ Read [README_QA.md](./README_QA.md) for QA overview
3. ✅ Start developing with `pnpm dev`
4. ✅ Make commits - hooks will validate automatically

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
- ✅ Complete documentation

---

**Built with quality in mind** 🛡️
