import { section } from 'framer-motion/client'
import React from 'react'

function Hero() {
  return (
    <section className='relative overflow-hidden pb-10 min-h-[calc(630px-var(--header-height))]'>
        <div className='absolute top-0 left-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-border'>
            <div className='col-span-1 flex h-full items-center justify-center'></div>
            <div className='col-span-1 flex h-full items-center justify-center border-x border-border'></div>
            <div className='col-span-1 flex h-full items-center justify-center'></div>
        </div>
        <figure className='bg-[#251B3F] pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full blur-[200px]'></figure>
        <figure className='pointer-events-none absolute left-[4vw] top-[64px]  z-20 hidden aspect-square w-[32vw] rounded-full opacity-50 blur-[100px] md:block'></figure>
        <figure className='pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full opacity-50 blur-[100px] md:block'></figure>
        <div className='relative z-10 flex flex-col divide-y divide-border pt-[35px]'>
            <div>
                <div className='mx-auto flex min-h-[288px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-2 px-2 py-4 sm:px-16 lg:px-24'>
                    <h1 className='max-w-screen-lg text-pretty text-center text-[clamp(32px,7vw,64px)] font-medium leading-none tracking-[-1.44px] md:tracking-[-2.16px]'>Data Center Management Software</h1>
                    <h2 className='max-w-2xl text-pretty text-center md:text-lg opacity-50'>Increase uptime, reduce costs, automate operations, and stay compliant.</h2>
                    <h2 className='max-w-2xl text-pretty text-center md:text-lg opacity-50'>Built for colocations, data centers, and cloud providers.</h2>
                </div>
            </div>
            <div className='flex items-start justify-center px-8 sm:px-24'>
                <div className='flex w-full max-w-[80vw] flex-col items-center justify-start md:!max-w-[392px]'>
                    <a href="" className='bg-[#7838E6] hover:bg-[#6D34D0] border-accent-600 flex inline-flex !h-14 h-8 w-full shrink-0 flex-col items-center justify-center gap-1 rounded-full rounded-none px-3.5 !text-base text-sm font-normal outline-none outline-0 focus-visible:ring-2 md:px-5'>Request Demo</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
