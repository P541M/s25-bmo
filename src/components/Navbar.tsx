"use client";

import React, { useState, useEffect, useMemo } from "react";
import BMOLogo from "./BMOLogo";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { href: "#introduction", label: "Introduction" },
      { href: "#company-profile", label: "Company" },
      { href: "#job-description", label: "Role" },
      { href: "#goals", label: "Goals" },
      { href: "#conclusion", label: "Conclusion" },
      { href: "#acknowledgements", label: "Thanks" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 transform translate-z-0"
      style={{
        transform: "translateZ(0)",
        WebkitTransform: "translateZ(0)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        willChange: "transform",
      }}
    >
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 safe-area-inset-x">
        <div className="flex items-center justify-between h-16 min-w-0">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <button
              onClick={() => scrollToSection("#")}
              className="flex items-center space-x-2 sm:space-x-3 group min-w-0 focus:outline-none focus:ring-2 focus:ring-bmo-blue focus:ring-offset-2 rounded-lg p-1"
            >
              <div className="transition-opacity duration-300 group-hover:opacity-80 flex-shrink-0">
                <BMOLogo size="sm" />
              </div>

              <span className="text-sm sm:text-base font-medium text-gray-900 truncate">
                S25 Work Term
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-bmo-blue focus:ring-offset-2 ${
                  activeSection === item.href.substring(1)
                    ? "text-bmo-blue bg-gray-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 active:bg-gray-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 active:bg-gray-100 transition-colors duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-bmo-blue focus:ring-offset-2"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-current block transition-all duration-300 h-0.5 w-6 ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-0.5"
                      : "-translate-y-0.5"
                  }`}
                ></span>
                <span
                  className={`bg-current block transition-all duration-300 h-0.5 w-6 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`bg-current block transition-all duration-300 h-0.5 w-6 ${
                    isMobileMenuOpen
                      ? "-rotate-45 -translate-y-0.5"
                      : "translate-y-0.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-gray-100">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`flex w-full text-left px-4 py-4 rounded-lg text-base font-medium transition-all duration-300 min-h-[48px] items-center focus:outline-none focus:ring-2 focus:ring-bmo-blue focus:ring-offset-2 ${
                  activeSection === item.href.substring(1)
                    ? "text-bmo-blue bg-gray-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 active:bg-gray-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
