"use client"
import Link from "next/link"
import { Button } from "../ui/button"
import { NavigationBar } from "./navigationBar"
import Image from "next/image"
import { Menu } from "lucide-react"
import { MobileNav } from "./mobileNav"
import { useState } from "react"

export const SiteNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpenMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav className="  sticky top-0 z-50 w-full max-lg:bg-white  backdrop-blur-md ">

                <div className=" flex justify-between items-center  px-4 md:px-8 ">
                    <div className="inline-flex gap-8 items-center">
                        <Image src={'/logo.png'} alt={'the logo'} width={90} height={90} />
                        <NavigationBar />
                    </div>
                    <div className="hidden lg:inline-flex items-center gap-8 ">
                        <Link href={'/'} className="text-md ">Login</Link>
                        <Button size={"lg"} className="rounded-2xl">Get Started</Button>
                    </div>
                    <div className="lg:hidden">
                        <Menu size={24} onClick={handleOpenMenu} color="blue" />
                    </div>
                </div>
                {
                    isOpen && <MobileNav  />
                }

            </nav>

        </>
    )
}