"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { HamburgerMenuIcon, HomeIcon, GearIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", icon: <HomeIcon />, href: "/dashboard" },
  { label: "Settings", icon: <GearIcon />, href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  // Only render sidebar on md+ or if open on mobile
  return (
    <>
      {/* Burger menu for md and below */}
      <button
        className="md:hidden fixed top-4 right-4 z-30 p-2 rounded-lg shadow-lg"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle sidebar"
      >
        <HamburgerMenuIcon className="w-6 h-6 " />
      </button>
      {/* Sidebar: only render on md+ or if open on mobile */}
      <div className="hidden md:block">
        <aside className="w-64 p-6 flex flex-col gap-8 min-h-screen rounded-r-3xl shadow-lg">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    router.push(item.href);
                    setOpen(false);
                  }}
                  className={`cursor-pointer flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-neutral-600/30 ${
                    isActive ? "bg-neutral-600/30" : ""
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-semibold">{item.label}</span>
                </button>
              );
            })}
          </div>
        </aside>
      </div>
      {open && (
        <div className="fixed inset-0 z-20 flex">
          <aside
            className={cn(
              " w-64 p-6 flex flex-col gap-8 min-h-screen rounded-r-3xl shadow-lg z-50 ",
              theme === 'dark' ? 'bg-black' : 'bg-white' 
            )}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = pathname.startsWith(item.href);
                return (
                  <button
                    key={item.label}
                    onClick={() => {
                      router.push(item.href);
                      setOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-neutral-600/30 ${
                      isActive ? "bg-bg-neutral-600/30" : ""
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-semibold">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </aside>
          {/* Overlay for closing sidebar on mobile */}
          <div
            className="fixed inset-0 bg-black/40 z-10 md:hidden"
            onClick={() => setOpen(false)}
          />
        </div>
      )}
    </>
  );
} 