export default function Header({ title}) {
    return (
        <div className="relative mb-24 mt-48">
            <h1 className="md:text-7xl text-5xl font-bold text-shine-purple blur-3xl">{title}</h1>
            <h1 className="md:text-7xl text-5xl font-bold text-white absolute top-[1px]">{title}</h1>
            <h1 className="md:text-7xl text-5xl font-bold text-shine-purple absolute top-0">{title}</h1>
        </div>
    )
}