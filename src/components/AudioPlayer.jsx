"use client"

import { useState, useRef, useEffect } from "react"

export default function AudioPlayer({ title, src }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(null)
    const [currentTime, setCurrentTime] = useState(0)

    const audioRef = useRef()

    useEffect(() => {
        setDuration(audioRef.current.duration)
    }, [audioRef?.current?.loadedmetadata, audioRef?.current?.readyState])

    function togglePlayState() {
        setIsPlaying(state => {
            if (state) {
                audioRef.current.pause()
            } else {
                audioRef.current.play()
            }

            return !state
        })
    }

    function getDuration(duration) {
        const seconds = Math.round(duration % 60)
        const returnedSeconds = seconds < 10 ? `0${seconds}` : seconds

        const minutes = Math.floor(duration / 60)
        // const returnedMinuts = minuts < 10 ? `0${minuts}` : minuts

        return `${minutes}:${returnedSeconds}`
    }

    function audioJump(amount) {
        audioRef.current.currentTime += amount
        console.log(audioRef.current)
    }

    return (
        <div className="flex flex-row gap-2">
            <audio ref={audioRef} src={src} preload="metadata"></audio>

            {/* Buttons */}
            <button onClick={() => audioJump(-10)}>Back 10</button>
            <button onClick={() => togglePlayState()}>{isPlaying ? "pause" : "play"}</button>
            <button onClick={() => audioJump(10)}>Forward 10</button>

            {/* Current Time */}
            <p>0:00</p>

            {/* Progress Bar */}
            <input type="range" />

            {/* Duration */}
            <p>{getDuration(duration)}</p>
        </div>
    )
}