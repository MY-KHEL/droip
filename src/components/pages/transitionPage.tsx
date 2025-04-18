"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Transition = ({ heading, content }: { heading: string; content: string }) => {
    const headingRef = useRef<any>(null);
  
    useEffect(() => {
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { backgroundPosition: "100% 0" },
          {
            backgroundPosition: "0% 0",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
              end: "top 50%",
              scrub: true,
            },
          }
        );
      }
    }, []);
  
    return (
      <div className="">
        <div className="px-6">
          <h1
            ref={headingRef}
            className="text-5xl lg:text-8xl lg:w-[690px] py-4 bg-gradient-to-l  from-gray-600/80 to-black bg-[length:200%_100%] bg-clip-text text-transparent"
          >
            {heading}
          </h1>
          <div className="md:grid grid-cols-3 mt-4">
            <div className="col-span-2"></div>
            <div className="col-span-1 text-lg">
              {content}
            </div>
          </div>
        </div>
      </div>
  
    );
  };
  
  