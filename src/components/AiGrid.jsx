import React from 'react'
import video1 from '../assets/videos/hb-monitoring.mp4'
import video2 from '../assets/videos/networking-b.mp4'
import video3 from '../assets/videos/asset-management-b.mp4'
import video4 from '../assets/videos/SinglePane-b.mp4'
import video5 from '../assets/videos/compliance.mp4'
import video6 from '../assets/videos/dc-planning.mp4'

function AiGrid() {
  return (
    <section className='container relative mx-auto flex flex-col items-center gap-10 px-6 py-14 md:py-[72px]'>
        <div className='flex flex-col gap-3 self-center items-center'>
            <h3 className='flex items-center justify-center bg-[#18181B] text-[#71717A] pb-px px-3.5 min-h-7 gap-2 rounded-full text-sm font-medium md:text-base'>Built For AI</h3>
            <div className='gap-1 flex flex-col items-center max-w-[800px] justify-center self-center'>
                <h4 className='text-center text-3xl font-medium md:text-4xl text-pretty'>Modernizing the Digital Backbone</h4>
            </div>
            <p className='max-w-screen-md text-pretty text-center text-lg font-light md:text-xl"'>Data center software (DCIM, BMS and EPMS) has stagnated. We've built a better way.</p>
        </div>
        <div className='flex flex-col gap-5 w-full'>
            <div className='flex flex-col min-h-96 w-full max-w-[380px] bg-[#18181B] rounded-lg border border-border sm:max-w-full md:w-full p-px md:flex-row md:odd:flex-row-reverse xl:gap-16'>
                <figure className='md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px] p-2'>
                    <div  className='relative overflow-hidden block h-full w-full aspect-video inset-0'>
                        <video src={video1} autoPlay muted loop playsInline className='relative object-contain'></video>
                    </div>
                </figure>
                <div className='flex flex-col gap-6 p-6 pt-6 md:flex-1 md:p-10'>
                    <div className='flex flex-col gap-2 items-start'>
                        <h2 className='font-medium text-2xl md:text-3xl tex-pretty'>Advanced Monitoring</h2>
                        <p className='font-medium md:text-lg text-pretty text-sm text-[#71717A]'>CentralAxis provides cutting-edge monitoring solutions for your data center, offering real-time insights and comprehensive analytics to optimize performance, reduce costs, and enhance reliability.</p>
                    </div>
                    <ul className='flex flex-col items-start gap-3'>
                        <li className='text-[#71717A] font-normal'><span>♦ </span>Real-time performance metrics and predictive analytics</li>
                        <li className='text-[#71717A] font-normal'><span>♦ </span>Automated alerts and intelligent incident response</li>
                        <li className='text-[#71717A] font-normal'><span>♦ </span>Comprehensive reporting and trend analysis</li>
                        
                    </ul>
                </div>
            </div>
            <div className='flex flex-col min-h-96 w-full max-w-[380px] bg-[#18181B] rounded-lg border border-border sm:max-w-full md:w-full p-px md:flex-row md:odd:flex-row-reverse xl:gap-16'>
                <figure className='md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px] p-2'>
                    <div  className='relative overflow-hidden block h-full w-full aspect-video inset-0'>
                        <video src={video2} autoPlay loop muted playsInline className='relative object-contain'></video>
                    </div>
                </figure>
                <div className='flex flex-col gap-6 p-6 pt-6 md:flex-1 md:p-10'>
                    <div className='flex flex-col gap-2 items-start'>
                        <h2 className='font-medium text-2xl md:text-3xl tex-pretty'>Network Management and Monitoring</h2>
                        <p className='font-medium md:text-lg text-pretty text-sm text-[#71717A]'>Comprehensive network monitoring and management that ensures optimal performance, security, and reliability across your entire data center infrastructure.</p>
                    </div>
                    <ul className='flex flex-col items-start gap-3'>
                        <li className='text-[#71717A] font-normal'><span>♦ </span>Real-time network performance monitoring and bandwidth optimization</li>
                        <li className='text-[#71717A] font-normal'><span>♦ </span>Automated network security and threat detection</li>
                        <li className='text-[#71717A] font-normal'><span>♦ </span>Advanced network diagnostics and troubleshooting tools</li>
                        
                    </ul>
                </div>
            </div>
            <div className='flex flex-col min-h-96 w-full max-w-[380px] bg-[#18181B] rounded-lg border border-border sm:max-w-full md:w-full p-px md:flex-row md:odd:flex-row-reverse xl:gap-16'>
                <figure className='md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px] p-2'>
                    <div  className='relative overflow-hidden block h-full w-full aspect-video inset-0'>
                        <video src={video3} autoPlay loop muted playsInline className='relative object-contain'></video>
                    </div>
                </figure>
                <div className='flex flex-col gap-6 p-6 pt-6 md:flex-1 md:p-10'>
                    <div className='flex flex-col gap-2 items-start'>
                        <h2 className='font-medium text-2xl md:text-3xl tex-pretty'>Asset Management</h2>
                        <p className='font-medium md:text-lg text-pretty text-sm text-[#71717A]'>Streamline your data center operations with our comprehensive asset management system. Track, maintain, and optimize your infrastructure with precision and ease.</p>
                    </div>
                    <ul className='flex flex-col items-start gap-3'>
                        <li className='text-[#71717A] font-normal'><span>♦ </span>Automated inventory tracking and lifecycle management</li>
                        <li className='text-[#71717A] font-normal'><span>♦ </span>Intelligent ticketing based on asset health and performance</li>
                        <li className='text-[#71717A] font-normal'><span>♦ </span>Efficient resource allocation and optimization</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col min-h-96 w-full max-w-[380px] bg-[#18181B] rounded-lg border border-border sm:max-w-full md:w-full p-px md:flex-row md:odd:flex-row-reverse xl:gap-16'>
                <figure className='md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px] p-2'>
                    <div  className='relative overflow-hidden block h-full w-full aspect-video inset-0'>
                        <video src={video4} autoPlay loop muted playsInline className='relative object-contain'></video>
                    </div>
                </figure>
                <div className='flex flex-col gap-6 p-6 pt-6 md:flex-1 md:p-10'>
                    <div className='flex flex-col gap-2 items-start'>
                        <h2 className='font-medium text-2xl md:text-3xl tex-pretty'>A Single Pane of Glass</h2>
                        <p className='font-medium md:text-lg text-pretty text-sm text-[#71717A]'>A unified view across all of your BMS and EPMS systems, tailored to your needs.</p>
                    </div>
                    <ul className='flex flex-col items-start gap-3'>
                        <li className='text-[#71717A] font-normal'><span>♦ </span>Comprehensive visibility across all of your colocation infrastructure</li>
                        <li className='text-[#71717A] font-normal'><span>♦ </span>Customizable interface tailored to your specific operational requirements and priorities.</li>
                        <li className='text-[#71717A] font-normal'><span>♦ </span>Unified dashboard integrating all BMS and EPMS systems for seamless monitoring and management.</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col min-h-96 w-full max-w-[380px] bg-[#18181B] rounded-lg border border-border sm:max-w-full md:w-full p-px md:flex-row md:odd:flex-row-reverse xl:gap-16'>
                <figure className='md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px] p-2'>
                    <div  className='relative overflow-hidden block h-full w-full aspect-video inset-0'>
                        <video src={video5} autoPlay loop muted playsInline className='relative object-contain'></video>
                    </div>
                </figure>
                <div className='flex flex-col gap-6 p-6 pt-6 md:flex-1 md:p-10'>
                    <div className='flex flex-col gap-2 items-start'>
                        <h2 className='font-medium text-2xl md:text-3xl tex-pretty'>Built-In Compliance</h2>
                        <p className='font-medium md:text-lg text-pretty text-sm text-[#71717A]'>CentralAxis provides compliance as a service for data centers.</p>
                    </div>
                    <ul className='flex flex-col items-start gap-3'>
                        <li className='text-[#71717A] font-normal'><span>♦ </span>Track data for EU, US, and global regulatary standards.</li>
                        <li className='text-[#71717A] font-normal'><span>♦ </span>We guarantee compliance and handle every step between monitoring and reporting.</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col min-h-96 w-full max-w-[380px] bg-[#18181B] rounded-lg border border-border sm:max-w-full md:w-full p-px md:flex-row md:odd:flex-row-reverse xl:gap-16'>
                <figure className='md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px] p-2'>
                    <div  className='relative overflow-hidden block h-full w-full aspect-video inset-0'>
                        <video src={video6} autoPlay loop muted playsInline className='relative object-contain'></video>
                    </div>
                </figure>
                <div className='flex flex-col gap-6 p-6 pt-6 md:flex-1 md:p-10'>
                    <div className='flex flex-col gap-2 items-start'>
                        <h2 className='font-medium text-2xl md:text-3xl tex-pretty'>Data Center Planning</h2>
                        <p className='font-medium md:text-lg text-pretty text-sm text-[#71717A]'>Want to support the latest and greatest architectures on the market? Modern GPUs and even CPUs are more water and energy intensive than ever.</p>
                    </div>
                    <ul className='flex flex-col items-start gap-3'>
                        <li className='text-[#71717A] font-normal'><span>♦ </span>Model new architectures and see detailed implications on power and cooling needs.</li>
                        <li className='text-[#71717A] font-normal'><span>♦ </span>Design unique specifications for your data center.</li>
                        <li className='text-[#71717A] font-normal'><span>♦ </span>Our continuous monitoring is the most advanced on the market, lowering costs while increasing reliability.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AiGrid
