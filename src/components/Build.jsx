import React from 'react'
import {barchart,
  command,
  mail,
  smile,
  zap} from '../assets/icons'

function Build() {
  return (
    <section className='relative lg:mx-auto flex flex-col lg:container items-center py-12 gap-8 md:py-16 lg:gap-0 lg:p-28 lg:!flex-row'>
      <div className='relative shrink-0 self-stretch container top-0 mx-auto px-6 lg:w-1/2 lg:pr-10 xl:pr-16'>
        <div className='flex flex-col items-start gap-3 self-start'>
          <h3 className='bg-[#18181B] text-[#71717A] rounded-full pb-px px-3.5 min-h-7'>Built For Scale</h3>
          <h2 className='font-medium text-3xl'>Dynamic Resource Management</h2>
          <p className='text-left max-w-screen-md text-lg text-[#71717A] lg-text-xl'>Seamlessly expand from racks to data centers. Our system grows with you, automatically managing resources across your entire infrastructure.</p>
        </div>
      </div>
      <div className='w-full flex-1 lg:w-1/2 lg:flex-1 shrink-0'>
        <div className='flex lg:flex-col gap-8 overflow-auto px-5 lg:px-0'>
          <div className='flex flex-col shrink-0 w-[280px] bg-[#18181B] rounded-lg gap-3 lg:w-full lg:flex-row border p-4 lg:p-5'>
            <figure className='bg-[#27272A] rounded-full flex size-12 items-center justify-center'>
              <img src={mail} alt="" width={24} height={24} className='revert'/>
            </figure>
            <div className='flex flex-col gap-2 items-start'>
              <h2 className='font-medium text-sm lg:text-lg'>Resource Management</h2>
              <p className='text-sm text-[#71717A] text-pretty'>See all of your resources in one place, update issues, and dynamically plan your resources.</p>
            </div>
          </div>
          <div className='flex flex-col shrink-0 w-[280px] bg-[#18181B] rounded-lg gap-3 lg:w-full lg:flex-row border p-4 lg:p-5'>
            <figure className='bg-[#27272A] rounded-full flex size-12 items-center justify-center'>
              <img src={zap} alt="" width={24} height={24} className='revert'/>
            </figure>
            <div className='flex flex-col gap-2 items-start'>
              <h2 className='font-medium text-sm lg:text-lg'>Deployment Automation</h2>
              <p className='text-sm text-[#71717A] text-pretty'>From design, sourcing, supply, manufacutinring, and deployment - our system automates the entire process.</p>
            </div>
          </div>
          <div className='flex flex-col shrink-0 w-[280px] bg-[#18181B] rounded-lg gap-3 lg:w-full lg:flex-row border p-4 lg:p-5'>
            <figure className='bg-[#27272A] rounded-full flex size-12 items-center justify-center'>
              <img src={barchart} alt="" width={24} height={24} className='revert'/>
            </figure>
            <div className='flex flex-col gap-2 items-start'>
              <h2 className='font-medium text-sm lg:text-lg'>Networking</h2>
              <p className='text-sm text-[#71717A] text-pretty'>Ensure that your networking infrastructure is always in place and ready to scale with your deployments.</p>
            </div>
          </div>
          <div className='flex flex-col shrink-0 w-[280px] bg-[#18181B] rounded-lg gap-3 lg:w-full lg:flex-row border p-4 lg:p-5'>
            <figure className='bg-[#27272A] rounded-full flex size-12 items-center justify-center'>
              <img src={smile} alt="" width={24} height={24} className='revert'/>
            </figure>
            <div className='flex flex-col gap-2 items-start'>
              <h2 className='font-medium text-sm lg:text-lg'>Firmware Versioning</h2>
              <p className='text-sm text-[#71717A] text-pretty'>Ensure that your firmware is always up to date and secure with our automated versioning system.</p>
            </div>
          </div>
          <div className='flex flex-col shrink-0 w-[280px] bg-[#18181B] rounded-lg gap-3 lg:w-full lg:flex-row border p-4 lg:p-5'>
            <figure className='bg-[#27272A] rounded-full flex size-12 items-center justify-center'>
              <img src={command} alt="" width={24} height={24} className='revert'/>
            </figure>
            <div className='flex flex-col gap-2 items-start'>
              <h2 className='font-medium text-sm lg:text-lg'>Digital Twins</h2>
              <p className='text-sm text-[#71717A] text-pretty'>Plan capacity intelligently with our digital twin technology.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Build
