import React, { useEffect } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import TrendingApps from '../../components/TrendingApps/TrendingApps';
import { Link } from 'react-router';

const Home = () => {
    // Tab title change 
    useEffect(() => {
        document.title = "Apps Store";
    }, []);

    return (
        <div>
            <HeroSection></HeroSection>
            <TrendingApps></TrendingApps>

            {/* button  */}
            <Link to={'/apps'}>
                <div className='flex justify-center mt-12 items-center '>
                    <button className='rounded-sm w-30 h-10 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white text-[1.1rem] font-semibold cursor-pointer btn transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#9F62F2]'>Show all</button>
                </div>
            </Link>
        </div>
    );
};

export default Home;