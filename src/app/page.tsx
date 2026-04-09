"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, Camera, HeartPulse, Leaf, Sparkles, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-400 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-200">
              <Leaf size={18} />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">NutriMind<span className="text-emerald-500">.ai</span></span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm font-medium text-slate-600 hover:text-slate-900">Sign In</Link>
            <Link href="/dashboard" className={buttonVariants({ className: "bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6 shadow-md shadow-emerald-200 transition-all" })}>
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-2xl"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                <Sparkles size={16} />
                <span>Smart Food Choices, Simplified</span>
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
                Your Personal AI <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Nutritionist</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                Snap a photo of your food, and let our AI analyze its nutrition, evaluate your goals, and give you intelligent advice. Eat smarter, not harder.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard" className={buttonVariants({ size: "lg", className: "bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8 h-14 text-base" })}>
                  Start Scanning Free <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Button variant="outline" size="lg" className="bg-white rounded-full px-8 h-14 text-base shadow-sm border-slate-200">
                  See How It Works
                </Button>
              </motion.div>
            </motion.div>

            {/* Hero Visual Area */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-blue-50 rounded-[3rem] transform rotate-3 scale-105 -z-10" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 aspect-square md:aspect-[4/3] bg-white">
                <Image 
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop"
                  alt="Healthy vibrant food bowl"
                  className="object-cover w-full h-full"
                  width={800}
                  height={600}
                  priority
                />
                
                {/* Floating UI Elements */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}
                  className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <HeartPulse size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Calorie Estimate</p>
                    <p className="text-sm font-bold text-slate-800">420 kcal <span className="text-emerald-500 text-xs ml-1">Perfect</span></p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute bottom-6 right-6 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl shadow-xl text-white max-w-xs"
                >
                  <div className="flex gap-3 items-start">
                    <Brain className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-sm font-medium leading-tight">
                      "Great choice! High in protein and healthy fats. Fits your weight loss goal perfectly."
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* How it Works Section */}
      <section className="py-24 bg-white" id="how-it-works">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-2">Simple Process</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Your AI Dietitian in 3 Steps</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Camera, title: "1. Snap a Photo", desc: "Just take a picture of your meal or upload from gallery. We rely on top-tier Vision AI." },
              { icon: Brain, title: "2. AI Analysis", desc: "We identify ingredients, estimate macros, and check against your personal health goals." },
              { icon: TrendingUp, title: "3. Smart Decisions", desc: "Get an instant 'Eat', 'Avoid', or 'Moderate' rating with human-like nutritionist feedback." }
            ].map((step, idx) => (
              <Card key={idx} className="border-none shadow-lg shadow-slate-100 hover:shadow-xl transition-shadow bg-slate-50/50">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-800 mb-6 group-hover:scale-110 transition-transform">
                    <step.icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Leaf size={20} className="text-emerald-500" />
            <span className="font-bold text-xl tracking-tight text-white">NutriMind<span className="text-emerald-500">.ai</span></span>
          </div>
          <p className="text-sm">Built for the Food & Health App Challenge.</p>
        </div>
      </footer>
    </div>
  );
}
