import { Room, Activity, GalleryItem, Testimonial, FAQItem } from './types';

export const ROOMS: Room[] = [
  {
    id: 'royal-suite',
    name: "The Royal Cedar Suite",
    description: "Our signature suite featuring masterfully hand-carved cedar wood ceilings, vintage Persian carpets, and direct sunrise lake-facing windows.",
    longDescription: "Step into ninety square feet of living history. The Royal Cedar Suite displays the finest wood carvings in Srinagar, complete with fully insulated authentic cedar paneling that maintains a pleasant warm environment. Overlooking the serene lily pads of Nigeen Lake, this suite has welcomed explorers and families seeking an elite Kashmiri experience since 1946.",
    image: "https://lh3.googleusercontent.com/aida/ADBb0ujYOLgohk8EBYeGWwK-xdI9W9n1PKcR40Vo_NK2LbW0JWkTS65XiNC7FHSWgyza4U4laHYDd1lcCjiFVZ12xDZGBcHO6NirW0TFWSbP-w4QGtgz8X8eoR9mfZzBTMI7jZdUCbrf7W8c9KzbvuwfsaNJtOyVVeYtCxAZhquNvYnvpBIQLt_C5gnxFRzNfGwRS_SGINiK4L8MfaavAyVDVN_AWpF_Wk5AIfUCVg9iCqy1sZARaYWwy8Ma-A",
    price: "₹12,500",
    specs: ["1 King Size Royal Bed", "En-suite Marble Bathroom", "Private Panoramic Lake Balcony"],
    amenities: ["Hot Water Bath 24/7", "Premium Kashmiri Carpets", "Complimentary Kehwa Tea", "Room Heating", "Plush Towels & Robes", "High-speed Wi-Fi"],
    maxGuests: 3
  },
  {
    id: 'heritage-deluxe',
    name: "The Heritage Garden Double",
    description: "Adorned with intricate hand-framed Pinjra-kari woodwork and crewel embroidered textiles, overlooking our private family gardens.",
    longDescription: "Offering unmatched peace and seclusion, the Heritage Garden Double looks out over the mountain view compound. Free from any traffic or public interference, this room allows guests to experience local life at their own gentle pace. The walls are adorned with historic copper plates and hand-woven wool tapestry.",
    image: "https://lh3.googleusercontent.com/aida/ADBb0uiGy9E-qdm0zxgcNuLti6XKA6egPE16c1sndOyFztDHxbBiKFRFClvQM2ckMRbI7F1zNIgc3pqvAZGrm-0ntZZ172kJVyohCnUwocfDxbOfgRb5HHA2mN9Xv0loLcWky7Q_DYp9S1j8ZSacGOrDWyjUzgHllGI8oherTBe_So-OAjwwBDiRxwg7j5bkNcLPXIeb5oHSJmCW-IRAr4zIZd2SpreZu-LVYvEForzU_lHmamAtWLRFdKOd5n0",
    price: "₹9,800",
    specs: ["1 Cozy Queen Bed", "Attached Bathroom with Tub", "Garden & Mountain Views"],
    amenities: ["Hot Water Bath 24/7", "Authentic Crewel Drapery", "Welcome Kahwa Tea", "Electric Blanket", "Fresh Linens & Slippers", "High-speed Wi-Fi"],
    maxGuests: 2
  },
  {
    id: 'whispering-waters',
    name: "The Whispering Waters Twin",
    description: "Elegant twin layout designed around historic Kashmiri brass ornaments and vintage windows bringing in smooth, cool lake breezes.",
    longDescription: "Ideal for friends or family, The Whispering Waters Deluxe Twin offers individual vintage brass frame beds, plush velvet quilts, and direct front deck access. Awake to the soft chirping of kingfishers and the gentle splash of a passing shikara.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDcFqUWiWqJkk03Jn4LbNnodlg8yecI5UKWjrZAbzGxNcMbqJUGKyU3M2kYJuQ2K6Y4l0CCiUs2OfuOLGYVjr6-BQzypeaix_NkkqB-lcrFMeAISvVN-9Ei3SI7hahlBTiaOsZLKeGncnfxvCFAuSuS22C2m9FfqBmlNHhnjdGHUU9IfmhkjpJNzW7C0yEP5kFZ5tqQm7EN5C8CsjYX8qWdfmSc01PITvCcsycyBoETUMGw_NteixDzwJR1GupWMX1hr9wyUcjAmc",
    price: "₹8,500",
    specs: ["2 Premium Twin Beds", "Attached Modern Bathroom", "Direct Front Deck Access"],
    amenities: ["Hot Water Bath 24/7", "Vintage Brass Furnishings", "Kashmiri Herbal Tea", "Centralized Heater", "Plush Hand Towels", "High-speed Wi-Fi"],
    maxGuests: 2
  }
];

export const ACTIVITIES: Activity[] = [
  {
    id: 'shikara-ride',
    name: "Wooden Shikara Canal Rides",
    category: "Relaxation",
    description: "Explore the peaceful floating markets and tranquil lotus canals of Nigeen Lake on a traditional padded boat.",
    longDescription: "No visit to Srinagar is complete without gliding quietly inside a shikara. Your professional oarsman will guide you from our private deck into deep waters. See the morning flower bazaar where locals trade brilliant saffron, marigolds, and fresh lake harvest directly from their boats. In the evening, watch the golden mountains paint the water in shades of ochre and crimson.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDcFqUWiWqJkk03Jn4LbNnodlg8yecI5UKWjrZAbzGxNcMbqJUGKyU3M2kYJuQ2K6Y4l0CCiUs2OfuOLGYVjr6-BQzypeaix_NkkqB-lcrFMeAISvVN-9Ei3SI7hahlBTiaOsZLKeGncnfxvCFAuSuS22C2m9FfqBmlNHhnjdGHUU9IfmhkjpJNzW7C0yEP5kFZ5tqQm7EN5C8CsjYX8qWdfmSc01PITvCcsycyBoETUMGw_NteixDzwJR1GupWMX1hr9wyUcjAmc",
    duration: "2 - 3 Hours",
    bestTime: "Sunrise or Sunset"
  },
  {
    id: 'valley-trekking',
    name: "Guided Alpine Trekking",
    category: "Adventure",
    description: "Trek through lush green pine valleys and spectacular alpine meadows with views of snow-capped Himalayan ridges.",
    longDescription: "Our custom family-organized day treks introduce you to the genuine, untouched wilderness of the Kashmir valley. Walk past cascading snow streams, enjoy a traditional picnic lunch of wood-fired bread and salted tea with nomadic sheepherders, and breathe the crisp, medicinal mountain-air. Tours range from light 2-hour walks to rigorous mountain climbs.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdVLsgp6yec8jS7SjzQNmxJ5hq3Pff0BZZlwZa17AbweirzC5cHK37JHjCMl-BGDkHMfeSptPlra934lMR_xx8WZiK108sp9dXZRrGRw83pxE3ZT4ahvoui0Oxd56eIue_dDe3Ig29-m0usKOdo-snlrzEK-vaeJLaFV3bPRyao_8z9feSOqNHG5G1uW51y8VPQIUT3M9Nc31cERab9BEnN2ZgGvIHL2WlxbMhY6OGn6AGV9rzqN5FKf-xa72r7nWq8jO49MoNrPw",
    duration: "Full Day",
    bestTime: "June to September"
  },
  {
    id: 'old-town-tour',
    name: "Old Town & Hazratbal Culture",
    category: "Culture",
    description: "Immerse yourself in history inside the ancient wooden mosques, historic Hazratbal shrine, and centuries-old spice bazaars.",
    longDescription: "Staggering Kashmiri timber architecture, high-contrast brick monuments, and spiritual serenity await. Guided by an elder member of the Queen's host family, visit the sacred white marble Hazratbal Mosque. Learn about ancient papier-mâché craft, walnut-wood carving, and authentic Kashmiri saffron evaluation at trusted vendor workshops.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBu1AX811Qrm9t9el_6jehKc7_hn8HYOhsmIJGrTAxTQQVhSIYNK9ho7VxXZYeLiU_w3dn35OMizahW48xwgxkmR50dqhyRqBNiosXwDtqJsCnXlMtT1D3yyCk3nm2a_ZkyS-vIpS65w642PrUOVt78BT6T23RlDlZ2Zb0f7lskenWa6AezE5fawZFbiUXqViHRg2AzIqoJwESE1S4VQPl4N7IwDI9gXbBopbvlOUFm-XJSGA5kNSXTyP90R_zjIdOBhW1t_2hSqg8",
    duration: "4 Hours",
    bestTime: "Morning"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    category: 'exterior',
    imageUrl: "https://lh3.googleusercontent.com/aida/ADBb0uiGy9E-qdm0zxgcNuLti6XKA6egPE16c1sndOyFztDHxbBiKFRFClvQM2ckMRbI7F1zNIgc3pqvAZGrm-0ntZZ172kJVyohCnUwocfDxbOfgRb5HHA2mN9Xv0loLcWky7Q_DYp9S1j8ZSacGOrDWyjUzgHllGI8oherTBe_So-OAjwwBDiRxwg7j5bkNcLPXIeb5oHSJmCW-IRAr4zIZd2SpreZu-LVYvEForzU_lHmamAtWLRFdKOd5n0",
    title: "Noble Heritage Architecture",
    description: "The magnificent facade of Queen's Lake House standing gracefully on the Nigeen water edge."
  },
  {
    id: 'g2',
    category: 'interior',
    imageUrl: "https://lh3.googleusercontent.com/aida/ADBb0ujYOLgohk8EBYeGWwK-xdI9W9n1PKcR40Vo_NK2LbW0JWkTS65XiNC7FHSWgyza4U4laHYDd1lcCjiFVZ12xDZGBcHO6NirW0TFWSbP-w4QGtgz8X8eoR9mfZzBTMI7jZdUCbrf7W8c9KzbvuwfsaNJtOyVVeYtCxAZhquNvYnvpBIQLt_C5gnxFRzNfGwRS_SGINiK4L8MfaavAyVDVN_AWpF_Wk5AIfUCVg9iCqy1sZARaYWwy8Ma-A",
    title: "The Heritage Drawing Room",
    description: "A gorgeous wood-paneled lounge filled with classic Kashmiri seating and warm chandeliers."
  },
  {
    id: 'g3',
    category: 'scenery',
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDcFqUWiWqJkk03Jn4LbNnodlg8yecI5UKWjrZAbzGxNcMbqJUGKyU3M2kYJuQ2K6Y4l0CCiUs2OfuOLGYVjr6-BQzypeaix_NkkqB-lcrFMeAISvVN-9Ei3SI7hahlBTiaOsZLKeGncnfxvCFAuSuS22C2m9FfqBmlNHhnjdGHUU9IfmhkjpJNzW7C0yEP5kFZ5tqQm7EN5C8CsjYX8qWdfmSc01PITvCcsycyBoETUMGw_NteixDzwJR1GupWMX1hr9wyUcjAmc",
    title: "Evening Reflection",
    description: "Quiet, peaceful golden light bathing Nigeen Lake on a silent spring evening."
  },
  {
    id: 'g4',
    category: 'dining',
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBu1AX811Qrm9t9el_6jehKc7_hn8HYOhsmIJGrTAxTQQVhSIYNK9ho7VxXZYeLiU_w3dn35OMizahW48xwgxkmR50dqhyRqBNiosXwDtqJsCnXlMtT1D3yyCk3nm2a_ZkyS-vIpS65w642PrUOVt78BT6T23RlDlZ2Zb0f7lskenWa6AezE5fawZFbiUXqViHRg2AzIqoJwESE1S4VQPl4N7IwDI9gXbBopbvlOUFm-XJSGA5kNSXTyP90R_zjIdOBhW1t_2hSqg8",
    title: "Kashmiri Dinner Setup",
    description: "Elegant heritage woodcraft detailing where guests enjoy home-cooked Kashmiri cuisine."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: "Eleanor Vance",
    role: "Cultural Historian & Travel Journalist",
    country: "United Kingdom",
    review: "Spending four nights at the Queen's Lake House felt like slipping backward in a beautiful dream. The carved cedar panels carry the light fragrance of resins, and waking to the silent lake mist while drinking hot hand-brewed Kahwa is a memory I will cherish forever. The hospitality of the host family is truly peerless.",
    rating: 5,
    date: "April 2026"
  },
  {
    id: 't2',
    name: "Rajesh Malhotra",
    role: "Senior Architect",
    country: "New Delhi, India",
    review: "The craftsmanship here is exceptionally restored. Nigeen Lake is significantly quieter and cleaner than Dal Lake—perfect for deep relaxation. There's no hustle, just bird calls, gorgeous food, and warm tea.",
    rating: 5,
    date: "May 2026"
  },
  {
    id: 't3',
    name: "Sophie & Pierre",
    role: "Alpine Bloggers",
    country: "Lyon, France",
    review: "Incredible trek organized by our host! We had delicious Kashmiri flatbreads up in the hills while talking to local shepherds. Returning to a pristine wooden room with a piping hot tub was absolute bliss.",
    rating: 5,
    date: "March 2026"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: "Is Queen's Lake House directly on the water?",
    answer: "Yes. Queen's Lake House is a premium grounded classic lake house built on safe sturdy piling structures directly at the quiet shores of Nigeen Lake, featuring its own private landing dock for immediate shikara exploration.",
    category: "About"
  },
  {
    id: 'faq2',
    question: "How does the heating and hot water system work?",
    answer: "Given our high standards for premium comfort, all rooms are fully insulated with native Kashmiri cedar and equipped with hot water baths available 24 hours a day, alongside electric bed blankets and powerful individual heaters.",
    category: "Amenities"
  },
  {
    id: 'faq3',
    question: "Do you serve authentic Kashmiri food?",
    answer: "Absolutely. Our local host family prepares daily custom breakfast and gourmet dinners, including famous vegetarian selections, freshly prepared using local organic saffron, pond-fresh lotus stems, and mountain herbs.",
    category: "Dining"
  },
  {
    id: 'faq4',
    question: "What is the best way to get there from the airport?",
    answer: "Srinagar Airport is approximately a 45-minute drive. We gladly coordinate private, trustworthy car transfers directly to Nigeen Lake for our guests.",
    category: "Travel"
  }
];
