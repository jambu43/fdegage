import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='h-44 relative -mt-20' style={{ backgroundImage: "url('/tshilolo3.png')", backgroundSize: 'cover', backgroundPositionX: '20px',backgroundPositionY: '-20px'  }}>
      <Image src='/fdlogo.svg' alt='banner'  height={150} width={120} className='absolute mt-10 ml-6'/>
    </div>
  )
}

export default Header
