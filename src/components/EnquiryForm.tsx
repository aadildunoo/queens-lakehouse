import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Calendar, Users, MessageSquare, ShieldCheck, Sparkles, Receipt, PenTool } from 'lucide-react';
import { ROOMS } from '../data';
import { BookingDetails } from '../types';

interface EnquiryFormProps {
  selectedRoomId: string;
  onFormSubmit: (details: BookingDetails) => void;
}

export default function EnquiryForm({ selectedRoomId, onFormSubmit }: EnquiryFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [roomType, setRoomType] = useState('royal-suite');
  const [guests, setGuests] = useState(2);
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  
  // Calculate pricing estimates live
  const [totalNights, setTotalNights] = useState(0);
  const [approxTotal, setApproxTotal] = useState(0);

  // Sync prop selection
  useEffect(() => {
    if (selectedRoomId) {
      setRoomType(selectedRoomId);
    }
  }, [selectedRoomId]);

  // Calculate live estimates on inputs update
  useEffect(() => {
    if (dateStart && dateEnd) {
      const start = new Date(dateStart);
      const end = new Date(dateEnd);
      if (end > start) {
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setTotalNights(diffDays);

        const chosenRoom = ROOMS.find(r => r.id === roomType);
        if (chosenRoom) {
          // Parse price string e.g. "₹12,500" or similar
          const priceNum = parseInt(chosenRoom.price.replace(/[^0-9]/g, '')) || 0;
          setApproxTotal(priceNum * diffDays);
        }
      } else {
        setTotalNights(0);
        setApproxTotal(0);
      }
    } else {
      setTotalNights(0);
      setApproxTotal(0);
    }
  }, [dateStart, dateEnd, roomType]);

  const activeRoomObj = ROOMS.find(r => r.id === roomType);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !dateStart || !dateEnd) {
      alert("Please complete core details including dates and email.");
      return;
    }
    onFormSubmit({
      name,
      email,
      dateStart,
      dateEnd,
      roomType,
      guests,
      message,
      phone
    });
  };

  const setSampleDates = () => {
    const today = new Date();
    const futureCheckIn = new Date(today);
    futureCheckIn.setDate(today.getDate() + 7);
    
    const futureCheckOut = new Date(futureCheckIn);
    futureCheckOut.setDate(futureCheckIn.getDate() + 3);

    setDateStart(futureCheckIn.toISOString().split('T')[0]);
    setDateEnd(futureCheckOut.toISOString().split('T')[0]);
  };

  return (
    <section id="contact" className="bg-primary py-20 md:py-28 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
        
        {/* Left column info & live receipt */}
        <div className="space-y-8 lg:sticky lg:top-24">
          <div className="space-y-4">
            <span className="text-secondary font-sans text-xs font-bold uppercase tracking-widest block">
              Reservation Advisory
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
              Plan Your Stay
            </h2>
            <p className="font-sans text-neutral-warm/85 text-sm md:text-base leading-relaxed max-w-lg">
              We invite you to experience the ultimate peace of Kashmir. Fill out your details below and our family elder will personally respond within 2 hours with availability, options, and direct booking verification.
            </p>
          </div>

          {/* Core Contacts */}
          <div className="space-y-4 pb-6 border-b border-white/10 text-xs md:text-sm font-sans font-medium text-neutral-warm/95">
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-full bg-white/5 text-secondary">
                <Mail size={16} />
              </div>
              <div>
                <span className="text-[10px] text-white/50 block font-normal uppercase">Direct Email</span>
                <span>sales@queenslakehouse.com</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-full bg-white/5 text-secondary">
                <MapPin size={16} />
              </div>
              <div>
                <span className="text-[10px] text-white/50 block font-normal uppercase">Location Moored</span>
                <span>Nigeen Lake, Srinagar, Kashmir, 190001</span>
              </div>
            </div>
          </div>

          {/* Live Estimates Receipt Box */}
          <div className="bg-white/5 rounded-lg border border-white/10 p-6 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <Receipt size={18} className="text-secondary" />
              <h3 className="font-serif text-base font-semibold">Interactive Enquiry Summary</h3>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between">
                <span className="text-white/60">Selected Chamber:</span>
                <span className="font-semibold text-secondary">{activeRoomObj?.name || 'Loading...'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Daily Suite Rate:</span>
                <span className="font-semibold">{activeRoomObj?.price || 'None'} / night</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Interval Nights:</span>
                <span className="font-semibold font-mono text-tertiary">
                  {totalNights > 0 ? `${totalNights} Night(s)` : 'Select Dates'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Registered Guests:</span>
                <span className="font-semibold">{guests} Guests</span>
              </div>

              {/* Extras Included indicator */}
              {totalNights > 0 && (
                <div className="bg-white/5 p-3 rounded-md mt-2 flex items-center justify-between border border-secondary/20">
                  <span className="text-[10px] text-neutral-warm/90 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles size={11} className="text-secondary" /> Kehwa Tea &amp; Breakfast Included
                  </span>
                  <span className="text-[10px] font-mono text-secondary uppercase font-bold">Free</span>
                </div>
              )}

              {approxTotal > 0 && (
                <div className="pt-3 border-t border-white/10 flex justify-between items-baseline">
                  <span className="text-sm font-serif font-semibold">Estimated Total:</span>
                  <span className="text-xl font-serif font-bold text-secondary">
                    ₹{approxTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              )}
            </div>

            {/* Helper shortcuts tags */}
            <div className="pt-2">
              <button
                type="button"
                onClick={setSampleDates}
                className="text-[11px] font-sans font-bold text-secondary uppercase tracking-widest hover:text-white transition-colors bg-white/5 border border-white/10 py-2 px-3 rounded-sm cursor-pointer w-full text-center"
              >
                ⚡ Use Sample Dates (1 Week Out)
              </button>
            </div>
          </div>
        </div>

        {/* Right column Enquiry form card */}
        <div className="bg-white text-neutral-dark p-8 md:p-10 rounded-sm shadow-2xl border border-secondary/10 w-full">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name */}
            <div>
              <label 
                htmlFor="user-name-input"
                className="block font-sans text-xs font-bold text-slate-grey mb-2 uppercase tracking-widest"
              >
                Your Name
              </label>
              <input
                id="user-name-input"
                className="w-full bg-neutral-warm border-transparent focus:border-secondary focus:ring-1 focus:ring-secondary text-primary p-3.5 transition-all text-xs font-semibold rounded-sm tracking-wider"
                placeholder="Ex. Jane Peterson"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div>
              <label 
                htmlFor="user-email-input"
                className="block font-sans text-xs font-bold text-slate-grey mb-2 uppercase tracking-widest"
              >
                Email Address
              </label>
              <input
                id="user-email-input"
                className="w-full bg-neutral-warm border-transparent focus:border-secondary focus:ring-1 focus:ring-secondary text-primary p-3.5 transition-all text-xs font-semibold rounded-sm tracking-wider"
                placeholder="jane@example.com"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Contact Phone (Optional but highly premium to enable seamless WhatsApp replies!) */}
            <div>
              <label 
                htmlFor="user-phone-input"
                className="block font-sans text-xs font-bold text-slate-grey mb-2 uppercase tracking-widest"
              >
                Contact Number (For instant family updates)
              </label>
              <input
                id="user-phone-input"
                className="w-full bg-neutral-warm border-transparent focus:border-secondary focus:ring-1 focus:ring-secondary text-primary p-3.5 transition-all text-xs font-semibold rounded-sm tracking-wider"
                placeholder="+1 (555) 019-2834"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Grid of Dates & Rooms */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Check in */}
              <div>
                <label 
                  htmlFor="check-in-date"
                  className="block font-sans text-[11px] font-bold text-slate-grey mb-1.5 uppercase tracking-widest"
                >
                  Check In Date
                </label>
                <input
                  id="check-in-date"
                  className="w-full bg-neutral-warm border-transparent focus:border-secondary focus:ring-1 focus:ring-secondary text-primary p-3 transition-all text-xs font-semibold rounded-sm"
                  type="date"
                  required
                  value={dateStart}
                  onChange={(e) => setDateStart(e.target.value)}
                />
              </div>

              {/* Check out */}
              <div>
                <label 
                  htmlFor="check-out-date"
                  className="block font-sans text-[11px] font-bold text-slate-grey mb-1.5 uppercase tracking-widest"
                >
                  Check Out Date
                </label>
                <input
                  id="check-out-date"
                  className="w-full bg-neutral-warm border-transparent focus:border-secondary focus:ring-1 focus:ring-secondary text-primary p-3 transition-all text-xs font-semibold rounded-sm"
                  type="date"
                  required
                  value={dateEnd}
                  onChange={(e) => setDateEnd(e.target.value)}
                />
              </div>
            </div>

            {/* Room choice & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label 
                  htmlFor="room-type-select"
                  className="block font-sans text-[11px] font-bold text-slate-grey mb-1.5 uppercase tracking-widest"
                >
                  Suite Chamber
                </label>
                <select
                  id="room-type-select"
                  className="w-full bg-neutral-warm border-transparent focus:border-secondary focus:ring-1 focus:ring-secondary text-primary p-3 transition-all text-xs font-bold rounded-sm cursor-pointer"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                >
                  <option value="royal-suite">Royal Cedar Suite</option>
                  <option value="heritage-deluxe">Garden Double Room</option>
                  <option value="whispering-waters">Whispering Twins</option>
                </select>
              </div>

              <div>
                <label 
                  htmlFor="guests-select"
                  className="block font-sans text-[11px] font-bold text-slate-grey mb-1.5 uppercase tracking-widest"
                >
                  Guests Number
                </label>
                <select
                  id="guests-select"
                  className="w-full bg-neutral-warm border-transparent focus:border-secondary focus:ring-1 focus:ring-secondary text-primary p-3 transition-all text-xs font-bold rounded-sm cursor-pointer"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests (With extra single bedding)</option>
                  <option value="4">4 Guests </option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label 
                htmlFor="user-message-input"
                className="block font-sans text-xs font-bold text-slate-grey mb-2 uppercase tracking-widest"
              >
                Special Requirements &amp; Requests
              </label>
              <textarea
                id="user-message-input"
                className="w-full bg-neutral-warm border-transparent focus:border-secondary focus:ring-1 focus:ring-secondary text-primary p-3.5 transition-all text-xs font-semibold rounded-sm"
                placeholder="Ex. airport transfers, specific dietary requirements (e.g., pure vegetarian, Kashmiri traditional wazwan)..."
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {/* Safeguard note */}
            <div className="flex gap-2.5 items-start mt-2">
              <ShieldCheck className="text-secondary shrink-0 mt-0.5" size={16} />
              <p className="text-[10px] text-slate-grey leading-normal">
                By sending this secure query, your information remains encrypted. Your request is processed directly by the Queen's host family. No credit card details are collected at this stage.
              </p>
            </div>

            {/* Button */}
            <button
              id="submit-enquiry-button"
              className="w-full bg-secondary hover:bg-cedar-warm text-white font-sans text-xs font-bold py-4 rounded-sm hover:shadow-lg transition-all uppercase tracking-widest mt-2 cursor-pointer border border-secondary/10"
              type="submit"
            >
              Send Enquiry Request
            </button>
            
          </form>
        </div>

      </div>
    </section>
  );
}
