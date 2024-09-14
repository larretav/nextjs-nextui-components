'use client';
import { ShipperType } from "@/components/data-display/onsite/ShipperType";
import { cn } from "@/lib/utils";
import { Shippers } from "@/types";
import { Checkbox } from "@nextui-org/checkbox";
import { RadioProps, useRadio } from "@nextui-org/radio";
import { VisuallyHidden } from "@react-aria/visually-hidden";

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
    children,
    isSelected,
    description,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
  } = useRadio(restProps);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group inline-flex items-center justify-between bg-default-50 hover:bg-content2 shadow-md transition-background",
        "w-fit cursor-pointer border border-transparent rounded-2xl gap-4 p-3 pr-2",
        "data-[selected=true]:border-primary",
      )}
      
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>

      <div className="flex flex-col gap-4">
        <div className="flex gap-3">
          <ShipperType shipper={shipper} />
          <div className="flex flex-col">
            <div className="text-4xl font-semibold dark:text-zinc-300">${cost.toFixed(2)} <span className="text-sm font-semibold">MXN</span> </div>
            <span className="text-xs font-medium text-default-400">Precio normal: ${normalCost.toFixed(2)}</span>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-base font-medium dark:text-zinc-300">Entrega estimada: <span className="font-bold">{estimateDate}</span></div>
          <span className="text-sm font-medium text-default-400">{ deliveredType}</span>

        </div>

      </div>

      <span className="z-0">
        <Checkbox isSelected={isSelected} color="success" />
      </span>

      {/* <div {...getLabelWrapperProps()}>
        {children && <span {...getLabelProps()}>{children}</span>}
        {description && (
          <span className="text-small text-foreground opacity-70">{description}</span>
        )}
      </div> */}
    </Component>
  );
};
