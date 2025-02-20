'use client';

import { BrowserRouter, HashRouter } from "react-router";

type Props = {
  children: React.ReactNode;
}
const ReactRouterProvider = ({ children }: Props) => {
  return (
    <HashRouter>
      {children}
    </HashRouter>
  )
}

export default ReactRouterProvider