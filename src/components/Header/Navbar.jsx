import React, { useState, useRef, useEffect } from "react"; 
import Logo from "../../assets/logo.png";
import GitIcon from "../../assets/git-icon.png";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    // Same tab click → refresh page
    const handleTabClick = (e, path) => {
        if (location.pathname === path) {
            e.preventDefault();
            window.location.reload();
        }
    };

    // Active link style with smooth underline animation
    const activeLink =
        "relative text-transparent px-2 bg-clip-text bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] " +
        "after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] " +
        "after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2] after:rounded-full " +
        "after:transition-all after:duration-500";

    const inactiveLink =
        "relative text-gray-700 px-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tl hover:from-[#9F62F2] hover:to-[#632EE3] transition-all duration-300 ";

    // menu open or close state
    const [menuOpen, setMenuOpen] = useState(false);

    // dropdown outSite click detect
    const menuRef = useRef(null);

    // outSite click, then close menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navLinks = (
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
            <NavLink
                to="/"
                onClick={(e) => {
                    handleTabClick(e, "/");
                    setMenuOpen(false); // Link click menu, then auto close
                }}
                className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
            >
                Home
            </NavLink>

            <NavLink
                to="/apps"
                onClick={(e) => {
                    handleTabClick(e, "/apps");
                    setMenuOpen(false); // Link click menu, then auto close
                }}
                className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
            >
                Apps
            </NavLink>

            <NavLink
                to="/installation"
                onClick={(e) => {
                    handleTabClick(e, "/installation");
                    setMenuOpen(false); // Link click menu, then auto close
                }}
                className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
            >
                Installation
            </NavLink>
        </div>
    );

    return ( 
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="mx-10 flex justify-between items-center py-4.5">
                {/* Logo */}
                <Link to={"/"} className="flex items-center gap-2">
                    <img className="h-10 w-10" src={Logo} alt="logo" />
                    <h1 className="bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent text-xl font-bold">
                        Apps Store
                    </h1>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex font-semibold">{navLinks}</div>

                {/* GitHub Button */}
                <a
                    target="_blank"
                    href="https://github.com/mursalin35"
                    className="hidden lg:flex items-center gap-2 px-4 py-2 bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] text-white rounded-md shadow-md hover:scale-103 transition-transform duration-300"
                >
                    <img src={GitIcon} alt="git icon" className="h-5 w-5" />
                    <span>Contribute</span>
                </a>

                {/* Mobile Menu Button (React-based toggle system) */}
                <div className="lg:hidden relative" ref={menuRef}>
                    <button
                        onClick={() => setMenuOpen((prev) => !prev)} // use state menu toggle
                        className="btn btn-ghost m-1"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    {/* Conditional rendering: menuOpen true, then visible */}
                    {menuOpen && (
                        <ul className="absolute right-0 mt-2 w-52 p-4 bg-white rounded-md shadow font-semibold z-50">
                            {navLinks}
                            <a
                                target="_blank"
                                href="https://github.com/mursalin35"
                                className="flex items-center gap-2 mt-3 bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] text-white py-2 px-3 rounded-md"
                                onClick={() => setMenuOpen(false)} // click, then menu close
                            >
                                <img src={GitIcon} alt="git icon" className="h-5 w-5" />
                                <span>Contribute</span>
                            </a>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
