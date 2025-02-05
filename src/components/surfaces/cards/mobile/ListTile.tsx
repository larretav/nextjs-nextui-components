"use client"
import { Card, CardBody, CardFooter, CardHeader, CardProps } from "@heroui/card"
import React, { isValidElement, ReactElement, ReactNode } from 'react'
import { cn } from '@/lib/utils';
import { useIsSSR } from '@react-aria/ssr';
import { Skeleton } from "@heroui/skeleton";
import clsx from 'clsx';


type Props = Pick<CardProps, 'className' | 'shadow' | 'radius' | 'isPressable' | 'onPress'> & {
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

export const ListTile = ({ title = 'Titulo', subtitle, leading, trailing, className = '', radius = 'sm', shadow = 'sm', classNames, ...props }: Props) => {

  const isSSR = useIsSSR();

  if (isSSR) {
    return <ListTileSkeleton radius={radius} shadow={shadow} leading={leading} trailing={trailing} classNames={classNames} />;
  }

  return (
    <Card className={cn('flex-row w-full data-[pressed=true]:scale-[1]', className)} radius={radius} shadow={shadow} classNames={{
      base: classNames?.base,
      body: classNames?.body,
      header: classNames?.leading,
      footer: classNames?.trailing,
    }} {...props}>

      {leading &&
        <CardHeader className="w-fit justify-center rounded-none pr-0">
          {leading}
        </CardHeader>}

      <CardBody className="w-fit ">
        {isValidElement(title) ? title : <p className='text-sm font-medium'>{title}</p>}

        {subtitle && isValidElement(subtitle) ? subtitle : <p className='text-xs font-medium text-foreground-500'>{subtitle}</p>}
      </CardBody>

      {trailing && <CardFooter className="w-fit justify-center rounded-none pl-0">
        {trailing}
      </CardFooter>}

    </Card>
  )
}


const ListTileSkeleton = ({ leading, trailing, radius = 'sm', shadow = 'sm', classNames }: Pick<Props, 'leading' | 'trailing' | 'radius' | 'shadow' | 'classNames'>) => {
  return (
    <Card
      radius={radius}
      shadow={shadow}
      className={clsx('flex-row w-full', {
        "[&>div>*]:rounded-sm": radius === 'none',
        "[&>div>*]:rounded-small": radius === 'sm',
        "[&>div>*]:rounded-medium": radius === 'md',
        "[&>div>*]:rounded-large": radius === 'lg',
      })}
      classNames={{
        base: classNames?.base,
        body: classNames?.body,
        header: classNames?.leading,
        footer: classNames?.trailing,
      }}>

      {leading &&
        <CardHeader className="w-fit justify-center pr-0">
          <Skeleton className="size-10" />
        </CardHeader>}

      <CardBody className="w-fit ">
        <Skeleton className="size-10 w-full" />
      </CardBody>

      {trailing && <CardFooter className="w-fit pl-0">
        <Skeleton className="size-10" />
      </CardFooter>}

    </Card>
  )
}