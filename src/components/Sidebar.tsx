"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { HamburgerMenuIcon, HomeIcon, GearIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", icon: <HomeIcon />, href: "/dashboard" },
  { label: "Settings", icon: <GearIcon />, href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // Only render sidebar on md+ or if open on mobile
  return (
    <>
      {/* Burger menu for md and below */}
      <button
        className={cn(
          "md:hidden fixed top-4 left-4 z-999 p-2 rounded-lg shadow-lg",
          open && 'hidden'
        )}
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
                  className={`cursor-pointer flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-[var(--primary)]/5 ${
                    isActive ? "bg-[var(--primary)]/5" : ""
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
          <aside className="w-64 p-6 flex flex-col gap-8 min-h-screen rounded-r-3xl shadow-lg z-50 bg-[var(--background)]">
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
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-[var(--primary)]/5 ${
                      isActive ? "bg-[var(--primary)]/5" : ""
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