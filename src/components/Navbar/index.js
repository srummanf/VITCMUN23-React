import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import munLogo from '../../assets/logo.png';
import { Outlet, Link, useLocation } from "react-router-dom";
import Styles from './styles/Style.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(1);

  const location = useLocation();


  function handleClick(option) {
    setActiveOption(option);
  }

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/":
        setActiveOption(1);
        break;
      case "/about":
        setActiveOption(2);
        break;
      case "/secretarait":
        setActiveOption(3);
        break;
      case "/committee":
        setActiveOption(4);
        break;
      case "/apply":
        setActiveOption(5);
        break;
      default:
        setActiveOption(1);
    }
  }, [location]);





  return (
    <nav className="bg-transparent absolute top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <a href="/">
                <img
                  className="h-20 w-20 md:h-32 md:w-32"
                  src={munLogo}
                  alt="VITCMUN Logo"
                />
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  onClick={() => handleClick(1)}
                  id="navbar"
                  className={`${activeOption === 1 ? `${Styles.underlined} hover:text-[#AE50A4]` : 'text-white'} text-white hover:text-[#AE50A4] px-3 py-2 rounded-md text-sm font-medium transition-all duration-200`}
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  onClick={() => handleClick(2)}
                  id="navbar"
                  className={`${activeOption === 2 ? `${Styles.underlined} hover:text-[#AE50A4]` : 'text-white'} text-white hover:text-[#AE50A4] px-3 py-2 rounded-md text-sm font-medium transition-all duration-200`}
                >
                  About
                </Link>

                <Link
                  to="/secretarait"
                  onClick={() => handleClick(3)}
                  id="navbar"
                  className={`${activeOption === 3 ? `${Styles.underlined} hover:text-[#AE50A4]` : 'text-white'} text-white hover:text-[#AE50A4] px-3 py-2 rounded-md text-sm font-medium transition-all duration-200`}
                >
                  Secretarait
                </Link>

                <Link
                  to="/committee"
                  onClick={() => handleClick(4)}
                  id="navbar"
                  className={`${activeOption === 4 ? `${Styles.underlined} hover:text-[#AE50A4]` : 'text-white'} text-white hover:text-[#AE50A4] px-3 py-2 rounded-md text-sm font-medium transition-all duration-200`}
                >
                  Committee
                </Link>

                <Link
                  to="/apply"
                  onClick={() => handleClick(5)}
                  id="navbar"
                  className={`${activeOption === 5 ? `${Styles.underlined} hover:text-[#AE50A4]` : 'text-white'} text-white hover:text-[#AE50A4] px-3 py-2 rounded-md text-sm font-medium transition-all duration-200`}
                >
                  Apply
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden flex justify-end pr-4" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#f1f5f9] flex flex-col w-1/2 rounded-xl shadow-lg">
              <Link
                to="/"
                onClick={() => handleClick(1)}
                id="navbar"
                className={`${activeOption === 1 ? `${Styles.underlined} hover:text-[#AE50A4]` : 'text-gray-600'} hover:text-[#AE50A4] block px-3 py-2 rounded-md text-base font-medium`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => handleClick(2)}
                id="navbar"
                className={`${activeOption === 2 ? `${Styles.underlined} hover:text-[#AE50A4]` : 'text-gray-600'} hover:text-[#AE50A4] block px-3 py-2 rounded-md text-base font-medium`}
              >
                About 
              </Link>
              <Link
                to="/secretarait"
                onClick={() => handleClick(3)}
                id="navbar"
                className={`${activeOption === 3 ? `${Styles.underlined} hover:text-[#AE50A4]` : 'text-gray-600'} hover:text-[#AE50A4] block px-3 py-2 rounded-md text-base font-medium`}
              >
                Secretarait
              </Link>
              <Link
                to="/committee"
                onClick={() => handleClick(4)}
                id="navbar"
                className={`${activeOption === 4 ? `${Styles.underlined} hover:text-[#AE50A4]` : 'text-gray-600'} hover:text-[#AE50A4] block px-3 py-2 rounded-md text-base font-medium`}
              >
                Committee
              </Link>

              <Link
                to="/apply"
                onClick={() => handleClick(5)}
                id="navbar"
                className={`${activeOption === 5 ? `${Styles.underlined} hover:text-[#AE50A4]` : 'text-gray-600'} hover:text-[#AE50A4] block px-3 py-2 rounded-md text-base font-medium`}
              >
                Apply
              </Link>


            </div>
          </div>
        )}
      </Transition>
    </nav>


  );
};

export default Navbar;
