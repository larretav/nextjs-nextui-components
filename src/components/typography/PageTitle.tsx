import { cn } from "@/lib/utils"

type Props = {
  text: string;
  className?: string;
}

export const PageTitle = ({ text, className }: Props) => {
  return (
    <span className={cn("text-2xl font-semibold text-foreground-700", className)}>{text}</span>
  )
}
