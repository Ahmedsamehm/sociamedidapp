"use client";

import React from "react";
import Link from "next/link";
import { Download, PlayCircle, Heart, MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-slide-up">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400">
            <span className="flex h-2 w-2 rounded-full bg-white mr-2 animate-pulse"></span>
            v2.0 Now Available
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white">
            Connect without <br />
            <span className="gradient-text">limits or clutter.</span>
          </h1>

          <p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
            Experience the purest form of social connection. Infinite scroll, zero ads, and a UI so clean you'll forget it's there.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/signup"
              className="h-12 px-8 rounded-md bg-white text-black font-medium hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Now
            </Link>
            <button
              onClick={() => document.getElementById("preview")?.scrollIntoView({ behavior: "smooth" })}
              className="h-12 px-8 rounded-md border border-white/10 bg-transparent text-white font-medium hover:bg-zinc-900 transition-all flex items-center justify-center gap-2"
            >
              <PlayCircle className="w-4 h-4" />
              Watch Demo
            </button>
          </div>

          <div className="pt-8 flex items-center gap-4 text-sm text-zinc-400">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-zinc-800 border border-black flex items-center justify-center text-xs">👤</div>
              <div className="w-8 h-8 rounded-full bg-zinc-700 border border-black flex items-center justify-center text-xs">👤</div>
              <div className="w-8 h-8 rounded-full bg-zinc-600 border border-black flex items-center justify-center text-xs">👤</div>
            </div>
            <p>Join 10,000+ early adopters</p>
          </div>
        </div>

        <div className="relative animate-float lg:h-[600px] flex items-center justify-center">
          <div className="relative z-10 w-full max-w-[320px] rounded-[3rem] border-8 border-zinc-900 bg-zinc-900 shadow-2xl overflow-hidden ring-1 ring-white/10">
            {/* Status Bar Mockup */}
            <div className="h-6 bg-zinc-900 w-full flex justify-between px-6 items-center">
              <div className="w-12 h-3 bg-black rounded-full"></div>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
              </div>
            </div>
            {/* App Content */}
            <img
              src="https://image.qwenlm.ai/public_source/8ae89d8d-1f6b-49d4-8b17-8fee2505b459/1a538eea8-a84c-42dc-bed6-5b211e208fce.png"
              alt="App Interface"
              className="w-full h-auto object-cover opacity-90"
            />

            {/* Overlay UI Elements Mockup */}
            <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -right-10 top-20 p-4 glass-card rounded-xl animate-pulse hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="text-xs text-zinc-400">New Like</p>
                <p className="font-bold text-sm text-white">Sarah liked your post</p>
              </div>
            </div>
          </div>

          <div className="absolute -left-10 bottom-40 p-4 glass-card rounded-xl animate-pulse hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="text-xs text-zinc-400">New Comment</p>
                <p className="font-bold text-sm text-white">"Love this shot!"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
