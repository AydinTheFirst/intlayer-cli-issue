# Issue: `npx intlayer fill` command exits without any output or error

References

- [Github Repository](https://github.com/AydinTheFirst/intlayer-cli-issue)

When I run `npx intlayer fill --verbose`, I dont see any progress. It exists without any error or warning.

### Steps to Reproduce

1. Create a new React project with Vite and TypeScript.
2. Install `vite-intlayer`, `intlayer` and `@intlayer/cli`.
3. Configure `vite.config.ts` to include `intlayerPlugin()`.
4. Set up `tsconfig.json` and `tsconfig.app.json` to include `.intlayer/types/**/*`.
5. Create `intlayer.config.ts` with internationalization settings and AI API key.
6. Create translation files: `app.en.content.ts`, `app.tr.content.ts`, and `broken.content.ts`.
7. Run `npx intlayer fill`.

### Expected Behavior

The `npx intlayer fill` command should process the translation files and generate the necessary translations (es/spanish) without any issues.

### Actual Behavior

The command exits without any output, error, or warning, and no translations are generated.

### Additional Context

I tried both per locale file (e.g., `app.en.content.ts`, `app.tr.content.ts`) and a single file with multiple locales (e.g., `app.content.ts` with English and Turkish translations). Both approaches resulted in the same issue.

### Environment

- OS: Linux (Ubuntu 24.04)
- Node.js version: 24.8.0
- Vite version: 7.1.12
- intlayer version: 5.8.1
