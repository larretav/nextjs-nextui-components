"use client"
import React,{useCallback} from 'react'
import { Popover, PopoverTrigger, PopoverContent, } from "@heroui/popover"
import { Button } from "@heroui/button"
import { FaFilter } from 'react-icons/fa6'
import { Select, SelectItem } from "@heroui/select"
import { Input } from "@heroui/input"
import { IoIosSearch } from 'react-icons/io'
import { useCustomerCatalogStore } from '@/store/tables/customer-catalog-store'
import { SharedSelection } from "@heroui/system"
import { Badge } from "@heroui/badge"


export default function CustomerPopoverFilter() {
    const filterCountry = useCustomerCatalogStore.use.filterCountry()
    const filterWord = useCustomerCatalogStore.use.filterWord()
    const filterCustomerType = useCustomerCatalogStore.use.filterCustomerType()
    const selectedTabKey = useCustomerCatalogStore.use.selectedTabKey() as string
    const setFilterCountry = useCustomerCatalogStore.use.setFilterCountry()
    const setFilterWord = useCustomerCatalogStore.use.setFilterWord()
    const setFilterCustomerType = useCustomerCatalogStore.use.setFilterCustomerType()
    const setSelectedTabKey = useCustomerCatalogStore.use.setSelectedTabKey()
    const setPage = useCustomerCatalogStore.use.setPage()
    
    const isAnyFilterActive = filterCountry != "Todos" || filterWord != "" || filterCustomerType != "Todos" || selectedTabKey != "Todos"
    const filterCount1 = filterCountry != "Todos" ? 1 : 0
    const filterCount2 = filterWord != "" ? 1 : 0
    const filterCount3 = filterCustomerType != "Todos" ? 1 : 0
    const filterCount4 = selectedTabKey != "Todos" ? 1 : 0
    const filterCountTotal = filterCount1 + filterCount2 + filterCount3 + filterCount4
    const onFilterWordChange = useCallback((val: string) => {
        setFilterWord(val)
        setPage(1);
    }, [setPage, setFilterWord]);

    const onCountryChange = useCallback((val: SharedSelection) => {
        if(val.currentKey)setFilterCountry(val.currentKey )
        setPage(1);
    }, [setPage, setFilterCountry]);

    const onCustomerTypeChange = useCallback((val: SharedSelection) => {
        if (val.currentKey )setFilterCustomerType(val.currentKey)
        setPage(1);
    }, [setPage, setFilterCustomerType]);

    const handleResetFilters = () => {
        setFilterCountry("Todos")
        setFilterWord("")
        setFilterCustomerType("Todos")
        setSelectedTabKey("si")
        setPage(1)
    }
    return (
        <Popover
            showArrow
            offset={10}
            placement="bottom-end"
            backdrop={"opaque"}
        >
            <PopoverTrigger>
                  <Button isIconOnly radius="full" size="sm" variant="light" className="capitalize">
                    <Badge content={filterCountTotal} isInvisible={!isAnyFilterActive} size='sm' color='primary'>
                        <FaFilter size={16} className='text-zinc-600 dark:text-zinc-300' />
                    </Badge>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full">
                <div className='grid grid-cols-1 gap-2 p-2 md:grid-cols-3'>
                    <Input radius="sm" startContent={<IoIosSearch />}
                        value={filterWord}
                        onValueChange={onFilterWordChange}
                        placeholder='Búsqueda general' size='lg'
                        classNames={{ input: "text-xs" }} />
                    <Select
                        size='sm'
                        label="País"
                        disallowEmptySelection
                        classNames={{ label: "text-xs" }}
                        selectedKeys={[filterCountry]}
                        onSelectionChange={onCountryChange}
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
                        <SelectItem key={"Us"} classNames={{ title: "text-xs" }}>
                            USA
                        </SelectItem>
                    </Select>
                    <Select
                        size='sm'
                        label="Tipo"
                        disallowEmptySelection
                        classNames={{ label: "text-xs" }}
                        selectedKeys={[filterCustomerType]}
                        onSelectionChange={onCustomerTypeChange}
                    >
                        <SelectItem key={"Todos"} classNames={{ title: "text-xs" }}>
                            Todos
                        </SelectItem>
                        <SelectItem key={"Fisica"} classNames={{ title: "text-xs" }}>
                            Persona
                        </SelectItem>
                        <SelectItem key={"Moral"} classNames={{ title: "text-xs" }}>
                            Compañía
                        </SelectItem>
                    </Select>
                    <Button size='sm' color='warning' onPress={handleResetFilters}>Reiniciar filtros</Button>
                </div>
            </PopoverContent>
        </Popover>
    )
}