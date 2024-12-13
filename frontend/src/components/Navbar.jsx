import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"; // Import the hamburger icon
import logo from '../assets/cars/logo-honda-dealer.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="max-w-screen-2xl mx-auto px-6 py-6">
      <nav className="flex justify-between items-center">
        {/* Navbar kiri */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <img src={logo} alt="Logo Honda Dealer" className="w-20 h-8" /> {/* Logo */}
          </Link>

          {/* Search input */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoIosSearch className="absolute left-3 inset-y-1 text-xl" />
            <input
              type="text"
              placeholder="Search Here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Navbar kanan - tombol navigasi */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="#service" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
          <Link to="#promo" className="text-gray-700 hover:text-blue-600 font-medium">Promo</Link>
          <Link to="#testimoni" className="text-gray-700 hover:text-blue-600 font-medium">Testimoni</Link>
          <Link to="#news" className="text-gray-700 hover:text-blue-600 font-medium">News</Link>
          <Link to="/product" className="text-gray-700 hover:text-blue-600 font-medium">Product</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Us</Link>

          {/* Hubungi Kami button */}
          <Link
            to="https://wa.me/+6285742094207"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
          >
            <FaWhatsapp className="text-xl" />
            <span>Hubungi Kami</span>
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            <GiHamburgerMenu className="text-2xl text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-white shadow-lg mt-4 rounded-lg`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <Link to="#service" className="text-gray-700 hover:text-blue-600">Services</Link>
          <Link to="#promo" className="text-gray-700 hover:text-blue-600">Promo</Link>
          <Link to="#testimoni" className="text-gray-700 hover:text-blue-600">Testimoni</Link>
          <Link to="#news" className="text-gray-700 hover:text-blue-600">News</Link>
          <Link to="/product" className="text-gray-700 hover:text-blue-600">Product</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>

          {/* Hubungi Kami button */}
          <Link
            to="https://wa.me/+6285742094207"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
          >
            <FaWhatsapp className="text-xl" />
            <span>Hubungi Kami</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
