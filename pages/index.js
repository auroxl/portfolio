import Head from 'next/head';
import { useState } from 'react';
import {SiTailwindcss} from 'react-icons/si';
import {
  AiFillTwitterCircle,
  AiFillLinkedin, 
  AiFillYoutube,
  AiFillGithub,}
from 'react-icons/ai';
import { 
  DiHtml5,
  DiJsBadge,
  DiCss3,
  DiBootstrap,
  DiReact,
  DiPhp,
  DiWordpress,
 }
from "react-icons/di";
import Image from "next/image";
import jg from '../public/jg-image.png';
import Keen from '/components/Keen';
import BookedFinancial from '/components/BookedFinancial';
import Methodical from '/components/Methodical';
import Byers from '/components/Byers';


export default function Home() {

  const [active, setActive] = useState("Keen");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ""}>
      <Head>
        <title>Jonathon L. Griffin Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://dev.jlgriffin.me/favicon1.png" />
      </Head>
      <main className=' bg-gray-50 px-5  md:px-15 lg:px-20'>
        <section className=''>
          <nav className=" py-10 mb-12 flex justify-between">
            <h1 className=' text-xl font-semibold rounded-full shadow-lg shadow-gray-300 p-4'>Jonathon Griffin</h1>
            <ul className=' flex items-center'>              
              <li><a className=' bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg shadow-gray-300 ml-8 font-semibold hover:text-cyan-500 ease-in duration-300'
               href="https://dev.jlgriffin.me/Jonathon_Griffin_Resume.pdf" target="_blank" rel="noreferrer">Resume</a></li>
            </ul>
          </nav>
          <div className='flex flex-wrap'>
            <div className='text-center lg:text-left lg:basis-3/6 p-10 '>
              <h2 className='text-6xl font-semibold text-gray-800'>Hi, my name is</h2>
              <h2 className='text-6xl py-2 text-gray-800 font-semibold'>Jonathon Griffin</h2>
              <h3 className='text-4xl py-1 font-semibold text-gray-800'>A <span className='text-cyan-500'>Front-End </span>
               Web Developer</h3>
              <p className='text-2xl py-5 leading-2 text-gray-700 font-semibold'>
                Specializing in building experiences centered around WordPress while currently exploring all things React.
              </p>
              <div className='text-3xl flex text-gray-700 max-w-[125px] justify-center mx-auto lg:mx-0'>
                <div className='rounded-full shadow-lg shadow-gray-300 p-4 cursor-pointer hover:scale-105 hover:text-cyan-500 ease-in duration-300'>
                  <a href="https://www.linkedin.com/in/jonathon-griffin-79641a152/" target='_blank' rel="noreferrer"><AiFillLinkedin /></a>
                </div>  
                <div className='rounded-full shadow-lg shadow-gray-300 mx-2 p-4 cursor-pointer hover:scale-105 hover:text-cyan-500 ease-in duration-300'>
                  <a href="https://github.com/auroxl/" target='_blank' rel="noreferrer"><AiFillGithub /></a>
                </div> 
              </div>
            </div>
            
            <div className='lg: basis-2/6 mx-auto my-2 '>
              <Image src={jg} alt='Jonathon Griffin'/>
            </div>
          </div>
        </section>


        <section>
          <div className='mt-5 text-center'>
            <h3 className='text-4xl py-1 font-semibold text-gray-800'>
              Portfolio
            </h3>
            <p className='text-2xl py-5 leading-2 text-gray-700 font-semibold w-3/4 mx-auto'>
              Showcasing a few companies I have helped. Usually with a complete website redesign via WordPress. I have had the pleasure to work with a variety of people 
              and companies existing in different industries. From ground-up development to consultations, it has been a great journey.
            </p>
            <div>
            <button
             className= {active === "Keen" ? 'text-cyan-500 rounded-full shadow-lg shadow-gray-300 mx-2 p-4 font-semibold'
              : 'rounded-full shadow-lg shadow-gray-300 mx-2 p-4 cursor-pointer hover:scale-105 hover:text-cyan-500 ease-in duration-300 font-semibold' }
             onClick= {() => setActive("Keen")} >
              Keen Coverage
             </button>
              <button
              className= {active === "Byers" ? 'text-cyan-500 rounded-full shadow-lg shadow-gray-300 mx-2 p-4 font-semibold'
              : 'rounded-full shadow-lg shadow-gray-300 mx-2 p-4 cursor-pointer hover:scale-105 hover:text-cyan-500 ease-in duration-300 font-semibold' }
              onClick= {() => setActive("Byers")} >
                Byers Properties
              </button>
              <button
             className= {active === "Methodical" ? 'text-cyan-500 rounded-full shadow-lg shadow-gray-300 mx-2 p-4 font-semibold'
              : 'rounded-full shadow-lg shadow-gray-300 mx-2 p-4 cursor-pointer hover:scale-105 hover:text-cyan-500 ease-in duration-300 font-semibold' }
             onClick= {() => setActive("Methodical")} >
              Methodical Platforms
             </button>
             <button
              className= {active === "BookedFinancial" ? 'text-cyan-500 rounded-full shadow-lg shadow-gray-300 mx-2 p-4 font-semibold'
              : 'rounded-full shadow-lg shadow-gray-300 mx-2 p-4 cursor-pointer hover:scale-105 hover:text-cyan-500 ease-in duration-300 font-semibold' }
              onClick= {() => setActive("BookedFinancial")} >
                Booked Financial
              </button>
            </div>
            <div className='w-full min-h-screen rounded-2xl shadow-lg shadow-gray-300 m-2 p-4'>              
              {active === "Keen" && <Keen />}
              {active === "Byers" && <Byers />}
              {active === "Methodical" && <Methodical />}
              {active === "BookedFinancial" && <BookedFinancial />}
            </div>            
          </div>
        </section>
        <section>
          <div className='mt-10 pb-10 text-center'>
            <h4 className='text-2xl text-gray-700'>
              I am also a top-rated Freelancer on Upwork if you&apos;d like to
              <span className='text-cyan-500'><a href="https://www.upwork.com/freelancers/~01131d9021bc943def" target="_blank" rel="noreferrer"> visit</a></span>.
            </h4>
            <h3 className='text-4xl py-1 mt-5 font-semibold text-gray-800'>
              Technologies I use frequently
            </h3>
            <div className='text-5xl flex flex-wrap text-gray-700 w-3/4 justify-center mx-auto m-4'>
                <div className='md:basis-1/3 rounded-full shadow-lg shadow-gray-300 m-4 p-4 cursor-pointer hover:scale-105 hover:text-cyan-500 ease-in duration-300'>
                  <DiHtml5 className='mx-auto'/>
                  <h4 className='text-xl hidden md:block'>HTML</h4>
                </div>  
                <div className='md:basis-1/3 rounded-full shadow-lg shadow-gray-300 m-4 p-4 cursor-pointer hover:scale-105  hover:text-cyan-500 ease-in duration-300'>
                  <DiJsBadge className='mx-auto'/> 
                  <h4 className='text-xl hidden md:block'>JavaScript</h4>
                </div> 
                <div className='md:basis-1/3 rounded-full shadow-lg shadow-gray-300 m-4 p-4 cursor-pointer hover:scale-105 hover:text-cyan-500 ease-in duration-300'>
                  <DiCss3 className='mx-auto'/>
                  <h4 className='text-xl hidden md:block'>CSS</h4>
                </div> 
                <div className='md:basis-1/3 rounded-full shadow-lg shadow-gray-300 m-4 p-4 cursor-pointer hover:scale-105 hover:text-cyan-500 ease-in duration-300'>
                  <DiReact className='mx-auto'/>
                  <h4 className='text-xl hidden md:block'>ReactJS</h4>
                </div> 
                <div className='md:basis-1/3 rounded-full shadow-lg shadow-gray-300 m-4 p-4 cursor-pointer hover:scale-105 hover:text-cyan-500 ease-in duration-300'>
                  <DiBootstrap className='mx-auto'/>
                  <h4 className='text-xl hidden md:block'>Bootstrap</h4>
                </div> 
                <div className='md:basis-1/3 rounded-full shadow-lg shadow-gray-300 m-4 p-4 cursor-pointer hover:scale-105 hover:text-cyan-500 ease-in duration-300'>
                  <SiTailwindcss className='mx-auto'/>
                  <h4 className='text-xl hidden md:block'>TailwindCSS</h4>
                </div> 
                <div className='md:basis-1/3 rounded-full shadow-lg shadow-gray-300 m-4 p-4 cursor-pointer hover:scale-105 hover:text-cyan-500 ease-in duration-300'>
                  <DiWordpress className='mx-auto'/>
                  <h4 className='text-xl hidden md:block'>WordPress</h4>
                </div> 
                <div className='md:basis-1/3 rounded-full shadow-lg shadow-gray-300 m-4 p-4 cursor-pointer hover:scale-105 hover:text-cyan-500 ease-in duration-300'>
                  <DiPhp className='mx-auto'/>
                  <h4 className='text-xl hidden md:block'>PHP</h4>
                </div> 
           </div>
           <div className='mt-10'>
            <h4 className='text-2xl text-gray-700'>
                If you&apos;d like to work together, you can contact of me here at: 
                <span className='text-cyan-500'><a href="mailto:tiejgriffin@gmail.com" target="_blank" rel="noreferrer"> tiejgriffin@gmail.com</a></span>.
              </h4>
           </div>
          </div>
        </section>
      </main>
    </div>
  )
}
