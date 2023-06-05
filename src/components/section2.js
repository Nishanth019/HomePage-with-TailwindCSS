import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Carousel1 from './Carousel1';
import { FiArrowRight } from 'react-icons/fi';

const Section2 = () => {
    return (
        <>
            <div className='flex pt-9 items-center lg:hidden   lg:bg-white'>
                <div className=" lg:ml-28 lg:my-3    mx-4 my-10">
                    <div className='pt:flex '>
                        <div className='pt:flex-1 pt:p-5 '>
                        <p className='font-medium my-2 '>Parsley Seed Skin Care</p>
                        <p className='text-2xl pt:text-3xl my-2 lg:text-3xl lg:my-5'>Fortification of the highest order</p>
                        </div>
                        <div className='pt:flex-1 '>
                        <p className='font-medium pt:font-normal pt:p-2 pt:pt-5 my-1 py-3 lg:my-5'>
                            Our Parsley Seed Skin Care range provides potent doses of anti-oxidant rich ingredients in formulations suited to all skin types. They are especially recommended for those in urban environments, to fortify the skin against the damaging effects of free radicals.</p>
                        <div className="lg:mt-7 lg:p-4 my-1 mt-5 w-full lg:w-auto flex justify-start  items-center space-x-7 pt-5 sm:p-5  cursor-pointer">
                            Explore the range

                            < FiArrowRight />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='lg:pt-32 '>
                <Carousel1 />
            </div>

        </>
    )
}

export default Section2
