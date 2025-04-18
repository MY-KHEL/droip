import Image from "next/image"
import { Transition } from "./transitionPage"

export const DesignBuild =()=>{
    const designDetails =[
       
        {
          gridContent:'col-span-2' , 
          link:'/design2.png',
          title:'Form builder',
          content:'Build forms for any purpose and effortlessly manage form data natively'
        },
        {
          gridContent:'col-span-2'
          , 
          link:'/design3.png', 
          title:'CSS preview', 
          content:'See real-time CSS changes and fine-tune styles as you need.'
        },
        {
          gridContent:'col-span-1'  , 
          link:'/design4.png',
          title:'Unlimited Breakpoints',
          content:'Achieve pixel-perfect responsiveness across all devices with unlimited breakpoints.'
        },
        {
          gridContent:'col-span-1'  , 
          link:'/design5.png',
          title:'Figma to droip',
          content:'Seamlessly import Figma designs into Droip and bring your vision to life in no time.'
        },
        {
          gridContent:'col-span-1'  , 
          link:'/design6.png',
          title:'Code Element',
          content:'Add custom HTML, CSS, and JavaScript to an element for extended functionality.'
        },
        {
          gridContent:'col-span-1'  , 
          link:'/design7.png',
          title:'Pop-up builder',
          content:'Design engaging pop-ups that captivate visitors and boost conversions.'
        },
        {
          gridContent:'col-span-1'  , 
          link:'/design8.png',
          title:'Autosave',
          content:'Never lose progress—your work is automatically saved as you build.'
        },
        {
          gridContent:'col-span-1'  , 
          link:'/design9.png',
          title:'Global style manager',
          content:'Maintain consistent branding with centralized style controls'
        },
        {
          gridContent:'col-span-2' , 
          link:'/design10.png', 
          title:'Droip AI',
          content:'Harness AI to accelerate your workflow and creative process.'
        },
    ]
    return(
        <>
        <div className="py-20">

        <div className="">
            <Transition heading="Design and build everything" content="more efficiently with the most advanced granular controls"/>
        </div>
        <div className=" px-4 lg:px-10 py-16">
            <div className="md:flex justify-between items-center bg-white rounded-2xl p-10 mb-1 ">
            <div className="">
                          <h1 className="text-xl font-medium">Seamless Migrations</h1> 
                          <p className="mt-4">Migrate your existing design seamlessly into Droip with just a click of a button!</p> 
                        </div>
                        <div className="">
                        <Image src='/design1.png' alt="vectorImages" width={400} height={200} className="mx-auto w-full"/>
                        </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-1">
                {designDetails.map((detail,index)=>(
                    <div className={`${detail.gridContent} bg-white rounded-2xl p-4 `} key={index}>
                        
                        <Image src={detail.link} alt="vectorImages" width={300} height={200} className="mx-auto w-full"/>

                        <div className="">
                          <h1 className="text-xl font-medium">{detail.title}</h1> 
                          <p className="mt-8">{detail.content}</p> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>

        </>
    )
}