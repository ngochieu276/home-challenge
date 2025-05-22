import { Card, CardHeader, CardFooter, CardTitle, CardContent } from "@/components/ui/card";

export interface Event {
  name: string;
  status: "approve" | "reject";
}

export default function PendingEvents({ events }: { events: Event[] }) {
  return (
    <div className="flex flex-col gap-3">
      {events.map((event, idx) => (
        <Card key={event.name + idx} className="bg-[#2d2d6e] text-white">
          <CardHeader className=" hidden"></CardHeader>
          <CardContent className="flex flex-row md:flex-col lg:flex-row justify-between items-center gap-2">
            <CardTitle>{event.name}</CardTitle>
            <div>
              {event.status === "approve" ? (
                <button className="w-25 bg-green-400 text-white px-4 py-1 rounded-lg font-semibold hover:bg-green-500 transition">
                  Approve
                </button>
              ) : (
                <button className="w-25 bg-red-400 text-white px-4 py-1 rounded-lg font-semibold hover:bg-red-500 transition">
                  Reject
                </button>
              )}
            </div>
          </CardContent>
          <CardFooter className="hidden"></CardFooter>
        </Card>
      ))}
    </div>
  );
}
