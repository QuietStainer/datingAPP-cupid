// import React, { useState } from 'react';

// interface CustomDropdownProps {
//   min: number;
//   max: number;
//   value: number;
//   onChange: (value: number) => void;
// }

// const CustomDropdown: React.FC<CustomDropdownProps> = ({ min, max, value, onChange }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSelect = (num: number) => {
//     onChange(num);
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative w-20 mx-auto">
//       <button
//         className="w-full bg-white text-xl text-red-500 border-2 border-red-300 rounded-md py-2"
//         onClick={toggleDropdown}
//       >
//         {value}
//       </button>
//       {isOpen && (
//         <ul className="absolute top-full left-0 w-full bg-white border-2 border-red-300 rounded-md shadow-lg mt-1">
//           {Array.from({ length: max - min + 1 }, (_, i) => min + i).map((num) => (
//             <li
//               key={num}
//               className={`px-4 py-2 text-center text-xl cursor-pointer ${
//                 num === value ? 'bg-red-100 text-red-500 font-bold' : 'hover:bg-gray-100'
//               }`}
//               onClick={() => handleSelect(num)}
//             >
//               {num}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

import React, { useState, useEffect, useRef } from 'react';

interface CustomDropdownProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ min, max, value, onChange }) => {
  const pickerRef = useRef<HTMLDivElement>(null);
  const itemHeight = 40; // Each item's height
  const [isScrolling, setIsScrolling] = useState(false);

  // Update scroll position when value changes externally
  useEffect(() => {
    if (pickerRef.current && !isScrolling) {
      const initialScroll = (value - min) * itemHeight;
      pickerRef.current.scrollTo({ top: initialScroll, behavior: 'smooth' });
    }
  }, [value, min, isScrolling]);

  const handleScroll = () => {
    setIsScrolling(true);
    if (pickerRef.current) {
      const scrollPos = pickerRef.current.scrollTop;
      const nearestIndex = Math.round(scrollPos / itemHeight);
      const newValue = min + nearestIndex;
      onChange(newValue);
    }
  };

  const handleScrollEnd = () => {
    setIsScrolling(false);
    if (pickerRef.current) {
      const scrollPos = pickerRef.current.scrollTop;
      const nearestIndex = Math.round(scrollPos / itemHeight);
      const snapPosition = nearestIndex * itemHeight;
      pickerRef.current.scrollTo({ top: snapPosition, behavior: 'smooth' });
      const newValue = min + nearestIndex;
      onChange(newValue);
    }
  };

  const renderNumbers = () => {
    const numbers = [];
    for (let i = min; i <= max; i++) {
      numbers.push(
        <div
          key={i}
          className={`text-3xl text-center transition-transform duration-300 ease-in-out ${
            i === value ? 'text-red-500 font-bold' : 'text-gray-400'
          }`}
          style={{
            height: `${itemHeight}px`,
            lineHeight: `${itemHeight}px`,
          }}
        >
          {i}
        </div>
      );
    }
    return numbers;
  };

  return (
    <div
      ref={pickerRef}
      className="relative h-64 w-20 mx-auto overflow-hidden"
      onScroll={handleScroll}
      onWheel={() => setTimeout(handleScrollEnd, 150)} // Delay snap after wheel scroll
      onTouchEnd={handleScrollEnd} // Snap to nearest number on touch end
      onMouseUp={handleScrollEnd} // Snap to nearest number on mouse up
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center">
        {renderNumbers()}
      </div>
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-10 border-y-2 border-red-300 pointer-events-none"></div>
    </div>
  );
};

export default CustomDropdown;