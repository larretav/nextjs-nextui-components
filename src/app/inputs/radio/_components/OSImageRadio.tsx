'use client';
import { ImageRadio } from '@/components'
import { RadioGroup } from '@nextui-org/radio'
import React from 'react'

const OSImageRadio = () => {

  const [selected, setSelected] = React.useState("london");

  console.log({selected})

  return (
    <RadioGroup
      orientation="horizontal"
      value={selected}
      onValueChange={setSelected}
    >
      <ImageRadio src="/assets/package-type/envelope.png" alt="test" value="envelope">
        Sobre
      </ImageRadio>
      <ImageRadio src="/assets/package-type/box.png" alt="test" value="box">
        Caja
      </ImageRadio>
      <ImageRadio src="/assets/package-type/pallet.png" alt="test" value="pallet">
        Tarima
      </ImageRadio>
    </RadioGroup >
  )
}

export default OSImageRadio