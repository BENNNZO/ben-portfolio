import FadeIn from "@/components/FadeIn"
import Image from "next/image"

export default function Skills() {
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
        </>
    )
}