'use client';

import { Tab, Tabs } from '@nextui-org/tabs';
import React, { Key, useState } from 'react'

const RoutingTabs = () => {
  const [selectedPath, setSelectedPath] = useState<Key>('home')

  return (
    <Tabs selectedKey={selectedPath as string} onSelectionChange={setSelectedPath} aria-label="Tabs">
      <Tab key="home" href="#/home" title="Home" >
        <HomePage />
      </Tab>
      <Tab key="music" href="#/music" title="Music" >
        <MusicPage />
      </Tab>
      <Tab key="videos" href="#/videos" title="Videos" >
        <VideosPage />
      </Tab>
    </Tabs>
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