import React from 'react';
import ProfileFriendMiniImg from '../assets/ProfileFriendMini.svg';
import ArrowRightImg from '../assets/arrowright.svg';

function ProfileCard() {
  return (
    <div className="w-full p-4 bg-[#303030] rounded-md">
      <div className="flex flex-row items-center justify-center">
        <div className="sm:w-1/3 rounded-t sm:rounded-l sm:rounded-t-none">
          <img src={ProfileFriendMiniImg} />
        </div>
        <div className="sm:w-1/3 px-8">
          <div className="text-zinc-100 text-base">Klass 4A</div>
            <div>
              <p className="text-zinc-100 text-sm">Skola, klass, email</p>
            </div>
          </div>
          <div className="sm:w-1/3 rounded-b sm:rounded-b-none">
            <img src={ArrowRightImg} />
          </div>
        </div>
    </div>
  )
}

export default ProfileCard;