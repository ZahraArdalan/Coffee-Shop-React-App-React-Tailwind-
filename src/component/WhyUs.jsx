import React from 'react'
import WhyImg1 from "../assets/img/why-1.png"
import WhyImg2 from "../assets/img/why-2.png"
import WhyImg3 from "../assets/img/why-3.png"
import WhyImg4 from "../assets/img/why-4.png"
import coffeeBlast from "../assets/img/coffee_blast-2.png"


export default function WhyUs() {
  return (
    <div className='relative'>
        <div>
            <img src={coffeeBlast} className='absolute top-[-100px]  w-[30vh] lg:w-[50vh] ' />
        </div>
        <div className='my-20 p-5 max-w-6xl mx-auto'>
            <div className=' text-center p-4  '>
                <h2 className='text-4xl  text-amber-950'>چرا کافه روز؟</h2>
                <p className='text-lg mt-3 text-gray-600'>با ما طعم واقعی و اصیل قهوه را تجربه کن؛ جایی که هر فنجان داستانی از عطر و آرامش دارد.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className='bg-[#fff9f1] flex flex-col justify-center items-center px-2 py-4 mx-2 my-4 rounded-md shadow-xl border border-amber-800'>
                    <img src={WhyImg1} className='my-2'/>
                    <h4 className='text-2xl text-amber-900 my-2'>دانه‌های خاص و کمیاب</h4>
                    <p className='text-gray-700 text-sm my-2'>برگزیده از بهترین مزارع قهوه دنیا</p>
                </div>
                <div className='bg-[#fff9f1] flex flex-col justify-center items-center px-2 py-4 mx-2 my-4 rounded-md shadow-xl border border-amber-800'>
                    <img src={WhyImg2} className='my-2'/>
                    <h4 className='text-2xl text-amber-900 my-2'>طعم تازه هر روز</h4>
                    <p className='text-gray-700 text-sm my-2'>قهوه‌ها روزانه آسیاب و دم‌آوری می‌شن</p>
                </div>
                <div className='bg-[#fff9f1] flex flex-col justify-center items-center px-2 py-4 mx-2 my-4 rounded-md shadow-xl border border-amber-800'>
                    <img src={WhyImg3} className='my-2'/>
                    <h4 className='text-2xl text-amber-900 my-2'>محیطی گرم و دل‌نشین</h4>
                    <p className='text-gray-700 text-sm my-2'>جایی برای آرامش، گفتگو و انرژی مثبت</p>
                </div>
                <div className='bg-[#FFF9F1] flex flex-col justify-center items-center px-2 py-4 mx-2 my-4 rounded-md shadow-xl border border-amber-800'>
                    <img src={WhyImg4} className='my-2'/>
                    <h4 className='text-2xl text-amber-900 my-2'>قیمت منصفانه</h4>
                    <p className='text-gray-700 text-sm my-2'>کیفیت بالا با قیمتی واقعی و مناسب</p>
                </div>

            </div>
            <div className='text-center p-4 my-8'>
                <p className=' text-md font-bold text-gray-700 my-2'>هر روز یک فنجون قهوه، یک شروع تازه</p>
                <h4 className=' text-3xl text-amber-950 my-8'>امروز، لحظه‌ی قهوه توئه!</h4>
                
                <button  className='mx-2 bg-amber-950 px-4 py-2 rounded-3xl text-[#FFF1CB]  shadow-md shadow-[#b89f8f] border-none font-semibold  my-5'>
                      همین حالا عضو شو

                </button>
            </div>
             
        </div>
      
    </div>
  )
}
