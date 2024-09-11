import React, { HTMLProps, StyleHTMLAttributes } from "react";
import { ShipOutputSolid, OnSiteIconSolid, OnSiteLogoSolid, OnSiteLogoSolid2 } from "@/components/icons";
import { PageTitle } from "@/components";
import Image from "next/image";

import OnSiteLogoSVG from '@/assets/onsite-logo-complete3.svg'

export default function IconsPage() {

  return (
    <div className="flex flex-col gap-3 py-3 px-6">
      <PageTitle text="Iconos" />
      <div className="flex flex-row gap-3 text-slate-600 dark:text-slate-300">
        <div className="p-2 rounded-xl bg-default-200">
          <OnSiteIconSolid size={30} viewBox="0 0 24 24 " />
        </div>

        <div className="p-2 rounded-xl bg-default-200">
          <ShipOutputSolid size={30} viewBox="0 0 15 15" />
        </div>

        <div className="p-2 rounded-xl bg-default-200">
          <OnSiteLogoSolid size={30}  />
        </div>

      </div>
    </div>
  );
}