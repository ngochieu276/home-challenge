import { HomeIcon } from "@radix-ui/react-icons";

const navItems = [
  { label: "Dashboard", icon: <HomeIcon />, href: "#" },
  { label: "Suppliers", icon: <span className="i-lucide-users" />, href: "#" },
  { label: "Events", icon: <span className="i-lucide-calendar" />, href: "#" },
  { label: "Reports", icon: <span className="i-lucide-file-text" />, href: "#" },
  { label: "Statistic", icon: <span className="i-lucide-pie-chart" />, href: "#" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#23235b] p-6 flex flex-col gap-8 min-h-screen rounded-r-3xl shadow-lg">
      <div className="flex flex-col gap-4">
        {navItems.map((item, idx) => (
          <a
            key={item.label}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-[#2d2d6e] ${idx === 0 ? "bg-[#2d2d6e]" : ""}`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-semibold">{item.label}</span>
          </a>
        ))}
      </div>
      <div className="mt-auto flex flex-col items-center gap-2">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#3a1c71] to-[#d76d77] flex items-center justify-center">
          <span className="text-2xl font-bold">0,5%</span>
        </div>
        <span className="text-sm text-gray-300">Statistic</span>
      </div>
    </aside>
  );
} 