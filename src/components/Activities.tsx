import React, { useState } from 'react';
import { ACTIVITIES } from '../data';
import { Activity } from '../types';
import { ArrowRight, Clock, Star, MapPin, X, HelpCircle, Compass } from 'lucide-react';

export default function ActivitiesSection() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Relaxation', 'Adventure', 'Culture'];

  const filteredActivities = activeCategory === 'All' 
    ? ACTIVITIES 
    : ACTIVITIES.filter(act => act.category === activeCategory);

  return (
    <section id="activities" className="py-20 md:py-32 px-6 md:px-12 bg-neutral-warm">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 pb-6 border-b border-secondary/10 gap-6">
          <div className="max-w-xl space-y-3">
            <span className="font-sans text-xs font-bold text-secondary uppercase tracking-widest block">
              Adventure &amp; Culture
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary tracking-tight">
              Discover the Spirit of Kashmir
            </h2>
          </div>

          {/* Dynamic Categories filter to offer beautiful custom system control */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 font-sans text-xs font-bold uppercase tracking-widest transition-all rounded-sm cursor-pointer ${
                  activeCategory === cat 
                    ? 'bg-secondary text-white shadow-xs' 
                    : 'bg-white text-primary border border-slate-grey/10 hover:bg-secondary/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredActivities.map((act) => (
            <div
              key={act.id}
              onClick={() => setSelectedActivity(act)}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden border border-slate-grey/10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full transform hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative h-72 md:h-80 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={act.image}
                  alt={act.name}
                  referrerPolicy="no-referrer"
                />
                {/* Visual overlay tag */}
                <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-sans font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-sm">
                  {act.category}
                </span>

                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-90"></div>
                
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="font-serif text-xl font-bold mb-1 group-hover:text-tertiary transition-colors">
                    {act.name}
                  </h3>
                  <p className="font-sans text-xs text-white/80 line-clamp-2">
                    {act.description}
                  </p>
                </div>
              </div>

              {/* Card specs footer */}
              <div className="p-5 border-t border-secondary/5 flex justify-between items-center bg-white">
                <div className="flex items-center gap-1.5 text-xs text-slate-grey font-medium">
                  <Clock size={14} className="text-secondary" />
                  <span>{act.duration}</span>
                </div>
                <div className="flex items-center gap-1 text-xs font-sans font-bold text-secondary uppercase tracking-widest group-hover:gap-1.5 transition-all">
                  <span>Explore Info</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Help banner info */}
        <div className="mt-16 bg-primary text-white p-8 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <span className="text-tertiary font-sans text-xs font-extrabold uppercase tracking-widest block">
              Tailored Itineraries
            </span>
            <h4 className="font-serif text-xl font-bold">Want to customize a personalized Kashmiri expedition?</h4>
            <p className="font-sans text-sm text-neutral-warm/80 max-w-2xl">
              From premium high-altitude pony treks to handloom carpet weaving demonstrations and private wazwan cooking classes, our family is pleased to coordinate everything personally.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-secondary text-white font-sans text-xs font-bold uppercase tracking-widest px-6 py-4.5 rounded-sm hover:bg-cedar-warm transition-all shrink-0 cursor-pointer text-center w-full md:w-auto"
          >
            Inquire For Activities
          </a>
        </div>

      </div>

      {/* Interactive Detail Modal */}
      {selectedActivity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-lg overflow-hidden border border-slate-grey/15 shadow-2xl flex flex-col max-h-[90vh]">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedActivity(null)}
              className="absolute top-4 right-4 text-white hover:text-secondary bg-primary/45 hover:bg-primary/80 p-2 rounded-full transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Header Image */}
            <div className="relative h-64 md:h-72 w-full">
              <img 
                src={selectedActivity.image} 
                alt={selectedActivity.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-85"></div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <span className="text-xs font-sans font-bold text-tertiary uppercase tracking-widest mb-1.5 block">
                  {selectedActivity.category} • Tour Details
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold">{selectedActivity.name}</h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8 space-y-6 overflow-y-auto">
              <div className="grid grid-cols-2 gap-4 bg-neutral-warm p-4 rounded-md border border-secondary/5 text-xs md:text-sm">
                <div>
                  <span className="text-slate-grey text-xs block mb-0.5">Average Duration</span>
                  <span className="font-sans font-bold text-primary flex items-center gap-1.5">
                    <Clock size={15} className="text-secondary" /> {selectedActivity.duration}
                  </span>
                </div>
                <div>
                  <span className="text-slate-grey text-xs block mb-0.5">Recommended Time</span>
                  <span className="font-sans font-bold text-primary flex items-center gap-1.5">
                    <Compass size={15} className="text-secondary" /> {selectedActivity.bestTime}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-serif text-lg font-bold text-primary">About this Experience</h4>
                <p className="font-sans text-neutral-dark/80 text-sm md:text-base leading-relaxed">
                  {selectedActivity.longDescription}
                </p>
              </div>

              <div className="bg-secondary/5 p-4 rounded-md border-l-4 border-secondary text-xs text-primary leading-relaxed font-sans">
                <strong>Booking Advisory:</strong> Since we prioritize authentic family safety and coordination, we organize all tours directly using our own family's certified shikaras, cars, and alpine guides. Availability is limited; slots should be enquired about at least 24 hours prior.
              </div>
            </div>

            {/* Inquire Footer */}
            <div className="p-4 bg-neutral-warm border-t border-slate-grey/10 flex justify-end gap-3 shrink-0">
              <button
                onClick={() => setSelectedActivity(null)}
                className="px-5 py-3 font-sans text-xs font-bold text-slate-grey uppercase tracking-widest hover:text-primary transition-colors cursor-pointer"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => {
                  setSelectedActivity(null);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary text-white px-5 py-3 font-sans text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-lake-deep transition-colors cursor-pointer"
              >
                Inquire For This Tour
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
