import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='h-44 relative -mt-20' style={{ backgroundImage: "url('/tshilolo3.png')", backgroundSize: 'cover', backgroundPositionX: '0px' }}>
      <Image src='/fdlogo.svg' alt='banner'  height={150} width={120} className='absolute mt-16 ml-6'/>
    </div>
  )
}

export default Header
