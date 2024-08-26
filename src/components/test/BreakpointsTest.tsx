'use client';

import useBreakpoint from "@/hooks/useBreakpoint";
import { useEffect, useState } from "react";

const BreakpointsTest = () => {

  const test = useBreakpoint("xs");
  const test2 = useBreakpoint("md");

  const [screenWidth, setScreenWidth] = useState("");

  const handleResize = () => {
    setScreenWidth(window.innerWidth + 'px')
  }

  useEffect(() => {
    setScreenWidth(window.innerWidth + 'px')
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-1 px-2 py-3 rounded-2xl">
        <div className="flex gap-2">
          <span className="w-fit bg-default-100 px-2 py-1 rounded-md">XS (0px): {test ? "true" : "false"}</span>
          <span className="w-fit bg-default-100 px-2 py-1 rounded-md">{screenWidth}</span>
        </div>

        <div className="flex gap-2" >
          <span className="w-fit bg-default-100 px-2 py-1 rounded-md">MD (768px): {test2 ? "true" : "false"}</span>
          <span className="w-fit bg-default-100 px-2 py-1 rounded-md">{screenWidth}</span>
        </div>
      </div>

    </div>
  )
}

export default BreakpointsTest