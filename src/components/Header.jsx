import React from 'react';
import { SlideTabsExample } from './SlideBar';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mt-8">
      <div className="container mx-auto px-4">
        <nav className="flex items-center">
          {/* Company Name */}
          <div className="w-1/4">
            <h1 className="text-xl font-bold text-[#7b80ff] font-gothic">FLUX</h1>
          </div>

          {/* Navigation with SlideBar */}
          <div className="w-1/2 flex justify-center">
            <SlideTabsExample />
          </div>

          {/* Download buttons */}
          <div className="w-1/4 flex items-center justify-end gap-4">
            <InteractiveHoverButton className="border-white/[0.08] text-white hover:text-black font-gothic">
              Android
            </InteractiveHoverButton>
            <InteractiveHoverButton className="border-white/[0.08] text-white hover:text-black font-gothic">
              iOS
            </InteractiveHoverButton>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
