"use client"

import Image from "next/image"
import { useEffect, useMemo, useState } from "react";
import { loadAll } from "@tsparticles/all";
import Particles, { initParticlesEngine } from "@tsparticles/react"

export default function Hero() {

    return (
        <section className="h-screen flex flex-row justify-around items-center">
            <div className="relative flex flex-col gap-2">
                <p className="font-bold text-6xl">HEY, I'M <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">BEN</span>!</p>
                {/* <p className="font-semibold text-3xl opacity-50">MASTER OF <span className="underline">ALLLL</span> TRADES</p> */}
                <div className="w-24 h-8 bg-purple-400 blur-xl absolute top-3 right-8 opacity-50"></div>
            </div>
            <div className="relative w-96 h-96 rounded-full">
                <div className="bg-purple-700 absolute-center w-44 h-44 blur-3xl opacity-50"></div>
                <Image src="/img/profile.png" alt="Profile Picture" width={500} height={500} className="w-full h-full aspect-square object-cover scale-110 bottom-2 left-2 absolute drop-shadow-lg rounded-full blur-lg opacity-70" />
                <Image src="/img/profile.png" alt="Profile Picture" width={500} height={500} className="w-full h-full aspect-square object-cover scale-110 bottom-2 left-2 relative drop-shadow-lg rounded-full" />
                {/* <div className="bg-red-500 absolute-center w-2 h-2"></div> */}
            </div>
        </section>
    )
}

// bg-gradient-to-t from-purple-500 to-purple-800 to-100%