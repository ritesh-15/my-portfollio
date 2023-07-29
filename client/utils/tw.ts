import { twMerge } from "tailwind-merge"

export default function tw(...className: any[]) {
  return twMerge(...className)
}
