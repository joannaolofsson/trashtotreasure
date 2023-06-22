import React from 'react';
import { Link } from 'react-router-dom';
import BagIconImg from '../assets/BagIcon.svg';
import ArrowRightImg from '../assets/arrowright.svg';

function BagCard() {
  return (
      <div className="w-full p-4 bg-[#303030] rounded-md flex items-center justify-center">
          <div className="flex flex-row justify-start">
              <div className="sm:w-1/3 h-20 rounded-t sm:rounded-l sm:rounded-t-none bg-white dark:bg-[#303030]">
                <img src={BagIconImg}/>
            </div>
            <div className=" sm:w-1/3 h-20 bg-white dark:bg-[#303030]">
                <div className="text-white text-base px-3">Påsar</div>
                <div className="px-3">
                    <ul>
                      <li className="text-white text-xs">Beställning</li>
                      <li className="text-white text-xs">Leveransinformation</li>
                    </ul>
                </div>
            </div>
            <div className=" sm:w-1/3 h-20 rounded-b sm:rounded-b-none bg-white dark:bg-[#303030]">
                <img src={ArrowRightImg} />
            </div>
        </div>

    </div>
  )
}

export default BagCard