import React, { useState } from 'react';
import { Play, X, Calendar, Compass } from 'lucide-react';
import WeatherWidget from './WeatherWidget';

interface HeroProps {
  onExploreRooms: () => void;
  onBookNow: () => void;
}

export default function Hero({ onExploreRooms, onBookNow }: HeroProps) {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <>
      <section
        id="hero"
        className="relative h-[85vh] min-h-[600px] flex items-end overflow-hidden pt-20"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0 select-none">
          <img
            alt="Queen's Lake House Heritage Houseboat Exterior"
            className="w-full h-full object-cover object-bottom scale-102 transition-transform duration-1000"
            src="https://lh3.googleusercontent.com/aida/ADBb0uiGy9E-qdm0zxgcNuLti6XKA6egPE16c1sndOyFztDHxbBiKFRFClvQM2ckMRbI7F1zNIgc3pqvAZGrm-0ntZZ172kJVyohCnUwocfDxbOfgRb5HHA2mN9Xv0loLcWky7Q_DYp9S1j8ZSacGOrDWyjUzgHllGI8oherTBe_So-OAjwwBDiRxwg7j5bkNcLPXIeb5oHSJmCW-IRAr4zIZd2SpreZu-LVYvEForzU_lHmamAtWLRFdKOd5n0"
            referrerPolicy="no-referrer"
          />
          {/* Subtle gradient overlay to provide text safety and high quality styling */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/45 via-transparent to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end w-full">
            <div className="lg:col-span-8 text-white">
              <h1 className="font-serif font-bold text-white mb-6 drop-shadow-md leading-[1.1] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                A Restful Lake House <br className="hidden sm:inline" /> in Srinagar
              </h1>
              
              <p className="font-sans text-base md:text-lg text-neutral-warm/90 mb-10 border-l-2 border-tertiary pl-6 italic font-medium leading-relaxed max-w-xl">
                Experience 80 years of authentic Kashmiri heritage and soothing tranquility on the pristine Nigeen Lake.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={onExploreRooms}
                  className="bg-white text-primary px-8 py-4 font-sans text-xs font-bold uppercase tracking-widest hover:bg-tertiary hover:text-primary-container transition-all duration-300 hover:shadow-lg active:scale-95 cursor-pointer rounded-sm"
                >
                  Explore Rooms
                </button>
                
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="border border-white text-white px-8 py-4 font-sans text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 cursor-pointer rounded-sm"
                >
                  <Play size={14} className="fill-current text-white" /> Watch Video
                </button>
              </div>
            </div>

            {/* Weather widget container */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end w-full">
              <WeatherWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden border border-white/10 shadow-2xl">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 text-white hover:text-secondary bg-black/40 p-2 rounded-full transition-colors z-10"
              aria-label="Close video"
            >
              <X size={24} />
            </button>

            {/* Simulated atmospheric high fidelity cinematic display */}
            <div className="relative aspect-video w-full bg-slate-900 flex flex-col justify-center items-center text-center p-8">
              <div className="absolute inset-0 opacity-40 select-none">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDcFqUWiWqJkk03Jn4LbNnodlg8yecI5UKWjrZAbzGxNcMbqJUGKyU3M2kYJuQ2K6Y4l0CCiUs2OfuOLGYVjr6-BQzypeaix_NkkqB-lcrFMeAISvVN-9Ei3SI7hahlBTiaOsZLKeGncnfxvCFAuSuS22C2m9FfqBmlNHhnjdGHUU9IfmhkjpJNzW7C0yEP5kFZ5tqQm7EN5C8CsjYX8qWdfmSc01PITvCcsycyBoETUMGw_NteixDzwJR1GupWMX1hr9wyUcjAmc" 
                  alt="Mist on Nigeen Lake" 
                  className="w-full h-full object-cover filter blur-xs"
                />
              </div>

              <div className="relative z-10 max-w-xl">
                <div className="mx-auto w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg mb-6 animate-pulse">
                  <Compass size={32} />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">Welcome to Queen's Lake House</h3>
                <p className="font-sans text-sm text-neutral-warm/80 mb-6 leading-relaxed">
                  "Step aboard the original masterfully carved houseboat & lake bungalow of Srinagar. Experience the morning dew mist, fresh local trout, hand-brewed Kashmiri Kehwa tea, and the rich legacy loved by global travelers for eight decades."
                </p>
                <div className="text-xs font-mono text-tertiary tracking-widest uppercase">
                  Cinematic Trailer • Srinagar, Kashmir
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
