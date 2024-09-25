import { Separator } from "@/components/ui/separator";
import { UserEntity } from "@/shared/user/interfaces/UserEntity";
import React from "react";

interface ChatHeaderProps extends React.ComponentProps<"header"> {
  user: UserEntity;
  isTyping: boolean;
}

export function ChatHeader({ user, isTyping, ...props }: ChatHeaderProps) {
  return (
    <header className="flex flex-col w-full max-h-12" {...props}>
      <div className="flex items-center gap-2 p-4">
        <img
          src={`${process.env.NEXT_PUBLIC_API_URL}/${user?.image}`}
          className="rounded-full object-cover size-8"
        />
        <div>
          <h1 className="text-sm">{user?.name}</h1>
          <p className="text-xs text-neutral-800 dark:text-neutral-400">
            {isTyping && "typing..."}
          </p>
        </div>
      </div>
      <Separator />
    </header>
  );
}
