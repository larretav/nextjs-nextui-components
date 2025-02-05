import { PageTitle } from "@/components";
import { Avatar } from "@heroui/avatar";

export default function AvatarPage() {
  return (
    <div className="flex flex-col gap-3 px-6">
      <PageTitle text="Avatar" />
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Avatar name="Junior" />
      </div>
    </div>
  );
}