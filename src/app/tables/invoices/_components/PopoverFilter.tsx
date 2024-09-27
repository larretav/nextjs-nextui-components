import React, { useCallback } from 'react'
import { Popover, PopoverTrigger, PopoverContent, } from "@nextui-org/popover"
import { Button } from '@nextui-org/button'
import { FaFilter } from 'react-icons/fa6'
import { DatePicker } from '@nextui-org/date-picker'
import { Input } from '@nextui-org/input'
import { IoIosSearch } from 'react-icons/io'
import { CalendarDate, parseDate } from '@internationalized/date';
import { useInvoiceTableStore } from '@/store/tables/invoice-table-store'


export default function PopoverFilter() {
    const filterDate = useInvoiceTableStore.use.filterDate()
    const filterWord = useInvoiceTableStore.use.filterWord()

    const setFilterDate = useInvoiceTableStore.use.setFilterDate()
    const setFilterWord = useInvoiceTableStore.use.setFilterWord()

    const setPage = useInvoiceTableStore.use.setPage()

    const onDateChange = useCallback((date: CalendarDate) => {
        setFilterDate(date.toString())
        setPage(1);
    }, [setPage, setFilterDate]);

    const onFilterWordChange = useCallback((val: string) => {
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
                <div className='grid grid-cols-1 gap-2 p-2 md:grid-cols-2'>
                    <DatePicker
                        value={parseDate(filterDate)}
                        onChange={onDateChange}
                        radius='sm' size='lg' onKeyDown={(e) => e.preventDefault()} aria-label='Calendario' />
                    <Input radius="sm" startContent={<IoIosSearch />}
                        value={filterWord}
                        onValueChange={onFilterWordChange}
                        placeholder='Búsqueda general' size='lg'
                        classNames={{ input: "text-xs" }} />
                </div>
            </PopoverContent>
        </Popover>
    )
}