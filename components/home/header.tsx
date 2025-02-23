import Image from 'next/image'
import Logo from '@/public/fdlogo.svg'
import Link from 'next/link'


function Header() {
  return (
    <div className='relative bg-primary min-h-[150px] lg:min-h-[450px]  '>
      <Image src={'/tshilolo3.png'}  fill alt='banner' className='object-cover max-w-full left-0'/>
      <div className='container relative z-20'>
        <Link href={'/'}>
        <Image src={Logo} width={120}  alt='logo' />
        </Link>  
      </div>
      

    </div>
    
  )
}

export default Header
