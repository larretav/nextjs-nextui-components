"use client"

import React, { useEffect, useState } from 'react'
import { Avatar } from "@nextui-org/avatar";
import { Select, SelectItem } from '@nextui-org/select';
import {
    Autocomplete,
    AutocompleteItem
} from "@nextui-org/autocomplete";
import { LocationItem, LocationResponseMapper } from '@/mapper/locationServiceMapper';
import { useCustomerCatalogStore } from '@/store/tables/customer-catalog-store';

let debounceTimeout: NodeJS.Timeout;
export default function AutocompleteLocation() {
    const [selectedCountry, setSelectedCountry] = useState<Set<string>>(new Set(["mx"]))
    const [term, setTerm] = useState("")
    const [locationList, setLocationList] = useState<LocationResponseMapper>()
    const setSelectedLocation = useCustomerCatalogStore.use.setSelectedLocation()

    async function callGetLocationApi() {
        if (term.length < 4) return
        const country = Array.from(selectedCountry)[0]
        const response = await fetch(`https://onsite.pktuno.mx/ws2//Api/Cps/AutocompleteJSON?country=${country}&term=${term}`)
        const json = await response.json()
        //Filter duplicate results from the response
        const mappedResponse = LocationResponseMapper.fromResponse(json)
        const originalData = mappedResponse.data
        const uniqueLocations = originalData?.filter((loc, index, self) =>
            index === self.findIndex((t) => t.label === loc.label)
        );
        mappedResponse.data = uniqueLocations
        setLocationList(mappedResponse)
    }
    useEffect(() => {
        clearTimeout(debounceTimeout);
        if (term) {
            debounceTimeout = setTimeout(() => {
                callGetLocationApi();
            }, 500);
        }
    }, [term, callGetLocationApi]);

    const countryList = [
        { id: "mx", name: "México", url: "https://flagcdn.com/mx.svg", value: "mx" },
        { id: "ad", name: "Andorra", url: "https://flagcdn.com/ad.svg", value: "ad" },
        { id: "ar", name: "Argentina", url: "https://flagcdn.com/ar.svg", value: "ar" },
        { id: "ca", name: "Canada", url: "https://flagcdn.com/ca.svg", value: "ca" },
        { id: "es", name: "España", url: "https://flagcdn.com/es.svg", value: "es" }
    ]
    const inputStartContent = (<Select
        aria-label='Select country'
        size='sm'
        className='w-44'
        selectedKeys={selectedCountry}
        onSelectionChange={(ev) => {
            const id = Array.from(ev)[0] as string
            setSelectedCountry(new Set([id]))
        }}
        classNames={{ listbox: "p-0" }}
        items={countryList}
        renderValue={(countryList) => {
            return countryList.map((country, index) => (
                <div key={`${country.data?.id}-${index}`} className='flex items-center'>
                    <Avatar className='w-7 h-7' src={country.data?.url} size='sm' />
                    <span className='text-center pl-2 text-xs'>{country.data?.name}</span>
                </div>
            ))
        }}
    >
        {(country) =>
            <SelectItem aria-label='Select country' startContent={<Avatar alt="Argentina" className="w-7 h-7" src={country.url} />} key={country.id} value={country.value}><span className='text-xs'>{country.name}</span></SelectItem>}
    </Select>)

    return (
        <div className="flex">
            <Autocomplete
                items={locationList?.data || []}                
                placeholder='Ciudad o Código postal'
                fullWidth
                scrollShadowProps={{ isEnabled: false }}
                autoComplete='off'
                startContent={inputStartContent}
                onInputChange={(ev) => {
                    if (ev.length > 10) return
                    setTerm(ev)
                }}
                onSelectionChange={(ev) => {
                    const location = locationList?.data.find((loc) => loc.label == ev)
                    if (location) setSelectedLocation(location)
                }}
            >
                {(location) => <AutocompleteItem  key={`${location.value}`}>{location.label}</AutocompleteItem>}
            </Autocomplete>

        </div>
    )
}