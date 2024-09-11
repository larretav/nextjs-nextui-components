import { PageTitle } from "@/components";
import { Avatar } from "@nextui-org/avatar";

export default function AvatarPage() {
  return (
    <div className="flex flex-col gap-3 px-6">
      <PageTitle text="Avatar" />
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Avatar name="Junior" />
      </div>
    </div>
  );
}