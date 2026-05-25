export interface Room {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  price: string; // e.g. "USD 120" or "INR 9,500"
  specs: string[]; // e.g. ["1 King Bed", "En-suite bathroom", "Lake facing balcony"]
  amenities: string[];
  maxGuests: number;
}

export interface Activity {
  id: string;
  name: string;
  category: string; // e.g. "Adventure", "Culture", "Relaxation"
  description: string;
  longDescription: string;
  image: string;
  duration: string; // e.g. "2 Hours", "Full Day"
  bestTime: string; // e.g. "Morning", "Sunset", "April to October"
}

export interface GalleryItem {
  id: string;
  category: 'exterior' | 'interior' | 'dining' | 'scenery';
  imageUrl: string;
  title: string;
  description: string;
}

export interface BookingDetails {
  name: string;
  email: string;
  dateStart: string;
  dateEnd: string;
  roomType: string;
  guests: number;
  message: string;
  phone?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  country: string;
  review: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
