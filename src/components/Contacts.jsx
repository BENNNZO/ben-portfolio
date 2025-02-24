import Image from "next/image"

export default function Contacts() {
    return (
            <section className="w-full relative flex flex-col items-center">
                <div className="relative mb-24 mt-48">
                    <h1 className="text-7xl font-bold bg-clip-text text-transparent text-shine-purple absolute top-0 left-0 blur-3xl">CONTACTS</h1>
                    <h1 className="text-7xl font-bold bg-clip-text text-transparent text-shine-purple">CONTACTS</h1>
                </div>
                <p className="animate-pulse mb-12">E-Mail form coming soon...</p>
                <div className="border border-purple-400/20 bg-purple-950/5 rounded-md mb-32 p-4 backdrop-blur-sm">
                    <p className="mb-4">NOTE - I get a lot of spam calls so If I don't answer a call don't hesitate to text or e-mail me!</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2">
                            <Image src="/svg/call.svg" width={25} height={25} alt="phone icon" className="invert" />
                            <a className="text-xl font-semibold text-shine-purple" href="tel:+17068300401">+1 (706) 830 - 0401</a>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Image src="/svg/mail.svg" width={25} height={25} alt="phone icon" className="invert" />
                            <a className="text-xl font-semibold text-shine-purple" href="mailto:bp08262004@gmail.com">bp08262004@gmail.com</a>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Image src="/svg/mail.svg" width={25} height={25} alt="phone icon" className="invert" />
                            <a className="text-xl font-semibold text-shine-purple" href="mailto:benjamin.phillips.webdev@gmail.com">benjamin.phillips.webdev@gmail.com</a>
                        </div>
                    </div>
                </div>
            </section>
    )
}