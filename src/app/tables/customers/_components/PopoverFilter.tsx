import React from 'react'
import { Popover, PopoverTrigger, PopoverContent, } from "@nextui-org/popover"
import { Button } from '@nextui-org/button'
import { FaFilter } from 'react-icons/fa6'
import { Select, SelectItem } from '@nextui-org/select'
import { Input } from '@nextui-org/input'
import { IoIosSearch } from 'react-icons/io'
import { useCustomerTableStore } from '@/store/tables/customer-table-store'


export default function PopoverFilter() {
    const filterCountry = useCustomerTableStore.use.filterCountry()
    const filterWord = useCustomerTableStore.use.filterWord()
    const filterCustomerType = useCustomerTableStore.use.filterCustomerType()

    const setFilterCountry = useCustomerTableStore.use.setFilterCountry()
    const setFilterWord = useCustomerTableStore.use.setFilterWord()
    const setFilterCustomerType = useCustomerTableStore.use.setFilterCustomerType()

    
    
    return (
        <Popover
            showArrow
            offset={10}
            placement="bottom-end"
            backdrop={"opaque"}
        >
            <PopoverTrigger>
                <Button color="default" isIconOnly radius="full" size="sm" variant="light" className="capitalize">
                    <FaFilter size={16} className='text-zinc-600 dark:text-zinc-300' />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full">
                <div className='grid grid-cols-1 gap-2 p-2 md:grid-cols-3'>
                    <Input radius="sm" startContent={<IoIosSearch />}
                        value={filterWord}
                        onValueChange={(val) => setFilterWord(val)}
                        placeholder='Búsqueda general' size='lg'
                        classNames={{ input: "text-xs" }} />
                    <Select
                        size='sm'
                        label="País"
                        classNames={{ label: "text-xs" }}
                        defaultSelectedKeys={[filterCountry]}
                        onSelectionChange={(val) => setFilterCountry(val.currentKey as string)}
                    >
                        <SelectItem key={"Todos"} classNames={{ title: "text-xs" }}>
                            Todos
                        </SelectItem>
                        <SelectItem key={"Mx"} classNames={{ title: "text-xs" }}>
                            México
                        </SelectItem>
                        <SelectItem key={"Cl"} classNames={{ title: "text-xs" }}>
                            Chile
                        </SelectItem>
                    </Select>
                    <Select
                        size='sm'
                        label="Tipo"
                        classNames={{ label: "text-xs" }}
                        defaultSelectedKeys={[filterCustomerType]}
                        onSelectionChange={(val) => setFilterCustomerType(val.currentKey as string)}
                    >
                        <SelectItem key={"Todos"} classNames={{ title: "text-xs" }}>
                            Todos
                        </SelectItem>
                        <SelectItem key={"person"} classNames={{ title: "text-xs" }}>
                            Persona
                        </SelectItem>
                        <SelectItem key={"company"} classNames={{ title: "text-xs" }}>
                            Compañía
                        </SelectItem>
                    </Select>
                </div>
            </PopoverContent>
        </Popover>
    )
}