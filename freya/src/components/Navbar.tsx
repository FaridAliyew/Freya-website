import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-7 left-0 w-full z-50"> {/* Fixed position */}
      <div className="flex justify-between items-center mx-44 bg-white p-5 rounded-3xl shadow-lg">
        <div>
          <Link to={'/'} className="bg-black font-bold text-white/85 p-2 rounded-l-full rounded-t-full">FREYA</Link>
          <Link to={'/home'} className="mx-10">Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/projects'} className="mx-10">Projects</Link>
          <Link to={'/blog'}>Blog</Link>
          <Link to={'/contact'} className="mx-10">Contact</Link>
        </div>

        <div className="icons flex items-center">
          <FaFacebookF className="cursor-pointer" />
          <FaTwitter className="mx-5 cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
