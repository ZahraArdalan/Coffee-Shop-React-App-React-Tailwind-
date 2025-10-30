import React from 'react'
import footer from '../assets/img/fotter.png'

export default function Footer() {
  return (
    <footer className="relative">
      {/* فوتر با گرادیانت: از بالا تیره‌تر به پایین روشن‌تر */}
      <div className=" mt-10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="text-amber-950 text-xl md:text-2xl mt-6 font-bold">کافه روز</h3>
              <p className="text-amber-950 mt-2 text-sm">
                لذتِ قهوه‌ با دانه‌های تازه‌برشت — هر روز یک فنجان خاطره‌ساز.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="text-amber-950 text-sm">آدرس:تهران، خیابان قهوه </div>
              <div className="text-amber-950 text-sm">تلفن: ۰۲۱-۱۲۳۴۵۶۷</div>
            </div>
          </div>

          <div className="mt-8 border-t border-amber-950 pt-6 flex flex-col sm:flex-row justify-between items-center text-amber-950 text-sm">
            <div>© {new Date().getFullYear()} کافه روز — تمامی حقوق محفوظ است</div>
            <div className="flex gap-4 mt-3 sm:mt-0">
              <a className="hover:underline" href="#">اینستاگرام</a>
              <a className="hover:underline" href="#">تلگرام</a>
              <a className="hover:underline" href="#">تماس</a>
            </div>
          </div>
        </div>
        
      </div>
      {/* تصویر پایین فوتر */}
        <div className="absolute mt-28  bottom-[-8vh] left-0 w-full  lg:bottom-[-40vh] ">
          <img
            src={footer}
            alt="footer decorative"
            className="flex justify-center w-full h-auto object-contain "
          />
        </div>
    </footer>
  )
}
