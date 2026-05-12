"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Search, 
  Filter, 
  Clock, 
  Signal, 
  CheckCircle2, 
  HelpCircle,
  ChevronDown
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const courseList = [
  {
    id: 1,
    title: "Forex Trading Masterclass",
    category: "Forex",
    duration: "4 Weeks",
    level: "Beginner to Advanced",
    price: "₹25,000",
    image: "/forex.png",
    features: ["Market Structure", "Price Action", "SMC & ICT Concepts", "Live Trading"]
  },
  {
    id: 2,
    title: "Stock Market Professional",
    category: "Stocks",
    duration: "6 Weeks",
    level: "Intermediate",
    price: "₹25,000",
    image: "/stocks.png",
    features: ["Intraday Trading", "Portfolio Mgmt", "Options Basics", "Risk Analysis"]
  },
  {
    id: 3,
    title: "Crypto Masterclass",
    category: "Crypto",
    duration: "3 Weeks",
    level: "All Levels",
    price: "₹25,000",
    image: "/crypto.png",
    features: ["Blockchain Basics", "Altcoin Analysis", "Defi Strategies", "Security"]
  },
  {
    id: 4,
    title: "Technical Analysis Elite",
    category: "Technical",
    duration: "2 Weeks",
    level: "Advanced",
    price: "₹25,000",
    image: "/technical.png",
    features: ["Harmonic Patterns", "Elliott Wave", "Wyckoff Theory", "Volume Profile"]
  }
];

const faqs = [
  {
    q: "Is the course suitable for beginners?",
    a: "Yes, our programs are designed to take you from absolute zero to a professional level. We cover all fundamentals before moving to advanced strategies."
  },
  {
    q: "Are live classes available?",
    a: "Absolutely. We conduct regular live trading sessions where students can see expert execution and ask questions in real-time."
  },
  {
    q: "Will recordings be provided?",
    a: "Yes, all live sessions are recorded and uploaded to the student portal for lifetime access."
  },
  {
    q: "Is mentorship included?",
    a: "Mentorship is the core of ITTA. You get lifetime access to our mentors and the private trading community."
  },
  {
    q: "Are certificates provided?",
    a: "Yes, upon successful completion of the course and assessment, you will receive a professional certification from ITTA Academy."
  }
];

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />

      <main className="flex-grow pt-32 pb-20">
        {/* Header */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1 rounded-full">Our Programs</Badge>
            <h1 className="text-6xl md:text-8xl font-heading font-bold text-white tracking-tighter">THE <span className="text-primary italic">CURRICULUM</span></h1>
            <p className="text-white/40 max-w-2xl mx-auto text-xl">
              Professional-grade trading education designed to build consistent profitability in any market condition.
            </p>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="px-6 mb-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <div className="relative flex-grow w-full group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5 group-focus-within:text-primary transition-colors" />
              <Input 
                placeholder="Search for courses..." 
                className="pl-14 bg-neutral-900 border-white/5 h-20 rounded-3xl focus:ring-primary focus:border-primary/30 text-white text-lg"
              />
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <Button variant="outline" className="h-20 px-10 border-white/5 bg-neutral-900 rounded-3xl flex-grow md:flex-grow-0 text-white hover:bg-white/5 text-lg font-bold">
                <Filter className="w-5 h-5 mr-3" /> Filters
              </Button>
              <Button className="h-20 px-12 bg-primary hover:bg-primary/90 text-black rounded-3xl flex-grow md:flex-grow-0 text-lg font-extrabold shadow-[0_0_40px_rgba(234,179,8,0.2)]">
                Search
              </Button>
            </div>
          </div>
        </section>

        {/* Course Grid */}
        <section className="px-6 mb-40">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {courseList.map((course) => (
              <motion.div
                key={course.id}
                whileHover={{ y: -10 }}
                className="group relative p-1 rounded-[3rem] bg-white/5 hover:bg-gradient-to-br hover:from-primary/20 hover:to-transparent transition-all duration-700"
              >
                <div className="bg-neutral-950 rounded-[2.8rem] overflow-hidden border border-white/5 h-full flex flex-col">
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                    <Badge className="absolute top-8 right-8 bg-primary text-black border-none px-4 py-1 font-black uppercase text-[10px] tracking-widest">{course.category}</Badge>
                  </div>
                  
                  <div className="p-10 flex-grow flex flex-col justify-between space-y-10">
                    <div className="space-y-6">
                      <h3 className="text-3xl font-bold font-heading text-white group-hover:text-primary transition-colors duration-500">{course.title}</h3>
                      <div className="flex items-center gap-8 text-white/40 font-medium">
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-primary" /> {course.duration}
                        </div>
                        <div className="flex items-center gap-3">
                          <Signal className="w-5 h-5 text-primary" /> {course.level}
                        </div>
                      </div>
                      <div className="h-px bg-white/5" />
                      <div className="grid grid-cols-2 gap-4">
                        {course.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-3 text-white/50 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary/40 shrink-0" /> 
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <p className="text-xs text-white/30 uppercase tracking-[0.2em] font-bold mb-1">Pricing</p>
                        <div className="text-4xl font-black text-white">{course.price}</div>
                      </div>
                      <Link href={`/checkout?id=${course.id}`}>
                        <Button className="bg-primary hover:bg-primary/90 text-black font-black px-10 h-16 rounded-2xl text-lg shadow-[0_0_30px_rgba(234,179,8,0.15)]">
                          Enroll Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-neutral-950 border-t border-white/5 px-6">
          <div className="max-w-4xl mx-auto space-y-20">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-primary/20">
                <HelpCircle className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tighter">COMMON <span className="text-primary italic">QUESTIONS</span></h2>
              <p className="text-white/40 text-xl max-w-2xl mx-auto">Everything you need to know about our trading ecosystem.</p>
            </div>
            
            <Accordion className="space-y-6" type="single" collapsible>
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-white/5 bg-black rounded-[2rem] overflow-hidden px-10 transition-all hover:border-primary/20 group">
                  <AccordionTrigger className="hover:no-underline py-10 text-left group-data-[state=open]:text-primary transition-colors">
                    <span className="font-bold text-2xl text-white group-data-[state=open]:text-primary transition-colors">{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/40 pb-10 text-lg leading-relaxed border-t border-white/5 pt-6 mt-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

