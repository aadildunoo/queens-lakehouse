import React from 'react';
import { ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12 bg-neutral-warm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Visual Stack with 80+ Years badge */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 -z-10 rounded-full blur-xl opacity-80"></div>
            
            <div className="relative rounded-lg overflow-hidden border border-slate-grey/10 shadow-xl group">
              <img
                alt="Queen's Lake House Heritage Drawing Room Interior"
                className="w-full h-auto object-cover transform scale-100 group-hover:scale-102 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida/ADBb0ujYOLgohk8EBYeGWwK-xdI9W9n1PKcR40Vo_NK2LbW0JWkTS65XiNC7FHSWgyza4U4laHYDd1lcCjiFVZ12xDZGBcHO6NirW0TFWSbP-w4QGtgz8X8eoR9mfZzBTMI7jZdUCbrf7W8c9KzbvuwfsaNJtOyVVeYtCxAZhquNvYnvpBIQLt_C5gnxFRzNfGwRS_SGINiK4L8MfaavAyVDVN_AWpF_Wk5AIfUCVg9iCqy1sZARaYWwy8Ma-A"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Float badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-6 bg-primary text-white p-6 md:p-8 rounded-sm shadow-xl border border-secondary/15">
              <p className="font-serif text-3xl md:text-5xl font-bold text-tertiary">80+</p>
              <p className="font-sans text-[10px] md:text-xs font-semibold uppercase tracking-widest text-neutral-warm/90 mt-1">
                Years of Hospitality
              </p>
            </div>
          </div>

          {/* Copy Column */}
          <div className="space-y-6 md:pl-6 mt-8 lg:mt-0">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-secondary"></div>
              <span className="font-sans text-xs font-bold text-secondary uppercase tracking-widest">
                Heritage Living
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary tracking-tight leading-tight">
              A Living Legend on <br /> Nigeen Lake
            </h2>

            <div className="space-y-6 font-sans text-neutral-dark/80 text-sm md:text-base leading-relaxed">
              <p>
                Moored gracefully in Nigeen Lake, the Queen's Lake House is a wonderful antique, and as one of the original Srinagar lake houses, it has welcomed travelers and families seeking serene hospitality for over 80 years. Across the lily-covered waters and floating gardens, the lush Himalayan landscape is a wonder to behold.
              </p>
              
              <p>
                It offers a complete respite from the hustle and bustle – with unbeatable views of clean, crystalline waters and towering mountains. Being part of a small family compound with a private entrance, there is absolutely no passing public traffic, allowing you rich birdlife and tranquility, save for the occasional fisherman.
              </p>

              {/* Highlight testimonial */}
              <div className="bg-secondary/5 border-l-4 border-secondary p-5 italic font-sans text-primary font-medium rounded-r-md">
                "Your host family will see to every need, providing great authentic Kashmir-styled breakfasts and dinners, prepared fresh and served whenever called for."
              </div>

              {/* Trust factors */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs font-semibold text-primary uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-secondary" size={18} />
                  <span>Fully Safe Private Entry</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="text-secondary" size={18} />
                  <span>Original Handcrafted Carvings</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartHandshake className="text-secondary" size={18} />
                  <span>Warm Family Care</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
