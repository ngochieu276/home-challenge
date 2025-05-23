import React from "react";
import { useSettingsStore } from "@/store/store.setting";

import { Avatar, AvatarFallback } from "./ui/avatar";
import dynamic from "next/dynamic";

const HoverCard = dynamic(
  () => import("./ui/hover-card").then((mod) => mod.HoverCard),
  { ssr: false }
);
const HoverCardContent = dynamic(
  () => import("./ui/hover-card").then((mod) => mod.HoverCardContent),
  { ssr: false }
);
const HoverCardTrigger = dynamic(
  () => import("./ui/hover-card").then((mod) => mod.HoverCardTrigger),
  { ssr: false }
);

const UserButton = () => {
  const { name, email } = useSettingsStore((state) => state);

  return (
    <div className="mr-10 cursor-pointer">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Avatar>
            <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
        </HoverCardTrigger>
        <HoverCardContent className="bg-neutral-600/30">
          <div className="flex flex-col items-center gap-1">
            <span className="font-semibold text-base">{name}</span>
            <span className="text-sm text-muted-foreground">{email}</span>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default UserButton;
