import React from 'react';
import image8 from '../assets/image8.avif';
import { FiArrowRight } from 'react-icons/fi';

const Section3 = () => {
    return (
        <div className="flex-cols lg:mb-10 lg:mt-28 lg:flex-row lg:flex lg:h-[500px] ">

            <div className=" lg:flex lg:px-0 lg:mr-36  lg:ml-10  pt:pt-20  pt:px-32 pt:py-52 lg:h-[500px] lg:w-[400px] lg:pt-0 lg:pl-0">
                <div className=" lg:ml-20 lg:my-0   mx-4 my-10">
                    <p className='font-medium my-1 '>The Athenaeum</p>
                    <p className='text-2xl  lg:text-3xl my-3'>A guide to facial serums</p>
                    <p className='font-medium my-8'>A comprehensive guide to Aesop's plentiful offering of facial serums. Learn about these skin care formulations designed for different skin types. </p>
                    <button className="lg:mt-7 lg:p-4 my-1 mt-5 w-full lg:w-auto flex justify-between border items-center space-x-7 p-3 sm:p-5  border-red-900 hover:bg-stone-800 hover:text-white">
                         <p className='text-left'>
                        Learn more about serums 
                        </p>
                        <span className=""><FiArrowRight size={20} /></span>
                        </button>
                </div>
            </div>

            <div className=" max-lg:ml-10 lg:flex-1 h-auto w-screen pt:h-[470px] md:h-[550px] lg:h-[500px] ">
                <img className=' object-cover w-full pt:h-[470px] md:h-[550px] lg:h-[500px]' src={image8} alt="image1" />
            </div>

        </div>
    );
};

export default Section3;
