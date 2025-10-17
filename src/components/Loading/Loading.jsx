import React from 'react';
import logo from '../../assets/logo.png';

const Loading = () => {
    return (
        <section className="flex justify-center items-center h-screen bg-white">
            <h1 className="text-[3rem] font-extrabold tracking-[0.3rem] text-gray-800 flex items-center">
                L
                {/* 🌀 Image "O" er jaygay */}
                <span className="mx-2 inline-block">
                    <img
                        src={logo}
                        alt="O"
                        className="w-12 h-12 inline-block animate-spin"
                    />
                </span>
                DING
            </h1>
        </section>
    );
};

export default Loading;
