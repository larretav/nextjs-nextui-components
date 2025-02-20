'use client';

import { SwipperSelect } from '@/components';
import { Image } from '@heroui/image';
import clsx from 'clsx';
import React from 'react'

const OSSwipperSelect = () => {
  const items = [
    {
      id: 1,
      icon: '/assets/package-type/envelope.png',
      // label: 'Sobre'
    },
    {
      id: 2,
      icon: '/assets/package-type/box.png',
      // label: 'Caja'
    },
    {
      id: 3,
      icon: '/assets/package-type/pallet.png',
      // label: 'Tarima'
    },
  ]


  return (
    <>
      <SwipperSelect direction="vertical" items={items} onChange={(item) => { console.log(item) }} />
      <SwipperSelect direction="horizontal" items={items} onChange={(item) => { console.log(item) }} />
    </>
  )
}

export default OSSwipperSelect