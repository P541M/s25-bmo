
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-gray-800">
              WTR S25
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-4">
              <li>
                <a
                  href="#introduction"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Introduction
                </a>
              </li>
              <li>
                <a
                  href="#company-profile"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Company Profile
                </a>
              </li>
              <li>
                <a
                  href="#job-description"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Job Description
                </a>
              </li>
              <li>
                <a
                  href="#goals"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Goals
                </a>
              </li>
              <li>
                <a
                  href="#conclusion"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Conclusion
                </a>
              </li>
              <li>
                <a
                  href="#acknowledgements"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Acknowledgements
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
