import React from 'react'
import Header from './component/Header';
import Hero from './component/Hero';
import Banner from './component/Banner';
import Menu from './component/Menu';
import WhyUs from './component/WhyUs';
import CoffeeBanner from './component/CoffeeBanner'
import Customer from './component/Customer'
import NewsLetter from './component/NewsLetter';
import Footer from './component/Footer';
import CartModal from "./component/CartModal";
import { CartProvider } from "./context/CartContext";
import { Toaster } from 'react-hot-toast';


export default function App() {
  return (
     <CartProvider>
       <Header/>
       <Hero/>
       <Banner/>
       <Menu/>
       <Toaster position="top-center" reverseOrder={false} />
       <CartModal />
       <WhyUs/>
       <CoffeeBanner/>
       <Customer/>
       <NewsLetter/>
       <Footer/>

    </CartProvider>
  )
}


import "./App.css";



