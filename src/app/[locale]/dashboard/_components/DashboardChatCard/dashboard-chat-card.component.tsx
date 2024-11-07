import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Title } from "@/components/common/Title/title.component";
import { Container } from "@/components/common/Container/container.component";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ChatEntity } from "@/shared/chat/types/chat.entity";
import Image from "next/image";

interface DashboardChatCardProps {
  chats: ChatEntity[];
}

export function DashboardChatCard({ chats }: DashboardChatCardProps) {
  return (
    <Card className="flex flex-col w-96 h-full rounded-md">
      <CardHeader className="flex w-full items-center justify-between gap-4">
        <Container className="flex gap-2 w-full">
          <Title className="text-sm" text="Chats" />
        </Container>
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        {chats.map((chat) => (
          <Container
            className="flex items-center justify-between gap-4"
            key={chat.id}
          >
            <Container className="flex gap-2 w-full">
              <Image
                src={chat.members[0].image.name}
                alt="Workspace logo"
                width={40}
                height={40}
                className="bg-amber-100 p-2 rounded-full"
              />
              <Title className="text-sm" text={chat.members[0].name} />
            </Container>
          </Container>
        ))}
      </CardContent>
    </Card>
  );
}
