import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomHexColor(): string {
  return `#${((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")}`;
}

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
