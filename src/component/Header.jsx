import React ,{useState,useEffect}from 'react'
import { IoIosMenu,IoMdClose } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { useCart } from "../context/CartContext";


import ImageLogo from '../assets/img/logo.png'



export default function Header() {
  const { cart, setIsCartOpen } = useCart();
  
  
  const [isMenuOpen, setIsMenuOpen]=useState(false)
  const tiggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  // 📏 وقتی عرض صفحه بزرگ‌تر از 1024 بشه، منو خودکار بسته میشه
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    
        <header className="absolute top-0 left-0 w-full text-white z-10" >
          <nav className='px-4 py-3 sm:px-6 md:px-8 lg:px-10' >
            <div className="flex justify-between items-center lg:h-20 ">

              <div className='hidden lg:flex' >
                <h1>
                  <img src={ImageLogo} alt="logo" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-2" />
                </h1>
              </div>

              <div className='lg:hidden'>
                <button onClick={tiggleMenu} className='lg:hidden'>
                  <IoIosMenu  className=" w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"/>
                </button>
              </div>

              <div className="hidden lg:flex gap-10 lg:backdrop-blur-md rounded-md" >
                <ul className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-[#e9dbd1] cursor-pointer font-bold " >
                  <li className='cursor-pointer'>خانه</li>
                  <li className='cursor-pointer'>منو</li>
                  <li className='cursor-pointer'>درباره ما</li>
                  <li className='cursor-pointer'>ارتباط با ما</li>
                </ul>
              </div>

              

              

              <div  className="flex">       
                  <button className="mx-2 hidden bg-[#FFF1CB] px-4 py-2 rounded-3xl text-gray-950 lg:block  cursor-pointer" >ثبت نام</button>
                  <button onClick={() => setIsCartOpen(true)} className="mx-2 hidden bg-amber-950 px-4 py-2 rounded-3xl text-[#e9dbd1]  lg:block cursor-pointer" ><LuShoppingCart className='w-5 h-5'/>{cart.length > 0 && (
          <span className="absolute -top-[-30px] -left-[-40px] bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            {cart.length}
          </span>
        )}</button>
              </div>
            </div>
            
          </nav>
          
          <div className={`fixed w-[200px] sm:w-[250px] md:w-[300px] top-0 right-0 min-h-screen rounded-ee-3xl  bg-[#ece1d1] text-gray-950 p-4 transform transition-transform duration-300 ease-in-out 
          ${isMenuOpen? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"}`}>
            {/* آیکون بستن */}
            <div className="flex justify-between items-center mb-6">
              
              <button onClick={tiggleMenu}>
                <IoMdClose className="w-6 h-6" />
              </button>
            </div>

            <ul className="flex flex-col gap-4 p-4 mr-4 font-semibold text-base sm:text-lg ">
              <li className='cursor-pointer'>خانه</li>
              <li className='cursor-pointer'>درباره ما</li>
              <li className='cursor-pointer'>ارتباط با ما</li>
              <li onClick={() => setIsCartOpen(true)} className='cursor-pointer'>  سبد خرید</li>
            </ul>

          </div>
          

        </header>
   
  )
}
