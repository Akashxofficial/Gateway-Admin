'use client';

import Image from "next/image";
import { useState, useRef, useEffect } from 'react';

interface HeaderProps {
  isScrolled?: boolean;
}

export default function Header({ isScrolled = false }: HeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const universitiesMenu = [
    'Ivy League Universities',
    'Russell Group Universities',
    'TU9 & Public Universities (Germany)',
    'Italian Public Universities'
  ];

  const countriesMenu = [
    'USA',
    'UK',
    'Germany',
    'Italy',
    'France',
    'Canada',
    'Australia'
  ];

  const servicesMenu = [
    'Profile Evaluation',
    'University Shortlisting',
    'SOP & LOR Guidance',
    'Visa Assistance',
    'Scholarship Support'
  ];

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // 200ms delay before closing
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center `}>
          {/* Logo */}
          <div className="flex items-center t">
            <Image 
              src="/logo.png" 
              alt="Gateway Global Logo"
              width={200}
              height={67}
              className={'object-contain transition-all duration-300 '}
            />
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden z-50 transition-all duration-300 p-2 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{ zIndex: 10000 }}
          >
            {mobileMenuOpen ? (
              <svg className="text-gray-700 transition-all duration-300 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="text-gray-700 transition-all duration-300 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 lg:hidden z-40">
              <nav className="flex flex-col py-4 px-4 space-y-2">
                <a href="/" className="text-gray-700 font-medium py-2 px-4 hover:bg-gray-50 rounded">Home</a>
                <a href="/about-us" className="text-gray-700 font-medium py-2 px-4 hover:bg-gray-50 rounded">About Us</a>
                
                {/* Universities Mobile Dropdown */}
                <div>
                  <button 
                    className="w-full text-left text-gray-700 font-medium py-2 px-4 hover:bg-gray-50 rounded flex items-center justify-between"
                    onClick={() => setActiveDropdown(activeDropdown === 'universities' ? null : 'universities')}
                  >
                    Universities
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#f46c44' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeDropdown === 'universities' && (
                    <div className="pl-4 mt-2 space-y-1">
                      {universitiesMenu.map((item, index) => (
                        <a
                          key={index}
                          href={item === 'Ivy League Universities' ? '/ivy-league' : '#'}
                          className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-50 hover:text-orange-500 rounded"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Countries Mobile Dropdown */}
                <div>
                  <button 
                    className="w-full text-left text-gray-700 font-medium py-2 px-4 hover:bg-gray-50 rounded flex items-center justify-between"
                    onClick={() => setActiveDropdown(activeDropdown === 'countries' ? null : 'countries')}
                  >
                    Countries
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#f46c44' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeDropdown === 'countries' && (
                    <div className="pl-4 mt-2 space-y-1">
                      {countriesMenu.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-50 hover:text-orange-500 rounded"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Services Mobile Dropdown */}
                <div>
                  <button 
                    className="w-full text-left text-gray-700 font-medium py-2 px-4 hover:bg-gray-50 rounded flex items-center justify-between"
                    onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                  >
                    Services
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#f46c44' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeDropdown === 'services' && (
                    <div className="pl-4 mt-2 space-y-1">
                      {servicesMenu.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-50 hover:text-orange-500 rounded"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a href="/blog" className="text-gray-700 font-medium py-2 px-4 hover:bg-gray-50 rounded">Blog</a>
                <a href="#" className="text-gray-700 font-medium py-2 px-4 hover:bg-gray-50 rounded">Contact</a>
              </nav>
            </div>
          )}
          
          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center text-sm relative transition-all duration-300 gap-6`}>
            <a href="/" className="text-gray-700 font-medium hover:text-orange-500 transition text-sm">Home</a>
            <a href="/about-us" className="text-gray-700 font-medium hover:text-orange-500 transition text-sm">About Us</a>
            
            {/* Universities Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('universities')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="text-gray-700 font-medium hover:text-orange-500 transition flex items-center text-sm">
                Universities
                <svg className="ml-1 transition-all duration-300 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#f46c44' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              {activeDropdown === 'universities' && (
                <div
                  className="absolute top-full left-0 pt-2 w-64 z-50"
                  onMouseEnter={() => handleMouseEnter('universities')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white shadow-lg rounded-lg py-2 border border-gray-200">
                    {universitiesMenu.map((item, index) => (
                      <a
                        key={index}
                        href={item === 'Ivy League Universities' ? '/ivy-league' : '#'}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-500"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Countries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('countries')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="text-gray-700 font-medium hover:text-orange-500 transition flex items-center text-sm">
                Countries
                <svg className="ml-1 transition-all duration-300 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#f46c44' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              {activeDropdown === 'countries' && (
                <div
                  className="absolute top-full left-0 pt-2 w-48 z-50"
                  onMouseEnter={() => handleMouseEnter('countries')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white shadow-lg rounded-lg py-2 border border-gray-200">
                    {countriesMenu.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-500"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="text-gray-700 font-medium hover:text-orange-500 transition flex items-center text-sm">
                Services
                <svg className="ml-1 transition-all duration-300 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#f46c44' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              {activeDropdown === 'services' && (
                <div
                  className="absolute top-full left-0 pt-2 w-56 z-50"
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white shadow-lg rounded-lg py-2 border border-gray-200">
                    {servicesMenu.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-500"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="/blog" className="text-gray-700 font-medium hover:text-orange-500 transition text-sm">Blog</a>
            <a href="#" className="text-gray-700 font-medium hover:text-orange-500 transition text-sm">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

