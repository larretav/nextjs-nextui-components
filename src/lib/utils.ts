import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const sleep = (seconds: number) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(true)
    }, seconds * 1000);
  })
}