"use client"
import { Card, CardBody, CardFooter, CardHeader, CardProps } from '@nextui-org/card'
import React, { isValidElement, ReactElement, ReactNode } from 'react'
import { cn } from '@/lib/utils';


type Props = Pick<CardProps, 'className' | 'shadow' | 'radius'> & {
  title: ReactNode,
  subtitle?: ReactNode,
  leading?: ReactElement,
  trailing?: ReactElement,
  classNames?: {
    base?: string,
    leading?: string,
    trailing?: string,
    body?: string,
  },

}

export const ListTile = ({ title = 'Titulo', subtitle, leading: leadingIcon, trailing: trailingIcon, className = '', radius = 'sm', shadow = 'sm', classNames }: Props) => {
  return (
    <Card className={cn('flex-row', className)} radius={radius} shadow={shadow} classNames={{
      base: classNames?.base,
      body: classNames?.body,
      header: classNames?.leading,
      footer: classNames?.trailing,
    }}>
      {leadingIcon &&
        <CardHeader className="w-fit justify-center rounded-none pr-0">
          {leadingIcon}
        </CardHeader>}
      <CardBody className="w-fit ">
        {isValidElement(title) ? title : <p className='text-sm font-medium'>{title}</p>}

        {subtitle && isValidElement(subtitle) ? subtitle : <p className='text-xs font-medium text-foreground-500'>{subtitle}</p>}
      </CardBody>
      <CardFooter className="w-fit justify-center rounded-none pl-0">
        {trailingIcon}
      </CardFooter>
    </Card>
  )
}
