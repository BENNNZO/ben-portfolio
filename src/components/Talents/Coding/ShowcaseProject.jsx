import FadeIn from "@/components/FadeIn"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Project({ name, techPoints, vidSrc, imgSrc, link, infoLink }) {
    return (
        <>
            <FadeIn>
                <h3 className="lg:hidden mt-8 font-bold text-shine-purple text-4xl text-center">MOST RECENT</h3>
            </FadeIn>
            <FadeIn>
                <h3 className="hidden lg:block mt-8 font-bold text-shine-purple text-4xl text-left">MOST RECENT - {name}</h3>
            </FadeIn>
            <div className="relative mt-2 rounded-xl w-full aspect-video">
                {/* CONIC GRADIENT */}
                <div className="top-0 left-0 absolute blur-3xl rounded-xl w-full h-full overflow-hidden">
                    <div className="top-0 left-0 absolute w-full h-full conic-gradient"></div>
                </div>
                <div className="top-0 left-0 absolute blur-sm rounded-xl w-full h-full overflow-hidden">
                    <div className="top-0 left-0 absolute w-full h-full conic-gradient" style={{ animationDelay: "40ms" }}></div>
                </div>
                <div className="top-0 left-0 absolute rounded-xl w-full h-full overflow-hidden">
                    <div className="top-0 left-0 absolute w-full h-full conic-gradient" style={{ animationDelay: "50ms" }}></div>
                </div>

                {/* IMAGE */}
                <div className="top-px left-px absolute rounded-xl w-[calc(100%-2px)] h-[calc(100%-2px)] overflow-hidden">
                    <Image
                        fill
                        src={imgSrc}
                        alt="class compass project"
                        className="absolute w-full h-full object-cover project-scroll"
                    >
                    </Image>
                </div>

                {/* TECH POINTS */}
                <div className="bottom-1 sm:bottom-2 md:bottom-4 left-1 sm:left-2 md:left-4 absolute flex flex-row flex-wrap gap-2 mt-4">
                    {techPoints.map((point, index) => (
                        <FadeIn key={index} delay={0.1 * index}>
                            {/* <p className="bg-black/50 backdrop-blur px-3 py-0.5 border border-purple-500/30 rounded-full text-purple-300">{point}</p> */}
                            <p className={`${point.color} lg:px-3 px-2 py-0.5 rounded-full border backdrop-blur-sm text-xs md:text-sm lg:text-base`}>{point.text}</p>
                        </FadeIn>
                    ))}
                </div>

                {/* EXTERNAL LINKS */}
                <div className="top-1 sm:top-2 md:top-4 left-1 sm:left-2 md:left-4 absolute flex flex-col items-start gap-2">
                    <FadeIn>
                        <a className="group z-10 relative flex flex-row items-center gap-1 bg-zinc-900/70 backdrop-blur-sm px-2 lg:px-3 py-0.5 lg:py-1 border border-purple-400/50 rounded-full" href={link} target="_blank">
                            <p className="relative font-medium text-purple-300 text-xs md:text-sm lg:text-base tracking-wide duration-200 ease-out">
                                {link}
                                <span className="bottom-1 left-0 absolute bg-purple-300 w-0 group-hover:w-full h-px duration-200 ease-out"></span>
                            </p>
                            <Image src="/svg/open.svg" width={20} height={20} alt="open link" className="invert group-hover:ml-2 h-full aspect-square group-hover:rotate-45 duration-200 ease-out" />
                        </a>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <a className="group z-10 relative flex flex-row items-center gap-1 bg-zinc-900/70 backdrop-blur-sm px-2 lg:px-3 py-0.5 lg:py-1 border border-purple-400/50 rounded-full" href={infoLink}>
                            <p className="relative font-medium text-purple-300 text-xs md:text-sm lg:text-base tracking-wide duration-200 ease-out">More Info</p>
                            <Image src="/svg/open.svg" width={20} height={20} alt="open link" className="invert group-hover:ml-2 h-full aspect-square group-hover:rotate-45 duration-200 ease-out" />
                        </a>
                    </FadeIn>
                </div>
            </div>
        </>
    )
}