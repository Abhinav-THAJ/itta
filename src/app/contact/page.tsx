"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />

      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1 rounded-full uppercase tracking-widest text-[10px] font-black">Get In Touch</Badge>
            <h1 className="text-6xl md:text-8xl font-heading font-bold text-white tracking-tighter uppercase italic">TALK TO <span className="text-primary">US</span></h1>
            <p className="text-white/40 max-w-2xl mx-auto text-xl">
              Ready to elevate your trading career? Reach out to our expert mentors for guidance and support.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="pb-40 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info Side */}
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: Phone, title: "Phone", content: "+91 7907409671", label: "Call Us" },
                  { icon: Mail, title: "Email", content: "ittaacademy03@gmail.com", label: "Message Us" },
                  { icon: MapPin, title: "Address", content: "1st Floor, Relcon Plaza, Opposite LIC, Pattom, Thiruvananthapuram", label: "Visit Us" },
                  { icon: Clock, title: "Hours", content: "Mon - Sat: 9:00 AM - 6:00 PM", label: "Open Hours" }
                ].map((item, i) => (StatCard(item, i)))}
              </div>

              {/* Socials */}
              <div className="p-12 rounded-[3.5rem] bg-neutral-950 border border-white/5 space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors" />
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-white uppercase tracking-tighter italic">Join The Community</h3>
                  <p className="text-white/40 text-lg">Follow our success across the digital landscape.</p>
                </div>
                <div className="flex items-center gap-6">
                  {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/30 hover:border-primary hover:text-primary transition-all duration-500"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-12 md:p-16 rounded-[4rem] bg-neutral-950 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[120px] -z-10 group-hover:bg-primary/10 transition-colors duration-1000" />
              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-4xl font-heading font-bold text-white uppercase tracking-tighter italic">Direct Message</h2>
                  <p className="text-white/40 text-lg">Send us a signal, and we'll respond within 24 hours.</p>
                </div>

                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-black pl-2">Full Name</Label>
                      <Input id="name" placeholder="John Doe" className="bg-black border-white/5 h-16 rounded-2xl text-white focus:ring-primary focus:border-primary/30" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-black pl-2">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" className="bg-black border-white/5 h-16 rounded-2xl text-white focus:ring-primary focus:border-primary/30" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="course" className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-black pl-2">Course Interested In</Label>
                    <select id="course" className="w-full h-16 rounded-2xl bg-black border border-white/5 px-6 text-white/70 focus:outline-none focus:ring-1 focus:ring-primary appearance-none">
                      <option value="">Select a course</option>
                      <option value="forex">Forex Trading Masterclass</option>
                      <option value="stocks">Stock Market Professional</option>
                      <option value="crypto">Crypto Masterclass</option>
                      <option value="technical">Technical Analysis Elite</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-black pl-2">Your Message</Label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      placeholder="How can we help you?"
                      className="w-full rounded-2xl bg-black border border-white/5 p-6 text-white focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                  <Button className="w-full h-20 bg-primary hover:bg-primary/90 text-black font-black text-xl rounded-2xl shadow-[0_0_50px_rgba(234,179,8,0.2)] transition-all hover:scale-105 active:scale-95">
                    Send Signal <Send className="ml-3 w-6 h-6" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-[600px] w-full bg-black border-t border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('/contact-bg.png')] bg-cover bg-center grayscale opacity-10 group-hover:opacity-20 transition-opacity duration-1000" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Card className="bg-black/60 backdrop-blur-3xl border-white/10 p-12 rounded-[3.5rem] max-w-xl text-center space-y-8 relative overflow-hidden">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-[80px] -z-10" />
              <div className="w-24 h-24 bg-primary/10 rounded-[2rem] flex items-center justify-center mx-auto border border-primary/20">
                <MapPin className="w-10 h-10 text-primary" />
              </div>
              <div className="space-y-4">
                <h3 className="text-4xl font-heading font-black text-white uppercase tracking-tighter italic">Visit The Academy</h3>
                <p className="text-white/40 text-lg leading-relaxed">1st Floor, Relcon Plaza, Opposite LIC, Pattom, Thiruvananthapuram, Kerala 695004</p>
              </div>
              <Button variant="outline" className="h-16 px-10 border-white/10 text-white hover:bg-white/5 rounded-2xl text-lg font-bold">
                Open in Google Maps
              </Button>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function StatCard(item: any, i: number) {
  return (
    <Card key={i} className="bg-neutral-950 border-white/5 p-10 rounded-[2.5rem] group hover:border-primary/30 transition-all duration-500">
      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary transition-all duration-500">
        <item.icon className="w-6 h-6 text-primary group-hover:text-black transition-colors" />
      </div>
      <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2 font-black">{item.label}</p>
      <h3 className="text-xl font-bold text-white leading-tight group-hover:text-primary transition-colors">{item.content}</h3>
    </Card>
  );
}

