import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-[#817f99] text-white p-2 px-5 w-full flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="text-xl font-bold">
          <img
            src="/image/logo/logo.png"
            alt="header_logo"
            className="w-40 h-10"
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-20">
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="flex gap-2 hover:text-gray-400">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10.1074" y="4.3732" width="13" height="18" rx="2" fill="#817f99" stroke="white"/>
                  <rect x="1" y="4.36465" width="13" height="18" rx="2" transform="rotate(-15 1 4.36465)" fill="#817f99" stroke="white"/>
                </svg>
                 <span>Match</span>
              </a>
            </li>
            <li>
              <a href="#about" className="flex gap-2 hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572"></path></svg>
                <span>Acquaintances</span>
              </a>
            </li>
            <li>
              <a href="#services" className="flex gap-2 hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48"><path fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M44 24c0 11.046-8.954 20-20 20H4V24C4 12.954 12.954 4 24 4s20 8.954 20 20m-30-6h18m-18 8h18m-18 8h10"></path></svg>
                <span>Message</span>
              </a>
            </li>
          </ul>
        </nav>
        <img
          className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src="/image/person/image.png"
          alt="Bordered avatar"
        />
      </div>
    </header>
  );
};

export default Header;
