import React from 'react'
import ShipmentsTable from './_components/ShipmentsTable'



export default async function Page() {
    //Fetch documentadores
    const myHeaders = new Headers({
        "Content-Type": "application/json",
        "Authorization": process.env.TOKEN || ""
    })
    const documenterResponse = await fetch("https://onsite.pktuno.mx/ws2/Api/Contactos",{
        headers: myHeaders        
    })
    const documenterJson = await documenterResponse.json()

    
  return (
    <ShipmentsTable documenters={documenterJson}/>
  )
}