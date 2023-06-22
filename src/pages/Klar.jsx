import React from 'react';
import { Link } from 'react-router-dom';
import TabBar from '../components/TabBar';

function Klar() {
  return (
    <>
    <div>
        <div className="flex flex-col items-center px-4 bg-zinc-800">
            <h1 className="text-white py-20">Din klass är registrerad och dina påsar är på väg till dig</h1>
            <button type="submit" className="w-full m-10 text-zinc-900 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
         focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gradient-to-r from-yellow-200 
         to to-yellow-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logga in på ditt konto</button>
                <TabBar />
        </div>
    </div>

    
            {/*<div className="inline-flex rounded-md shadow-sm" role="group">
        <Link to="/bag" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg
        hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700
            dark:bg-yellow-300 dark:border-gray-600 dark:text-zinc-900 dark:hover:text-white dark:hover:bg-gray-600
            dark:focus:ring-blue-500 dark:focus:text-white">
            Tillbaka
        </Link>
        <Link to="#" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md
        hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700
            dark:bg-yellow-300 dark:border-gray-600 dark:text-zinc-900 dark:hover:text-white dark:hover:bg-gray-600
            dark:focus:ring-blue-500 dark:focus:text-white">
            Nästa
        </Link>
    </div>*/}
    </>
  )
}

export default Klar