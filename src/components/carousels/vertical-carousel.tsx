import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import AutoScroll from "embla-carousel-auto-scroll"
import Image from "next/image"

export function VerticalCarousel() {

    const plugin =React.useRef<any>(AutoScroll({ speed: 2, stopOnInteraction: false ,direction:'backward'}))

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

  return (
    <Carousel
    plugins={[plugin.current]}
      opts={{
        align: "start",
        loop:true,
      }}
      orientation="vertical"
      className="w-full max-w-lg "
    >
      <CarouselContent className="-mt-1 h-[400px]">
        {carouselSet.map((detail, index) => (
          <CarouselItem key={index} className="pt-1 basis-1/10">
            <div className="p-1" key={index}>
             <Image src={detail.link} alt="thumbnail" width={300} height={200} className="w-full"/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
   
    </Carousel>
  )
}
