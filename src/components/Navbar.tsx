
import { ShoppingCart } from "lucide-react";
export default function Navbar() {
  return (
    
    <div className="text-sm w-full">
      
      <div className="bg-black text-white">
        <div className="  mx-auto px-4 sm:px-6 lg:px-20 py-1 flex flex-wrap justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center space-x-2 py-1">
            <p className="text-gray-300">Mon-Thu:</p>
            <p>9:00 AM - 5:30 PM</p>
          </div>

          <div className="hidden md:flex items-center space-x-2 py-1 text-white">
            <p>Visit our showroom in 1234 Street Address City, 1234</p>
            <p className="underline cursor-pointer hover:text-gray-300">Contact Us</p>
          </div>

          <div className="flex items-center space-x-2 py-1">
            <p>Call Us: (00) 1234 5678</p>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                clipRule="evenodd"
              />
            </svg>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>


  
      
      <div className="bg-white">
        <div className=" mx-auto px-4 sm:px-6 lg:px-20 py-4 flex flex-wrap justify-between items-center gap-4">

          <div className="flex flex-wrap items-center gap-4 font-bold text-sm">
            <h1 className="mr-4">LOGO</h1>
            <p className="hidden sm:block mr-4">Laptops</p>
            <p className="hidden sm:block mr-4">Desktop PCs</p>
            <p className="hidden md:block mr-4">Networking Devices</p>
            <p className="hidden md:block mr-4">Printer & Scanners</p>
            <p className="hidden lg:block mr-4">PC Parts</p>
            <p className="hidden lg:block mr-4">All Other Products</p>
            <p className="hidden xl:block mr-4">Repairs</p>
            <button className="px-3 py-1 text-blue-600 rounded-full ring-2 ring-blue-600 hover:bg-blue-600 hover:text-white transition">
              Our Deals
            </button>
          </div>

          <div className="flex items-center space-x-4">
       
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              viewBox="0 0 26 26"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
            </svg>

    
            <div className="relative">
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-blue-600 rounded-full text-white text-[10px] text-center leading-4">
                1
              </span>
              <ShoppingCart />
            </div>

 
            <img
              className="w-7 h-7 rounded-full object-cover"
              src="https://img.kpopmap.com/730x0/2020/10/aespa-winter-profile.png"
              alt="User avatar"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
