import { useCustomerCatalogStore } from "@/store/tables/customer-catalog-store"


export const useSwitchPage = () => {
    const toggleAddOrEditCustomerPage = useCustomerCatalogStore.use.toggleAddOrEditCustomerPage();
    const toggleCustomerCatalogTablePage = useCustomerCatalogStore.use.toggleCustomerCatalogTablePage();
    const toggleCustomerDetailsPage = useCustomerCatalogStore.use.toggleCustomerDetailsPage();
  
    const switchToCustomerCatalogTablePage = () => {
      toggleAddOrEditCustomerPage(false);
      toggleCustomerCatalogTablePage(true);
      toggleCustomerDetailsPage(false);
    };
  
    const switchToAddOrEditCustomerPage = () => {
      toggleAddOrEditCustomerPage(true);
      toggleCustomerCatalogTablePage(false);
      toggleCustomerDetailsPage(false);
    };
  
    const switchToCustomerDetailsPage = () => {
      toggleAddOrEditCustomerPage(false);
      toggleCustomerCatalogTablePage(false);
      toggleCustomerDetailsPage(true);
    };
  
    return { switchToCustomerCatalogTablePage, switchToAddOrEditCustomerPage, switchToCustomerDetailsPage };
  };