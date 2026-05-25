import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { Eye, ChevronLeft, ChevronRight, X, Heart, Sparkles } from 'lucide-react';

export default function GalleryView() {
  const [activeTab, setActiveTab] = useState<'all' | 'exterior' | 'interior' | 'scenery' | 'dining'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lovedItems, setLovedItems] = useState<{ [key: string]: boolean }>({});

  const filteredItems = activeTab === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeTab);

  const handleLoveClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setLovedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const openLightbox = (item: GalleryItem) => {
    const origIndex = GALLERY_ITEMS.findIndex(g => g.id === item.id);
    if (origIndex !== -1) {
      setLightboxIndex(origIndex);
    }
  };

  const nextSlide = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevSlide = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="text-center mb-12 space-y-3">
          <span className="font-sans text-xs font-bold text-secondary uppercase tracking-widest block">
            Capturing Lake Serenity
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary tracking-tight">
            Our Historic Gallery
          </h2>
          <div className="w-24 h-[2px] bg-secondary mx-auto mt-4"></div>
          <p className="font-sans text-xs md:text-sm text-slate-grey max-w-xl mx-auto pt-2">
            Delight your eyes with authentic carvings, breathtaking Nigeen Sunrises, and the handcrafted woodwork of centuries past.
          </p>
        </div>

        {/* Tab filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['all', 'exterior', 'interior', 'scenery', 'dining'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-widest transition-all rounded-sm cursor-pointer ${
                activeTab === tab
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-neutral-warm/80 text-primary border border-slate-grey/5 hover:bg-neutral-warm'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative h-80 rounded-lg overflow-hidden border border-slate-grey/15 shadow-xs cursor-pointer bg-neutral-warm"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                {/* Top action (heart badge) */}
                <div className="flex justify-end">
                  <button
                    onClick={(e) => handleLoveClick(e, item.id)}
                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white"
                  >
                    <Heart
                      size={18}
                      className={lovedItems[item.id] ? "fill-orange-600 text-orange-600" : ""}
                    />
                  </button>
                </div>

                {/* Bottom info */}
                <div className="space-y-1.5 text-white">
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-tertiary">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg font-bold">{item.title}</h4>
                  <p className="font-sans text-xs text-white/80 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="pt-2 flex items-center gap-1.5 text-[11px] font-semibold text-white/90">
                    <Eye size={12} />
                    <span>Enlarge Image</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Slider Overlay */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-xs select-none">
          <div className="relative w-full max-w-4xl flex flex-col items-center">
            
            {/* Top Close */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-12 right-0 text-white hover:text-secondary p-2 transition-colors z-10 font-sans text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 cursor-pointer"
            >
              <X size={20} /> Close
            </button>

            {/* Slider container */}
            <div className="relative w-full aspect-video bg-neutral-dark rounded-md overflow-hidden border border-white/5 flex items-center justify-center">
              <img
                src={GALLERY_ITEMS[lightboxIndex].imageUrl}
                alt={GALLERY_ITEMS[lightboxIndex].title}
                className="max-h-full max-w-full object-contain"
              />

              {/* Prev icon */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary hover:bg-black/40 p-3 rounded-full transition-all cursor-pointer z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={30} />
              </button>

              {/* Next icon */}
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary hover:bg-black/40 p-3 rounded-full transition-all cursor-pointer z-10"
                aria-label="Next image"
              >
                <ChevronRight size={30} />
              </button>
            </div>

            {/* Carousel Caption */}
            <div className="text-center text-white max-w-xl mt-6 space-y-2">
              <span className="text-xs font-sans font-bold uppercase text-tertiary tracking-widest">
                Category: {GALLERY_ITEMS[lightboxIndex].category} • {lightboxIndex + 1} of {GALLERY_ITEMS.length}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                {GALLERY_ITEMS[lightboxIndex].title}
              </h3>
              <p className="font-sans text-neutral-warm/80 text-xs sm:text-sm leading-relaxed">
                {GALLERY_ITEMS[lightboxIndex].description}
              </p>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
