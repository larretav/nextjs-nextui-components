import { useCustomerCatalogStore } from "@/store/tables/customer-catalog-store";
import { Customer } from "@/mapper/customersMapper";
import { CustomersMapper } from "@/mapper/customersMapper";

export function filterCustomer(customer:Customer[]){
    const selectedTabKey = useCustomerCatalogStore.use.selectedTabKey() as string    
    const filterWord = useCustomerCatalogStore.use.filterWord()
    const filterCountry = useCustomerCatalogStore.use.filterCountry()
    const filterCustomerType = useCustomerCatalogStore.use.filterCustomerType()

    const filterByFilterWord = customer.filter((item) => {
        return item.getFullName.toLowerCase().includes(filterWord.toLowerCase()) ||
            item.postalCode.toLowerCase().includes(filterWord.toLowerCase()) ||
            item.city.toLowerCase().includes(filterWord.toLowerCase())
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
        return item.active.toLowerCase() === selectedTabKey.toLowerCase()
    })

    return {filterByType, filterByStatus}
}