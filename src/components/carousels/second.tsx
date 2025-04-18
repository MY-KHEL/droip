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


    


export const SecondCarousel = ()=>{
  const carouselSet =[
    {
      link:'/Thumbnail5.jpg'
  },
    {
      link:'/Thumbnail6.jpg'
  },
    {
      link:'/Thumbnail7.jpg'
  },
    {
      link:'/Thumbnail8.jpg'
  },
    {
      link:'/Thumbnail9.jpg'
  },
]
const plugin =useRef<any>(
        AutoScroll({ speed: 1, stopOnInteraction: false ,direction:'backward'})
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

       
          <CarouselItem key={index} className=" basis-1/2 lg:basis-1/4 pl-0 gap-0">
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
