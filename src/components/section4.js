import React from 'react';
import image9 from '../assets/image9.avif';
import { FiArrowRight } from 'react-icons/fi';

const Section4 = () => {
    return (
        <div className="flex-cols max-lg:mb-0 lg:mb-10 mt-28 lg:flex-row lg:flex lg:h-[500px] ">

            <div className="  pr-10  lg:flex-1 h-auto w-screen pt:h-[470px] md:h-[550px] lg:h-[500px] lg:pr-0 ">
                <img className=' object-fit w-full pt:h-[470px] md:h-[550px] lg:h-[500px]' src={image9} alt="image1" />
            </div>

            <div className=" lg:flex lg:px-0 lg:pr-10 lg:mx-10 lg:pl-3   pt:pt-20  pt:px-32  lg:h-[500px] lg:w-[550px] lg:pt-0 ">
                <div className=" lg:ml-20 lg:my-0   mx-4 my-10">
                    {/* <p className='font-medium my-2 '>The Athenaeum</p> */}
                    <p className='text-2xl  lg:text-3xl my-5'>Post-Poo Drops has returned</p>
                    <p className='font-medium my-8'>Here to make the malodorous melodious once again. Dispense this favoured formulation into the toilet bowl after flushing to effectively mask disagreeable odours.</p>
                    <button className="lg:mt-7 lg:p-4 my-1 mt-5 w-full lg:w-auto flex justify-between border items-center space-x-7 p-3 sm:p-5  border-red-900 hover:bg-stone-800 hover:text-white">
                        <p className='text-left'>
                            Discover Post-Poo Drops
                        </p>
                        <span className=""><FiArrowRight size={20} /></span>

                    </button>
                </div>
            </div>



        </div>
    );
};

export default Section4;
