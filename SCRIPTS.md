# Available npm/pnpm Scripts

## Development

```bash
# Start development server with hot reload
pnpm dev

# Server runs at: http://localhost:5173
# Supports HMR (Hot Module Replacement)
```

## Building

```bash
# Build for production
pnpm build

# Output directory: dist/
# Optimized and minified for deployment
```

## Preview

```bash
# Preview production build locally
pnpm preview

# Useful for testing production build before deployment
# Server runs at: http://localhost:4173
```

## Code Quality

```bash
# TypeScript type checking
pnpm check

# Checks for type errors without building
```

## Formatting

```bash
# Format code with Prettier
pnpm format

# Formats all files according to prettier config
```

## Installation

```bash
# Install dependencies
pnpm install

# Install specific package
pnpm add package-name

# Install dev dependency
pnpm add -D package-name

# Remove package
pnpm remove package-name
```

---

## Vercel Deployment

Vercel automatically runs:
- **Build**: `pnpm build`
- **Dev**: `pnpm dev`
- **Install**: `pnpm install`

---

## Environment Setup

### Local Development
```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local with your values
nano .env.local
```

### Production (Vercel)
Set environment variables in Vercel Dashboard:
- Settings → Environment Variables
- Add all required variables
- Redeploy for changes to take effect

---

## Troubleshooting

### Clear cache and reinstall
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Clear build cache
```bash
rm -rf dist
pnpm build
```

### Check TypeScript errors
```bash
pnpm check
```

### Format code before commit
```bash
pnpm format
```

---

## Git Workflow

```bash
# Stage changes
git add .

# Commit
git commit -m "Your message"

# Push to GitHub
git push origin main

# Vercel automatically deploys on push
```

---

## Performance Optimization

- Vite handles code splitting automatically
- CSS is minified and optimized
- Images are optimized in build
- JavaScript is minified and tree-shaken

---

## Next Steps

1. Run `pnpm install` to install dependencies
2. Run `pnpm dev` to start development
3. Make changes and see them live
4. Run `pnpm build` to create production build
5. Deploy to Vercel with `vercel --prod`

See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment instructions.
