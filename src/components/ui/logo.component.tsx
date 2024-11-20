import { Title } from "@/components/ui/title.component";
import { FaTasks } from "react-icons/fa";

interface LogoProps {
  withName?: boolean;
}

export function Logo({ withName }: LogoProps) {
  return (
    <div className="flex gap-2 items-center p-4 text-xl">
      <FaTasks />
      <Title
        text={withName ? "TaskApp" : ""}
        className="text-xl font-semibold"
      />
    </div>
  );
}
