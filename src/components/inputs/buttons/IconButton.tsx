'use client';
import { Button, ButtonProps } from '@nextui-org/button'
import React from 'react'

export const IconButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      isIconOnly
      variant="light"
      radius="full"
      size="sm"
      color="default"
      {...props}
    >
      {children}
    </Button>
  )
}
