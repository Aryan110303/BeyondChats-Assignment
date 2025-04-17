import React from 'react'
import { VelocityScroll } from './magicui/scroll-based-velocity'

function Features() {
  return (
    <section className="py-20 ">
      <VelocityScroll defaultVelocity={3} numRows={3}>
        <span className="text-white font-gothic">Secure</span> <span className="text-[#7b80ff] font-gothic">• Fast</span> <span className="text-white font-gothic">• Reliable</span> <span className="text-[#7b80ff] font-gothic">• Easy to Use</span> <span className="text-white font-gothic">• Modern</span> <span className="text-[#7b80ff] font-gothic">• Powerful •</span> 
      </VelocityScroll>
      
    </section>
  )
}

export default Features

