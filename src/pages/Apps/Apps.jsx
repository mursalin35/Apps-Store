import React, { Suspense } from 'react';

import App from '../../components/App/App';
import { useLoaderData } from 'react-router';


const Apps = () => {

    // loader from json data 
    const data = useLoaderData();


    return (
        // All card container 
        <section className='mt-10 mx-10'>
            {/* title  */}
            <div className='text-center'>
                <h1 className='text-[2.5rem] font-bold'>Our All Applications</h1>
                <p className='opacity-70 mt-3'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            {/* Total count & search ber  */}
            <div className='flex justify-between mt-10 -mb-4'>
                {/* left  */}
                <h5 className='font-semibold text-[1.1rem]'>(<span>{data.length}</span>) Apps Found</h5>

                {/* search ber  */}
                <input className='border-2 border-amber-500' placeholder='search ber' type="text" name="" id="" />
            </div>

            <Suspense fallback={<span>Loading...</span>}>
                <section className='grid grid-cols-4 gap-5 gap-y-10 mt-10'>  
                    {
                        data.map(app => <App key={app.id} app={app}></App>)
                    }
                </section>
            </Suspense>
 
        </section>

    );
};

export default Apps;