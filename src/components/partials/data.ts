import {
  User,
  ShoppingBag,
  Building2,
  Syringe,
  Home,
  Shield,
  ChevronRight,
  HeartPulse,
  Stethoscope,
  Baby,
  Brain,
  Eye,
  SmileIcon as Tooth,
  Clipboard,
  Activity,
  Pill,
  Microscope,
  Dna,
  ShipWheelIcon as Wheelchair,
} from "lucide-react";

// General Services
export const generalServices = [
  {
    icon: User,
    title: "Chat with Doctor",
    description: "Chat or video call your doctor for fast diagnose",
    link: "/services/chat",
    linkText: "See Doctor",
  },
  {
    icon: ShoppingBag,
    title: "Health Shop",
    description: "Browse millions of medicine to ensure your health",
    link: "/services/shop",
    linkText: "Browse Shop",
  },
  {
    icon: Building2,
    title: "Hospital Appointment",
    description: "Book hospital appointment without hustle and queue",
    link: "/services/hospital",
    linkText: "Book Appointment",
  },
  {
    icon: Syringe,
    title: "Medical Appointment",
    description: "Book check-up and choose your desired health check",
    link: "/services/medical",
    linkText: "Book Check-up",
  },
  {
    icon: Home,
    title: "Home Lab & Vaccine",
    description: "Get lab test or vaccine from home fast and easy",
    link: "/services/lab",
    linkText: "Reserve Vaccine",
  },
  {
    icon: Shield,
    title: "Connect Your Insurance",
    description: "Get insurance benefits directly for our services",
    link: "/services/insurance",
    linkText: "Connect Now",
  },
];

// Special Services
export const specialServices = [
  {
    icon: HeartPulse,
    title: "Cardiology",
    description:
      "Specialized care for heart conditions and cardiovascular health",
    link: "/services/cardiology",
    linkText: "Learn More",
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Expert diagnosis and treatment for neurological disorders",
    link: "/services/neurology",
    linkText: "Consult Specialist",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description:
      "Comprehensive healthcare for infants, children, and adolescents",
    link: "/services/pediatrics",
    linkText: "Book Appointment",
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description:
      "Complete eye care services from routine exams to surgical procedures",
    link: "/services/ophthalmology",
    linkText: "Schedule Exam",
  },
  {
    icon: Tooth,
    title: "Dental Care",
    description: "Professional dental services for optimal oral health",
    link: "/services/dental",
    linkText: "Book Cleaning",
  },
  {
    icon: Stethoscope,
    title: "Internal Medicine",
    description:
      "Comprehensive care for adults focusing on prevention and treatment",
    link: "/services/internal-medicine",
    linkText: "See Specialist",
  },
];

// Health Support
export const healthSupport = [
  {
    icon: Clipboard,
    title: "Health Records",
    description:
      "Secure access to your complete medical history and test results",
    link: "/services/records",
    linkText: "Access Records",
  },
  {
    icon: Activity,
    title: "Wellness Programs",
    description:
      "Personalized programs to improve your overall health and wellbeing",
    link: "/services/wellness",
    linkText: "Join Program",
  },
  {
    icon: Pill,
    title: "Medication Management",
    description:
      "Track, refill, and manage all your prescriptions in one place",
    link: "/services/medication",
    linkText: "Manage Meds",
  },
  {
    icon: Microscope,
    title: "Lab Results",
    description:
      "Quick access to your lab test results with detailed explanations",
    link: "/services/lab-results",
    linkText: "View Results",
  },
  {
    icon: Dna,
    title: "Genetic Counseling",
    description: "Expert guidance on genetic testing and hereditary conditions",
    link: "/services/genetic",
    linkText: "Get Counseling",
  },
  {
    icon: Wheelchair,
    title: "Accessibility Services",
    description:
      "Resources and support for patients with special accessibility needs",
    link: "/services/accessibility",
    linkText: "Learn More",
  },
];

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Health Care Through the Back Door: The Dangers of Nurse Visits",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Porttibus and pulvinar massa sed. Nunc nunc tincidunt dignissim elit amet.",
    image: "/images/drip-pic.png",
    category: "MEDICAL PRACTICE",
    author: "HANS DUYFELT",
    date: "May 12, 2022",
  },
  {
    id: "2",
    title: "Health Care Through the Back Door: The Dangers of Nurse Visits",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Porttibus and pulvinar massa sed. Nunc nunc tincidunt dignissim elit amet.",
    image: "/images/drip-pic.png",
    category: "HEALTHCARE",
    author: "HANS DUYFELT",
    date: "May 12, 2022",
  },
  {
    id: "3",
    title: "The Biggest Reason on Why Heart is The Most Crazy Thing",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Porttibus and pulvinar massa sed.",
    image: "/images/heart.png",
    category: "HEART",
    author: "HANS DUYFELT",
    date: "May 12, 2022",
  },
  {
    id: "4",
    title: "Mother and Children : How to take care of your born child",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Porttibus and pulvinar massa sed.",
    image: "/images/baby.png",
    category: "PREGNANCY",
    author: "HANS DUYFELT",
    date: "May 12, 2022",
  },
  {
    id: "5",
    title: "Health Care Through the Back Door: The Dangers of Nurse Visits",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Porttibus and pulvinar massa sed. Nunc nunc tincidunt dignissim elit amet.",
    image: "/images/drip-pic.png",
    category: "HEALTHCARE",
    author: "HANS DUYFELT",
    date: "May 12, 2022",
  },
  {
    id: "6",
    title: "The Biggest Reason on Why Heart is The Most Crazy Thing",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Porttibus and pulvinar massa sed.",
    image: "/images/heart.png",
    category: "HEART",
    author: "HANS DUYFELT",
    date: "May 12, 2022",
  },
  //   {
  //     id: "7",
  //     title: "Mother and Children : How to take care of your born child",
  //     excerpt:
  //       "Lorem ipsum dolor sit amet consectetur. Porttibus and pulvinar massa sed.",
  //     image: "/images/baby.png",
  //     category: "PREGNANCY",
  //     author: "HANS DUYFELT",
  //     date: "May 12, 2022",
  //   },
];
