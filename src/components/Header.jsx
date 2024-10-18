import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between bg-black text-white font-semibold sm:h-20 h-16 fixed w-screen shadow-md z-50 px-4 md:px-10">
      <div className="sm:tracking-widest font-bold text-[30px] transition-colors duration-300 hover:text-red-600">
        <a href="#home">
          Portfo<span className="text-red-600">lio.</span>
        </a>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Desktop Navigation Menu */}
      <nav className="hidden md:flex pr-8">
        <ul className="m-5 sm:space-x-10 flex">
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <li
              key={section}
              className="hover:text-red-500 transition-colors duration-300"
            >
              <a href={`#${section}`} className="hover:underline">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Full-Screen Navigation Menu for Mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-start py-16">
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            <FaTimes />
          </button>
          <ul className="flex flex-col items-center space-y-8">
            {["home", "about", "skills", "projects", "contact"].map(
              (section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={toggleMenu}
                    className="text-white text-2xl transition-colors duration-300 hover:text-red-500"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
