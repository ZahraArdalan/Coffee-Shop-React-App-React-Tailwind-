import React from 'react'
import ImageHero from '../assets/img/hero.jpg'

export default function Hero() {
    const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div style={{ backgroundImage: `url(${ImageHero})` }}
            className=' w-full h-[50vh] lg:h-[90vh] bg-cover bg-no-repeat relative flex justify-center items-center'
        >
           <div className=' absolute backdrop-blur-sm top-2 right-28 lg:top-40 lg:backdrop-blur-0'>
            <div >
                <h2 className='text-[#E2B59A] text-5xl my-10 font-extrabold'>کافه روز</h2>

            </div>
            <div>
                <p className='text-xs text-[#beb7b2] my-10 font-bold lg:text-xl'>فراتر از یک کافه ، جایی برای استراحت ، آرامش و تجربه های جدید<br/>
                به کافه روز خوش آمدید !</p>
                

            </div>
            <div>
                <button onClick={scrollToMenu} className='mx-2 bg-[#FFF1CB] px-4 py-2 rounded-3xl text-amber-950  shadow-md shadow-[#b89f8f] border-none font-semibold'>
                    ثبت سفارش

                </button>
            </div>
            
            </div> 

      
    </div>
  )
}


