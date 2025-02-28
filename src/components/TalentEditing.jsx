export default function TalentEditing() {
    const videos = [
        {
            title: "I Made Cookie Clicker In MINECRAFT!",
            url: "https://www.youtube.com/watch?v=Ax3II-K9_0U"
        },
        {
            title: "I Made Cookie Clicker In MINECRAFT!",
            url: "https://www.youtube.com/watch?v=Ax3II-K9_0U"
        },
        {
            title: "I Made Cookie Clicker In MINECRAFT!",
            url: "https://www.youtube.com/watch?v=Ax3II-K9_0U"
        },
        {
            title: "I Made Cookie Clicker In MINECRAFT!",
            url: "https://www.youtube.com/watch?v=Ax3II-K9_0U"
        },
        {
            title: "I Made Cookie Clicker In MINECRAFT!",
            url: "https://www.youtube.com/watch?v=Ax3II-K9_0U"
        },
        {
            title: "I Made Cookie Clicker In MINECRAFT!",
            url: "https://www.youtube.com/watch?v=Ax3II-K9_0U"
        }
    ]

    return (
        <>

            {/* PROJECTS */}
            <h3 className="text-shine-purple text-4xl font-bold lg:pl-2 whitespace-nowrap text-center lg:text-left mt-8 lg:mt-0">VIDEOS</h3>
            <div className="md:grid md:grid-cols-2 md:grid-rows-3 gap-2 my-4 flex flex-col relative">
                {videos.map((video, index) => (
                    <iframe key={index} className="aspect-video w-full rounded-md" src={video.url} title="YouTube video player" allowfullscreen></iframe>
                    // <video key={index} src={video.url} className="bg-red-400 w-24 aspect-video"></video>
                    // <div key={index} className="aspect-[3/2] relative rounded-md group lg:scale-95 lg:hover:scale-100 duration-200 ease-out">
                        // <video src={video.source} width={1920} height={1080} className="h-full w-full object-top object-cover rounded-md absolute duration-500 ease-out blur-xl group-hover:blur-2xl opacity-50 group-hover:opacity-75" />
                        // <video src={video.source} width={1920} height={1080} className="h-full w-full object-top object-cover rounded-md absolute duration-500 ease-out opacity-100" />
                    // </div>
                ))}
            </div>
        </>
    )
}

// https://www.youtube.com/@hotdogmans