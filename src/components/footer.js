import React from 'react'
import { FiArrowRight } from 'react-icons/fi';
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className="bg-zinc-800 text-white p-3 text-left tracking-tight">
                <div className="1 flex-cols justify-center items-center py-3  lg:hidden">
                    <p className="">Subscribe to Aesop communications</p>
                    <hr className="border border-gray-300 my-full mt-2" />
                    <div className="input-group my-3 ">
                        <input type="text" className="form-control bg-transparent" placeholder="Email address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary transparent" type="button" id="button-addon2"><FiArrowRight /></button>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='pb-2 pr-1'>
                            <input type="checkbox" />
                        </div>
                        <p> Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our <span className="underline">
                            privacy policy</span> . </p>
                    </div>


                </div>
                <div className='grid-cols-2 grid pt:grid-cols-3 lg:grid-cols-5'>
                    <div className='hidden lg:block lg:col-span-2 '>
                        <div className=" text-white p-3 text-left">
                            <div className="1 flex-cols justify-center items-center py-3">
                                <p className="">Subscribe to Aesop communications</p>
                                <hr className="border border-gray-300 my-full mt-2" />
                                <div className="input-group my-3 ">
                                    <input type="text" className="form-control bg-transparent" placeholder="Email address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary transparent" type="button" id="button-addon2"><FiArrowRight /></button>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='pb-2 pr-1'>
                                        <input type="checkbox" />
                                    </div>
                                    <p> Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our <span className="underline">
                                        privacy policy</span> . </p></div>

                            </div>
                        </div>
                    </div>
                    <div className="2 p-2">
                        <p className="p-2">Orders and support</p>
                        <hr className="border border-gray-300 my-full mt-2" />
                        <p className="p-2">Contact us</p>
                        <p className="p-2 flex">FAQs
                            <div className="pt-2 pl-1"><FaArrowUp size={13} style={{ transform: 'rotate(45deg)' }} /> </div> </p>
                        <p className="p-2 flex">Shipping  <div className="pt-2 pl-1"><FaArrowUp size={13} style={{ transform: 'rotate(45deg)' }} /> </div></p>
                        <p className="p-2 flex">Returns  <div className="pt-2 pl-1"><FaArrowUp size={13} style={{ transform: 'rotate(45deg)' }} /> </div> </p>
                        <p className="p-2">Order history</p>
                        <p className="p-2">Terms and conditions</p>
                    </div>
                    <div className="3 p-2">
                        <p className="p-2">Services</p>
                        <hr className="border border-gray-300 my-full mt-2" />
                        <p className="p-2">Live assistance</p>
                        <p className="p-2">Corporate gifts</p>
                        <p className="p-2">Facial Appointments</p>
                        <p className="p-2">Click and Collect</p>
                        <p className="p-2">Video consultation</p>
                    </div>
                    <div className="4 p-2">
                        <p className="p-2">Location preferences</p>
                        <hr className="border border-gray-300 my-full mt-2" />
                        <p className="p-2">Shipping:</p>
                        <p className="p-2 underline">Hong Kong SAR, China</p>
                        <p className="p-2">Language:</p>
                        <p className="p-2 underline">English</p>
                        <p className="p-2">繁體中文</p>
                    </div>
                    <div className="5 p-2 lg:col-span-2 ">
                        <p className="p-2">Sustainability</p>
                        <hr className="border border-gray-300 my-full mt-2" />
                        <p className="p-2">All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
                    </div>
                    <div className="6 p-2">
                        <p className="p-2">About</p>
                        <hr className="border border-gray-300 my-full mt-2" />
                        <p className="p-2">Our story</p>
                        <p className="p-2">Foundation</p>
                        <p className="p-2">Careers</p>
                        <p className="p-2">Privacy policy</p>
                        <p className="p-2">Accessibility</p>
                        <p className="p-2">Cookie Policy</p>
                    </div>

                    <div className="7 p-2 max-lg:hidden">
                        <p className="p-2 ">Social media  </p>
                        <hr className="border border-gray-300 my-full mt-2" />
                        <p className="p-2 flex">Instagram  <div className="pt-2 pl-1"><FaArrowUp size={13} style={{ transform: 'rotate(45deg)' }} /> </div></p>
                        <p className="p-2 flex">Twitter  <div className="pt-2 pl-1"><FaArrowUp size={13} style={{ transform: 'rotate(45deg)' }} /> </div></p>
                        <p className="p-2 flex">LinkedIn  <div className="pt-2 pl-1"><FaArrowUp size={13} style={{ transform: 'rotate(45deg)' }} /> </div></p>
                        <p className="p-2 flex">WeChat  <div className="pt-2 pl-1"><FaArrowUp size={13} style={{ transform: 'rotate(45deg)' }} /> </div></p>
                        <p className="p-2 flex">Weibo   <div className="pt-2 pl-1"><FaArrowUp size={13} style={{ transform: 'rotate(45deg)' }} /> </div></p>
                    </div>
                </div>
            </div>
            <hr className="border border-gray-300 my-full " />
            <div>
                <footer className="bg-zinc-800 text-white p-4 flex justify-between">
                    <div className="text-lg font-bold">© Aesop</div>
                    <div className="flex space-x-4 lg:hidden">
                        <a href="#" className="text-white ">
                            <AiFillInstagram size={24} />
                        </a>
                        <a href="#" className="text-white ">
                            <AiFillLinkedin size={24} />
                        </a>
                        <a href="#" className="text-white ">
                            <AiFillTwitterSquare size={24} />
                        </a>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer
