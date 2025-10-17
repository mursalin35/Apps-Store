import React, { Suspense, useEffect, useState } from 'react';

import App from '../../components/App/App';
import { useLoaderData } from 'react-router';
import SearchError from '../../components/SearchError/SearchError';


const Apps = () => {
    // Tab title change 
    useEffect(() => {
        document.title = "All Apps";
    }, []);

    // loader from json data 
    const data = useLoaderData();

    // Search method 
    const [search, setSearch] = useState('');
    const term = search.trim().toLocaleLowerCase();
    const searchApp = term ?
        data.filter(app => app.title.toLocaleLowerCase().includes(term)) : data;


    // Reset all app
    const handleReset = () => setSearch('');


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
                <h5 className='font-semibold text-[1.1rem]'>(<span>{searchApp.length}</span>) Apps Found</h5>

                {/* search ber  */}
                <label className="input">
                    <i class="fa-solid fa-magnifying-glass opacity-40 text-[1.1rem]"></i>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="search"
                        placeholder="Search Apps" />
                </label>

            </div>

            {/* All Apps or AppError  */}
            {
                searchApp.length === 0 ? (
                    <div>
                        <SearchError onReset={handleReset}></SearchError>
                    </div>
                ) : (
                    <div className='grid grid-cols-4 gap-5 gap-y-10 mt-10'>
                        {
                            searchApp.map(app => <App key={app.id} app={app}></App>)
                        }
                    </div>
                )
            }

        </section>

    );
};

export default Apps;