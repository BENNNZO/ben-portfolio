"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Header from "../Header"
import Coding from "./Coding/Coding"
import Music from "./Music/Music"
import Editing from "./Editing/Editing"
import FadeIn from "../FadeIn"

export default function Talents() {
    const searchParams = useSearchParams()
    const talent = searchParams.get("talent")

    const [selectedTalent, setSelectedTalent] = useState(talent || "coder")

    return (
        <section className="relative flex flex-col items-center w-full">
            <Header title="TALENTS" />
            <div className="flex flex-row flex-wrap justify-center gap-2 mb-12">
                <FadeIn>
                    <div className="relative">
                        <button className={`border-2 rounded-full px-3 py-0.5 duration-200 ease-out ${selectedTalent === "coder" ? "bg-black text-shine-purple border-purple-300 scale-100" : "border-white/30 scale-90 opacity-40"}`} onClick={() => setSelectedTalent("coder")}>Coding</button>
                        <button className={`absolute top-0 left-0 border-2 rounded-full px-3 py-0.5 duration-200 ease-out ${selectedTalent === "coder" ? "bg-black text-shine-purple border-purple-300 scale-100 blur-lg" : "border-white/30 scale-90 opacity-0"}`} onClick={() => setSelectedTalent("coder")}>Coding</button>
                    </div>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <div className="relative">
                        <button className={`border-2 rounded-full px-3 py-0.5 duration-200 ease-out ${selectedTalent === "music" ? "bg-black text-shine-purple border-purple-300 scale-100" : "border-white/30 scale-90 opacity-40"}`} onClick={() => setSelectedTalent("music")}>Music</button>
                        <button className={`absolute top-0 left-0 border-2 rounded-full px-3 py-0.5 duration-200 ease-out ${selectedTalent === "music" ? "bg-black text-shine-purple border-purple-300 scale-100 blur-lg" : "border-white/30 scale-90 opacity-0"}`} onClick={() => setSelectedTalent("music")}>Music</button>
                    </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <div className="relative">
                        <button className={`border-2 rounded-full px-3 py-0.5 duration-200 ease-out ${selectedTalent === "edits" ? "bg-black text-shine-purple border-purple-300 scale-100" : "border-white/30 scale-90 opacity-40"}`} onClick={() => setSelectedTalent("edits")}>Editing</button>
                        <button className={`absolute top-0 left-0 border-2 rounded-full px-3 py-0.5 duration-200 ease-out ${selectedTalent === "edits" ? "bg-black text-shine-purple border-purple-300 scale-100 blur-lg" : "border-white/30 scale-90 opacity-0"}`} onClick={() => setSelectedTalent("edits")}>Editing</button>
                    </div>
                </FadeIn>
            </div>
            <div className="flex justify-center">
                <div className={`max-w-5xl w-full ease-in-out duration-300 ${selectedTalent === "coder" ? "relative opacity-100 blur-0 scale-100" : "absolute opacity-0 blur-md scale-95 pointer-events-none translate-y-0"}`}>
                    <Coding />
                </div>
                <div className={`max-w-5xl w-full ease-in-out duration-300 ${selectedTalent === "music" ? "relative opacity-100 blur-0 scale-100" : "absolute opacity-0 blur-md scale-90 pointer-events-none translate-x-0"}`}>
                    <Music />
                </div>
                <div className={`max-w-5xl w-full ease-in-out duration-300 ${selectedTalent === "edits" ? "relative opacity-100 blur-0 scale-100" : "absolute opacity-0 blur-md scale-90 pointer-events-none translate-x-0"}`}>
                    <Editing />
                </div>
            </div>
        </section>
    )
}