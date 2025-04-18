import { CircleDollarSign, Grid3x3, ShieldCheck, Shuffle } from "lucide-react"

export const Dependencies = ()=>{
    const dependenciesDetails =[
        {
            icon:<CircleDollarSign />,
            heading:"Cost Effective",
            text:'Reduce ongoing costs with built-in tools that let you scale seamlessly without extra expenses'

        },
        {
            icon:<Shuffle />,
             heading:"Simpified WorkFlow",
            text:'With everything built in, your design process is streamlined, efficient, and hassle-free.'
        },
        {
            icon:<ShieldCheck />,
             heading:"Streamlined Srvices",
            text:'Fewer external plugins mean fewer vulnerabilities, keeping your site secure and lightweight.'
        },

    ]
    return(
        <>
        <div className="py-30 p-4 lg:px-20 bg-gray-300">
            <div className="lg:w-[400px]">
                <h1 className="text-4xl lg:text-7xl font-semibold ">Low Third Party Dependencies</h1>
            </div>
            <div className="md:grid grid-cols-3 gap-1 mt-20">
                <div className="col-span-1 mb-1 lg:mb-0 bg-white rounded-2xl w-full p-4">
                    <div className="mx-auto mt-10 ">
                    <span><Grid3x3 /></span>

                        <h1 className="mt-4 text-xl font-semibold">More control, less reliance</h1>

                        <p className="mt-4">
                        Get complete control over your website’s performance and aesthetics without extra plugins.</p>
                   
                    </div>
                </div>
                <div className="col-span-2 bg-white rounded-2xl">
                    <video width={600}  className="w-full rounded-2xl" autoPlay muted loop playsInline>
                        <source src="/videos/PanzerV3.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-1 mt-1">
                {dependenciesDetails.map((detail,index)=>{
                    return(
                        <div className="col-span-1 bg-white rounded-2xl px-10 py-20 " key={index} >
                                <span className="text-blue-400">{detail.icon}</span>

                                <h1 className="text-xl mt-4">{detail.heading}</h1>

                                <p className="mt-6">
                                    {detail.text}
                                </p>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}