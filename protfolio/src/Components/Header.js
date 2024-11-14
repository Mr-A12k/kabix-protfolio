// import React from 'react';

// const Header = () => {
//     return (
//         <header className="p-3 dark:bg-gray-100 dark:text-gray-800 shadow-md dark:shadow-lg">
//             <div className="container flex justify-between h-12 mx-auto">
//                 {/* Logo / Home Link */}

//                 <h1 className="flex items-center text-3xl font-bold text-center mt-6 text-gray-800">Portfolio</h1>

//                 {/* Navigation Links */}

//                 <ul className="items-stretch hidden space-x-3 md:flex">
//                     <li className="flex">
//                         <a
//                             rel="noopener noreferrer"
//                             href="#"
//                             className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-violet-600 hover:text-violet-600"
//                         >
//                             Home
//                         </a>
//                     </li>
//                     <li className="flex">
//                         <a
//                             rel="noopener noreferrer"
//                             href="#"
//                             className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-violet-600 hover:text-violet-600"
//                         >
//                             About Me
//                         </a>
//                     </li>
//                     <li className="flex">
//                         <a
//                             rel="noopener noreferrer"
//                             href="#"
//                             className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-violet-600 hover:text-violet-600"
//                         >
//                             Projects
//                         </a>
//                     </li>
//                     <li className="flex">
//                         <a
//                             rel="noopener noreferrer"
//                             href="#"
//                             className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-violet-600 hover:text-violet-600"
//                         >
//                             Contact
//                         </a>
//                     </li>
//                 </ul>


//                 {/* Mobile Menu Button */}
//                 <button className="flex justify-end p-4 md:hidden">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         className="w-6 h-6"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M4 6h16M4 12h16M4 18h16"
//                         ></path>
//                     </svg>
//                 </button>
//             </div>
//         </header>
//     );
// };

// export default Header;

import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="p-3 dark:bg-gray-100 dark:text-gray-800 shadow-md dark:shadow-lg relative z-10">
      <div className="container flex justify-between items-center h-12 mx-auto">
        {/* Logo / Home Link */}
        <h1 className="text-3xl font-bold text-gray-800">Portfolio</h1>

        {/* Desktop Navigation Links */}
        <ul className="hidden space-x-3 md:flex">
          <li>
            <a
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-violet-600 hover:text-violet-600"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-violet-600 hover:text-violet-600"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-violet-600 hover:text-violet-600"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-violet-600 hover:text-violet-600"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="p-4 md:hidden focus:outline-none"
        >
          {isMenuOpen ? (
            // "X" Icon for closing the menu
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            // Hamburger Icon for opening the menu
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-gray-100 dark:bg-gray-800 flex flex-col items-center space-y-4 p-5 md:hidden">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-violet-600 hover:text-white w-full text-center"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-violet-600 hover:text-white w-full text-center"
                onClick={toggleMenu}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-violet-600 hover:text-white w-full text-center"
                onClick={toggleMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-violet-600 hover:text-white w-full text-center"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;