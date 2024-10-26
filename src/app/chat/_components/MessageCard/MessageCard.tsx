import { MessageEntity } from "@/shared/chat/types/message.entity";
import { UserEntity } from "@/shared/user/types/user.entity";
import React from "react";
import { tv } from "tailwind-variants";

interface MessageCardProps extends React.ComponentProps<"div"> {
  message: MessageEntity;
  loggedUser: UserEntity | null;
}

const card = tv({
  base: "p-2 text-sm max-w-60 rounded text-justify",
  variants: {
    color: {
      primary: "bg-black text-white dark:bg-white dark:text-black",
      secondary:
        "bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white",
    },
  },
});

export function MessageCard({
  message,
  loggedUser,
  ...props
}: MessageCardProps) {
  return (
    <div
      className={card({
        color: message.authorId === loggedUser?.id ? "primary" : "secondary",
      })}
      {...props}
    >
      <p>{message.content}</p>
    </div>
  );
}
