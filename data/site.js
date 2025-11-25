// data/site.js
export const SITE = {
  title: "RWORLD COMPUTER SOLUTIONS",
  email: "admin@rwcs.in",
  address: "WARD NO-9, SANTI NAGAR, NORTH BARPETA ROAD, BARPETA, Assam – 781315",
  phone: "+91 70024 53818", 
};

export const SERVICES = [
  {
    title: "Website Development",
    desc: "Responsive, modern websites with clean UI and fast performance.",
    features: ["React / Next.js", "Tailwind UI", "SEO Optimization"],
    color: "from-indigo-500 to-indigo-400",
    icon: "🌐",
    image: "/images/website_development.jpg",
  },
  {
    title: "Branding & Multimedia",
    desc: "Beautiful graphics, PPTs, social media content and simple animations.",
    features: ["Animated Slides", "Graphic Design", "Video Editing"],
    color: "from-rose-500 to-rose-400",
    icon: "🎨",
    image: "/images/branding_multimedia.jpg",
  },
  {
    title: "Custom Software & Automation",
    desc: "Custom tools, backend systems, API integrations and automation.",
    features: ["APIs & Integrations", "Backend Logic", "Automation Scripts"],
    color: "from-emerald-500 to-emerald-400",
    icon: "⚙️",
    image: "/images/custom_software.jpg",
  },
  {
    title: "Cloud & Hosting Setup",
    desc: "Complete hosting setup, domain, business email and SSL.",
    features: ["AWS / VPS Setup", "Business Email", "Backups / Security"],
    color: "from-sky-500 to-sky-400",
    icon: "☁️",
    image: "/images/cloud_hosting.jpg",
  },
  {
    title: "AI Chatbots & AI Agents",
    desc: "AI-powered assistants and workflow agents for business automation.",
    features: ["Custom AI Agents", "Chatbots", "Business Automation"],
    color: "from-fuchsia-500 to-fuchsia-400",
    icon: "🤖",
    image: "/images/ai_chatbot_agents.jpg",
  },
  {
    title: "Managed Support",
    desc: "Ongoing maintenance, updates and priority care.",
    features: ["Bug Fixing", "Performance Tuning", "Monthly Plans"],
    color: "from-yellow-500 to-yellow-400",
    icon: "🛠️",
    image: "/images/managed_support.jpg",
  },
];

export const PRICING_PLANS = [
  {
    name: "Starter",
    subtitle: "Perfect for small businesses & portfolios.",
    features: [
      "Single-page / basic site",
      "Mobile responsive",
      "Contact form",
      "Basic SEO setup",
    ],
    badge: "Most Affordable",
  },
  {
    name: "Business",
    subtitle: "For growing brands and institutions.",
    features: [
      "Multi-page website",
      "Dynamic content",
      "Blog / Notices / Updates",
      "Performance optimization",
    ],
    badge: "Popular",
  },
  {
    name: "Premium (AI + Automations)",
    subtitle: "Smart, automated and integrated solutions.",
    features: [
      "AI chatbots & agents",
      "Custom dashboards / tools",
      "API integrations",
      "Priority support",
    ],
    badge: "Advanced",
  },
];

export const PROCESS_STEPS = [
  "Discovery & Requirements",
  "Planning & Wireframing",
  "Design & Prototype",
  "Development & Integration",
  "Testing & Feedback",
  "Launch & Ongoing Support",
];

export const STATS = [
  { label: "Pages Built", value: "50+" },
  { label: "Projects Delivered", value: "5+" },
  { label: "On-Time Delivery", value: "100%" },
  { label: "Support", value: "24/7*" },
];
export default SITE;