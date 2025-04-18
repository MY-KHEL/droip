import Image from "next/image"

export const SetApartSection = () => {
    return (
        <>
            <div className=" p-4 lg:px-20 bg-black py-10">
                <div className=" text-center mx-auto lg:w-[600px]">
                    <h1 className=" text-5xl lg:text-7xl font-semibold text-white w-full flex flex-wrap ">Performance that
                        sets you apart</h1>
                </div>
                <div className="py-10">
                    <div className="lg:grid grid-cols-2 text-white gap-8 mt-20">
                        <div className="col-span-1 bg-zinc-900/70  pt-8 rounded-2xl my-2 lg:my-0">
                            <div className="px-12">
                                <h1 className="text-lg ">Clean code output</h1>
                                <p className=" text-md mt-4">Droip generates minimal, well-structured code that is free from unnecessary bloat ensuring efficiency.</p>
                            </div>

                            <div className=" mt-8">
                                <Image src={'/lightweight.png'} alt="something" width={700} height={400} className="w-full" />
                            </div>

                        </div>
                        <div className="col-span-1 bg-zinc-900/70  pt-8 rounded-2xl">
                            <div className="px-12">
                                <h1 className="text-lg ">Keep website lightweight
                                </h1>
                                <p className=" text-md mt-4">Optimized code means faster load times, improved performance, and a smoother user experience.</p>
                            </div>
                            <div className=" mt-8">
                                <Image src={'/clean-code.png'} alt="something" width={700} height={400} className="w-full" />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}