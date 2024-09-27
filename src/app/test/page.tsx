"use client"
import EnviosFilterMenu from "@/components/navigation/menu/EnviosFilterMenu";
import { Button } from "@nextui-org/button";
import { DatePicker } from "@nextui-org/date-picker";
import { Input } from "@nextui-org/input";
import { Popover, PopoverTrigger, PopoverContent, } from "@nextui-org/popover"
import { Select, SelectItem } from "@nextui-org/select";
import React from 'react'
import { FaFilter } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

type Props = {}

export default function page({ }: Props) {
    return (
        <div className="flex">
            <p>Test page</p>
            <div className="flex flex-wrap gap-4 ml-auto">
                <Popover                
                    showArrow
                    offset={10}
                    placement="bottom"
                    backdrop={"transparent"}
                >
                    <PopoverTrigger>
                        <Button color="default" radius="full" size="sm" variant="light" className="capitalize">
                            <FaFilter size={16} />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full">
                        <div className='grid grid-cols-1 gap-2 p-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5'>
                            <DatePicker radius='sm' size='lg' onKeyDown={(e) => e.preventDefault()} aria-label='Calendario' />
                            <Select
                                classNames={{ label: "text-xs" }}
                                size='sm'
                                label="Alianzas"
                            >
                                <SelectItem key={1} classNames={{ title: "text-xs" }}>
                                    PKTExpress
                                </SelectItem>
                                <SelectItem key={2} classNames={{ title: "text-xs" }}>
                                    DHL
                                </SelectItem>
                                <SelectItem key={3} classNames={{ title: "text-xs" }}>
                                    FAST
                                </SelectItem>
                            </Select>
                            <Select
                                size='sm'
                                label="Plataforma"
                                classNames={{ label: "text-xs" }}
                            >
                                <SelectItem key={1} classNames={{ title: "text-xs" }}>
                                    Plataforma 1
                                </SelectItem>
                                <SelectItem key={2} classNames={{ title: "text-xs" }}>
                                    Plataforma 2
                                </SelectItem>
                                <SelectItem key={3} classNames={{ title: "text-xs" }}>
                                    Plataforma 3
                                </SelectItem>
                            </Select>
                            <Select
                                size='sm'
                                label="Documentador"
                                classNames={{ label: "text-xs" }}
                            >
                                <SelectItem key={1} classNames={{ title: "text-xs" }}>
                                    Documentador 1
                                </SelectItem>
                                <SelectItem key={2} classNames={{ title: "text-xs" }}>
                                    Documentador 2
                                </SelectItem>
                                <SelectItem key={3} classNames={{ title: "text-xs" }}>
                                    Documentador 3
                                </SelectItem>
                            </Select>
                            <Input radius="sm" startContent={<IoIosSearch />} placeholder='Buscar por cliente o # de cliente' size='lg' classNames={{ input: "text-xs" }} />
                        </div>
                    </PopoverContent>
                </Popover>
            </div>

        </div>
    )
}