import React from 'react'
import mainLogo from '../assets/svg/mainLogo.svg'
const Header = () => {
  return (
    <div> 
        <div className='w-full h-24 border border-solid border-gray-300 items-center flex justify-center'>
             <img src={mainLogo} style={{height:" 1.7rem"}} alt="mainlogo" />
        </div>
    </div>
  )
}

export default Header