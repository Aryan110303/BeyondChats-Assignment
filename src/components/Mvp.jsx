import React, { useState, useEffect, useRef } from 'react'
import { Terminal, AnimatedSpan, TypingAnimation } from '@/components/magicui/terminal'
import { Meteors } from '@/components/magicui/meteors'
import { TextAnimate } from './magicui/text-animate'


const ColoredText = ({ text, colorIndex }) => {
  const words = text.split(' ');
  const randomIndex = colorIndex || Math.floor(Math.random() * words.length);
  return words.map((word, i) => 
    i === randomIndex ? 
      <span key={i} className="text-[#7b80ff]">{word} </span> : 
      <span key={i}>{word} </span>
  );
}

function Mvp() {
  const [isVisible, setIsVisible] = useState(false);
  const terminalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2 // Trigger when 20% of the terminal is visible
      }
    );

    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Meteors number={50} minDelay={0.2} maxDelay={1.2} minDuration={2} maxDuration={10} angle={215} />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-6xl font-bold text-center text-white mb-16 font-gothic">
         
            This is just the{' '}
          
          <span className="text-[#7b80ff] font-gothic">MVP</span>
        </h2>

        <div className="flex justify-center" ref={terminalRef}>
          <Terminal className="bg-black/50 backdrop-blur-xl w-full max-w-5xl min-h-[600px]">
            <div className="whitespace-pre-wrap break-words text-3xl">
              {isVisible && (
                <>
                  <AnimatedSpan delay={0}>
                    <span className="text-purple-400 text-3xl">{'>'}</span>
                    <TypingAnimation className="text-gray-300 ml-2 inline-block" duration={10}>
                      Yep, you're staring at the humble beginnings of what could be the next big thing in personal finance. Emphasis on could — because this is the MVP. The Minimum Viable Product. The baby version. The "I'm-trying-my-best-with-what-I-have" edition.
                    </TypingAnimation>
                  </AnimatedSpan>

                  <AnimatedSpan delay={2500}>
                    <span className="text-purple-400 text-3xl">{'>'}</span>
                    <TypingAnimation className="text-gray-300 ml-2 inline-block" duration={12} delay={2500}>
                      We're talking budget-level magic here. No funding, no big team, just caffeine, ambition, and one person probably Googling how to fix bugs at 2 AM.
                    </TypingAnimation>
                  </AnimatedSpan>

                  <AnimatedSpan delay={4500}>
                    <span className="text-purple-400 text-3xl">{'>'}</span>
                    <TypingAnimation className="text-gray-300 ml-2 inline-block" duration={12} delay={4500}>
                      The basics are here — track savings, set goals, get smarter about money. But the real magic? That's still chilling in the "future features" folder.
                    </TypingAnimation>
                  </AnimatedSpan>

                  <AnimatedSpan delay={7000}>
                    <span className="text-purple-400 text-3xl">{'>'}</span>
                    <TypingAnimation className="text-gray-300 ml-2 inline-block" duration={12} delay={7000}>
                      We're talking auto-investments, goal-based nudges, AI that low-key knows more than your finance prof — and yes, full-on UPI payments that log your chai and impulse shopping automatically.
                    </TypingAnimation>
                  </AnimatedSpan>

                  <AnimatedSpan delay={9500}>
                    <span className="text-purple-400 text-3xl">{'>'}</span>
                    <TypingAnimation className="text-gray-300 ml-2 inline-block" duration={12} delay={9500}>
                      But for that, we need some investor to stop doom-scrolling LinkedIn and fund this masterpiece. Until then, you're using the beta version of brilliance. Handle with care.
                    </TypingAnimation>
                  </AnimatedSpan>
                </>
              )}
            </div>
          </Terminal>
        </div>
      </div>
    </section>
  )
}

export default Mvp
