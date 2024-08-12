import React, { HTMLProps, StyleHTMLAttributes } from "react";
import { GithubIconSolid, OnSiteIconSolid } from "@/components/icons";

export default function IconsPage() {

  const clasName: HTMLProps<HTMLElement>['className'] = 'text-default-800';

  return (
    <div className="flex flex-row gap-3 mt-2">
      <div className="p-2 bg-default-200 rounded-xl">
        <GithubIconSolid color="blue" viewBox="0 0 15 15" className={clasName} />
      </div>

      <div className="p-2 bg-default-200 rounded-xl">
        <OnSiteIconSolid />
      </div>
    </div>
  );
}