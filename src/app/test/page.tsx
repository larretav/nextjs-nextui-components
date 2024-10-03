"use client"
import { PageTitle } from "@/components";
import EnviosFilterMenu from "@/components/navigation/menu/EnviosFilterMenu";
import { Button } from "@nextui-org/button";
import { DatePicker } from "@nextui-org/date-picker";
import { Input } from "@nextui-org/input";
import { Popover, PopoverTrigger, PopoverContent, } from "@nextui-org/popover"
import { Select, SelectItem } from "@nextui-org/select";
import React from 'react'
import { FaFilter } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { RegisterFormTest } from "./_components/RegisterFormTest";

type Props = {}

export default function page({ }: Props) {
  return (
    <div className="flex flex-col p-3">
      <PageTitle text="Test Page" />

      <div className="flex flex-col justify-center items-center">

        <div className="max-w-[300px]">
          <RegisterFormTest />
        </div>
      </div>

    </div>
  )
}