import React from 'react';
import { Link } from 'react-router-dom';
import BagIconImg from '../assets/BagIcon.svg';
import ArrowRightImg from '../assets/arrowright.svg';

function BagCard() {
  return (
      <div className="w-full p-4 bg-[#303030] rounded-md">
          <div className="flex flex-row justify-center items-center">
              <div className="sm:w-1/3 rounded-t sm:rounded-l sm:rounded-t-none">
                <img src={BagIconImg}/>
            </div>
            <div className="sm:w-1/3 px-8">
                <div className="text-zinc-100 text-medium">Påsar</div>
                      <div className="text-zinc-100 text-sm">Beställning</div>
                      <div className="text-zinc-100 text-sm">Leveransinformation</div>
            </div>
            <div className=" sm:w-1/3 rounded-b sm:rounded-b-none">
                <img src={ArrowRightImg} />
            </div>
        </div>

    </div>
  )
}

export default BagCard