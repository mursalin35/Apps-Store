import React from 'react';
import error from '../../assets/error-404.png'
import { useNavigate } from 'react-router';

const ErrorPage = () => {

    // Take a step back 
    const navigate = useNavigate();

    return (
        <section className='my-10'>
            {/* Error image  */}
            <img className='mx-auto w-[28%]' src={error} alt="Error image" />

            {/* title  */}
            <div className='text-center mt-5'>
                <h1 className='text-[2.5rem] font-bold'>Oops, page not found!</h1>
                <p className='opacity-70 mt-3'>The page you are looking for is not available.</p>
            </div>

            {/* button  */}
            <div className='flex justify-center mt-8 items-center '>
                <button onClick={() => navigate(-1)} className='rounded-sm w-30 h-10 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white text-[1.1rem] font-semibold cursor-pointer btn transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#9F62F2]'>Go Back!</button>
            </div>
        </section>
    );
};

export default ErrorPage;