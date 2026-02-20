"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Digital Artist",
    content:
      "socialMedia has completely changed how I share my work. The UI is so clean that it actually makes my art look better. Zero clutter, pure focus.",
    avatar: "AR",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Travel Blogger",
    content: "Building a community here feels organic. I love that there's no algorithm fighting against me. It's just me and my followers.",
    avatar: "SC",
    rating: 5,
  },
  {
    name: "Marcus Thorne",
    role: "Tech Enthusiast",
    content: "The performance is incredible. Infinite scroll that actually works without lagging my phone. The OLED black theme is a masterpiece.",
    avatar: "MT",
    rating: 5,
  },
];

const FeedbackAndCTA = () => {
  return (
    <section id="community" className="py-24 border-t border-white/5 space-y-24">
      {/* Testimonials Grid */}
      <div className="container mx-auto px-4 animate-slide-up">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Loved by creators</h2>
          <p className="text-zinc-400">Join thousands of artists and creators who have found their home on Stream.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 relative group hover:bg-zinc-800/50 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-8 w-8 h-8 text-white/5 group-hover:text-white/10 transition-colors" />

              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>

              <p className="text-zinc-300 mb-8 italic leading-relaxed">"{t.content}"</p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white border border-white/10">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <p className="text-zinc-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackAndCTA;
