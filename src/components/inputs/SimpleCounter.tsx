"use client"
import { Button } from "@heroui/button"
import { Input } from "@heroui/input"
import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'


export default function SimpleCounter() {
  const [count, setCount] = useState(0)
  return (
    <div className="flex flex-col gap-2 justify-center h-full">
      <div className="flex gap-1">
        <Button isIconOnly size="sm" radius="full" variant="flat"
          onPress={() => { count <= 0 ? setCount(0) : setCount(count - 1) }} >
          <FaMinus className="text-slate-500 dark:text-slate-200" size={8} />
        </Button>
        <Input variant="faded" size="sm" type="number" readOnly classNames={{ input: "text-center text-xs", base: "w-8 no-arrows" }}
          value={count.toString()}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <Button isIconOnly size="sm" radius="full" variant="flat"
          onPress={() => setCount(count + 1)}>
          <FaPlus className="text-slate-500 dark:text-slate-200" size={8}
          />
        </Button>
      </div>
      <Button color="danger" size="sm" variant="light" className="font-medium"
        onPress={() => setCount(0)}
      >
        Remover
      </Button>
    </div>
  )
}