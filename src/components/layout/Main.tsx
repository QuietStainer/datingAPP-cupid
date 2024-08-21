import React from "react";
import { Link } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <div className="flex flex-col justify-between mt-14 items-center">
      <img className="w-[115px] h-[43px]" alt="image_logo" src="/image/logo/logo.png" />
      <div className="flex flex-col">
        <img className="w-[90%] h-auto" alt="image_main" src="/image/main/MaskGroup.png" />
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className="text-black font-semibold px-5 text-center text-2xl">Discover Love where your story begins.</p>
        <p className="text-[#333333] mx-3 px-14 text-center text-sm">Join us to discover your ideal partner and ignite the sparks of romance in your journey.</p>
        <button type="button" className=" relative text-white bg-[#FF5069] rounded-full font-medium px-16 py-2 text-center inline-flex items-center me-2 mb-2">
          <span className="flex bg-white rounded-full p-1 absolute left-1">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 256 256"><path fill="#FF5069" d="M231.88 175.08A56.26 56.26 0 0 1 176 224C96.6 224 32 159.4 32 80a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12A16 16 0 0 1 117.39 96c-.18.27-.37.52-.57.77L96 121.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62"></path></svg>
          </span>
          <Link to="/login" className="items-center justify-center">
            Login with Phone
          </Link>
        </button>
        <p>
          {'Don’t have an account?'} <Link className="text-[#FF5069] font-semibold" to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Main;
