import React from "react";
import { Link } from "react-router-dom";
const Locatied: React.FC = () => {
  return (
      <div className="flex">
        <div className="flex flex-col md:bg-[#e0d6e9] md:rounded-3xl h-[600px] md:drop-shadow-2xl md:p-5 justify-between mt-14 md:ml-36 items-center gap-5">
          <img src="/image/main/location.png" alt="location" />
          <div className="flex flex-col gap-3">
            <p className="text-black font-semibold mx-5 px-5 text-center text-2xl">
              {"Enable Your Location"}
            </p>
            <p className="text-[#333333] mx-3 px-10 text-center text-sm">
            Choose your location to start find people around you
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <Link
              to='/dashboard'
              className="flex text-white w-[325px] h-[56px] bg-[#FF5069] rounded-full font-medium px-16 py-2 text-center items-center"
            >
              Allow Location Access
            </Link>
            <p className="text-[#FF5069] text-sm font-semibold">Enter Location Manually</p>
          </div>
        </div>
      </div>
  )
}

export default Locatied