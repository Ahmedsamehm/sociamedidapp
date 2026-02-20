"use client";

import React from "react";
import { Heart, MessageSquare, Send, Home, Search, Plus, User, Check } from "lucide-react";

const Preview = () => {
  return (
    <section id="preview" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 animate-slide-up">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            {/* Mock Feed UI */}
            <div className="w-full max-w-md mx-auto bg-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="p-4 border-b border-white/5 flex justify-between items-center">
                <div className="font-bold text-white">Home</div>
                <div className="w-8 h-8 rounded-full bg-zinc-800"></div>
              </div>

              {/* Feed Content */}
              <div className="space-y-0">
                {/* Post 1 */}
                <div className="p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500"></div>
                    <div className="text-sm font-medium">alex_design</div>
                    <div className="text-xs text-zinc-500 ml-auto">2h</div>
                  </div>
                  <div className="h-48 bg-zinc-800 rounded-lg mb-3 overflow-hidden relative group">
                    <img
                      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      alt="Abstract"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="w-12 h-12 text-white drop-shadow-lg fill-white" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-400">
                    <button className="hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="hover:text-white transition-colors">
                      <MessageSquare className="w-5 h-5" />
                    </button>
                    <button className="hover:text-white transition-colors">
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="font-bold mr-2 text-white">alex_design</span>
                    <span className="text-zinc-400">Minimalist vibes only. 🌑</span>
                  </div>
                </div>

                {/* Post 2 */}
                <div className="p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500"></div>
                    <div className="text-sm font-medium">sarah_travels</div>
                    <div className="text-xs text-zinc-500 ml-auto">5h</div>
                  </div>
                  <div className="h-48 bg-zinc-800 rounded-lg mb-3 overflow-hidden relative group">
                    <img
                      src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      alt="Travel"
                    />
                  </div>
                  <div className="flex items-center gap-4 text-zinc-400">
                    <button className="hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="hover:text-white transition-colors">
                      <MessageSquare className="w-5 h-5" />
                    </button>
                    <button className="hover:text-white transition-colors">
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="font-bold mr-2 text-white">sarah_travels</span>
                    <span className="text-zinc-400">Switzerland is unreal 🏔️</span>
                  </div>
                </div>
              </div>

              {/* Bottom Nav Mockup */}
              <div className="h-16 border-t border-white/10 flex items-center justify-around px-4 bg-zinc-900/90 backdrop-blur">
                <Home className="w-6 h-6 text-white" />
                <Search className="w-6 h-6 text-zinc-500" />
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center -mt-6 border-4 border-black shadow-lg">
                  <Plus className="w-6 h-6" />
                </div>
                <Heart className="w-6 h-6 text-zinc-500" />
                <User className="w-6 h-6 text-zinc-500" />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Your content, <br />
              center stage.
            </h2>
            <p className="text-zinc-400 text-lg">
              Our interface is designed to recede into the background. The black theme reduces eye strain and makes colors in your photos and videos
              appear more vibrant.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center text-xs">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-zinc-300">True black OLED optimization</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center text-xs">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-zinc-300">Distraction-free reading mode</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center text-xs">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-zinc-300">Smart image upscaling</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;
