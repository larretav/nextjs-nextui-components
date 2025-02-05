'use client';
import { ShipperType } from "@/components/data-display/onsite/ShipperType";
import { cn } from "@/lib/utils";
import { Shippers } from "@/types";
import { Button } from "@heroui/button";
import { Checkbox } from "@heroui/checkbox";
import { Link } from "@heroui/link";
import { RadioProps, useRadio } from "@heroui/radio";
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
  radius?: "none" | "sm" | "md" | "lg" | "full";
  shadow?: "none" | "sm" | "md" | "lg";
}

export const BranchDeliverRadio = ({ branchName, address, shipper, shadow = 'md', radius = 'md', ...restProps }: Props) => {

  const urlAddrs = `https://www.google.com/maps/search/?api=1&query=${address.colony}+${address.street},+${address.city},+${address.municipality},+${address.state},+${address.country}`
  const radiusClasses = {
    none: "rounded-none",
    sm: "rounded-small",
    md: "rounded-medium",
    lg: "rounded-large",
    full: "rounded-full",
  };

  const shadowClasses = {
    none: "shadow-none",
    sm: "shadow-small",
    md: "shadow-medium",
    lg: "shadow-large",
  };


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
      className={cn(clsx(
        "group inline-flex items-center justify-between bg-content1 shadow-small transition-background relative overflow-hidden opacity-50",
        "w-full border border-transparent rounded-2xl gap-4 p-3 pr-2 z-0", {
        'cursor-pointer hover:bg-content2 data-[selected=true]:border-primary opacity-100': !isDisabled
      }
      ), shadowClasses[shadow], radiusClasses[radius], restProps?.className)}

    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>

      <div className="w-full h-full flex items-center justify-between">
        <div className="flex flex-col h-full gap-4">

          <div className="flex gap-2">
            <div >
              <ShipperType shipper={shipper} className="w-10 h-5 rounded-md" />
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-semibold">{branchName}</p>
              <p className="text-xs text-foreground-500">{address.colony} #{address.number}, {address.city}, {address.municipality}, {address.state}, {address.country}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <Button
            as={Link}
            href={urlAddrs}
            target="_blank"
            isIconOnly
            variant="light"
            radius="full"
            size="sm"
            className="text-blue-500 dark:text-default-500"
          >
            <FaLocationDot size={16} />
          </Button>
          {
            !isDisabled && <Checkbox
              isSelected={isSelected}
              color="primary"
              radius="sm"
              className="-z-10 -m-0 p-1 "
              classNames={{
                wrapper: "me-0"
              }}
            />
          }

        </div>
      </div>
    </Component >
  );
};
