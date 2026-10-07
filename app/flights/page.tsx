"use client";

import { useState } from "react";
import Link from "next/link";
import { Plane, Calendar, Filter, Check, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock Galileo GDS Data
const mockFlights = [
  {
    id: "galileo-101",
    airline: "Emirates",
    flightNumber: "EK 723",
    from: "ADD",
    to: "DXB",
    deptTime: "15:30",
    arrTime: "20:45",
    duration: "4h 15m",
    stops: "Non-stop",
    basePrice: 420,
    taxes: 85,
  },
  {
    id: "galileo-102",
    airline: "Ethiopian Airlines",
    flightNumber: "ET 600",
    from: "ADD",
    to: "DXB",
    deptTime: "22:15",
    arrTime: "03:30",
    duration: "4h 15m",
    stops: "Non-stop",
    basePrice: 380,
    taxes: 95,
  },
  {
    id: "galileo-103",
    airline: "Qatar Airways",
    flightNumber: "QR 1427",
    from: "ADD",
    to: "DXB",
    deptTime: "01:35",
    arrTime: "09:20",
    duration: "6h 45m",
    stops: "1 Stop (DOH)",
    basePrice: 350,
    taxes: 110,
  }
];

export default function FlightsSearchPage() {
  const [markupPercent] = useState(10); // 10% Agent Service Charge
  const fixedMarkupFee = 25; // $25 flat fee per ticket

  return (
    <main className="min-h-screen bg-[#F8FAFC] dark:bg-[#071326] pb-20">
      {/* ── Hero / Search Header ────────────────────────────────────────── */}
      <section className="relative pt-24 pb-10 bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340] overflow-hidden mb-8">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-[#C59B27]/10 blur-[100px] pointer-events-none" />
        <div className="relative z-10 container mx-auto max-w-6xl px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-4">
              <Plane className="w-3.5 h-3.5" />
              <span>Book Your Flight</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">Search Flights</h1>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
              <Link href="/" className="hover:text-[#DFB75C] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#DFB75C]">Flights</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/20">
            <div className="flex-1">
              <label className="text-xs uppercase tracking-wider text-[#DFB75C] font-semibold mb-1 block">From</label>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 font-medium text-white">Addis Ababa (ADD)</div>
            </div>
            <div className="flex-1">
              <label className="text-xs uppercase tracking-wider text-[#DFB75C] font-semibold mb-1 block">To</label>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 font-medium text-white">Dubai (DXB)</div>
            </div>
            <div className="flex-1">
              <label className="text-xs uppercase tracking-wider text-[#DFB75C] font-semibold mb-1 block">Date</label>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 font-medium text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#DFB75C]" /> 25 Aug, 2026
              </div>
            </div>
            <div className="flex items-end">
              <Button className="w-full md:w-auto h-[42px] bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] font-bold rounded-xl px-8">
                Modify Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Container */}
      <div className="container mx-auto max-w-6xl px-4 flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="bg-white dark:bg-[#0D2245] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm sticky top-28">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
              <Filter className="w-5 h-5 text-[#C59B27]" />
              <h2 className="font-serif font-bold text-lg text-[#0A1E3F] dark:text-white">Filters</h2>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-bold text-[#0A1E3F] dark:text-white mb-3">Stops</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="w-5 h-5 rounded border border-[#DFB75C] bg-[#DFB75C]/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#DFB75C]" />
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-300">Non-stop</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="w-5 h-5 rounded border border-slate-300 dark:border-slate-600 flex items-center justify-center"></div>
                  <span className="text-sm text-slate-600 dark:text-slate-300">1 Stop</span>
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#0A1E3F] dark:text-white mb-3">Airlines</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="w-5 h-5 rounded border border-[#DFB75C] bg-[#DFB75C]/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#DFB75C]" />
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-300">Emirates</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="w-5 h-5 rounded border border-[#DFB75C] bg-[#DFB75C]/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#DFB75C]" />
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-300">Ethiopian Airlines</span>
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Flight Results */}
        <div className="flex-1 flex flex-col gap-5">
          {mockFlights.map((flight) => {
            // Calculate Agent Service Charge
            const totalBaseTaxes = flight.basePrice + flight.taxes;
            const dynamicMarkup = Math.round((totalBaseTaxes * markupPercent) / 100);
            const totalAgentCharge = dynamicMarkup + fixedMarkupFee;
            const finalPrice = totalBaseTaxes + totalAgentCharge;

            return (
              <div key={flight.id} className="bg-white dark:bg-[#0D2245] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-[#DFB75C]/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  {/* Airline & Route */}
                  <div className="flex-1 w-full flex flex-col sm:flex-row items-center gap-6 md:gap-10">
                    <div className="w-20 text-center">
                      <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Plane className="w-6 h-6 text-[#C59B27]" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300">{flight.airline}</span>
                      <span className="text-[10px] text-slate-400 block">{flight.flightNumber}</span>
                    </div>

                    <div className="flex-1 flex items-center justify-between w-full">
                      <div className="text-center sm:text-left">
                        <h4 className="text-2xl font-bold text-[#0A1E3F] dark:text-white">{flight.deptTime}</h4>
                        <p className="text-sm text-slate-500 font-medium">{flight.from}</p>
                      </div>
                      
                      <div className="flex-1 flex flex-col items-center px-4">
                        <span className="text-xs text-slate-400 mb-1">{flight.duration}</span>
                        <div className="w-full flex items-center relative">
                          <div className="w-2 h-2 rounded-full border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-[#0D2245] z-10" />
                          <div className="flex-1 h-px bg-slate-300 dark:bg-slate-600" />
                          <Plane className="w-4 h-4 text-slate-400 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2" />
                          <div className="w-2 h-2 rounded-full border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-[#0D2245] z-10" />
                        </div>
                        <span className="text-[10px] font-semibold text-[#C59B27] mt-1 bg-amber-50 dark:bg-amber-950/30 px-2 py-0.5 rounded-full">{flight.stops}</span>
                      </div>

                      <div className="text-center sm:text-right">
                        <h4 className="text-2xl font-bold text-[#0A1E3F] dark:text-white">{flight.arrTime}</h4>
                        <p className="text-sm text-slate-500 font-medium">{flight.to}</p>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block w-px h-24 bg-slate-100 dark:bg-slate-800 mx-2" />

                  {/* Pricing & Booking */}
                  <div className="w-full md:w-48 text-center md:text-right flex flex-col justify-center">
                    <p className="text-xs text-slate-400 font-medium mb-1">Total Price (incl. fees)</p>
                    <h3 className="font-serif text-3xl font-bold text-[#0A1E3F] dark:text-white mb-1">
                      ${finalPrice}
                    </h3>
                    <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mb-4 flex items-center justify-center md:justify-end gap-1">
                      <ShieldCheck className="w-3 h-3" /> Tickets Available
                    </p>
                    <Link 
                      href={`/flights/checkout?flightId=${flight.id}&price=${finalPrice}&base=${flight.basePrice}&taxes=${flight.taxes}&fee=${totalAgentCharge}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] font-bold text-sm transition-all shadow-md shadow-[#DFB75C]/20"
                    >
                      Book Ticket <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
