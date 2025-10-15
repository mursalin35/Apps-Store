import React from 'react';
import Logo from '../../assets/logo.png'
import GitIcon from '../../assets/git-icon.png'
import { Link, NavLink } from 'react-router';
const Navbar = () => {

    // text color & after the start underline color
    const activeLink = "relative text-transparent bg-clip-text bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1.5px] after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2]"

    const navLinks = <>
        <div className='navDiv flex gap-10'>
            {/* Home tap  */}
            <NavLink
                to="/"
                className={({ isActive }) => isActive ? activeLink : ""}
            >
                Home
            </NavLink>
            {/* Home tap  */}
            <NavLink
                to="/apps"
                className={({ isActive }) => isActive ? activeLink : ""}
            >
                Apps
            </NavLink>
            {/* Home tap  */}
            <NavLink
                to="/installation"
                className={({ isActive }) => isActive ? activeLink : ""}
            >
                Installation
            </NavLink>
        </div>
    </>

    return (
        <nav className="flex bg-base-100 shadow-sm px-10 py-3 sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
                        {navLinks}
                    </ul>
                </div>
                <Link to={'/'}>
                    <button className='flex items-center text-xl font-semibold cursor-pointer gap-2'>
                        <img className='h-11 w-11' src={Logo} alt="logo" />
                        <h1 className='bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent'>Apps Store</h1>
                    </button>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end ">
                <a target='_blank' href="https://github.com/mursalin35" className='flex items-center btn bg-gradient-to-tl from-[#9F62F2] to-[#632EE3]'>
                    <img src={GitIcon} alt="git icon" />
                    <a className="text-white font-semibold">Contribute</a>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;