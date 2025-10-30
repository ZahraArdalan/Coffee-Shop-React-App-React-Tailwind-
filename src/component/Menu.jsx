import React from 'react'
import coffeeMenu from "../data"
import { useCart } from "../context/CartContext";
import toast from 'react-hot-toast';


export default function Menu(product) {
  const { addToCart } = useCart();
  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.name} به سبد خرید افزوده شد ☕`);
  };
  
  
  return (
    <div id='menu' className='my-20 p-5 max-w-6xl mx-auto'>
        <div className='text-center mb-12'>
            <h4 className='text-2xl font-bold text-amber-900 '>بهترین ترکیب های کافه روز</h4>
            <p className='text-gray-600'>از اسپرسوی پرانرژی تا لاته‌ی نرم و دل‌نشین، منوی ما برای هر سلیقه‌ای چیزی خاص داره</p>
        </div>
        
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
            {coffeeMenu.map((item)=>(
                <div key={item.id} className='bg-[#f3ece1] rounded-lg shadow-lg relative pb-8'><img src={item.image} alt={item.name} className='w-full object-contain h-48'/> 
                   <div className=' text-center p-4'>
                    <h3 className='text-xl font-semibold'>{item.name}</h3>
                    <p className='text-gray-800 mb-2 text-sm'>{item.ingredients.join(" + ")}</p>
                    <p >{item.price.toLocaleString()} تومان</p>

                   </div>
                   <button  onClick={() => handleAddToCart(item)} className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-amber-950 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors'>سفارش</button>
                
                
                
                </div>
            ) )}

        </div>
      
    </div>
  )
}
