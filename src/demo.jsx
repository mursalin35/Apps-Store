import React, { useState, useEffect } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import TrendingApps from '../../components/TrendingApps/TrendingApps';
import { Link } from 'react-router';
import Loading from '../../components/Loading/Loading'; // তোমার Loading component

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  // 🟢 Tab title change + Loading simulation
  useEffect(() => {
    document.title = "Apps Store";

    // simulate page load delay
    const timer = setTimeout(() => {
      setIsLoading(false); // 2 seconds পরে main content দেখাবে
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  // 🟢 Loading দেখাবে page load এর সময়
  if (isLoading) {
    return <Loading />;
  }

  // 🟢 Main Home content
  return (
    <div>
      <HeroSection />
      <TrendingApps />

      {/* button */}
      <Link to={'/apps'}>
        <div className='flex justify-center mt-12 items-center'>
          <button className='rounded-sm w-30 h-10 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white text-[1.1rem] font-semibold cursor-pointer btn transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#9F62F2]'>
            Show all
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Home;
