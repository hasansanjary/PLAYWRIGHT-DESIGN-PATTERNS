# Playwright RealWorld App — Setup Summary

This README briefly documents how the project was created and the actions performed.

1. Create project folder and initialize git

   - `mkdir PLAYWRIGHT-REALWORLD-APP`
   - `cd PLAYWRIGHT-REALWORLD-APP`
   - `git init`

2. Install Playwright (TypeScript)

   - `npm init playwright@latest` (select TypeScript when prompted)
   - Install browser binaries: `npx playwright install`
   - Skipped creating the GitHub Actions workflow for later.

3. Playwright Agents and MCP server

   - Initialize Playwright agents for VS Code: `npx playwright init-agents --loop=vscode`
   - The command creates `.github/chatmodes/` with generated chatmode files.
   - Installed the Playwright MCP server extension from the VS Code Marketplace.

4. Project structure

   - Created folders: `pages/`, `tests/`, `specs/`
   - `specs/` is used by the Playwright planner agent and contains `login.md`.

5. Planner-driven work performed by the assistant

   - Opened `http://localhost:3000/signin` to inspect the sign-in page.
   - Captured the DOM snapshot and extracted interactive elements: `#username`, `#password`, `input[name=remember]`, the Sign In button (`button[type=submit]`), and the Sign Up link.
   - Generated `specs/login.md` containing an executive summary and detailed test scenarios (happy path, invalid credentials, empty-field validation, remember-me behaviour, accessibility checks, rate-limiting, logout/session expiration, edge cases, etc.).

6. Quick commands

   - Install browsers (if needed): `npx playwright install`
   - Run tests: `npx playwright test`

Generated on: 2025-11-18
