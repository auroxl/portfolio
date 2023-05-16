import Carousel from '/components/Carousel';
import Image from "next/image";
import bookeddata from '/public/data/bookeddata';
import bookedLogo from '/public/booked-logo.png';

const data = bookeddata;
const BookedFinancial = () =>{
    return(
        <div className='flex flex-wrap text-left'>
            <div className='lg:basis-1/6 xl:basis-2/6 p-10 '>
              <Image src={bookedLogo} className='w-20 h-auto' alt='Booked Financial' />  
              <h2 className='text-6xl font-semibold text-gray-800'>Booked Financial</h2>
              <p className='text-2xl py-5 leading-2 text-gray-700 font-semibold'>
              An online accounting service that specializes in Tax and Bookkeeping for individuals and small to medium-sized businesses.
              </p>
              <p className='font-semibold text-gray-700 py-3'>
                Booked Financial had an extremely outdated website that was in need of a complete overhaul. They wanted to have a hand in the design process,
                so I worked with them as much as possible with putting together page flow, site map, colors and typography. 
              </p>
              <div className='flex text-gray-700'>
                <div className='font-semibold rounded-full shadow-lg shadow-gray-300 p-4 cursor-pointer hover:scale-105 hover:text-cyan-500 ease-in duration-300'>
                  <a href="https://bookedfinancial.com/" target="_blank"  rel="noreferrer">Visit Site</a>
                </div>  
              </div>
            </div>
            
            <div className='basis-full lg:basis-3/6 xl:basis-4/6 mx-auto my-2 '>
                
                <Carousel data={data} />
            </div>
          </div>
    );
}

export default BookedFinancial;