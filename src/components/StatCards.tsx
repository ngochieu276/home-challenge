type StatCard = { label: string; value: number };

export default function StatCards({ data }: { data: StatCard[] }) {
  const colors = [
    "from-[#3a1c71] to-[#d76d77]",
    "from-[#1e3c72] to-[#2a5298]",
    "from-[#fc5c7d] to-[#6a82fb]",
  ];
  return (
    <div className="flex gap-4 flex-wrap">
      {data.map((stat, idx) => (
        <div
          key={stat.label}
          className={`bg-gradient-to-tr ${colors[idx % colors.length]} rounded-xl p-6 min-w-[140px] flex flex-col items-center`}
        >
          <span className="text-3xl font-bold">{stat.value}</span>
          <span className="text-sm mt-1">{stat.label}</span>
        </div>
      ))}
    </div>
  );
} 