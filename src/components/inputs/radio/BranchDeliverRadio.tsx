'use client';
import { ShipperType } from "@/components/data-display/onsite/ShipperType";
import { Shippers } from "@/types";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Link } from "@nextui-org/link";
import { RadioProps, useRadio } from "@nextui-org/radio";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import clsx from "clsx";
import { ReactNode } from "react";
import { FaArrowUpRightFromSquare, FaLocationDot, FaSquareArrowUpRight } from "react-icons/fa6";

export interface BranchDeliverAddress {
  zipCode: string,
  colony: string,
  street: string,
  number: string,
  city: string,
  state: string,
  municipality: string,
  country: string,
}

type Props = RadioProps & {
  branchName: string;
  address: BranchDeliverAddress;
  shipper: Shippers;
}

export const BranchDeliverRadio = ({ branchName, address, shipper, ...restProps }: Props) => {

  const urlAddrs = `https://www.google.com/maps/search/?api=1&query=${address.colony}+${address.street},+${address.city},+${address.municipality},+${address.state},+${address.country}`
  // const urlAddrs = `https://www.google.com/maps/search/?api=1&query=${address}`


  const {
    Component,
    isSelected,
    getBaseProps,
    getInputProps,
    isDisabled,
  } = useRadio(restProps);

  return (
    <Component
      {...getBaseProps()}
      className={clsx(
        "group inline-flex items-center justify-between bg-content1 shadow-small transition-background relative overflow-hidden",
        "w-full border border-transparent rounded-2xl gap-4 p-3 pr-2 z-0", {
        'cursor-pointer hover:bg-content2 data-[selected=true]:border-primary': !isDisabled
      }
      )}

    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>

      <div className="w-full h-full flex items-center justify-between">
        <div className="flex flex-col h-full gap-4">

          <div className="flex gap-3">
            <ShipperType shipper={shipper} />
            <div className="flex flex-col">
              <p className="text-lg font-semibold">{branchName}</p>
              <p className="text-sm text-foreground-500">{address.colony} #{address.number}, {address.city}, {address.municipality}, {address.state}, {address.country}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Button
            as={Link}
            href={urlAddrs}
            target="_blank"
            isIconOnly
            variant="light"
            radius="full"
            size="sm"
            className="text-blue-400 dark:text-default-500"
          >
            <FaLocationDot size={16} />
          </Button>
          <Checkbox
            isSelected={isSelected}
            color="primary"
            radius="sm"
            className="-z-10 -m-0 p-1 "
            classNames={{
              wrapper: "me-0"
            }}
          />
        </div>
      </div>
    </Component >
  );
};
