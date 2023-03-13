import { VideoBackground } from './components/VideoBackground'

import kratos from './assets/games/kratos.png'
import atreus from './assets/games/atreus.png'
import logoImage from './assets/games/logo.png'

export default function App() {
    return (
        <main className="flex relative w-full h-full">
            <VideoBackground />

            <section className="overflow-hidden grid grid-cols-2 items-center container m-auto h-screen justify-center p-4 z-20">
                <div>
                    <img
                        className="max-w-md"
                        src={logoImage}
                        alt="Logotipo God Of War 2018"
                    />

                    <p className='text-lg mt-4'>
                        Pela primeira vez na série, há dois protagonistas
                        principais: Kratos, o antigo deus da guerra grego que é
                        acompanhado por seu jovem filho Atreus. Após a morte da
                        segunda esposa de Kratos e mãe de Atreus, eles viajam para
                        cumprir sua promessa de espalhar suas cinzas no pico mais
                        alto dos nove reinos.
                    </p>
                </div>

                <div className='flex justify-end'>
                    <img 
                        src={kratos} 
                        alt="Kratos"
                        className='max-h-[600px]'
                    />
                    <img 
                        src={atreus} 
                        alt="Atreus"
                        className='max-h-[600px]'
                    />
                </div>
            </section>
        </main>
    )
}
