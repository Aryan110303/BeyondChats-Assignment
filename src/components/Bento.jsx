import React, { useRef, forwardRef } from 'react'
import { BentoGrid, BentoCard } from '@/components/magicui/bento-grid'
import { AnimatedList } from '@/components/magicui/animated-list'
import { Marquee } from '@/components/magicui/marquee'
import { AnimatedBeam } from '@/components/magicui/animated-beam'
import { cn } from '@/lib/utils'
import { BellIcon, Share2Icon, WalletIcon, CreditCardIcon, PieChartIcon } from 'lucide-react'
import { CalendarIcon, FileTextIcon, ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { MorphingText } from '@/components/magicui/morphing-text'

const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border border-white/20 bg-[#18181B] p-2",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const files = [
  {
    name: "budget_2024.xlsx",
    body: "Annual budget planning spreadsheet with monthly breakdowns and expense tracking.",
  },
  {
    name: "investments.pdf",
    body: "Investment portfolio analysis and strategy document for long-term financial growth.",
  },
  {
    name: "savings_goals.txt",
    body: "Personal savings goals and milestones for the year with target dates.",
  },
  {
    name: "expenses.csv",
    body: "Monthly expense tracking data with categorized spending and analytics.",
  },
  {
    name: "retirement_plan.pdf",
    body: "Long-term retirement planning document with investment strategies and projections.",
  },
];

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTH_DAYS = [
  [30, 31, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11, 12],
];

function Bento() {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const features = [
    {
      Icon: FileTextIcon,
      name: "Save your files",
      description: "We automatically save your financial documents as you work.",
      href: "#",
      cta: "Learn more",
      className: "col-span-1 row-span-2 font-gothic bg-[#18181B] rounded-3xl p-8 relative overflow-hidden text-white border border-white/[0.08] [box-shadow:inset_0px_0px_8px_rgba(255,255,255,0.05)]",
      background: (
        <div className="absolute inset-0 overflow-hidden">
          <Marquee
            pauseOnHover
            className="absolute top-32 w-full [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
          >
            <div className="flex gap-4">
              {files.map((f, idx) => (
                <figure
                  key={idx}
                  className={cn(
                    "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                    "border-white/[.08] bg-white/[.02] hover:bg-white/[.04]",
                    "transform-gpu transition-all duration-300 ease-out"
                  )}
                >
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-col">
                      <figcaption className="text-sm font-medium text-white/90">
                        {f.name}
                      </figcaption>
                    </div>
                  </div>
                  <blockquote className="mt-2 text-xs text-white/60">{f.body}</blockquote>
                </figure>
              ))}
            </div>
          </Marquee>
        </div>
      ),
    },
    {
      Icon: BellIcon,
      name: "Notifications",
      description: "Get notified when something happens.",
      href: "#",
      cta: "Learn more",
      className: "col-span-2 row-span-2 font-gothic bg-[#18181B] rounded-3xl p-8 relative overflow-hidden text-white border border-white/[0.08] [box-shadow:inset_0px_0px_8px_rgba(255,255,255,0.05)]",
      background: (
        <div className="absolute inset-0 pt-32 px-[15%]">
          <AnimatedList className="w-full gap-4">
            {[
              {
                icon: <FileTextIcon className="w-5 h-5 text-white/90" />,
                title: "Monthly budget has been updated",
                time: "2m ago",
                subtitle: "",
                iconBg: "bg-[#8B5CF6]/20"
              },
              {
                icon: <Share2Icon className="w-5 h-5 text-white/90" />,
                title: "Payment received",
                time: "5m ago",
                subtitle: "",
                iconBg: "bg-[#EC4899]/20"
              },
              {
                icon: <CalendarIcon className="w-5 h-5 text-white/90" />,
                title: "Upcoming payment reminder",
                time: "10m ago",
                subtitle: "",
                iconBg: "bg-[#10B981]/20"
              }
            ].map((notification, idx) => (
              <div
                key={idx}
                className="w-full rounded-lg flex items-center gap-4 bg-black/20 border border-white/[0.08] p-4"
              >
                <div className="flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full ${notification.iconBg} flex items-center justify-center`}>
                    {notification.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-white/90">
                      {notification.title}
                    </p>
                    <span className="text-xs text-white/40">
                      {notification.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedList>
        </div>
      ),
    },
    {
      Icon: Share2Icon,
      name: "Integrations",
      description: "Connect with your favorite financial tools.",
      href: "#",
      cta: "Learn more",
      className: "col-span-2 row-span-2 font-gothic bg-[#18181B] rounded-3xl p-8 relative overflow-hidden text-white border border-white/[0.08] [box-shadow:inset_0px_0px_8px_rgba(255,255,255,0.05)]",
      background: (
        <div ref={containerRef} className="absolute inset-0">
          <Circle ref={leftRef} className="absolute left-[15%] top-1/2 -translate-y-1/2">
            <WalletIcon className="w-8 h-8 text-white/60" />
          </Circle>
          <Circle ref={rightRef} className="absolute right-[15%] top-1/2 -translate-y-1/2">
            <Share2Icon className="w-8 h-8 text-white/60" />
          </Circle>
          
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={leftRef}
            toRef={rightRef}
            curvature={-120}
            duration={4}
            gradientStartColor="#EC4899"
            gradientStopColor="#8B5CF6"
            pathWidth={4}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={leftRef}
            toRef={rightRef}
            curvature={120}
            duration={4}
            gradientStartColor="#8B5CF6"
            gradientStopColor="#10B981"
            pathWidth={4}
            reverse={true}
          />
        </div>
      ),
    },
    {
      Icon: CalendarIcon,
      name: "Calendar",
      description: "Use the calendar to filter your files by date.",
      className: "col-span-1 row-span-2 font-gothic bg-[#18181B] rounded-3xl p-8 relative overflow-hidden text-white border border-white/[0.08] [box-shadow:inset_0px_0px_8px_rgba(255,255,255,0.05)]",
      href: "#",
      cta: "Learn more",
      background: (
        <div className="absolute inset-0">
          <div className="relative w-full h-full pt-32 px-6">
            <div className="w-full rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <button className="p-1 hover:bg-white/5 rounded">
                  <ChevronLeftIcon className="w-4 h-4 text-white/40" />
                </button>
                <div className="text-sm text-white/60">April 2025</div>
                <button className="p-1 hover:bg-white/5 rounded">
                  <ChevronRightIcon className="w-4 h-4 text-white/40" />
                </button>
              </div>
              
              <div className="grid grid-cols-7 gap-1 mb-2">
                {DAYS.map((day) => (
                  <div key={day} className="text-center text-xs text-white/40">
                    {day}
                  </div>
                ))}
              </div>
              
              {MONTH_DAYS.map((week, weekIndex) => (
                <div key={weekIndex} className="grid grid-cols-7 gap-1 mb-1">
                  {week.map((day, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={cn(
                        "text-center text-sm py-1 rounded hover:bg-white/5 cursor-pointer",
                        day <= 5 ? "text-white/90" : "text-white/60",
                        day === 1 && "bg-white/5"
                      )}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 px-4" id='bento'>
      <div className="max-w-7xl mx-auto">
        <div className="w-full text-5xl font-bold text-center text-white mb-16">
          <div className="inline-flex items-center justify-center gap-3 pr-20">
            <span className='font-gothic'>🧠 Stay Ahead of Your</span>
            <div className="h-[70px] flex items-center mt-[1.5rem]">
              <MorphingText
                texts={["Budget", "Savings", "Finances", "Money"]}
                className="!text-5xl !h-[70px] text-[#7b80ff] font-gothic"
              />
            </div>
          </div>
        </div>

        <BentoGrid className="auto-rows-[250px] gap-4">
          {features.map((feature, idx) => (
            <BentoCard 
              key={idx} 
              {...feature}
              className={cn(
                "group hover:bg-[#1c1c20] transition-colors duration-300",
                "text-white",
                feature.className
              )}
            >
              <div className="relative z-10">
                <feature.Icon className="w-6 h-6 text-white/80 mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">{feature.name}</h3>
                <p className="text-sm text-white/60">{feature.description}</p>
              </div>
              {feature.background}
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}

export default Bento
