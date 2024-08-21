import React from 'react';

const MessageInput: React.FC = () => {
  return (
    <div className="flex absolute bottom-10 w-4/6 items-center p-2 border-t bg-white">
    <button className="p-2 text-teal-500">
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="#56f08c" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M15 8h.01M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></path><path d="m3 16l5-5c.928-.893 2.072-.893 3 0l5 5"></path><path d="m14 14l1-1c.928-.893 2.072-.893 3 0l3 3"></path></g></svg>
    </button>
    <button className="p-2 text-teal-500">
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#56f08c" d="M18.75 3.5A3.25 3.25 0 0 1 22 6.75v10.503a3.25 3.25 0 0 1-3.25 3.25H5.25A3.25 3.25 0 0 1 2 17.253V6.75A3.25 3.25 0 0 1 5.25 3.5zm0 1.5H5.25A1.75 1.75 0 0 0 3.5 6.75v10.503c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75V6.75A1.75 1.75 0 0 0 18.75 5M8.015 8.871c.596 0 1.019.082 1.502.314a.625.625 0 1 1-.541 1.127c-.3-.144-.54-.19-.961-.19c-.867 0-1.504.796-1.504 1.872s.638 1.876 1.504 1.876c.428 0 .791-.18.98-.501L9 13.354v-.734h-.376a.625.625 0 0 1-.618-.532L8 11.996c0-.314.231-.574.533-.619l.092-.006h1.002c.314 0 .573.23.618.532l.007.093l-.002 1.547l-.006.056l-.021.09l-.02.055c-.377.89-1.241 1.376-2.188 1.376c-1.626 0-2.754-1.413-2.754-3.126S6.388 8.87 8.015 8.87m4.614.122c.314 0 .574.232.618.533l.007.092v4.762a.625.625 0 0 1-1.243.093l-.007-.093v-4.76c0-.345.28-.625.625-.625m2.996 0L17.622 9a.625.625 0 0 1 .088 1.244l-.092.006l-1.371-.005v1.754h1.123c.314 0 .574.232.618.534l.007.092a.625.625 0 0 1-.533.618l-.092.007l-1.123-.001v1.115a.625.625 0 0 1-.532.619l-.092.006a.625.625 0 0 1-.619-.532l-.006-.093V9.616A.625.625 0 0 1 15.532 9z"></path></svg>
    </button>
    <input
      type="text"
      placeholder="Start a new message"
      className="flex-1 px-4 py-2 mx-2 text-sm border rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
    />
    <button className="p-2 text-teal-500">
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#56f08c" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></path><path fill="#56f08c" d="M14.829 14.828a4.1 4.1 0 0 1-1.272.858a4 4 0 0 1-4.875-1.45l-1.658 1.119a6.1 6.1 0 0 0 1.621 1.62a6 6 0 0 0 2.148.903a6 6 0 0 0 2.415 0a6 6 0 0 0 2.148-.903c.313-.212.612-.458.886-.731c.272-.271.52-.571.734-.889l-1.658-1.119a4 4 0 0 1-.489.592"></path><circle cx={8.5} cy={10.5} r={1.5} fill="#56f08c"></circle><circle cx={15.493} cy={10.493} r={1.493} fill="#56f08c"></circle></svg>
    </button>
    <button className="p-2 text-teal-500">
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="#56f08c" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 12L3 20l3.563-8L3 4zM6.5 12H22"></path></svg>
    </button>
  </div>
  );
};

export default MessageInput;
