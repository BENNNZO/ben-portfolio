import FadeIn from "./FadeIn"

export default function List({ list, style }) {
    return (
        <ul className={"pl-8 flex flex-col gap-2 mt-4 " + style}>
            {list.map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                    <li>
                        <div className="w-2 h-2 bg-purple-400 rounded-full absolute -translate-x-6 translate-y-2"></div>
                        <p>{item}</p>
                    </li>
                </FadeIn>
            ))}
        </ul>
    )
}