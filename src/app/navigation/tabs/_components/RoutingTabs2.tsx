'use client';

import { Tab, Tabs } from "@heroui/tabs";
import { useIsSSR } from "@react-aria/ssr";
import React, { Key, useState } from 'react'
import { HashRouter, Route, Routes, useLocation } from "react-router";


const RoutingTabs2 = () => {
  const isSSR = useIsSSR()
  if (isSSR) return null;
  return (
    <HashRouter>
      <RoutingTabsWithProvider />
    </HashRouter>
  )
}

const RoutingTabsWithProvider = () => {

  const { pathname } = useLocation();

  return (
    <div className="flex flex-col gap-2">
      <Tabs selectedKey={pathname} aria-label="Tabs">
        <Tab key="/pepe" href="#/pepe" title="Pepe" />
        <Tab key="/juan" href="#/juan" title="Juan" />
        <Tab key="/rodrigo" href="#/rodrigo" title="Rodrigo" />
      </Tabs>

      <Routes>
        <Route path="/pepe" element={<HomePage />} />
        <Route path="/juan" element={<MusicPage />} />
        <Route path="/rodrigo" element={<VideosPage />} />
      </Routes>
    </div>
  );
}

export default RoutingTabs2





const HomePage = () => {
  return (
    <div>Pepe Page</div>
  )
}


const MusicPage = () => {
  return (
    <div>Juan Page</div>
  )
}


const VideosPage = () => {
  return (
    <div>Rodrigo Page</div>
  )
}