import React, { HTMLProps, StyleHTMLAttributes } from "react";
import { GithubIconSolid } from "./_components";

export default function IconsPage() {

  const clasName: HTMLProps<HTMLElement>['className'] = 'text-red-500';

  return (
    <div className="flex flex-row gap-3 mt-2">
      <div className="p-1 outline outline-1 outline-blue-300 rounded-md">
        <GithubIconSolid viewBox="0 0 15 15" className={clasName} />
      </div>
    </div>
  );
}