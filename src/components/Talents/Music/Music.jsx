"use client"

import { useState } from "react"
import AudioPlayer from "./AudioPlayer"
import List from "../../List"
import FadeIn from "../../FadeIn"

export default function Music() {
    const [playing, setPlaying] = useState()

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
            skill: "Vocals"
        }
    ]

    const music = [
        { title: "Manuela", src: "https://ben-portfolio-green.vercel.app/mp3/Manuela.mp3" },
        { title: "M.i.a", src: "https://ben-portfolio-green.vercel.app/mp3/M.i.a.mp3" },
        { title: "I DONT", src: "https://ben-portfolio-green.vercel.app/mp3/I DONT.mp3" },
        { title: "Same", src: "https://ben-portfolio-green.vercel.app/mp3/Same.mp3" },
        { title: "Selfish", src: "https://ben-portfolio-green.vercel.app/mp3/Selfish.mp3" },
        { title: "Confusing", src: "https://ben-portfolio-green.vercel.app/mp3/Confusing.mp3" },
        { title: "Another Day", src: "https://ben-portfolio-green.vercel.app/mp3/Another Day.mp3" }
    ]

    return (
        <>
            <FadeIn>
                <h3 className="font-bold text-shine-purple text-4xl lg:text-left text-center whitespace-nowrap">TOP TRACKS</h3>
            </FadeIn>
            <div className="flex flex-col flex-wrap gap-4 mt-4">
                {music.map((song, index) => (
                    <FadeIn key={index} delay={0.1 * index}>
                        <AudioPlayer title={song.title} playing={playing} setPlaying={setPlaying} src={song.src} />
                    </FadeIn>
                ))}
            </div>

            <FadeIn>
                <h3 className="mt-12 font-bold text-shine-purple text-4xl lg:text-left text-center whitespace-nowrap">SKILLS</h3>

            </FadeIn>
            <ul className={"grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 justify-between gap-12 mt-4"}>
                {skillsList.map((item, index) => (
                    <FadeIn key={index} delay={0.1 * index}>
                        <li className="bg-purple-950/20 backdrop-blur-sm py-8 border border-purple-950/50 rounded-md">
                            <div className="flex flex-col items-center gap-2">
                                <p className="font-bold text-shine-purple text-4xl">{item.length}</p>
                                <p className="font-bold">Years</p>
                            </div>
                            <div className="bg-purple-950/50 mx-auto my-4 w-3/4 h-px"></div>
                            <p className="font-bold text-xl text-center tracking-wider">{item.skill}</p>
                        </li>
                    </FadeIn>
                ))}
            </ul>

            <FadeIn>
                <h3 className="mt-12 font-bold text-shine-purple text-4xl lg:text-left text-center whitespace-nowrap">PRODUCTION</h3>
            </FadeIn>
            <List list={productionList} />
        </>
    )
}