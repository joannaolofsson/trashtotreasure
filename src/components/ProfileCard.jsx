import React from 'react';
import { Link } from 'react-router-dom';
import ProfileFriendMiniImg from '../assets/ProfileFriendMini.svg';
import ArrowRightImg from '../assets/arrowright.svg';

function ProfileCard() {
  return (
    <div className="w-full p-4 bg-[#303030] rounded-md flex items-center justify-center">
    <div className="flex flex-row items-center justify-between">
        <div className="sm:w-1/3 h-20 rounded-t sm:rounded-l sm:rounded-t-none bg-white dark:bg-[#303030]">
                <img src={ProfileFriendMiniImg} />
            </div>
            <div className="sm:w-1/3 h-20 px-4 bg-white dark:bg-[#303030]">
                <div className="text-white text-base">Klass 4A</div>
                <div>
                  <p className="text-white text-xs">Skola, klass, email</p>
                </div>
            </div>
            <div className="sm:w-1/3 h-20 rounded-b sm:rounded-b-none bg-white dark:bg-[#303030]">
                <img src={ArrowRightImg} />
            </div>
        </div>

    </div>
  )
}

export default ProfileCard;