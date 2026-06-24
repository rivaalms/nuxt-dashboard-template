# Architecture Patterns

- SSR is disabled.
- Main directory for app live in [/app](../app/) directory.
- BFF Proxies live in [/server](../server/) directory.
- Shared utils for Main App and BFF live in [/shared](../shared/) directory.
- The frontend must only hit BFF proxies endpoints to access any external APIs.
- Define DTOs and global interfaces inside [/shared/types](../shared/types).

# Code Formatting

- Use 3-space indentation.
- Always prefer double quotes for strings whenever possible.
- Never use semicolons.

# Workflow

- Run `pnpm format` and `pnpm lint` sequentially after generating or editing code.
- If linting error found, run `pnpm lint:fix` to auto-fix it.
- **Do not** create a git commit unless explicitly asked to do so.
- **Do not** push commits unless explicitly asked to do so.
