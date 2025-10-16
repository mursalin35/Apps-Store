{/* Card Section  */ }
<div className='p-3 bg-white mt-10'>
    {/* Image & title  */}
    <div className='rounded-md   h-60 overflow-hidden'>
        <img className='w-full h-full object-cover' src={card} alt="" />
    </div>
    <p className='mt-2 font-semibold'>Forest: Focus for Productivity</p>

    {/* download & rating item  */}
    <div className='flex justify-between mt-2'>
        {/* download item */}
        <div className='flex items-center gap-1.5 bg-[#F1F5E8]  px-1.5 py-.5 rounded-[2px]'>
            <img className='w-[11px] h-[11px]' src={download} alt="download icon" />
            <span className='text-[#00D390] text-sm font-semibold'>9M</span>
        </div>
        {/* star item */}
        <div className='flex items-center gap-1.5 bg-[#FFF0E1]  px-1.5 py-.5 rounded-[2px]'>
            <img className='w-3 h-3' src={star} alt="star icon" />
            <span className='text-[#FF8811] text-sm font-semibold'>5</span>
        </div>
    </div>
</div>