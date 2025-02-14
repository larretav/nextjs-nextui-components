'use client';

import { BrowserRouter, HashRouter } from "react-router-dom";

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