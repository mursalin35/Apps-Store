import React from 'react';
import logo from '../../assets/logo.png';

const Loading = () => {
    return (
        <section className="flex justify-center items-center h-screen bg-white">
            <h1 className="text-[3rem] font-[Noto-Serif] opacity-50 font-extrabold tracking-[1rem] flex items-center">
                L
                {/* loading image spin */}
                <span className="mx-2 inline-block">
                    <img
                        src={logo}
                        alt="O"
                        className="w-12 h-12 inline-block animate-spin"
                    />
                </span>
                ADING
            </h1>
        </section>
    );
};

export default Loading;
