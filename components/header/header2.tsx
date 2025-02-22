import Image from 'next/image'
import React from 'react'

function Header2() {
  return (
    <div className='h-44 relative'>
      <Image src='/fdlogo.svg' alt='banner'  height={150} width={120} className='absolute mt-10 ml-6'/>
    </div>
  )
}

export default Header2
