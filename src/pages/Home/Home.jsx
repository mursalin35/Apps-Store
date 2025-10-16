import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import TrendingApps from '../../components/TrendingApps/TrendingApps';
import { Link } from 'react-router';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <TrendingApps></TrendingApps>
            
            {/* button  */}
            <Link to={'/apps'}>
                <div className='flex justify-center mt-12 items-center '>
                    <button className='rounded-sm w-30 h-10 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold cursor-pointer btn'>Show all</button>
                </div>
            </Link>
        </div>
    );
};

export default Home;