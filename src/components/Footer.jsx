import React from 'react'

function Footer() {
  const handleScroll = (e, sectionId) => {
    e.preventDefault()
    smoothScroll(sectionId)
  }

  return (
    <footer className="min-h-screen bg-black text-white flex flex-col justify-between pt-20">
      {/* Top Section with Links */}
      <div className="px-4">
        <div className="max-w-[90%] w-full mx-auto flex justify-between items-start">
          {/* Navigation Section */}
          <div className="flex gap-8">
            <div className="text-sm text-white/60 whitespace-nowrap flex items-start gap-2 pt-1">
              <span>{'{'}</span>
              <span className='font-gothic'>Navigation</span>
              <span>{'}'}</span>
            </div>
            <nav className="flex flex-col gap-0">
              <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="block hover:text-[#7b80ff] transition-colors text-xl font-gothic">
                Home
              </a>
              <a href="#work" onClick={(e) => handleScroll(e, 'work')} className="block hover:text-[#7b80ff] transition-colors text-xl font-gothic">
                Work
              </a>
              <a href="#services" onClick={(e) => handleScroll(e, 'services')} className="block hover:text-[#7b80ff] transition-colors text-xl font-gothic">
                Services
              </a>
              <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="block hover:text-[#7b80ff] transition-colors text-xl font-gothic">
                About
              </a>
              <a href="#faq" onClick={(e) => handleScroll(e, 'faq')} className="block hover:text-[#7b80ff] transition-colors text-xl font-gothic">
                FAQ
              </a>
              
            </nav>
          </div>

          {/* Social Media Section */}
          <div className="flex gap-8">
            <div className="text-sm text-white/60 whitespace-nowrap flex items-start gap-2 pt-1">
              <span>{'{'}</span>
              <span className='font-gothic'>Social Media</span>
              <span>{'}'}</span>
            </div>
            <nav className="flex flex-col gap-0">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="block hover:text-[#7b80ff] transition-colors text-xl font-gothic">
                Instagram
              </a>
              <a href="https://github.com/Aryan110303" target="_blank" rel="noopener noreferrer" 
                 className="block hover:text-[#7b80ff] transition-colors text-xl font-gothic">
                Github
              </a>
              <a href="https://iaryansharma.me" target="_blank" rel="noopener noreferrer" 
                 className="block hover:text-[#7b80ff] transition-colors text-xl font-gothic">
                Website
              </a>
              <a href="https://linkedin.com/in/aryan-sharma03" target="_blank" rel="noopener noreferrer" 
                 className="block hover:text-[#7b80ff] transition-colors text-xl font-gothic">
                LinkedIn
              </a>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="flex gap-8">
            <div className="text-sm text-white/60 whitespace-nowrap flex items-start gap-2 pt-1">
              <span>{'{'}</span>
              <span className='font-gothic'>Contact</span>
              <span>{'}'}</span>
            </div>
            <div className="flex flex-col gap-0">
              <a href="https://iaryansharma.me" target="_blank" rel="noopener noreferrer" className="block hover:text-[#7b80ff] transition-colors text-xl font-gothic">
                iaryansharma.me
              </a>
              <a href="mailto:aryansharma.developer@gmail.com" target="_blank" rel="noopener noreferrer" className="block hover:text-[#7b80ff] transition-colors text-xl font-gothic">
                aryansharma.developer@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Large Text Logo */}
      <div className="w-full overflow-hidden">
        <div className="flex justify-between w-full">
          {['F', 'L', 'U', 'X'].map((letter, index) => (
            <div 
              key={index} 
              className="text-[15vw] font-bold leading-none font-gothic"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {letter}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4 text-sm text-white/60">
          <div className='font-gothic'>©2025 All Rights Reserved.</div>
          <div className='font-gothic'>Built with coffee,code and a bit of financial trauma ❤️</div>
          <div className='font-gothic'>FLUX</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
