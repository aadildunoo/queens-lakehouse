/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Amenities from './components/Amenities';
import RoomCards from './components/RoomCards';
import ActivitiesSection from './components/Activities';
import GalleryView from './components/GalleryView';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { TESTIMONIALS, FAQS } from './data';
import { BookingDetails } from './types';
import { Star, MessageSquare, Heart, Quote, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function App() {
  const [selectedRoomId, setSelectedRoomId] = useState<string>('deluxe-double-room');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');
  
  // Testimonial Carousel Index State
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // FAQ Expanded State
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('faq1');

  // Multi-step auto scroll detector for Header link underscores
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'amenities', 'heritage', 'activities', 'gallery', 'contact'];
      const scrollPos = window.scrollY + 250; // offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookNowClick = () => {
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

  const handleSelectRoom = (roomId: string) => {
    setSelectedRoomId(roomId);
  };

  const handleFormSubmit = async (details: BookingDetails) => {
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(details),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Enquiry API error:', errorText);
        throw new Error('Unable to send enquiry.');
      }

      setToastMessage('Enquiry sent. We will get back to you shortly.');
    } catch (error) {
      console.error(error);
      setToastMessage('Unable to send enquiry right now. Please try again later.');
    }
  };

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const toggleFaq = (id: string) => {
    setExpandedFaqId(expandedFaqId === id ? null : id);
  };

  useEffect(() => {
    if (!toastMessage) return;
    const timer = window.setTimeout(() => setToastMessage(null), 5000);
    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  return (
    <div className="min-h-screen bg-neutral-warm text-neutral-dark selection:bg-secondary/20 font-sans selection:text-primary overflow-x-hidden antialiased">
      
      {/* 1. Header (Sticky navigation) */}
      <Header onBookNow={handleBookNowClick} activeSection={activeSection} />

      {/* 2. Hero slider */}
      <Hero 
        onExploreRooms={() => {
          document.getElementById('heritage')?.scrollIntoView({ behavior: 'smooth' });
        }} 
        onBookNow={handleBookNowClick} 
      />

      {/* 3. About Section */}
      <About />

      {/* 4. Amenities Grid */}
      <Amenities />

      {/* 5. Room details / select */}
      <RoomCards onSelectRoom={handleSelectRoom} />

      {/* 6. Landscape Activities */}
      <ActivitiesSection />

      {/* 7. Gallery Grid */}
      <GalleryView />

      {/* 8. Interactive Testimonials & Customer Feedback */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-neutral-warm/30 border-t border-secondary/5">
        <div className="max-w-4xl mx-auto">
          
          {/* Section banner */}
          <div className="text-center mb-12 space-y-2">
            <span className="text-secondary font-sans text-xs font-bold uppercase tracking-widest block">
              Guest Experiences
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-primary">
              Loved by Discerning Travelers
            </h2>
            <div className="w-16 h-[2px] bg-secondary mx-auto mt-3"></div>
          </div>

          {/* Testimonial card carousel */}
          <div className="bg-white border border-slate-grey/10 p-8 md:p-12 rounded-lg shadow-sm relative space-y-6">
            <Quote size={40} className="text-secondary/15 absolute top-6 left-6" />
            
            <div className="flex gap-1 justify-center">
              {[...Array(TESTIMONIALS[activeTestimonialIdx].rating)].map((_, i) => (
                <Star key={i} size={15} className="fill-orange-500 text-orange-500" />
              ))}
            </div>

            <p className="font-sans text-sm md:text-base leading-relaxed text-slate-grey italic text-center text-neutral-dark/95 max-w-2xl mx-auto">
              "{TESTIMONIALS[activeTestimonialIdx].review}"
            </p>

            <div className="text-center pt-2">
              <h4 className="font-serif text-base font-bold text-primary">
                {TESTIMONIALS[activeTestimonialIdx].name}
              </h4>
              <p className="text-[11px] font-sans font-semibold text-secondary uppercase tracking-widest mt-0.5">
                {TESTIMONIALS[activeTestimonialIdx].role} • {TESTIMONIALS[activeTestimonialIdx].country}
              </p>
              <p className="text-[10px] text-slate-grey font-mono mt-1">
                Stayed on: {TESTIMONIALS[activeTestimonialIdx].date}
              </p>
            </div>

            {/* Slider dots indicator */}
            <div className="flex justify-center gap-2.5 pt-4">
              {TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTestimonialIdx(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    activeTestimonialIdx === idx ? 'bg-secondary w-6' : 'bg-secondary/20 hover:bg-secondary/40'
                  }`}
                  aria-label={`Show review ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 9. Host Advisory & FAQ Accordion Section */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-secondary font-sans text-xs font-bold uppercase tracking-widest block">
              Common Queries answered
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-primary">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-[2px] bg-secondary mx-auto mt-3"></div>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isExpanded = expandedFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-neutral-warm/40 border border-slate-grey/15 rounded-md overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex justify-between items-center p-5 text-left font-serif text-sm md:text-base font-bold text-primary hover:bg-neutral-warm/80 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle size={16} className="text-secondary shrink-0" />
                      <span>{faq.question}</span>
                    </div>
                    {isExpanded ? <ChevronUp size={16} className="text-secondary shrink-0" /> : <ChevronDown size={16} className="text-secondary shrink-0" />}
                  </button>
                  
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1.5 font-sans text-xs md:text-sm text-slate-grey leading-relaxed border-t border-secondary/5 bg-white/70">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 10. Forms / booking reservation */}
      <EnquiryForm 
        selectedRoomId={selectedRoomId} 
        onFormSubmit={handleFormSubmit} 
      />

      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 w-[min(95vw,320px)] rounded-2xl border border-white/15 bg-slate-900/95 p-4 text-sm text-white shadow-xl backdrop-blur-md">
          <div className="flex items-start justify-between gap-3">
            <span>{toastMessage}</span>
            <button
              onClick={() => setToastMessage(null)}
              className="text-secondary text-xs font-semibold uppercase tracking-[0.24em]"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* 11. Footer details */}
      <Footer />

      {/* 12. Floating WhatsApp button */}
      <WhatsAppButton />

    </div>
  );
}

