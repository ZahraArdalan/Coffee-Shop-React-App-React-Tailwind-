import React from 'react'
import img1 from '../assets/img/coffee_bean.png'
import img2 from '../assets/img/coffee-cup.png'


import img3 from "../assets/img/why-banner.png";


export default function CoffeeBanner() {
    const scrollToMenu=()=>{
        const menuSection=document.getElementById("menu")
        if(menuSection){
            menuSection.scrollIntoView({behavior: "smooth"})
        }

    }
  return (
    <div className='relative  w-full h-[300px] sm:h-[600px] lg:h-[400px]
        text-white flex justify-center items-center 
        '
            alt=" قهوه"
            style={{backgroundImage: `url(${img3})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition: 'center', }}>
        <div className='absolute left-20 top-1/2 text-center transform -translate-y-1/2 sm:w-[70%] md:w-[50%]
            lg:w-[40%] p-4 sm:text-right
            ' >

                <h4 className='text-xl sm:text-4xl text-white font-bold mb-4' > روزت رو با انرژی  قهوه ناب آغاز کن</h4>
                <p className='text-sm sm:text-base text-gray-200 mb-6 ' > هر فنجان قهوه‌ی ما، ترکیبی از طعم، عطر و آرامشه.  
    بیدار شو، نفس بکش و از لحظه‌هات با طعم بی‌نظیر <strong className='font-semibold'>کافه روز </strong>  لذت ببر.</p>

                <button  onClick={scrollToMenu} className='mx-2 bg-cream px-4 py-2 rounded-3xl text-gray-950  shadow-sm shadow-cream border-none' >
                    ثبت سفارش
                </button>
            </div>  
            <div>
                <img src={img1} alt='دانه' className='absolute hidden lg:block  right-[10px] bottom-[-90px] w-[50vh] h-[55vh] z-10 '/>
                <img src={img2} alt=' ماگ قهوه' className='absolute hidden lg:block lg:w-[28vh] right-[250px] bottom-0   w-[30vh] '/> 
                
            </div> 

      
    </div>
  )
}
