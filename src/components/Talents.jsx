"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"

import Header from "./Header"
import TalentCyber from "./TalentCyber"
import TalentMusic from "./TalentMusic"
import TalentCoding from "./TalentCoding"

export default function Talents() {
    const searchParams = useSearchParams()
    const talent = searchParams.get("talent")

    const [selectedTalent, setSelectedTalent] = useState(talent || "cyber")

    return (
        <section className="w-full relative flex flex-col items-center">
            <Header title="TALENTS" />
            <div className="flex flex-row flex-wrap justify-center gap-2 mb-12">
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
                <div className={`absolute max-w-5xl w-full ease-in-out duration-300 ${selectedTalent === "cyber" ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-90 pointer-events-none -translate-x-0"}`}>
                    <TalentCyber />
                </div>
                <div className={`relative max-w-5xl w-full ease-in-out duration-300 ${selectedTalent === "coder" ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-95 pointer-events-none translate-y-0"}`}>
                    <TalentCoding />
                </div>
                <div className={`absolute max-w-5xl w-full ease-in-out duration-300 ${selectedTalent === "music" ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-90 pointer-events-none translate-x-0"}`}>
                    <TalentMusic />
                </div>
                <div className={`absolute max-w-5xl w-full ease-in-out duration-300 ${selectedTalent === "edits" ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-90 pointer-events-none translate-x-0"}`}>
                    <TalentCyber />
                </div>
                <div className={`absolute max-w-5xl w-full ease-in-out duration-300 ${selectedTalent === "desin" ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-90 pointer-events-none translate-x-0"}`}>
                    <TalentCyber />
                </div>
            </div>
        </section>
    )
}