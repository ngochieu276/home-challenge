Live Demo: https://home-challenge-git-main-nguyen-ngoc-hieus-projects.vercel.app

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

   **Structure:** I use standard CodeBase NextJS structure
      src:
         -app
            -dashboard
            -settings
            -events
               -[eventId]
         -components
            -ui(Shadcn UI)
            Sidebar
            Header
            ...
         -features
            -components
            -api
            -hook
         -libs
            -utils
         -store
            store.setting.store

   This structure can easily to extend large scale app, easy to maintain

   **Components:**
      Separation of Concerns(UI vs logic)
      Keep Components Pure
      Component-Driven Development

   **Reusable:**
      Alway make sure component can reuseable

      example in code:
         src\components\ConfirmModal.tsx
       this component has props

         ConfirmModalProps {
            title: string;
            description: string;
            trigger: React.ReactNode;
            onConfirm: () => boolean | Promise<boolean>;
            confirmSuccessMsg?: string
         }

      with this
         we can set title. des, trigger component depend on circumstand
         onConfirm function that take sync/async func and return boolean, this func run when we click confirm
         confirmSuccessMsg also depend on circumstance we use

  



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
