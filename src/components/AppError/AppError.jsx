import React from 'react';
import appError from '../../assets/App-Error.png'
import { useNavigate } from 'react-router';

const AppError = () => {
    // Take a step back 
    const navigate = useNavigate();

    return (
        // AppError container
        <section className='my-10'>
            {/* Error image  */}
            <img className='mx-auto w-[28%]' src={appError} alt="Error image" />

            {/* title  */}
            <div className='text-center mt-5'>
                <h1 className='text-[2.5rem] font-bold'>OPPS!! APP NOT FOUND</h1>
                <p className='opacity-70 mt-3'>The App you are requesting is not found on our system.  please try another apps</p>
            </div>

            {/* button  */}
            <div className='flex justify-center mt-8 items-center '>
                <button
                    onClick={() => navigate(-1)}
                    className='rounded-sm w-30 h-10 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white text-[1.1rem] font-semibold cursor-pointer btn transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#9F62F2]'>
                    Go Back!</button>
            </div>
        </section>
    );
};

export default AppError;