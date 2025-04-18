import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"

export const HeroSection = () => {
    return (
        <>
            <div className="md:px-6  px-3  mt-4 lg:mt-18">
                <span className="text-lg bg-violet-200/60 p-3 px-4  rounded-full ">No-Code WordPress Site Builder</span>
                <div className="lg:grid  grid-cols-3 gap-32 mt-4 lg:mt-20 ">

                    <div className="col-span-2 ">
                        <h1 className="text-5xl lg:text-8xl font-semibold">
                            Break Limits. Build <span className="text-violet-500">Anything</span>. No Code Needed.
                        </h1>
                    </div>
                    <div className="col-span-1 ">
                        <div className="lg:w-[300] ">
                            <div className="mt-16 lg:mt-0 lg:w-full text-black/70 lg:h-[200px]  lg:bg-violet-200 p-4 rounded-2xl">Droip is a no-code, drag-and-drop WordPress builder that simplifies website creation with powerful capabilities.</div>
                        </div>
                        <Button size={'lg'} variant={'destructive'} className="w-full mt-2 rounded-2xl text-violet-600 " >Watch Intro   </Button>
                        <Button size={'lg'} className="w-full mt-2 rounded-2xl hover:text-lg"  >Get Started <ChevronRight/> </Button>
                    </div>

                </div>
                <div className="relative mt-4 lg:mt-16 ">
                    <Image src={'/heroImage.jpg'} alt="hero" width={1200} height={700} className=" w-full rounded-2xl "/>
                </div>
            </div>
        </>
    )
}