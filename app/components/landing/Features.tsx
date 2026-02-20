"use client";

import React from "react";
import { Infinity, ImagePlus, MessageCircle, Sparkles } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-4 animate-slide-up">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Designed for focus</h2>
          <p className="text-zinc-400">We stripped away the noise. No algorithms pushing rage-bait, just pure connection and beautiful content.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="p-6 rounded-xl border border-white/10 bg-zinc-900/50 hover:bg-zinc-800 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-white/10 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Infinity className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Infinite Scroll</h3>
            <p className="text-sm text-zinc-400">Seamlessly browse content without interruption. Optimized for performance on any device.</p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-xl border border-white/10 bg-zinc-900/50 hover:bg-zinc-800 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-white/10 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ImagePlus className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Easy Upload</h3>
            <p className="text-sm text-zinc-400">Create posts in seconds. Drag, drop, and share your moments with high-quality compression.</p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-xl border border-white/10 bg-zinc-900/50 hover:bg-zinc-800 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-white/10 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Real Engagement</h3>
            <p className="text-sm text-zinc-400">Meaningful comments and likes. See who interacts with your content instantly.</p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 rounded-xl border border-white/10 bg-zinc-900/50 hover:bg-zinc-800 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-white/10 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Clean UI</h3>
            <p className="text-sm text-zinc-400">A minimalist black theme designed to make your photos pop. Easy on the eyes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
