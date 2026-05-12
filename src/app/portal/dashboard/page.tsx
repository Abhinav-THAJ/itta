"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Play, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  FileText, 
  Award, 
  LogOut, 
  User,
  LayoutDashboard,
  PlayCircle,
  Download,
  Search,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const courses = [
  {
    id: 1,
    title: "Forex Trading Masterclass",
    progress: 65,
    lessons: 24,
    completed: 16,
    instructor: "Kiran G K",
    image: "/forex.png"
  }
];

const modules = [
  {
    title: "Module 1: Introduction to Forex",
    lessons: [
      { id: 1, title: "What is Forex Trading?", duration: "12:45", completed: true },
      { id: 2, title: "Currency Pairs & Market Hours", duration: "18:20", completed: true },
      { id: 3, title: "Reading Candlestick Charts", duration: "25:10", completed: true }
    ]
  },
  {
    title: "Module 2: Technical Analysis",
    lessons: [
      { id: 4, title: "Support and Resistance", duration: "22:15", completed: true },
      { id: 5, title: "Trendlines & Chart Patterns", duration: "30:45", completed: false },
      { id: 6, title: "Moving Averages & RSI", duration: "28:10", completed: false }
    ]
  },
  {
    title: "Module 3: Advanced SMC Concepts",
    lessons: [
      { id: 7, title: "Market Structure & Break of Structure", duration: "35:00", completed: false },
      { id: 8, title: "Order Blocks & Fair Value Gaps", duration: "42:30", completed: false },
      { id: 9, title: "Liquidity Grabs & Inducement", duration: "40:15", completed: false }
    ]
  }
];

export default function StudentDashboard() {
  const [activeLesson, setActiveLesson] = useState(modules[0].lessons[1]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#050505] flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#0A0A0A] border-r border-white/5 transform transition-transform duration-300 lg:relative lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="h-full flex flex-col p-6">
          <Link href="/" className="flex items-center gap-3 mb-10 px-2 group">
            <div className="w-8 h-8 group-hover:scale-110 transition-transform">
              <img src="/logo.svg" alt="ITTA Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-heading font-bold text-lg text-white tracking-tight">ITTA PORTAL</span>
          </Link>

          <nav className="flex-grow space-y-2">
            <Button variant="ghost" className="w-full justify-start text-primary bg-primary/10 rounded-xl mb-4">
              <LayoutDashboard className="w-5 h-5 mr-3" /> Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start text-white/60 hover:text-white hover:bg-white/5 rounded-xl">
              <PlayCircle className="w-5 h-5 mr-3" /> My Courses
            </Button>
            <Button variant="ghost" className="w-full justify-start text-white/60 hover:text-white hover:bg-white/5 rounded-xl">
              <BookOpen className="w-5 h-5 mr-3" /> Resources
            </Button>
            <Button variant="ghost" className="w-full justify-start text-white/60 hover:text-white hover:bg-white/5 rounded-xl">
              <Award className="w-5 h-5 mr-3" /> Certificates
            </Button>
          </nav>

          <div className="pt-6 border-t border-white/5 mt-auto">
            <div className="flex items-center gap-3 px-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-neutral-800" />
              <div>
                <p className="text-sm font-bold text-white">Student Name</p>
                <p className="text-xs text-white/40">student@example.com</p>
              </div>
            </div>
            <Link href="/portal">
              <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-400 hover:bg-red-500/5 rounded-xl">
                <LogOut className="w-5 h-5 mr-3" /> Log Out
              </Button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow overflow-y-auto">
        {/* Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-[#050505]/80 backdrop-blur-md sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-white" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              {isSidebarOpen ? <X /> : <Menu />}
            </button>
            <h1 className="text-xl font-bold font-heading text-white">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input 
                placeholder="Search lessons..." 
                className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary w-64 text-white"
              />
            </div>
            <Button size="icon" variant="ghost" className="rounded-full">
              <User className="w-5 h-5 text-white" />
            </Button>
          </div>
        </header>

        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Video Player & Tabs */}
            <div className="lg:col-span-2 space-y-8">
              {/* Netflix Style Video Placeholder */}
              <div className="aspect-video bg-neutral-900 rounded-[2rem] overflow-hidden relative border border-white/10 group">
                <img 
                  src="/hero.png" 
                  alt="Video Thumbnail" 
                  className="w-full h-full object-cover brightness-50 group-hover:brightness-[0.4] transition-all"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-[0_0_50px_rgba(0,102,255,0.5)]">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="flex items-end justify-between text-white">
                    <div>
                      <Badge className="bg-primary text-white mb-2">Lesson {activeLesson.id}</Badge>
                      <h2 className="text-2xl font-bold">{activeLesson.title}</h2>
                    </div>
                    <p className="text-white/50 text-sm">{activeLesson.duration}</p>
                  </div>
                </div>
              </div>

              {/* Tabs Content */}
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="bg-white/5 p-1 rounded-2xl mb-8">
                  <TabsTrigger value="overview" className="rounded-xl px-8 data-[state=active]:bg-primary text-white">Overview</TabsTrigger>
                  <TabsTrigger value="resources" className="rounded-xl px-8 data-[state=active]:bg-primary text-white">Resources</TabsTrigger>
                  <TabsTrigger value="notes" className="rounded-xl px-8 data-[state=active]:bg-primary text-white">Notes</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-6">
                  <h3 className="text-xl font-bold text-white">About this lesson</h3>
                  <p className="text-white/60 leading-relaxed">
                    In this lesson, we dive deep into the fundamental mechanics of the Forex market. You will learn about liquidity providers, currency pair correlations, and how institutional players influence price action.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                    <Card className="bg-white/5 border-white/10 p-4">
                      <Clock className="w-5 h-5 text-primary mb-2" />
                      <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Duration</p>
                      <p className="font-bold text-white">45 Mins</p>
                    </Card>
                    <Card className="bg-white/5 border-white/10 p-4">
                      <FileText className="w-5 h-5 text-primary mb-2" />
                      <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Type</p>
                      <p className="font-bold text-white">Video Lecture</p>
                    </Card>
                    <Card className="bg-white/5 border-white/10 p-4">
                      <CheckCircle2 className="w-5 h-5 text-primary mb-2" />
                      <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Skill</p>
                      <p className="font-bold text-white">Intermediate</p>
                    </Card>
                    <Card className="bg-white/5 border-white/10 p-4">
                      <Download className="w-5 h-5 text-primary mb-2" />
                      <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Files</p>
                      <p className="font-bold text-white">2 PDFs</p>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="resources">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer">
                      <div className="flex items-center gap-4">
                        <FileText className="text-primary" />
                        <span className="font-medium text-white">Market_Hours_Guide.pdf</span>
                      </div>
                      <Download className="w-4 h-4 text-white/40" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer">
                      <div className="flex items-center gap-4">
                        <FileText className="text-primary" />
                        <span className="font-medium text-white">Candlestick_Cheat_Sheet.pdf</span>
                      </div>
                      <Download className="w-4 h-4 text-white/40" />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right: Lesson Navigation */}
            <div className="space-y-8">
              <Card className="bg-[#0A0A0A] border-white/5 rounded-3xl overflow-hidden sticky top-28">
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                  <h3 className="font-bold text-white">Course Content</h3>
                  <p className="text-xs text-white/40">16 / 24 Complete</p>
                </div>
                <div className="p-4 max-h-[calc(100vh-350px)] overflow-y-auto custom-scrollbar">
                  {modules.map((mod, i) => (
                    <div key={i} className="mb-6 last:mb-0">
                      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4 px-2">{mod.title}</p>
                      <div className="space-y-1">
                        {mod.lessons.map((lesson) => (
                          <div 
                            key={lesson.id}
                            onClick={() => setActiveLesson(lesson)}
                            className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all ${activeLesson.id === lesson.id ? "bg-primary/20 border border-primary/20" : "hover:bg-white/5 border border-transparent"}`}
                          >
                            <div className="relative">
                              {lesson.completed ? (
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                  <CheckCircle2 className="w-5 h-5" />
                                </div>
                              ) : (
                                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40">
                                  <Play className="w-3 h-3 fill-white/40" />
                                </div>
                              )}
                            </div>
                            <div className="flex-grow min-w-0">
                              <p className={`text-sm font-medium truncate ${activeLesson.id === lesson.id ? "text-white" : "text-white/60"}`}>{lesson.title}</p>
                              <p className="text-xs text-white/30">{lesson.duration}</p>
                            </div>
                            {activeLesson.id === lesson.id && (
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Progress Card */}
              <Card className="bg-primary/10 border-primary/20 rounded-3xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-white">Overall Progress</h4>
                  <span className="text-primary font-bold">65%</span>
                </div>
                <Progress value={65} className="h-2 bg-white/5" />
                <p className="text-xs text-white/50 text-center">8 lessons remaining to get your certificate</p>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
