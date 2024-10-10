"use client"
import React, { useCallback, } from 'react'
import { Popover, PopoverTrigger, PopoverContent, } from "@nextui-org/popover"
import { Button } from '@nextui-org/button'
import { FaFilter } from 'react-icons/fa6'
import { Select, SelectItem } from '@nextui-org/select'
import { Input } from '@nextui-org/input'
import { IoIosSearch } from 'react-icons/io'
import { useShipmentTableStore } from '@/store/tables/shipment-table-store'
import { SharedSelection } from '@nextui-org/system'
import { Badge } from '@nextui-org/badge'

export default function ShipmentsPopoverFilter() {
    const documenters = useShipmentTableStore.use.documenters()

    const filterShipper = useShipmentTableStore.use.filterShipper()
    const filterEcommercePlatform = useShipmentTableStore.use.filterEcommercePlatform()
    const filterDocumenter = useShipmentTableStore.use.filterDocumenter()
    const filterWord = useShipmentTableStore.use.filterWord()
    const selectedTabKey = useShipmentTableStore.use.selectedTabKey() as string

    const setFilterShipper = useShipmentTableStore.use.setFilterShipper()
    const setFilterEcommercePlatform = useShipmentTableStore.use.setFilterEcommercePlatform()
    const setFilterWord = useShipmentTableStore.use.setFilterWord()
    const setFilterDocumenter = useShipmentTableStore.use.setFilterDocumenter()
    const setPage = useShipmentTableStore.use.setPage()
    const setStart = useShipmentTableStore.use.setStart()
    const toggleDetails = useShipmentTableStore.use.toggleDetails()
    const setSelectedTableKey = useShipmentTableStore.use.setSelectedTableKey()
    const setSelectedTabKey = useShipmentTableStore.use.setSelectedTabKey()
    //Display how many filters are active
    const isAnyFilterActive = filterShipper != "0" || filterEcommercePlatform != "X" || filterWord.length > 3 || selectedTabKey != "X" || filterDocumenter != "X"
    //Number of active filters
    const filterCount = filterShipper != "0" ? 1 : 0
    const filterCount2 = filterEcommercePlatform != "X" ? 1 : 0
    const filterCount3 = filterWord != "" && filterWord.length > 3 ? 1 : 0
    const filterCount4 = selectedTabKey != "X" ? 1 : 0
    const filterCount5 = filterDocumenter != "X" ? 1 : 0
    const filterCountTotal = filterCount + filterCount2 + filterCount3 + filterCount4 + filterCount5
    
    const onShipperChange = useCallback((val: SharedSelection) => {
        if (val.currentKey) {
            setFilterShipper(val.currentKey)
            setStart(0)
            setPage(1);
            toggleDetails(false)
            setSelectedTableKey(new Set([]))
        }
    }, [setPage, setFilterShipper]);

    const onEcommerceChange = useCallback((val: SharedSelection) => {
        if (val.currentKey) {
            setStart(0)
            setFilterEcommercePlatform(val.currentKey)
            setPage(1);
            toggleDetails(false)
            setSelectedTableKey(new Set([]))
        }
    }, [setPage, setFilterEcommercePlatform]);

    const onDocumenterChange = useCallback((val: SharedSelection) => {
        if (val.currentKey) {
            setStart(0)
            setFilterDocumenter(val.currentKey)
            setPage(1);
            toggleDetails(false)
            setSelectedTableKey(new Set([]))
        }
    }, [setPage, setFilterDocumenter]);

    const onFilterWordChange = useCallback((val: string) => {
        setFilterWord(val)
        if (filterWord.length > 3) {
            setStart(0)
            setPage(1);
            toggleDetails(false)
            setSelectedTableKey(new Set([]))
        }
    }, [setPage, setFilterWord, filterWord]);

   const handleResetFilters = ()=>{
    setFilterShipper("0")
        setFilterEcommercePlatform("X")
        setFilterWord("")
        setFilterDocumenter("X")
        setStart(0)
        setPage(1)
        toggleDetails(false)
        setSelectedTableKey(new Set([]))
        setSelectedTabKey("P,A")
   }

    const docummenterItems = documenters?.data?.map((documenter) => ({
        key: documenter.id.toString(),
        label: documenter.clientName
    }))
    const allDocumenters = { key: "X", label: "Todos" }
    docummenterItems?.unshift(allDocumenters)
    
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
                <div className='grid grid-cols-1 gap-2 p-2 md:grid-cols-3 '>
                    <Select
                        disallowEmptySelection
                        classNames={{ label: "text-xs" }}
                        size='sm'
                        label="Alianzas"
                        selectedKeys={[filterShipper.toString()]}                        
                        onSelectionChange={onShipperChange}
                    >
                        <SelectItem key={0} classNames={{ title: "text-xs" }}>
                            Todos
                        </SelectItem>
                        <SelectItem key={1} classNames={{ title: "text-xs" }}>
                            DHL
                        </SelectItem>
                        <SelectItem key={2} classNames={{ title: "text-xs" }}>
                            PAQUETEXPRESS
                        </SelectItem>
                        <SelectItem key={3} classNames={{ title: "text-xs" }}>
                            UPS
                        </SelectItem>
                        <SelectItem key={4} classNames={{ title: "text-xs" }}>
                            FEDEX
                        </SelectItem>
                        <SelectItem key={5} classNames={{ title: "text-xs" }}>
                            PKT1
                        </SelectItem>
                    </Select>
                    <Select
                        size='sm'
                        label="Plataforma"
                        disallowEmptySelection
                        classNames={{ label: "text-xs" }}
                        selectedKeys={[filterEcommercePlatform]}                        
                        onSelectionChange={onEcommerceChange}
                    >
                        <SelectItem key={"X"} classNames={{ title: "text-xs" }}>
                            Todos
                        </SelectItem>
                        <SelectItem key={"Onsite"} classNames={{ title: "text-xs" }}>
                            Onsite
                        </SelectItem>
                        <SelectItem key={"WooCommerce"} classNames={{ title: "text-xs" }}>
                            WooCommerce
                        </SelectItem>
                        <SelectItem key={"Shopify"} classNames={{ title: "text-xs" }}>
                            Shopify
                        </SelectItem>
                        <SelectItem key={"Jumpseller"} classNames={{ title: "text-xs" }}>
                            Jumpseller
                        </SelectItem>
                        <SelectItem key={"Prestashop"} classNames={{ title: "text-xs" }}>
                            Prestashop
                        </SelectItem>
                    </Select>
                    <Select
                        size='sm'
                        label="Documentador"
                        disallowEmptySelection
                        classNames={{ label: "text-xs" }}
                        selectedKeys={[filterDocumenter]}
                        onSelectionChange={onDocumenterChange}
                        items={docummenterItems}
                    >
                        {(doc) => <SelectItem key={doc.key}>{doc.label}</SelectItem>}
                    </Select>
                    <Input radius="sm" startContent={<IoIosSearch />}
                        value={filterWord}
                        onValueChange={onFilterWordChange}
                        placeholder='Buscar por cliente o # orden' size='md'                        
                        classNames={{ input: "text-xs" }} />
                        <Button className='mt-2' color='warning' onClick={handleResetFilters} size='sm' >Reiniciar Filtros</Button>
                </div>
            </PopoverContent>
        </Popover>
    )
}