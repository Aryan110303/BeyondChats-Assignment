import React from 'react'
import { amd, cisco, dell, hp, intel, lenovo, nvidia, schneider, supermicro } from '../assets/companyLogos'

function Marquee() {
  return (
    <section className='relative flex flex-col items-center gap-10 py-14 md:py-[72px]'>
        <h2 className='text-sm opacity-50'>Seamless integrations with any data center hardware</h2>
        <div className='flex flex-row max-w-full justify-center overflow-auto'>
            <div className='w-full overflow-hidden relative flex'>
                <div className='scroller'>
                    <figure className='flex h-16 items-center px-2 py-3 lg:p-4 flex-shrink-0'>
                        <img src={nvidia} alt="" width={150} height={140} className='w-24 lg:w-32' />
                    </figure>
                    <figure className='flex h-16 items-center px-2 py-3 lg:p-4 flex-shrink-0'>
                        <img src={amd} alt="" width={150} height={140} className='w-24 lg:w-32'/>
                    </figure>
                    <figure className='flex h-16 items-center px-2 py-3 lg:p-4 flex-shrink-0'>
                        <img src={cisco} alt="" width={150} height={140} className='w-24 lg:w-32'/>
                    </figure>
                    <figure className='flex h-16 items-center px-2 py-3 lg:p-4 flex-shrink-0'>
                        <img src={dell} alt="" width={150} height={140} className='w-24 lg:w-32'/>
                    </figure>
                    <figure className='flex h-16 items-center px-2 py-3 lg:p-4 flex-shrink-0'>
                        <img src={hp} alt="" width={150} height={140} className='w-24 lg:w-32'/>
                    </figure>
                    <figure className='flex h-16 items-center px-2 py-3 lg:p-4 flex-shrink-0'>
                        <img src={intel} alt="" width={120} height={120} className='w-24 lg:w-32'/>
                    </figure>
                    <figure className='flex h-16 items-center px-2 py-3 lg:p-4 flex-shrink-0'>
                        <img src={lenovo} alt="" width={150} height={140} className='w-24 lg:w-32'/>
                    </figure>
                    <figure className='flex h-16 items-center px-2 py-3 lg:p-4 flex-shrink-0'>
                        <img src={schneider} alt="" width={150} height={140} className='w-24 lg:w-32'/>
                    </figure>
                    <figure className='flex h-16 items-center px-2 py-3 lg:p-4 flex-shrink-0'>
                        <img src={supermicro} alt="" width={150} height={140} className='w-24 lg:w-32'/>
                    </figure>
                    <figure className='flex h-16 items-center px-2 py-3 lg:p-4 flex-shrink-0'>
                        <img src={nvidia} alt="" width={150} height={140} className='w-24 lg:w-32' />
                    </figure>
                    <figure className='flex h-16 items-center px-2 py-3 lg:p-4 flex-shrink-0'>
                        <img src={amd} alt="" width={150} height={140} className='w-24 lg:w-32'/>
                    </figure>
                    <figure className='flex h-16 items-center px-2 py-3 lg:p-4 flex-shrink-0'>
                        <img src={cisco} alt="" width={150} height={140} className='w-24 lg:w-32'/>
                    </figure>
                    <figure className='flex h-16 items-center px-2 py-3 lg:p-4 flex-shrink-0'>
                        <img src={dell} alt="" width={150} height={140} className='w-24 lg:w-32'/>
                    </figure>
                    <figure className='flex h-16 items-center px-2 py-3 lg:p-4 flex-shrink-0'>
                        <img src={hp} alt="" width={150} height={140} className='w-24 lg:w-32'/>
                    </figure>
                    <figure className='flex h-16 items-center px-2 py-3 lg:p-4 flex-shrink-0'>
                        <img src={intel} alt="" width={120} height={120} className='w-24 lg:w-32'/>
                    </figure>
                    <figure className='flex h-16 items-center px-2 py-3 lg:p-4 flex-shrink-0'>
                        <img src={lenovo} alt="" width={150} height={140} className='w-24 lg:w-32'/>
                    </figure>
                    <figure className='flex h-16 items-center px-2 py-3 lg:p-4 flex-shrink-0'>
                        <img src={schneider} alt="" width={150} height={140} className='w-24 lg:w-32'/>
                    </figure>
                    <figure className='flex h-16 items-center px-2 py-3 lg:p-4 flex-shrink-0'>
                        <img src={supermicro} alt="" width={150} height={140} className='w-24 lg:w-32'/>
                    </figure>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Marquee
