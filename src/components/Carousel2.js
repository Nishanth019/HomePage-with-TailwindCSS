import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image10 from '../assets/image10.avif';
import image11 from '../assets/image11.webp';
import image12 from '../assets/image12.webp';
import image13 from '../assets/image13.webp';
import image14 from '../assets/image14.webp';
import image15 from '../assets/image15.webp';
import { FiArrowRight } from 'react-icons/fi';

const Carousel1 = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive}>
      <div>
        <div className=" pl-16 hidden lg:block">
          <div className="   mx-4 my-10">
            <div >
              <div>
                <p className='font-medium my-2 '>For the home</p>
                <p className='text-2xl  my-2 '>Domestic pleasures</p>
              </div>
              <div className=' '>
                <p className='font-medium  my-1 py-3'>
                  Our range of aromatic formulations for the home are practical and pleasing in equal measure.</p>
                <div className=" my-1 mt-5 w-full flex justify-start  items-center space-x-7 pt-5  cursor-pointer">
                  See all Home
                  < FiArrowRight />
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className=" lg:hidden pt-14 w-96  flex-cols justify-center items-center ">
        <div className=' text-center'>
          <img src={image10} alt="image2" />
        </div>
        <div className=' text-center py-2' >
          <p className="hover:underline font-bold">Parsley Seed Anti-Oxidant Skin Care kit</p>
        </div>
        <div className=' text-center'>
          <p>A trio of Parsley Seed  staples</p>
        </div>
      </div>
        
      </div>
      <div className="pt-14 w-96  flex-cols justify-center items-center ">
        <div className=' text-center'>
          <img src={image10} alt="image2" />
        </div>
        <div className=' text-center py-2' >
          <p className="hover:underline font-bold">Parsley Seed Anti-Oxidant Skin Care kit</p>
        </div>
        <div className=' text-center'>
          <p>A trio of Parsley Seed  staples</p>
        </div>
      </div>

      <div className=" w-96  pt-24  flex-cols justify-center items-center ">
        <div className=' text-center'>
          <img src={image11} alt="image2" />
        </div>
        <div className=' text-center py-2' >
          <p className="hover:underline font-bold">Parsley Seed Anti-Oxidant Skin Care kit</p>
        </div>
        <div className=' text-center'>
          <p>A trio of Parsley Seed  staples</p>
        </div>
      </div>

      <div className="w-96 pt-24 flex-cols justify-center items-center ">
        <div className=' text-center'>
          <img src={image12} alt="image2" />
        </div>
        <div className=' text-center py-2' >
          <p className="hover:underline font-bold">Parsley Seed Anti-Oxidant Skin Care kit</p>
        </div>
        <div className=' text-center'>
          <p>A trio of Parsley Seed  staples</p>
        </div>
      </div>

      <div className="w-96 pt-64  flex-cols justify-center items-center ">
        <div className=' text-center'>
          <img src={image13} alt="image2" />
        </div>
        <div className=' text-center py-2' >
          <p className="hover:underline font-bold">Parsley Seed Anti-Oxidant Skin Care kit</p>
        </div>
        <div className=' text-center'>
          <p>A trio of Parsley Seed  staples</p>
        </div>
      </div>

      <div className="w-96 pt-20 flex-cols justify-center items-center ">
        <div className=' text-center'>
          <img src={image14} alt="image2" />
        </div>
        <div className=' text-center py-2' >
          <p className="hover:underline font-bold">Parsley Seed Anti-Oxidant Skin Care kit</p>
        </div>
        <div className=' text-center'>
          <p>A trio of Parsley Seed  staples</p>
        </div>
      </div>



    </Carousel>
  );
};

export default Carousel1;
