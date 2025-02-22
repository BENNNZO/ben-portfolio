import Image from "next/image"

export default function Hero() {
    return (
        <section className="h-screen bg-black flex flex-row justify-around items-center">
            <div>
                <p className="font-bold text-6xl">HEY, I'M BEN!</p>
                <p className="font-semibold text-3xl opacity-50">JACK OF ALL TRAITS</p>
            </div>
            <Image src="/img/profile.png" alt="Profile Picture" width={500} height={500} className="rounded-full" />
        </section>
    )
}