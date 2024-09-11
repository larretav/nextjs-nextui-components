import React from "react";
import { IconEcommerce, PageTitle, ShipperType } from "@/components";


export default function OSComponentsPage() {

  return (
    <div className="flex flex-col gap-3 px-2 md:px-6">
      <PageTitle text="OnSite components" />
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-3 gap-2 md:grid-cols-12">
          <span className="col-span-full text-xl text-default-500" >Shippers</span>
          <ShipperType shipper="fedex" isEcommerce />
          <ShipperType shipper="paquetexpress" isEcommerce />
          <ShipperType shipper="dhl" />
          <ShipperType shipper="pkt1" />
          <ShipperType shipper="ups" />
        </div>


        <div className="flex flex-wrap gap-2">
          <span className="w-full text-xl text-default-500" >Ecommerce platforms</span>
          <IconEcommerce ecommerce="jumpseller" className="p-1 rounded-xl size-10 bg-default-300" />
          <IconEcommerce ecommerce="onsite" className="p-1 rounded-xl size-10 bg-default-300" />
          <IconEcommerce ecommerce="prestashop" className="p-1 rounded-xl size-10 bg-default-300" />
          <IconEcommerce ecommerce="shopify" className="p-1 rounded-xl size-10 bg-default-300" />
          <IconEcommerce ecommerce="woocommerce" className="p-1 rounded-xl size-10 bg-default-300" />
        </div>
      </div>
    </div>
  );
}