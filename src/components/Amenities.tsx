import React from 'react';
import { Bed, Utensils, ShieldAlert, Trees, Compass, Sparkles } from 'lucide-react';

export default function Amenities() {
  const items = [
    {
      icon: <Bed className="w-8 h-8 text-secondary group-hover:text-tertiary transition-colors duration-500" />,
      title: "Three En-suite Rooms",
      description: "Spotless, aerated, and fully furnished with clean bedding, plush towels, electric blankets, and premium hot-water baths."
    },
    {
      icon: <Utensils className="w-8 h-8 text-secondary group-hover:text-tertiary transition-colors duration-500" />,
      title: "Kashmiri Cuisine",
      description: "Authentic, freshly home-cooked Kashmiri meals including organic saffron, local trout, and famous vegetarian selections, prepared by your hosts."
    },
    {
      icon: <Trees className="w-8 h-8 text-secondary group-hover:text-tertiary transition-colors duration-500" />,
      title: "Private Compound",
      description: "A serene, private lakefront compound with exclusive entrances, peaceful sun decks, and zero thoroughfare traffic for ultimate peace."
    }
  ];

  return (
    <section id="amenities" className="bg-neutral-warm/50 border-y border-secondary/5 py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="text-center mb-16 space-y-4">
          <div className="font-sans text-xs font-bold text-secondary uppercase tracking-widest">
            A Perfect Mountain Refuge
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary tracking-tight">
            Amenities &amp; Heritage
          </h2>
          <div className="w-24 h-[2px] bg-secondary mx-auto mt-4"></div>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-10 rounded-lg shadow-sm border border-slate-grey/10 flex flex-col items-center text-center group hover:bg-primary hover:border-primary transition-all duration-500 transform hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="mb-6 p-4 rounded-full bg-secondary/5 group-hover:bg-white/10 transition-colors duration-500">
                {item.icon}
              </div>
              
              <h3 className="font-serif text-xl font-bold text-primary mb-4 group-hover:text-white transition-colors duration-500">
                {item.title}
              </h3>
              
              <p className="font-sans text-sm text-slate-grey group-hover:text-neutral-warm/85 transition-colors duration-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Extra atmospheric banner */}
        <div className="mt-16 bg-white border border-slate-grey/10 p-6 md:p-8 rounded-lg shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-secondary/10 rounded-full text-secondary">
              <Sparkles size={24} />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-primary">Unrivaled Nigeen Lake Location</h4>
              <p className="font-sans text-xs text-slate-grey mt-0.5">Known as the jewel in the ring, Nigeen Lake is extremely pristine, peaceful and free of commercial weeds.</p>
            </div>
          </div>
          <div className="text-xs font-mono font-bold bg-secondary/5 text-secondary px-4 py-2 rounded-sm border border-secondary/15 uppercase tracking-widest whitespace-nowrap">
            Pure Serenity Guaranteed
          </div>
        </div>

      </div>
    </section>
  );
}
