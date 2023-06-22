import React from 'react';
import TabBar from '../components/TabBar';
import ProfileCard from '../components/ProfileCard';
import BagCard from '../components/BagCard';
import InfoCard from '../components/InfoCard';

function Profile() {
  return (
    <div className="p-8 bg-[#252525]">
  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-4">
  <div className="p-4 bg-[#303030] rounded-md flex items-center justify-center"></div>
    <div className="p-4 bg-[#303030] rounded-md flex items-center justify-center">
      <ProfileCard />
    </div>
    <div className="p-4 bg-[#303030] rounded-md flex items-center justify-center">
      <BagCard />
    </div>
    <div> <InfoCard /></div>
    <div><TabBar />
    </div>
  </div>
</div>

  )
}

export default Profile;