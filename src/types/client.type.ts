type Address = {
    address:string,
    postalCode:string,
    location:string,
    country:string,
}

export type Client = {
    id:string
    name:string,
    postalCode:string,
    location:string,
    country:string,
    type:"person"|"company",
    addressList:Address[] 
}