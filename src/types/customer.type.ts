type Address = {
    address:string,
    postalCode:string,
    location:string,
    country:string,
}

export type Customer = {
    id:string
    name:string,
    postalCode:string,
    location:string,
    country:string,
    type:"person"|"company",
    addressList:Address[] 
    status:"active"|"inactive"
}