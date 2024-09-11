import React from "react";
import { IconEcommerce, PageTitle, ShipperType } from "@/components";


export default function OSComponentsPage() {

  return (
    <div className="flex flex-col gap-3 px-2 md:px-6 ">
      <PageTitle text="OnSite components" />
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-3 md:grid-cols-12 gap-2 ">
          <span className="text-xl text-default-500 col-span-full" >Shippers</span>
          <ShipperType shipper="fedex" isEcommerce />
          <ShipperType shipper="paquetexpress" isEcommerce />
          <ShipperType shipper="dhl" />
          <ShipperType shipper="pkt1" />
          <ShipperType shipper="ups" />
        </div>


        <div className="flex gap-2 flex-wrap">
          <span className="w-full text-xl text-default-500 " >Ecommerce platforms</span>
          <IconEcommerce ecommerce="jumpseller" className="size-10 bg-default-300 p-1 rounded-xl " />
          <IconEcommerce ecommerce="onsite" className="size-10 bg-default-300 p-1 rounded-xl " />
          <IconEcommerce ecommerce="prestashop" className="size-10 bg-default-300 p-1 rounded-xl " />
          <IconEcommerce ecommerce="shopify" className="size-10 bg-default-300 p-1 rounded-xl " />
          <IconEcommerce ecommerce="woocommerce" className="size-10 bg-default-300 p-1 rounded-xl " />
        </div>
      </div>
    </div>
  );
}