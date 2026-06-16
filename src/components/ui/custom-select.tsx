import React, { useState, useRef, useEffect } from 'react';

export const CustomSelect = ({ 
  options, 
  value, 
  onChange, 
  placeholder,
  name,
  className = ""
}: { 
  options: {value: string, label: string}[], 
  value: string, 
  onChange: (e: any) => void, 
  placeholder: string,
  name?: string,
  className?: string
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div
        className={`w-full h-12 px-4 rounded-none border ${isOpen ? 'border-[#B6FF00] ring-1 ring-[#B6FF00]' : 'border-gray-200'} bg-white text-gray-900 flex items-center justify-between cursor-pointer transition-all hover:border-[#B6FF00]`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={value ? 'text-gray-900' : 'text-gray-500'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <div className="pointer-events-none">
          <svg className={`w-5 h-5 text-[#B6FF00] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.1" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <div
              key={option.value}
              className={`px-4 py-3 cursor-pointer transition-colors ${
                value === option.value 
                  ? 'bg-[#B6FF00] text-black font-medium' 
                  : 'text-gray-700 hover:bg-[#B6FF00] hover:text-black'
              }`}
              onClick={() => {
                onChange({
                  target: { name, value: option.value, type: 'select-one' }
                });
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
