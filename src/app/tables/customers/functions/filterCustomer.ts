import { useCustomerTableStore } from "@/store/tables/customer-table-store";
import { Customer } from "@/types/customer.type";


export function filterCustomer(customer:Customer[]){
    const selectedTabKey = useCustomerTableStore.use.selectedTabKey() as string    
    const filterWord = useCustomerTableStore.use.filterWord()
    const filterCountry = useCustomerTableStore.use.filterCountry()
    const filterCustomerType = useCustomerTableStore.use.filterCustomerType()

    const filterByFilterWord = customer.filter((item) => {
        return item.name.toLowerCase().includes(filterWord.toLowerCase()) ||
            item.postalCode.toLowerCase().includes(filterWord.toLowerCase()) ||
            item.location.toLowerCase().includes(filterWord.toLowerCase())
    })

    const filterByCountry = filterByFilterWord.filter((item) => {
        if (filterCountry === "Todos") return item
        return item.country.toLowerCase().includes(filterCountry.toLowerCase())
    })

    const filterByType = filterByCountry.filter((item) => {
        if (filterCustomerType === "Todos") return item
        return item.type.toLowerCase().includes(filterCustomerType.toLowerCase())
    })

    const filterByStatus = filterByType.filter((item) => {
        if (selectedTabKey === "Todos") return item
        return item.status.toLowerCase() === selectedTabKey.toLowerCase()
    })

    return {filterByType, filterByStatus}
}