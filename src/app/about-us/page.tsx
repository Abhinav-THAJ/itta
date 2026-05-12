"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Target, Eye, Users, Award, ShieldCheck, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "Students Trained", value: "10,000+" },
  { label: "Live Sessions", value: "500+" },
  { label: "Community Members", value: "15,000+" },
  { label: "Success Stories", value: "2,000+" }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />

      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] -z-10" />
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1 rounded-full uppercase tracking-widest text-[10px] font-black">Our Legacy</Badge>
                <h1 className="text-6xl md:text-8xl font-heading font-bold leading-tight text-white tracking-tighter">
                  PIONEERING <span className="text-primary italic">FINANCIAL</span> FREEDOM
                </h1>
                <p className="text-white/40 text-xl leading-relaxed max-w-xl">
                  ITTA Academy is more than just a school; it's an ecosystem designed to cultivate institutional-grade traders who understand the heartbeat of the global markets.
                </p>
              </div>
              <div className="pt-10 grid grid-cols-2 gap-12 border-t border-white/5">
                {stats.map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-5xl font-heading font-black text-primary tracking-tighter">{stat.value}</p>
                    <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden p-1 bg-gradient-to-br from-primary/30 to-transparent">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                  alt="ITTA Boardroom" 
                  className="w-full h-full object-cover rounded-[3.3rem] brightness-50 grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/20 blur-[80px] -z-10" />
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-32 bg-black">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-16 rounded-[4rem] bg-neutral-950 border border-white/5 space-y-8 hover:border-primary/20 transition-all duration-500 group">
              <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500">
                <Target className="w-10 h-10" />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-heading font-bold text-white uppercase tracking-tighter italic">The Mission</h2>
                <p className="text-white/40 text-lg leading-relaxed">
                  To democratize institutional-grade trading knowledge and build a community of disciplined, professional traders who prioritize risk management and logical execution.
                </p>
              </div>
            </div>
            <div className="p-16 rounded-[4rem] bg-neutral-950 border border-white/5 space-y-8 hover:border-primary/20 transition-all duration-500 group">
              <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500">
                <Eye className="w-10 h-10" />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-heading font-bold text-white uppercase tracking-tighter italic">The Vision</h2>
                <p className="text-white/40 text-lg leading-relaxed">
                  To set the gold standard in financial education across Asia, fostering an environment where aspiring traders can transition into full-time market professionals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trading Philosophy */}
        <section className="py-40 relative bg-[#050505] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.05),transparent)] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-6 text-center space-y-16 relative z-10">
            <Badge variant="outline" className="border-primary/30 text-primary px-6 py-2 rounded-full uppercase tracking-widest text-[10px] font-black">Core Beliefs</Badge>
            <h2 className="text-5xl md:text-8xl font-heading font-bold text-white tracking-tighter uppercase italic">
              Discipline Is <span className="text-primary">Everything</span>
            </h2>
            <p className="text-white/50 text-2xl md:text-3xl leading-relaxed font-light italic">
              "In a world of noise, we focus on the signals. Trading is not a hobby; it's a craft that requires precision, patience, and professional-grade mentorship."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16">
              {[
                { title: "RISK PROTOCOL", icon: ShieldCheck },
                { title: "MARKET LOGIC", icon: Globe },
                { title: "ELITE MINDSET", icon: Award }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-primary/30 transition-all duration-500">
                    <item.icon className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" />
                  </div>
                  <span className="font-black uppercase tracking-[0.4em] text-[10px] text-white/30 group-hover:text-primary transition-colors">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-32 bg-black border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-5xl md:text-6xl font-heading font-bold text-white tracking-tighter uppercase italic">The ITTA <span className="text-primary">Edge</span></h2>
                  <p className="text-white/40 text-xl">What makes us the first choice for professional education.</p>
                </div>
                <div className="space-y-8">
                  {[
                    "Institutional Trading Strategies (SMC & ICT)",
                    "Live Market Mentorship Sessions",
                    "Certified Trading Curriculum",
                    "Lifetime Community Access",
                    "Risk Management & Psychology Training"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 group">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0 group-hover:bg-primary transition-all">
                        <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-black transition-all" />
                      </div>
                      <span className="text-xl text-white/70 group-hover:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 relative">
                <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full -z-10" />
                <div className="space-y-6 pt-16">
                  <div className="aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/5">
                    <img src="https://images.unsplash.com/photo-1611974714658-dd47e3a46d1f?q=80&w=2070&auto=format&fit=crop" alt="Trading floor" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                  </div>
                  <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/5">
                    <img src="https://images.unsplash.com/photo-1591696208162-a97b7dfba059?q=80&w=2070&auto=format&fit=crop" alt="Data analysis" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/5">
                    <img src="https://images.unsplash.com/photo-1560520136-adad0cca0bb3?q=80&w=2024&auto=format&fit=crop" alt="Mentorship" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                  </div>
                  <div className="aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/5">
                    <img src="https://images.unsplash.com/photo-1521791136064-7986c29597bb?q=80&w=2070&auto=format&fit=crop" alt="Meeting" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

