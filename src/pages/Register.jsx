import React from 'react'
import { Link } from 'react-router-dom'
import ProfileFriendImg from '../assets/profile_friend.svg';
import BagCard from '../components/BagCard';
import TabBar from '../components/TabBar';

function Register() {
  return (
    <div className="p-4 bg-[#252525]">
  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-4">
    <div className="p-4 bg-[#303030] rounded-md flex items-center justify-center">
    <form className="space-y-6 w-full" action="#">
    <Link to="/">
        <img className="rounded-t-lg w-full px-20" src={ProfileFriendImg} alt="" />
    </Link>
        <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white">Anmäl din klass</h5>

        <div className="relative mb-3" data-te-input-wrapper-init>
            <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-[#252525] px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput1"
                placeholder="Skola" />
            <label
                htmlFor="exampleFormControlInput1"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >Skola
            </label>
            </div>

            <div className="relative mb-3" data-te-input-wrapper-init>
            <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-[#252525] px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput2"
                placeholder="Klass" />
            <label
                htmlFor="exampleFormControlInput2"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >Klass
            </label>
            </div>

            <div className="relative mb-3" data-te-input-wrapper-init>
            <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-[#252525] px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput3"
                placeholder="Lärare" />
            <label
                htmlFor="exampleFormControlInput3"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >Lärare
            </label>
            </div>


            <div className="relative mb-3" data-te-input-wrapper-init>
            <input
                type="email"
                className="peer block min-h-[auto] w-full rounded border-0 bg-[#252525] px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInputEmail"
                placeholder="Email" />
            <label
                htmlFor="exampleFormControlInputEmail"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >Email
            </label>
            </div>
 
            <div className="relative mb-3" data-te-input-wrapper-init>
            <input
                type="password"
                className="peer block min-h-[auto] w-full rounded border-0 bg-[#252525] px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInputPassword"
                placeholder="Lösenord" />
            <label
                htmlFor="exampleFormControlInputPassword"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >Lösenord
            </label>
            </div>

            <div className="p-4 bg-[#303030] rounded-md flex flex-col items-center justify-center">
              <div className="space-y-10" action="#">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                  </div>
                    <div>
                      <label htmlFor="remember" className="ml-2 text-xs text-gray-900 dark:text-gray-300">Jag godkänner</label>
                <Link to="#" className="ml-auto pb-6 pl-1 text-xs text-blue-700 hover:underline dark:text-[#71CB86]">villkoren</Link>
                </div>
                </div>
                </div>
                <div className="mt-3">
                <Link to="#" className="w-full text-zinc-900 bg-yellow-300 hover:bg-blue-800 focus:ring-4 focus:outline-none
                 focus:ring-blue-300 font-medium rounded-lg 
                text-sm px-5 py-2.5 text-center dark:bg-[#49A35B] dark:hover:bg-purple-700 dark:focus:ring-purple-800">Skapa konto</Link>
                
                <div className="mt-3 text-xs text-gray-500 dark:text-gray-300">

                Har du ett konto? <Link to="/" className="text-blue-700 text-xs hover:underline dark:text-[#71CB86]">Logga in</Link>
                </div>
              </div>
            </div>
          </form>
    </div>
    <div className="p-4 bg-[#303030] rounded-md flex items-center justify-center">
      <BagCard />
    </div>
    <div className="p-4 bg-[#303030] rounded-md flex items-center justify-center">
      <TabBar />
    </div>
  </div>
</div>
  )
}

export default Register;