import React from 'react';
import { Link } from 'react-router-dom';
import {ImQrcode} from 'react-icons/im';
import { ImPencil } from 'react-icons/im';


function TabBar() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-[#252525] dark:bg-[#252525] dark:border-[#252525">
    <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <Link to="/" className="inline-flex flex-col items-center justify-center px-5 hover:bg-zinc-400 dark:hover:bg-zinc-600 group">
            <svg className="w-6 h-6 mb-1 text-zinc-600 dark:text-zinc-400 group-hover:text-[#71CB86] dark:group-hover:text-[#71CB86]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            <span className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-[#71CB86] dark:group-hover:text-[#71CB86]">Home</span>
        </Link> 
        <Link to="/register" className="inline-flex flex-col items-center justify-center px-5 hover:bg-zinc-400 dark:hover:bg-zinc-600 group">
        <ImPencil className="w-6 h-6 text-zinc-600 dark:text-zinc-400 group-hover:text-[#71CB86] dark:group-hover:text-[#71CB86]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" />
            <span className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-[#71CB86] dark:group-hover:text-[#71CB86]">SignUp</span>
        </Link>
        <Link to="/progress" className="inline-flex flex-col items-center justify-center px-5 hover:bg-zinc-400 dark:hover:bg-zinc-600 group">
            <ImQrcode className="w-6 h-6 text-zinc-600 dark:text-zinc-400 group-hover:text-[#71CB86] dark:group-hover:text-[#71CB86]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" />
            <span className="text-sm text-gray-600 dark:text-zinc-400 group-hover:text-[#71CB86] dark:group-hover:text-[#71CB86]">Scanna</span>
        </Link>
        <Link to="/profile" className="inline-flex flex-col items-center justify-center px-5 hover:bg-zinc-400 dark:hover:bg-zinc-600 group">
            <svg className="w-6 h-6 mb-1 text-zinc-600 dark:text-zinc-400 group-hover:text-[#71CB86] dark:group-hover:text-[#71CB86]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clipRule="evenodd" fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"></path>
            </svg>
            <span className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-[#71CB86] dark:group-hover:text-[#71CB86]">Profile</span>
        </Link>
    </div>
</div>
  )
}

export default TabBar;