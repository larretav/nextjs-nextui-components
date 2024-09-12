'use client';

import { AddressCard } from "@/components";
import { AddressResp } from "@/interfaces";
import Address from "@/models/shipments/shipment.model";
import { useEffect, useState } from "react";

const getAddresses = (): Promise<AddressResp[]> => {
  return new Promise((resolve, reject) => {
    resolve([
      {
        id: '001',
        isMain: true,
        name: 'Main Office',
        street: '123 Main St',
        number: '456',
        suburb: 'Downtown',
        city: 'New York',
        state: 'NY',
        country: 'USA',
        postalCode: '10001',
        phone: '+1 212-555-1234',
        email: 'contact@mainoffice.com',
      },
      {
        id: '002',
        isMain: false,
        name: 'Branch Office',
        street: '789 Broadway',
        number: '101',
        suburb: 'Midtown',
        city: 'Los Angeles',
        state: 'CA',
        country: 'USA',
        postalCode: '90001',
        phone: '+1 213-555-5678',
        email: 'support@branchoffice.com',
      },
    ])
  })
}

export const OSAddressCard = () => {

  const [addresses, setAddresses] = useState<Address[]>([]);

  useEffect(() => {
    getAddresses().then((resp) => {
      const respMapped = resp.map(item => Address.fromJson(item))
      setAddresses(respMapped)
    })
  }, [])


  return (
    <>
      {
        addresses.map(address => <>
          <AddressCard
            addressInstance={address}
            onSetMain={(id) => { console.log(id) }} 
            onEdit={(id) => { console.log(id) }}
            onDelete={(id) => { console.log(id) }} />
          
        </>)
      }
    </>
  )
}
