"use client"

import { useMemo, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Hero from "@/components/Hero"
import TaskList from "@/components/TaskList"

export default function Home() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(
        () => ({
            fpsLimit: 240,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse",
                        parallax: {
                            enable: true,
                            force: 60,
                            smooth: 10,
                        }
                    }
                },
                modes: {
                    repulse: {
                        distance: 500,
                        duration: 4,
                        factor: 1,
                        speed: 1,
                        maxSpeed: 5,
                        easing: "ease-out-quad",
                    },
                },
            },
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
                    speed: 0.5,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 50,
                },
                opacity: {
                    value: 0.25,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
        }),
        [],
    );

    if (init) {
        return (
            <div className="bg-black text-white">
                <Particles options={options} />
                <Hero />
                <TaskList />
            </div>
        )
    }
}