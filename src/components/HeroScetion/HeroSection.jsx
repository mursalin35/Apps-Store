import React from 'react';
import Hero from '../../assets/hero.png'

const HeroSection = () => {
    return (
        // Hero section 
        <section className='text-center my-10'>
            {/* banner section  */}
            <div>
                <h1 className='text-[3.5rem] font-bold text-[#312f00] leading-17'>We Build <br />
                    <span className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-extrabold'>Productive</span> Apps
                </h1>
                <p className='mt-5 opacity-60'>At Apps Store, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                {/* App store link  */}
                <div className='flex justify-center mt-8 gap-5'>
                    {/* fist app  */}
                    <a className='btn font-bold text-[1.1rem] h-12' href="https://play.google.com/store/apps" target='_blank'>
                        {/* app image  */}
                        <img className='w-8' src="https://img.icons8.com/?size=100&id=rZwnRdJyYqRi&format=png&color=000000" alt="play store" />
                        {/* app name  */}
                        <span>Google Play</span>
                    </a>
                    {/* second app  */}
                    <a className='btn font-bold text-[1.1rem] h-12' href="https://www.apple.com/app-store/" target='_blank'>
                        {/* app image  */}
                        <img className='w-9' src="https://img.icons8.com/?size=100&id=4PbFeZOKAc61&format=png&color=000000" alt="app store" />
                        {/* app name  */}
                        <span>App Store</span>
                    </a>
                </div>

                {/* Hero image  */}
                <img className='mx-auto w-[65%] mt-8' src={Hero} alt="hero image" />
            </div>

            {/* OverView terminal */}
            <div className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white py-15'>
                <h2 className='text-[2.5rem] font-bold'>Trusted By Millions, Built For You</h2>
                
                {/* 3 terminal  */}
                <div className='flex justify-center gap-40 mt-7'>
                    {/* Terminal-1 */}
                    <div>
                        <p className='text-sm opacity-70'>Total Downloads</p>
                        <h1 className='text-[3rem] font-bold'>39.6M</h1>
                        <p className='text-sm opacity-70'>25% more than last month</p>
                    </div>
                    {/* Terminal-2 */}
                    <div>
                        <p className='text-sm opacity-70'>Total Reviews</p>
                        <h1 className='text-[3rem] font-bold'>907K</h1>
                        <p className='text-sm opacity-70'>42% more than last month</p>
                    </div>
                    {/* Terminal-3 */}
                    <div>
                        <p className='text-sm opacity-70'>Active Apps</p>
                        <h1 className='text-[3rem] font-bold'>137+</h1>
                        <p className='text-sm opacity-70'>41 more will Launch</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;