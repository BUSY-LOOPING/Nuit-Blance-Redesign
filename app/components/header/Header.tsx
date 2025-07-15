import React from 'react';
import {Logo} from './';
const Header = () => {
  return (
    <div className='flex items-center justify-between text-black p-4 shadow-md'>
        <Logo/>
    </div>
  )
}

export default Header
