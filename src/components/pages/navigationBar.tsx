"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import { productDetail, resourceDetail, supportDetail } from "./data/navData"


export function NavigationBar() {
  return (
    <>
    <div className="hidden lg:flex">
    <NavigationMenu className="">
      <NavigationMenuList className="">
      <NavigationMenuItem className="">
         
         <NavigationMenuLink href="#" className="bg-none">
           Home
         </NavigationMenuLink>
       
     </NavigationMenuItem>
      
        <NavigationMenuItem>
          <NavigationMenuTrigger className="">Product</NavigationMenuTrigger>
          <NavigationMenuContent className="  ">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {productDetail.map((component) => (
                <ListItem
                  key={component.heading}

                  title= {component.heading}
                  href={component.link}
                  icon = {component.icon}
                >
                  {component.subheading}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            {resourceDetail.map((component) => (
                <ListItem
                  key={component.heading}

                  title= {component.heading}
                  href={component.link}
                  icon = {component.icon}
                >
                  {component.subheading}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Support</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            {supportDetail.map((component) => (
                <ListItem
                  key={component.heading}

                  title= {component.heading}
                  href={component.link}
                  icon = {component.icon}
                >
                  {component.subheading}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
         
            <NavigationMenuLink href="#" >
              Pricing
            </NavigationMenuLink>
          
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    
     </div>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title,icon ,children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none flex items-center gap-4">{icon} {title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
