import { useState } from "react";
import { useUserStore } from "../../store/UserStore";
import NavBar from "./NavBar";
import NavBarItem from "./NavBarItem";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const role = useUserStore((state) => state.role);

  return (
    <>
      <div className="sticky top-0 z-40 w-full backdrop-blur transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 bg-white supports-backdrop-blur:bg-white/95">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 border-b border-slate-900/10 lg:border-0">
            {/* Logo */}
            <a href={isLoggedIn ? "/dashboard" : "/"} className="flex items-center">
              <img src="/images/wolfjobs-logo.png" alt="logo" className="h-10" />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex space-x-8">
              {role === "Manager" && isLoggedIn && (
                <NavBarItem link="/dashboard" text="My Listings" />
              )}
              {role === "Applicant" && isLoggedIn && (
                <NavBarItem link="/dashboard" text="My Applications" />
              )}
              {isLoggedIn && <NavBarItem link="/explore" text="All jobs" />}
            </div>

            {/* Desktop Navbar */}
            <div className="hidden lg:flex">
              <NavBar />
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden">
              <div className="flex flex-col space-y-2">
                {role === "Manager" && isLoggedIn && (
                  <NavBarItem link="/dashboard" text="My Listings" />
                )}
                {role === "Applicant" && isLoggedIn && (
                  <NavBarItem link="/dashboard" text="My Applications" />
                )}
                {isLoggedIn && <NavBarItem link="/explore" text="All jobs" />}
              </div>
              <NavBar />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
