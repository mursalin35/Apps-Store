import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import download from '../../assets/icon-downloads.png';
import rank from '../../assets/icon-ratings.png';
import review from '../../assets/icon-review.png';
import Description from '../../components/Description/Description';
import Chart from '../../components/Chart/Chart';
import { addToStore, getInstallApp } from '../../utility/localStore';
import { toast } from 'react-toastify';
import AppError from '../../components/AppError/AppError';
import Loading from '../../components/Loading/Loading'; 

const AppDetails = () => {
    const { id } = useParams();
    const appId = parseInt(id);

    const data = useLoaderData();
    const singleApp = data.find(app => app.id === appId);

    // App not found error
    if (!singleApp) {
        return <AppError />;
    }

    const { image, title, description, size, companyName, reviews, ratingAvg, downloads, ratings } = singleApp;

    // Dynamic Page Title
    useEffect(() => {
        document.title = `Apps | ${title}`;
    }, [title]);

    // Check Install App
    const [isInstalled, setIsInstalled] = useState(false);

    // Reload page From check localStorage
    useEffect(() => {
        const installedApps = getInstallApp();
        setIsInstalled(installedApps.includes(appId));
    }, [appId]);

    // Install handler
    const handleInstall = () => {
        addToStore(appId);   // localStorage id add
        setIsInstalled(true); // UI disable 
        toast.success(`${title} App Installed!`);
    };

    // Loader state
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setIsLoading(false), 0);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    //  Show loader full screen
    if (isLoading) {
        return (
            <div
                className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-white z-50 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'
                    }`}
            >
                <Loading />
            </div>
        );
    }

    return (
        // App Details 
        <section className='mt-10 md:mt-14 mx-5 md:mx-10'>
            {/* Installation Section */}
            <div className='flex flex-col lg:flex-row items-center lg:items-start gap-7 border-b border-gray-300 pb-7'>

                {/* App Image */}
                <div className='rounded-md bg-[#e3e1e1] w-full sm:w-80 md:w-96 h-64 sm:h-72 overflow-hidden'>
                    <img className='w-full h-full object-cover' src={image} alt={title} />
                </div>

                {/* App Info */}
                <div className='w-full'>
                    <h1 className='font-bold text-2xl sm:text-[2rem]'>{title}</h1>
                    <p className='text-sm font-semibold text-gray-500 pb-5 border-b border-gray-300'>
                        Developed by{" "}
                        <span className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>
                            {companyName}.io
                        </span>
                    </p>

                    {/* Stats Section */}
                    <div className='flex flex-wrap justify-between sm:justify-start gap-20 mt-7'>
                        <div>
                            <img className='w-7 h-7' src={download} alt='download icon' />
                            <p className='mt-2 text-sm opacity-70'>Downloads</p>
                            <h1 className='font-bold text-2xl'>{downloads}</h1>
                        </div>
                        <div>
                            <img className='w-7 h-7' src={rank} alt='rank icon' />
                            <p className='mt-2 text-sm opacity-70'>Average Ratings</p>
                            <h1 className='font-bold text-2xl'>{ratingAvg}</h1>
                        </div>
                        <div>
                            <img className='w-7 h-7' src={review} alt='review icon' />
                            <p className='mt-2 text-sm opacity-70'>Active Apps</p>
                            <h1 className='font-bold text-2xl'>{reviews}</h1>
                        </div>
                    </div>

                    {/* Button */}
                    <div className='mt-5'>
                        {isInstalled ? (
                            <button
                                disabled
                                className='rounded-sm w-52 h-10 bg-gray-400 text-white font-semibold cursor-pointer'
                            >
                                Installed
                            </button>
                        ) : (
                            <button
                                onClick={handleInstall}
                                className='rounded-sm w-52 h-10 bg-[#00D390] text-white font-semibold cursor-pointer hover:bg-[#05b67b] transition'
                            >
                                Install Now ({size} MB)
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Chart Section */}
            <div className='mt-8 border-b border-gray-300 pb-7'>
                <Chart ratings={ratings}></Chart>
            </div>

            {/* Description Section */}
            <Description description={description}></Description>
        </section>
    );
};

export default AppDetails;
