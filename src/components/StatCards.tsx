import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface StatProps { label: string; value: number };

export default function StatCards({ label, value }: StatProps) {
  return (
    <Card className="">
      <CardHeader className="text-center">
        <span className="text-5xl font-bold">{value}</span>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center text-center">
        <CardTitle className="text-center">{label}</CardTitle>
      </CardContent>
    </Card>
  );
} 