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
        size="md"
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
      />
      <Input placeholder="Location" size='sm' variant='bordered' />
      <Input label="Location" size='md' variant='bordered' />
      <div className="p-3 bg-default-200 rounded-2xl">
        <pre >{JSON.stringify(location, null, 3)}</pre>
      </div>
    </div>
  )
}