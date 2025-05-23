import FadeIn from "@/components/FadeIn"
import Image from "next/image"

export default function ShowcaseProject({ name, techPoints, vidSrc, imgSrc, link, infoLink }) {
    return (
        <>
            <FadeIn>
                <h3 className="hidden lg:block mt-8 font-bold text-shine-purple text-4xl text-left">{name}</h3>
            </FadeIn>
            <div className="relative mt-2 rounded-lg">
                <FadeIn>
                    <Image src={imgSrc} width={1022} height={528} alt="live-f1 project image" quality={0} className="blur-xl rounded-lg" />
                    <Image src={imgSrc} width={1022} height={528} alt="live-f1 project image" quality={0} className="absolute inset-0 blur-2xl rounded-lg" />
                    <Image src={imgSrc} width={1022} height={528} alt="live-f1 project image" placeholder="blur" quality={100} blurDataURL="/img/projects/live-f1-blur.jpg" className="absolute inset-0 rounded-lg" />
                </FadeIn>
            </div>
        </>
    )
}