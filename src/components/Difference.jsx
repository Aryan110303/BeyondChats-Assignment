import React from 'react'
import { AuroraText } from './magicui/aurora-text'
import { TextAnimate } from './magicui/text-animate'
import { motion } from 'framer-motion'

function Difference() {
  return (
    <section className="py-20 px-4 bg-[#000000] overflow-hidden relative" id='AI'>
      {/* Background Image */}
      

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 relative z-10">
            <h2 className="text-6xl font-bold text-[#E5E5E5] font-gothic">
              <TextAnimate animation="slideUp" by="word" delay={0.5} duration={0.8}>Introducing:</TextAnimate>{' '}
              <div className="mt-2">
                <TextAnimate animation="slideUp" by="word" delay={0.7} duration={0.8}>
                  Smart AI
                </TextAnimate>
                
              </div>
            </h2>
            
            <h3 className="text-2xl font-semibold text-white font-gothic">
            <TextAnimate animation="slideUp" by="word" delay={0.7} duration={0.8}>
            Smarter savings. Smarter future.                     Dumber excuses? Not anymore.
            </TextAnimate>
            </h3>
            
            <div className="space-y-4">
              <div className="text-gray-400 text-lg font-gothic">
                <TextAnimate animation="fadeIn" by="line" as="p" delay={0.5} duration={0.8}>
                  {`SmartSave AI is your finance-savvy sidekick — built to help you understand your income, track your expenses, and actually save for the stuff you care about (not just "cut coffee" advice).
🚧 Full automation? Coming soon.
For now, enjoy a smart mix of savings strategies, investing tips, and financial rules — simplified for regular humans.`}
                </TextAnimate>
              </div>
              
              <div className="text-gray-400 text-lg font-gothic">
                <TextAnimate animation="fadeIn" by="line" as="p">
                  {`What's on the menu right now?
💸 Mutual funds, SIPs, FDs, and tax-saving schemes
📚 Bite-sized, beginner-safe advice
🎯 Realistic saving strategies — minus the jargon overdose`}
                </TextAnimate>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-2xl font-semibold text-white mb-4 font-gothic">
              Goal-Centric Planning (aka: Dream it, Save it, Flex it)
              </h3>
              <div className="text-gray-400 text-lg font-gothic">
                <TextAnimate animation="fadeIn" by="line" as="p">
                  {`Wanna buy that gadget? Book a trip? Prepare for a rainy day?
Just plug in your goal — SmartSave slices it into monthly savings, gives you reminders (the nice kind), and tracks your progress like a responsible bestie.
We're not just building an app. We're building a future where your wallet doesn't cry at the end of the month. You in?`}
                </TextAnimate>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative lg:absolute lg:right-[-65%] lg:w-[120%] lg:h-full">
            <div className="relative w-full h-full max-w-[800px] mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent from-45% via-black/95 via-55% to-black to-70% z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black from-0% via-black/95 via-15% to-transparent to-40% z-10" />
              <motion.img
                src={new URL("../assets/iphone.png", import.meta.url).href}
                alt="iPhone App Demo"
                className="w-full h-full object-contain transform lg:scale-[4] lg:translate-x-32"
                initial={{ 
                  opacity: 0,
                  rotate: 10,
                  x: 300,
                  y: 0
                }}
                whileInView={{ 
                  opacity: 1,
                  rotate: 0,
                  x: 0,
                  y: 0
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                  rotate: {
                    duration: 1.4,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Difference
