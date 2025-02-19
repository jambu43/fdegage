import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='h-72 relative -mt-20' style={{ backgroundImage: "url('/tshilolo2.png')", backgroundSize: 'cover', }}>
      <Image src='/fdlogo.svg' alt='banner'  height={150} width={120} className='absolute mt-24 ml-6'/>
    </div>
  )
}

export default Header
