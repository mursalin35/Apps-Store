import React from 'react';
import App from '../App/App';
import { useLoaderData } from 'react-router';


const TrendingApps = () => {
    const apps = useLoaderData();
    const limitedApps = apps.slice(0, 8);

    return (
        // TrendingApp App container 
        <section className='mt-5 mx-10'>
            {/* title  */}
            <div className='text-center'>
                <h1 className='text-[2.5rem] font-bold'>Trending Apps</h1>
                <p className='opacity-70 mt-3'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            {/* Card container  */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-10 mt-10'>
                {
                    limitedApps.map(app => <App key={app.id} app={app}></App>)
                }
            </div>
        </section>
    );
};

export default TrendingApps;


