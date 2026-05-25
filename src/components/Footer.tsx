import React from 'react';
import { Share2, Instagram, Heart, ArrowUp, Calendar, MapPin } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.share) {
      navigator.share({
        title: "Queen's Lake House",
        text: "Experience 80 years of heritage and tranquility on Srinagar's pristine Nigeen Lake.",
        url: window.location.href
      }).catch(err => console.log('Share error:', err));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Application link copied securely to clipboard!");
    }
  };

  return (
    <footer className="bg-lake-deep text-white border-t border-white/5 select-none font-sans">
      
      {/* Upper Footer Columns */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Block */}
        <div className="md:col-span-2 space-y-5">
          <a
            href="#"
            onClick={handleScrollTop}
            className="font-serif text-2xl font-bold text-tertiary tracking-tight hover:text-white transition-colors block"
          >
            Queen's Lake House
          </a>
          <p className="font-sans text-xs sm:text-sm text-neutral-warm/70 max-w-sm leading-relaxed">
            Preserving the authentic heritage of Kashmiri drawing room woodcraft and elite lake-side hospitality on the tranquil shores of Nigeen Lake for over eight decades.
          </p>
          <div className="text-[10px] uppercase font-bold text-secondary tracking-widest flex items-center gap-1">
            <MapPin size={11} />
            <span>Srinagar, Jammu &amp; Kashmir</span>
          </div>
        </div>

        {/* Navigation Quicklinks */}
        <div>
          <h4 className="font-sans text-xs font-bold text-white mb-6 uppercase tracking-widest">
            Navigation
          </h4>
          <ul className="space-y-3.5 text-xs text-neutral-warm/75">
            <li>
              <a 
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-tertiary transition-colors"
              >
                Our Story
              </a>
            </li>
            <li>
              <a 
                href="#heritage"
                className="hover:text-tertiary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('heritage')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Premium Rooms
              </a>
            </li>
            <li>
              <a 
                href="#gallery"
                className="hover:text-tertiary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Heritage Gallery
              </a>
            </li>
            <li>
              <a 
                href="#activities"
                className="hover:text-tertiary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Alpine Activities
              </a>
            </li>
          </ul>
        </div>

        {/* Social interactions */}
        <div>
          <h4 className="font-sans text-xs font-bold text-white mb-6 uppercase tracking-widest">
            Explore More
          </h4>
          <div className="flex gap-4">
            <button
              onClick={handleShare}
              title="Share Houseboat Website"
              className="w-11 h-11 border border-white/20 rounded-full flex items-center justify-center hover:bg-tertiary hover:text-primary hover:border-tertiary transition-all cursor-pointer text-white"
            >
              <Share2 size={16} />
            </button>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram Profile"
              className="w-11 h-11 border border-white/20 rounded-full flex items-center justify-center hover:bg-tertiary hover:text-primary hover:border-tertiary transition-all cursor-pointer text-white"
            >
              <Instagram size={16} />
            </a>
            <button
              onClick={handleScrollTop}
              title="Scroll to Top"
              className="w-11 h-11 border border-white/10 rounded-full flex items-center justify-center bg-white/5 hover:bg-secondary text-neutral-warm transition-all cursor-pointer"
            >
              <ArrowUp size={16} />
            </button>
          </div>
          <p className="text-[11px] text-neutral-warm/50 mt-4 max-w-xs leading-normal">
            Click Share to copy this heritage profile page link to your friends or family.
          </p>
        </div>

      </div>

      {/* Under footer */}
      <div className="border-t border-white/5 py-8 text-center text-[10px] md:text-xs text-neutral-warm/40 font-medium tracking-wider max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          © {new Date().getFullYear()} Queen's Palace Houseboat - Nigeen Lake, Srinagar. All rights reserved.
        </div>
        <div className="flex items-center gap-1">
          <span>Crafted with pride in Kashmir</span>
          <Heart size={10} className="text-orange-600 fill-orange-600" />
        </div>
      </div>

    </footer>
  );
}
