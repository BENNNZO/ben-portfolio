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
            <p>{selectedTalent}</p>
            <p>{JSON.stringify(mousePos, 4, null)}</p>
            <div className="flex flex-row gap-2 mb-12">
                <button className={`border border-white rounded-full px-2 duration-100 ease-out ${selectedTalent === "cyber" ? "bg-white text-black" : ""}`} onClick={() => setSelectedTalent("cyber")}>Cyber</button>
                <button className={`border border-white rounded-full px-2 duration-100 ease-out ${selectedTalent === "music" ? "bg-white text-black" : ""}`} onClick={() => setSelectedTalent("music")}>Music</button>
                <button className={`border border-white rounded-full px-2 duration-100 ease-out ${selectedTalent === "programming" ? "bg-white text-black" : ""}`} onClick={() => setSelectedTalent("programming")}>Programming</button>
            </div>
            <div className="flex justify-center">
                <div className={`talent-card ${selectedTalent === "cyber" ? "opacity-100" : "opacity-0 -translate-x-24"}`}>
                    <TalentCyber />
                </div>
                <div className={`talent-card ${selectedTalent === "music" ? "opacity-100" : "opacity-0 translate-y-24"}`}>
                    <TalentMusic />
                </div>
                <div className={`talent-card ${selectedTalent === "programming" ? "opacity-100" : "opacity-0 translate-x-24"}`}>
                    <div className="talent-border"></div>
                    <div className="talent-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nam libero sapiente officia dolorem deserunt hic atque sint! Eligendi temporibus aut sunt ab odit facere consectetur, voluptatum nemo ad natus optio cum deleniti cumque soluta nobis autem, possimus consequuntur. Quaerat ipsam amet odit eaque sequi voluptatibus a eveniet nulla alias.
                    </div>
                </div>
                {/* {selectedTalent === "cyber" && <TalentCyber />}
                {selectedTalent === "music" && <TalentMusic />}
                {selectedTalent === "programming" && <TalentProgramming />} */}
            </div>
        </section>
    )
}