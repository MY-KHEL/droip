"use client"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    key: "typography",
    title: "Advanced Typography",
    body: "Take full control over your text with precision typography tools. Adjust fonts, spacing, and styles to add more character to your design.",
    image: "/typography.png",
  },
  {
    key: "grids",
    title: "CSS Grids and Layouts",
    body: "Build complex layouts with ease using CSS Grids. Create multi-directional structures, manage spacing, and achieve perfect alignment without limitations.",
    image: "/grid.png",
  },
  {
    key: "adaptive",
    title: "Adaptive Design",
    body: "Ensure flawless responsiveness across all devices. Design with adaptive elements that adjust seamlessly to different screen sizes and resolutions.",
    image: "/adaptive.png",
  },
  {
    key: "efficiency",
    title: "Efficiency Design",
    body: "Ensure flawless responsiveness across all devices. Design with adaptive elements that adjust seamlessly to different screen sizes and resolutions.",
    image: "/efficiency.png",
  },
];

export function MainSection() {
  const [selected, setSelected] = useState<string>(items[0].key);
  const selectedItem = items.find((item) => item.key === selected);

  const headingRef = useRef<any>(null);

  useEffect(() => {
    if (headingRef.current) {
      const words = gsap.utils.toArray(".word");
      gsap.fromTo(
        words,
         {
            y:20
         }, // Starting state: invisible and moved down
        {
                      // Final state: fully visible
          y: 0,                  // Reset vertical position
          stagger: 0.2,          // Add delay between words
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 100%",
            end: "top 50%",
      
            scrub: true,
            toggleActions:'play none none reverse'
          },
        }
      );

      
    }
  }, []);

  const heading = "Design pixel-perfect sites beyond ordinary";

  return (
    <>
      <div className="lg:px-10 px-4 pb-10">
        <div className="section-header mt-20 lg:mt-40">
          <h1 ref={headingRef} className=" text-5xl lg:text-8xl font-semibold flex flex-wrap ">
            {heading.split(" ").map((word, index) => (
              <span key={index} className="word inline-block">
                {word}
                {index !== heading.split(" ").length - 1 && "\u00A0"} {/* Add space between words */}
              </span>
            ))}
          </h1>
        </div>
        <div className="section-content  mt-8 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Accordion */}
            <Accordion
              type="single"
              collapsible
              value={selected}
              onValueChange={setSelected}
              className="space-y-4"
            >
              {items.map((item, index, arr) => (
                <AccordionItem key={item.key} value={item.key} className="relative lg:pl-6 lg:py-10">
                 
                  <AccordionTrigger className="group p-0">
                  {index !== arr.length - 1 && (
                    <div className=" hidden lg:flex absolute lg:left-7 h-[80%]  lg:top-[65px] z-20 bottom-0 w-[1px] bg-purple-700/70" />
                  )}
                    <div className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-purple-700 border border-purple-900 rounded-full mr-3 group-data-[state=open]:bg-transparent group-data-[state=open]:border-blue-500 transition-colors" />
                      <span className="text-xl group-data-[state=open]:text-2xl group-data-[state=open]:scale-105 font-medium">{item.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:w-[400px]">
                    <p>{item.body}</p>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300} height={300}
                    className=" lg:hidden  transition-all duration-500 w-[300px] mt-6 ml-3"
                  />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Image Panel */}
            <div className="w-full hidden lg:flex  h-full rounded-lg overflow-hidden border relative">
              {selectedItem ? (
                <div className="flex items-center justify-center h-64">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover transition-all duration-500"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center h-64">
                  <Image
                    src="/typography.png"
                    alt="sectionimage"
                    fill
                    className="object-cover transition-all duration-500"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
