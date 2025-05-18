import React from 'react'
import logo from '../assets/logo.jpg'

function Footer() {
  return (
    <footer className=' border-t border-border mt-22'>
        <div className='container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 mx-auto px-6'>
            <div className='flex flex-col items-center gap-4 md:flex-row md:px-0 px-8 md:gap-2'>
                <img src={logo} alt="" width={34} height={36}/>
                <p className='text-sm md:text-left leading-loose'>Copyright © 2025</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
