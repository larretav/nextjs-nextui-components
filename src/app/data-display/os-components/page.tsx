import React, { HTMLProps, StyleHTMLAttributes } from "react";
import { ShipOutputSolid, OnSiteIconSolid, OnSiteLogoSolid, OnSiteLogoSolid2 } from "@/components/icons";
import { IconEcommerce, PageTitle, ShipperType, Status } from "@/components";
import Image from "next/image";
import ShipmentCard from "@/components/surfaces/cards/shipments/ShipmentCard";


export default function OSComponentsPage() {

  return (
    <div className="flex flex-col gap-3 px-6 py-3">
      <PageTitle text="OnSite Data Display" />

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 ">
        <ShipperType shipper="fedex" isEcommerce />
        <ShipperType shipper="paquetexpress" isEcommerce />
        <ShipperType shipper="dhl" />
        <ShipperType shipper="pkt1" />
        <ShipperType shipper="ups" />
      </div>


      <div className="flex gap-2">
        <IconEcommerce ecommerce="jumpseller" className="bg-slate-200 p-px " />
        <IconEcommerce ecommerce="onsite" className="bg-slate-200 p-px " />
        <IconEcommerce ecommerce="prestashop" className="bg-slate-200 p-px " />
        <IconEcommerce ecommerce="shopify" className="bg-slate-200 p-px " />
        <IconEcommerce ecommerce="woocommerce" className="bg-slate-200 p-px " />
      </div>

      <div className="flex gap-2">
        <ShipmentCard cost={200} customer="Miguel Angel"  date="23/02/2024" origin="Los Mochis" destination="Acapulco" orderNumber="1234" status="en tránsito" ecommerce="prestashop"  />
      </div>
    </div>
  );
}