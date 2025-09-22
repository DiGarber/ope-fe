import { useState } from "react";
import { Link } from "react-router-dom";
import { buttonStyles, containerStyles } from "../styles/components";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className="bg-dark-400 border-b border-gray-800 sticky top-0 z-50"
      role="banner"
    >
      <nav className={containerStyles.base} aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-accent-pink to-accent-purple rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🛡️</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Open Source</h1>
              <p className="text-sm text-gray-300 -mt-1">Economy</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-pink focus:ring-opacity-50 rounded-md"
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Sign In Button */}
          <div className="hidden md:block">
            <button
              className={buttonStyles.primary}
              aria-label="Sign in to your account"
            >
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-pink focus:ring-opacity-50"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden" role="menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-300 rounded-lg mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-pink focus:ring-opacity-50"
                  role="menuitem"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                className={`${buttonStyles.primary} w-full mt-4`}
                aria-label="Sign in to your account"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
