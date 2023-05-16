import Carousel from './Carousel';
import Image from "next/image";
import keendata from '../data/keendata';
import keenLogo from '/public/keen-logo.png';

const data = keendata;
const Keen = () =>{
    return(
        <div className='flex flex-wrap text-left'>
            <div className='lg:basis-1/6 xl:basis-2/6 p-10 '>
              <Image src={keenLogo} className='w-20 h-auto' alt='Keen Coverage' />  
              <h2 className='text-6xl font-semibold text-gray-800'>Keen Coverage</h2>
              <p className='text-2xl py-5 leading-2 text-gray-700 font-semibold'>
              A  full service brokerage firm that handles complicated insurance needs.
              </p>
              <p className='font-semibold text-gray-700 py-3'>
                For Keen Coverage, I was originally brought on to oversee their EZLynx website, which is an insurance agency solution. After a few months, they decided to go
                 a more customizeable route and tasked me with developing a website that can scale with their growth/needs. They had a make-shift color scheme already, so I 
                 put together a rough draft based on a few other sites they had mentioned before. After some back n forth, this is what we arrived at.
              </p>
              <div className='flex text-gray-700'>
                <div className='font-semibold rounded-full shadow-lg shadow-gray-300 p-4 cursor-pointer hover:scale-105 hover:text-cyan-500 ease-in duration-300'>
                  <a href="https://keencoverage.com" target="_blank" rel="noreferrer">Visit Site</a>
                </div>  
              </div>
            </div>
            
            <div className='basis-full lg:basis-3/6 xl:basis-4/6 mx-auto my-2 '>
                
                <Carousel data={data} />
            </div>
          </div>
    );
}

export default Keen;