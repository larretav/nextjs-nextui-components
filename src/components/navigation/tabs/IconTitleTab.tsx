import { cn } from '@/lib/utils'
import React, { ReactElement, ReactNode } from 'react'

type Props = {
  title: ReactNode,
  icon: ReactElement,
  className?: string
}

export const IconTitleTab = ({ icon, title, className }: Props) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      {icon}
      <div>{title}</div>
    </div>
  )
}
