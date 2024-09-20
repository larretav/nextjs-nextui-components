
export type Invoice={
folio:string,
date:string,
paymentMethod:string,
total:number,
breakdown:{
    id:string,
    date:string,
    amount:number,
    country:string
}[]
}