import FadeIn from "@/components/FadeIn"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ShowcaseProject({ name, techPoints, vidSrc, imgSrc, blurSrc, link, infoLink }) {
    return (
        <>
            <FadeIn>
                <h3 className="hidden lg:block mt-8 font-bold text-shine-purple text-4xl text-left">{name}</h3>
            </FadeIn>
            <div className="relative bg-zinc-800 mt-2 rounded-lg w-full aspect-video overflow-hidden">
                <motion.img
                    src={imgSrc}
                    alt="class compass project"
                    className="absolute w-full"
                    initial={{ top: 0 }}
                    animate={{ top: 0 }}
                    whileHover={{ top: -1940, transition: { duration: 15, ease: "easeOut" } }}
                >
                </motion.img>
            </div>
        </>
    )
}