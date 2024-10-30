import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sleep = (seconds: number = 1) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  })
}