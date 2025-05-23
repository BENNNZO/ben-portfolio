import Image from "next/image"
import List from "@/components/List"
import FadeIn from "@/components/FadeIn"

export default function Coding() {
    const relevantInformation = [
        "I have a strong familiarity with PowerShell, Batch, and Bash. I have extensively used both Linux and Windows terminals and consider myself highly proficient in all of them.",
        "Although this section of my portfolio focuses on web development, I have also worked extensively with Python. Most of my Python projects involve automating simple tasks or web scraping data.",
        "In terms of lower-level programming languages, I have experimented with Rust and C++. I have a basic understanding of both, though I wouldn't consider myself fluent, primarily because I've explored them more for enjoyment than necessity.",
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
                <h3 className="font-bold text-shine-purple text-4xl lg:text-left text-center whitespace-nowrap">TECH STACK</h3>
            </FadeIn>
            <div className="flex flex-row flex-wrap justify-center lg:justify-between gap-4 my-4">
                {skills.map((skill, index) => (
                    <FadeIn key={index} delay={0.05 * index}>
                        <div className="group relative flex flex-col gap-2">
                            <Image src={skill.source} width={100} height={100} alt={skill.alt} className="top-0 left-0 absolute opacity-30 blur-md group-hover:blur-md invert w-12 md:w-16 lg:w-24 h-12 md:h-16 lg:h-24 duration-300 ease-out" />
                            <Image src={skill.source} width={100} height={100} alt={skill.alt} className="invert w-12 md:w-16 lg:w-24 h-12 md:h-16 lg:h-24 -translate-y-0 group-hover:-translate-y-4 duration-300 ease-out" />
                            <p className="hidden lg:inline-block opacity-50 group-hover:opacity-100 w-full text-center group-hover:tracking-normal tracking-wider duration-200 ease-out">{skill.title}</p>
                        </div>
                    </FadeIn>
                ))}
            </div>

            {/* TOP PROJECT */}
            <FadeIn>
                <h3 className="lg:hidden mt-8 font-bold text-shine-purple text-4xl text-center">TOP PROJECT</h3>
            </FadeIn>
            <FadeIn>
                <h3 className="hidden lg:block mt-8 font-bold text-shine-purple text-4xl text-left">TOP PROJECT - LIVE F1</h3>
            </FadeIn>
            <div className="flex flex-row flex-wrap gap-2 mt-4">
                <FadeIn>
                    <p className="bg-zinc-800/10 backdrop-blur px-3 py-1 border border-purple-500/30 rounded-full text-purple-300">Real Time F1 Telemetry and Data</p>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <p className="bg-zinc-800/10 backdrop-blur px-3 py-1 border border-purple-500/30 rounded-full text-purple-300">Custom WebSocket Server</p>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className="bg-zinc-800/10 backdrop-blur px-3 py-1 border border-purple-500/30 rounded-full text-purple-300">NextJS Frontend</p>
                </FadeIn>
                <FadeIn delay={0.3}>
                    <p className="bg-zinc-800/10 backdrop-blur px-3 py-1 border border-purple-500/30 rounded-full text-purple-300">Tailwind Styling</p>
                </FadeIn>
            </div>
            <div className="relative mt-2 rounded-lg">
                <FadeIn>
                    <Image src="/img/Projects/live-f1.png" width={1022} height={528} alt="live-f1 project image" quality={0} className="rounded-lg" />
                    <div className="top-0 left-0 absolute blur-3xl rounded-lg w-full h-full overflow-hidden">
                        <div className="top-0 left-0 absolute w-full h-full conic-gradient"></div>
                    </div>
                    <div className="top-0 left-0 absolute blur-sm rounded-lg w-full h-full overflow-hidden">
                        <div className="top-0 left-0 absolute w-full h-full conic-gradient" style={{ animationDelay: "40ms" }}></div>
                    </div>
                    <div className="top-0 left-0 absolute rounded-lg w-full h-full overflow-hidden">
                        <div className="top-0 left-0 absolute w-full h-full conic-gradient" style={{ animationDelay: "50ms" }}></div>
                    </div>
                    <Image src="/img/Projects/live-f1.png" width={1022} height={528} alt="live-f1 project image" placeholder="blur" quality={100} blurDataURL="/img/projects/live-f1-blur.jpg" className="top-px left-px absolute rounded-lg w-[calc(100%-2px)] h-[calc(100%-2px)]" />
                </FadeIn>
                <div className="top-4 left-4 absolute flex flex-col items-start gap-2">
                    <FadeIn delay={0.5}>
                        <a className="group z-10 relative flex flex-row items-center gap-1 bg-zinc-900/70 backdrop-blur-sm px-3 py-1 border border-purple-300/70 rounded-full" href="https://live-f1.com" target="_blank">
                            <p className="relative font-medium text-purple-300 tracking-wide duration-200 ease-out">
                                https://live-f1.com
                                <span className="bottom-1 left-0 absolute bg-purple-300 w-0 group-hover:w-full h-px duration-200 ease-out"></span>
                            </p>
                            <Image src="/svg/open.svg" width={20} height={20} alt="open link" className="invert group-hover:ml-2 h-full aspect-square group-hover:rotate-45 duration-200 ease-out" />
                        </a>
                    </FadeIn>
                    <FadeIn delay={0.7}>
                        <a className="group z-10 relative flex flex-row items-center gap-1 bg-zinc-900/70 backdrop-blur-sm px-3 py-1 border border-purple-300/70 rounded-full" href="/live-f1-information">
                            <p className="relative font-medium text-purple-300 tracking-wide duration-200 ease-out">More Info</p>
                            <Image src="/svg/open.svg" width={20} height={20} alt="open link" className="invert group-hover:ml-2 h-full aspect-square group-hover:rotate-45 duration-200 ease-out" />
                        </a>
                    </FadeIn>
                </div>
            </div>

            {/* RELEVANT INFORMATION */}
            <FadeIn>
                <h3 className="mt-8 font-bold text-shine-purple text-4xl whitespace-normal md:whitespace-nowrap">RELEVANT INFORMATION</h3>
            </FadeIn>
            <List list={relevantInformation} style="mb-24" />
        </>
    )
}