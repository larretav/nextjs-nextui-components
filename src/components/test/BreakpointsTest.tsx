'use client';

import useBreakpoint from "@/hooks/useBreakpoint";

const BreakpointsTest = () => {

  const test = useBreakpoint("sm")
  
  return (
    <div>
      {
        test ? "Mobil we" : "Desktop we"
      }
    </div>
  )
}

export default BreakpointsTest