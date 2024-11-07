import { Container } from "@/components/common/Container/container.component";
import { ProfileAvatar } from "@/components/common/ProfileAvatar/profile-avatar.component";
import { SearchInput } from "@/components/common/SearchInput/search-input.component";

export function DashboardHeader() {
  return (
    <Container className="w-full mt-10 p-4">
      <Container className="flex w-full gap-6">
        <SearchInput />
        <ProfileAvatar />
      </Container>
    </Container>
  );
}
