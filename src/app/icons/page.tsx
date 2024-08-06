import { GithubIconSolid } from "./_components";

export default function IconsPage() {
  return (
    <div className="flex flex-row gap-3 ">
      <div className="w-fit h-fit outline outline-blue-300 rounded-md">
        <GithubIconSolid className="text-blue-500 outline" />
      </div>
    </div>
  );
}