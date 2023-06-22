import React from 'react';
import { Link } from 'react-router-dom';

function New() {
  return (
    <div className="p-8 bg-[#252525]">
  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-4">
    <div className="p-4 bg-[#303030] rounded-md flex items-center justify-center">1</div>
    <div className="p-4 bg-[#303030] rounded-md flex items-center justify-center">
        <div>
        <h1 className="text-white">
            Er klass är anmäld
        </h1>
        <h3 className="mb-5 text-white">
            Påsarna kommer till skolan inom 2-4 dagar
        </h3>
        <Link to="/profile" className="w-full items-center px-3 py-2 mt-5 text-sm font-medium text-center text-zinc-900 bg-blue-700 
        rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-300
        dark:hover:bg-purple-700 dark:focus:ring-purple-800">Logga in</Link>
        </div>
    </div>
    <div className="p-4 bg-[#303030] rounded-md flex items-center justify-center">3</div>
  </div>
</div>
  )
}

export default New