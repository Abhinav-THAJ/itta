"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  CreditCard, 
  QrCode, 
  ChevronRight, 
  ShieldCheck, 
  ArrowLeft
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const courseList = [
  {
    id: 1,
    title: "Forex Trading Masterclass",
    price: "₹25,000",
    image: "/forex.png",
  },
  {
    id: 2,
    title: "Stock Market Professional",
    price: "₹25,000",
    image: "/stocks.png",
  },
  {
    id: 3,
    title: "Crypto Masterclass",
    price: "₹25,000",
    image: "/crypto.png",
  },
  {
    id: 4,
    title: "Technical Analysis Elite",
    price: "₹25,000",
    image: "/technical.png",
  }
];

function CheckoutContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const course = courseList.find(c => c.id === Number(id)) || courseList[0];
  
  const [paymentMethod, setPaymentMethod] = useState<"qr" | "card">("qr");


  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex items-center gap-4 mb-12">
        <Link href="/courses">
          <Button variant="ghost" className="text-white/50 hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Courses
          </Button>
        </Link>
        <div className="h-px flex-grow bg-white/5" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Course Summary */}
        <div className="space-y-10">
          <div className="space-y-6">
            <Badge className="bg-primary/20 text-primary border-none">Order Summary</Badge>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
              Complete Your <span className="text-primary">Enrollment</span>
            </h1>
            <p className="text-white/50 text-lg">
              You are just one step away from joining ITTA Academy and mastering the financial markets.
            </p>
          </div>

          <Card className="bg-[#0A0A0A] border-white/5 rounded-3xl overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3">
                  <img src={course.image} alt={course.title} className="h-full w-full object-cover aspect-video sm:aspect-square" />
                </div>
                <div className="sm:w-2/3 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                    <p className="text-white/40 text-sm">Professional Certification Program</p>
                  </div>
                  <div className="mt-8 flex items-end justify-between">
                    <div>
                      <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Total Amount</p>
                      <div className="text-3xl font-bold text-white">{course.price}</div>
                    </div>
                    <Badge variant="outline" className="border-green-500/20 text-green-500 bg-green-500/5">
                      Secure Checkout
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: CheckCircle2, text: "Lifetime Access" },
              { icon: CheckCircle2, text: "Private Community" },
              { icon: CheckCircle2, text: "Course Certificate" },
              { icon: CheckCircle2, text: "Live Mentorship" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white/60">
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
            <div>
              <p className="text-white font-bold text-sm mb-1">Secure Transaction</p>
              <p className="text-white/50 text-xs leading-relaxed">
                Your payment is processed through a highly secure gateway. We do not store any sensitive financial data.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Payment Methods */}
        <div className="space-y-8">
          <div className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8 md:p-10 shadow-3xl relative overflow-hidden">
            {/* Payment Method Selector */}
            <div className="flex p-1 bg-white/5 rounded-2xl mb-10">
              <button 
                onClick={() => setPaymentMethod("qr")}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl transition-all ${paymentMethod === "qr" ? "bg-primary text-white shadow-lg" : "text-white/50 hover:text-white"}`}
              >
                <QrCode className="w-5 h-5" />
                <span className="font-bold">QR Code</span>
              </button>
              <button 
                onClick={() => setPaymentMethod("card")}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl transition-all ${paymentMethod === "card" ? "bg-primary text-white shadow-lg" : "text-white/50 hover:text-white"}`}
              >
                <CreditCard className="w-5 h-5" />
                <span className="font-bold">Card / Net</span>
              </button>
            </div>

            <AnimatePresence mode="wait">
              {paymentMethod === "qr" ? (
                <motion.div 
                  key="qr"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-white">Scan to Pay</h3>
                    <p className="text-white/50 text-sm">Open any UPI app (GPay, PhonePe, Paytm) to scan</p>
                  </div>

                  <div className="relative group mx-auto w-64 h-64 bg-white p-4 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,102,255,0.2)]">
                    <img src="/qr-payment.png" alt="Payment QR Code" className="w-full h-full object-contain" />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>



                  <div className="text-center">
                    <p className="text-white/30 text-xs italic">
                      After payment, please take a screenshot and send it to +91 7907409671 via WhatsApp for instant access.
                    </p>
                  </div>

                  <Button className="w-full h-16 rounded-2xl bg-white text-black hover:bg-white/90 font-bold text-lg group">
                    I have paid <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              ) : (
                <motion.div 
                  key="card"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="p-12 text-center space-y-4 bg-white/5 rounded-3xl border border-dashed border-white/10">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <CreditCard className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Online Payment Gateway</h3>
                    <p className="text-white/40 text-sm">Direct card and net banking integration is currently being processed. Please use the QR code for instant enrollment.</p>
                    <Button 
                      variant="outline" 
                      onClick={() => setPaymentMethod("qr")}
                      className="border-primary/50 text-primary hover:bg-primary/5 mt-4"
                    >
                      Use QR Code Instead
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-8 opacity-30 grayscale contrast-200">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/UPI-Logo.png/600px-UPI-Logo.png" alt="UPI" className="h-4 object-contain" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4 object-contain" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-4 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505]">
      <Navbar />
      <main className="flex-grow pt-32">
        <Suspense fallback={<div className="h-screen flex items-center justify-center text-white">Loading checkout...</div>}>
          <CheckoutContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
