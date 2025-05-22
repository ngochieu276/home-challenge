"use client";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import UserButton from "./UserButton";

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b border-neutral-600/30 bg-background">
      <span className="text-xl font-bold tracking-tight mr-auto">SEO.Connect</span>
      <UserButton />
      <Toggle
        pressed={theme === "dark"}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle dark mode"
        className="w-12 h-10"
      >
        {theme === "dark" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
      </Toggle>
    </header>
  );
} 