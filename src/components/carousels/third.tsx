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


    


export const ThirdCarousel = ()=>{
  const carouselSet =[
    {
      link:'/Thumbnail9.jpg'
  },
    {
      link:'/Thumbnail10.jpg'
  },
    {
      link:'/Thumbnail11.jpg'
  },
    {
      link:'/Thumbnail12.jpg'
  },
    {
      link:'/Thumbnail13.jpg'
  },
    {
      link:'/Thumbnail14.jpg'
  },
]
const plugin =useRef<any>(
        AutoScroll({ speed: 2, stopOnInteraction: false ,direction:'forward'})
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

       
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/5 pl-0 gap-0">
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
