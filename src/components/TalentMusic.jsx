import { useState, useEffect } from "react"
import Image from "next/image"

import AudioPlayer from "./AudioPlayer"
import List from "./List"

export default function TalentMusic() {
    const [song, setSong] = useState(null)

    const productionList = [
        `I primarly use FL Studio for recording and editing vocals.`,
        `To make it easier for me, I have hand crafted a template for myself pre-loaded with my vocal chain and recording tracks.`,
        `To record and edit my vocals I use AutoTune Pro mixed with simple splice editing.`,
        `I produce beats as well, but tend to find it easier to write lyrics to other peoples beats. Although, I made the beat for "Manuela".`,
    ]

    const skillsList = [
        {
            length: "10",
            skill: "Piano"
        },
        {
            length: "8",
            skill: "Guitar"
        },
        {
            length: "6",
            skill: "FL Studio"
        },
        {
            length: "3",
            skill: "Vocal Production"
        }
    ]

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
            <h3 className="text-shine-purple text-4xl font-bold whitespace-nowrap text-center lg:text-left">TOP TRACKS</h3>
            <div className="flex flex-col flex-wrap gap-4 mt-4">
                {music.map((song, index) => (
                    <AudioPlayer key={index} title={song.title} src={song.src}/>
                ))}
            </div>

            <h3 className="text-shine-purple text-4xl font-bold whitespace-nowrap text-center mt-12 lg:text-left">PRODUCTION</h3>
            <List list={productionList} />

            <h3 className="text-shine-purple text-4xl font-bold whitespace-nowrap text-center mt-12 lg:text-left">SKILLS</h3>
            <ul className={"flex flex-row justify-between gap-12 mt-4"}>
                {skillsList.map((item, index) => (
                    <li key={index} className="bg-purple-950/20 border border-purple-950/50 backdrop-blur-sm w-full rounded-md py-8">
                        {/* <div className="w-2 h-2 bg-purple-400 rounded-full absolute -translate-x-6 translate-y-2"></div> */}
                        <div className="flex flex-col gap-2 items-center">
                            <p className="text-4xl font-bold text-shine-purple">{item.length}</p>
                            <p className="font-bold">Years</p>
                        </div>
                        <div className="w-3/4 mx-auto h-px bg-white/20 my-4"></div>
                        <p className="text-center">{item.skill}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}