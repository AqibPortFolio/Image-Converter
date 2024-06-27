import React from 'react';
import logo from "../assets/test.png"
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="bg-gray-100">
      <section className="cover bg-blue-teal-gradient relative bg-blue-400 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex items-center h-full ">
        <div className=" absolute top-0 left-0 z-0 w-full h-full">
          <img src={logo} alt="" className="w-full h-full object-cover opacity-50" />
        </div>
        <div className="lg:w-3/4 xl:w-2/4 relative z-10 h-80 lg:mt-16">
          <div>
            <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">Seeing the World Differently, Learning Equally</h1>
            <p className="text-blue-100 text-xl md:text-2xl leading-snug mt-4">Welcome to our community dedicated to Stargardt Disease: Empowering Vision, Enabling Learning.</p>
            <Link to="/ImgConverter"  className="px-8 py-3 bg-blue-500 text-white rounded inline-block mt-8 font-semibold hover:bg-teal-500">Get Started</Link>
            <button  className="px-8 py-3 ms-3 bg-teal-500 text-white rounded inline-block mt-8 font-semibold hover:bg-blue-500" onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })} >Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
