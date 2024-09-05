'use client';

import useBreakpoint from "@/hooks/useBreakpoint";
import { useEffect, useState } from "react";

const BreakpointsTest = () => {

  // const xsMatch = useBreakpoint("xs");
  // const mdMatch = useBreakpoint("md");

  // const [screenWidth, setScreenWidth] = useState("");

  // const handleResize = () => {
  //   setScreenWidth(window.innerWidth + 'px')
  // }

  // useEffect(() => {
  //   setScreenWidth(window.innerWidth + 'px')
  //   window.addEventListener("resize", handleResize)
  //   return () => window.removeEventListener("resize", handleResize);
  // }, [])

  // console.log('render')

  return (
    <div className="flex flex-col gap-3">
      {/* <div className="grid grid-cols-2 gap-1 px-2 py-3 rounded-2xl">
        <div className="flex gap-2">
          <span className="w-fit bg-default-100 px-2 py-1 rounded-md">XS (0px): {xsMatch ? "true" : "false"}</span>
          <span className="w-fit bg-default-100 px-2 py-1 rounded-md">{screenWidth}</span>
        </div>

        <div className="flex gap-2" >
          <span className="w-fit bg-default-100 px-2 py-1 rounded-md">MD (768px): {mdMatch ? "true" : "false"}</span>
          <span className="w-fit bg-default-100 px-2 py-1 rounded-md">{screenWidth}</span>
        </div>
      </div>

      {mdMatch && <span className="text-xl font-bold">Esto es con el hook</span>} */}

      <span className="text-xl font-bold hidden sm:block">Esto es con tailwind</span>
    </div>
  )
}

export default BreakpointsTest