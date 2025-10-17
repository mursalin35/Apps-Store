import React from 'react';
import appError from '../../assets/App-Error.png'


const SearchError = ({ onReset }) => {
    return (
        // AppError container
        <section className='my-10'>
            {/* Error image  */}
            <img className='mx-auto w-[28%]' src={appError} alt="Error image" />

            {/* title  */}
            <div className='text-center mt-5'>
                <h1 className='text-[2.5rem] font-bold'>APP NOT FOUND</h1>
                <p className='opacity-70 mt-3'>The app you searched for is not here.  please try another apps</p>
            </div>

            {/* button  */}
            <div className='flex justify-center mt-8 items-center '>
                <button
                    onClick={onReset}
                    className='rounded-sm w-40 h-10 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white text-[1.1rem] font-semibold cursor-pointer btn transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#9F62F2]'>
                    Show All Apps</button>
            </div>
        </section>
    );
};

export default SearchError;