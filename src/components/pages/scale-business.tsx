"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const ScaleBusiness = () => {
  const headingRef = useRef<any>(null);
  const cardRef = useRef<any[]>([]);

  const stackingCard = [
    {
      heading: "Content Manager",
      content:
        "Handle dynamic data with the built-in content manager. Link data dynamically to any part of your website",
      thumbnail: "/Thumbnail1.jpg",
    },
    {
      heading: "Media Manager",
      content:
        "Organize and edit all media assets, including SVGs, Lottie, and icons, with the built-in image and shape editor",
      thumbnail: "/Thumbnail2.jpg",
    },
    {
      heading: "SEO",
      content:
        "Dynamically update SEO content across pages to optimize your website's search performance.",
      thumbnail: "/Thumbnail3.jpg",
    },
  ];

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Animate heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { backgroundPosition: "100% 0%" },
        {
          backgroundPosition: "0% 0%",
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top bottom",
            end: "center bottom",
            scrub: true,
          },
        }
      );
    }

    // Desktop animation
    mm.add("(min-width: 768px)", () => {
      cardRef.current.forEach((card, index) => {
        if (card) {
          gsap.to(card, {
            opacity: 1,
            borderRadius: "3rem",
            scale: 0.9,
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "center bottom",
              scrub: true,
            },
          });
        }
      });
    });

    // Mobile animation
    mm.add("(max-width: 767px)", () => {
      cardRef.current.forEach((card, index) => {
        if (card) {
          gsap.to(card, {
            opacity: 1,
            scale: 0.9,
            scrollTrigger: {
              trigger: card,
              start: "bottom bottom",
              end: "bottom 90%",
             
              scrub: true,
             toggleActions:'play none none reverse'
            },
          });
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="bg-black pb-6 ">
      <h1
        ref={headingRef}
        className="text-6xl lg:text-8xl px-6 md:px-10 font-semibold bg-gradient-to-l from-gray-800/20 to-white bg-[length:200%_100%] bg-clip-text text-transparent py-24"
      >
        Scale your <br /> business with
      </h1>

      <div className="flex flex-col justify-center items-center w-full gap-8 px-4">
        {stackingCard.map((detail, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardRef.current[index] = el;
            }}
            className="sticky top-[15vh] sm:top-[20vh] md:top-[15vh] w-full bg-slate-300 shadow-sm rounded-2xl p-6 lg:pt-40 lg:px-20 transition-all duration-500 grid grid-cols-1 md:grid-cols-2 gap-10 will-change-transform"
          >
            <div className="col-span-1">
              <h1 className="text-lg font-semibold">{detail.heading}</h1>
              <p className="mt-4 text-md">{detail.content}</p>
            </div>
            <div className="col-span-1">
              <Image
                src={detail.thumbnail}
                alt={detail.heading}
                width={700}
                height={500}
                className="w-full rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
