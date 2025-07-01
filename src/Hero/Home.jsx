import React from 'react';
import { FiMail, FiMapPin } from 'react-icons/fi';
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaLinkedin } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import Marquee from "react-fast-marquee";
import cover from "../assets/WhatsApp Image 2025-07-01 at 11.09.11_893060b8.jpg";

function Home() {
  return (
    <div className="bg-white font-inter text-gray-800 sm:p-8 md:p-12 lg:p-16 flex flex-col items-center justify-center mt-[-30px]">
      {/* Header Section */}
      <header className="text-center mb-10 w-full max-w-4xl">
        <h1 className="text-4xl sm:text-5xl intext-1 font-bold text-gray-900 mb-2"> Mohammad Ikram </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-1">MERN stack Web Developer </h2>
        <p className="text-lg sm:text-xl text-gray-600">Based in Bangladesh</p>
      </header>

      {/* Main Content Area */}
      <main className="flex flex-col-reverse max-sm:flex-col lg:flex-row items-center lg:items-start justify-center w-full max-w-6xl gap-8 lg:gap-16">
        {/* Left Column */}
        <div className="flex flex-col space-y-8 text-left w-full lg:w-1/3 p-4">
          {/* Biography */}
          <section className='max-sm:hidden'>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Biography</h3>
            <p className="text-gray-700 leading-relaxed">
              Work for money and code for love! I'm Ikram, an MERN stack Web Developer based in Bangladesh
            </p>
          </section>

          {/* Contact */}
          <section className='max-sm:hidden'>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Contact</h3>
            <div className="flex items-center text-gray-700 mb-1">
              <FiMapPin size={16} className="mr-2 text-gray-500" />
              <span>Brahmanbaria, Bangladesh</span>
            </div>
            <div className="flex items-center text-gray-700 mb-1">
              <FiMail size={16} className="mr-2 text-gray-500" />
              <a href="mailto:islamikram357@gmail.com" className="hover:underline">
                islamikram357@gmail.com
              </a>
            </div>
            <div className="flex items-center text-gray-700">
              <FaLinkedin size={16} className="mr-2 text-gray-500" />
              <a href="https://www.linkedin.com/in/ikram-islam/">Ikram</a>
            </div>
          </section>

          {/* Services */}
          <section className='max-sm:hidden'>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Services</h3>
            <ul className="list-none p-0 m-0 text-gray-700">
              <li className="mb-1">Website Development</li>
              <li className="mb-1">Mobile Application Development</li>
              <li>Animation</li>
            </ul>
          </section>
        </div>

        {/* Center Image */}
        <div className="flex-shrink-0 relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-1/3 lg:h-auto lg:max-w-md flex items-center justify-center">
          <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-white">
            <img
              src={cover}
              alt="Mohammad Ikram"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-8 text-right w-full lg:w-1/3 p-4 max-sm:hidden">
          <section>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Years of Experience</h3>
            <p className="text-5xl font-bold text-gray-900">1.5</p>
          </section>
          <section>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Satisfaction Clients</h3>
            <p className="text-5xl font-bold text-gray-900">100%</p>
          </section>
          <section>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Clients Worldwide</h3>
            <p className="text-5xl font-bold text-gray-900">+20</p>
          </section>
          <section>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Projects Done</h3>
            <p className="text-5xl font-bold text-gray-900">48</p>
          </section>
        </div>
      </main>
   

     {/* Mobile */}

      <div className='md:hidden flex'>
         <div className="flex flex-col space-y-8 text-left w-full lg:w-1/3 p-4">
          {/* Biography */}
          <section className=''>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Biography</h3>
            <p className="text-gray-700 leading-relaxed">
              Work for money and code for love! I'm Ikram, an MERN stack Web Developer based in Bangladesh
            </p>
          </section>

          {/* Contact */}
          <section className=''>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Contact</h3>
            <div className="flex items-center text-gray-700 mb-1">
              <FiMapPin size={16} className="mr-2 text-gray-500" />
              <span>Brahmanbaria, Bangladesh</span>
            </div>
            <div className="flex items-center text-gray-700 mb-1">
              <FiMail size={16} className="mr-2 text-gray-500" />
              <a href="mailto:islamikram357@gmail.com" className="hover:underline">
                islamikram357@gmail.com
              </a>
            </div>
            <div className="flex items-center text-gray-700">
              <FaLinkedin size={16} className="mr-2 text-gray-500" />
              <a href="https://www.linkedin.com/in/ikram-islam/">Ikram</a>
            </div>
          </section>

          {/* Services */}
          <section className=''>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Services</h3>
            <ul className="list-none p-0 m-0 text-gray-700">
              <li className="mb-1">Website Development</li>
              <li className="mb-1">Mobile Application Development</li>
              <li>Animation</li>
            </ul>
          </section>
        </div>

        {/* /;; */}

        <div className="flex flex-col space-y-8 text-right w-full lg:w-1/3 p-4 ">
          <section>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Years of Experience</h3>
            <p className="text-3xl font-bold text-gray-900">1.5</p>
          </section>
          <section>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Satisfaction Clients</h3>
            <p className="text-3xl font-bold text-gray-900">100%</p>
          </section>
          <section>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Clients Worldwide</h3>
            <p className="text-3xl font-bold text-gray-900">+20</p>
          </section>
          <section>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Projects Done</h3>
            <p className="text-3xl font-bold text-gray-900">48</p>
          </section>
        </div>



      </div>
      {/* Footer Logos */}
      <footer className="mt-16 w-[40%] max-sm:w-full max-w-6xl flex flex-wrap justify-center items-center gap-6 sm:gap-10 border-t border-gray-200 pt-8">
        <Marquee>
          <p><FaHtml5 className='text-3xl mx-10' /></p>
          <p><FaCss3 className='text-3xl mx-10' /></p>
          <p><IoLogoJavascript className='text-3xl mx-10' /></p>
          <p><RiTailwindCssFill className='text-3xl mx-10' /></p>
          <p><FaReact className='text-3xl mx-10' /></p>
          <p><FaNodeJs className='text-3xl mx-10' /></p>
          <p><SiMongodb className='text-3xl mx-10' /></p>
        </Marquee>
      </footer>

      
    </div>
  );
}

export default Home;