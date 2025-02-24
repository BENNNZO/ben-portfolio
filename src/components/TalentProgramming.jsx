import Image from "next/image"

export default function TalentProgramming() {
    const projects = [
        {
            title: "River Oak",
            description: "A website I built for my dad complete with a contact forum and payment page backed with Stripe.",
            source: "/img/Projects/riveroak.png",
            alt: "River Oak Website",
            link: "https://example.com/river-oak"
        },
        {
            title: "Barber Shop",
            description: "A website I built for a local business in the area. Sadly they do not use it anymore, but it still displays my design skills.",
            source: "/img/Projects/barbering.png",
            alt: "Barber Shop Website",
            link: "https://example.com/barber-shop"
        },
        {
            title: "Snippity",
            description: "A website I made a while ago that has full user authentication with NextAuth and a mongoDB database. It was a site where people could share there code snippets.",
            source: "/img/Projects/snippity.png",
            alt: "Snippity Website",
            link: "https://example.com/snippity"
        },
        {
            title: "Dashboard",
            description: "This is a website I personally use everyday. It has links to all of my current online classes, background music, quick links, and a todo list that I use to keep track of my daily tasks.",
            source: "/img/Projects/dashboard.png",
            alt: "Dashboard Website",
            link: "https://example.com/dashboard"
        },
        {
            title: "Tracker",
            description: "This is another website I personally use everyday. I built this website cause I love tracking data and looking at statistics. So this website helps me keep track of my daily habits, sleep time, mood, and more.",
            source: "/img/Projects/tracker.png",
            alt: "Tracker Website",
            link: "https://example.com/tracker"
        },
        {
            title: "Detailing",
            description: "I used to run a small detailing business on the side and this is the website I built for it. It has a contact form and a gallery of all the cars I have detailed. Plus a quick estimate form",
            source: "/img/Projects/detailing.png",
            alt: "Idle Website",
            link: "https://example.com/idle"
        }
    ]

    const skills = [
        { 
            source: "/img/Skills/logo-html5.svg",
            title: "HTML5",
            alt: "skill-html5",
        },
        { 
            source: "/img/Skills/logo-css3.svg",
            title: "CSS3",
            alt: "skill-css3",
        },
        { 
            source: "/img/Skills/logo-javascript.svg",
            title: "JavaScript",
            alt: "skill-javascript",
        },
        { 
            source: "/img/Skills/logo-react.svg",
            title: "React",
            alt: "skill-react",
        },
        { 
            source: "/img/Skills/logo-nextjs.svg",
            title: "Next.js",
            alt: "skill-nextjs",
        },
        { 
            source: "/img/Skills/logo-mongodb.svg",
            title: "MongoDB",
            alt: "skill-mongodb",
        },
        { 
            source: "/img/Skills/logo-nodejs.svg",
            title: "Node.js",
            alt: "skill-nodejs",
        },
        { 
            source: "/img/Skills/logo-sass.svg",
            title: "Sass",
            alt: "skill-sass",
        },
        { 
            source: "/img/Skills/logo-tailwind.svg",
            title: "Tailwind CSS",
            alt: "skill-tailwind",
        },
    ]
    
    return (
        <>
            <div className="flex flex-row items-end gap-4">
                <h3 className="text-shine-purple text-4xl font-bold pl-2 whitespace-nowrap">TECH STACK</h3>
                {/* <div className="h-px w-full relative bottom-2 bg-gradient-to-r from-purple-400 to-transparent opacity-50"></div> */}
            </div>
            <div className="flex flex-row w-full justify-between my-4">
                {skills.map((skill, index) => (
                    <div className="relative group" key={index}>
                        <Image src={skill.source} width={100} height={100} alt={skill.alt} className="w-24 h-24 invert blur-md group-hover:blur-md duration-300 ease-out absolute top-0 left-0 opacity-50" />
                        <Image src={skill.source} width={100} height={100} alt={skill.alt} className="w-24 h-24 invert -translate-y-0 group-hover:-translate-y-4 duration-300 ease-out" />
                        <p className="text-center opacity-0 group-hover:opacity-100 duration-200 ease-out">{skill.title}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-row items-end gap-4">
                <h3 className="text-shine-purple text-4xl font-bold pl-2 whitespace-nowrap">PROJECTS</h3>
                {/* <div className="h-px w-full relative bottom-2 bg-gradient-to-r from-purple-400 to-transparent opacity-50"></div> */}
            </div>
            <div className="grid grid-cols-2 grid-rows-3 gap-2 my-4">
                {projects.map((project, index) => (
                    <div key={index} className="w-full aspect-[3/2] relative rounded-md group scale-95 hover:scale-100 duration-200 ease-out">
                        <Image alt={project.alt} src={project.source} width={1920} height={1080} className="h-full w-full object-top object-cover rounded-md absolute duration-500 ease-out blur-xl group-hover:blur-2xl opacity-50 group-hover:opacity-75" />
                        <Image alt={project.alt} src={project.source} width={1920} height={1080} className="h-full w-full object-top object-cover rounded-md absolute duration-500 ease-out blur-0 group-hover:blur-md group-hover:opacity-50 opacity-100" />
                        <div className="absolute w-full h-full overflow-hidden rounded-md opacity-0 group-hover:opacity-100 ease-out duration-200">
                            <div className="bg-black/50 py-2">
                                <p className="text-shine-purple text-2xl font-bold text-center">
                                    {project.title}
                                </p>
                            </div>
                            <p className="px-4 py-2 bg-black/20 h-full">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-row items-end gap-4">
                <h3 className="text-shine-purple text-4xl font-bold pl-2 whitespace-nowrap">OTHER INFORMATION</h3>
                {/* <div className="h-px w-full relative bottom-2 bg-gradient-to-r from-purple-400 to-transparent opacity-50"></div> */}
            </div>
            <ul className="pl-8 mt-4 mb-24 flex flex-col gap-2">
                <li>
                    <div className="w-2 h-2 bg-purple-400 rounded-full absolute -translate-x-6 translate-y-2"></div>
                    <p>
                        I know allot of Powershell, Batch, and Bash. I've used both Linux and Windows terminals extensivly and would say I'm quite professient in both of them.
                    </p>
                </li>
                <li>
                    <div className="w-2 h-2 bg-purple-400 rounded-full absolute -translate-x-6 translate-y-2"></div>
                    <p>
                        Even though this section of my portfolio talks about web development I have done a decent amount of python as well. Most of my python projects are for automating a simple task or web scraping data.
                    </p>
                </li>
                <li>
                    <div className="w-2 h-2 bg-purple-400 rounded-full absolute -translate-x-6 translate-y-2"></div>
                    <p>
                        As far as lower level programming languages go, I have dabbled in Rust and C++. I understand both languages but I would not say I am fluent in either of them. Mainly because I have never had a real reason to learn those languages other just than for fun.
                    </p>
                </li>
            </ul>
            {/* <p className="pl-2 my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ratione. Suscipit placeat voluptas rerum voluptates sequi dolor at tempora explicabo atque quam modi ipsum pariatur tempore totam, commodi ea nam?</p> */}
        </>
    )
}