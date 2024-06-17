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

    </>
  )
}

export default Klar