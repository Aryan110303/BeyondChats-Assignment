import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Step1 from '../assets/Step1.jpg'
import Step2 from '../assets/Step2.jpg'
import Step3 from '../assets/Step3.jpg'
import Step4 from '../assets/Step4.jpg'
import Iphone15Pro from './magicui/iphone-15-pro'
import { Particles } from './magicui/particles'
import { AuroraText } from './magicui/aurora-text'

const steps = [
  {
    id: 1,
    title: "Step 1 : Add Your Income",
    description: (
      <>
        🤑 Let us know how much <AuroraText>moolah</AuroraText> you make. (So we can judge your life choices accordingly.)
      </>
    ),
    image: Step1
  },
  {
    id: 2,
    title: "Step 2: Add Your Expenses",
    description: (
      <>
        🧾 Groceries? <AuroraText>Netflix</AuroraText>? 3 cups of overpriced coffee? Drop it all in — no secrets here, we've seen worse.
      </>
    ),
    image: Step2
  },
  {
    id: 3,
    title: "Step 3: Get Your Savings",
    description: (
      <>
        📉 Watch the leftovers appear like <AuroraText>magic</AuroraText>. Spoiler: It might hurt a little. But hey, at least now you know.
      </>
    ),
    image: Step3
  },
  {
    id: 4,
    title: "Step 4:  See Investment Options",
    description: (
      <>
        📈 Now that you've faced <AuroraText>reality</AuroraText>, let's help you do something smart with what's left — from FDs to mutual funds, even if you just googled what SIP means.
      </>
    ),
    image: Step4
  }
]

function Steps() {
  const containerRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)

  // Scroll to top on mount with smooth behavior
  useEffect(() => {
    const handleLoad = () => {
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      })
    }

    // Add event listener for page load
    window.addEventListener('load', handleLoad)
    
    // Also scroll immediately
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    })

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'))
            setActiveStep(index)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -30% 0px'
      }
    )

    const stepElements = document.querySelectorAll('.step-container')
    stepElements.forEach((element) => observer.observe(element))

    return () => {
      stepElements.forEach((element) => observer.unobserve(element))
    }
  }, [])

  return (
    <section className="min-h-screen bg-black py-20 relative" id='steps'>
      <Particles 
        className="absolute inset-0 -z-10" 
        quantity={100}
        staticity={30}
        ease={80}
        color="#7b80ff"
        vx={0.1}
        vy={0.1}
      />
      <div className="max-w-[1400px] mx-auto px-4">
        {/* <img src={new URL("../assets/bglight.jpg", import.meta.url).href} alt="" /> */}
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-4 font-gothic">It's Not Rocket Science,</h2>
          <h2 className="text-5xl font-bold text-accent font-gothic">Just Tap Tap Done</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,600px] gap-8 relative">
          {/* Left side - Scrollable content */}
          <div className="space-y-32">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className="step-container min-h-[80vh] flex flex-col justify-center"
                data-index={index}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="max-w-2xl"
                >
                  <h2 className="text-4xl font-bold mb-4 text-gray-400 font-gothic">{step.title}</h2>
                  <p className="text-white font-gothic">{step.description}</p>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Right side - Sticky iPhone */}
          <div className="hidden lg:block sticky top-0 h-screen">
            <div className="relative h-full flex items-center justify-center">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: activeStep === index ? 1 : 0,
                    scale: activeStep === index ? 1 : 0.9
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-[450px] h-[900px] flex items-center justify-center scale-75">
                    <Iphone15Pro
                      width={500}
                      height={900}
                      src={step.image}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Final text container */}
        <div className="mt-28 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl text-white/80 font-gothic"
          >
            Not the fanciest process, but it gets the job done.<strong className='text-accent'> MVP</strong> things, you know?
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default Steps
