
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';


function Carousel({data}) {
  const myData = data.map(({image}) => image);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? myData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    console.log(newIndex);
    
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === myData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    console.log(currentIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[325px] w-full m-auto py-16 px-4 relative group sm:h-[780px]'>
      <div
        style={{ backgroundImage: `url(${myData[currentIndex]})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2
       bg-black/20 text-white cursor-pointer hover:text-cyan-500 ease-in duration-300'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2
       bg-black/20 text-white cursor-pointer hover:text-cyan-500 ease-in duration-300'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {myData.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled className='text-gray-800'/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;