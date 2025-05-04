import { section } from 'framer-motion/client'
import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const messages = [
  { id: 1, text: "💭 This is just a savings tracker?", sender: "left" },
  { id: 2, text: "Well yeah, Sherlock. What more did you expect from an MVP?", sender: "right" },
  { id: 3, text: "No expense auto-detection? No UPI magic?", sender: "left" },
  { id: 4, text: "Not yet. I'm still poor, remember?", sender: "right" },
  { id: 5, text: "LMAO 💀 So this is like… a demo?", sender: "left" },
  { id: 6, text: "Demo now. Destiny later. Get me an investor or two and I'll show you financial sorcery.", sender: "right" }
]

function Treat() {
  const [visibleMessages, setVisibleMessages] = useState([])
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      const showMessages = async () => {
        setVisibleMessages([])
        for (let i = 0; i < messages.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 2000))
          setVisibleMessages(prev => [...prev, messages[i]])
        }
      }
      showMessages()
    }
  }, [isInView])

  return (
    <section className='bg-black min-h-screen py-32'>
      <div className='container mx-auto'>
        <div className='relative w-full'>
          <img 
            src={new URL("../assets/rocks.jpg", import.meta.url).href} 
            alt="" 
            className='w-full object-cover'
          />
          {/* Gradient overlays */}
          <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50' />
          <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-50' />
          <div className='absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50' />
          <div className='absolute inset-0 bg-gradient-to-l from-black to-transparent opacity-50' />
          
          {/* Heading container */}
          <div className="absolute inset-x-0 top-0 flex flex-col items-center mt-8 mb-4">
            <h2 className="text-4xl font-gothic text-white mb-2">
              <strong className='text-accent'>Conversations</strong> I Didn't Know I'd Have to Have
            </h2>
          </div>

          {/* Glass container */}
          <div className="absolute inset-0 flex items-center justify-center mt-16">
            <div 
              ref={containerRef}
              className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg p-8 w-[1400px] h-[700px] rounded-[2rem] overflow-hidden"
            >
              {/* Messages container */}
              <div className="h-full flex flex-col justify-center space-y-4 px-8">
                <AnimatePresence>
                  {visibleMessages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ 
                        opacity: 0, 
                        x: message.sender === 'left' ? -100 : 100 
                      }}
                      animate={{ 
                        opacity: 1, 
                        x: 0 
                      }}
                      transition={{ 
                        type: "spring",
                        duration: 0.8,
                        bounce: 0.3
                      }}
                      className={`flex ${message.sender === 'left' ? 'justify-start' : 'justify-end'}`}
                    >
                      <div 
                        className={`max-w-md p-4 rounded-2xl ${
                          message.sender === 'left' 
                            ? 'bg-white/20 rounded-tl-none' 
                            : 'bg-blue-500/40 rounded-tr-none'
                        }`}
                      >
                        <p className="text-white text-lg font-gothic">{message.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Treat
