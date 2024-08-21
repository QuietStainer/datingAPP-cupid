import React, { useState, useRef, useEffect } from 'react';
  let countries = [
    { code: '+1', flag: 'india', name: 'United States' },
    { code: '+44', flag: 'india', name: 'United Kingdom' },
    { code: '+91', flag: 'india', name: 'India' },
    // Add more countries as needed
  ];
const PhoneInput:React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState('');

  // Refs for the dropdown container and button
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleCountryClick = (country: any) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(target) &&
        !buttonRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className="flex w-[325px] h-[56px] items-center border border-gray-300 rounded-full bg-white shadow-md">
      <div className="relative inline-block pr-4">
        <button
          className="flex items-center pl-2 pr-2 py-1.5 rounded-l-full focus:outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            className="w-8 h-8 mr-2"
            alt={`${selectedCountry.name} flag`}
            src={`/image/flag/${selectedCountry.flag}.png`}
          />
          {selectedCountry.code}
        </button>
        {isOpen && (
          <div
            className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10"
            ref={dropdownRef}
          >
            {countries.map((country) => (
              <div
                key={country.code}
                className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleCountryClick(country)}
              >
                <img
                  className="w-8 h-8 mr-2"
                  alt={`${country.name} flag`}
                  src={`/image/flag/${country.flag}.png`}
                />
                <span>{country.code}</span>
              </div>
            ))}
          </div>
        )}
      </div>      
      <span className="border-l border-gray-300 h-full"></span>
      <input
        type="text"
        className="w-3/4 pl-4 py-2 rounded-r-full focus:outline-none"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
    </div>
  );
};

export default PhoneInput;
