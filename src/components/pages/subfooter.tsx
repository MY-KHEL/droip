import { ChevronRight } from "lucide-react"
import { Button } from "../ui/button"

export const SubFooter=()=>{
    return(
        <>
        <div className=" lg:px-20">
        <div className="bg-black  p-4 lg:p-16 md:flex items-center justify-between lg:rounded-4xl">
                <div className="">
                    <h1 className="text-white text-5xl font-medium">Get Started</h1>
                    <h1  className="text-white text-5xl font-medium ">For Free</h1>
                </div>
                <div className=" lg:w-[400px] mt-4">
                    <p className="text-white text-md">Experience the power of Droip no-code website builder, risk free. Create stunning, responsive sites with pure creative freedom.</p>
                    <Button className="w-full mt-8" size={'lg'}>Try For Free <ChevronRight/> </Button>
                </div>
        </div>
        </div>
        </>
    )
}