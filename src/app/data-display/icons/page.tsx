import React, { HTMLProps, StyleHTMLAttributes } from "react";
import { GithubIconSolid, OnSiteIconSolid, OnSiteIconSolid2 } from "@/components/icons";
import { PageTitle } from "@/components";

export default function IconsPage() {

  return (
    <div className="flex flex-col gap-3 px-6 py-3">
      <PageTitle text="Iconos" />
      <div className="flex flex-row gap-3 text-slate-600 dark:text-slate-300">
        <div className="p-2 bg-default-200 rounded-xl ">
          <OnSiteIconSolid size={30} />
        </div>

        <div className="p-2 bg-default-200 rounded-xl ">
          <GithubIconSolid size={30} viewBox="0 0 15 15" />
        </div>

        <div className="p-2 bg-default-200 rounded-xl ">
          <OnSiteIconSolid2 size={30} />
        </div>

      </div>
    </div>
  );
}