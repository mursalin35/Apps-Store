import React, { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router';
import { getInstallApp } from '../../utility/localStore';
import InstallCard from '../../components/InstallCard/InstallCard';

const Installation = () => {
    const [install, setInstall] = useState([]);
    const [sort, setSort] = useState(""); //sort state

    const data = useLoaderData();

    useEffect(() => {
        const storeAppData = getInstallApp();
        const convertStoreApp = storeAppData.map(id => parseInt(id));

        const installedApp = data.filter(app => convertStoreApp.includes(app.id));
        setInstall(installedApp);
    }, [])


    // sort size 
    const handleSort = (type) => {
        setSort(type)
        if (type === "Low-High") {
            const lowSize = [...install].sort((a, b) => a.size - b.size)
            setInstall(lowSize)
        }
        if (type === "High-Low") {
            const highSize = [...install].sort((a, b) => b.size - a.size)
            setInstall(highSize)
        }
    }

    return (
        <section className='mx-10 mt-10'>
            {/* title  */}
            <div className='text-center'>
                <h1 className='text-[2.5rem] font-bold'>Your Installed Apps</h1>
                <p className='opacity-70 mt-3'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            {/* Total count & sorted by  */}
            <div className='flex justify-between mt-10 '>
                {/* left  */}
                <h5 className='font-semibold text-[1.1rem]'>(<span>{install.length}</span>) Apps Found</h5>

                {/* sort by  */}
                <details className="dropdown">
                    <summary className="btn m-1">Sort By Size {sort ? sort : ""}</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => handleSort('Low-High')}><a>Low-High</a></li>
                        <li onClick={() => handleSort('High-Low')}><a>High-Low</a></li>
                    </ul>
                </details>
            </div>

            {
                install.map(nApp => <InstallCard key={nApp.id} nApp={nApp}></InstallCard>)
            }


        </section>
    );
};

export default Installation;