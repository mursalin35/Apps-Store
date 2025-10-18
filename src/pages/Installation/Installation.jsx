import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getInstallApp, removeFromStore } from '../../utility/localStore';
import InstallCard from '../../components/InstallCard/InstallCard';
import Loading from '../../components/Loading/Loading'; // 🌀 Import Loader

const Installation = () => {
    //  Tab title change 
    useEffect(() => {
        document.title = "Installed Apps";
    }, []);

    //  States
    const [install, setInstall] = useState([]); // Installed apps
    const [sort, setSort] = useState("none");   // Sort option
    const [isLoading, setIsLoading] = useState(true); // 🟢 Loader control
    const [fadeOut, setFadeOut] = useState(false);    // Fade effect

    const data = useLoaderData(); // Loader data

    //  Load installed apps from localStorage
    useEffect(() => {
        const storeAppData = getInstallApp(); // Get installed IDs
        const installedApp = data.filter(app => storeAppData.includes(app.id));
        setInstall(installedApp);
    }, [data]);

    // 🌀 Page loader timing
    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setIsLoading(false), 0); // fade duration
        }, 100); // loader visible time
        return () => clearTimeout(timer);
    }, []);

    //  Convert downloads (e.g. "640K", "1.2M") → numeric
    const parseDownloads = (value) => {
        if (typeof value === 'number') return value;
        if (typeof value !== 'string') return 0;

        const num = parseFloat(value);
        if (value.toUpperCase().includes("M")) return num * 1_000_000;
        if (value.toUpperCase().includes("K")) return num * 1_000;
        return num;
    };

    // Sort handler
    const handleSort = (type) => {
        setSort(type);
        if (type === "downloads-asc") {
            setInstall([...install].sort((a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)));
        }
        else if (type === "downloads-des") {
            setInstall([...install].sort((a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads)));
        }
    };

    // 🟢 Uninstall handler
    const handleUninstall = (id) => {
        removeFromStore(id); // Remove from localStorage
        setInstall(prev => prev.filter(app => app.id !== id)); // Remove from UI
    };

    // 🧭 Full-screen loader
    if (isLoading) {
        return (
            <div
                className={`fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'
                    }`}
            >
                <Loading />
            </div>
        );
    }

    // 🧩 Main Page Content
    return (
        <section className='mx-10 mt-10 animate-fadeIn'>
            {/* Page title */}
            <div className='text-center'>
                <h1 className='text-[2.5rem] font-bold'>Your Installed Apps</h1>
                <div className='flex justify-center'>
                    <p className='opacity-70 mt-3 w-60 md:w-full'>
                        Explore All Trending Apps on the brMarket developed by us
                    </p>
                </div>
            </div>

            {/* Found apps & sort control */}
            <div className='flex justify-between mt-10'>
                <h5 className='font-semibold text-[1.1rem]'>
                    (<span>{install.length}</span>) Apps Found
                </h5>

                {/* Sort dropdown */}
                <label className='form-control w-40 max-w-xs'>
                    <select
                        className='select select-bordered'
                        value={sort}
                        onChange={(e) => handleSort(e.target.value)}
                    >
                        <option className='opacity-60' value="none">Sort by Downloads</option>
                        <option value="downloads-asc">Low → High</option>
                        <option value="downloads-des">High → Low</option>
                    </select>
                </label>
            </div>

            {/* Installed app list */}
            <div className='mt-8'>
                {
                    install.length > 0 ? (
                        install.map(nApp => (
                            <InstallCard
                                key={nApp.id}
                                nApp={nApp}
                                onUninstall={handleUninstall}
                            />
                        ))
                    ) : (
                        <p className='text-center text-gray-500 mt-10'>
                            No apps installed yet.
                        </p>
                    )
                }
            </div>
        </section>
    );
};

export default Installation;
