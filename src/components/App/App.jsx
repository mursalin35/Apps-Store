import React from 'react';
import download from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'
import { Link } from 'react-router';

const App = ({ app }) => {
    // app destructure 
    const { id, image, title, downloads, ratingAvg } = app;

    return (
        // Card Section  
        // Link click card details 
        <Link to={`/apps/${id}`}>
            
            <div className='p-3 bg-white  rounded-sm shadow-lg relative z-0 transition-all duration-300 hover:scale-104'>
                {/* Image & title  */}
                <div className='rounded-md  bg-[#e3e1e1] hover:bg-[#ddd8d8] h-60 overflow-hidden transition-all duration-200'>
                    <img className='w-full h-full object-cover' src={image} alt="" />
                </div>
                <p className='mt-2 font-semibold'>{title}</p>

                {/* download & rating item  */}
                <div className='flex justify-between mt-3'>
                    {/* download item */}
                    <div className='flex items-center gap-1.5 bg-[#F1F5E8]  px-1.5 py-.5 rounded-[2px]'>
                        <img className='w-[11px] h-[11px]' src={download} alt="download icon" />
                        <span className='text-[#00D390] text-sm font-semibold'>{downloads}</span>
                    </div>
                    {/* star item */}
                    <div className='flex items-center gap-1.5 bg-[#FFF0E1]  px-1.5 py-.5 rounded-[2px]'>
                        <img className='w-3 h-3' src={star} alt="star icon" />
                        <span className='text-[#FF8811] text-sm font-semibold'>{ratingAvg}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default App;