"use client"
import { Card } from '@nextui-org/card'
import { Input } from '@nextui-org/input'
import React, { useState } from 'react'
import { Switch } from "@nextui-org/switch";
type Props = {}
const switchesList = [
    { option: "Orden", isActive: true },
    { option: "Ticket", isActive: true },
    { option: "Fecha", isActive: true },
    { option: "Cliente", isActive: true },
    { option: "Origen-Destino", isActive: true },
    { option: "Costo", isActive: true },
    { option: "Estatus", isActive: true },
    { option: "Alianza", isActive: true }
]
export default function EnviosShowMoreColumnsMenu({ }: Props) {
    const [filter, setFilter] = useState("")
    const [switchList, setSwitchList] = useState(switchesList)    
    const result = switchList.filter((item) => item.option.toLowerCase().includes(filter))

    return (
        <Card className='p-2 max-w-72'>
            <Input fullWidth placeholder='Tipo de columna' value={filter} onChange={(e) => setFilter(e.target.value.toLowerCase())} />
            <div className="flex flex-col gap-2 p-2 mt-2">
                {result?.map((item, index) => (
                    <Switch key={item.option + index} isSelected={item.isActive} size='sm' classNames={{ label: "ml-3" }} 
                    onChange={() => {
                        const updatedSwitchList = switchList.map((i) => {
                          if (i.option === item.option) {
                            return { ...i, isActive: !i.isActive };
                          }
                          return i;
                        });
                        setSwitchList(updatedSwitchList);
                      }}  >
                        {item.option}
                    </Switch>
                ))}
            </div>
        </Card>
    )
}