import React from 'react';
import card from '../../assets/demo-app (1).webp'
import download from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'


const TrendingApps = () => {
    return (
        // Card container 
        <section className='mt-5'>
            {/* title  */}
            <div className='text-center'>
                <h1 className='text-[2.5rem] font-bold'>Trending Apps</h1>
                <p className='opacity-70 mt-3'>Explore All Trending Apps on the Market developed by us</p>
            </div>


            {/* Card Section  */}
            <div className='p-3 bg-white mt-10'>
                {/* Image & title  */}
                <div className='rounded-md   h-60 overflow-hidden'>
                    <img className='w-full h-full object-cover' src={card} alt="" />
                </div>
                <p className='mt-2 font-semibold'>Forest: Focus for Productivity</p>

                {/* download & rating item  */}
                <div className='flex justify-between mt-2'>
                    {/* download item */}
                    <div className='flex items-center gap-1.5 bg-[#F1F5E8]  px-1.5 py-.5 rounded-[2px]'>
                        <img className='w-[11px] h-[11px]' src={download} alt="download icon" />
                        <span className='text-[#00D390] text-sm font-semibold'>9M</span>
                    </div>
                    {/* star item */}
                    <div className='flex items-center gap-1.5 bg-[#FFF0E1]  px-1.5 py-.5 rounded-[2px]'>
                        <img className='w-3 h-3' src={star} alt="star icon" />
                        <span className='text-[#FF8811] text-sm font-semibold'>5</span>
                    </div>
                </div>
            </div>

            {/* button  */}
            <div className='flex justify-center mt-12 items-center '>
            <button className='rounded-sm w-30 h-10 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold cursor-pointer btn'>Show all</button>
            </div>
        </section>
    );
};

export default TrendingApps;


