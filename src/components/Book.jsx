import React from 'react'
import bgimage from '../assets/background.png'

function Book() {
  return (
    <section className='flex flex-col mx-auto items-center container relative gap-8 px-6 ' style={{paddingBottom: 3.5 + 'rem'}}>
        <div className='relative flex flex-col justify-center gap-8 self-stretch overflow-hidden items-center rounded-lg border p-5 h-[250px]'>
            <img src={bgimage} alt="" className='bgimage object-cover w-full h-full top-0 left-0 absolute'/>
            <div className='flex flex-col items-center justify-center z-20'>
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
                <div className='relative flex flex-col items-center text-center gap-2 z-30'>
                    <h2 className='text-3xl font-medium lg:text-4xl sm:max-w-full sm-px-0 tracking-tighter'>Book a Demo</h2>
                    <p className='text-lg text-[#909092]'>See how CentralAxis can revolutionize your data center operations.</p>
                </div>
                <div className='relative z-40 flex items-center gap-1 mt-2'>
                    <button className='bg-white rounded px-3 py-2'>
                        <span className='z-50 text-black'>Schedule Now</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Book
