import { useState, useEffect } from "react"
import Image from "next/image"

import AudioPlayer from "./AudioPlayer"

export default function TalentMusic() {
    const [song, setSong] = useState(null)

    const music = [
        { title: "Manuela",     src: "/mp3/Manuela.mp3" },
        { title: "M.i.a",       src: "/mp3/M.i.a.mp3" },
        { title: "I DONT",      src: "/mp3/I DONT.mp3" },
        { title: "Same",        src: "/mp3/Same.mp3" },
        { title: "Selfish",     src: "/mp3/Selfish.mp3" },
        { title: "Confusing",   src: "/mp3/Confusing.mp3" },
        { title: "Another Day", src: "/mp3/Another Day.mp3" }
    ]

    return (
        <>
            <h3 className="text-shine-purple text-4xl font-bold lg:pl-2 whitespace-nowrap text-center lg:text-left">TOP TRACKS</h3>
            <div className="flex flex-col flex-wrap gap-2">
                {music.map((song, index) => (
                    // <div key={index} className="px-4 py-3 h-16 flex flex-row gap-2 justify-between">
                    //     <div className="flex flex-row gap-2 w-1/4">
                    //         <div className="h-full aspect-square bg-purple-800 rounded-md grid place-items-center">
                    //             <Image src="/svg/play.svg" width={25} height={25} alt="play song" className="invert" />
                    //         </div>
                    //         <div>
                    //             <p className="whitespace-nowrap">{song.title}</p>
                    //             <p className="whitespace-nowrap text-sm opacity-50">BENNNNZO</p>
                    //         </div>
                    //     </div>
                    //     <div className="bg-white/20 h-full w-3/4"></div>
                    // </div>
                    // <audio key={index} src={song.src} controls className="w-full"></audio>
                    <AudioPlayer key={index} title={song.title} src={song.src}/>
                ))}
            </div>
            <div className="flex flex-col gap-2">
                {/* <audio src="/mp3/Manuela.mp3"     controls className=""></audio> */}
                {/* <audio src="/mp3/M.i.a.mp3"       controls className=""></audio> */}
                {/* <audio src="/mp3/I DONT.mp3"      controls className=""></audio> */}
                {/* <audio src="/mp3/Same.mp3"        controls className=""></audio> */}
                {/* <audio src="/mp3/Selfish.mp3"     controls className=""></audio> */}
                {/* <audio src="/mp3/Confusing.mp3"   controls className=""></audio> */}
                {/* <audio src="/mp3/Another Day.mp3" controls className=""></audio> */}
            </div>
        </>
    )
}