import FadeIn from "@/components/FadeIn"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ShowcaseProject({ name, techPoints, vidSrc, imgSrc, blurSrc, link, infoLink }) {
    return (
        <>
            <FadeIn>
                <h3 className="hidden lg:block mt-8 font-bold text-shine-purple text-4xl text-left">{name}</h3>
            </FadeIn>
            <div className="relative bg-zinc-800 mt-2 border border-purple-600/20 rounded-xl w-full aspect-video overflow-hidden">
                <Image
                    src={imgSrc}
                    fill
                    alt="class compass project"
                    className="absolute w-full"
                >
                </Image>

                {/* TECH POINTS */}
                <div className="bottom-4 left-4 absolute flex flex-row flex-wrap gap-2 mt-4">
                    {techPoints.map((point, index) => (
                        <FadeIn key={index} delay={0.1 * index}>
                            <p className="bg-black/50 backdrop-blur px-3 py-1 border border-purple-500/30 rounded-full text-purple-300">{point}</p>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </>
    )
}