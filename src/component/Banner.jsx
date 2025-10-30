import React from 'react'
import coffeeImg from "../assets/img/banner.png"
import coffeeBlast from "../assets/img/coffee_blast.png"

export default function Banner() {
  return (
    <div className=' relative flex flex-col items-center md:flex-row mt-[5vh]'>
        <div className='flex justify-center md:w-1/2 '>
            <img className='w-[60%] h-[auto] object-contain' alt='coffee rooz' src={coffeeImg}/>
        </div>
        <div className='text-center ml-5 md:text-right p-4 md:w-1/2'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl text-amber-950 font-semibold mb-5'>کافه روز، ترکیب هنر، طعم و آرامش</h2>
            <p className='text-sm md:text-base ml-60px lg:text-lg text-gray-600 mb-5'>کافه روز جاییه برای عاشقان قهوه و لحظه‌های آرامش. ما با دانه‌های تازه‌برشت و عطر ناب قهوه، تجربه‌ای متفاوت از طعم و حس خوب روزمره رو برات می‌سازیم.
              اینجا می‌تونی با دوستانت گپ بزنی، کتاب بخونی یا فقط از یک فنجون قهوه عالی لذت ببری.
               در کافه روز، باور داریم که قهوه فقط یک نوشیدنی نیست؛ بلکه یه لحظه‌ی خاص از روزه که می‌تونه حال دلت رو عوض کنه. ما تلاش می‌کنیم هر فنجون قهوه، یه تجربه‌ی دل‌نشین و به‌یاد‌موندنی باشه.</p>
            <button  className='mx-2 bg-[#FFF1CB] px-4 py-2 rounded-3xl text-amber-950  shadow-md shadow-[#b89f8f] border-none font-semibold'>
                    ثبت سفارش

                </button>
        </div>
        <div className='absolute left-0 bottom-[-50px] md:bttom-[-100px] lg:bottom-[-30px]'>
            <img className='w-[30vh] lg:w-[50vh]' src={coffeeBlast}/>

        </div>

      
    </div>
  )
}
