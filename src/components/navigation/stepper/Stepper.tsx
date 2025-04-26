import { cn } from "@/lib/utils"
import { Progress } from "@heroui/progress"
import clsx from "clsx"
import { useMemo } from "react"

type Props = {
  activeStep: number,
  children: React.ReactNode
}

export const Stepper = ({ activeStep, children }: Props) => {

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
        color="success"
        className={clsx("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0", {
          "hidden": !Array.isArray(children)
        })}
        classNames={{ indicator: 'bg-default-900' }}
      />
      {children}
    </div>
  )
}
