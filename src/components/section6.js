import React from 'react';
import video1 from '../assets/video1.mp4';
import { FiArrowRight } from 'react-icons/fi';

const Section6 = () => {
    return (
        <div className="flex-cols mt-10 lg:mb-10 lg:mt-28 lg:flex-row lg:flex lg:h-[500px] ">

            <div className=" lg:flex lg:px-0 lg:mr-36 lg:ml-10   pt:pt-20  pt:px-32 pt:py-5 lg:h-[500px] lg:w-[400px] lg:pt-0 lg:pl-0">
                <div className=" lg:ml-20 lg:my-0   mx-4 my-10">
                    <p className='font-medium my-2 '>A helping hand</p>
                    <p className='text-2xl  lg:text-3xl my-3'>The Gift Finder</p>
                    <p className='font-medium my-8'>A tool that allows for swift and easy navigation of our range, which can now be sorted according to a variety of playful personal criteria. </p>
                    <button className="lg:mt-7 lg:p-4 my-1 mt-5 w-full lg:w-auto flex justify-between border items-center space-x-7 p-3 sm:p-5  border-red-900 hover:bg-stone-800 hover:text-white">
                        <p className='text-left'>
                            Discover the Gift Finder
                        </p>
                        <span className=""><FiArrowRight size={20} /></span>

                    </button>
                </div>
            </div>

            <div className=" max-lg:ml-10 lg:flex-1 h-[320px] w-screen pt:h-[470px] md:h-[550px] lg:h-[500px] ">
                <video className="object-cover w-full h-[470px] md:h-[550px] lg:h-[500px]" loop autoplay>
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

        </div>
    );
};

export default Section6;
