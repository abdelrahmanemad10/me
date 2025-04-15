// Feature cards data
export const features = [
  {
    id: 1,
    title: "Electrical Systems Design",
    description: "Comprehensive electrical distribution systems design with a focus on efficiency and compliance.",
    icon: "bolt",
    skills: "Load Calculations · MV/LV Panels · Cable Sizing",
    isPrimary: true
  },
  {
    id: 2,
    title: "Software Proficiency",
    description: "Advanced expertise in industry-standard software for electrical design and analysis.",
    icon: "desktop",
    skills: "AutoCAD · Revit MEP · DIALux evo",
    isPrimary: false
  },
  {
    id: 3,
    title: "Technical Analysis",
    description: "Thorough electrical system analysis to ensure safety, reliability, and performance.",
    icon: "chart-line",
    skills: "Short Circuit · Voltage Drop · Protection Systems",
    isPrimary: true
  },
  {
    id: 4,
    title: "Standards Compliance",
    description: "Deep knowledge of international and regional electrical standards and regulations.",
    icon: "clipboard-check",
    skills: "IEC · IEEE · Gulf Standards",
    isPrimary: false
  },
  {
    id: 5,
    title: "Artificial Intelligence",
    description: "AI expertise applied to electrical engineering challenges for smarter systems.",
    icon: "brain",
    skills: "ML · Deep Learning · NLP",
    isPrimary: true
  },
  {
    id: 6,
    title: "Multidisciplinary Collaboration",
    description: "Effective collaboration with diverse engineering teams on complex projects.",
    icon: "users",
    skills: "Mechanical · Architectural · Civil Integration",
    isPrimary: false
  }
];

// Projects data
export const projects = [
  {
    id: 1,
    title: "Call Center Project",
    description: "Designed MV/LV system with generator backup and ATS, sized transformers, cables, and protection devices for 24/7 reliability.",
    category: "Electrical",
    tags: ["MV/LV System", "Generator Backup", "ATS"],
    isPrimary: true,
    imageType: "callCenter"
  },
  {
    id: 2,
    title: "School Project",
    description: "Campus-wide electrical distribution and lighting design using DIALux evo for optimal lux levels and energy efficiency.",
    category: "Lighting",
    tags: ["DIALux", "Education Safety", "IEC Standards"],
    isPrimary: false,
    imageType: "schoolGym"
  },
  {
    id: 3,
    title: "Commercial/Residential Building",
    description: "Smart electrical distribution for high-rise building with MDB, SMDBs and DBs, optimized cable routing and space utilization.",
    category: "Distribution",
    tags: ["AutoCAD", "Revit", "Energy Efficient"],
    isPrimary: true,
    imageType: "commercial"
  },
  {
    id: 4,
    title: "System Single-Line Diagram",
    description: "Detailed electrical distribution diagram showing transformer ratings, panel connections, and load calculations.",
    category: "Technical",
    tags: ["System Design", "Load Calculation", "Short Circuit"],
    isPrimary: false,
    imageType: "diagram"
  },
  {
    id: 5,
    title: "Palmprint Classifier",
    description: "An advanced machine learning system for accurate biometric identification using palmprint patterns.",
    category: "AI",
    tags: ["Machine Learning", "Computer Vision", "Python"],
    isPrimary: true,
    imageType: "default"
  },
  {
    id: 6,
    title: "Arabic QA AI System",
    description: "A sophisticated natural language processing system for Arabic question answering with contextual understanding.",
    category: "NLP",
    tags: ["Arabic NLP", "Deep Learning", "TensorFlow"],
    isPrimary: false,
    imageType: "default"
  }
];

// About sections
export const aboutItems = [
  {
    title: "Technical Documentation",
    description: "Complete sets of technical drawings and documentation for tender, construction, and as-built stages",
    isPrimary: true
  },
  {
    title: "Power System Design",
    description: "Complete distribution systems including MV/LV panels, cable routing, and load balancing",
    isPrimary: false
  },
  {
    title: "Protection Systems",
    description: "Specialization in circuit breakers, relays, and fuses to secure electrical systems",
    isPrimary: true
  },
  {
    title: "Standards Expertise",
    description: "Comprehensive knowledge of IEC, IEEE, and regional Gulf electrical regulations",
    isPrimary: false
  }
];

// Social links
export const socialLinks = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/abdelrahman-emad-6a03a9215/"
  },
  {
    name: "GitHub",
    icon: "github",
    url: "#"
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    url: "https://wa.me/201274625276"
  },
  {
    name: "Instagram",
    icon: "instagram",
    url: "https://www.instagram.com/abdelrahmanemad0/"
  }
];

// Contact info
export const contactInfo = [
  {
    icon: "map-marker-alt",
    title: "Location",
    value: "Available for remote work globally, based in the UAE"
  },
  {
    icon: "envelope",
    title: "Email",
    value: "contact@abdelrahmanemad.com"
  },
  {
    icon: "phone-alt",
    title: "Phone",
    value: "+201274625276"
  }
];

// Navigation links
export const navLinks = [
  { text: "Home", href: "#home" },
  { text: "About", href: "#about" },
  { text: "Expertise", href: "#expertise" },
  { text: "Projects", href: "#projects" },
  { text: "Contact", href: "#contact" }
];
