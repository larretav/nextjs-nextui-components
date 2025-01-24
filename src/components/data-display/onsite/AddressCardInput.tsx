'use client';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Input } from '@nextui-org/input';
import { Tooltip } from '@nextui-org/tooltip';
import React, { ReactNode } from 'react'

type Props = {
  title: string;
  postalCode: string;
  address: string;
  isDisabled?: boolean;
  errorMessage?: ReactNode;
  className?: string;
  onPress: () => void;
}

export const AddressCardInput = ({ title, postalCode, address, errorMessage, isDisabled = false, onPress, className = '' }: Props) => {
  return (
    <Card radius="md" shadow="none" isPressable disableRipple onPress={onPress} className={"p-1.5 relative shadow max-w-[160px] " + className}>
      <CardHeader className=" text-default-500 font-semibold text-small">
        {title}
      </CardHeader>

      <CardBody className="py-1" >
        <Input variant="bordered" radius="sm" readOnly value={postalCode} isDisabled={isDisabled} classNames={{
          input: 'text-3xl font-light text-default-700 max-w-fit cursor-pointer',
          inputWrapper: 'min-h-fit py-2 max-w-fit',
        }} />
      </CardBody>

      <CardFooter className=" text-small text-default-700 font-medium">
        <Tooltip content={address} radius="sm">
          <p className="line-clamp-3 text-left">
            {address}
          </p>
        </Tooltip>
      </CardFooter>

      {
        errorMessage && <div className="absolute w-full h-full top-0 left-0 rounded-medium bg-default-500/70">
          {errorMessage}
        </div>
      }

    </Card>
  )
}
