"use client"
import PackageType from '@/components/data-display/onsite/PackageType'
import { Card } from '@nextui-org/card'
import { Button } from "@nextui-org/button";
import { FaEllipsisVertical } from 'react-icons/fa6';
import React from 'react'
type Props = {
    title: string,
    subtitle: string
    leadingIcon?: "box" | "envelope" | "pallet"
    showTrailing?: boolean
}

export default function ListTitle({ title, subtitle, leadingIcon, showTrailing }: Props) {
    return (
        <Card className='py-3 px-4 flex-row'>
            {leadingIcon &&
                <div className='flex mx-2'>
                    <PackageType type={leadingIcon} className="self-center" />
                </div>}
            <div className='w-full'>
                <p className='text-sm font-medium'>{title}</p>
                <p className='text-xs leading-4 font-medium text-gray-400'>{subtitle}</p>
            </div>
            {showTrailing &&
                <Button isIconOnly variant='light' size='sm' className='self-center' radius='full'>
                    <FaEllipsisVertical />
                </Button>
            }
        </Card>
    )
}
