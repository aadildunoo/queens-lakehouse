import React, { useState } from 'react';
import { ROOMS } from '../data';
import { Room } from '../types';
import { Sparkles, Check, ChevronRight, X, Clock, HelpCircle } from 'lucide-react';

interface RoomCardsProps {
  onSelectRoom: (roomId: string) => void;
}

export default function RoomCards({ onSelectRoom }: RoomCardsProps) {
  const [detailedRoom, setDetailedRoom] = useState<Room | null>(null);

  const handleBookClick = (roomId: string) => {
    onSelectRoom(roomId);
    
    // Smooth scroll down to the Contact form
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="heritage" className="py-20 md:py-28 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="text-center mb-16 space-y-3">
          <span className="font-sans text-xs font-bold text-secondary uppercase tracking-widest block">
            Historic Sanctuaries
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary tracking-tight">
            Our Premium Rooms
          </h2>
          <div className="w-24 h-[2px] bg-secondary mx-auto mt-4"></div>
          <p className="font-sans text-xs md:text-sm text-slate-grey max-w-xl mx-auto pt-2">
            Stay in beautifully preserved chambers lined with aromatic deodar cedar and elegant Srinagar architecture.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ROOMS.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-lg overflow-hidden border border-slate-grey/15 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full transform hover:-translate-y-1"
            >
              {/* Image with pricing overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={room.image}
                  alt={room.name}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-primary/95 text-white shadow-md border border-tertiary/20 px-4 py-2 font-serif text-sm font-bold tracking-tight rounded-sm">
                  {room.price} <span className="text-[10px] uppercase font-sans font-normal tracking-wider text-neutral-warm/80">/ night</span>
                </div>
              </div>

              {/* Specs and content */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                    {room.name}
                  </h3>
                  
                  <p className="font-sans text-xs md:text-sm text-slate-grey mb-6 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Highlights list snippet */}
                  <ul className="space-y-2.5 mb-8">
                    {room.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2.5 text-xs text-primary font-medium">
                        <Check size={14} className="text-secondary shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interactive buttons */}
                <div className="pt-4 border-t border-secondary/5 flex gap-3">
                  <button
                    onClick={() => setDetailedRoom(room)}
                    className="flex-1 border border-slate-grey/15 text-primary text-xs uppercase tracking-widest font-sans font-bold py-3.5 hover:bg-neutral-warm hover:text-secondary rounded-sm transition-all text-center cursor-pointer"
                  >
                    Details
                  </button>
                  
                  <button
                    onClick={() => handleBookClick(room.id)}
                    className="flex-1 bg-secondary text-white text-xs uppercase tracking-widest font-sans font-bold py-3.5 hover:bg-cedar-warm rounded-sm transition-all text-center shadow-xs cursor-pointer"
                  >
                    Select Room
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Room Details Modal */}
      {detailedRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-lg overflow-hidden border border-slate-grey/15 shadow-2xl flex flex-col max-h-[90vh]">
            
            {/* Close Button */}
            <button
              onClick={() => setDetailedRoom(null)}
              className="absolute top-4 right-4 text-white hover:text-secondary bg-primary/45 hover:bg-primary/80 p-2 rounded-full transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Carousel Header Image */}
            <div className="relative h-64 md:h-72 w-full shrink-0">
              <img 
                src={detailedRoom.image} 
                alt={detailedRoom.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-80"></div>
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white">
                <span className="text-xs font-sans font-bold text-tertiary uppercase tracking-widest mb-1.5 block">
                  Heritage Suite Spec • Max Guests: {detailedRoom.maxGuests}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold">{detailedRoom.name}</h3>
                <div className="text-tertiary-dim text-sm font-serif font-semibold mt-1">
                  Rate of stay: {detailedRoom.price} / per room per night
                </div>
              </div>
            </div>

            {/* Details Content Body */}
            <div className="p-6 md:p-8 space-y-6 overflow-y-auto">
              
              <div className="space-y-3">
                <h4 className="font-serif text-lg font-bold text-primary">Overview & Architectural History</h4>
                <p className="font-sans text-neutral-dark/80 text-sm leading-relaxed">
                  {detailedRoom.longDescription}
                </p>
              </div>

              {/* Room specs */}
              <div className="space-y-3 pt-2">
                <h4 className="font-serif text-base font-bold text-primary">In-room Cabin Specifications</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm">
                  {detailedRoom.specs.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-primary">
                      <Sparkles size={14} className="text-secondary shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* In-room Amenities */}
              <div className="space-y-3 pt-2 border-t border-secondary/5">
                <h4 className="font-serif text-base font-bold text-primary">Sanitary & Room Services Included</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2.5 gap-x-4 text-xs">
                  {detailedRoom.amenities.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-slate-grey">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Actions footer */}
            <div className="p-4 bg-neutral-warm border-t border-slate-grey/10 flex justify-end gap-3 shrink-0">
              <button
                onClick={() => setDetailedRoom(null)}
                className="px-5 py-3 font-sans text-xs font-bold text-slate-grey uppercase tracking-widest hover:text-primary transition-colors cursor-pointer"
              >
                Close
              </button>
              
              <button
                onClick={() => {
                  const id = detailedRoom.id;
                  setDetailedRoom(null);
                  handleBookClick(id);
                }}
                className="bg-secondary text-white px-5 py-3 font-sans text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-cedar-warm transition-colors cursor-pointer"
              >
                Reserve Suite
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
