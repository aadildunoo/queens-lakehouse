import React from 'react';
import { ShieldCheck, Sparkles, X, Mail, Phone, ExternalLink } from 'lucide-react';
import { BookingDetails } from '../types';
import { ROOMS } from '../data';

interface ConfirmationModalProps {
  details: BookingDetails;
  onClose: () => void;
}

export default function ConfirmationModal({ details, onClose }: ConfirmationModalProps) {
  const chosenRoomObj = ROOMS.find(r => r.id === details.roomType);
  const enquiryId = `QLH-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

  // Format dates elegantly
  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const dateObj = new Date(dateStr);
    return dateObj.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-neutral-warm rounded-lg overflow-hidden border border-secondary/15 shadow-2xl flex flex-col">
        
        {/* Banner with Saffron or Gold Accents */}
        <div className="bg-primary text-white p-8 text-center space-y-2 relative">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
          
          <div className="mx-auto w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg border border-white/10 mb-2">
            <ShieldCheck size={26} />
          </div>
          
          <span className="text-[10px] font-sans font-semibold text-tertiary uppercase tracking-widest block">
            Enquiry Received Successfully
          </span>
          
          <h3 className="font-serif text-2xl font-bold">Jullay &amp; Warm Greetings</h3>
          <p className="text-xs text-neutral-warm/85 font-sans">
            Reference Tracking ID: <span className="font-mono font-bold text-tertiary">{enquiryId}</span>
          </p>
        </div>

        {/* content */}
        <div className="p-6 md:p-8 space-y-6 overflow-y-auto max-h-[60vh]">
          
          <div className="space-y-4 font-sans text-neutral-dark/85 text-xs md:text-sm">
            <p className="leading-relaxed">
              Dearest <strong>{details.name}</strong>,
            </p>
            <p className="leading-relaxed">
              We have received your request with great joy. Our family senior, and the staff at Queen's Lake House, are currently preparing your customized availability. A formal receipt summary with direct room details has been dispatched to your email address at: <strong className="text-primary">{details.email}</strong>.
            </p>
          </div>

          {/* Reserved Summary */}
          <div className="bg-white border border-slate-grey/10 p-5 rounded-md space-y-3 shadow-xs text-xs">
            <div className="text-center text-[10px] text-slate-grey uppercase tracking-widest font-semibold pb-1.5 border-b border-secondary/5">
              Summary of Reserved Enquiry
            </div>
            
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-grey">Suite Name:</span>
              <span className="font-sans font-bold text-primary">{chosenRoomObj?.name || 'Heritage Suite'}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-grey">Check-In:</span>
              <span className="font-semibold text-primary">{formatDate(details.dateStart)}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-grey">Check-Out:</span>
              <span className="font-semibold text-primary">{formatDate(details.dateEnd)}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-grey">Guests Config:</span>
              <span className="font-semibold">{details.guests} Registered</span>
            </div>

            {details.phone && (
              <div className="flex justify-between items-center">
                <span className="text-slate-grey">Secure Phone:</span>
                <span className="font-mono text-[11px]">{details.phone}</span>
              </div>
            )}
          </div>

          {/* Personal Greeting Sign-off */}
          <div className="pt-2 border-t border-secondary/10 space-y-2">
            <div className="text-xs text-slate-grey italic font-sans leading-relaxed text-center">
              "We preserve Kashmiri hospitality with deep pride and look forward to welcoming you aboard our restful lake house."
            </div>
            
            <div className="text-center">
              <div className="font-serif text-sm font-bold text-primary">Farooq Wangnoo &amp; Family</div>
              <div className="text-[9px] font-sans text-secondary uppercase font-semibold tracking-widest">
                Owner Hosts, Queen's Lake House
              </div>
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div className="p-4 bg-neutral-warm border-t border-slate-grey/10 flex flex-col sm:flex-row gap-2.5 shrink-0 justify-center">
          <button
            onClick={onClose}
            className="w-full sm:w-auto bg-primary hover:bg-lake-deep text-white px-8 py-3.5 font-sans text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-sm cursor-pointer text-center"
          >
            Acknowledge &amp; Return
          </button>
        </div>

      </div>
    </div>
  );
}
