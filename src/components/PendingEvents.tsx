import { Card, CardHeader, CardFooter, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";

export interface Event {
  name: string;
  status: "approve" | "reject";
}

export default function PendingEvents({ events }: { events: Event[] }) {
  return (
    <div className="flex flex-col gap-3">
      {events.map((event, idx) => (
        <Card key={event.name + idx}>
          <CardHeader className=" hidden"></CardHeader>
          <CardContent className="flex flex-row md:flex-col lg:flex-row justify-between items-center gap-2">
            <CardTitle>{event.name}</CardTitle>
            <div>
              {event.status === "approve" ? (
                <Button className="w-25 bg-green-400 ">
                  Approve
                </Button>
              ) : (
                <Button className="w-25 bg-red-400 ">
                  Reject
                </Button>
              )}
            </div>
          </CardContent>
          <CardFooter className="hidden"></CardFooter>
        </Card>
      ))}
    </div>
  );
}
