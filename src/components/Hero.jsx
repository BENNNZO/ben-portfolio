"use client"

import Image from "next/image"

export default function Hero() {

    return (
        <section className="h-screen flex flex-row justify-around items-center overflow-hidden relative hero-box-shadow">
            {/* BUBBLES */}
            <div className="bg-purple-400 absolute bottom-10 left-1/2 -translate-x-1/2 w-[50%] aspect-[2/1] rounded-t-full" style={{ filter: 'blur(300px)' }}></div>
            <div className="bg-fuchsia-400 absolute bottom-10 left-1/2 -translate-x-1/2 w-full h-52 rounded-t-full blur-[300px]"></div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-52 bg-gradient-to-b from-transparent to-black blur-xl"></div>
            {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-transparent to-black"></div> */}
            
            {/* CONTENT */}
            <div className="relative flex flex-col gap-2">
                <p className="font-bold text-6xl">HEY, I'M <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">BEN</span>!</p>
                {/* <p className="font-semibold text-3xl opacity-50">A MAN OF <span className="underline">MANY</span> TRADES</p> */}
                <div className="w-24 h-8 bg-purple-400 blur-xl absolute top-3 right-8 opacity-50"></div>
            </div>

            <div className="relative w-96 h-96 rounded-full">
                <div className="bg-purple-700 absolute-center w-44 h-44 blur-3xl opacity-50"></div>
                <Image src="/img/profile.png" alt="Profile Picture" width={500} height={500} className="w-full h-full aspect-square object-cover scale-110 bottom-2 left-2 absolute drop-shadow-lg rounded-full blur-lg opacity-70" />
                <Image src="/img/profile.png" alt="Profile Picture" width={500} height={500} className="w-full h-full aspect-square object-cover scale-110 bottom-2 left-2 relative drop-shadow-lg rounded-full" />
            </div>
        </section>
    )
}