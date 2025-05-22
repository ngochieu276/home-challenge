type Event = { name: string; status: string };

export default function PendingEvents({ events }: { events: Event[] }) {
  return (
    <div className="bg-gradient-to-tr from-[#fc5c7d] to-[#6a82fb] rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">Pending Events</h3>
      <div className="flex flex-col gap-3">
        {events.map((event, idx) => (
          <div key={event.name + idx} className="flex items-center justify-between bg-[#2d2d6e] rounded-lg px-4 py-2">
            <span>{event.name}</span>
            <div className="flex gap-2">
              <button className="bg-green-400 text-white px-4 py-1 rounded-lg font-semibold hover:bg-green-500 transition">Approve</button>
              <button className="bg-red-400 text-white px-4 py-1 rounded-lg font-semibold hover:bg-red-500 transition">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 