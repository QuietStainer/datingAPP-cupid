import React from "react";
import MessageInput from "../common/MessageInput";

let chatList = [
  {},
]

const Chatting:React.FC = () => {
  return (
    <div className="flex-1 p-4 bg-white">
      <div className="flex items-center p-1 bg-white shadow-md">
        <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
        <div className="ml-3">
          <p className="font-semibold">Suzana Colin</p>
          <p className="text-sm text-gray-500">@suzana</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-col">
          <div className="self-start max-w-xs p-2 mb-2 text-white bg-gray-300 rounded-lg">
            <p>next time you'll be awake at this hour why not now</p>
          </div>
          <div className="self-start max-w-xs p-2 mb-2 text-white bg-gray-300 rounded-lg">
            <p>Didn’t I tell you not to put your phone on charge just because it’s the weekend?</p>
          </div>
          <div className="self-end max-w-xs p-2 mb-2 text-white bg-green-500 rounded-lg">
            <p>
              i woke up calmmn i put it on the charger the phone was turned off next to me
              I took it out while i was sleeping hasdfkagdhfgasjgf i slept early girl i slept at 3
            </p>
          </div>
          <div className="self-end max-w-xs p-2 mb-2 text-white bg-green-500 rounded-lg">
            <p>While you win in love, you continue to win in other things dhdhhdah</p>
            <div className="flex justify-end mt-1 space-x-1">
              <span>🔥</span><span>🔥</span>
            </div>
          </div>
        </div>
      </div>
      <MessageInput />
    </div>
  )
}

export default Chatting;