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
                    <button onClick={() => router.push("/")} className="group top-4 left-4 z-20 fixed bg-zinc-900/50 backdrop-blur-sm px-3 py-1 hover:pl-8 border border-blue-500/40 rounded-full text-blue-300 duration-200 ease-out">
                        Back Home
                        <Image src="/svg/open.svg" width={20} height={20} alt="open link" className="top-1/2 left-2 absolute opacity-0 group-hover:opacity-100 invert rounded-full h-full aspect-square -rotate-[135deg] -translate-y-1/2 duration-200 ease-out" />
                    </button>

                    {/* HERO */}
                    <div className="relative flex md:flex-row flex-col justify-center items-center gap-4 py-52">
                        <Image src="/img/Projects/dashboard.png" width={1920} height={1080} alt="class compass image" className="top-0 left-0 absolute opacity-30 w-full h-full object-cover object-top" />
                        <Image src="/svg/classcompass-logo.svg" width={100} height={100} alt="Class Compass Logo" className="z-10 bg-black p-3 border-2 border-white/20 rounded-full" style={{ filter: "drop-shadow(0 5px 5px black)" }} />
                        <a className="group z-10 font-extrabold tracking-wider cursor-pointer" href="https://www.classcompass.site" target="_blank" style={{ filter: "drop-shadow(0 5px 5px black)" }}>
                            <h1 className="text-4xl sm:text-6xl md:text-8xl text-center">classcompass.site</h1>
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
                                        <Link link="https://classcompass.site" text="https://classcompass.site" />
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
                                    {["HTML", "CSS", "JS", "React", "NodeJS", "NextJS", "Tailwind", "Zustand", "OpenAI API", "AuthJS", "Stripe Payments"].map((text, index) => (
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
                                    {["Responsive Design", "AI Weekly Panner", "Automatic Class Data Syncronization", "Fully Customizable Dashboard", "Multiple Live Music Options"].map((text, index) => (
                                        <FadeIn key={index} delay={(0.1 * index) + 0.1}>
                                            <Tech text={text} />
                                        </FadeIn>
                                    ))}
                                </div>
                            </div>
                        </Container>
                        <Container>
                            <FadeIn>
                                <h2 className="font-bold text-2xl">What Is Class Compass?</h2>
                            </FadeIn>
                            <FadeIn delay={0.1}>
                                <p>ClassCompass is an interactive student progress dashboard that empowers learners to visualize and manage their academic journey in real time. Within the dashboard, students can <Strong text="track upcoming assignments, view grade trends, set personalized study reminders, and monitor goal completion—all on a single, intuitive interface" />. It{`'`}s a productivity tool <Strong text="designed by a student for students" />, bringing clarity and motivation to every semester.</p>
                            </FadeIn>
                        </Container>
                        <Container>
                            <FadeIn>
                                <h2 className="font-bold text-2xl">How Was It Built?</h2>
                            </FadeIn>
                            <FadeIn delay={0.1}>
                                <p>I developed ClassCompass from the ground up using <Strong text="Next.js" /> and <Strong text="Tailwind CSS" /> to ensure a fast, responsive experience across devices. State management is handled with <Strong text="Zustand" />, while secure authentication and account linking leverage <Strong text="Auth.js" />. I integrated the <Strong text="Canvas LMS API" /> to pull live course data, and implemented <Strong text="Stripe" /> for seamless subscription billing. Finally, an <Strong text="AI-driven scheduling engine auto-generates customizable planners" />, helping users stay organized without the hassle of manual entry.</p>
                            </FadeIn>
                        </Container>
                    </section>
                </div>
            </div>
        )
    }
}

function Strong({ text }) {
    return <span className="font-bold text-blue-400">{text}</span>
}

function Tech({ text }) {
    return <p className="z-10 bg-zinc-800/00 backdrop-blur px-3 py-1 border border-blue-500/40 rounded-[17px] text-blue-300">{text}</p>
}

function Link({ text, link }) {
    return <a href={link} target="_blank" className="z-10 bg-zinc-800/00 backdrop-blur px-3 py-1 border border-blue-500/40 rounded-full text-blue-300 hover:underline cursor-pointer">{text}</a>
}

function Container({ children }) {
    return (
        <div className="flex flex-col gap-2 bg-zinc-950/30 px-4 py-3 border border-white/20 rounded-2xl">
            {children}
        </div>
    )
}