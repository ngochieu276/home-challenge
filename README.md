# Dash

[GitHub Repository](https://github.com/ngochieu276/home-challenge)

## How to Run the Project

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Assumptions & Shortcuts
- **User Data:** User name and email are managed globally using Zustand for demo purposes. No backend persistence is implemented.
- **UI Components:** Shadcn UI and Radix UI are used for rapid, accessible component development. Fallbacks are provided if some components fail to install.
- **Form Handling:** React Hook Form and Zod are used for robust form validation and type safety.
- **No Auth:** There is no authentication/authorization logic; user data is editable by anyone for demo simplicity.
- **Styling:** Tailwind CSS is used for utility-first, rapid styling.

## Reasoning for Tech/Pattern Choices
- **Next.js (App Router):** Modern React framework with file-based routing, SSR, and great DX.
- **Zustand:** Lightweight, scalable state management for global user settings.
- **Shadcn UI + Radix UI:** Accessible, composable UI primitives that speed up development and ensure good UX.
- **React Hook Form + Zod:** Best-in-class form state management and validation for type safety and user feedback.
- **Tailwind CSS:** Enables fast, consistent, and responsive UI development.

## Techniques Used
- **Client-Side State Management:** Zustand for global state (user settings).
- **Form Validation:** React Hook Form with Zod for type-safe, robust form handling.
- **Component Composition:** Shadcn UI and Radix UI for accessible, composable UI primitives.
- **Responsive Design:** Tailwind CSS for utility-first, responsive styling.
- **Modern React Patterns:** Hooks (useState, useEffect, custom hooks), functional components, and controlled inputs.
- **TypeScript:** Static typing for improved developer experience and code quality.
- **Next.js App Router:** File-based routing and server-side rendering capabilities.
- **Fallback UI:** Graceful degradation with fallback components when third-party UI libraries fail to install.

---

For any questions or issues, please open an issue on the [GitHub repo](https://github.com/ngochieu276/home-challenge).
