import { cn } from "@/lib/utils"
import { Progress, ProgressProps } from "@heroui/progress"
import clsx from "clsx"
import { useMemo } from "react"

type Props = {
  activeStep?: number,
  className?: string,
  classNames?: ProgressProps['classNames']
  children: React.ReactNode
}

export const Stepper = ({ activeStep = 0, className, classNames, children }: Props) => {

  const value = useMemo(() => {
    if (!Array.isArray(children))
      return 0;

    const value = (activeStep * 100) / (children.length - 1);

    return value <= 0 ? 0 : value >= 100 ? 100 : value;
  }, [activeStep, children])

  return (
    <div className={cn(clsx("w-full relative flex items-center justify-between ", {
      "justify-center": !Array.isArray(children)
    }))}>
      <Progress
        aria-label="Progress"
        value={value}
        maxValue={100}
        size="sm"
        className={cn("w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0", className, clsx({
          "hidden": !Array.isArray(children)
        }))}
        classNames={{
          ...classNames,
          indicator: cn("bg-default-800", classNames?.indicator),
        }}
      />
      {children}
    </div>
  )
}
