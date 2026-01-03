import Image from "next/image"
import { ChevronRight, ChevronLeft } from "lucide-react"
export default function HeaderSlider() {
  return (

        <div className="relative container  mx-auto">
          <span className="absolute left-0 top-1/2 -translate-y-1/2  p-2  bg-zinc-700/60 text-white flex items-center justify-center rounded-e-full shadow-lg cursor-pointer">
           <ChevronLeft />
          </span>
          <span className="absolute right-0.5  top-1/2 -translate-y-1/2 p-2  bg-zinc-700/60 text-white flex items-center justify-center rounded-s-full shadow-lg cursor-pointer">
            <ChevronRight />
          </span>
          <Image
            src="/images/banner1.svg"
            alt="banner1"
            width={1200}
            height={100}
            layout="responsive"
          />
        
    </div>
  )
}