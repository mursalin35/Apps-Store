import React, { useEffect, useState } from 'react';
import App from '../../components/App/App';
import { useLoaderData } from 'react-router';
import SearchError from '../../components/SearchError/SearchError';
import Loading from '../../components/Loading/Loading'; // Loader component
import SerachLoader from '../../components/SerachLoader/SerachLoader';

const Apps = () => {
    // Tab title change
    useEffect(() => {
        document.title = "All Apps";
    }, []);

    // Loader data from JSON
    const data = useLoaderData();

    // Search states
    const [search, setSearch] = useState('');
    const [searchApp, setSearchApp] = useState(data);
    const [isSearching, setIsSearching] = useState(false); // loader for search

    // Reset search
    const handleReset = () => {
        setSearch('');
        setSearchApp(data); // 🔥 reset filtered app list
    };

    // Full screen loader state
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    // Page loader fade effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setIsLoading(false), 0);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    // Handle search input with loader
    const handleSearch = (e) => {
        const term = e.target.value.trim().toLowerCase();
        setSearch(e.target.value);
        setIsSearching(true);

        // simulate small delay for loader
        setTimeout(() => {
            if (term) {
                setSearchApp(data.filter(app => app.title.toLowerCase().includes(term)));
            } else {
                setSearchApp(data);
            }
            setIsSearching(false);
        }, 300);
    };

    // Full screen page loader
    if (isLoading) {
        return (
            <div className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-white z-50 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
                <Loading />
            </div>
        );
    }

    // Main content
    return (
        <section className='mt-10 mx-10'>
            {/* Title */}
            <div className='text-center'>
                <h1 className='text-[2.5rem] font-bold'>Our All Applications</h1>
                <p className='opacity-70 mt-3'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            {/* Total count & search bar */}
            <div className='flex justify-between mt-10 -mb-4'>
                <h5 className='font-semibold text-[1.1rem]'>({searchApp.length}) Apps Found</h5>

                <label className="input w-40 sm:w-60 md:w-70 lg:w-78">
                    <i className="fa-solid fa-magnifying-glass opacity-40 text-[1.1rem]"></i>
                    <input
                        value={search}
                        onChange={handleSearch}
                        type="search"
                        placeholder="Search Apps"
                    />
                </label>
            </div>

            {/* Apps / Search Loader / Search Error */}
            <div className='mt-10'>
                {isSearching ? (
                    // 🔄 Loader during search
                    <div className='flex justify-center items-center h-60'>
                        <SerachLoader />
                    </div>
                ) : searchApp.length === 0 ? (
                    // ❌ Search Error (centered)
                    <div className='flex justify-center items-center h-60 my-20'>
                        <SearchError onReset={handleReset} />
                    </div>
                ) : (
                    // ✅ All app cards
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-10'>
                        {searchApp.map(app => <App key={app.id} app={app} />)}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Apps;
