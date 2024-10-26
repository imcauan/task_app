import { UserEntity } from "@/shared/user/types/user.entity";
import Image from "next/image";

export interface ChatbarUserCardProps {
  user: UserEntity;
}

export function ChatbarUserCard({ user }: ChatbarUserCardProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}/${user?.image}`}
          className="size-8 rounded-full object-cover"
          alt={user?.name}
        />
        <div className="flex flex-col text-left">
          <h1 className="text-sm">{user?.name}</h1>
          <p className="text-xs">Really cool!</p>
        </div>
      </div>
      <div className="flex flex-col items-start h-full gap-2 mt-2">
        <p className="text-xs dark:text-neutral-200">4:33 PM</p>
      </div>
    </div>
  );
}
