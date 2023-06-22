import React from 'react';
import MoneyTreeImg from '../assets/moneytree.svg';

function InfoCard() {
  return (
    <div className="w-full p-4 bg-[#303030] rounded-md flex items-center justify-center">
        <div className="flex flex-row items-center justify-between">
            <div className="sm:w-1/2 h-38 rounded-t sm:rounded-l sm:rounded-t-none bg-white dark:bg-[#303030]">
              <div className="font-medium text-white text-base pl-1 pb-1" ><h2>Vill du veta mer?</h2></div>
              <div className="font-base text-white text-xs pl-1"><p>Din klass kan tjäna pengar till en klassresa eller aktivitet genom att samla skräp.</p></div>
            </div>
            <div className="sm:w-1/2 h-38 rounded-b sm:rounded-b-none bg-white dark:bg-[#303030]">
              <img src={MoneyTreeImg} className="pl-7"/>
            </div>
        </div>
      </div>
  )
}

export default InfoCard