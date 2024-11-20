import { MessageEntity } from "@/shared/chat/types/message.entity";
import React from "react";
import { MessageCard } from "@/components/app/chat/message-card";
import { UserEntity } from "@/shared/user/types/user.entity";
import { Container } from "@/components/ui/container.component";

interface MessageListProps {
  messages: MessageEntity[];
  loggedUser: UserEntity | null;
}

export function MessageList({ messages, loggedUser }: MessageListProps) {
  return (
    <Container className="flex flex-col gap-6 w-full h-full p-2 mt-6 overflow-y-auto">
      {messages.map((message) => (
        <Container
          key={message.id}
          className={
            message.authorId === loggedUser?.id ? "self-end" : "self-start"
          }
        >
          <MessageCard
            message={message}
            loggedUser={loggedUser}
            key={message.id}
          />
        </Container>
      ))}
    </Container>
  );
}
