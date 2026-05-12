"use client";

import React, { useState } from "react";
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Users, 
  BookOpen, 
  Video, 
  Settings, 
  LogOut,
  ChevronRight,
  TrendingUp,
  DollarSign,
  UserPlus,
  MoreVertical,
  Filter,
  LayoutDashboard
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const stats = [
  { label: "Total Revenue", value: "₹2,45,000", icon: DollarSign, trend: "+12.5%", color: "text-green-500" },
  { label: "New Students", value: "148", icon: UserPlus, trend: "+8.2%", color: "text-blue-500" },
  { label: "Active Courses", value: "12", icon: BookOpen, trend: "0%", color: "text-primary" },
  { label: "Live Sessions", value: "24", icon: Video, trend: "+14.3%", color: "text-orange-500" }
];

const initialCourses = [
  { id: 1, title: "Forex Trading Masterclass", category: "Forex", students: 124, revenue: "₹31,00,000", status: "Published" },
  { id: 2, title: "Stock Market Professional", category: "Stocks", students: 86, revenue: "₹21,50,000", status: "Published" },
  { id: 3, title: "Crypto Trading Program", category: "Crypto", students: 52, revenue: "₹13,00,000", status: "Draft" },
];

export default function AdminDashboard() {
  const [courses, setCourses] = useState(initialCourses);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-[#050505] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0A0A0A] border-r border-white/5 flex flex-col p-6 hidden lg:flex">
        <Link href="/" className="flex items-center gap-3 mb-10 px-2">
          <div className="w-8 h-8">
            <img src="/logo.svg" alt="ITTA Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-heading font-bold text-lg text-white tracking-tight">ITTA ADMIN</span>
        </Link>

        <nav className="flex-grow space-y-2">
          <Button variant="ghost" className="w-full justify-start text-primary bg-primary/10 rounded-xl">
            <LayoutDashboard className="w-5 h-5 mr-3" /> Overview
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white/60 hover:text-white hover:bg-white/5 rounded-xl">
            <BookOpen className="w-5 h-5 mr-3" /> Manage Courses
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white/60 hover:text-white hover:bg-white/5 rounded-xl">
            <Users className="w-5 h-5 mr-3" /> Students
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white/60 hover:text-white hover:bg-white/5 rounded-xl">
            <Video className="w-5 h-5 mr-3" /> Live Sessions
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white/60 hover:text-white hover:bg-white/5 rounded-xl">
            <Settings className="w-5 h-5 mr-3" /> Settings
          </Button>
        </nav>

        <div className="pt-6 border-t border-white/5 mt-auto">
          <Link href="/portal">
            <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-400 hover:bg-red-500/5 rounded-xl">
              <LogOut className="w-5 h-5 mr-3" /> Log Out
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-heading font-bold">Admin Dashboard</h1>
            <p className="text-white/40 text-sm">Welcome back, Admin. Here's what's happening today.</p>
          </div>
          <div className="flex gap-4">
            <Dialog>
              <DialogTrigger render={<Button className="bg-primary hover:bg-primary/90 text-white rounded-xl h-12 px-6" />}>
                  <Plus className="w-5 h-5 mr-2" /> Add New Course
            </DialogTrigger>
              <DialogContent className="bg-[#0A0A0A] border-white/10 text-white max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">Create New Course</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-6 py-6">
                  <div className="space-y-2 col-span-2">
                    <Label>Course Title</Label>
                    <Input placeholder="e.g. Advanced Forex Trading" className="bg-white/5 border-white/10" />
                  </div>
                  <div className="space-y-2">
                    <Label>Category</Label>
                    <select className="w-full h-10 rounded-md bg-white/5 border border-white/10 px-3 text-sm text-white/70">
                      <option>Forex</option>
                      <option>Stocks</option>
                      <option>Crypto</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>Price (INR)</Label>
                    <Input placeholder="25000" className="bg-white/5 border-white/10" />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label>Description</Label>
                    <textarea className="w-full h-32 rounded-md bg-white/5 border border-white/10 p-3 text-sm text-white/70" placeholder="Course details..."></textarea>
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label>Video URL / File</Label>
                    <Input type="file" className="bg-white/5 border-white/10" />
                  </div>
                </div>
                <div className="flex justify-end gap-4 mt-4">
                  <Button variant="outline" className="border-white/10 text-white">Cancel</Button>
                  <Button className="bg-primary text-white">Publish Course</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <Card key={i} className="bg-[#0A0A0A] border-white/5 rounded-[1.5rem] p-6">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <Badge className="bg-white/5 text-green-500 border-none font-bold">{stat.trend}</Badge>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
              </div>
            </Card>
          ))}
        </div>

        {/* Recent Courses Table */}
        <Card className="bg-[#0A0A0A] border-white/5 rounded-[2rem] overflow-hidden">
          <CardHeader className="p-8 border-b border-white/5 flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-bold">Manage Courses</CardTitle>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <Input 
                  placeholder="Search courses..." 
                  className="bg-white/5 border-white/10 pl-10 w-64 h-10 rounded-xl"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon" className="border-white/10 rounded-xl">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/[0.02] text-white/40 text-xs uppercase tracking-widest font-bold">
                  <th className="p-6">Course Name</th>
                  <th className="p-6">Category</th>
                  <th className="p-6">Students</th>
                  <th className="p-6">Revenue</th>
                  <th className="p-6">Status</th>
                  <th className="p-6">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {courses.map((course) => (
                  <tr key={course.id} className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-6 font-bold">{course.title}</td>
                    <td className="p-6">
                      <Badge variant="outline" className="border-white/10 text-white/60">{course.category}</Badge>
                    </td>
                    <td className="p-6 text-white/60">{course.students} Students</td>
                    <td className="p-6 text-white/60">{course.revenue}</td>
                    <td className="p-6">
                      <Badge className={course.status === "Published" ? "bg-green-500/10 text-green-500 border-none" : "bg-yellow-500/10 text-yellow-500 border-none"}>
                        {course.status}
                      </Badge>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-all">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:bg-red-500/10 hover:text-red-500 transition-all">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
