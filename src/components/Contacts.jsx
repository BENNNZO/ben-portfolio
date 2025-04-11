import Image from "next/image"
import Header from "./Header"

export default function Contacts() {
    return (
            <section className="w-full relative flex flex-col items-center">
                <Header title="CONTACTS" />
                <p className="animate-pulse mb-12">E-Mail form coming soon...</p>
                <div className="border border-purple-400/20 bg-purple-950/5 rounded-md mb-32 p-4 backdrop-blur-sm">
                    <p className="mb-4 text-sm md:text-md">I may miss calls so feel free to text, e-mail or leave a voice mail!</p>
                    <div className="flex flex-row justify-between gap-2 md:gap-8 flex-wrap">
                        <div className="flex flex-row gap-2">
                            <Image src="/svg/call.svg" width={25} height={25} alt="phone icon" className="invert" />
                            <a className="md:text-xl text-sm font-semibold text-shine-purple" href="tel:+17068300401">+1 (706) 830 - 0401</a>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Image src="/svg/mail.svg" width={25} height={25} alt="phone icon" className="invert" />
                            <a className="md:text-xl text-sm font-semibold text-shine-purple" href="mailto:bp08262004@gmail.com">bp08262004@gmail.com</a>
                        </div>
                    </div>
                </div>
            </section>
    )
}