"use client"

import { useMemo, useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { JetBrains_Mono } from "next/font/google";

import FadeIn from "@/components/FadeIn";

const jetBrainsMono = JetBrains_Mono({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    subsets: ["latin"]
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
                    <button onClick={() => router.push("/")} className="group top-4 left-4 z-20 fixed bg-zinc-900/50 backdrop-blur-sm px-3 py-1 hover:pl-8 border border-yellow-400/50 rounded-full text-yellow-300 duration-200 ease-out">
                        Back Home
                        <Image src="/svg/open.svg" width={20} height={20} alt="open link" className="top-1/2 left-2 absolute opacity-0 group-hover:opacity-100 invert rounded-full h-full aspect-square -rotate-[135deg] -translate-y-1/2 duration-200 ease-out" />
                    </button>

                    {/* HERO */}
                    <div className="relative flex md:flex-row flex-col justify-center items-center gap-4 py-52">
                        <Image src="/img/Projects/live-f1.png" width={1920} height={1080} alt="live f1 image" className="top-0 left-0 absolute opacity-30 w-full h-full object-cover object-top" />
                        <Image src="/svg/live-f1-logo.svg" width={100} height={100} alt="Live F1 Logo" className="z-10 border-2 border-white/20 rounded-full" style={{ filter: "drop-shadow(0 5px 5px black)" }} />
                        <a className="group z-10 font-extrabold tracking-wider cursor-pointer" href="https://live-f1.com" target="_blank" style={{ filter: "drop-shadow(0 5px 5px black)" }}>
                            <h1 className="text-4xl sm:text-6xl md:text-8xl text-center">live-f1.com</h1>
                            <span className="bottom-0 left-0 absolute bg-white w-0 group-hover:w-full h-2 duration-300 ease-out"></span>
                        </a>
                    </div>
                    <div className="bg-gradient-to-r from-transparent via-white to-transparent mx-auto w-full h-px"></div>
                    <section className="flex flex-col gap-4 mx-auto px-4 py-8 max-w-4xl">
                        <Container>
                            <div className="flex flex-col gap-2">
                                <FadeIn>
                                    <h2 className="font-bold text-2xl">Links</h2>
                                </FadeIn>
                                <div className="flex flex-row flex-wrap gap-2">
                                    <FadeIn delay={0.1}>
                                        <Link link="https://github.com/BENNNZO/f1-dashboard" text="Github (Source Code)" />
                                    </FadeIn>
                                    <FadeIn delay={0.2}>
                                        <Link link="https://live-f1.com" text="https://live-f1.com" />
                                    </FadeIn>
                                </div>
                            </div>
                        </Container>
                        <Container>
                            <div className="flex flex-col gap-2">
                                <FadeIn>
                                    <h2 className="font-bold text-2xl">Technologies Used</h2>
                                </FadeIn>
                                <div className="flex flex-row flex-wrap gap-2">
                                    {["HTML", "CSS", "JS", "React", "NodeJS", "NextJS", "Tailwind", "Zustand", "Web Sockets"].map((text, index) => (
                                        <FadeIn key={index} delay={(0.1 * index) + 0.1}>
                                            <Tech text={text} />
                                        </FadeIn>
                                    ))}
                                </div>
                            </div>
                        </Container>
                        <Container>
                            <div className="flex flex-col gap-2">
                                <FadeIn>
                                    <h2 className="font-bold text-2xl">Features</h2>
                                </FadeIn>
                                <div className="flex flex-row flex-wrap gap-2">
                                    {["Custom Websocket Server", "Live F1 Telemetry and Data", "Skeleton Loading System", "Responsive Design", "Custom Development Tool: Race Simulator"].map((text, index) => (
                                        <FadeIn key={index} delay={(0.1 * index) + 0.1}>
                                            <Tech text={text} />
                                        </FadeIn>
                                    ))}
                                </div>
                            </div>
                        </Container>
                        <Container>
                            <FadeIn>
                                <h2 className="font-bold text-2xl">What Is live-f1.com?</h2>
                            </FadeIn>
                            <FadeIn delay={0.1}>
                                <p>This is a real-time formula 1 telemetry and data dashboard. Within the dashboard you will find <Strong text="track positions" />, <Strong text="lap times" />, <Strong text="sector times" />, <Strong text="intervals" />, <Strong text="weather" />, <Strong text="race control messages" />, and even <Strong text="live team radios" />. There is also a real-time circuit with drivers that move on the track in real-time!</p>
                            </FadeIn>
                        </Container>
                        <Container>
                            <FadeIn>
                                <h2 className="font-bold text-2xl">How Was It Built?</h2>
                            </FadeIn>
                            <FadeIn delay={0.1}>
                                <p>I built this project from scratch starting with just `npx create-next-app@latest`. The main technologies I used are: <Strong text="NodeJS" />, <Strong text="NextJS" />, <Strong text="Tailwind" />, <Strong text="Zustand" />, and <Strong text="Websockets" />. I had to build a custom websocket server so that I could push the f1 data to the client as the f1 websocket does not allow client side connections.</p>
                            </FadeIn>
                        </Container>
                    </section>
                </div>
            </div>
        )
    }
}

function Strong({ text }) {
    return <span className="font-bold text-amber-400">{text}</span>
}

function Tech({ text }) {
    return <p className="z-10 bg-zinc-800/00 backdrop-blur px-3 py-1 border border-yellow-400/30 rounded-[17px] text-yellow-300">{text}</p>
}

function Link({ text, link }) {
    return <a href={link} target="_blank" className="z-10 bg-zinc-800/00 backdrop-blur px-3 py-1 border border-yellow-400/30 rounded-full text-yellow-300 hover:underline cursor-pointer">{text}</a>
}

function Container({ children }) {
    return (
        <div className="flex flex-col gap-2 bg-zinc-950/30 px-4 py-3 border border-white/20 rounded-2xl">
            {children}
        </div>
    )
}