'use client';
import { ShipperType } from "@/components/data-display/onsite/ShipperType";
import { Shippers } from "@/types";
import { Checkbox } from "@nextui-org/checkbox";
import { Link } from "@nextui-org/link";
import { RadioProps, useRadio } from "@nextui-org/radio";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import clsx from "clsx";
import { ReactNode } from "react";

type Props = RadioProps & {
  branchName: string;
  address: string;
  shipper: Shippers;
}

export const BranchDeliverRadio = ({ branchName, address, shipper, ...restProps }: Props) => {

  // const urlAddrs = `https://www.google.com/maps/search/?api=1&query=Colonia+Numero,+Ciudad,+Municipio,+Estado,+Pais`
  const urlAddrs = `https://www.google.com/maps/search/?api=1&query=${address}`

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

      <div className="w-full h-full flex items-center justify-between relative">
        <div className="flex flex-col h-full gap-4 ">

          <div className="flex gap-3">
            <ShipperType shipper={shipper} />
            <div className="flex flex-col">
              <p className="text-lg font-semibold">{branchName}</p>
              <Link href={urlAddrs} target="_blank" className="text-sm font-semibold">{address}</Link>
            </div>
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
