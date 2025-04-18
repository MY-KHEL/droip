"use client"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"
import { VerticalCarousel } from "../carousels/vertical-carousel"

gsap.registerPlugin(ScrollTrigger)

export const CreatePixel = () => {
    const headingRef = useRef<any>(null)
    const divRef = useRef<any>(null)
    const TextRef = useRef<any>(null)

    useEffect(() => {
        if (headingRef.current) {


            gsap.fromTo(
                headingRef.current, {
                backgroundPosition: '100% 0%',
                
            }, {
                backgroundPosition: '0% 0%',
               
                ease: 'power4.inOut',
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 10%',
                    end: 'center 40%',
                    scrub: true,
                  
                }
            }
            )
        }


        if (divRef.current) {
            gsap.fromTo(
                divRef.current
                , 
                {
                    backgroundColor: 'bg-slate-600',
                    
                
                },
                
                {
                    backgroundColor: 'black',
                    color:'white',
                    duration:2,
                    scrollTrigger: {
                        trigger: divRef.current,
                        scrub: true,
                        
                        start:'center 70%',
                        end:'bottom 80%'


                    }
                })
        }

        gsap.fromTo(
            TextRef.current,{
                opacity:0,
                y:50
            },{
                opacity:1,
                y:0,
                scrollTrigger:{
                    trigger:TextRef.current,
                    start:'top bottom',
                    end: "center center",
                  
                    scrub:true
                    
                }
            }
        )

    }, [])
    return (
        <>
            <div className="px-10 pt-8 lg:pt-60 bg-black/5" ref={divRef}>
                <div className="md:grid grid-cols-6">
                    <div className="col-span-3 ">

                        <h1 ref={headingRef} className=" text-5xl lg:text-8xl  font-semibold bg-gradient-to-l from-gray-300 to-black bg-[length:200%_100%] bg-clip-text text-transparent"> Create
                            pixel-perfect accuracy in the atomic level</h1></div>

                    <div className="col-span-3 relative flex items-center justify-center">
                        <div className="">
                        <div className=" relative mt-8 lg:mt-0">
                            <VerticalCarousel/>
                        <div className="w-[300px] flex items-center justify-end absolute -bottom-30 ">
                            
                            <h1 className="text-lg ">Create your website from the ground up with complete control over every element, down to the smallest detail.</h1>
                        </div>
                        </div>


                    <div className="py-60">

                        <h1 className=" text-7xl text-center md:text-9xl font-semibold">Or</h1>

                        <p className="text-4xl font-medium paragraph  w-[300px] mt-6" ref={TextRef}>
                        Jumpstart your business with  beautifully crafted themes and sections</p>

                    </div>
                    </div>
                    </div>

                </div>


            </div>
        </>
    )
}