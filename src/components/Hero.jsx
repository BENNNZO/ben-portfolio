import Image from "next/image"
import FadeIn from "./FadeIn"

export default function Hero() {
    return (
        <section className="h-screen flex lg:flex-row flex-col-reverse lg:justify-around justify-center lg:gap-0 gap-24 items-center overflow-hidden relative hero-box-shadow">
            {/* BUBBLES */}
            <div className="bg-purple-400 absolute bottom-10 left-1/2 -translate-x-1/2 w-[50%] max-w-5xl aspect-[2/1] rounded-t-full hero-pulse" style={{ filter: 'blur(300px)' }}></div>
            <div className="bg-fuchsia-500 absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[100rem] h-52 rounded-t-full blur-[300px]"></div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-52 bg-gradient-to-b from-transparent to-black blur-xl"></div>

            {/* CONTENT */}
            <div className="relative flex flex-col lg:items-start items-center justify-center gap-2 left-12">
                <FadeIn>
                    <p className="font-bold md:text-6xl text-4xl">HEY, I'M <span className="text-shine-purple">BEN</span>!</p>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <div className="flex gap-2">
                        <a href="/pdf/Resume.pdf" download="Resume" target="_blank" className="px-4 py-2 bg-black/30 hover:shadow-md hover:bg-black/0 hover:bottom-0.5 bottom-0 relative duration-150 ease-out backdrop-blur-sm border border-purple-400/20 rounded-full cursor-pointer">Download Resume</a>
                        <a href="https://github.com/bennnzo" target="_blank" className="p-2 b bg-black/30 hover:shadow-md hover:bg-black/0 hover:bottom-0.5 bottom-0 relative duration-150 ease-out backdrop-blur-sm border border-purple-400/20 rounded-full cursor-pointer">
                            <Image src="/img/socials/github.svg" width={25} height={25} className="invert h-full aspect-square" alt="github icon" />
                        </a>
                    </div>
                </FadeIn>
                <div className="w-24 h-8 bg-purple-400 blur-xl absolute top-3 right-8 md:opacity-50 opacity-0"></div>
            </div>

            <FadeIn delay={0.2}>
                <div className="relative md:w-96 md:h-96 w-72 h-72 rounded-full md:bottom-16">
                    <div className="bg-purple-900 absolute-center w-44 h-44 blur-3xl opacity-50"></div>
                    <Image src="/img/profile.png" alt="Profile Picture" width={500} height={500} quality={0} className="w-full h-full aspect-square object-cover scale-110 bottom-2 left-2 absolute drop-shadow-lg rounded-full blur-lg opacity-70" />
                    <Image src="/img/profile.png" alt="Profile Picture" width={500} height={500} quality={100} priority loading="eager" className="w-full h-full aspect-square object-cover scale-110 bottom-2 left-2 relative drop-shadow-lg rounded-full" />
                </div>
            </FadeIn>

            <Image src="/svg/arrow.svg" width={25} height={25} alt="scroll down arrow" className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-pulse rotate-90" />
        </section>
    )
}