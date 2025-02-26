"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export default function AudioPlayer({ title, src }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(null)
    const [currentTime, setCurrentTime] = useState(0)

    const audioRef = useRef()
    const progressBar = useRef()
    const animationRef = useRef()

    // useEffect(() => {
    //     if (!audio) return

    //     function updateData() {
    //     }

    //     audio.addEventListener("loadedmetadata", updateData)

    //     return () => {
    //         audio.removeEventListener("loadedmetadata", updateData)
    //     }
    // }, [audioRef?.current?.readyState])

    function updateData() {
        setDuration(audioRef.current.duration);
    }

    function audioJump(amount) {
        audioRef.current.currentTime += amount
    }

    function changeTime(time) {
        setCurrentTime(time)
        audioRef.current.currentTime = time
    }

    function togglePlayState() {
        setIsPlaying(state => {
            if (state) {
                audioRef.current.pause()
                cancelAnimationFrame(animationRef.current)
            } else {
                audioRef.current.play()
                animationRef.current = requestAnimationFrame(animationFrameWhilePlaying)
            }

            return !state
        })
    }

    function animationFrameWhilePlaying() {
        progressBar.current.value = audioRef.current.currentTime
        setCurrentTime(audioRef.current.currentTime)
        animationRef.current = requestAnimationFrame(animationFrameWhilePlaying)
    }

    function formatTime(duration) {
        const seconds = Math.round(duration % 60)
        const returnedSeconds = seconds < 10 ? `0${seconds}` : seconds

        const minutes = Math.floor(duration / 60)
        const returnedMinutes = minutes < 10 ? `0${minutes}` : minutes

        return `${returnedMinutes}:${returnedSeconds}`
    }

    return (
        <div className="flex flex-col gap-2 px-4 py-2 border border-white/20 rounded-md">
            <audio ref={audioRef} src={src} preload="metadata" onLoadedMetadata={() => updateData()}></audio>

            {/* Title */}
            {/* <div className="flex flex-row items-end gap-4"> */}
                <p className="font-mono whitespace-nowrap font-bold text-2xl">{title}</p>
                {/* <p className="font-mono whitespace-nowrap opacity-50">BENZO</p> */}
            {/* </div> */}


            <div className="flex flex-row items-center gap-4">
                {/* Buttons */}
                <div className="flex flex-row w-32 items-center justify-around">
                    {/* <button className="" onClick={() => audioJump(-10)}>
                        <Image src="/svg/arrow-back.svg" width={25} height={25} alt="pause button" className="invert w-6 h-6" />
                    </button> */}
                    <button className="" onClick={() => togglePlayState()}>
                        {isPlaying ? (
                            <Image src="/svg/pause.svg" width={25} height={25} alt="pause button" className="invert w-6 h-6" />
                        ) : (
                            <Image src="/svg/play.svg" width={25} height={25} alt="pause button" className="invert w-6 h-6" />
                        )}
                    </button>
                    {/* <button className="" onClick={() => audioJump(10)}>
                        <Image src="/svg/arrow-forward.svg" width={25} height={25} alt="pause button" className="invert w-6 h-6" />
                    </button> */}
                </div>

                {/* Current Time */}
                <p className="font-mono">{formatTime(currentTime)}</p>

                {/* Progress Bar */}
                <input ref={progressBar} type="range" min={0} max={Math.floor(duration)} defaultValue={0} onChange={(e) => changeTime(e.target.value)} className="w-full" />

                {/* Duration */}
                <p className="font-mono">{formatTime(duration)}</p>
            </div>
        </div>
    )
}