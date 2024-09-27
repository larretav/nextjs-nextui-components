import { useInvoiceTableStore } from "@/store/tables/invoice-table-store";
import { Invoice } from "@/types/invoice.type";
import { isSameDay, parseDateTime } from "@internationalized/date";

export  function filterInvoice(invoices:Invoice[]){
    const selectedTabKey = useInvoiceTableStore.use.selectedTabKey() as string 
    const filterDate = useInvoiceTableStore.use.filterDate()
    const filterWord = useInvoiceTableStore.use.filterWord()

    const filterByDate = invoices.filter((item)=>{
        return isSameDay(parseDateTime(item.date), parseDateTime(filterDate)) ||
        new Date(item.date) > new Date(filterDate)
      })
    
      const filterByFilterWord = filterByDate.filter((item)=>{
        return item.folio.toLowerCase().includes(filterWord.toLowerCase()) ||
        item.paymentMethod.toLowerCase().includes(filterWord.toLowerCase())
      })
      const filterByStatus = filterByFilterWord.filter((item)=> {
        if (selectedTabKey === "Todos") return item
         return item.status.toLocaleLowerCase()=== selectedTabKey.toLowerCase()
      })
      return {filterByFilterWord,filterByStatus}
}