"use client"

import { useState, useEffect } from "react"

import TalentCyber from "./TalentCyber"
import TalentMusic from "./TalentMusic"
import TalentProgramming from "./TalentProgramming"

export default function Talents() {
    const [selectedTalent, setSelectedTalent] = useState("cyber")

    return (
        <section className="h-screen w-full relative flex flex-col items-center">
            <div className="relative mb-24 mt-48">
                <h1 className="text-7xl font-bold bg-clip-text text-transparent text-shine-purple absolute top-0 left-0 blur-3xl">TALENTS</h1>
                <h1 className="text-7xl font-bold bg-clip-text text-transparent text-shine-purple">TALENTS</h1>
            </div>
            <p>{selectedTalent}</p>
            <div className="flex flex-row gap-2">
                <button className={`border border-white rounded-full px-2 duration-100 ease-out ${selectedTalent === "cyber" ? "bg-white text-black" : ""}`} onClick={() => setSelectedTalent("cyber")}>Cyber</button>
                <button className={`border border-white rounded-full px-2 duration-100 ease-out ${selectedTalent === "music" ? "bg-white text-black" : ""}`} onClick={() => setSelectedTalent("music")}>Music</button>
                <button className={`border border-white rounded-full px-2 duration-100 ease-out ${selectedTalent === "programming" ? "bg-white text-black" : ""}`} onClick={() => setSelectedTalent("programming")}>Programming</button>
            </div>
            <div className="relative">
                <div className={`absolute top-0 left-0 ease-out duration-100 ${selectedTalent === "cyber" ? "opacity-100" : "opacity-0 -translate-x-12"}`}>
                    <TalentCyber />
                </div>
                <div className={`absolute top-0 left-0 ease-out duration-100 ${selectedTalent === "music" ? "opacity-100" : "opacity-0 translate-y-12"}`}>
                    <TalentMusic />
                </div>
                <div className={`absolute top-0 left-0 ease-out duration-100 ${selectedTalent === "programming" ? "opacity-100" : "opacity-0 translate-x-12"}`}>
                    <TalentProgramming />
                </div>
                {/* {selectedTalent === "cyber" && <TalentCyber />}
                {selectedTalent === "music" && <TalentMusic />}
                {selectedTalent === "programming" && <TalentProgramming />} */}
            </div>
        </section>
    )
}