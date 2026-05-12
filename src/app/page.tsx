"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Play, 
  Star, 
  Globe, 
  ShieldCheck, 
  Award, 
  Zap 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const features = [
  { icon: Award, title: "Expert Trading Mentors", desc: "Learn from professional traders with years of real market experience." },
  { icon: Play, title: "Live Market Sessions", desc: "Watch live trading and execution in real-time market conditions." },
  { icon: TrendingUp, title: "Technical Analysis", desc: "Master price action, SMC concepts, and advanced chart patterns." },
  { icon: ShieldCheck, title: "Risk Management", desc: "Learn how to protect your capital and maintain long-term success." },
  { icon: Users, title: "Lifetime Support", desc: "Join our exclusive trading community for lifetime mentorship and support." },
  { icon: Zap, title: "Practical Education", desc: "No boring theory—focus on practical simulations and real trading." }
];

const courses = [
  {
    title: "Forex Trading Masterclass",
    desc: "Learn currency market fundamentals, price action, and live trading strategies.",
    price: "₹25,000",
    badge: "Most Popular",
    level: "Beginner to Advanced",
    image: "/forex.png"
  },
  {
    title: "Stock Market Professional",
    desc: "Understand investing, intraday trading, and portfolio management.",
    price: "₹25,000",
    badge: "Trending",
    level: "Intermediate",
    image: "/stocks.png"
  },
  {
    title: "Crypto Trading Masterclass",
    desc: "Master cryptocurrency markets, volatility management, and trading strategies.",
    price: "₹25,000",
    badge: "New",
    level: "All Levels",
    image: "/crypto.png"
  }
];

const testimonials = [
  {
    text: "The mentorship and practical trading sessions helped me understand market psychology and improve my trading confidence significantly.",
    author: "Arjun S.",
    role: "Full-time Trader"
  },
  {
    text: "ITTA provides professional-level trading education with real market insights. The SMC concepts are game-changers.",
    author: "Meera K.",
    role: "Student"
  },
  {
    text: "The structured learning approach made trading easier to understand even as a beginner. Lifetime support is the best part.",
    author: "Rahul V.",
    role: "Entrepreneur"
  }
];

const team = [
  { name: "Akshay Dr", role: "Managing Director", bio: "Leading the vision and execution of ITTA Academy.", image: "/akshay_dr.png" },
  { name: "AKASH DR", role: "Director", bio: "Expert in strategy and institutional trading mentorship.", image: "/akash_dr.png" },
  { name: "Anoop Gangan", role: "Director", bio: "Specialist in technical analysis and market algorithms.", image: "/anoop_gangan.png" },
  { name: "Devagopal Nair", role: "Director", bio: "Connecting aspiring traders with high-quality education.", image: "/devagopal_nair.png" }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-black">
          {/* Subtle Glow */}
          <div className="absolute top-0 left-0 w-full h-full -z-10">
            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[150px] rounded-full" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[150px] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1 text-sm font-medium rounded-full">
                  #1 Trading Academy in South India
                </Badge>
                <h1 className="text-6xl md:text-8xl font-heading font-bold leading-tight">
                  Earning <span className="text-primary">Starts</span> Here.
                </h1>
                <p className="text-xl text-white/50 max-w-lg leading-relaxed">
                  Join ITTA and master the financial markets. We provide professional trading education, live mentorship, and institutional-level training.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-6">
                <Link href="/courses">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-black px-10 h-16 text-xl font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                    Get Started <ArrowRight className="ml-2 w-6 h-6" />
                  </Button>
                </Link>
                <Link href="/about-us">
                  <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5 h-16 px-10 text-xl font-bold rounded-2xl">
                    View Programs
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-neutral-900 flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=user${i+10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">10,000+ Students</p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative p-1 bg-gradient-to-br from-primary/30 to-transparent rounded-[2.5rem]">
                <div className="relative aspect-[4/3] rounded-[2.3rem] overflow-hidden bg-neutral-900 border border-white/5">
                  <img 
                    src="/hero.png" 
                    alt="Trading Analytics" 
                    className="w-full h-full object-cover brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  
                  {/* Floating Card - 4-Level Commission Map */}
                  <div className="absolute bottom-8 left-8 right-8 p-8 rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 space-y-4">
                    <h3 className="text-xl font-bold text-white">ITTA Commission Engine</h3>
                    <div className="grid grid-cols-4 gap-4">
                      {[
                        { label: "L1", val: "10%" },
                        { label: "L2", val: "5%" },
                        { label: "L3", val: "10%" },
                        { label: "L4", val: "5%" }
                      ].map((item, idx) => (
                        <div key={idx} className="text-center space-y-1">
                          <p className="text-[10px] text-white/40 uppercase tracking-tighter">{item.label}</p>
                          <p className="text-xl font-bold text-primary">{item.val}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[80px] -z-10" />
            </motion.div>
          </div>
        </section>

        {/* Commission Engine Details */}
        <section className="py-24 bg-black border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {[
                { title: "Direct Referral", val: "10%", desc: "Earn on every direct signup" },
                { title: "Level 2 Network", val: "5%", desc: "Passive income from tier 2" },
                { title: "Level 3 Growth", val: "10%", desc: "Increased rewards for depth" },
                { title: "Network Bonus", val: "5%", desc: "Continuous lifetime benefit" }
              ].map((item, i) => (
                <div key={i} className="space-y-4 group cursor-default">
                  <p className="text-5xl md:text-7xl font-bold text-primary transition-transform group-hover:scale-110 duration-500">{item.val}</p>
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  <p className="text-white/40 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-32 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-heading font-bold">The <span className="text-primary">Curriculum</span></h2>
                <p className="text-white/40 max-w-xl text-lg">
                  A structured learning path designed to take you from beginner to professional institutional trader.
                </p>
              </div>
              <Link href="/courses">
                <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/5 text-lg h-14 px-8 border border-primary/20 rounded-xl">
                  Full Syllabus <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courses.map((course, i) => (
                <div key={i} className="group relative p-1 rounded-[2.5rem] bg-white/5 hover:bg-gradient-to-br hover:from-primary/20 hover:to-transparent transition-all duration-500">
                  <div className="h-full bg-neutral-950 rounded-[2.3rem] overflow-hidden border border-white/5 p-8 flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-white/5">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="space-y-3">
                        <Badge className="bg-primary/10 text-primary border-none">{course.badge}</Badge>
                        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{course.title}</h3>
                        <p className="text-white/40 text-sm leading-relaxed">{course.desc}</p>
                      </div>
                    </div>
                    
                    <div className="pt-8 mt-8 border-t border-white/5 flex items-center justify-between">
                      <p className="text-2xl font-bold text-white">{course.price}</p>
                      <Link href="/courses">
                        <Button size="icon" className="w-12 h-12 rounded-xl bg-primary hover:bg-primary/90 text-black">
                          <ArrowRight className="w-5 h-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-32 bg-[#050505] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24 space-y-6">
              <h2 className="text-5xl md:text-7xl font-heading font-bold italic tracking-tighter uppercase">ITTA <span className="text-primary">Leadership</span></h2>
              <p className="text-white/40 max-w-2xl mx-auto text-lg uppercase tracking-widest">The minds behind the movement</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="group space-y-6"
                >
                  <div className="aspect-[3/4] rounded-[2rem] overflow-hidden relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                       <p className="text-xs text-white/60 line-clamp-3">{member.bio}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                    <p className="text-primary text-xs font-black uppercase tracking-[0.2em]">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-[4rem] bg-[#0A0A0A] border border-white/5 p-12 md:p-24 relative overflow-hidden text-center space-y-10">
              {/* Background Accent */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full -z-10" />
              
              <div className="space-y-6">
                <h2 className="text-5xl md:text-7xl font-heading font-bold text-white max-w-4xl mx-auto leading-tight">
                  Start Your <span className="text-primary italic">Trading Journey</span> Today
                </h2>
                <p className="text-white/40 text-xl max-w-2xl mx-auto">
                  Don't wait for the perfect moment. Create it by learning from the best in the industry.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-6 pt-6">
                <Link href="/courses">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-black px-12 h-20 text-2xl font-bold rounded-2xl shadow-[0_0_50px_rgba(234,179,8,0.2)] transition-all hover:scale-105 active:scale-95">
                    Enroll Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5 h-20 px-12 text-2xl font-bold rounded-2xl">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
        <a href="https://wa.me/917907409671" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl transition-transform hover:scale-110 active:scale-95">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        </a>
      </div>
    </div>
  );
}

