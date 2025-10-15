import React from 'react';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer className='bg-[#001931] px-10 py-6 text-white mt-15'>
            <section className='flex justify-between border-b-1 border-gray-600 pb-2'>
                <div className='flex gap-2'>
                    <img className='h-6 w-6' src={logo} alt="logo" />
                    <h3>Apps Store</h3>
                </div>
                <div>
                    <p className='mb-1'>Social Links</p>
                    <div className='flex gap-2'>
                        <a href="https://www.facebook.com/mursalin07" target='_blank'><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://www.linkedin.com/in/mursalin07/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://www.pinterest.com/mursalin07" target='_blank'><i className="fa-brands fa-pinterest"></i></a>
                    </div>
                </div>
            </section>

            <p className='text-center text-sm pt-7 mb-2 opacity-85'>Copyright © 2025 - All right reserved by M.S Mursalin</p>

        </footer>
    );
};

export default Footer;