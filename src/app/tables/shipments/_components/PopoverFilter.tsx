import React from 'react'
import { Popover, PopoverTrigger, PopoverContent, } from "@nextui-org/popover"
import { Button } from '@nextui-org/button'
import { FaFilter } from 'react-icons/fa6'
import { DatePicker } from '@nextui-org/date-picker'
import { Select, SelectItem } from '@nextui-org/select'
import { Input } from '@nextui-org/input'
import { IoIosSearch } from 'react-icons/io'
import { parseDate } from '@internationalized/date';
import { useShipmentTableStore } from '@/store/tables/shipment-table-store'
import { Shippers } from '@/types/shippers.type'
import { EcommercePlatforms } from "@/types/ecommerce-platform.type"


export default function PopoverFilter() {

    const filterDate = useShipmentTableStore.use.filterDate()
    const filterShipper = useShipmentTableStore.use.filterShipper()    
    const filterEcommercePlatform = useShipmentTableStore.use.filterEcommercePlatform()
    const filterWord = useShipmentTableStore.use.filterWord()


    const setFilterDate = useShipmentTableStore.use.setFilterDate()
    const setFilterShipper = useShipmentTableStore.use.setFilterShipper()
    const setFilterEcommercePlatform = useShipmentTableStore.use.setFilterEcommercePlatform()
    const setFilterWord = useShipmentTableStore.use.setFilterWord()


    return (
        <Popover
            showArrow
            offset={10}
            placement="bottom-end"
            backdrop={"transparent"}
        >
            <PopoverTrigger>
                <Button color="default" isIconOnly radius="full" size="sm" variant="light" className="capitalize">
                    <FaFilter size={16} />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full">
                <div className='grid grid-cols-1 gap-2 p-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>
                    <DatePicker
                        value={parseDate(filterDate)}
                        onChange={(date) => setFilterDate(date.toString())}
                        radius='sm' size='lg' onKeyDown={(e) => e.preventDefault()} aria-label='Calendario' />
                    <Select
                        classNames={{ label: "text-xs" }}
                        size='sm'
                        label="Alianzas"
                        defaultSelectedKeys={[filterShipper]}
                        onSelectionChange={(val) => setFilterShipper(val.currentKey as Shippers)}
                    >
                        <SelectItem key={"Todos"} classNames={{ title: "text-xs" }}>
                            Todos
                        </SelectItem>
                        <SelectItem key={"pkt1"} classNames={{ title: "text-xs" }}>
                            PKT1
                        </SelectItem>
                        <SelectItem key={"paquetexpress"} classNames={{ title: "text-xs" }}>
                            PKTExpress
                        </SelectItem>
                        <SelectItem key={"fedex"} classNames={{ title: "text-xs" }}>
                            Fedex
                        </SelectItem>
                        <SelectItem key={"dhl"} classNames={{ title: "text-xs" }}>
                            DHL
                        </SelectItem>
                        <SelectItem key={"ups"} classNames={{ title: "text-xs" }}>
                            UPS
                        </SelectItem>
                    </Select>
                    <Select
                        size='sm'
                        label="Plataforma"
                        classNames={{ label: "text-xs" }}
                        defaultSelectedKeys={[filterEcommercePlatform]}
                        onSelectionChange={(val) => setFilterEcommercePlatform(val.currentKey as EcommercePlatforms)}

                    >
                        <SelectItem key={"Todos"} classNames={{ title: "text-xs" }}>
                            Todos
                        </SelectItem>
                        <SelectItem key={"jumpseller"} classNames={{ title: "text-xs" }}>
                            Jumpseller
                        </SelectItem>
                        <SelectItem key={"onsite"} classNames={{ title: "text-xs" }}>
                            OnSite
                        </SelectItem>
                        <SelectItem key={"prestashop"} classNames={{ title: "text-xs" }}>
                            Prestashop
                        </SelectItem>
                        <SelectItem key={"shopify"} classNames={{ title: "text-xs" }}>
                            Shopify
                        </SelectItem>
                        <SelectItem key={"woocommerce"} classNames={{ title: "text-xs" }}>
                            Woocommerce
                        </SelectItem>
                    </Select>
                    <Input radius="sm" startContent={<IoIosSearch />}
                    value={filterWord}
                    onValueChange={(val)=>setFilterWord(val)}
                        placeholder='Buscar por cliente o # de cliente' size='lg'
                        classNames={{ input: "text-xs" }} />
                </div>
            </PopoverContent>
        </Popover>
    )
}