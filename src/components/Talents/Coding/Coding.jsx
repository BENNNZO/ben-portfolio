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
                techPoints={[
                    "Canvas LMS API",
                    "Stripe Payments",
                    "AI Integration",
                    "AuthJS",
                    "NextJS Framework",
                    "Tailwind Styling",
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