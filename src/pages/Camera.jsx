import React from 'react'
import CameraNav from '../components/CameraNav';

function Camera() {
  return (
    <>
    <div className="p-8 bg-black">
    <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 lg:gap-10">
    <div className="p-4 bg-[#303030] rounded-md flex items-center justify-center">1</div>
    <div className="p-4 bg-[#303030] rounded-md flex items-center justify-center">2</div>
    <div className="p-4 bg-[#303030] rounded-md flex items-center justify-center">3</div>
    <div className="p-4 bg-[#303030] rounded-md flex items-center justify-center">4</div>
    <div className="p-4 bg-[#303030] rounded-md flex items-center justify-center">
      <CameraNav />
    </div>
    <div className="p-4 bg-[#303030] rounded-md flex items-center justify-center">6</div>
  </div>
</div>
    </>
  )
}

export default Camera