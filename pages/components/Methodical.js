import Carousel from './Carousel';
import Image from 'next/image';
import methodicalData from '../data/methodicaldata';
import methodicalLogo from '/public/methodical-logo.png';


const data = methodicalData;
const Methodical = () =>{
    return(
        <div className='flex flex-wrap text-left'>
            <div className='lg:basis-1/6 xl:basis-2/6 p-10 '>
              <Image src={methodicalLogo} className='w-20 h-auto' />  
              <h2 className='text-6xl font-semibold text-gray-800'>Methodical Platforms</h2>
              <p className='text-2xl py-5 leading-2 text-gray-700 font-semibold'>
              Methodical Platforms is Software Research, Design, & Development with your brilliant ideas in mind.
              </p>
              <p className='font-semibold text-gray-700 py-3'>
                A repeat client, I was approached by them with a plethora of inspirational sites they wanted to use for their new startup. Somewhat of a journey 
                considering they did not have a logo or a desired color palette, I opted for going with bigger font sizes and blockier elements. They were very in love with 
                jumbo menus, so I made sure to include that as well.
              </p>
              <div className='flex text-gray-700'>
                <div className='font-semibold rounded-full shadow-lg shadow-gray-300 p-4 cursor-pointer hover:scale-105 hover:text-cyan-500 ease-in duration-300'>
                  <a href="https://methodicalplatforms.com/" target="_blank">Visit Site</a>
                </div>  
              </div>
            </div>
            
            <div className='basis-full lg:basis-3/6 xl:basis-4/6 mx-auto my-2 '>
                
                <Carousel data={data} />
            </div>
          </div>
    );
    }
export default Methodical;