import React from 'react'

function Banner() {
  return (
    <section className='flex flex-col px-8 py-10 container gap-10 relative mx-auto items-center md:py-[68px]'>
        <div className='flex flex-col justify-center self-stretch bg-[#150e22] gap-9 p-6 lg:flex-row lg:justify-between lg:p-10'>
            <div className='flex flex-col gap-2'>
                <h2 className='font-medium text-3xl'>We've Built the Future of Data Centers</h2>
                <p className='text-xl font-medium text-[#71717A]'>Contact our team for a demo</p>
            </div>
            <div className='grid grid-cols-2 items-center md:flex lg:flex-col gap-2'>
                <button className='bg-[#8B5CF6] transition-colors hover:bg-[#6c3fd3] rounded-full inline-flex h-8 items-center justify-center px-3.5 font-normal outline-none shrink-0'>
                    Set Up a Time
                </button>
                <button className='bg-[#1a1a1c] transition-colors hover:bg-[#2c2c30] rounded-full inline-flex h-8 items-center text-sm justify-center px-3.5 outline-none shrink-0'>
                    Learn More
                </button>
            </div>
        </div>
    </section>
  )
}

export default Banner
