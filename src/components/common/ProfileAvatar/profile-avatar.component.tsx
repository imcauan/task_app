import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";

interface ProfileAvatarProps {
  userProfilePicture?: string;
}

export function ProfileAvatar({ userProfilePicture }: ProfileAvatarProps) {
  return (
    <Avatar>
      <AvatarImage src={userProfilePicture} />
      <AvatarFallback>
        <FaUser />
      </AvatarFallback>
    </Avatar>
  );
}
