import React from 'react';
import { Section } from './ui/Section';
import { TiltCard } from './ui/TiltCard';
import { ShieldCheck, MessageSquare, Repeat } from 'lucide-react';

const FeatureItem = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  description,
  className = ""
}: { 
  icon: React.ElementType, 
  title: string, 
  subtitle: string, 
  description: string,
  className?: string
}) => (
  <TiltCard className={`h-full ${className}`}>
    <div className="p-8 h-full flex flex-col bg-slate-900 border border-slate-800 rounded-2xl hover:border-emerald-500/30 transition-all relative overflow-hidden group">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-32 bg-emerald-500/5 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 group-hover:bg-emerald-500/10 transition-colors"></div>

      <div className="w-12 h-12 bg-slate-800/80 rounded-lg flex items-center justify-center mb-6 text-emerald-400 border border-slate-700 shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} strokeWidth={2.5} />
      </div>
      
      <div className="relative z-10">
        <p className="text-emerald-500 font-mono text-xs uppercase tracking-wider mb-2">{subtitle}</p>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-slate-400 leading-relaxed text-sm">
            {description}
        </p>
      </div>
    </div>
  </TiltCard>
);

export const Features: React.FC = () => {
  return (
    <Section id="features">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The Contractor <span className="text-emerald-500">Ops Infrastructure</span>
            </h2>
            <p className="text-slate-400 text-lg">
            We replace manual follow-up with deterministic code. Three pillars to ensure your crews are always working and your quotes are always closing.
            </p>
        </div>
        <div className="hidden md:block">
            <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs border border-emerald-500/30 px-3 py-1 rounded bg-emerald-500/10">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                SYSTEM ACTIVE
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Gatekeeper */}
        <FeatureItem 
            icon={ShieldCheck}
            title="The Gatekeeper"
            subtitle="Renter Filter"
            description="Stop Driving to Renters. Our system texts instantly: 'Are you the homeowner?' and 'Is this a repair or replace?' We filter out the junk so you only drive to paid estimates."
        />

        {/* Card 2: Slack Alerts */}
        <FeatureItem 
            icon={MessageSquare}
            title="Slack Estimate Alerts"
            subtitle="Dispatch Control"
            description="Get a Slack ping: '🔔 New Qualified Roof Estimate - [Zip Code].' Dispatch your sales guy immediately to lock in the appointment."
        />

        {/* Card 3: Quote Rehash */}
        <FeatureItem 
            icon={Repeat}
            title="The Quote Rehash"
            subtitle="Automated Follow-Up"
            description="Most money is lost after the price is given. Our system texts testimonials and financing options every 3 days until they sign the contract."
        />

      </div>
    </Section>
  );
};