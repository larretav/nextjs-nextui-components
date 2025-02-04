import { SVGProps } from "react";
import { NextUIColorKeys, TailwindColorKeys } from "./colors";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
  color?: NextUIColorKeys | TailwindColorKeys | 'inherit',
};
