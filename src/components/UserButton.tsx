import React from "react";
import { useSettingsStore } from "@/app/store/store.setting";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Avatar, AvatarFallback } from "./ui/avatar";

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
