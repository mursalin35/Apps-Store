import React, { useEffect, useState } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import TrendingApps from '../../components/TrendingApps/TrendingApps';
import { Link } from 'react-router';
import Loading from '../../components/Loading/Loading';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false); // fade/full loader effect control

    // Tab title change & loader timing
    useEffect(() => {
        document.title = "Apps Store";

        // Loader show then fade out/full screen
        const timer = setTimeout(() => {
            setFadeOut(true); // Start fade out
            setTimeout(() => setIsLoading(false), 0); // Remove loader after fade
        }, 100); // loading duration 

        return () => clearTimeout(timer);
    }, []);

    // Full-screen Loader (with fade transition)
    if (isLoading) {
        return (
            <div
                className={`fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-500 ${
                    fadeOut ? 'opacity-0' : 'opacity-100'
                }`}
            >
                <Loading />
            </div>
        );
    }

    // Main Page Content
    return (
        <div className="animate-fadeIn">
            <HeroSection />
            <TrendingApps />

            {/* Show All Button */}
            <Link to="/apps">
                <div className="flex justify-center mt-12 items-center">
                    <button className="rounded-sm w-30 h-10 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white text-[1.1rem] font-semibold cursor-pointer btn transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#9F62F2]">
                        Show all
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default Home;
