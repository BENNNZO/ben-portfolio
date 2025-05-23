import List from "@/components/List"
import FadeIn from "@/components/FadeIn"

export default function RelevantInformation() {
    const relevantInformation = [
        "I have a strong familiarity with PowerShell, Batch, and Bash. I have extensively used both Linux and Windows terminals and consider myself highly proficient in all of them.",
        "Although this section of my portfolio focuses on web development, I have also worked extensively with Python. Most of my Python projects involve automating simple tasks or web scraping data.",
        "In terms of lower-level programming languages, I have experimented with Rust and C++. I have a basic understanding of both, though I wouldn't consider myself fluent, primarily because I've explored them more for enjoyment than necessity.",
    ]

    return (
        <>
            <FadeIn>
                <h3 className="mt-8 font-bold text-shine-purple text-4xl whitespace-normal md:whitespace-nowrap">RELEVANT INFORMATION</h3>
            </FadeIn>
            <List list={relevantInformation} style="mb-24" />
        </>
    )
}