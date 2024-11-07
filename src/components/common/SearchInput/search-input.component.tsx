import { Container } from "@/components/common/Container/container.component";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";

export function SearchInput() {
  return (
    <Container className="relative w-full flex items-center justify-between">
      <FaSearch size={20} className="w-5 h-5 absolute ml-3 " />
      <Input placeholder="Search" className="px-10" />
    </Container>
  );
}
