import { CompanyDetail, productDetail, resourceDetail, socialDetail, supportDetail } from "./data/navData"

export const Footer =()=>{
    return(
        <>
        <div className="px-6 mt-20">
            <div className="grid grid-cols-2  lg:grid-cols-5 gap-16">
               
            

                <div className="col-span-1">
                <h1 className="text-xl font-medium mb-4">Product</h1>
                    {productDetail.map((detail,index)=>(
                    <div className="md:block my-3 text-gray-900 hover:text-black cursor-pointer" key={index}  >
                        {detail.heading}
                    </div>
                ))}
                </div>
                <div className="col-span-1">
                <h1 className="text-xl font-medium mb-4">Resource</h1>
                    {resourceDetail.map((detail,index)=>(
                    <div className="md:block my-2" key={index} >
                        {detail.heading}
                    </div>
                ))}
                </div>
                <div className="col-span-1">
                <h1 className="text-xl font-medium mb-4">Company</h1>
                    {CompanyDetail.map((detail,index)=>(
                    <div className="md:block my-2" key={index} >
                        {detail.heading}
                    </div>
                ))}
                </div>
                <div className="col-span-1">
                <h1 className="text-xl font-medium mb-4">Support</h1>
                    {supportDetail.map((detail,index)=>(
                    <div className="md:block my-2" key={index} >
                        {detail.heading}
                    </div>
                ))}
                </div>
                <div className=" col-span-2 md:col-span-1">
                    <h1 className="text-xl font-medium mb-4">Social</h1>
                    {socialDetail.map((detail,index)=>(
                    <div className=" inline-flex mx-3 lg:block my-2" key={index}>
                        {detail.icon}
                    </div>
                ))}
                </div>
            </div>
        </div>
        </>
    )
}