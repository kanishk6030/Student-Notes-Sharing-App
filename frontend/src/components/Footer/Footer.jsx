import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full text-white bg-gray-900/90 backdrop-blur-md shadow-lg py-12 mt-auto">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* Section 1: Brand & Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold mb-2">NoteNest</h3>
            <p className="text-sm text-gray-400 max-w-xs mb-4">
              Your hub for shared knowledge. Explore and contribute to a vast library of notes.
            </p>
            <div className="flex space-x-4 text-xl">
              <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition-colors duration-300">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-sky-400 transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors duration-300">
                <FaLinkedin />
              </a>
            </div>
          </div>
          
          {/* Section 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors duration-300">Notes</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors duration-300">Profile</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors duration-300">About Us</a>
              </li>
            </ul>
          </div>
          
          {/* Section 3: Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors duration-300">FAQ</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors duration-300">Help Center</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors duration-300">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors duration-300">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Section 4: Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <p className="text-sm">
              123 Note Street, Knowledge City, NC 12345
            </p>
            <p className="text-sm mt-2">
              Email: <a href="mailto:info@notenest.com" className="hover:underline">info@notenest.com</a>
            </p>
            <p className="text-sm mt-2">
              Phone: (123) 456-7890
            </p>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} NoteNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;