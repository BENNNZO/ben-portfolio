import Image from "next/image"
import List from "../../List"
import FadeIn from "../../FadeIn"

export default function Editing() {
    const relevantInformation = [
        "I edit mainly in Davinchi but I have also used Adobe Premier and Sony Vegas.",
        "I also used Blender and Affinity Designer to create many of my thumbnails and banners.",
        "Majority of these videos I spent roughly 30+ hours in total. From recording to editing to designing I did it all!"
    ]

    const videos = [
        {
            title: "I Made Cookie Clicker In MINECRAFT!",
            url: "https://www.youtube.com/embed/Ax3II-K9_0U"
        },
        {
            title: "I Broke Minecraft 10 Times...",
            url: "https://www.youtube.com/embed/O1XRC0rrETg"
        },
        {
            title: "So I Deep Fried Minecraft...",
            url: "https://www.youtube.com/embed/2PUSGN3vOm8"
        },
        {
            title: "Minecraft But I'm TINY...",
            url: "https://www.youtube.com/embed/rElYAUbA3wk"
        },
        {
            title: "I Built HOTDOG PARADRISE In Survival Minecraft!",
            url: "https://www.youtube.com/embed/jL9MS53vvuw"
        },
        {
            title: "When The Liar Hides In Plain Sight",
            url: "https://www.youtube.com/embed/tU8L7bRarBg"
        }
    ]

    return (
        <>
            <FadeIn>
                <Image src="/img/channel banner.jpg" alt="channel banner" className="mb-2 rounded-md h-36 md:h-44 lg:h-52 object-cover" width={1024} height={500} />
            </FadeIn>
            <div className="relative flex flex-col gap-2 md:grid md:grid-cols-2 md:grid-rows-3 mb-2">
                {videos.map((video, index) => (
                    <FadeIn key={index} delay={0.1 * index}>
                        <iframe
                            src={video.url}

                            title={video.title}
                            allowFullScreen
                            className="rounded-md w-full aspect-video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    </FadeIn>
                ))}
            </div>
            <FadeIn>
                <h3 className="mt-4 font-bold text-shine-purple text-4xl lg:text-left text-center">RELEVANT INFORMATION</h3>
            </FadeIn>
            <List list={relevantInformation} />
        </>
    )
}

// https://www.youtube.com/@hotdogmans