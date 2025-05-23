"use client"

import { useState } from "react"
import List from "./List"

import Image from "next/image"
import FadeIn from "./FadeIn"

export default function TalentCoding() {
    const [info, setInfo] = useState(null)

    const relevantInformation = [
        "I have a strong familiarity with PowerShell, Batch, and Bash. I have extensively used both Linux and Windows terminals and consider myself highly proficient in all of them.",
        "Although this section of my portfolio focuses on web development, I have also worked extensively with Python. Most of my Python projects involve automating simple tasks or web scraping data.",
        "In terms of lower-level programming languages, I have experimented with Rust and C++. I have a basic understanding of both, though I wouldn't consider myself fluent, primarily because I've explored them more for enjoyment than necessity.",
    ]

    const projects = [
        {
            title: "River Oak",
            description: "Developed a professional website for a family-owned business, featuring a seamless contact form and a secure payment page powered by Stripe. This project highlights my ability to create functional and visually appealing business solutions.",
            source: "/img/Projects/riveroak.png",
            alt: "River Oak Website",
            link: "https://example.com/river-oak",
            techs: [
                {
                    title: "Stripe",
                    color: "635BFF"
                },
                {
                    title: "Lease Form",
                    color: "3db1ff"
                },
                {
                    title: "Email Form",
                    color: "3db1ff"
                }
            ]
        },
        // {
        //     title: "Barber Shop",
        //     description: "Designed and built a modern website for a local business, showcasing my creative design skills. Although no longer in use, it remains a testament to my ability to deliver tailored solutions for small businesses.",
        //     source: "/img/Projects/barbering.png",
        //     alt: "Barber Shop Website",
        //     link: "https://example.com/barber-shop"
        // },
        {
            title: "Snippity",
            description: "Created a dynamic platform for developers to share code snippets, complete with user authentication via NextAuth and a robust MongoDB database. This project demonstrates my expertise in full-stack development and user-centric design.",
            source: "/img/Projects/snippity.png",
            alt: "Snippity Website",
            link: "https://example.com/snippity",
            techs: [
                {
                    title: "MongoDB",
                    color: "2edb94"
                },
                {
                    title: "Next Auth",
                    color: "33E6BE",
                    otherColors: ["CC42E7", "21AAF4"]
                }
            ]
        },
        // {
        //     title: "Dashboard",
        //     description: "Built a personalized productivity dashboard featuring quick links, background music, and a to-do list. This project showcases my ability to create practical tools that enhance daily workflows.",
        //     source: "/img/Projects/dashboard.png",
        //     alt: "Dashboard Website",
        //     link: "https://example.com/dashboard"
        // },
        {
            title: "Tracker",
            description: "Developed a data-driven habit tracker to monitor daily activities, sleep patterns, and mood. This project reflects my passion for analytics and creating tools that promote self-improvement.",
            source: "/img/Projects/tracker.png",
            alt: "Tracker Website",
            link: "https://example.com/tracker",
            techs: [
                {
                    title: "MongoDB",
                    color: "2edb94"
                },
                {
                    title: "Next UI",
                    color: "3db1ff"
                }
            ]
        },
        {
            title: "Detailing",
            description: "Designed a sleek website for my detailing business, featuring a gallery, contact form, and quick estimate tool. This project highlights my ability to create user-friendly interfaces for service-based businesses.",
            source: "/img/Projects/detailing.png",
            alt: "Idle Website",
            link: "https://example.com/idle",
            techs: []
        }
    ]

    const skills = [
        {
            source: "/img/Skills/logo-html5.svg",
            title: "HTML5",
            alt: "skill-html5",
        },
        {
            source: "/img/Skills/logo-css3.svg",
            title: "CSS3",
            alt: "skill-css3",
        },
        {
            source: "/img/Skills/logo-javascript.svg",
            title: "JavaScript",
            alt: "skill-javascript",
        },
        {
            source: "/img/Skills/logo-react.svg",
            title: "React",
            alt: "skill-react",
        },
        {
            source: "/img/Skills/logo-nextjs.svg",
            title: "Next.js",
            alt: "skill-nextjs",
        },
        {
            source: "/img/Skills/logo-mongodb.svg",
            title: "MongoDB",
            alt: "skill-mongodb",
        },
        {
            source: "/img/Skills/logo-nodejs.svg",
            title: "Node.js",
            alt: "skill-nodejs",
        },
        {
            source: "/img/Skills/logo-sass.svg",
            title: "Sass",
            alt: "skill-sass",
        },
        {
            source: "/img/Skills/logo-tailwind.svg",
            title: "Tailwind",
            alt: "skill-tailwind",
        },
    ]

    return (
        <>
            {/* TECH STACK */}
            <FadeIn>
                <h3 className="text-shine-purple text-4xl font-bold whitespace-nowrap text-center lg:text-left">TECH STACK</h3>
            </FadeIn>
            <div className="flex flex-row flex-wrap lg:justify-between justify-center gap-4 my-4">
                {skills.map((skill, index) => (
                    <FadeIn key={index} delay={0.05 * index}>
                        <div className="relative group flex flex-col gap-2">
                            <Image src={skill.source} width={100} height={100} alt={skill.alt} className="lg:w-24 lg:h-24 md:w-16 md:h-16 w-12 h-12 invert blur-md group-hover:blur-md duration-300 ease-out absolute top-0 left-0 opacity-30" />
                            <Image src={skill.source} width={100} height={100} alt={skill.alt} className="lg:w-24 lg:h-24 md:w-16 md:h-16 w-12 h-12 invert -translate-y-0 group-hover:-translate-y-4 duration-300 ease-out" />
                            <p className="text-center opacity-50 tracking-wider group-hover:tracking-normal hidden w-full lg:inline-block group-hover:opacity-100 duration-200 ease-out">{skill.title}</p>
                        </div>
                    </FadeIn>
                ))}
            </div>

            {/* TOP PROJECT */}
            <FadeIn>
                <h3 className="text-shine-purple text-4xl font-bold text-center lg:hidden mt-8">TOP PROJECT</h3>
            </FadeIn>
            <FadeIn>
                <h3 className="text-shine-purple text-4xl font-bold text-left hidden lg:block mt-8">TOP PROJECT - LIVE F1</h3>
            </FadeIn>
            <div className="flex flex-row gap-2 mt-4 flex-wrap">
                <FadeIn>
                    <p className="bg-zinc-800/10 border border-purple-500/30 text-purple-300 backdrop-blur rounded-full px-3 py-1">Real Time F1 Telemetry and Data</p>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <p className="bg-zinc-800/10 border border-purple-500/30 text-purple-300 backdrop-blur rounded-full px-3 py-1">Custom WebSocket Server</p>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className="bg-zinc-800/10 border border-purple-500/30 text-purple-300 backdrop-blur rounded-full px-3 py-1">NextJS Frontend</p>
                </FadeIn>
                <FadeIn delay={0.3}>
                    <p className="bg-zinc-800/10 border border-purple-500/30 text-purple-300 backdrop-blur rounded-full px-3 py-1">Tailwind Styling</p>
                </FadeIn>
            </div>
            <div className="relative rounded-lg mt-2">
                <FadeIn>
                    <Image src="/img/Projects/live-f1.png" width={1022} height={528} alt="live-f1 project image" quality={0} className="rounded-lg" />
                    <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden blur-3xl">
                        <div className="absolute top-0 left-0 w-full h-full conic-gradient"></div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden blur-sm">
                        <div className="absolute top-0 left-0 w-full h-full conic-gradient" style={{ animationDelay: "40ms" }}></div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full conic-gradient" style={{ animationDelay: "50ms" }}></div>
                    </div>
                    <Image src="/img/Projects/live-f1.png" width={1022} height={528} alt="live-f1 project image" placeholder="blur" quality={100} blurDataURL="/img/projects/live-f1-blur.jpg" className="rounded-lg absolute top-px left-px w-[calc(100%-2px)] h-[calc(100%-2px)]" />
                </FadeIn>
                <div className="absolute top-4 left-4 flex flex-col gap-2 items-start">
                    <FadeIn delay={0.5}>
                        <a className="bg-zinc-900/70 border z-10 border-purple-300/70 backdrop-blur-sm rounded-full px-3 py-1 flex flex-row gap-1 items-center relative group" href="https://live-f1.com" target="_blank">
                            <p className="text-purple-300 duration-200 tracking-wide font-medium ease-out relative">
                                https://live-f1.com
                                <span className="absolute bottom-1 left-0 w-0 h-px bg-purple-300 group-hover:w-full duration-200 ease-out"></span>
                            </p>
                            <Image src="/svg/open.svg" width={20} height={20} alt="open link" className="invert aspect-square h-full group-hover:rotate-45 group-hover:ml-2 duration-200 ease-out" />
                        </a>
                    </FadeIn>
                    <FadeIn delay={0.7}>
                        <a className="bg-zinc-900/70 border z-10 border-purple-300/70 backdrop-blur-sm rounded-full px-3 py-1 flex flex-row gap-1 items-center relative group" href="/live-f1-information">
                            <p className="text-purple-300 duration-200 tracking-wide font-medium ease-out relative">More Info</p>
                            <Image src="/svg/open.svg" width={20} height={20} alt="open link" className="invert aspect-square h-full group-hover:rotate-45 group-hover:ml-2 duration-200 ease-out" />
                        </a>
                    </FadeIn>
                </div>
            </div>

            {/* PROJECTS */}
            <FadeIn>
                <h3 className="text-shine-purple text-4xl font-bold whitespace-nowrap text-center lg:text-left mt-8">PROJECTS</h3>
            </FadeIn>
            <div className="md:grid md:grid-cols-2 md:grid-rows-2 gap-2 my-4 flex flex-col relative">
                {projects.map((project, index) => (
                    <FadeIn key={index} delay={0.1 * (index % 2)}>
                        <div className="aspect-[3/2] relative rounded-md group lg:scale-95 lg:hover:scale-100 duration-200 ease-out">
                            <Image alt={project.alt} src={project.source} width={1920} height={1080} className="h-full w-full object-top object-cover rounded-md absolute duration-500 ease-out blur-xl group-hover:blur-2xl opacity-50 group-hover:opacity-70" />
                            <Image alt={project.alt} src={project.source} width={1920} height={1080} className="h-full w-full object-top object-cover rounded-md absolute duration-500 ease-out opacity-100" />
                            <Image onClick={() => setInfo(project.title)} src="/svg/info2.svg" width={35} height={35} alt="more info" className="absolute top-4 right-4 mix-blend-difference invert rounded-full group-hover:opacity-100 lg:opacity-0 opacity-100 duration-200 ease-out cursor-pointer hover:scale-110" />


                            {/* PROJECT INFO MODALS MOBILE */}
                            <div className={`absolute md:hidden flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 pt-2 pb-4 bg-black/80 border border-white/20 backdrop-blur-lg w-full h-full rounded-md shadow-lg ${info === project.title ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-90"} duration-300 ease-out`}>
                                <div className="flex flex-row justify-between items-center mb-4 mt-2">
                                    <p className={`text-4xl font-bold text-center uppercase text-shine-purple`}>{project.title}</p>
                                    <Image src="/svg/close.svg" width={30} height={30} alt="close modal" className="rounded-full invert cursor-pointer" onClick={() => setInfo(null)} />
                                </div>
                                <div className="w-full h-px bg-white/20"></div>
                                <p className="mt-6 mb-2 text-sm">{project.description}</p>
                            </div>
                        </div>
                    </FadeIn>
                ))}

                {/* PROJECT INFO MODALS DESKTOP */}
                <div className="absolute hidden md:block top-0 left-0 w-full h-full pointer-events-none">
                    {projects.map((project, index) => (
                        <div key={index} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 pt-1 pb-2 bg-black/80 border border-white/20 backdrop-blur-lg w-full max-w-3xl rounded-xl shadow-lg ${info === project.title ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-90"} duration-300 ease-out`}>
                            <div className="flex flex-row justify-between items-center mb-2 mt-2">
                                <p className={`text-4xl font-bold text-center uppercase text-shine-purple`}>{project.title}</p>
                                <Image src="/svg/close.svg" width={30} height={30} alt="close modal" className="rounded-full invert cursor-pointer" onClick={() => setInfo(null)} />
                            </div>
                            <div className="relative">
                                <Image alt={project.alt} src={project.source} width={1920} height={1080} className="w-full aspect-[16/9] object-cover object-top rounded-md" />
                                <div className="absolute bottom-2 left-2 flex flex-row gap-2">
                                    {project.techs.map((tech, index) => (
                                        <p key={index} className={`px-2 py-0.5 rounded-full font-medium text-sm backdrop-blur-sm shadow-md`} style={{ background: `#${tech.title === "Next Auth" ? tech.otherColors[0] : tech.color}` }}>
                                            {tech.title}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <p className="mt-6 mb-2">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>


            {/* RELEVANT INFORMATION */}
            <FadeIn>
                <h3 className="text-shine-purple text-4xl font-bold whitespace-normal md:whitespace-nowrap mt-8">RELEVANT INFORMATION</h3>
            </FadeIn>
            <List list={relevantInformation} style="mb-24" />
        </>
    )
}