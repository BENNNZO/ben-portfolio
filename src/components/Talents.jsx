"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"

import TalentCyber from "./TalentCyber"
import TalentMusic from "./TalentMusic"
import TalentProgramming from "./TalentProgramming"

export default function Talents() {
    const searchParams = useSearchParams()
    const talent = searchParams.get("talent")

    const [selectedTalent, setSelectedTalent] = useState(talent || "cyber")

    return (
        <section className="w-full relative flex flex-col items-center">
            <div className="relative mb-24 mt-48">
                <h1 className="text-7xl font-bold bg-clip-text text-transparent text-shine-purple absolute top-0 left-0 blur-3xl">TALENTS</h1>
                <h1 className="text-7xl font-bold bg-clip-text text-transparent text-shine-purple">TALENTS</h1>
            </div>
            <div className="flex flex-row gap-2 mb-12">
                <div className="relative">
                    <button className={`border-2 rounded-full px-3 py-0.5 duration-200 ease-out ${selectedTalent === "cyber" ? "bg-black text-shine-purple border-purple-300 scale-100" : "border-white/30 scale-90 opacity-40"}`} onClick={() => setSelectedTalent("cyber")}>Cyber</button>
                    <button className={`absolute top-0 left-0 border-2 rounded-full px-3 py-0.5 duration-200 ease-out ${selectedTalent === "cyber" ? "bg-black text-shine-purple border-purple-300 scale-100 blur-lg" : "border-white/30 scale-90 opacity-0"}`} onClick={() => setSelectedTalent("cyber")}>Cyber</button>
                </div>
                <div className="relative">
                    <button className={`border-2 rounded-full px-3 py-0.5 duration-200 ease-out ${selectedTalent === "coder" ? "bg-black text-shine-purple border-purple-300 scale-100" : "border-white/30 scale-90 opacity-40"}`} onClick={() => setSelectedTalent("coder")}>Coding</button>
                    <button className={`absolute top-0 left-0 border-2 rounded-full px-3 py-0.5 duration-200 ease-out ${selectedTalent === "coder" ? "bg-black text-shine-purple border-purple-300 scale-100 blur-lg" : "border-white/30 scale-90 opacity-0"}`} onClick={() => setSelectedTalent("coder")}>Coding</button>
                </div>
                <div className="relative">
                    <button className={`border-2 rounded-full px-3 py-0.5 duration-200 ease-out ${selectedTalent === "music" ? "bg-black text-shine-purple border-purple-300 scale-100" : "border-white/30 scale-90 opacity-40"}`} onClick={() => setSelectedTalent("music")}>Music</button>
                    <button className={`absolute top-0 left-0 border-2 rounded-full px-3 py-0.5 duration-200 ease-out ${selectedTalent === "music" ? "bg-black text-shine-purple border-purple-300 scale-100 blur-lg" : "border-white/30 scale-90 opacity-0"}`} onClick={() => setSelectedTalent("music")}>Music</button>
                </div>
                <div className="relative">
                    <button className={`border-2 rounded-full px-3 py-0.5 duration-200 ease-out ${selectedTalent === "desin" ? "bg-black text-shine-purple border-purple-300 scale-100" : "border-white/30 scale-90 opacity-40"}`} onClick={() => setSelectedTalent("desin")}>Design</button>
                    <button className={`absolute top-0 left-0 border-2 rounded-full px-3 py-0.5 duration-200 ease-out ${selectedTalent === "desin" ? "bg-black text-shine-purple border-purple-300 scale-100 blur-lg" : "border-white/30 scale-90 opacity-0"}`} onClick={() => setSelectedTalent("desin")}>Design</button>
                </div>
                <div className="relative">
                    <button className={`border-2 rounded-full px-3 py-0.5 duration-200 ease-out ${selectedTalent === "edits" ? "bg-black text-shine-purple border-purple-300 scale-100" : "border-white/30 scale-90 opacity-40"}`} onClick={() => setSelectedTalent("edits")}>Editing</button>
                    <button className={`absolute top-0 left-0 border-2 rounded-full px-3 py-0.5 duration-200 ease-out ${selectedTalent === "edits" ? "bg-black text-shine-purple border-purple-300 scale-100 blur-lg" : "border-white/30 scale-90 opacity-0"}`} onClick={() => setSelectedTalent("edits")}>Editing</button>
                </div>
            </div>
            <div className="flex justify-center">
                <div className={`absolute w-[1000px] ease-in-out duration-300 ${selectedTalent === "cyber" ? "opacity-100" : "opacity-0 pointer-events-none -translate-x-24"}`}>
                    <TalentCyber />
                </div>
                <div className={`relative w-[1000px] ease-in-out duration-300 ${selectedTalent === "coder" ? "opacity-100" : "opacity-0 pointer-events-none translate-y-24"}`}>
                    <TalentProgramming />
                </div>
                <div className={`absolute w-[1000px] ease-in-out duration-300 ${selectedTalent === "music" ? "opacity-100" : "opacity-0 pointer-events-none translate-x-24"}`}>
                    <TalentMusic />
                </div>
                <div className={`absolute w-[1000px] ease-in-out duration-300 ${selectedTalent === "edits" ? "opacity-100" : "opacity-0 pointer-events-none translate-x-24"}`}>
                    <TalentMusic />
                </div>
                <div className={`absolute w-[1000px] ease-in-out duration-300 ${selectedTalent === "desin" ? "opacity-100" : "opacity-0 pointer-events-none translate-x-24"}`}>
                    <TalentMusic />
                </div>
            </div>
        </section>
    )
}