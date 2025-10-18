import React, { useEffect, useState } from 'react';
import appError from '../../assets/App-Error.png';
import { useNavigate } from 'react-router';
import Loading from '../../components/Loading/Loading'; 

const AppError = () => {
    const navigate = useNavigate();

    // Loader states
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setIsLoading(false), 0);
        }, 100);
        return () => clearTimeout(timer);
    }, []);


    // Show loader while page loads
    if (isLoading) {
        return (
            <div
                className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-white z-50 transition-opacity duration-500 ${
                    fadeOut ? 'opacity-0' : 'opacity-100'
                }`}
            >
                <Loading />
            </div>
        );
    }

    // Main Error Content
    return (
        <section className='my-10 px-4 sm:px-6 md:px-10'>
            {/* Error image */}
            <img
                className='mx-auto w-[30%] sm:w-[32%] md:w-[35%] lg:w-[25%]'
                src={appError}
                alt='Error image'
            />

            {/* Title */}
            <div className='text-center mt-5'>
                <h1 className='text-2xl sm:text-3xl md:text-[2.5rem] font-bold leading-snug'>
                    OOPS!! APP NOT FOUND
                </h1>
                <p className='opacity-70 mt-3 text-sm sm:text-base md:text-lg px-3'>
                    The App you are requesting is not found on our system.
                    Please try another app.
                </p>
            </div>

            {/* Button */}
            <div className='flex justify-center mt-8 items-center'>
                <button
                    onClick={() => navigate(-1)}
                    className='rounded-sm px-6 py-1.5 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white text-base sm:text-[1.1rem] font-semibold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#9F62F2]'
                >
                    Go Back!
                </button>
            </div>
        </section>
    );
};

export default AppError;
