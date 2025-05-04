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
    <div className="w-full relative">
      <Progress
        aria-label="Progress"
        value={value}
        maxValue={100}
        size="sm"
        className={cn("w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ", className, clsx({
          "hidden": !Array.isArray(children)
        }))}
        classNames={{
          ...classNames,
          indicator: cn("bg-default-800 z-0", classNames?.indicator),
        }}
      />
      {/* <div className={cn(clsx("flex items-center justify-between bg-red-900 *:bg-blue-700", {
        "justify-center": !Array.isArray(children)
      }))}>
        {children}
      </div> */}
      <div className={cn(clsx("grid grid-flow-col auto-cols-fr", {
        "justify-center": !Array.isArray(children)
      }))}>
        {!Array.isArray(children)
          ? children
          : children.map((child, index) => (
            <div key={index} className={cn(clsx("z-10  flex items-center justify-center", {
              "justify-start": index === 0,
              "justify-end": index === children.length - 1
            }))}>
              {child}
            </div>
          ))}
      </div>
    </div>
  )
}
