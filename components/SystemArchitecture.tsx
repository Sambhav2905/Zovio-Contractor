import React from 'react';
import { Section } from './ui/Section';
import { SpotlightCard } from './ui/SpotlightCard';
import { Clipboard, UserCheck, HardHat, FileCheck } from 'lucide-react';

export const SystemArchitecture: React.FC = () => {
    return (
        <Section className="relative" id="system-architecture">
             <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  The Job Flow
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                  From Free Estimate Request to Final Deposit. A linear, automated pipeline.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                
                {/* COLUMN A: The Front Office */}
                <SpotlightCard className="h-full" spotlightColor="rgba(16, 185, 129, 0.15)">
                  <div className="p-8 md:p-10 flex flex-col h-full group">
                    <div className="absolute top-0 right-0 p-4 opacity-50">
                         <span className="text-slate-600 font-mono text-xs uppercase border border-slate-700 px-2 py-1 rounded">PHASE_01</span>
                    </div>
                    
                    <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center text-emerald-400 mb-8 border border-slate-700 shadow-lg group-hover:scale-110 transition-transform">
                        <Clipboard size={32} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">The Front Office</h3>
                    <p className="text-emerald-500 font-mono text-sm uppercase tracking-wider mb-6">Lead & Filter</p>
                    
                    <div className="space-y-8 flex-grow">
                        <div className="relative pl-6 border-l border-emerald-500/30">
                            <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-emerald-500"></div>
                            <h4 className="text-white font-bold mb-1 flex items-center gap-2"><Clipboard size={16} /> Lead Ingest</h4>
                            <p className="text-slate-400 text-sm">Form Fill for Free Quote. Data parsed from website/ads.</p>
                        </div>
                         <div className="relative pl-6 border-l border-emerald-500/30">
                            <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-emerald-500"></div>
                            <h4 className="text-white font-bold mb-1 flex items-center gap-2"><UserCheck size={16} /> Filter</h4>
                            <p className="text-slate-400 text-sm">Bot checks: Homeowner? Timeline? Is this a valid job?</p>
                        </div>
                    </div>
                  </div>
                </SpotlightCard>

                {/* COLUMN B: The Field */}
                <SpotlightCard className="h-full" spotlightColor="rgba(59, 130, 246, 0.15)">
                  <div className="p-8 md:p-10 flex flex-col h-full group">
                     <div className="absolute top-0 right-0 p-4 opacity-50">
                         <span className="text-slate-600 font-mono text-xs uppercase border border-slate-700 px-2 py-1 rounded">PHASE_02</span>
                    </div>

                    <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400 mb-8 border border-slate-700 shadow-lg group-hover:scale-110 transition-transform">
                        <HardHat size={32} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">The Field</h3>
                    <p className="text-blue-400 font-mono text-sm uppercase tracking-wider mb-6">Estimate & Close</p>
                    
                     <div className="space-y-8 flex-grow">
                        <div className="relative pl-6 border-l border-blue-500/30">
                            <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-blue-500"></div>
                            <h4 className="text-white font-bold mb-1 flex items-center gap-2"><HardHat size={16} /> Estimate</h4>
                            <p className="text-slate-400 text-sm">Appointment Booked (Slack Alert). Sales rep arrives on time.</p>
                        </div>
                         <div className="relative pl-6 border-l border-blue-500/30">
                            <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-blue-500"></div>
                            <h4 className="text-white font-bold mb-1 flex items-center gap-2"><FileCheck size={16} /> Close</h4>
                            <p className="text-slate-400 text-sm">Quote Follow-up -> Contract Signed -> Deposit Paid.</p>
                        </div>
                    </div>

                  </div>
                </SpotlightCard>

            </div>
        </Section>
    );
};