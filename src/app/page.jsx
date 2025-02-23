"use client"

import Hero from "@/components/Hero"
import TaskList from "@/components/TaskList"
import { useMemo } from "react";
import Particles from "@tsparticles/react"

export default function Home() {

    const options = useMemo(
        () => ({
            fpsLimit: 60,
            // interactivity: {
            //     events: {
            //         onClick: {
            //             enable: true,
            //             mode: "push",
            //         },
            //         onHover: {
            //             enable: true,
            //             mode: "repulse",
            //         },
            //     },
            //     modes: {
            //         push: {
            //             quantity: 4,
            //         },
            //         repulse: {
            //             distance: 200,
            //             duration: 0.4,
            //         },
            //     },
            // },
            particles: {
                color: {
                    value: "#cfbafc",
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 10,
                },
                opacity: {
                    value: 0.1,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            // detectRetina: true,
        }),
        [],
    );
	return (
		<div className="bg-black text-white">
			<Hero />
            <Particles options={options} />
			{/* <TaskList /> */}
			{/* Hello, World! */}
		</div>
	)
}