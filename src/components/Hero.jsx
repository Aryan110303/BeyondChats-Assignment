import React from 'react'
import Iphone15Pro from "./magicui/iphone-15-pro"
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern"
import { TextAnimate } from "./magicui/text-animate"
import { cn } from "../lib/utils"

function Hero() {
  return (
    <section className="relative bg-black" id='hero'>
      {/* Background Grid Pattern - positioned to extend behind header */}
      <div className="absolute inset-x-0 top-[-8rem] h-[calc(100%+8rem)]">
        <AnimatedGridPattern
          numSquares={60}
          maxOpacity={0.5}
          duration={3}
          repeatDelay={1}
          className={cn(
            "w-full h-full fill-white/[0.03] stroke-white/[0.15]",
            "[mask-image:radial-gradient(1500px_circle_at_center,white,transparent)]",
          )}
        />
      </div>

      {/* Hero Content */}
      <div className="relative min-h-screen">
        {/* Top Text Layer */}
        <div className="relative z-10 flex flex-col items-center justify-center mt-20">
          <h1 className="text-[10rem] font-bold flex items-center gap-8">
            <TextAnimate
              as="span"
              animation="blurInUp"
              by="word"
              className="text-white font-gothic"
              delay={0.5}
              duration={0.8}
            >
              YOUR
            </TextAnimate>{' '}
            <TextAnimate
              as="span"
              animation="blurInUp"
              by="word"
              className="text-[#7b80ff] font-gothic"
              delay={0.8}
              duration={0.8}
            >
              FINANCE
            </TextAnimate>
          </h1>
        </div>

        {/* iPhone Layer */}
        <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/3 z-20 w-[400px]">
          <Iphone15Pro
            className="w-full"
            videoSrc={new URL("../assets/mockup-video.mp4", import.meta.url).href}
          />
        </div>

        {/* Bottom Text */}
        <div className="relative z-10 flex flex-col items-center justify-center mt-[40rem]">
          <h2 className="text-[10rem] font-bold flex items-center gap-8">
            <TextAnimate
              as="span"
              animation="blurInUp"
              by="word"
              className="text-white font-gothic"
              delay={0.5}
              duration={0.8}
            >
              ALL IN
            </TextAnimate>{' '}
            <TextAnimate
              as="span"
              animation="blurInUp"
              by="word"
              className="text-[#7b80ff] font-gothic"
              delay={0.8}
              duration={0.8}
            >
              ONE
            </TextAnimate>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Hero
