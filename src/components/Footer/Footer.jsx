import React from 'react';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer className='bg-[#001931] px-10 py-6 text-white mt-15'>
            <section className='flex justify-between border-b-1 border-gray-600 pb-2'>
              <div className=''>
                  <div className='flex gap-2'>
                    <img className='h-6 w-6' src={logo} alt="logo" />
                    <h3>Apps Store</h3>
                </div>
                <div className='max-w-72  mt-5 '>
                    <p className='text-gray-400 text-xs leading-5'>An innovative Apps Store offering a wide range of applications for productivity, entertainment, and daily use. Discover, install, and manage your favorite apps easily with a smooth, fast, and user-friendly experience.</p>
                </div>
              </div>

              <div>
                <h2>Company</h2>
                <ul className='flex flex-col gap-3 text-gray-400 text-xs mt-5'>
                    <a className='hover:underline cursor-pointer'>About Us</a>
                    <a className='hover:underline cursor-pointer'>Our Mission</a>
                    <a className='hover:underline cursor-pointer'>Contact Saled</a>
                </ul>
              </div>

              <div>
                <h2>Services</h2>
                <ul className='flex flex-col gap-3 text-gray-400 text-xs mt-5'>
                    <a className='hover:underline cursor-pointer'>Products & Services</a>
                    <a className='hover:underline cursor-pointer'>Customer Stories</a>
                    <a className='hover:underline cursor-pointer'>Download Apps</a>
                </ul>
              </div>

              <div>
                <h2>Information</h2>
                <ul className='flex flex-col gap-3 text-gray-400 text-xs mt-5'>
                    <a className='hover:underline cursor-pointer'>Privacy Policy</a>
                    <a className='hover:underline cursor-pointer'>Terms & Conditions</a>
                    <a className='hover:underline cursor-pointer'>Join Us</a>
                </ul>
              </div>

                <div>
                    <p>Social Links</p>
                    <div className='flex gap-2 mt-4'>
                        <a href="https://www.facebook.com/mursalin07" target='_blank'><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://www.linkedin.com/in/mursalin07/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://www.pinterest.com/mursalin07" target='_blank'><i className="fa-brands fa-pinterest"></i></a>
                    </div>
                </div>
            </section>

            <p className='text-center text-sm pt-7 mb-2 opacity-70'>Copyright © 2025 - All right reserved by M.S Mursalin</p>

        </footer>
    );
};

export default Footer;