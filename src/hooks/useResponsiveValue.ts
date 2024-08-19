
// import tailwindTheme from "tailwindcss/defaultTheme";


// function useResponsiveValue(values: any) {

//   const breakpoints = [...tailwindTheme.screens];
//   const matches = breakpoints.map((breakpoint) => useMediaQuery((theme) => theme.breakpoints.up(breakpoint)));

//   const getLastValue = (matches, breakpoints) => {

//     let newMatches = [...matches];

//     const indexMatch = newMatches.findLastIndex(Boolean);
//     const matchValue = values[breakpoints[indexMatch]];

//     if (matchValue) return matchValue;

//     newMatches[indexMatch] = !newMatches[indexMatch]
//     return getLastValue(newMatches, breakpoints)

//   }

//   const matchValue = getLastValue(matches, breakpoints);

//   return matchValue;
// }

// export default useResponsiveValue;


// const breakpoint = {
//   'sm': '640px',
//   'md': '768px',
//   'lg': '1024px',
//   'xl': '1280px',
//   '2xl': '1536px',
// }