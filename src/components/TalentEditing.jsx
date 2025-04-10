import Image from "next/image"
import List from "./List"

export default function TalentEditing() {
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
            <Image src="/img/channel banner.jpg" alt="channel banner" className="rounded-md lg:h-52 md:h-44 h-36 object-cover mb-2" width={1024} height={500} />
            <div className="md:grid md:grid-cols-2 md:grid-rows-3 gap-2 mb-2 flex flex-col relative">
                {videos.map((video, index) => (
                    <iframe
                        key={index}
                        src={video.url}

                        title={video.title}
                        allowFullScreen
                        className="aspect-video w-full rounded-md"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                ))}
            </div>
            <h3 className="text-shine-purple text-4xl font-bold text-center lg:text-left mt-4">RELEVANT INFORMATION</h3>
            <List list={relevantInformation} />
        </>
    )
}

// https://www.youtube.com/@hotdogmans