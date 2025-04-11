import Header from "./Header"
import FadeIn from "./FadeIn"

export default function Education() {
    const education = [
        {
            title: "Georgia Military College",
            degree: "Associates - Cyber Security Degree",
            points: [
                "Currently I am still studying for my associates. I plan to find a new college that has a bachleors in Cyber Security after finishing my associates at Georgia Military College.",
                "Building critical problem-solving skills essential for identifying and mitigating cybersecurity threats.",
                "I consistently learn more than needed in my classes as this is something I take a huge interest in!"
            ]
        },
        {
            title: "Georgia Tech",
            degree: "Bootcamp - Full Stack Web Development",
            points: [
                "A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node.js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS.",
                "Many of our projects were group based, and in most projects I was the leader of the project.  Team members would come to me with questions and for help figuring out problems.  The final project I chose to do on my own so that I could get the full experience of front and back end web development.",
            ]
        },
        {
            title: "Lake Side High School",
            degree: "Elective - Cyber Security",
            points: [
                "6 years of Cyber Patriots (6th - 12th grade)",
                "In 2017 the cyber patriots team I was on got 1st place in the world among thousands of other teams",
                "My chosen elective was Cyber Security, I took this class for 3 years and learned a lot about the basics of cyber security especially networking."
            ]
        }
    ]

    return (
        <section className="w-full relative flex flex-col items-center">
            <Header title="EDUCATION" />
            <ul className="flex flex-col gap-8 max-w-2xl">
                {education.map((e, i) => (
                    <li className="relative pl-8" key={`education-${i}`}>
                        <div className="absolute w-4 h-full top-3 left-0">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-b from-purple-400 to-transparent h-full w-px"></div>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-purple-400 rounded-full w-4 h-4 blur-md animate-pulse"></div>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-purple-500 rounded-full w-[11px] h-[11px]"></div>
                        </div>
                        <FadeIn>
                            <h2 className="md:text-3xl text-2xl font-bold text-shine-purple">{e.title}</h2>
                        </FadeIn>
                        <FadeIn>
                            <p className="font-semibold md:text-base text-sm text-purple-300">{e.degree}</p>
                        </FadeIn>
                        <ul className="my-4 flex flex-col gap-2">
                            {e.points.map((point, index) => (
                                <li key={`education-point-${index}`} className="group hover:pl-2 ease-out duration-150">
                                    <div style={{ filter: `brightness(${1 / (index + 1)})` }} className="group-hover:w-4 group-hover:h-4 group-hover:left-0 group-hover:translate-y-1 ease-out duration-150 bg-purple-400 backdrop-blur-3xl w-2 h-2 rounded-full absolute left-1 translate-y-2"></div>
                                    <FadeIn delay={0.1 * index}>
                                        <p className="md:text-base text-sm">{point}</p>
                                    </FadeIn>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    )
}