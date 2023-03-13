// import { useState } from 'react'
import './VideoBackground.css'

export function VideoBackground() {
    // const [trailerFinished, setTrailerFinished] = useState(false)

    return (
        <div id="video-background" className="aspect-video absolute overflow-hidden w-screen h-screen">
            <div className='absolute w-screen h-screen bg-[url("./images/background.png")] z-10'></div>
            {/* <iframe
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/FyIwEFXOcaE?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&start=50&enablejsapi=1&&widgetid=3"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                onEnded={() => console.log('acabou')}
            /> */}
        </div>
    )
}
