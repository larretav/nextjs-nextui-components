'use client';
import { ImageRadio } from '@/components'
import { RadioGroup } from '@nextui-org/radio'
import React from 'react'

const OSImageRadio = () => {

  const [selected, setSelected] = React.useState("london");

  console.log({ selected })

  const options = [
    {
      src: '/assets/package-type/envelope.png',
      alt: 'test',
      value: 'envelope',
      text: 'Sobre'
    },
    {
      src: '/assets/package-type/box.png',
      alt: 'test',
      value: 'box',
      text: 'Caja'
    },
    {
      src: '/assets/package-type/pallet.png',
      alt: 'test',
      value: 'pallet',
      text: 'Tarima'
    },
  ]

  return (
    <RadioGroup
      orientation="horizontal"
      value={selected}
      onValueChange={setSelected}

    >
      {options.map(({text, ...props}) => <ImageRadio key={props.value} {...props} activeColor="sky">
        {text}
      </ImageRadio>)}

    </RadioGroup >
  )
}

export default OSImageRadio