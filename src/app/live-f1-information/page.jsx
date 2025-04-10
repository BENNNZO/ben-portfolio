"use client"

import { useMemo, useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function Home() {
    const router = useRouter()

    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(
        () => ({
            fpsLimit: 240,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "bubble",
                        parallax: {
                            enable: true,
                            force: 60,
                            smooth: 10,
                        }
                    }
                },
                modes: {
                    repulse: {
                        distance: 500,
                        duration: 4,
                        factor: 1,
                        speed: 1,
                        maxSpeed: 5,
                        easing: "ease-out-quad",
                    },
                },
            },
            particles: {
                color: {
                    value: "#cfbafc",
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "out",
                    },
                    random: false,
                    speed: 0.5,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 50,
                },
                opacity: {
                    value: { min: 0.01, max: 0.1 },
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 2, max: 4 },
                    random: true,
                },
            },
            detectRetina: true,
        }),
        [],
    );

    if (init) {
        return (
            <div className={`bg-black text-white min-h-screen ${jetBrainsMono.className}`}>
                <Particles options={options} />
                <div className="">
                    {/* BACK BUTTON */}
                    <button onClick={() => router.push("/")} className="fixed top-4 left-4 hover:pl-8 duration-200 ease-out bg-zinc-900/50 text-yellow-200 border z-10 border-yellow-400/50 backdrop-blur-sm rounded-full px-3 py-1 group">
                        Back Home
                        <Image src="/svg/open.svg" width={20} height={20} alt="open link" className="absolute -rotate-90 opacity-0 group-hover:opacity-100 duration-200 ease-out top-1/2 -translate-y-1/2 left-2 invert rounded-full aspect-square h-full" />
                    </button>

                    {/* HERO */}
                    <div className="flex items-center justify-center gap-4 py-52 relative">
                        <Image src="/img/projects/live-f1.png" width={1920} height={1080} alt="live f1 image" className="absolute top-0 left-0 w-full h-full object-cover opacity-30 object-top" />
                        <Image src="/svg/live-f1-logo.svg" width={100} height={100} alt="Live F1 Logo" className="border-2 border-white/20 z-10 rounded-full" style={{ filter: "drop-shadow(0 5px 5px black)" }} />
                        <h1 className="tracking-wider font-extrabold text-8xl z-10" style={{ filter: "drop-shadow(0 5px 5px black)" }}>live-f1.com</h1>
                    </div>
                    <div className="w-full h-px mx-auto bg-gradient-to-r from-transparent via-white to-transparent"></div>
                    <section className="max-w-4xl mt-12 flex-col mx-auto">
                        <h2 className="text-4xl font-bold">FEATURES</h2>
                    </section>
                    <section className="max-w-4xl mt-12 flex-col mx-auto">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2 border border-white/20 rounded-lg px-4 py-3 bg-zinc-950/30">
                                <h2 className="text-xl font-bold">What Is live-f1.com?</h2>
                                <p>This is a real-time formula 1 telemetry and data dashboard. Within the dashboard you will find <Strong text="track positions" />, <Strong text="lap times" />, <Strong text="sector times" />, <Strong text="intervals" />, <Strong text="weather" />, <Strong text="race control messages" />, and even <Strong text="live team radios" />. There is also a real-time circuit with drivers that move on the track in real-time!</p>
                            </div>
                            <div className="flex flex-col gap-2 border border-white/20 rounded-lg px-4 py-3 bg-zinc-950/30">
                                <h2 className="text-xl font-bold">How Was It Built?</h2>
                                <p>I built this project from scratch starting with just `npx create-next-app@latest`. The main technologies I used are: <Strong text="NodeJS" />, <Strong text="NextJS" />, <Strong text="Tailwind" />, <Strong text="Zustand" />, and <Strong text="Websockets" />. I had to build a custom websocket server so that I could push the f1 data to the client as the f1 websocket does not allow client side connections.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

function Strong({ text }) {
    return <span className="font-bold text-amber-400">{text}</span>
}