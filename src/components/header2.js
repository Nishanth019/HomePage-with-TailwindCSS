import React from 'react';
import { RiSearchLine } from 'react-icons/ri';

const Header2 = () => {
  return (
    <>
    <div className="w-full flex flex-col sm:flex-row items-center justify-between h-20 bg-neutral-700 max-xs:hidden">
      <div className="ml-7 sm:ml-0 text-sm flex text-white mb-4 sm:mb-0">
        <button className="mx-3 max-lg:hidden"><b>Skin Care</b></button>
        <button className="mx-3 max-lg:hidden"><b>Body & Hand</b></button>
        <button className="mx-3 max-lg:hidden"><b>Hair</b></button>
        <button className="mx-3 max-lg:hidden"><b>Fragrance</b></button>
        <button className="mx-3 max-lg:hidden"><b>Home</b></button>
        <button className="mx-3 max-lg:hidden"><b>Kits & Travel</b></button>
        <button className="mx-3 "><b>Gifts</b></button>
        <button className="mx-3 "><b>Read</b></button>
        <button className="mx-3 "><b>Stores</b></button>
        <button><RiSearchLine className=" mx-3 mt-1" size={20} /></button>
      </div>
      <div className="flex text-white mr-7">
        <button className="mx-3 "><b>Log in</b></button>
        <button className="mx-3 "><b>Cabinet</b></button>
        <button className="mx-3 "><b>Cart</b></button>
      </div>
    </div>
  
    </>
  );
};

export default Header2;
