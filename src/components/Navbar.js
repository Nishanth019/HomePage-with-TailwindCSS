import React, { useEffect, useState } from 'react';
import Header2 from './header2';
import { RiSearchLine } from 'react-icons/ri';

const Navbar = () => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(false)

    const handleScroll = () => {
        const currentScrollPos = window.scrollY
        if(window.scrollY<180){
            setVisible(false)
        }
        if (currentScrollPos > prevScrollPos) {
            setVisible(false)
        } else if(window.scrollY > 180) {
            setVisible(true)
        }

        setPrevScrollPos(currentScrollPos)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <>
            <div className={`w-full flex flex-col sm:flex-row items-center justify-between h-20 bg-neutral-700 
            max-pt:hidden  ${visible ? 'bg-white border  text-black  top-0 z-10  fixed' : 'text-white'} `}>
                <div className="ml-7 p-1 items-center sm:ml-0 text-sm flex   sm:mb-0">
                    <button className="mx-3 max-xs:hidden"><b>Skin Care</b></button>
                    <button className="mx-3 max-xs:hidden"><b>Body & Hand</b></button>
                    <button className="mx-3 max-xs:hidden"><b>Hair</b></button>
                    <button className="mx-3 max-xs:hidden"><b>Fragrance</b></button>
                    <button className="mx-3 max-xs:hidden"><b>Home</b></button>
                    <button className="mx-3 max-xs:hidden"><b>Kits & Travel</b></button>
                    <button className="mx-3 "><b>Gifts</b></button>
                    <button className="mx-3 "><b>Read</b></button>
                    <button className="mx-3 "><b>Stores</b></button>
                    <button><RiSearchLine className=" mx-3 mt-1" size={20} /></button>
                </div>
                <div className="flex  mr-7">
                    <button className="mx-3 "><b>Log in</b></button>
                    <button className="mx-3 "><b>Cabinet</b></button>
                    <button className="mx-3 "><b>Cart</b></button>
                </div>
            </div>
            
        </>
    );
};

export default Navbar;
