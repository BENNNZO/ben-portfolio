import Skills from "./Skills"
import ShowcaseProject from "./ShowcaseProject"
import Project from "./Project"
import RelevantInformation from "./RelevantInformation"

export default function Coding() {
    return (
        <>
            <Skills />
            <ShowcaseProject
                name={"CLASS COMPASS"}
                techPoints={[,
                    {
                        text: "NextJS Framework",
                        color: "bg-zinc-800/50 border-zinc-700/75"
                    },
                    {
                        text: "Tailwind Styling",
                        color: "bg-blue-500/50 border-blue-500/75"
                    },
                    {
                        text: "AI Integration",
                        color: "bg-emerald-500/50 border-emerald-500/75"
                    },
                    {
                        text: "AuthJS",
                        color: "bg-pink-500/50 border-pink-500/75"
                    },
                    {
                        text: "Stripe Payments",
                        color: "bg-purple-500/50 border-purple-500/75"
                    },
                    {
                        text: "Canvas LMS API",
                        color: "bg-red-600/50 border-red-600/75"
                    }
                ]}
                imgSrc={"/img/Projects/classcompass.png"}
                link={"https://www.classcompass.site"}
                infoLink={"/class-compass"}
            />
            <Project
                name={"LIVE F1"}
                techPoints={[
                    "Real Time F1 Telemetry and Data",
                    "Custom WebSocket Server",
                    "NextJS Frontend",
                    "Tailwind Styling"
                ]}
                imgSrc={"/img/Projects/live-f1.png"}
                link={"https://live-f1.com"}
                infoLink={"/live-f1-information"}
            />
            <RelevantInformation />
        </>
    )
}