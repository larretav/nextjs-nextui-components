'use client';
import { ShipperType } from "@/components/data-display/onsite/ShipperType";
import { cn } from "@/lib/utils";
import { Shippers } from "@/types";
import { Checkbox } from "@heroui/checkbox";
import { RadioProps, useRadio } from "@heroui/radio";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import clsx from "clsx";
import { get } from "http";
import { ReactNode } from "react";

type Props = RadioProps & {
  cost: number;
  normalCost?: number;
  estimateDate?: string;
  deliveredType?: string;
  shipper: Shippers;
  errorContent?: ReactNode;
  radius?: "none" | "sm" | "md" | "lg" | "full";
  shadow?: "none" | "sm" | "md" | "lg";
}

export const QuotationRadio = ({ cost = 0.0, normalCost = 0.0, estimateDate, deliveredType, shipper, errorContent, shadow = 'md', radius = 'md', ...restProps }: Props) => {

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
        'cursor-pointer hover:bg-content2 data-[selected=true]:border-primary opacity-100 rounded': !isDisabled
      }
      ), shadowClasses[shadow], radiusClasses[radius], restProps?.className)}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>

      {errorContent && <div className="absolute top-0 left-0 w-full h-full z-50">{errorContent}</div>}

      <div className="w-full h-full flex items-center justify-between relative">
        <div className="flex flex-col h-full gap-4 ">

          <div className="flex gap-3">
            <ShipperType shipper={shipper} />
            <div className="flex flex-col flex-wrap">
              <p className="font-semibold max-[320px]:text-2xl text-4xl">${cost.toFixed(2)}<span className="text-base font-bold">MXN</span></p>
              <span className="text-sm font-semibold text-foreground-400">Precio normal: ${normalCost.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-base font-medium ">Entrega estimada: <span className="font-bold">{estimateDate}</span></div>
            <span className="text-sm font-semibold text-foreground-400">{deliveredType}</span>
          </div>

        </div>

        {
          !isDisabled &&
          <Checkbox
            isSelected={isSelected}
            color="primary"
            radius="sm"
            className="-z-10 -m-0 p-1 absolute top-0 bottom-0 right-0"
            classNames={{
              wrapper: "me-0"
            }}
          />
        }
      </div>
    </Component >
  );
};
