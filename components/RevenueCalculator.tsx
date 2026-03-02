import React, { useState, useMemo } from 'react';
import { Section } from './ui/Section';
import { CalculatorState } from '../types';
import { Activity } from 'lucide-react';
import { CountUp } from './ui/CountUp';
import { TiltCard } from './ui/TiltCard';

interface RevenueCalculatorProps {
  onOpenContact: () => void;
}

export const RevenueCalculator: React.FC<RevenueCalculatorProps> = ({ onOpenContact }) => {
  
  const [state, setState] = useState<CalculatorState>({
    monthlyLeads: 50,
    avgJobProfit: 3000,
    ghostingRate: 30, // Percentage
  });

  const calculationResult = useMemo(() => {
    // Formula:
    // 1. Calculate how many leads ghost or no-show
    const lostJobsPerMonth = state.monthlyLeads * (state.ghostingRate / 100);
    
    // 2. Calculate Monthly Lost Profit
    const monthlyLostProfit = lostJobsPerMonth * state.avgJobProfit;

    // 3. Calculate Annual
    const annualLostProfit = monthlyLostProfit * 12;

    return {
      val: Math.floor(annualLostProfit),
      label: "ANNUAL PROFIT LOST ON UNCLOSED QUOTES"
    };
  }, [state]);

  const handleSliderChange = (key: keyof CalculatorState, value: string) => {
    setState(prev => ({ ...prev, [key]: Number(value) }));
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="bg-slate-950 py-24 relative overflow-hidden">
        {/* Animated Background Line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Controls Panel */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                 <Activity className="text-emerald-500 animate-pulse" />
                 <span className="text-emerald-500 font-mono text-sm tracking-widest">PROFIT_CALCULATOR</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Calculate Missed Revenue
              </h2>
              
              <p className="text-slate-400 border-l-2 border-slate-700 pl-4 py-2">
                See exactly how much profit you are losing annually to tire kickers, no-shows, and unclosed quotes.
              </p>
            </div>

            <div className="space-y-10">
              
                  {/* Slider 1: Monthly Leads */}
                  <div className="space-y-4 group">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-slate-200 font-mono">MONTHLY_LEADS</span>
                      <span className="text-emerald-400 font-mono text-xl">{state.monthlyLeads}</span>
                    </div>
                    <div className="relative h-2 bg-slate-800 rounded-full">
                        <div className="absolute top-0 left-0 h-full bg-emerald-500 rounded-full" style={{width: `${(state.monthlyLeads/300)*100}%`}}></div>
                        <input 
                        type="range" 
                        min="20" 
                        max="300" 
                        step="10"
                        value={state.monthlyLeads} 
                        onChange={(e) => handleSliderChange('monthlyLeads', e.target.value)}
                        className="interactive absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                         <div className="absolute top-0 left-0 w-4 h-4 bg-white rounded-full shadow-lg pointer-events-none transition-all group-hover:scale-125" style={{left: `calc(${(state.monthlyLeads/300)*100}% - 8px)`, top: '-4px'}}></div>
                    </div>
                  </div>

                  {/* Slider 2: Avg Job Profit */}
                  <div className="space-y-4 group">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-slate-200 font-mono">AVG_JOB_PROFIT</span>
                      <span className="text-emerald-400 font-mono text-xl">{formatCurrency(state.avgJobProfit)}</span>
                    </div>
                     <div className="relative h-2 bg-slate-800 rounded-full">
                        <div className="absolute top-0 left-0 h-full bg-emerald-500 rounded-full" style={{width: `${(state.avgJobProfit/15000)*100}%`}}></div>
                        <input 
                        type="range" 
                        min="2000" 
                        max="15000" 
                        step="500"
                        value={state.avgJobProfit} 
                        onChange={(e) => handleSliderChange('avgJobProfit', e.target.value)}
                        className="interactive absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                         <div className="absolute top-0 left-0 w-4 h-4 bg-white rounded-full shadow-lg pointer-events-none transition-all group-hover:scale-125" style={{left: `calc(${(state.avgJobProfit/15000)*100}% - 8px)`, top: '-4px'}}></div>
                    </div>
                  </div>

                  {/* Slider 3: Ghosting Rate */}
                  <div className="space-y-4 group">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-slate-200 font-mono">GHOSTING_RATE</span>
                      <span className="text-emerald-400 font-mono text-xl">{state.ghostingRate}%</span>
                    </div>
                    <div className="relative h-2 bg-slate-800 rounded-full">
                        <div className="absolute top-0 left-0 h-full bg-emerald-500 rounded-full" style={{width: `${(state.ghostingRate / 80)*100}%`}}></div>
                        <input 
                        type="range" 
                        min="10" 
                        max="80" 
                        step="5"
                        value={state.ghostingRate} 
                        onChange={(e) => handleSliderChange('ghostingRate', e.target.value)}
                        className="interactive absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                         <div className="absolute top-0 left-0 w-4 h-4 bg-white rounded-full shadow-lg pointer-events-none transition-all group-hover:scale-125" style={{left: `calc(${(state.ghostingRate / 80)*100}% - 8px)`, top: '-4px'}}></div>
                    </div>
                  </div>
              
            </div>
          </div>

          {/* Results Display - HUD Style */}
          <div className="lg:col-span-5 h-full">
            <TiltCard className="h-full">
                <div className={`h-full bg-slate-900/80 rounded-2xl border-2 border-red-500/30 p-8 lg:p-12 text-center flex flex-col justify-center relative backdrop-blur-xl`}>
                    
                    {/* Corner Markers */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-slate-500 rounded-tl-lg m-2"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-slate-500 rounded-tr-lg m-2"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-slate-500 rounded-bl-lg m-2"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-slate-500 rounded-br-lg m-2"></div>
                    
                    <div className="relative z-10">
                        <h3 className="text-red-400 font-mono text-xs tracking-[0.2em] mb-8">
                        {calculationResult.label}
                        </h3>
                        
                        <div className={`text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-red-400 mb-6 font-mono break-words drop-shadow-[0_0_10px_rgba(239,68,68,0.2)]`}>
                        <CountUp end={calculationResult.val} />
                        </div>
                        
                        <button 
                        onClick={onOpenContact}
                        className={`interactive mt-8 w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 rounded font-mono uppercase tracking-wider transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]`}
                        >
                        Automate My Estimates
                        </button>
                    </div>
                </div>
            </TiltCard>
          </div>

        </div>
      </Section>
    </div>
  );
};