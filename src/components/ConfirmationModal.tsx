import React from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { BookingDetails } from '../types';

interface ConfirmationModalProps {
  details: BookingDetails;
  onClose: () => void;
}

export default function ConfirmationModal({ details, onClose }: ConfirmationModalProps) {
  const enquiryId = `QLH-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-neutral-warm rounded-lg overflow-hidden border border-secondary/15 shadow-2xl flex flex-col">
        
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

        <div className="p-8 text-center space-y-5">
          <p className="font-sans text-sm text-neutral-dark/90 leading-relaxed">
            Dearest <strong>{details.name}</strong>, your enquiry has been received. A notification has been sent to <strong>sales@queenslakehouse.com</strong>, and our booking team will respond shortly.
          </p>
          <p className="text-xs text-slate-grey uppercase tracking-[0.22em] font-semibold">
            Thank you for choosing Queen&apos;s Lake House.
          </p>
        </div>

        <div className="p-4 bg-neutral-warm border-t border-slate-grey/10 flex justify-center">
          <button
            onClick={onClose}
            className="w-full sm:w-auto bg-primary hover:bg-lake-deep text-white px-8 py-3.5 font-sans text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-sm cursor-pointer text-center"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
