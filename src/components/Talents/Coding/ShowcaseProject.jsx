import FadeIn from "@/components/FadeIn"
import Image from "next/image"

export default function Project({ name, techPoints, vidSrc, imgSrc, link, infoLink }) {
    return (
        <>
            <FadeIn>
                <h3 className="lg:hidden mt-8 font-bold text-shine-purple text-4xl text-center">TOP PROJECT</h3>
            </FadeIn>
            <FadeIn>
                <h3 className="hidden lg:block mt-8 font-bold text-shine-purple text-4xl text-left">TOP PROJECT - {name}</h3>
            </FadeIn>
            <div className="flex flex-row flex-wrap gap-2 mt-4">
                {techPoints.map((point, index) => (
                    <FadeIn key={index} delay={0.1 * index}>
                        <p className="bg-zinc-800/10 backdrop-blur px-3 py-1 border border-purple-500/30 rounded-full text-purple-300">{point}</p>
                    </FadeIn>
                ))}
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
                    <Image src={imgSrc} width={1022} height={528} alt="live-f1 project image" placeholder="blur" quality={100} blurDataURL="/img/projects/live-f1-blur.jpg" className="top-px left-px absolute rounded-lg w-[calc(100%-2px)] h-[calc(100%-2px)]" />
                </FadeIn>
                <div className="top-4 left-4 absolute flex flex-col items-start gap-2">
                    <FadeIn delay={0.5}>
                        <a className="group z-10 relative flex flex-row items-center gap-1 bg-zinc-900/70 backdrop-blur-sm px-3 py-1 border border-purple-300/70 rounded-full" href={link} target="_blank">
                            <p className="relative font-medium text-purple-300 tracking-wide duration-200 ease-out">
                                {link}
                                <span className="bottom-1 left-0 absolute bg-purple-300 w-0 group-hover:w-full h-px duration-200 ease-out"></span>
                            </p>
                            <Image src="/svg/open.svg" width={20} height={20} alt="open link" className="invert group-hover:ml-2 h-full aspect-square group-hover:rotate-45 duration-200 ease-out" />
                        </a>
                    </FadeIn>
                    <FadeIn delay={0.7}>
                        <a className="group z-10 relative flex flex-row items-center gap-1 bg-zinc-900/70 backdrop-blur-sm px-3 py-1 border border-purple-300/70 rounded-full" href={infoLink}>
                            <p className="relative font-medium text-purple-300 tracking-wide duration-200 ease-out">More Info</p>
                            <Image src="/svg/open.svg" width={20} height={20} alt="open link" className="invert group-hover:ml-2 h-full aspect-square group-hover:rotate-45 duration-200 ease-out" />
                        </a>
                    </FadeIn>
                </div>
            </div>
        </>
    )
}