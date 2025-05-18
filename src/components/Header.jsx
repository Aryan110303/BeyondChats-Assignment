import React, { useState } from 'react'
import logo from '../assets/logo.jpg' 
import down from '../assets/icons/down.png' 
import { hamburger } from '../assets/icons'

function Header() {

    const[isClicked,setIsClicked] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (id) => {
        setOpenDropdown(prev => (prev === id ? null : id));
      };

  return (
    <header className='sticky top-0 w-full flex justify-center border-b z-50 bg-[black]'>
        <div className='flex h-16 py-4 m-auto px-8 w-full items-center justify-between'>
            <div className='flex w-full items-center justify-between'>
                <div className='flex gap-2'>
                    <img src={logo} alt="" width={30} height={20}/>
                    <a href="#" className='text-2xl font-[500]'>CentralAxis</a>
                </div>
                <div className='hidden lg:flex items-center space-x-6'>
                    <div className='relative group'>
                        <button className='flex items-center text-sm font-medium transition-colors hover:text-foreground/80'>Data Center Infrastructure Management<span className='ml-1'>▼</span></button>
                        <div className='absolute invisible mt-2 w-64 border border-white rounded-md shadow-lg opacity-0 transition-all duration-200 ease-in-out group-hover:visible group-hover:opacity-100 sm:text-sm' style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}>
                            <div className='py-1'>
                                <a href="" className='block px-4 py-1.5 font-medium text-sm hover:text-foreground/80'>Monitoring Devices</a>
                                <a href="" className='block px-4 py-1.5 font-medium text-sm hover:text-foreground/80'>Asset Tracking</a>
                                <a href="" className='block px-4 py-1.5 font-medium text-sm hover:text-foreground/80'>Network Management</a>
                                <a href="" className='block px-4 py-1.5 font-medium text-sm hover:text-foreground/80'>Change Management</a>
                                <a href="" className='block px-4 py-1.5 font-medium text-sm hover:text-foreground/80'>Colocation Management</a>
                                <a href="" className='block px-4 py-1.5 font-medium text-sm hover:text-foreground/80'>Data Center Planner</a>
                                <a href="" className='block px-4 py-1.5 font-medium text-sm hover:text-foreground/80'>Firmware Management</a>
                                <a href="" className='block px-4 py-1.5 font-medium text-sm hover:text-foreground/80'>IP Address Management</a>
                                <a href="" className='block px-4 py-1.5 font-medium text-sm hover:text-foreground/80'>Customer Portal</a>
                                <a href="" className='block px-4 py-1.5 font-medium text-sm hover:text-foreground/80'>Customer Insights</a>
                                <a href="" className='block px-4 py-1.5 font-medium text-sm hover:text-foreground/80'>Customer Data Center Solutions</a>
                            </div>
                        </div>
                    </div>
                    <div className='relative group'>
                        <button className='flex items-center text-sm font-medium transition-colors hover:text-foreground/80'>Intelligence Solution<span className='ml-1'>▼</span></button>
                        <div className='absolute invisible mt-2 w-64 bg-background border border-white rounded-md shadow-lg opacity-0 transition-all duration-200 ease-in-out group-hover:visible group-hover:opacity-100 sm:text-sm'>
                            <div className='py-1'>
                                <a href="" className='block px-4 py-1.5 font-medium text-xl tracking-[-.42px] hover:text-foreground/80'>Digital Twin</a>
                                <a href="" className='block px-4 py-1.5 font-medium text-xl hover:text-foreground/80'>Smart Power Mapping</a>
                                <a href="" className='block px-4 py-1.5 font-medium text-xl hover:text-foreground/80'>Predictve Failure and Alerting</a>
                                <a href="" className='block px-4 py-1.5 font-medium text-xl hover:text-foreground/80'>Smart Control System</a>
                                <a href="" className='block px-4 py-1.5 font-medium text-xl hover:text-foreground/80'>Automated Discovery</a>
                            </div>
                        </div>
                    </div>
                    <div className='relative group'>
                        <button className='flex items-center text-sm font-medium transition-colors hover:text-foreground/80'>Data Center Compliance<span className='ml-1'>▼</span></button>
                        <div className='absolute invisible mt-2 w-64 bg-background border border-white rounded-md shadow-lg opacity-0 transition-all duration-200 ease-in-out group-hover:visible group-hover:opacity-100 sm:text-sm'>
                            <div className='py-1'>
                                <a href="" className='block px-4 py-1.5 font-medium text-xl tracking-[-.42px] hover:text-foreground/80'>DCOI Compliance</a>
                                <a href="" className='block px-4 py-1.5 font-medium text-xl hover:text-foreground/80'>(EU) 2023/1791</a>
                                <a href="" className='block px-4 py-1.5 font-medium text-xl hover:text-foreground/80'>EN 50600</a>
                                <a href="" className='block px-4 py-1.5 font-medium text-xl hover:text-foreground/80'>LEED Certification</a>
                                <a href="" className='block px-4 py-1.5 font-medium text-xl hover:text-foreground/80'>ISO/IEC 30134-2</a>
                                <a href="" className='block px-4 py-1.5 font-medium text-xl hover:text-foreground/80'>EPA ENERGY STAR</a>
                                <a href="" className='block px-4 py-1.5 font-medium text-xl hover:text-foreground/80'>Europian Commission Joint Research Centre(JRC)</a>
                            </div>
                        </div>
                    </div>
                    <div className='relative group'>
                        <button className='flex items-center text-sm font-medium transition-colors hover:text-foreground/80'>Sustainability Blog<span className='ml-1'>▼</span></button>
                        <div className='absolute invisible mt-2 w-64 bg-background border border-white rounded-md shadow-lg opacity-0 transition-all duration-200 ease-in-out group-hover:visible group-hover:opacity-100 sm:text-sm'>
                            <div className='py-1'>
                                <a href="" className='block px-4 py-1.5 font-medium text-xl tracking-[-.42px] hover:text-foreground/80'>Energy Efficiency</a>
                                <a href="" className='block px-4 py-1.5 font-medium text-xl hover:text-foreground/80'>Stranded Energy Map</a>
                                <a href="" className='block px-4 py-1.5 font-medium text-xl hover:text-foreground/80'>Environmental Product Decleration</a>
                                <a href="" className='block px-4 py-1.5 font-medium text-xl hover:text-foreground/80'>Renewables Integration</a>
                                <a href="" className='block px-4 py-1.5 font-medium text-xl hover:text-foreground/80'>Power Resource Management</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => setIsClicked(!isClicked)} className=' col-start-3 p-2 flex items-center justify-center justify-self-end gap-2 rounded lg:hidden border border-border ml-auto'>
                    <img src={hamburger} alt="" width={20} height={20}/>
                </button>
                <div className={`${isClicked ? 'block' : 'hidden'} lg:hidden`}>
                    <div className='bg-black fixed left-0 top-16 h-auto w-full z-10'>
                        <div className='flex flex-col px-6 py-8 gap-6'>
                            <div className='flex flex-col gap-4'>
                                <div>
                                    <button onClick={() => toggleDropdown("dcim")} className='flex items-center gap-2 px-3 text-sm'>
                                        Data Center Infrastructure Management
                                        <img src={down} alt="" width={14} height={14}/>
                                    </button>
                                    <ul className={` ${openDropdown== "dcim"? 'h-[400px] opacity-100' : 'h-0 opacity-0'} flex transform-gpu flex-col gap-2 overflow-hidden pl-4 transition-transform overflow-y-scroll origin-top`}>
                                        <li className='text-sm px-2 text-[#71717A] py-2'>Monitoring Devices</li>
                                        <li className='text-sm px-2 text-[#71717A] py-2'>Asset Tracking</li>
                                        <li className='text-sm px-2 text-[#71717A] py-2'>Network Management</li>
                                        <li className='text-sm px-2 text-[#71717A] py-2'>Change Management</li>
                                        <li className='text-sm px-2 text-[#71717A] py-2'>Colocation Management</li>
                                        <li className='text-sm px-2 text-[#71717A] py-2'>Data Center Planner</li>
                                        <li className='text-sm px-2 text-[#71717A] py-2'>Firmware Management</li>
                                        <li className='text-sm px-2 text-[#71717A] py-2'>IP Address Management</li>
                                        <li className='text-sm px-2 text-[#71717A] py-2'>Customer Portal</li>
                                        <li className='text-sm px-2 text-[#71717A] py-2'>Customer Insights</li>
                                        <li className='text-sm px-2 text-[#71717A] py-2'>Customer Data Center Solutions</li>
                                    </ul>
                                </div>
                                <div>
                                    <button onClick={() => toggleDropdown("intel")} className='flex items-center gap-2 px-3 text-sm'>
                                        Intelligence Solution
                                        <img src={down} alt="" width={14} height={14}/>
                                    </button>
                                    <ul className={`${openDropdown == "intel"? 'h-[160px] opacity-100' : 'h-0 opacity-0'} flex flex-col gap-2 overflow-hidden h-0 pl-4 transition-transform overflow-y-scroll origin-top`}>
                                        <li className='text-sm px-2 text-[#71717A] py-1'>Digital Twin</li>
                                        <li className='text-sm px-2 text-[#71717A] py-1'>Smart Power Mapping</li>
                                        <li className='text-sm px-2 text-[#71717A] py-1'>Predictve Failure and Alerting</li>
                                        <li className='text-sm px-2 text-[#71717A] py-1'>Smart Control System</li>
                                        <li className='text-sm px-2 text-[#71717A] py-1'>Automated Discovery</li>
                                    </ul>
                                </div>
                                <div>
                                    <button onClick={() => toggleDropdown("data")} className='flex items-center gap-2 px-3 text-sm'>
                                        Data Center Compliance
                                        <img src={down} alt="" width={14} height={14}/>
                                    </button>
                                    <ul className={`${openDropdown == "data" ? 'h-[220px] opacity-100' : 'h-0 opacity-0'} flex flex-col gap-2 overflow-hidden h-0 pl-4 transition-transform overflow-y-scroll origin-top`}>
                                        <li className='text-sm px-2 text-[#71717A] py-1'>DCOI Compliance</li>
                                        <li className='text-sm px-2 text-[#71717A] py-1'>(EU) 2023/1791</li>
                                        <li className='text-sm px-2 text-[#71717A] py-1'>EN 50600</li>
                                        <li className='text-sm px-2 text-[#71717A] py-1'>LEED Certification</li>
                                        <li className='text-sm px-2 text-[#71717A] py-1'>ISO/IEC 30134-2</li>
                                        <li className='text-sm px-2 text-[#71717A] py-1'>EPA ENERGY STAR</li>
                                        <li className='text-sm px-2 text-[#71717A] py-1'>Europian Commission Joint Research Centre(JRC)</li>
                                    </ul>
                                </div>
                                <div>
                                    <button onClick={() => toggleDropdown("blog")} className='flex items-center gap-2 px-3 text-sm'>
                                        Sustainability Blog
                                        <img src={down} alt="" width={14} height={14}/>
                                    </button>
                                    <ul className={`${openDropdown == "blog" ? 'h-[160px] opacity-100' : 'h-0 opacity-0'} flex flex-col gap-2 overflow-hidden h-0 pl-4 transition-transform overflow-y-scroll origin-top`}>
                                        <li className='text-sm px-2 text-[#71717A] py-1'>Energy Efficiency</li>
                                        <li className='text-sm px-2 text-[#71717A] py-1'>Stranded Energy Map</li>
                                        <li className='text-sm px-2 text-[#71717A] py-1'>Environmental Product Decleration</li>
                                        <li className='text-sm px-2 text-[#71717A] py-1'>Renewables Integration</li>
                                        <li className='text-sm px-2 text-[#71717A] py-1'>Power Resource Management</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
