
export type Invoice={
folio:string,
date:string,
paymentMethod:string,
total:number,
status:"active" | "no balance"
breakdown:{
    id:string,
    date:string,
    amount:number,
    country:string
}[]
}