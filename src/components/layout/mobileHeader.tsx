import React from "react";

const MobileHeader: React.FC = () => {
  return (
    <div className="fixed top-0 w-full z-50 flex  justify-between p-4 items-center">
      <div className="flex"><span className="">9:41</span></div>
      <div className="flex flex-row justify-between gap-1">
        <img className="w-6 h-4" src="/image/cellphone/connection.png" alt="connection" />
        <img className="w-6 h-4" src="/image/cellphone/wifi.png" alt="connection" />
        <img className="w-6 h-4" src="/image/cellphone/battery.png" alt="connection" />
      </div>
    </div>
  )
}

export default MobileHeader;