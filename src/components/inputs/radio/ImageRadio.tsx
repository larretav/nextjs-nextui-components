'use client';
import { cn } from "@/lib/utils";
import { RadioGroup, useRadio, RadioProps } from "@nextui-org/radio";
import { Image, ImageProps } from "@nextui-org/image";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import clsx from "clsx";

type Props = RadioProps & {
  src: string,
  alt: string,
  imageProps?: ImageProps
}

export const ImageRadio = ({ src, alt, imageProps, ...props }: Props) => {
  const {
    Component,
    children,
    isSelected,
    getBaseProps,
    getInputProps,
    getLabelProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={clsx(
        "group flex-col items-center justify-between hover:bg-content2 transition-all duration-200",
        "w-20 cursor-pointer border-2 border-transparent rounded-lg gap-4 p-4",
        "data-[selected=true]:border-primary", {
        "bg-content border-default": isSelected
      }
      )}

    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>

      <div className="flex flex-col items-center justify-between gap-1">
        <Image src={src} alt={alt} width={100} className="object-contain min-h-[50px]" {...imageProps} />
        {children && <span {...getLabelProps()}>{children}</span>}
      </div>
    </Component>
  );
};