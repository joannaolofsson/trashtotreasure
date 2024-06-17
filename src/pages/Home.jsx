import React from 'react';
import { Link } from 'react-router-dom';
import ClassImg from '../assets/class.svg';
import TabBar from '../components/TabBar';

import InfoCard from '../components/InfoCard';


function Home() {
  return (
    <div className="p-4 bg-[#252525]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-4">
        
        <div>
          <img src={ClassImg} className="w-full"/>
        </div>

      <div className="p-4 bg-[#303030] rounded-md flex items-center justify-center">
        <form className="space-y-6 w-full" action="#" >
            <h5 className="text-2xl font-medium text-zinc-100 font-sans text-center">Välkommen</h5>
            <div className="relative mb-3" data-te-input-wrapper-init>
            <input
                type="email"
                className="peer block min-h-[auto] w-full rounded border-0 bg-[#252525] px-3 py-[0.5rem] 
                leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 
                peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none font-sans text-neutral-200placeholder:text-neutral-200 peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInputEmail1"
                placeholder="Email" />
            <label
                htmlFor="exampleFormControlInputEmail1"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.5rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-200 peer-focus:text-primary"
                >Email
            </label>
            </div>

            <div className="relative mb-3" data-te-input-wrapper-init>
            <input
                type="password"
                className="peer block min-h-[auto] w-full rounded border-0 bg-[#252525] px-3 py-[0.5rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInputPassword1"
                placeholder="Lösenord" />
            <label
                htmlFor="exampleFormControlInputPassword1"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.5rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-200 peer-focus:text-primary"
                >Lösenord
            </label>
            </div>

        <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" autoComplete="on" value="" className="w-4 h-4 border rounded  
                  bg-zinc-800 border-gray-600 focus:ring-blue-600
                  ring-offset-gray-800 focus:ring-offset-gray-800" required />
                </div>     
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-zinc-200">
                Kom ihåg mig
              </label>
              <Link to="#" className="ml-auto text-sm hover:underline text-[#71CB86]">
                Glömt lösenordet?
              </Link>
            </div>

            <div className="p-4 bg-[#303030] rounded-md flex flex-col items-center">
              <Link
                to="/profile"
                className="w-full px-2 py-2 text-base font-semibold text-center text-zink-900 rounded-lg bg-[#49A35B] hover:bg-[#71CB86] focus:ring-4 focus:outline-none"
              >
                Logga in
              </Link>
              <div className="mt-2 text-sm text-gray-200">
                Inte registrerad? <Link to="/register" className="hover:underline text-[#71CB86]">Anmäl din klass</Link>
              </div>
            </div>
          </form>
        </div>

        <InfoCard />
        <div className="p-4 bg-[#303030] rounded-md flex items-center justify-center">
          <TabBar />
        </div>
      </div>
    </div>
  );
}

export default Home;