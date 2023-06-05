import React from 'react';
import image1 from '../assets/image1.avif';
import { FiArrowRight, FiHeart, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';

const Section1 = () => {
    return (

        <div className="flex-cols max-pt:pb-10 bg-stone-100 lg:flex-row-reverse lg:flex lg:h-[610px]">


            <div className="flex items-center justify-between w-screen pt:hidden  z-1 absolute text-white py-4 ">
                <div className="flex items-center pl-3">
                    <h1 className="font-bold text-xl">Aesop</h1>
                </div>
                <div className="flex items-center w-1/2 justify-around">
                    <FiSearch className=" text-2xl cursor-pointer" />
                    <FiHeart className="text-2xl  cursor-pointer" />
                    <FiShoppingCart className="text-2xl  cursor-pointer" />
                    <FiUser className="text-2xl  cursor-pointer" />
                </div>
            </div>


            <div className="z-0 lg:mt-[1px]  lg:flex-1 h-auto w-screen pt:h-[470px] md:h-[550px] lg:h-[610px] ">
                <img className=' lg:flex-1 object-cover w-full pt:h-[470px] md:h-[550px] lg:h-[610px]' src={image1} alt="image1" />
            </div>

            <div className=" lg:flex lg:px-0 lg:flex-1 pt:pt-20  pt:px-32 pt:py-52 lg:h-[610px]">
                <div className='hidden lg:block  lg:pl-9 lg:pt-3 font-semibold  text-4xl'>
                    Aēsop
                </div>
                <div className=" lg:px-20 lg:my-3   mx-4 my-10">
                    <p className='font-medium my-2 tracking-tight'>Supporting city skin</p>
                    <p className='text-2xl pt:text-3xl my-2 lg:text-3xl lg:py-2 max-pt:py-2'>Parsley Seed Anti-Oxidant Intense Serum</p>
                    <p className='font-medium my-1 lg:my-5 lg:pt-2'>Explore how this anti-oxidant-rich serum hydrates, replenishes and fortifies the skin via a suite of ingredients selected with urban dwellers in mind.</p>
                    <button className="  my-1 mt-5 w-full lg:w-auto flex justify-between border items-center space-x-7 p-3 sm:p-5   hover:bg-stone-800 hover:text-white">
                        <p className='text-left'>
                            Discover the formulation
                        </p>
                        <span className=""><FiArrowRight size={20} /></span>

                    </button>
                </div>
            </div>


        </div>
    );
};

export default Section1;
