"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export default function AudioPlayer({ title, src }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(null)
    const [currentTime, setCurrentTime] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)

    const audioRef = useRef()
    const progressBar = useRef()
    const animationRef = useRef()

    function updateData() {
        setDuration(audioRef.current.duration);
        setIsLoaded(true)
    }

    function audioJump(amount) {
        audioRef.current.currentTime += amount
    }

    function changeTime(time) {
        setCurrentTime(time)
        audioRef.current.currentTime = time
    }

    function resetData() {
        setIsPlaying(false)
        setCurrentTime(0)
        progressBar.current.value = 0
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
        <div className="flex flex-row gap-1 rounded-md lg:hover:bg-purple-950/20 lg:bg-black bg-purple-950/20 ease-out duration-150 p-2 pr-6" style={{ backgroundColor: `${isPlaying ? "rgb(59 7 100 / 0.3)" : ""}` }}>
            <audio ref={audioRef} src={src} preload="metadata" onLoadedMetadata={() => updateData()} onEnded={() => resetData()}></audio>


            <div className="flex flex-row aspect-square w-16 items-center justify-center">
                {/* <button className="" onClick={() => audioJump(-10)}>
                    <Image src="/svg/arrow-back.svg" width={25} height={25} alt="pause button" className="invert w-5 h-5 opacity-70" />
                </button> */}

                {/* Play / Pause Button */}
                {isLoaded ? (
                    <button className="lg:hover:scale-110 scale-100 ease-out duration-150" onClick={() => togglePlayState()}>
                        {isPlaying ? (
                            <Image src="/svg/pause2.svg" width={25} height={25} alt="pause button" className="invert w-6 h-6" />
                        ) : (
                            <Image src="/svg/play.svg" width={25} height={25} alt="pause button" className="invert w-6 h-6" />
                        )}
                    </button>
                ) : (
                    <Image src="/svg/loader.svg" width={25} height={25} alt="loading" className="w-6 h-6" />
                )}

                {/* <button className="" onClick={() => audioJump(10)}>
                    <Image src="/svg/arrow-forward.svg" width={25} height={25} alt="pause button" className="invert w-5 h-5 opacity-70" />
                </button> */}
            </div>

            <div className="flex flex-col gap-1 w-full">
                {/* Title */}
                <p className="tracking-wide whitespace-nowrap font-bold text-2xl text-shine-purple">{title}</p>

                {/* Duration/Time + Progress Bar */}
                <div className="flex flex-row items-center gap-4">
                    <p className="font-mono">{formatTime(currentTime)}</p>

                    <div className="relative w-full">
                        <input ref={progressBar} type="range" min={0} max={Math.floor(duration)} defaultValue={0} onChange={(e) => changeTime(e.target.value)} className="audio-progress-bar" />
                        <div className="absolute top-[calc(50%+1px)] -translate-y-1/2 left-0 h-2 rounded-full bg-white pointer-events-none" style={{ width: `${0.35 + (currentTime / duration * 100)}%` }}></div>
                        <div className="absolute top-[calc(50%+1px)] -translate-y-1/2 left-0 h-3 w-3 rounded-full bg-white pointer-events-none blur-xl" style={{ left: `${(currentTime / duration * 100) - 0.5}%` }}></div>
                    </div>

                    <p className="font-mono">{formatTime(duration)}</p>
                </div>
            </div>
        </div>
    )
}