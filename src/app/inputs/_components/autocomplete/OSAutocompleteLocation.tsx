'use client';
import { AutocompleteLocation } from '@/components';
import { AutocompleteLocationModel } from '@/models';
import { Input } from "@heroui/input";
import React, { useState } from 'react'

export const OSAutocompleteLocation = () => {
  const [location, setLocation] = useState<AutocompleteLocationModel | null>()
  return (
    <div className="flex flex-col gap-3" >
      lg

      <AutocompleteLocation
        allowedCountries={["CL", "US", "MX"]}
        defaultSelectedCountry="MX"
        onSelectedLocation={(location) => {
          setLocation(location);
        }}
        // grouped
        // separateResults
        radius="sm"
        size="lg"
      />
      md
      <AutocompleteLocation
        allowedCountries={["CL", "US", "MX"]}
        defaultSelectedCountry="MX"
        onSelectedLocation={(location) => {
          setLocation(location);
        }}
        grouped
        size="md"
        radius="sm"
        separateResults

      />
      sm
      <AutocompleteLocation
        allowedCountries={["CL", "US", "MX"]}
        defaultSelectedCountry="MX"
        onSelectedLocation={(location) => {
          setLocation(location);
        }}
        // grouped
        size="sm"
        radius="sm"
        separateResults
        // label="Dirección"
      />
      <div className="p-3 bg-default-200 rounded-2xl overflow-auto no-scrollbar">
        <pre >{JSON.stringify(location, null, 3)}</pre>
      </div>
    </div>
  )
}