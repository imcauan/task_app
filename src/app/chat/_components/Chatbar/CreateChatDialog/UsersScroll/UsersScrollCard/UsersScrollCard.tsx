import { Card } from "@/components/ui/card";
import { UserEntity } from "@/shared/user/types/user.entity";
import Image from "next/image";
import React from "react";

interface UsersScrollCardProps extends React.ComponentProps<"div"> {
  user: UserEntity;
  loggedUser: UserEntity | null;
}

export function UsersScrollCard({
  user,
  loggedUser,
  ...props
}: UsersScrollCardProps) {
  return (
    <Card
      className="flex w-full gap-4 items-center p-2 rounded-none border-none dark:hover:bg-neutral-900"
      onClick={props.onClick}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}/${user.image}`}
        className="object-cover size-10 rounded-full"
        alt={user.name}
      />
      <p className="text-sm font-normal">
        {user.name === loggedUser?.name ? `${user.name} (yourself)` : user.name}
      </p>
    </Card>
  );
}
