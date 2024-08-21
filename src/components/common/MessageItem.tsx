// src/components/MessageItem.tsx
import React from 'react';

interface MessageItemProps {
  avatar: string;
  name: string;
  username: string;
  date: string;
  message: string;
  reaction?: string;
}

const MessageItem: React.FC<MessageItemProps> = ({ avatar, name, username, date, message, reaction }) => {
  return (
    <div onClick={() => {}} className="flex items-start space-x-4 p-4 border-b border-gray-200">
      <img src={avatar} alt={`${name}'s avatar`} className="w-10 h-10 rounded-full" />
      <div className="flex-grow">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold">{name}</span>{' '}
            <span className="text-gray-500">@{username}</span>
          </div>
          <div className="text-gray-500 text-sm">{date}</div>
        </div>
        <p className="text-gray-700">
          {reaction && (
            <span className="text-indigo-500 mr-2">
              Chris Martin reacted with {reaction}
            </span>
          )}
          {message}
        </p>
      </div>
    </div>
  );
};

export default MessageItem;
