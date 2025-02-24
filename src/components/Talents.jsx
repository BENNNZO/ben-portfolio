"use client"

import { useState, useEffect } from "react"

import TalentCyber from "./TalentCyber"
import TalentMusic from "./TalentMusic"
import TalentProgramming from "./TalentProgramming"

export default function Talents() {
    const [selectedTalent, setSelectedTalent] = useState("programming")
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        let hoverBorders = document.querySelectorAll(".talent-card")

        hoverBorders.forEach(element => {
            element.addEventListener("mousemove", (e) => {
                let x = e.clientX - e.target.getBoundingClientRect().left
                let y = e.clientY - e.target.getBoundingClientRect().top

                e.target.style.setProperty("--x", `${x}px`)
                e.target.style.setProperty("--y", `${y}px`)
            })
        })

        // const handleMouseMove = (e) => {
        //     setMousePos({ x: e.clientX, y: e.clientY })
        // }

        // window.addEventListener("mousemove", handleMouseMove)

        return () => {
            // window.removeEventListener("mousemove", handleMouseMove)
        }        
    }, [])

    return (
        <section className="h-screen w-full relative flex flex-col items-center">
            <div className="relative mb-24 mt-48">
                <h1 className="text-7xl font-bold bg-clip-text text-transparent text-shine-purple absolute top-0 left-0 blur-3xl">TALENTS</h1>
                <h1 className="text-7xl font-bold bg-clip-text text-transparent text-shine-purple">TALENTS</h1>
            </div>
            {/* <p>{selectedTalent}</p>
            <p>{JSON.stringify(mousePos, 4, null)}</p> */}
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
            </div>
            <div className="flex justify-center">
                <div className={`absolute w-[750px] ease-in-out duration-300 ${selectedTalent === "cyber" ? "opacity-100" : "opacity-0 -translate-x-24"}`}>
                    <TalentCyber />
                </div>
                <div className={`absolute w-[750px] ease-in-out duration-300 ${selectedTalent === "coder" ? "opacity-100" : "opacity-0 translate-y-24"}`}>
                    <TalentProgramming />
                </div>
                <div className={`absolute w-[750px] ease-in-out duration-300 ${selectedTalent === "music" ? "opacity-100" : "opacity-0 translate-x-24"}`}>
                    <TalentMusic />
                </div>
                {/* {selectedTalent === "cyber" && <TalentCyber />}
                {selectedTalent === "music" && <TalentMusic />}
                {selectedTalent === "programming" && <TalentProgramming />} */}
            </div>
        </section>
    )
}