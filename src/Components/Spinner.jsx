import React from 'react'
import "./Spinner.css";
 const Spinner = () => {
  return (
        <div className="flex items-center flex-col space-y-2 mt-4">
            <div className="spinner"></div>
            <p className="text-lg bg-[#63f363d1] px-4 py-1 rounded-md text-white font-semibold">Loading...</p>
        </div>
  )
}

export default Spinner;
