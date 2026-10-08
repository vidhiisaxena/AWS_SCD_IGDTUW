import saniaImg from '../assets/Sania.jpeg';
import vidhiImg from '../assets/vidhi.jpeg';
import mehakImg from '../assets/Mehak.jpeg';
import aneshyaImg from '../assets/Aneshya.jpeg';
import lavanyaImg from '../assets/lavanya.png';

export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  sessionTitle: string;
  avatar: string;
  accentColor: 'purple' | 'blue' | 'pink' | 'orange';
  badgeNumber?: string;
  tag?: string;
  metrics?: { label: string; value: string }[];
  socials?: { linkedin?: string; twitter?: string; github?: string };
}

export interface Sponsor {
  id: string;
  name: string;
  tier: 'Title Partner' | 'Ticketing Partner' | 'Community Partner' | 'Technology Partner';
  tierColor: string;
  description: string;
  iconName: string;
}

export interface TeamCategory {
  id: string;
  code: string;
  name: string;
  status: string;
  members: {
    name: string;
    role: string;
    avatar: string;
    systemTag: string;
    github?: string;
    linkedin?: string;
  }[];
}

export interface FAQItem {
  id: string;
  command: string;
  question: string;
  answer: string;
  category: string;
}

export const eventConfig = {
  name: "AWS STUDENT COMMUNITY DAY",
  tagline: "For Students, By Students.",
  philosophy: "Together, we learn. Together, we build. Together, we grow.",
  experience: "One Community. Countless Possibilities.",
  organizer: "AWS Student Builder Group, IGDTUW",
  institution: "Indira Gandhi Delhi Technical University for Women",
  dateDisplay: "30th October",
  dateSubtext: "30 OCTOBER",
  timeDisplay: "10:00 AM onwards",
  venueDisplay: "IGDTUW, Delhi",
  venueAddress: "Madrasa Road, Kashmere Gate, New Delhi, Delhi 110006",
  googleMapsUrl: "https://maps.google.com/?q=Indira+Gandhi+Delhi+Technical+University+for+Women+Kashmere+Gate+Delhi",
  // Target date for countdown (30th October, 10:00 AM).
  // Dynamically uses current year or next October 30.
  countdownTarget: "2026-10-30T10:00:00",
  registrationUrl: "https://konfhub.com/aws-student-community-day-2026-new-delhi",
  socials: {
    instagram: "https://www.instagram.com/awscloudclubigdtuw/",
    linkedin: "https://www.linkedin.com/company/aws-cloud-club-igdtuw/",
    github: "https://github.com/AWS-Cloud-Club-IGDTUW",
    discord: "https://discord.gg/awscommunity",
  }
};

export const arcadeGames = [
  {
    id: "memory-cloud",
    title: "AWS Memory Match",
    tagline: "MEMORY CLOUD",
    description: "Match AWS services and test your cloud memory in a fast-paced interactive grid.",
    badge: "ARCADE 01",
    url: "https://aws-match-game.vercel.app/",
    color: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
    glowColor: "rgba(0, 240, 255, 0.4)",
    buttonText: "PLAY MEMORY →",
    icon: "🧠",
    stats: "24 Cloud Cards • Match AWS Architecture",
  },
  {
    id: "cloud-crush",
    title: "AWS Cloud Crush",
    tagline: "CLOUD CRUSH",
    description: "Match your way through the AWS cloud with services, clusters, and power-up combos.",
    badge: "ARCADE 02",
    url: "https://aws-candy-game.vercel.app/index.html",
    color: "from-pink-500/20 via-purple-500/20 to-amber-500/20",
    glowColor: "rgba(255, 0, 122, 0.4)",
    buttonText: "PLAY CLOUD CRUSH →",
    icon: "🍬",
    stats: "Endless Arcade Mode • High Score Leaderboard",
  }
];

export const speakersData: Speaker[] = [
  {
    id: "spk-dipali",
    name: "Dipali Kulshrestha",
    role: "VP of Data Engineering",
    company: "NatWest Group • AWS Hero",
    sessionTitle: "TBA",
    accentColor: "purple",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    socials: { linkedin: "https://www.linkedin.com/in/dipalik/" }
  },
  {
    id: "spk-rajat",
    name: "Rajat Arora",
    role: "Cloud & DevOps Specialist",
    company: "AWS Community Builder",
    sessionTitle: "TBA",
    accentColor: "blue",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    socials: { linkedin: "https://www.linkedin.com/in/arora-rajat-cw/" }
  },
  {
    id: "spk-ashish",
    name: "Ashish Kasaudhan",
    role: "DevSecOps Architect",
    company: "AWS Ambassador & Community Builder",
    sessionTitle: "AI Adoption with Kiro",
    accentColor: "orange",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    socials: { linkedin: "https://www.linkedin.com/in/ashish-kasaudhan-713a4225/" }
  },
  {
    id: "spk-varsha",
    name: "Varsha Verma",
    role: "Lead Cloud Engineer",
    company: "Accenture • AWS Community Builder",
    sessionTitle: "TBA",
    accentColor: "pink",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    socials: { linkedin: "https://www.linkedin.com/in/varsha-verma-cloud-devops/" }
  },
  {
    id: "spk-nilesh",
    name: "Nilesh Vaghela",
    role: "Founder & CEO",
    company: "Electromech Cloud • AWS Hero",
    sessionTitle: "Getting started robotics on AWS",
    accentColor: "purple",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
    socials: { linkedin: "https://www.linkedin.com/in/nilesh-vaghela/" }
  },
  {
    id: "spk-dimple",
    name: "Dimple Vaghela",
    role: "Co-Founder",
    company: "CloudKida • AWS Hero",
    sessionTitle: "TBA",
    accentColor: "blue",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80",
    socials: { linkedin: "https://www.linkedin.com/in/dimple-vaghela-ba45447b/" }
  },
  {
    id: "spk-sumit",
    name: "Sumit Grover",
    role: "Cloud Security & Infrastructure Specialist",
    company: "AWS Community Builder",
    sessionTitle: "TBA",
    accentColor: "orange",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    socials: { linkedin: "https://www.linkedin.com/in/sumit-grover-29a277256/" }
  },
  {
    id: "spk-vridhi",
    name: "Vridhi Duggal",
    role: "Software Developer & Cloud Builder",
    company: "AWS User Group Delhi NCR",
    sessionTitle: "TBA",
    accentColor: "pink",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    socials: { linkedin: "https://www.linkedin.com/in/vridhi-duggal-060682275/" }
  },
  {
    id: "spk-satinder",
    name: "Satinder Singh",
    role: "Director of Solutions Architecture",
    company: "Amazon Web Services (AWS)",
    sessionTitle: "TBA",
    accentColor: "purple",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    socials: { linkedin: "https://www.linkedin.com/in/satinder-singh-1678b73/" }
  },
  {
    id: "spk-diksha",
    name: "Diksha Verma",
    role: "Cloud & GenAI Engineer",
    company: "HPE • Tech Mentor",
    sessionTitle: "Building Production-Ready GenAI Applications on AWS with Amazon Bedrock and Kubernetes",
    accentColor: "blue",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    socials: { linkedin: "https://www.linkedin.com/in/dikshaverma01428" }
  }
];

export const timelineData = [
  { time: "09:30 AM", marker: "09:30", title: "CHECK-IN & BADGE DEPLOYMENT", detail: "Swag kit distribution, RFID clearance & morning handshake network", category: "REGISTRATION" },
  { time: "10:00 AM", marker: "10:00", title: "IGNITION KEYNOTE: FOR STUDENTS, BY STUDENTS", detail: "AWS SGB IGDTUW leads and AWS Community Ambassadors welcome the fleet", category: "KEYNOTE" },
  { time: "11:00 AM", marker: "11:00", title: "TECHNICAL PAYLOAD SESSIONS 01 & 02", detail: "Dual tracks: Serverless Scale Architecture & Generative AI Agents", category: "TECH DEEP DIVE" },
  { time: "12:30 PM", marker: "12:30", title: "COMMUNITY ORBIT, LUNCH & ARCADE BATTLES", detail: "Networking lunch, live AWS Memory Match & Cloud Crush leaderboard competitions", category: "INTERACTION" },
  { time: "02:00 PM", marker: "14:00", title: "HANDS-ON BUILD LAB & STUDENT SHOWCASE", detail: "Deploy live AWS microservices & observe real student-built capstones", category: "WORKSHOP" },
  { time: "03:45 PM", marker: "15:45", title: "PANEL: NAVIGATING CLOUD CAREERS AS WOMEN IN TECH", detail: "Insights from industry veterans and alumni leaders", category: "PANEL" },
  { time: "04:30 PM", marker: "16:30", title: "COMMUNITY AWARDS, RAFFLE & MISSION DEBRIEF", detail: "Announcing hackathon winners, swags, certifications & group photo", category: "FINALE" }
];

export const sponsorsData: Sponsor[] = [
  {
    id: "sp-1",
    name: "AWS Community",
    tier: "Title Partner",
    tierColor: "from-amber-400 to-orange-500",
    description: "Empowering developers and student builders worldwide with cloud credits and mentorship.",
    iconName: "CloudLightning"
  },
  {
    id: "sp-2",
    name: "Kornfhub",
    tier: "Ticketing Partner",
    tierColor: "from-cyan-400 to-blue-500",
    description: "Kornfhub is a cutting-edge platform designed to streamline event management and engagement for student communities.",
    iconName: "Ticket"
  },
  {
    id: "sp-3",
    name: "AWS UG Delhi NCR",
    tier: "Community Partner",
    tierColor: "from-purple-400 to-pink-500",
    description: "An active regional community for AWS professionals, developers, partners, cloud enthusiasts.",
    iconName: "Cloud"
  },
  {
    id: "sp-4",
    name: "Codecrafting",
    tier: "Community Partner",
    tierColor: "from-emerald-400 to-teal-500",
    description: "Next-generation terminal workflows and secure collaborative cloud sandboxes.",
    iconName: "Users"
  },
  {
    id:"sp-5",
    name:"DevSphere",
    tier:"Community Partner",
    tierColor:"from-emerald-400 to-teal-500",
    description: "Next-generation terminal workflows and secure collaborative cloud sandboxes.",
    iconName:"Radio"
  }
];

export const teamControlData: TeamCategory[] = [
  {
    id: "cat-community",
    code: "01",
    name: "COMMUNITY",
    status: "ONLINE • 100% TELEMETRY",
    members: [
      { name: "Sania Verma", role: "President", avatar: saniaImg, systemTag: "STATION-LEAD-01", linkedin: "https://www.linkedin.com/in/sania-verma-21a642291/" },
      { name: "Vidhi Saxena", role: "Technical Lead", avatar: vidhiImg, systemTag: "RELATIONS-NODE", linkedin: "https://in.linkedin.com/in/vidhi-saxena-86150a243" },
      { name: "Mehak", role: "Event Management Lead", avatar: mehakImg, systemTag: "ADVOCACY-NODE", linkedin: "https://in.linkedin.com/in/mehak-76677a288" },
      { name: "Drishti", role: "Public Relations Lead", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80", systemTag: "ADVOCACY-NODE", linkedin: "#" },
      { name: "Aneshya Das", role: "Media Lead", avatar: aneshyaImg, systemTag: "ADVOCACY-NODE", linkedin: "https://in.linkedin.com/in/aneshya-das-153a91317" },
      { name: "Lavanya Kushwaha", role: "Content Lead", avatar: lavanyaImg, systemTag: "ADVOCACY-NODE", linkedin: "https://in.linkedin.com/in/laavanya-kushwaha-5748a5291" }
    ]
  },
  {
    id: "cat-events",
    code: "02",
    name: "EVENTS",
    status: "ACTIVE • STAGING READY",
    members: [
      { name: "Ananya Goyal", role: "Event Architect", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80", systemTag: "STAGE-FLOW-01", linkedin: "#" },
      { name: "Kritika Roy", role: "Host & Experience Manager", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=80", systemTag: "EXPERIENCE-OPS", linkedin: "#" }
    ]
  },
  {
    id: "cat-tech",
    code: "03",
    name: "TECH",
    status: "DEPLOYED • 0 DOWNTIME",
    members: [
      { name: "Tanvi Mehta", role: "Tech Lead & Cloud Architect", avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&auto=format&fit=crop&q=80", systemTag: "DEV-ROOT-01", linkedin: "#", github: "#" },
      { name: "Mehak Jain", role: "Fullstack Builder & Arcade Architect", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&auto=format&fit=crop&q=80", systemTag: "DEV-UI-02", linkedin: "#", github: "#" }
    ]
  },
  {
    id: "cat-design",
    code: "04",
    name: "DESIGN",
    status: "CREATIVE • PIXEL PERFECT",
    members: [
      { name: "Diya Narang", role: "Design Director & Visual Identity", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80", systemTag: "GFX-CORE-01", linkedin: "#" },
      { name: "Ishita Chopra", role: "Motion & Brand Designer", avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&auto=format&fit=crop&q=80", systemTag: "GFX-MOTION", linkedin: "#" }
    ]
  },
  {
    id: "cat-outreach",
    code: "05",
    name: "OUTREACH",
    status: "CONNECTED • 2.4k REACH",
    members: [
      { name: "Simran Kaur", role: "Outreach & Partnerships Lead", avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&auto=format&fit=crop&q=80", systemTag: "PARTNERS-01", linkedin: "#" },
      { name: "Prerna Sethi", role: "Campus Ambassador Coordinator", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80", systemTag: "CAMPUS-HUB", linkedin: "#" }
    ]
  },
  {
    id: "cat-ops",
    code: "06",
    name: "OPERATIONS",
    status: "STABLE • LOGISTICS SYNCED",
    members: [
      { name: "Avani Aggarwal", role: "Operations Commander", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80", systemTag: "OPS-MASTER", linkedin: "#" },
      { name: "Sanya Gupta", role: "Security & Logistics Officer", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80", systemTag: "SECURITY-SYS", linkedin: "#" }
    ]
  }
];

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    command: "> WHAT IS AWS STUDENT BUILDER GROUP?",
    question: "What is AWS Student Builder Group at IGDTUW?",
    answer: "AWS Student Builder Group, as name suggests, is a peer-to-peer, student-led tech community supported by AWS. We focus on cloud computing, serverless architectures, DevOps, and Generative AI through hands-on hackathons, workshops, and open-source projects.",
    category: "COMMUNITY"
  },
  {
    id: "faq-2",
    command: "> WHO CAN ATTEND?",
    question: "Who can attend the AWS Student Community Day?",
    answer: "Any university student or recent graduate passionate about technology, coding, cloud architecture, AI/ML, or DevOps is welcome! Whether you are a first-year beginner or a senior student builder, this event is designed for you.",
    category: "ADMISSION"
  },
  {
    id: "faq-3",
    command: "> DO I NEED AWS EXPERIENCE?",
    question: "Do I need prior AWS or cloud experience to attend?",
    answer: "Not at all! We have curated talks ranging from beginner fundamentals (Level 100/200) to advanced architectures (Level 300/400). ",
    category: "PREREQUISITES"
  },
  {
    id: "faq-4",
    command: "> IS THE EVENT PAID?",
    question: "Is AWS Student Community Day a paid event?",
    answer: "Yes, We charge a nominal fees of ₹150. This fee covers the cost of food, swag, and other arrangements. We recommend securing your registration ticket as soon as RSVPs open.",
    category: "TICKETS"
  },
  {
    id: "faq-5",
    command: "> WHAT SHOULD I BRING?",
    question: "What items should I bring on event day?",
    answer: "Bring your college student ID card (mandatory for campus entry), a notebook or tablet, and plenty of enthusiasm to learn and connect!",
    category: "LOGISTICS"
  },
  {
    id: "faq-6",
    command: "> WILL THERE BE SWAG & FOOD?",
    question: "Will there be food, swags, and participation certificates?",
    answer: "Absolutely! Every confirmed attendee receives an official AWS Community Day swag kit, exclusive stickers, badges, lunch, refreshments, and a verified Certificate of Participation.",
    category: "PERKS"
  }
];
