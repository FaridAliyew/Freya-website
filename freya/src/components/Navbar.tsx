import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-7 left-0 w-full z-50">
      <div className="flex justify-between items-center mx-10 lg:mx-44 bg-white p-3 rounded-3xl shadow-lg">
        <div className="flex items-center">
          <Link to={'/'} className="bg-black font-bold text-white/85 p-2 rounded-l-full rounded-t-full">
            FREYA
          </Link>
          <div className="hidden lg:flex ml-10 space-x-8">
            <Link to={'/home'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/projects'}>Projects</Link>
            <Link to={'/blog'}>Blog</Link>
            <Link to={'/contact'}>Contact</Link>
          </div>
        </div>

        <div className="flex items-center">
          <div className="hidden lg:flex items-center">
            <FaFacebookF className="cursor-pointer" />
            <FaTwitter className="mx-5 cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
          </div>
          <div className="lg:hidden ml-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <FaTimes className="text-xl" /> 
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="bg-white p-5 shadow-lg rounded-3xl mx-6 mt-4">
          <div className="flex flex-col items-center space-y-4">
            <Link to={'/home'} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to={'/about'} onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to={'/projects'} onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
            <Link to={'/blog'} onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link to={'/contact'} onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <div className="flex space-x-4 mt-4">
              <FaFacebookF className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
