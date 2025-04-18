"use client"

import { useRef } from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import AutoScroll from "embla-carousel-auto-scroll"
import Image from "next/image"


    


export const FirstCarousel = ()=>{
  const carouselSet =[
    {
      link:'/Thumbnail1.jpg'
  },
    {
      link:'/Thumbnail2.jpg'
  },
    {
      link:'/Thumbnail3.jpg'
  },
    {
      link:'/Thumbnail4.jpg'
  },
]
const plugin =useRef<any>(
        AutoScroll({ speed: 1, stopOnInteraction: false ,direction:'forward'})
      )
    return(
        <>
            <Carousel
      plugins={[plugin.current]}
      className="w-full"
     
      opts={
        {
          loop:true,
        }
      }
      
    >
      <CarouselContent>
       {carouselSet.map((item,index)=>(

       
          <CarouselItem key={index} className=" basis-1/2 lg:basis-1/3 pl-0 gap-0">
            <div className="p-1">
             <Image src={item.link} alt="carousel" width={300} height={200} className="w-full "/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
    </Carousel>
  
        </>
    )
}
