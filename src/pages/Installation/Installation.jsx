import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getInstallApp, removeFromStore } from '../../utility/localStore';
import InstallCard from '../../components/InstallCard/InstallCard';

const Installation = () => {
    // 🔹 install: ইনস্টল হওয়া অ্যাপগুলোর state রাখবে
    // 🔹 sort: বর্তমান sort টাইপ রাখবে (Low-High / High-Low)
    const [install, setInstall] = useState([]);
    const [sort, setSort] = useState("none");

    // 🔹 data: loader থেকে সব অ্যাপ ডাটা লোড হবে
    const data = useLoaderData();

    // 🔹 useEffect:
    // localStorage থেকে ইনস্টল হওয়া আইডিগুলো বের করবে,
    // তারপর data থেকে সেই অ্যাপগুলো ফিল্টার করে install state এ সেট করবে।
    useEffect(() => {
        const storeAppData = getInstallApp(); // localStorage থেকে অ্যাপ আইডি গুলো নেয়া
        const installedApp = data.filter(app => storeAppData.includes(app.id)); // matching apps বের করা
        setInstall(installedApp); // UI তে সেট করা
    }, [data]);

    // 🔹 handleSort:
    // ব্যবহারকারী যদি sort বেছে নেয় (Low-High বা High-Low),
    // তাহলে install অ্যারের size অনুযায়ী sort করে সেট করা হয়।
    const handleSort = (type) => {
        setSort(type); // UI তে কোন sort চালু আছে সেটা দেখানোর জন্য

        if (type === "size-asc") {
            // ছোট থেকে বড় সাইজ অনুযায়ী সাজানো
            setInstall([...install].sort((a, b) => a.size - b.size));
        }
        else if (type === "size-des") {
            // বড় থেকে ছোট সাইজ অনুযায়ী সাজানো
            setInstall([...install].sort((a, b) => b.size - a.size));
        }
    };

    // 🔹 handleUninstall:
    // যখন কোনো অ্যাপের Uninstall বোতাম চাপা হবে —
    // ১️⃣ localStorage থেকে সেই অ্যাপ remove হবে,
    // ২️⃣ install state থেকেও মুছে ফেলা হবে।
    const handleUninstall = (id) => {
        removeFromStore(id); // localStorage থেকে remove করা
        setInstall(prev => prev.filter(app => app.id !== id)); // UI থেকে remove করা
    };

    return (
        <section className='mx-10 mt-10'>
            {/* 🔹 পেজের শিরোনাম ও বর্ণনা */}
            <div className='text-center'>
                <h1 className='text-[2.5rem] font-bold'>Your Installed Apps</h1>
                <p className='opacity-70 mt-3'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            {/* 🔹 মোট কতগুলো অ্যাপ ইনস্টল করা আছে ও sort control */}
            <div className='flex justify-between mt-10'>
                <h5 className='font-semibold text-[1.1rem]'>(<span>{install.length}</span>) Apps Found</h5>

                {/* 🔹 Sort dropdown menu */}
                <label className='form-control w-full max-w-xs'>
                    <select
                        className='select select-bordered'
                        value={sort}
                        onChange={e => setSort(e.target.value)}>
                        <option value="none">Sort By Size</option>
                        <option value="size-asc">Low-High</option>
                        <option value="size-des">High-Low</option>
                    </select>
                </label>

                {/* <details className="dropdown">
                    <summary className="btn m-1">Sort By Size {sort ? sort : ""}</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => handleSort('Low-High')}><a>Low-High</a></li>
                        <li onClick={() => handleSort('High-Low')}><a>High-Low</a></li>
                    </ul>
                </details> */}
            </div>

            {/* 🔹 InstallCard component map করে দেখানো */}
            <div>
                {
                    install.map(nApp =>
                        <InstallCard
                            key={nApp.id}             // unique key
                            nApp={nApp}               // app data পাঠানো
                            onUninstall={handleUninstall} // uninstall handler পাঠানো
                        />
                    )
                }
            </div>
        </section>
    );
};

export default Installation;
