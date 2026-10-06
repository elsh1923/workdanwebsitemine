"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CreditCard, ShieldCheck, User, Mail, Phone, Plane, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const basePrice = Number(searchParams.get("base") || 420);
  const taxes = Number(searchParams.get("taxes") || 85);
  const fee = Number(searchParams.get("fee") || 75); // Agent Service Charge
  const total = basePrice + taxes + fee;

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate Galileo Ticketing API & Payment Gateway Call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2500);
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="w-12 h-12 text-green-600" />
        </div>
        <h1 className="font-serif text-4xl font-bold text-[#0A1E3F] dark:text-white mb-4">
          Booking Confirmed!
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-lg mb-8">
          Your e-ticket has been issued and sent to your email. Your PNR is <strong>X8F9B2</strong>.
        </p>
        <Link href="/" className="inline-flex px-8 py-3 rounded-full bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] font-bold">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left: Passenger Details & Payment */}
      <div className="flex-1 space-y-8">
        <div className="bg-white dark:bg-[#0D2245] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-[#0A1E3F] dark:text-white mb-6">Passenger Details</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">First Name (as on passport)</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input type="text" required className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-[#C59B27] focus:outline-none" placeholder="John" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Last Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input type="text" required className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-[#C59B27] focus:outline-none" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input type="email" required className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-[#C59B27] focus:outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input type="tel" required className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-[#C59B27] focus:outline-none" placeholder="+1 234 567 8900" />
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="bg-white dark:bg-[#0D2245] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-[#0A1E3F] dark:text-white mb-6">Payment Method</h2>
          <div className="p-4 border-2 border-[#C59B27] bg-[#C59B27]/5 rounded-xl flex items-center justify-between cursor-pointer mb-6">
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-[#C59B27]" />
              <span className="font-bold text-[#0A1E3F] dark:text-white">Credit / Debit Card</span>
            </div>
            <div className="w-5 h-5 rounded-full border-[5px] border-[#C59B27]" />
          </div>
          
          <form onSubmit={handlePayment} className="space-y-6">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Card Number</label>
              <input type="text" required className="w-full px-4 py-3 bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-[#C59B27] focus:outline-none" placeholder="0000 0000 0000 0000" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Expiry Date</label>
                <input type="text" required className="w-full px-4 py-3 bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-[#C59B27] focus:outline-none" placeholder="MM/YY" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">CVC</label>
                <input type="text" required className="w-full px-4 py-3 bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-[#C59B27] focus:outline-none" placeholder="123" />
              </div>
            </div>
            
            <Button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-6 rounded-xl bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] font-bold text-lg shadow-lg shadow-[#DFB75C]/20"
            >
              {isProcessing ? "Processing Payment..." : `Pay $${total} securely`}
            </Button>
            <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-1">
              <ShieldCheck className="w-4 h-4 text-green-600" /> 256-bit Secure Encrypted Payment
            </p>
          </form>
        </div>
      </div>

      {/* Right: Order Summary */}
      <aside className="w-full lg:w-[400px] shrink-0">
        <div className="bg-[#0A1E3F] rounded-3xl p-6 shadow-xl text-white sticky top-28">
          <h2 className="font-serif text-2xl font-bold mb-6">Booking Summary</h2>
          
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <Plane className="w-6 h-6 text-[#DFB75C]" />
            </div>
            <div>
              <h4 className="font-bold">Addis Ababa (ADD)</h4>
              <p className="text-sm text-slate-400">to Dubai (DXB)</p>
            </div>
          </div>

          <div className="space-y-4 mb-6 pb-6 border-b border-white/10">
            <div className="flex justify-between text-sm">
              <span className="text-slate-300">Base Fare (1x Adult)</span>
              <span className="font-medium">${basePrice}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-300">Taxes & Airport Fees</span>
              <span className="font-medium">${taxes}</span>
            </div>
            <div className="flex justify-between text-sm items-center">
              <span className="text-[#DFB75C] flex items-center gap-1">
                Agent Service Charge
                <Info className="w-3 h-3" title="Workdan booking markup & processing fee" />
              </span>
              <span className="font-medium text-[#DFB75C]">${fee}</span>
            </div>
          </div>

          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-lg">Total</span>
            <span className="font-serif font-bold text-3xl text-[#DFB75C]">${total}</span>
          </div>
          <p className="text-right text-xs text-slate-400">Includes all taxes and fees</p>
        </div>
      </aside>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] dark:bg-[#071326] pt-28 pb-20">
      <div className="container mx-auto max-w-6xl px-4">
        <Link href="/flights" className="inline-flex items-center gap-2 text-sm font-semibold text-[#DFB75C] hover:text-[#C59B27] mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Search Results
        </Link>
        <Suspense fallback={<div className="text-center py-20 text-slate-500">Loading checkout...</div>}>
          <CheckoutContent />
        </Suspense>
      </div>
    </main>
  );
}
