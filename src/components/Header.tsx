"use client";

import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import UserButton from "./UserButton";

const Sun = dynamic(() => import("lucide-react").then(mod => mod.Sun), { ssr: false });
const Moon = dynamic(() => import("lucide-react").then(mod => mod.Moon), { ssr: false });

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex items-center justify-between px-6 py-3 border-b border-neutral-600/30 bg-background">
      <span className="text-xl font-bold tracking-tight mr-auto">
        SEO.Connect
      </span>
      <UserButton />
      {/* Only render the toggle after the component has mounted */}

        <Toggle
          pressed={theme === "dark"}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle dark mode"
          className="w-12 h-10"
        >
          {theme === "dark" ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </Toggle>

    </header>
  );
}
