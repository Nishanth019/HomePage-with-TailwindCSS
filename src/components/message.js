import React from 'react';
import { FiMessageSquare } from 'react-icons/fi';

const MessageIcon = () => {
  return (
    <div
    className='bg-stone-800 p-2  rounded-full border border-stone-800 cursor-pointer'
      style={{
        position: 'fixed',
        bottom: '90px',
        right: '35px',
        zIndex:1,
      }}
    >
      <FiMessageSquare size={22} color="#fff" />
    </div>
  );
};

export default MessageIcon;
