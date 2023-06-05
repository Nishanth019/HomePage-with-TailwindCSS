import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image2 from '../assets/image2.webp';
import image3 from '../assets/image3.webp';
import image4 from '../assets/image4.webp';
import image5 from '../assets/image5.webp';
import image6 from '../assets/image6.webp';
import image7 from '../assets/image7.webp';
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
                <p className='font-medium my-2 '>Parsley Seed Skin Care</p>
                <p className='text-2xl  my-2 '>Fortification of the highest order</p>
              </div>
              <div className=' '>
                <p className='font-medium  my-1 py-3'>
                  Our Parsley Seed Skin Care range provides potent doses of anti-oxidant rich ingredients in formulations suited to all skin types. They are especially recommended for those in urban environments, to fortify the skin against the damaging effects of free radicals.</p>
                <div className=" my-1 mt-5 w-full flex justify-start  items-center space-x-7 pt-5  cursor-pointer">
                  Explore the range

                  < FiArrowRight />
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className=" lg:hidden pt-32 w-96  flex-cols justify-center items-center ">
        <div className=' text-center'>
          <img src={image2} alt="image2" />
        </div>
        <div className=' text-center py-2' >
          <p className="hover:underline font-bold">Parsley Seed Anti-Oxidant Skin Care kit</p>
        </div>
        <div className=' text-center'>
          <p>A trio of Parsley Seed  staples</p>
        </div>
      </div>
        
      </div>
      <div className="pt-32 w-96  flex-cols justify-center items-center ">
        <div className=' text-center'>
          <img src={image2} alt="image2" />
        </div>
        <div className=' text-center py-2' >
          <p className="hover:underline font-bold">Parsley Seed Anti-Oxidant Skin Care kit</p>
        </div>
        <div className=' text-center'>
          <p>A trio of Parsley Seed  staples</p>
        </div>
      </div>

      <div className=" w-96    flex-cols justify-center items-center ">
        <div className=' text-center'>
          <img src={image3} alt="image2" />
        </div>
        <div className=' text-center py-2' >
          <p className="hover:underline font-bold">Parsley Seed Anti-Oxidant Skin Care kit</p>
        </div>
        <div className=' text-center'>
          <p>A trio of Parsley Seed  staples</p>
        </div>
      </div>

      <div className="w-96 pt-40 flex-cols justify-center items-center ">
        <div className=' text-center'>
          <img src={image4} alt="image2" />
        </div>
        <div className=' text-center py-2' >
          <p className="hover:underline font-bold">Parsley Seed Anti-Oxidant Skin Care kit</p>
        </div>
        <div className=' text-center'>
          <p>A trio of Parsley Seed  staples</p>
        </div>
      </div>

      <div className="w-96  flex-cols justify-center items-center ">
        <div className=' text-center'>
          <img src={image5} alt="image2" />
        </div>
        <div className=' text-center py-2' >
          <p className="hover:underline font-bold">Parsley Seed Anti-Oxidant Skin Care kit</p>
        </div>
        <div className=' text-center'>
          <p>A trio of Parsley Seed  staples</p>
        </div>
      </div>

      <div className="w-96  flex-cols justify-center items-center ">
        <div className=' text-center'>
          <img src={image6} alt="image2" />
        </div>
        <div className=' text-center py-2' >
          <p className="hover:underline font-bold">Parsley Seed Anti-Oxidant Skin Care kit</p>
        </div>
        <div className=' text-center'>
          <p>A trio of Parsley Seed  staples</p>
        </div>
      </div>

      <div className="w-96 pt-40 flex-cols justify-center items-center ">
        <div className=' text-center'>
          <img src={image7} alt="image2" />
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
