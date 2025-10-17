import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getInstallApp, removeFromStore } from '../../utility/localStore';
import InstallCard from '../../components/InstallCard/InstallCard';

const Installation = () => {
    // Tab title change 
    useEffect(() => {
        document.title = "Apps Installation";
    }, []);

    const [install, setInstall] = useState([]); // Install app -> state
    const [sort, setSort] = useState("none"); // sort by size

    const data = useLoaderData();  // data load from loader:

    // localStorage from get id
    useEffect(() => {
        const storeAppData = getInstallApp();
        // all data id & localStorage id matching 
        const installedApp = data.filter(app => storeAppData.includes(app.id));
        setInstall(installedApp); // UI set matching id
    }, [data]);

    // sorted by app 
    const handleSort = (type) => {
        setSort(type); // running UI sort watch

        if (type === "size-asc") {
            // sorted by ascending 
            setInstall([...install].sort((a, b) => a.size - b.size));
        }
        else if (type === "size-des") {
            // sorted by descending
            setInstall([...install].sort((a, b) => b.size - a.size));
        }
    };

    // Uninstall handel
    const handleUninstall = (id) => {
        removeFromStore(id); // remove from localStorage
        setInstall(prev => prev.filter(app => app.id !== id)); // remove from UI
    };

    return (
        <section className='mx-10 mt-10'>
            {/* Page title */}
            <div className='text-center'>
                <h1 className='text-[2.5rem] font-bold'>Your Installed Apps</h1>
                <p className='opacity-70 mt-3'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            {/* Found apps & sort control */}
            <div className='flex justify-between mt-10'>
                <h5 className='font-semibold text-[1.1rem]'>(<span>{install.length}</span>) Apps Found</h5>

                {/* Sort dropdown menu */}
                <label className='form-control w-32 max-w-xs'>
                    <select
                        className='select select-bordered'
                        value={sort}
                        onChange={e => setSort(e.target.value)}>
                        <option className='opacity-60' value="none">Sort By Size</option>
                        <option onClick={() => handleSort('size-asc')} value="size-asc">Low-High</option>
                        <option onClick={() => handleSort('size-des')} value="size-des">High-Low</option>
                    </select>
                </label>
            </div>

            {/* InstallCard component by map */}
            <div>
                {
                    install.map(nApp =>
                        <InstallCard
                            key={nApp.id}
                            nApp={nApp}
                            onUninstall={handleUninstall}
                        />
                    )
                }
            </div>
        </section>
    );
};

export default Installation;
