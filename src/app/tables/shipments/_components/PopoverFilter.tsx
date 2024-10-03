import React, { useCallback,  } from 'react'
import { Popover, PopoverTrigger, PopoverContent, } from "@nextui-org/popover"
import { Button } from '@nextui-org/button'
import { FaFilter } from 'react-icons/fa6'
import { Select, SelectItem } from '@nextui-org/select'
import { Input } from '@nextui-org/input'
import { IoIosSearch } from 'react-icons/io'
import { useShipmentTableStore } from '@/store/tables/shipment-table-store'
import { SharedSelection } from '@nextui-org/system'

export default function PopoverFilter() {
    
    const filterShipper = useShipmentTableStore.use.filterShipper()
    const filterEcommercePlatform = useShipmentTableStore.use.filterEcommercePlatform()
    const filterWord = useShipmentTableStore.use.filterWord()

    
    const setFilterShipper = useShipmentTableStore.use.setFilterShipper()
    const setFilterEcommercePlatform = useShipmentTableStore.use.setFilterEcommercePlatform()
    const setFilterWord = useShipmentTableStore.use.setFilterWord()   

    const setPage = useShipmentTableStore.use.setPage()
    const setStart = useShipmentTableStore.use.setStart()

    const onShipperChange = useCallback((val: SharedSelection) => {
        setStart(0)
        if (val.currentKey) setFilterShipper(val.currentKey)
        setPage(1);
    }, [setPage, setFilterShipper]);

    const onEcommerceChange = useCallback((val: SharedSelection) => {
        setStart(0)
        if (val.currentKey) setFilterEcommercePlatform(val.currentKey)
        setPage(1);
    }, [setPage, setFilterEcommercePlatform]);

    const onFilterWordChange = useCallback((val: string) => {
        setStart(0)
        setFilterWord(val)
        setPage(1);
    }, [setPage, setFilterWord]);


      
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
                <div className='grid grid-cols-1 gap-2 p-2 md:grid-cols-3 '>           
                    <Select
                        disallowEmptySelection
                        classNames={{ label: "text-xs" }}
                        size='sm'
                        label="Alianzas"
                        defaultSelectedKeys={[filterShipper.toString()]}
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
                        defaultSelectedKeys={[filterEcommercePlatform]}
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
                    <Input radius="sm" startContent={<IoIosSearch />}
                        value={filterWord}
                        onValueChange={onFilterWordChange}
                        placeholder='Buscar por cliente o # orden' size='lg'
                        classNames={{ input: "text-xs" }} />
                </div>
            </PopoverContent>
        </Popover>
    )
}