import React, { useEffect, useState } from 'react';
import { ArrowRight, Wrench, Truck, Clipboard, ShieldCheck, Plus } from 'lucide-react';
import { TiltCard } from './ui/TiltCard';

interface HeroProps {
  onOpenContact: () => void;
}

const Typewriter = ({ text, speed = 50 }: { text: string, speed?: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, speed); 
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className="font-mono text-emerald-400">
      {displayedText}
      <span className="animate-blink text-emerald-600">_</span>
    </span>
  );
};

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 overflow-hidden">
      
      {/* Dynamic Background Elements specific to Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[100px] animate-pulse-fast pointer-events-none"></div>

      {/* Terminal Status */}
      <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center gap-2 bg-slate-900/80 backdrop-blur border border-emerald-500/30 rounded-lg px-4 py-2 mb-8 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <ShieldCheck size={14} className="text-emerald-500" />
            <span className="text-xs font-mono text-slate-300">
                <Typewriter text="STATUS: FILTERING_RENTERS... QUALIFYING_JOBS..." speed={30} />
            </span>
        </div>
      </div>

      {/* Headline with Glitch Effect on Hover */}
      <h2 className="text-emerald-500 font-mono tracking-widest text-sm mb-4 uppercase">Contractor Sales Infrastructure</h2>
      <h1 className="relative z-10 max-w-5xl text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-tight group">
        Stop Chasing Tire Kickers. <br className="hidden md:block"/>
        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-cyan-400 transition-all duration-300 group-hover:blur-[1px]">
          Start Booking Jobs.
          <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-cyan-400 blur-md opacity-50 animate-pulse">
            Start Booking Jobs.
          </span>
        </span>
      </h1>

      {/* Subheadline */}
      <p className="relative z-10 max-w-3xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
        The automated backend that qualifies homeowners instantly, filters out renters, and chases every open quote until they buy.
      </p>

      {/* Interactive CTA */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-center">
        <button 
          onClick={onOpenContact}
          className="interactive relative overflow-hidden group bg-emerald-500 text-slate-950 font-bold text-lg py-4 px-10 rounded-xl transition-all hover:scale-105"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
          <span className="relative flex items-center gap-2">
            Automate My Estimates
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>

      {/* Tech Stack Grid */}
      <div className="mt-20 w-full max-w-5xl">
        <div className="text-slate-500 text-xs font-mono uppercase tracking-[0.3em] mb-8 opacity-60">Compatible With Your Stack</div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
                { name: "ServiceTitan", icon: Wrench, color: "text-blue-500" },
                { name: "Jobber", icon: Clipboard, color: "text-emerald-500" },
                { name: "Housecall Pro", icon: Truck, color: "text-indigo-500" },
                { name: "Angi Leads", icon: ShieldCheck, color: "text-orange-500" },
                { name: "50+ More", icon: Plus, color: "text-slate-400" }
            ].map((tech, i) => (
                <TiltCard key={i} className="h-full">
                    <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg backdrop-blur-sm flex items-center justify-center gap-3 hover:border-emerald-500/40 transition-colors cursor-default h-full">
                        <tech.icon className={`w-5 h-5 ${tech.color}`} />
                        <span className="font-bold text-slate-300 text-sm whitespace-nowrap">{tech.name}</span>
                    </div>
                </TiltCard>
            ))}
        </div>
      </div>
    </section>
  );
};