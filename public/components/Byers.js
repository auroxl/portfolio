import Carousel from './Carousel';
import Image from "next/image";
import byersdata from '../data/byersdata';
import byersLogo from '/public/byers-logo.png';

const data = byersdata;
const Byers = () =>{
    return(
        <div className='flex flex-wrap text-left'>
            <div className='lg:basis-1/6 xl:basis-2/6 p-10 '>
              <Image src={byersLogo} className='w-20 h-auto' alt='Byers Properties, INC'/>  
              <h2 className='text-6xl font-semibold text-gray-800'>Byers Properties, INC</h2>
              <p className='text-2xl py-5 leading-2 text-gray-700 font-semibold'>
              A real estate company who prides themselves on excellence in customer service.
              </p>
              <p className='font-semibold text-gray-700 py-3'>
                A company found through Upwork, one of the partners had no love for their previous site. Wanting a more modern, clean, and bright web presence, I
                quickly worked to produce something that would be a good fit for their new aesthetic. Was a little bit more on a timeline for this, but luckily for me,
                they had everything they wanted to be presented ready and knew exactly what kind of feel they were going for.
              </p>
              <div className='flex text-gray-700'>
                <div className='font-semibold rounded-full shadow-lg shadow-gray-300 p-4 cursor-pointer hover:scale-105 hover:text-cyan-500 ease-in duration-300'>
                  <a href="https://www.byersproperties.net/" target="_blank" rel="noreferrer">Visit Site</a>
                </div>  
              </div>
            </div>
            
            <div className='basis-full lg:basis-3/6 xl:basis-4/6 mx-auto my-2 '>
                
                <Carousel data={data} />
            </div>
          </div>
    );
}

export default Byers;