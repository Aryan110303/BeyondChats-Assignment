import { section } from 'framer-motion/client'
import React from 'react'

function Faq() {
  return (
    <section className='container relative flex flex-col mx-auto items-center gap-8'>
        <div className='flex flex-col items-center gap-2'>
            <h3 className='bg-[#18181B] text-[#71717A] rounded-full pb-px px-3.5 min-h-7'>FAQs</h3>
            <div className='flex flex-col items-center justify-center max-w-[800px] self-center'>
                <h2 className='text-3xl lg:text-4xl font-medium'>Frequently Asked Questions</h2>
            </div>
            <p className='text-sm text-[#71717A]'>Find answers to common questions about our solutions.</p>
        </div>
        <ul className='flex flex-col items-start self-stretch grid-cols-3 mx-auto gap-8 lg:grid lg:gap-12 lg:px-24 place-content-start'>
            <li className='flex flex-col gap-1.5'>
                <p className='sm:text-lg font-medium'>Are these solutions applicable to me if I am operating a co-location?</p>
                <p className='text-lg text-[#71717A] tracking-tight leading-relaxed'>Yes! Our solutions are designed to help co-location operators manage their infrastructure more efficiently and effectively.</p>
            </li>
            <li className='flex flex-col gap-1'>
                <p className='sm:text-lg font-medium'>How do you ensure data privacy and security?</p>
                <p className='text-lg text-[#71717A] tracking-tighter leading-relaxed'>We adhere to strict data privacy regulations and implement robust security measures to protect sensitive information.</p>
            </li>
            <li className='flex flex-col gap-1'>
                <p className='sm:text-lg font-medium'>How does pricing work?</p>
                <p className='text-lg text-[#71717A] tracking-tighter leading-relaxed'>Depending on your requirements, we offer flexible pricing models.</p>
            </li>
            <li className='flex flex-col gap-1'>
                <p className='sm:text-lg font-medium'>Do you provide ongoing support and maintenance for your solutions?</p>
                <p className='text-lg text-[#71717A] tracking-tighter leading-relaxed'>Absolutely - we offer comprehensive support and maintenance as well as customization for your needs.</p>
            </li>
            <li className='flex flex-col gap-1'>
                <p className='sm:text-lg font-medium'>How do I get started?</p>
                <p className='text-lg text-[#71717A] tracking-tighter leading-relaxed'>Set up a demo and we'll guide you through our offerings and start a trial!</p>
            </li>
        </ul>
    </section>
  )
}

export default Faq
