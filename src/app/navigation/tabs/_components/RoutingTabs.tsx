'use client';

import { Tab, Tabs } from "@heroui/tabs";
import { useIsSSR } from "@react-aria/ssr";
import React, { Key, useState } from 'react'
import { HashRouter, Route, Routes, useLocation } from "react-router";


const RoutingTabs = () => {
  const isSSR = useIsSSR()
  if (isSSR) return null;
  return (
    <HashRouter>
      <RoutingTabsWithProvider />
    </HashRouter>
  )
}

const RoutingTabsWithProvider = () => {
  // const [selectedPath, setSelectedPath] = useState<Key>('home')

  const { pathname } = useLocation();

  return (
    <div className="flex flex-col gap-2">
      <Tabs selectedKey={pathname} aria-label="Tabs">
        <Tab key="/home" href="#/home" title="Home" />
        <Tab key="/music" href="#/music" title="Music" />
        <Tab key="/videos" href="#/videos" title="Videos" />
      </Tabs>

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/videos" element={<VideosPage />} />
      </Routes>
    </div>
  );
}

export default RoutingTabs





const HomePage = () => {
  return (
    <div>Home Page</div>
  )
}


const MusicPage = () => {
  return (
    <div>Music Page</div>
  )
}


const VideosPage = () => {
  return (
    <div>Videos Page</div>
  )
}