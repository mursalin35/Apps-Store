import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import download from '../../assets/icon-downloads.png'
import rank from '../../assets/icon-ratings.png'
import review from '../../assets/icon-review.png'
import Description from '../../components/Description/Description';
import Chart from '../../components/Chart/Chart';
import { addToStore, getInstallApp } from '../../utility/localStore';
import { toast } from 'react-toastify';
import AppError from '../../components/AppError/AppError';

const AppDetails = () => {
    const { id } = useParams(); // click card id number found
    const appId = parseInt(id); // string to number convert id

    const data = useLoaderData(); // data load
    const singleApp = data.find(app => app.id === appId) // app & appDetails id match

    // App not found, show app error 
    if (!singleApp) {
        return (
            <AppError></AppError>
        );
    }

    // Single app destructure
    const { image, title, description, size, reviews, ratingAvg, downloads, ratings } = singleApp;


    // 🟢 Check Install App
    const [isInstalled, setIsInstalled] = useState(false);

    // Reload page From check localStorage
    useEffect(() => {
        const installedApps = getInstallApp();
        setIsInstalled(installedApps.includes(appId));
    }, [appId]);

    // Install Method
    const handleInstall = () => {
        addToStore(appId);   // localStorage id add
        setIsInstalled(true); // UI disable 
        toast.success(`${title} App Installed!`);
    };


    return (
        // App Details 
        <section className='mt-14 mx-10'>

            {/* Installation  */}
            <div className='flex items-center gap-7 border-b-[1.5px] border-gray-300 pb-7'>

                {/* card image  */}
                <div className='rounded-md bg-[#e3e1e1] w-90 h-70 overflow-hidden'>
                    <img className='w-full h-full object-cover' src={image} alt="image" />
                </div>

                {/* card title  */}
                <div className='w-full'>
                    <h1 className='font-bold text-[2rem]'>{title}</h1>
                    <p className='text-sm font-semibold text-gray-500 pb-5 border-b-[1.5px] border-gray-300'>Developed by <span className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent '>M.S Mursalin</span></p>


                    {/* 3 terminal  */}
                    <div className='flex gap-20 mt-7'>
                        {/* Terminal-1 */}
                        <div>
                            <img className='w-7 h-7' src={download} alt="download icon" />
                            <p className='mt-2 text-sm opacity-70'>Downloads</p>
                            <h1 className='font-bold text-[2rem]'>{downloads}</h1>
                        </div>
                        {/* Terminal-2 */}
                        <div>
                            <img className='w-7 h-7' src={rank} alt="rank icon" />
                            <p className='mt-2 text-sm opacity-70'>Average Ratings</p>
                            <h1 className='font-bold text-[2rem]'>{ratingAvg}</h1>
                        </div>
                        {/* Terminal-3 */}
                        <div>
                            <img className='w-7 h-7' src={review} alt="review icon" />
                            <p className='mt-2 text-sm opacity-70'>Active Apps</p>
                            <h1 className='font-bold text-[2rem]'>{reviews}</h1>
                        </div>
                    </div>

                    {/* Button Install & Desible */}
                    <div className='mt-5'>
                        {isInstalled ? (
                            //  Installed hole disable button
                            <button
                                disabled
                                className='rounded-sm w-52 h-10 bg-gray-400 text-white font-semibold cursor-pointer'
                            >
                                Installed
                            </button>
                        ) : (
                            // Active hole Install now
                            <button
                                onClick={handleInstall}
                                className='rounded-sm w-52 h-10 bg-[#00D390] text-white font-semibold cursor-pointer hover:bg-[#05b67b] transition btn'
                            >
                                Install Now ({size} MB)
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Rating Chart  */}
            <div className='mt-8 border-b-[1.5px] border-gray-300 pb-7'>

                <Chart ratings={ratings}></Chart>
            </div>

            <Description description={description}></Description>
        </section>
    );
};

export default AppDetails; 