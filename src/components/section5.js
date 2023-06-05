import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Carousel2 from './Carousel2';
import { FiArrowRight } from 'react-icons/fi';

const Section5 = () => {
    return (
        <>
            <div className='flex pt-9 items-center lg:hidden   lg:bg-white'>
                <div className=" lg:ml-28 lg:my-3    mx-4 my-10">
                    <div className='pt:flex '>
                        <div className='pt:flex-1 pt:p-5 '>
                        <p className='font-medium my-2 '>For the home</p>
                        <p className='text-2xl pt:text-3xl my-2 lg:text-3xl lg:my-5'>Domestic pleasures</p>
                        </div>
                        <div className='pt:flex-1 '>
                        <p className='font-medium pt:font-normal pt:p-2 pt:pt-5 my-1 py-3 lg:my-5'>
                        Our range of aromatic formulations for the home are practical and pleasing in equal measure.</p>
                        <div className="lg:mt-7 lg:p-4 my-1 mt-5 w-full lg:w-auto flex justify-start  items-center space-x-7 pt-5 sm:p-5  cursor-pointer">
                        See all Home

                            < FiArrowRight />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='lg:pt-32 '>
                <Carousel2 />
            </div>

        </>
    )
}

export default Section5
