import { FaTasks } from "react-icons/fa";

export function Logo() {
  return (
    <div className="flex gap-2 items-center p-4 text-2xl">
      <FaTasks />
      <p className="font-semibold">TaskApp</p>
    </div>
  );
}
