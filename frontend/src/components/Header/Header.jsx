import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

function Header() {
  const { user ,logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(()=>{
    console.log(user);
    if(user){
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false)
    }
  },[user])

  useEffect(()=>{
    console.log(isLoggedIn)
  },[isLoggedIn])

  const handleLogout = ()=>{
    logout();
  }

  return (
    <header className="fixed top-0 left-0 w-full h-14 backdrop-blur-md z-50 shadow-md">

      <nav className="stroke w-full h-full flex justify-around items-center" 
      style={{padding:"4px 50px"}}
      >
        <div className="flex items-center">
          <Link to="/" className="uppercase text-xl font-bold flex items-center gap-2">
          <img src="../logo.png" alt="ZapNotes Logo" className="h-6 mr-2" />
            ZapNotes
          </Link>
        </div>
        <ul className="flex justify-evenly gap-5 items-center">
            <li>
            <Link to="/" className="hover:text-gray-200 nav-link"> 
              Home
            </Link>
            </li>
            <li>
          <a href="#about" className="hover:text-gray-200 nav-link">
            About
          </a>
            </li>
            <li>
          <Link to="/students" className="hover:text-gray-200 nav-link">
            Students
          </Link>
            </li>
          </ul>

        {/* Profile Icon with Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-white text-2xl hover:text-gray-200 focus:outline-none"
          >
            <CgProfile />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 !mt-2 w-48 bg-white rounded-xl shadow-lg !p-2 text-black z-50 ">
              {isLoggedIn ? (
                <>
                  <Link
                    to="/profile"
                    className="block!px-4 !py-2 hover:bg-gray-100 rounded-xl"
                    onClick={() => setDropdownOpen(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/mynotes"
                    className="block !px-4 !py-2 hover:bg-gray-100 rounded-xl"
                    onClick={() => setDropdownOpen(false)}
                  >
                    My Notes
                  </Link>
                  <Link
                    to="/"
                    className="block !px-4 !py-2 hover:bg-gray-100 rounded-xl"
                    onClick={() => {setDropdownOpen(false)
                      handleLogout()
                    }
                    }
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block !px-4 !py-2 hover:bg-gray-100 rounded-xl"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block !px-4 !py-2 hover:bg-gray-100 rounded-xl"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
