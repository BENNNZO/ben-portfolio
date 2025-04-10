"use client"

import { useState } from "react"
import List from "./List"

import Image from "next/image"

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
            description: "A website I built for my dad complete with a contact forum and payment page backed with Stripe.",
            source: "/img/Projects/riveroak.png",
            alt: "River Oak Website",
            link: "https://example.com/river-oak"
        },
        {
            title: "Barber Shop",
            description: "A website I built for a local business in the area. Sadly they do not use it anymore, but it still displays my design skills.",
            source: "/img/Projects/barbering.png",
            alt: "Barber Shop Website",
            link: "https://example.com/barber-shop"
        },
        {
            title: "Snippity",
            description: "A website I made a while ago that has full user authentication with NextAuth and a mongoDB database. It was a site where people could share there code snippets.",
            source: "/img/Projects/snippity.png",
            alt: "Snippity Website",
            link: "https://example.com/snippity"
        },
        {
            title: "Dashboard",
            description: "This is a website I personally use everyday. It has links to all of my current online classes, background music, quick links, and a todo list that I use to keep track of my daily tasks.",
            source: "/img/Projects/dashboard.png",
            alt: "Dashboard Website",
            link: "https://example.com/dashboard"
        },
        {
            title: "Tracker",
            description: "This is another website I personally use everyday. I built this website cause I love tracking data and looking at statistics. So this website helps me keep track of my daily habits, sleep time, mood, and more.",
            source: "/img/Projects/tracker.png",
            alt: "Tracker Website",
            link: "https://example.com/tracker"
        },
        {
            title: "Detailing",
            description: "I used to run a small detailing business on the side and this is the website I built for it. It has a contact form and a gallery of all the cars I have detailed. Plus a quick estimate form",
            source: "/img/Projects/detailing.png",
            alt: "Idle Website",
            link: "https://example.com/idle"
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
            <h3 className="text-shine-purple text-4xl font-bold whitespace-nowrap text-center lg:text-left">TECH STACK</h3>
            <div className="flex flex-row flex-wrap lg:justify-between justify-center gap-4 my-4">
                {skills.map((skill, index) => (
                    <div className="relative group flex flex-col gap-2" key={index}>
                        <Image src={skill.source} width={100} height={100} alt={skill.alt} className="lg:w-24 lg:h-24 md:w-16 md:h-16 w-12 h-12 invert blur-md group-hover:blur-md duration-300 ease-out absolute top-0 left-0 opacity-30" />
                        <Image src={skill.source} width={100} height={100} alt={skill.alt} className="lg:w-24 lg:h-24 md:w-16 md:h-16 w-12 h-12 invert -translate-y-0 group-hover:-translate-y-4 duration-300 ease-out" />
                        <p className="text-center opacity-50 tracking-wider group-hover:tracking-normal hidden w-full lg:inline-block group-hover:opacity-100 duration-200 ease-out">{skill.title}</p>
                    </div>
                ))}
            </div>

            {/* TOP PROJECT */}
            <h3 className="text-shine-purple text-4xl font-bold whitespace-nowrap text-center lg:text-left mt-8">TOP PROJECT - LIVE F1</h3>
            <div className="flex flex-row gap-2 mt-4">
                <p className="bg-zinc-800/00 border z-10 border-purple-500/20 text-purple-300 backdrop-blur rounded-full px-3 py-1">Real Time F1 Telemetry and Data</p>
                <p className="bg-zinc-800/00 border z-10 border-purple-500/20 text-purple-300 backdrop-blur rounded-full px-3 py-1">Custom WebSocket Server</p>
                <p className="bg-zinc-800/00 border z-10 border-purple-500/20 text-purple-300 backdrop-blur rounded-full px-3 py-1">NextJS Frontend</p>
                <p className="bg-zinc-800/00 border z-10 border-purple-500/20 text-purple-300 backdrop-blur rounded-full px-3 py-1">Tailwind Styling</p>
                {/* <p className="bg-zinc-800/50 border border-white/30 backdrop-blur rounded-full px-3 py-1">Skeleton Loading</p> */}
                {/* <p className="bg-zinc-800/50 border border-white/30 backdrop-blur rounded-full px-3 py-1">Responsive Design</p> */}
            </div>
            <div className="relative rounded-lg duration-200 ease-out mt-2">
                <Image src="/img/projects/live-f1.png" width={1920} height={1080} alt="live-f1 project image" className="rounded-lg" />
                <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden blur-3xl">
                    <div className="absolute top-0 left-0 w-full h-full conic-gradient"></div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full conic-gradient"></div>
                </div>
                <Image src="/img/projects/live-f1.png" width={1920} height={1080} alt="live-f1 project image" className="rounded-lg absolute top-px left-px w-[calc(100%-2px)] h-[calc(100%-2px)]" />
                <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                    <a className="bg-zinc-900/70 border z-10 border-purple-400/50 backdrop-blur rounded-full px-3 py-1 flex flex-row gap-2 items-center relative group" href="https://live-f1.com" target="_blank">
                        <p className="group-hover:mr-5 text-purple-300 duration-200 ease-out relative">
                            https://live-f1.com
                            <span className="absolute bottom-1 left-0 w-0 h-px bg-purple-300 group-hover:w-full duration-200 ease-out"></span>
                        </p>
                        <Image src="/svg/open.svg" width={20} height={20} alt="open link" className="absolute opacity-0 group-hover:opacity-100 duration-200 ease-out top-1/2 -translate-y-1/2 right-2 invert rounded-full aspect-square h-full" />
                    </a>
                    <a className="bg-zinc-900/70 border z-10 border-purple-400/50 backdrop-blur rounded-full px-3 py-1 flex flex-row gap-2 items-center relative group" href="/live-f1-information">
                        <p className="group-hover:mr-5 text-purple-300 duration-200 ease-out relative">More Info</p>
                        <Image src="/svg/open.svg" width={20} height={20} alt="open link" className="absolute opacity-0 group-hover:opacity-100 duration-200 ease-out top-1/2 -translate-y-1/2 right-2 invert rounded-full aspect-square h-full" />
                    </a>
                </div>
            </div>

            {/* PROJECTS */}
            <h3 className="text-shine-purple text-4xl font-bold whitespace-nowrap text-center lg:text-left mt-8">PROJECTS</h3>
            <div className="md:grid md:grid-cols-2 md:grid-rows-3 gap-2 my-4 flex flex-col relative">
                {projects.map((project, index) => (
                    <div key={index} className="aspect-[3/2] relative rounded-md group lg:scale-95 lg:hover:scale-100 duration-200 ease-out">
                        <Image alt={project.alt} src={project.source} width={1920} height={1080} className="h-full w-full object-top object-cover rounded-md absolute duration-500 ease-out blur-xl group-hover:blur-2xl opacity-30 group-hover:opacity-50" />
                        <Image alt={project.alt} src={project.source} width={1920} height={1080} className="h-full w-full object-top object-cover rounded-md absolute duration-500 ease-out opacity-100" />
                        <Image onClick={() => setInfo(project.title)} src="/svg/info2.svg" width={35} height={35} alt="more info" className="absolute top-4 right-4 mix-blend-difference invert rounded-full group-hover:opacity-100 lg:opacity-0 opacity-100 duration-200 ease-out cursor-pointer hover:scale-110" />

                        {/* PROJECT INFO MODALS MOBILE */}
                        <div className={`absolute md:hidden flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 pt-2 pb-4 bg-black/80 border border-white/20 backdrop-blur-lg w-full h-full rounded-md shadow-lg ${info === project.title ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-90"} duration-300 ease-out`}>
                            <div className="flex flex-row justify-between items-center mb-4 mt-2">
                                <p className={`text-4xl font-bold text-center uppercase text-shine-purple`}>{project.title}</p>
                                <Image src="/svg/close.svg" width={30} height={30} alt="close modal" className="rounded-full invert cursor-pointer"  onClick={() => setInfo(null)} />
                            </div>
                            <div className="w-full h-px bg-white/20"></div>
                            <p className="mt-6 mb-2 text-lg">{project.description}</p>
                        </div>
                    </div>
                ))}

                {/* PROJECT INFO MODALS DESKTOP */}
                <div className="absolute hidden md:block top-0 left-0 w-full h-full pointer-events-none">
                    {projects.map((project, index) => (
                        <div key={index} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 pt-2 pb-4 bg-black/80 border border-white/20 backdrop-blur-lg w-full max-w-3xl rounded-xl shadow-lg ${info === project.title ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-90"} duration-300 ease-out`}>
                            <div className="flex flex-row justify-between items-center mb-4 mt-2">
                                <p className={`text-4xl font-bold text-center uppercase text-shine-purple`}>{project.title}</p>
                                <Image src="/svg/close.svg" width={30} height={30} alt="close modal" className="rounded-full invert cursor-pointer"  onClick={() => setInfo(null)} />
                            </div>
                            <Image alt={project.alt} src={project.source} width={1920} height={1080} className="w-full aspect-[16/9] object-cover object-top rounded-md" />
                            <p className="mt-6 mb-2">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>


            {/* RELEVANT INFORMATION */}
            <h3 className="text-shine-purple text-4xl font-bold whitespace-normal md:whitespace-nowrap mt-8">RELEVANT INFORMATION</h3>
            <List list={relevantInformation} style="mb-24" />
        </>
    )
}