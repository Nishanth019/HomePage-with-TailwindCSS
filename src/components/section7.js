import React from 'react';
import image16 from '../assets/image16.jpg';
import { FiArrowRight } from 'react-icons/fi';

const Section7 = () => {
    return (
        <div className="flex-cols max-pt:pt-20 lg:mb-10 mt-28 lg:flex-row lg:flex lg:h-[500px] ">

            <div className="  pr-10  lg:flex-1 h-auto w-screen pt:h-[470px] md:h-[550px] lg:h-[500px] lg:pr-0 ">
                <img className=' object-fit w-full pt:h-[470px] md:h-[550px] lg:h-[500px]' src={image16} alt="image1" />
            </div>

            <div className=" lg:flex lg:px-0 lg:pr-10 lg:mx-10  pt:pt-20  pt:px-32  lg:h-[500px] lg:w-[550px] lg:pt-0 ">
                <div className=" lg:ml-20 lg:my-0   mx-4 my-10">
                    <p className='font-medium my-2 '>Tokens of appreciation</p>
                    <p className='text-2xl  lg:text-3xl my-3'>Corporate gifts</p>
                    <p className='font-medium my-8'>
                        Corporate gifts
                        Tokens of appreciation
                        Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery. </p>
                    <button className="lg:mt-7 lg:p-4 my-1 mt-5 w-full lg:w-auto flex justify-between border items-center space-x-7 p-3 sm:p-5  border-red-900 hover:bg-stone-800 hover:text-white">
                        <p className='text-left'>
                            Learn more about this service
                        </p>
                        <span className=""><FiArrowRight size={20} /></span>

                    </button>
                </div>
            </div>



        </div>
    );
};

export default Section7;
