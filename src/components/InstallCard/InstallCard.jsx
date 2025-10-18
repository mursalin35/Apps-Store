import React from 'react';
import down from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import { removeFromStore } from '../../utility/localStore';
import { toast } from 'react-toastify';
const InstallCard = ({ nApp, onUninstall }) => {
    const { id, image, size, title, downloads, ratingAvg } = nApp;

    // Uninstall handler
    const handleUninstall = () => {
        removeFromStore(id); // localStorage remove
        onUninstall(id); // Installation component state update

        // toast alert App Uninstalled`);
        toast.error(`${title} App Uninstalled!`, {position: "top-center",});
    }


    return (
        // Install card container 
        <div className='bg-white p-2 rounded-xs flex justify-between items-center mt-4'>
            <div className='flex gap-4 items-center'>
                {/* card image  */}
                <div className=' w-16 h-16 bg-gray-100 rounded-sm overflow-hidden'>
                    <img className='w-full h-full object-cover ' src={image} />
                </div>
                {/* title & card information */}
                <div>
                    <h1 className='text-lg font-semibold'>{title}</h1>
                    <div className='flex gap-5 items-center mt-1'>
                        {/* fist item  */}
                        <div className='flex items-center gap-1 text-sm font-semibold'>
                            <img className='w-3.5 h-3.5' src={down} />
                            <p className='text-[#00D390]'>{downloads}</p>
                        </div>
                        {/* second item  */}
                        <div className='flex items-center gap-1 text-sm font-semibold'>
                            <img className='w-3.5 h-3.5' src={rating} />
                            <p className='text-[#FF8811]'>{ratingAvg}</p>
                        </div>
                        {/* last item  */}
                        <p className='text-sm font-semibold opacity-50'>{size} MB</p>
                    </div>

                </div>
            </div>

            {/* Button  */}
            <button onClick={handleUninstall} className='btn bg-[#00D390] hover:bg-[#05b67b] text-white px-7'>
                Uninstall
            </button>
        </div>
    );
};

export default InstallCard;