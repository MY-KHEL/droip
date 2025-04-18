import { FirstCarousel } from "../carousels/first"
import { SecondCarousel } from "../carousels/second"
import { ThirdCarousel } from "../carousels/third"


export const ImageCarouseSection = () => {

  return (
    <>
      <div className="bg-black text-white py-30 px-2 lg:px-10">

        <div className="md:grid grid-cols-3">
          <div className="col-span-1">
            <h2 className=" text-2xl w-[300px] mt-6">
              Launch with ease using stunning, ready-to-use themes & sections designed for every need.
            </h2>
          </div>

          <div className="col-span-2 mt-6 lg:mt-0">

            <FirstCarousel />
            <SecondCarousel/>
            <ThirdCarousel/>

          </div>
        </div>
      </div>
    </>
  )
}

