import Image from "next/image"
import FadeIn from "./FadeIn"

export default function Hero() {
    return (
        <section className="relative flex lg:flex-row flex-col-reverse justify-center lg:justify-around items-center gap-24 lg:gap-0 hero-box-shadow h-screen overflow-hidden">
            {/* BUBBLES */}
            <div className="bottom-10 left-1/2 absolute bg-purple-400 rounded-t-full w-[50%] max-w-5xl aspect-[2/1] -translate-x-1/2 hero-pulse" style={{ filter: 'blur(300px)' }}></div>
            <div className="bottom-10 left-1/2 absolute bg-fuchsia-500 blur-[300px] rounded-t-full w-full max-w-[100rem] h-52 -translate-x-1/2"></div>

            <div className="bottom-0 left-1/2 absolute bg-gradient-to-b from-transparent to-black blur-xl w-full h-52 -translate-x-1/2"></div>

            {/* CONTENT */}
            <div className="lg:left-12 relative flex flex-col justify-center items-center lg:items-start gap-2">
                <FadeIn>
                    <p className="font-bold text-4xl md:text-6xl">HEY, I'M <span className="text-shine-purple">BEN</span>!</p>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <div className="flex gap-2">
                        <a href="/pdf/Resume.pdf" download="Resume" target="_blank" className="bottom-0 hover:bottom-0.5 relative bg-black/30 hover:bg-black/0 hover:shadow-md backdrop-blur-sm px-4 py-2 border border-purple-400/20 rounded-full duration-150 ease-out cursor-pointer">Download Resume</a>
                        <a href="https://github.com/bennnzo" target="_blank" className="bottom-0 hover:bottom-0.5 relative bg-black/30 hover:bg-black/0 hover:shadow-md backdrop-blur-sm p-2 border border-purple-400/20 rounded-full duration-150 ease-out cursor-pointer b">
                            <Image src="/img/socials/github.svg" width={25} height={25} className="invert h-full aspect-square" alt="github icon" />
                        </a>
                    </div>
                </FadeIn>
                <div className="top-3 right-8 absolute bg-purple-400 opacity-0 md:opacity-50 blur-xl w-24 h-8"></div>
            </div>

            <FadeIn delay={0.2}>
                <div className="md:bottom-16 relative rounded-full w-72 md:w-96 h-72 md:h-96">
                    <div className="top-1/2 left-1/2 absolute bg-purple-900 opacity-50 blur-3xl w-44 h-44 -translate-x-1/2 -translate-y-1/2"></div>
                    <Image src="/img/profile.png" alt="Profile Picture" width={500} height={500} quality={0} className="bottom-2 left-2 absolute opacity-70 drop-shadow-lg blur-lg rounded-full w-full h-full object-cover aspect-square scale-110" />
                    <Image src="/img/profile.png" alt="Profile Picture" width={500} height={500} quality={100} priority loading="eager" className="bottom-2 left-2 relative drop-shadow-lg rounded-full w-full h-full object-cover aspect-square scale-110" />
                </div>
            </FadeIn>

            <Image src="/svg/arrow.svg" width={25} height={25} alt="scroll down arrow" className="bottom-24 left-1/2 absolute rotate-90 -translate-x-1/2 animate-pulse" />
        </section>
    )
}