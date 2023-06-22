import React from 'react';
import TabBar from '../components/TabBar';
import MapImg from '../assets/Map.svg';


function Map() {
  return (
    <>
    <div className="space-y-20">
    <img src={MapImg} className="w-full object-cover h-full" /></div>
    <TabBar />
    </>
  )
}

export default Map;