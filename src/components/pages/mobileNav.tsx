import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { productDetail, resourceDetail, supportDetail } from "./data/navData"



export const MobileNav = () => {

 
 

  return (
    <>
      <div className="w-full px-4  lg:hidden  min-h-screen h-full ">
        <div className="py-4 ">

          <Link href={'/'} className="">Home</Link>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Product</AccordionTrigger>
            <AccordionContent>
              {
                productDetail.map((item) => (
                  <div className="flex items-center gap-8 px-2 py-3" key={item.heading}>
                    <div className="">
                      {item.icon}
                    </div>
                    <div className="">
                      <p className=" text-[16px] font-semibold">{item.heading}</p>
                      <p className="text-md ">{item.subheading}</p>
                    </div>
                  </div>
                ))
              }

            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Resource</AccordionTrigger>
            <AccordionContent>
              {
                resourceDetail.map((item) => (
                  <div className="flex items-center gap-8 px-2 py-3" key={item.heading}>
                    <div className="">
                      {item.icon}
                    </div>
                    <div className="">
                      <p className=" text-[16px] font-semibold">{item.heading}</p>
                      <p className="text-md ">{item.subheading}</p>
                    </div>
                  </div>
                ))
              }
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Support</AccordionTrigger>
            <AccordionContent>
            {
                supportDetail.map((item) => (
                  <div className="flex items-center gap-8 px-2 py-3" key={item.heading}>
                    <div className="">
                      {item.icon}
                    </div>
                    <div className="">
                      <p className=" text-[16px] font-semibold">{item.heading}</p>
                      <p className="text-md ">{item.subheading}</p>
                    </div>
                  </div>
                ))
              }
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </div>
    </>
  )
}