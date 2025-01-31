'use client';
import { ShipperType } from "@/components/data-display/onsite/ShipperType";
import { cn } from "@/lib/utils";
import { Shippers } from "@/types";
import { Checkbox } from "@nextui-org/checkbox";
import { RadioProps, useRadio } from "@nextui-org/radio";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { get } from "http";

type Props = RadioProps & {
  cost: number;
  normalCost?: number;
  estimateDate?: string;
  deliveredType?: string;
  shipper: Shippers;
}

export const QuotationRadio = ({ cost = 0.0, normalCost = 0.0, estimateDate, deliveredType, shipper, ...restProps }: Props) => {
  const {
    Component,
    isSelected,
    getBaseProps,
    getInputProps,
    getControlProps,
    getWrapperProps,
    isDisabled,
  } = useRadio(restProps);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group inline-flex items-center justify-between bg-content1 hover:bg-content2 shadow-md transition-background",
        "w-fit cursor-pointer border border-transparent rounded-2xl gap-4 p-3 pr-2 z-0",
        "data-[selected=true]:border-primary",
      )}

    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>

      <div className="flex flex-col gap-4 w-full ">
        <div className="flex gap-3 ">
          <ShipperType shipper={shipper} />
          <div className="flex flex-col">
            <div className="text-4xl font-semibold text-nowrap">${cost.toFixed(2)}<span className="text-base font-bold">MXN</span></div>
            <span className="text-xs font-medium text-default-400">Precio normal: ${normalCost.toFixed(2)}</span>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-base font-medium ">Entrega estimada: <span className="font-bold">{estimateDate}</span></div>
          <span className="text-sm font-medium text-default-400">{deliveredType}</span>
        </div>

      </div>


      <Checkbox
        isSelected={isSelected}
        color="success"
        radius="sm"
        className="z-50"
        onValueChange={() => { restProps.onChange?.({ target: { value: restProps.value } } as any)}}
      />

    </Component>
  );
};
