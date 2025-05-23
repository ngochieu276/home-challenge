import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import ConfirmModal from "./ConfirmModal";

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
            <ConfirmModal
              title={event.status === "approve" ? "Approve" : "Reject"}
              description="Once action, can't be undone"
              onConfirm={() => true}
              confirmSuccessMsg={
                event.status === "approve" ? "Approve !" : "Reject !"
              }
              trigger={
                <div>
                  {event.status === "approve" ? (
                    <Button
                      className="w-25 bg-green-600 hover:bg-green-600/90"
                      type="button"
                      aria-label="Approve"
                    >
                      Approve
                    </Button>
                  ) : (
                    <Button
                      className="w-25 bg-red-400 hover:bg-red-400/90"
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="dialog-id" // Optional, if it controls something
                      aria-label="Reject"
                    >
                      Reject
                    </Button>
                  )}
                </div>
              }
            />
          </CardContent>
          <CardFooter className="hidden"></CardFooter>
        </Card>
      ))}
    </div>
  );
}
