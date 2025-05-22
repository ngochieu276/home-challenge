import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface StatProps { label: string; value: number };

export default function StatCards({ label, value }: StatProps) {
  return (
    <Card className="bg-gradient-to-tr from-[#2d2d6e] to-[#3a1c71] text-white min-w-[120px]">
      <CardHeader className="text-center">
        <span className="text-5xl font-bold">{value}</span>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center text-center">
        <CardTitle className="text-center">{label}</CardTitle>
      </CardContent>
    </Card>
  );
} 