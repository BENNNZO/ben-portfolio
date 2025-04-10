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
                <div className="px-4 md:px-8 lg:px-0">
                    {/* BACK BUTTON */}
                    <button onClick={() => router.push("/")} className="fixed top-4 left-4 hover:pl-8 duration-200 ease-out bg-zinc-900/70 text-purple-200 border z-10 border-purple-400/50 backdrop-blur rounded-full px-3 py-1 flex flex-row gap-2 items-center relative group">
                        Back Home
                        <Image src="/svg/open.svg" width={20} height={20} alt="open link" className="absolute -rotate-90 opacity-0 group-hover:opacity-100 duration-200 ease-out top-1/2 -translate-y-1/2 left-2 invert rounded-full aspect-square h-full" />
                    </button>
                </div>
            </div>
        )
    }
}