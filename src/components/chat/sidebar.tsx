// src/components/MessageList.tsx
import React, { useState } from 'react';
import MessageItem from '../common/MessageItem';

const MessageList: React.FC = () => {
  const [filter, setFilter] = useState('');
  
  const messages = [
    {
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      name: 'Suzana Colin',
      username: 'suzana',
      date: 'Dec 15',
      message: 'Chris Martin reacted with :love',
      reaction: '💙:love',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      name: 'Christina Ker',
      username: 'tinachris',
      date: 'Dec 15',
      message: 'thank a lot for your good recommendation...',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      name: 'Charles May',
      username: 'maythe',
      date: 'Dec 15',
      message: 'Chris Martin reacted with :love',
      reaction: '💙:love',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      name: 'John Hope',
      username: 'hopj_ohn',
      date: 'Dec 15',
      message: 'i just sad, we may have a good couple.',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
      name: 'Michael Hopkins',
      username: 'hopkins',
      date: 'Dec 15',
      message: 'Chris Martin reacted with :love',
      reaction: '💙:love',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
      name: 'Suzana Colin',
      username: 'suzana',
      date: 'Dec 15',
      message: 'nooo, :D you cant do this anymore',
    },
  ];

  const filteredMessages = messages.filter((msg) =>
    msg.name.toLowerCase().includes(filter.toLowerCase()) ||
    msg.username.toLowerCase().includes(filter.toLowerCase()) ||
    msg.message.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="bg-white shadow-md w-96 p-4 gap-5">
      <p className='flex text-black font-semibold text-3xl mb-5'>Message</p>
      <input
        type="text"
        placeholder="Filter messages..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="max-h-[450px] overflow-y-auto">
        {filteredMessages.length > 0 ? (
          filteredMessages.map((msg, index) => (
            <MessageItem key={index} {...msg} />
          ))
        ) : (
          <p className="text-gray-500">No messages found.</p>
        )}
      </div>
    </div>
  );
};

export default MessageList;
