'use client';
import { AutocompleteLocation } from '@/components';
import { AutocompleteLocationModel } from '@/models';
import { Input } from '@nextui-org/input';
import React, { useState } from 'react'

export const OSAutocompleteLocation = () => {
  const [location, setLocation] = useState<AutocompleteLocationModel | null>()
  return (
    <div className="flex flex-col gap-3">
      lg
      <AutocompleteLocation
        allowedCountries={["CL", "US", "MX"]}
        defaultSelectedCountry="MX"
        setSelectedLocation={(location) => {
          setLocation(location);
        }}
        // grouped
        radius='sm'
        size='lg'
      />
      md
      <AutocompleteLocation
        allowedCountries={["CL", "US", "MX"]}
        defaultSelectedCountry="MX"
        setSelectedLocation={(location) => {
          setLocation(location);
        }}
        // grouped
        // size="md"
      />
      sm
      <AutocompleteLocation
        allowedCountries={["CL", "US", "MX"]}
        defaultSelectedCountry="MX"
        setSelectedLocation={(location) => {
          setLocation(location);
        }}
        // grouped
        size="sm"
      // label="Location"
      />
      <Input placeholder="Location" size='md' variant='bordered' />
      <div className="p-3 bg-default-200 rounded-2xl overflow-auto no-scrollbar">
        <pre >{JSON.stringify(location, null, 3)}</pre>
      </div>
    </div>
  )
}