import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Maximize2, 
  BedDouble, 
  Dumbbell, 
  Waves, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Target, 
  Compass, 
  Package, 
  DollarSign, 
  Store, 
  Megaphone, 
  UserPlus, 
  Settings, 
  Camera, 
  BarChart3, 
  BookOpen, 
  Smartphone, 
  Facebook, 
  Instagram, 
  Mail, 
  Search, 
  ChevronDown, 
  Menu, 
  X,
  CreditCard,
  UserCheck,
  MessageSquare,
  Eye,
  Handshake,
  ClipboardCheck,
  Briefcase,
  FileSignature,
  Key,
  AlertCircle,
  Lightbulb,
  ArrowRight,
  Monitor
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';
import { QRCodeCanvas } from 'qrcode.react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper icon for Globe since I missed importing it
const Globe = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

// --- Data ---

const cmaData = [
  { name: 'Nearby Condo A', price: 520000 },
  { name: 'Dua M Residences', price: 475000 },
  { name: 'Nearby Condo B', price: 580000 },
  { name: 'Nearby Condo C', price: 490000 },
];

const psData = [
  { 
    title: 'Product', 
    icon: Package, 
    content: 'Modern serviced apartment with luxury facilities, designed for urban professionals.', 
    details: ['850-1,200 sqft', 'Premium Finishings', 'Smart Home Ready'] 
  },
  { 
    title: 'Price', 
    icon: DollarSign, 
    content: 'RM450,000 – RM600,000. Competitive mid-market luxury positioning.', 
    details: ['High ROI Potential', 'Flexible Payment', 'Early Bird Discounts'] 
  },
  { 
    title: 'Place', 
    icon: Store, 
    content: 'Strategically located in Bukit Bintang. Multi-channel distribution.', 
    details: ['PropertyGuru/iProperty', 'Exclusive Agencies', 'Direct Sales Gallery'] 
  },
  { 
    title: 'Promotion', 
    icon: Megaphone, 
    content: 'Omnichannel digital-first marketing strategy focused on social engagement.', 
    details: ['Targeted Meta Ads', 'TikTok Viral Content', 'Influencer Collabs'] 
  },
  { 
    title: 'People', 
    icon: UserPlus, 
    content: 'Elite sales force and dedicated concierge customer service team.', 
    details: ['Expert Agents', '24/7 Support', 'Community Managers'] 
  },
  { 
    title: 'Process', 
    icon: Settings, 
    content: 'Seamless end-to-end purchasing journey from viewing to vacant possession.', 
    details: ['Virtual Tour Booking', 'Digital Documentation', 'Transparent Tracking'] 
  },
  { 
    title: 'Physical Evidence', 
    icon: Camera, 
    content: 'Tangible proof of luxury through show-units, high-end brochures, and VR.', 
    details: ['Award-winning Showroom', 'HD Virtual Walkthroughs', 'Premium Finish Samples'] 
  },
];

const purchaseSteps = [
  { step: 1, title: "Buyer Inquiry", icon: MessageSquare, desc: "Initial engagement via digital channels or direct inquiry." },
  { step: 2, title: "Property Viewing", icon: Eye, desc: "Personalized showroom tour or immersive virtual reality walkthrough." },
  { step: 3, title: "Price Negotiation", icon: Handshake, desc: "Professional negotiation to align budget with luxury value." },
  { step: 4, title: "Booking Confirmation", icon: ClipboardCheck, desc: "Securing unit priority with initial earnest deposit." },
  { step: 5, title: "Documentation", icon: Briefcase, desc: "Processing legal forms and administrative requirements." },
  { step: 6, title: "Loan Approval", icon: TrendingUp, desc: "Credit assessment and financing finalized with banking partners." },
  { step: 7, title: "SPA Signing", icon: FileSignature, desc: "Formal execution of the Sale and Purchase Agreement." },
  { step: 8, title: "Key Handover", icon: Key, desc: "Official project completion and vacant possession delivery." },
];

const issues = [
  { title: "High Competition", icon: AlertCircle, desc: "Saturated market in the Bukit Bintang area." },
  { title: "Budget Constraints", icon: DollarSign, desc: "Buyer price sensitivity amidst economic shifts." },
  { title: "Negotiation Barriers", icon: Handshake, desc: "Long decision-making cycles and hard bargaining." },
  { title: "Economic Volatility", icon: TrendingUp, desc: "Shifting interest rates affecting bank loans." },
  { title: "Buyer Hesitation", icon: UserCheck, desc: "Market uncertainty leading to slower closings." },
  { title: "Digital Saturation", icon: Smartphone, desc: "High noise in online property marketing." },
];

const solutions = [
  { title: "Viral Engagement", icon: Lightbulb, desc: "Using high-impact TikTok/Reels for top-of-mind recall." },
  { title: "PSF Strategy", icon: DollarSign, desc: "Aggressive PSM pricing below premium competitors." },
  { title: "Elite Concierge", icon: UserPlus, desc: "Dedicated support team for superior closing rates." },
  { title: "Loan Facilitation", icon: Briefcase, desc: "Pre-vetted banking packages for faster approvals." },
  { title: "Brand Authority", icon: ShieldCheck, desc: "Leveraging developer prestige and physical evidence." },
  { title: "O2O Strategy", icon: Globe, desc: "Seamless Online-to-Offline lead conversion funnel." },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Property', href: '#property' },
    { name: 'STP', href: '#stp' },
    { name: '7Ps', href: '#7ps' },
    { name: 'Purchase', href: '#purchase' },
    { name: 'Issues', href: '#issues' },
    { name: 'Analysis', href: '#market' },
    { name: 'Access', href: '#interactive' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-8 py-4",
      isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-gold text-[9px] font-bold tracking-[0.3em] uppercase mb-0.5 drop-shadow-sm">EER2253 – Marketing Principles</span>
          <a href="#home" className="group flex items-center gap-3">
            <div className="w-10 h-10 bg-gold flex items-center justify-center rounded-sm">
              <span className="text-black font-extrabold text-xl font-heading tracking-tighter">DM</span>
            </div>
            <span className="text-xl font-heading font-black text-white tracking-tighter leading-none uppercase">
              RESIDENCES
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[9px] font-bold uppercase tracking-widest text-white/50 hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-gold/20 flex flex-col p-6 gap-4 lg:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-widest text-white/90 hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 text-center">
        <img 
          src="https://images.unsplash.com/photo-1528605248644-14dd04cb11c7?auto=format&fit=crop&q=80&w=2670" 
          alt="Kuala Lumpur Night Skyline" 
          className="w-full h-full object-cover scale-105 animate-subtle-zoom opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_100%)]"></div>
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="flex flex-col gap-2 border-l-2 border-gold pl-6">
            <span className="text-gold text-xs font-black tracking-[0.4em] uppercase">Section 01: Hero Presentation</span>
            <h1 className="text-6xl md:text-9xl font-heading font-black text-white leading-[0.8] tracking-tighter uppercase">
              Dua M<br />Residences
            </h1>
          </div>
          
          <div className="space-y-4">
             <h2 className="text-xl md:text-3xl text-white/70 max-w-2xl font-bold font-heading uppercase tracking-tighter leading-tight">
                Modern Urban Living in Kuala Lumpur
             </h2>
             <p className="text-gold font-black uppercase tracking-[0.2em] text-xs">EER2253 – Principles & Practice of Marketing</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <a href="#property" className="group px-12 py-5 bg-gold text-black font-black uppercase tracking-widest text-[11px] rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(197,160,89,0.5)] text-center">
              Explore Property
            </a>
            <a href="#stp" className="px-12 py-5 border border-white/20 text-white font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-white/10 transition-all text-center">
              View Marketing Strategy
            </a>
          </div>

          <div className="pt-16 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-1">
              <p className="text-white/30 text-[10px] uppercase tracking-widest font-black">Student Name</p>
              <p className="text-white text-sm font-black font-heading uppercase">[Adam Malik]</p>
            </div>
            <div className="space-y-1">
              <p className="text-white/30 text-[10px] uppercase tracking-widest font-black">Student ID</p>
              <p className="text-white text-sm font-black font-heading uppercase">[KL-2253-090]</p>
            </div>
            <div className="col-span-2 space-y-1">
              <p className="text-white/30 text-[10px] uppercase tracking-widest font-black">Presentation Venue</p>
              <p className="text-white text-sm font-black font-heading uppercase">Bukit Bintang CBD Contextual Analysis</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 right-8 text-white/20 flex flex-col items-center gap-2"
        >
          <span className="text-[8px] uppercase tracking-[0.5em] font-black rotate-90 mb-8 origin-right opacity-30">Scroll Down</span>
          <div className="w-[1px] h-12 bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
};

const SectionHeader = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-10 space-y-3 flex flex-col">
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <div className="flex items-center gap-4">
        <div className="h-[2px] w-12 bg-gold" />
        <h2 className={cn("text-4xl md:text-7xl font-heading font-black uppercase tracking-tighter leading-none", light ? "text-white" : "text-black")}>
          {title}
        </h2>
      </div>
      {subtitle && <p className={cn("text-base md:text-lg font-medium tracking-tight max-w-3xl leading-relaxed uppercase tracking-tighter opacity-60", light ? "text-white" : "text-gray-600")}>{subtitle}</p>}
    </motion.div>
  </div>
);

const PropertyOverview = () => {
  const specs = [
    { icon: MapPin, label: "Location", value: "Bukit Bintang" },
    { icon: Maximize2, label: "Area", value: "850 – 1,200 sqft" },
    { icon: BedDouble, label: "Layout", value: "2 – 3 Bedrooms" },
  ];

  return (
    <section id="property" className="py-20 bg-white px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Property Details" subtitle="High-demand serviced residences in Kuala Lumpur's strategic heart." />
        
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-10 md:p-16 text-white flex flex-col md:flex-row justify-between items-center gap-12 group shadow-[0_40px_80px_rgba(0,0,0,0.15)]"
          >
            <div className="order-2 md:order-1 space-y-10 flex-1">
              <div className="px-6 py-2 border border-gold/40 rounded-full inline-block text-[10px] text-gold font-black uppercase tracking-[0.2em]">Section 02: Overview</div>
              <h3 className="text-5xl md:text-7xl font-heading font-black leading-[0.85] tracking-tighter uppercase">
                Modern<br /> <span className="text-gold">Urban Living</span>
              </h3>
              <p className="text-white/30 max-w-md font-medium text-sm leading-relaxed uppercase tracking-tighter">
                Designed for the high-performing professional. Strategic Bukit Bintang proximity ensures consistent rental yield and asset appreciation.
              </p>
              
              <div className="flex gap-10 items-center border-t border-white/5 pt-10">
                {specs.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-1.5">
                    <span className="text-[9px] text-white/20 uppercase tracking-widest font-black">{item.label}</span>
                    <span className="text-sm font-black font-heading uppercase">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 md:order-2 flex-shrink-0 w-full md:w-3/5 aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/5 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2670" 
                alt="Luxury condo interior view" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Sub-features grid */}
          <div className="lg:col-span-12 grid md:grid-cols-3 gap-6">
            {[
              { icon: Dumbbell, title: "Elite Sky Gym", text: "High-spec fitness studio with direct CBD vistas." },
              { icon: Waves, title: "Panoramic Pool", text: "Bukit Bintang skyline panoramic relaxation deck." },
              { icon: ShieldCheck, title: "Security 24/7", text: "Multi-tier high-tech surveillance and on-site guards." }
            ].map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl border border-gray-100 p-10 hover:bg-white hover:shadow-2xl transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-black text-gold flex items-center justify-center mb-8 transition-all group-hover:rotate-6">
                  <feat.icon size={22} />
                </div>
                <h4 className="text-xl font-heading font-black uppercase mb-3 text-black tracking-tighter">{feat.title}</h4>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-tighter leading-relaxed">{feat.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const STPAnalysis = () => {
  const cards = [
    {
      title: "Segmentation",
      icon: Users,
      points: [
        "Urban Young Professionals",
        "Modern Families & Couples",
        "Strategic Property Investors"
      ]
    },
    {
      title: "Targeting",
      icon: Target,
      points: [
        "Age 25 – 45 (CBD Workers)",
        "Household Income: RM8k – 15k+",
        "Tech-savvy Home Seekers"
      ]
    },
    {
      title: "Positioning",
      icon: Compass,
      points: [
        "Luxury Urban Value Concept",
        "Strategic Connectivity Focus",
        "Premier Investment Opportunity"
      ]
    }
  ];

  return (
    <section id="stp" className="py-20 bg-[#0a0a0a] px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-patterns opacity-5"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader title="STP Analysis" subtitle="Framework for market segmentation, targeting, and refined positioning." light />
        
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/5 p-12 rounded-[2.5rem] group hover:border-gold/30 transition-all duration-700"
            >
              <div className="flex flex-col gap-10 h-full">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Section 03</span>
                  <div className="w-12 h-12 rounded-2xl bg-white/3 flex items-center justify-center text-gold border border-white/5 group-hover:bg-gold group-hover:text-black transition-all">
                    <card.icon size={22} />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl font-heading font-black text-white uppercase tracking-tighter leading-none">{card.title}</h3>
                  <div className="h-0.5 w-8 bg-gold group-hover:w-16 transition-all duration-500" />
                </div>

                <div className="space-y-4">
                  {card.points.map((point, pIdx) => (
                    <div key={pIdx} className="p-5 bg-white/3 border-l-2 border-white/10 group-hover:border-gold rounded-r-2xl transition-all">
                      <p className="text-[11px] text-white/40 font-black uppercase tracking-tighter leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MarketingMix = () => {
  return (
    <section id="7ps" className="py-20 bg-white px-8 relative">
      <div className="absolute inset-0 bg-gray-50/50 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader title="Marketing Mix" subtitle="The 7Ps strategic framework for property success." />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {psData.map((p, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={cn(
                "bg-[#0a0a0a] p-10 rounded-3xl border border-white/5 group hover:border-gold/30 transition-all duration-500",
                idx === 0 ? "lg:col-span-2" : ""
              )}
            >
              <div className="flex flex-col h-full gap-8">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-heading font-black text-gold uppercase tracking-tighter leading-none">{p.title}</h3>
                  <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-white/30 group-hover:text-gold transition-colors">
                    <p.icon size={20} />
                  </div>
                </div>
                
                <p className="text-white/40 font-medium text-xs leading-relaxed uppercase tracking-tighter">
                  {p.content}
                </p>

                <div className="space-y-2 mt-auto">
                  {p.details.map((detail, dIdx) => (
                    <div key={dIdx} className="px-4 py-3 bg-white/3 border border-white/3 rounded-xl text-[9px] font-black uppercase tracking-[0.05em] text-white/20 group-hover:text-white transition-colors">
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PurchaseProcess = () => {
  return (
    <section id="purchase" className="py-20 bg-[#0a0a0a] px-8 relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader title="Sales Process" subtitle="Transparent 8-step journey from inquiry to final handover." light />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
           {purchaseSteps.map((step, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.05 }}
               className="bg-white/3 border border-white/3 p-10 rounded-3xl group hover:border-gold/40 transition-all duration-500"
             >
                <div className="space-y-8">
                  <div className="flex justify-between items-start">
                    <div className="text-gold font-black font-heading text-4xl opacity-10">0{step.step}</div>
                    <div className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center text-gold group-hover:rotate-6 transition-all">
                      <step.icon size={22} />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-base font-heading font-black text-white uppercase tracking-widest leading-none">{step.title}</h4>
                    <p className="text-[10px] text-white/30 font-medium leading-relaxed uppercase tracking-tighter">
                      {step.desc}
                    </p>
                  </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const MarketAnalysis = () => {
  return (
    <section id="market" className="py-20 bg-white px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Market Analysis" subtitle="Data-driven intelligence for professional pricing & positioning." />
        
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {[
            { metric: "Metric 01", label: "Price Range", value: "RM450k – 600k", note: "Mid-market Luxury Sweet Spot", icon: BarChart3 },
            { metric: "Metric 02", label: "Recommended Price", value: "RM470 – 490 psf", note: "Aggressive Competitive Entry", icon: TrendingUp },
            { metric: "Metric 03", label: "Project Yield", value: "5.8 – 6.5%", note: "Projected Annual Return", icon: Target }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#0a0a0a] p-12 rounded-[2rem] border border-white/5 flex flex-col justify-between h-[300px] group hover:border-gold/40 transition-all shadow-2xl"
            >
              <div className="flex justify-between items-start">
                <p className="text-white/20 text-[10px] uppercase tracking-widest font-black">{item.metric}</p>
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gold opacity-30 group-hover:opacity-100 transition-opacity">
                  <item.icon size={20} />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-white/40 text-[11px] uppercase tracking-widest font-black">{item.label}</p>
                <h4 className="text-4xl text-white font-heading font-black tracking-tighter uppercase leading-none">{item.value}</h4>
              </div>
              <div className="pt-8 border-t border-white/5">
                <p className="text-gold text-[10px] font-black uppercase tracking-[0.2em]">{item.note}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#0a0a0a] rounded-[3rem] p-12 md:p-20 border border-white/3 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 blur-[100px] rounded-full -mr-32 -mt-32"></div>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 relative z-10">
            <div className="space-y-6">
              <div className="px-6 py-2 border border-gold/30 rounded-full inline-block text-[10px] text-gold font-black uppercase tracking-[0.2em]">Financial Intelligence</div>
              <h3 className="text-4xl md:text-6xl font-heading font-black tracking-tighter uppercase leading-none">Competitive<br />Positioning</h3>
              <p className="text-white/20 font-medium max-w-sm text-sm leading-relaxed uppercase tracking-tighter">Target vs. Local Market Competitors analysis based on Q1 2026 data.</p>
            </div>
            <div className="p-6 bg-white/3 border border-white/5 rounded-3xl text-right">
               <p className="text-[10px] text-gold font-black uppercase tracking-widest mb-1">Status</p>
               <p className="text-xl font-heading font-black text-white uppercase tracking-tighter">Verified Data</p>
            </div>
          </div>

          <div className="h-[400px] w-full mt-10 relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cmaData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff08" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#ffffff30', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}
                  dy={15}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#ffffff15', fontSize: 10 }}
                  tickFormatter={(val) => `RM ${(val / 1000)}k`}
                />
                <Tooltip 
                  cursor={{ fill: 'rgba(255, 255, 255, 0.03)' }}
                  contentStyle={{ backgroundColor: '#111', border: '1px solid #C5A05930', borderRadius: '20px', padding: '16px' }}
                  itemStyle={{ color: '#C5A059', fontWeight: 900, textTransform: 'uppercase', fontSize: '10px' }}
                  labelStyle={{ color: '#fff', marginBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px', fontWeight: 900, fontSize: '12px' }}
                />
                <Bar dataKey="price" radius={[4, 4, 0, 0]} barSize={50}>
                  {cmaData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.name === 'Dua M Residences' ? '#C5A059' : '#ffffff10'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

const IssuesAndSolutions = () => {
  return (
    <section id="issues" className="py-20 bg-gray-50 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Issues */}
          <div>
            <SectionHeader title="Issues Faced" subtitle="Analyzing market constraints and buyer cycle friction points." />
            <div className="grid sm:grid-cols-2 gap-4">
              {issues.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white border border-gray-100 rounded-[2rem] flex flex-col gap-6 group hover:bg-black transition-all duration-700"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-black group-hover:bg-gold transition-colors">
                    <item.icon size={20} />
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-sm font-black uppercase text-black group-hover:text-white transition-colors tracking-tight leading-none">{item.title}</h5>
                    <p className="text-[10px] text-gray-500 group-hover:text-white/30 uppercase font-bold tracking-tight leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="flex flex-col">
            <SectionHeader title="Strategic Solutions" subtitle="Interventions designed for rapid market penetration." />
            <div className="grid sm:grid-cols-2 gap-4">
              {solutions.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gold rounded-[2rem] flex flex-col gap-6 group hover:bg-black transition-all duration-700 shadow-xl"
                >
                  <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                    <item.icon size={20} />
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-sm font-black uppercase text-black group-hover:text-white transition-colors tracking-tight leading-none">{item.title}</h5>
                    <p className="text-[10px] text-black/60 group-hover:text-white/30 transition-colors uppercase font-bold tracking-tight leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PresentationAccess = () => {
  const [appUrl, setAppUrl] = useState('');

  useEffect(() => {
    setAppUrl(window.location.href);
  }, []);

  return (
    <section id="interactive" className="py-20 bg-[#0a0a0a] px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-patterns opacity-5"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full -mr-96 -mt-96"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-16">
          <SectionHeader title="Interactive Access" subtitle="Scan to access the full marketing dossier instantly." light />
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative p-1.5 bg-gold rounded-[3.5rem] shadow-[0_0_120px_rgba(197,160,89,0.4)]"
          >
             <div className="bg-[#111] p-16 md:p-24 rounded-[3.2rem] flex flex-col items-center gap-12">
                <div className="relative group">
                   <div className="absolute -inset-8 bg-gold/15 blur-2xl rounded-full animate-pulse transition-all group-hover:bg-gold/25 group-hover:blur-3xl"></div>
                   <div className="relative p-8 bg-white rounded-[3rem] border-[16px] border-black shadow-2xl group-hover:scale-105 transition-transform duration-1000 ease-out">
                      {appUrl && (
                        <QRCodeCanvas 
                          value={appUrl} 
                          size={280} 
                          level="H" 
                          includeMargin={false}
                          className="rounded-2xl"
                        />
                      )}
                   </div>
                </div>

                <div className="space-y-8 text-center max-w-md">
                   <div className="flex justify-center gap-6">
                      <Smartphone className="text-gold" size={28} />
                      <Monitor className="text-white/20" size={28} />
                   </div>
                   <h3 className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-tighter leading-[0.9]">
                      Scan to view interactive<br />Marketing presentation
                   </h3>
                   <div className="py-4 px-8 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold animate-ping" />
                      <p className="text-[10px] text-white/40 font-black uppercase tracking-widest font-heading">
                        Ready for instant review
                      </p>
                   </div>
                   <p className="text-[9px] text-white/20 font-black uppercase tracking-[0.4em] leading-relaxed">
                      Best viewed on desktop or modern mobile browsers<br />Optimized for projector presentation
                   </p>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Conclusion = () => {
  return (
    <section id="conclusion" className="relative min-h-[90vh] flex items-center justify-center py-20 px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1595171708811-6677f4e85741?auto=format&fit=crop&q=80&w=2670" 
          alt="Aerial view of Kuala Lumpur at sunset" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]/30"></div>
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="px-8 py-3 border border-gold rounded-full inline-block">
              <span className="text-gold text-xs uppercase tracking-[0.5em] font-black">Strategic Conclusion</span>
            </div>
            
            <h2 className="text-6xl md:text-9xl font-heading font-black text-white leading-[0.8] tracking-tighter uppercase">
              The Path<br />To <span className="text-gold">Success</span>
            </h2>

            <div className="space-y-8 max-w-md">
              <div className="p-8 bg-white/3 border-l-4 border-gold rounded-r-[2rem] shadow-2xl">
                 <h4 className="text-gold text-xs font-black uppercase tracking-widest mb-2">Final Asset Verdict</h4>
                 <p className="text-white/40 text-[11px] font-black leading-relaxed uppercase tracking-tighter">Prime location proximity ensures consistent appreciation and high market retention in the long term.</p>
              </div>
              <div className="p-8 bg-white/3 border-l-4 border-white/10 rounded-r-[2rem]">
                 <h4 className="text-white/80 text-xs font-black uppercase tracking-widest mb-2">Marketing Synergy</h4>
                 <p className="text-white/40 text-[11px] font-black leading-relaxed uppercase tracking-tighter">Omnichannel digital execution guarantees top-of-mind brand recall and rapid sales conversions.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gold rounded-[4rem] p-16 md:p-24 text-black flex flex-col justify-between h-full min-h-[550px] shadow-[0_50px_100px_rgba(0,0,0,0.3)] relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-16 opacity-10">
                <TrendingUp size={160} />
             </div>

            <div className="space-y-8 relative z-10">
              <h3 className="text-8xl md:text-9xl font-heading font-black tracking-tighter leading-none uppercase">Thank<br />You</h3>
              <div className="w-24 h-4 bg-black rounded-full" />
              <p className="text-sm font-black uppercase tracking-[0.2em] opacity-40">End of Presentation Dossier</p>
            </div>

            <div className="space-y-12 mt-16 relative z-10">
              <div className="flex gap-10 items-center border-b border-black/10 pb-10">
                <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center">
                    <p className="text-gold text-2xl font-black font-heading">#1</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase font-black tracking-widest opacity-60">Academic Summary</p>
                  <p className="text-2xl font-black font-heading leading-tight uppercase tracking-tighter">Adam Malik • KL-2253-090</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-12">
                <div>
                  <p className="text-[10px] uppercase font-black tracking-[0.2em] opacity-60 mb-2">Subject</p>
                  <p className="text-base font-black uppercase tracking-tighter font-heading">EER2253 Principles & Practice of Marketing</p>
                </div>
                <div className="text-right flex flex-col items-end">
                  <p className="text-[10px] uppercase font-black tracking-[0.2em] opacity-60 mb-2">Ref Code</p>
                  <p className="text-base font-black uppercase tracking-tighter font-heading">DUA-M-PRESENT-2026</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden selection:bg-gold selection:text-black">
      <AnimatePresence>
        {loading && (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center p-12"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="space-y-8 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 border-t-2 border-gold rounded-full animate-spin mb-6" />
              <div className="space-y-4 flex flex-col items-center">
                <div className="w-20 h-20 bg-gold flex items-center justify-center rounded-xl shadow-[0_0_50px_rgba(197,160,89,0.3)]">
                  <span className="text-[#0a0a0a] font-black text-5xl font-heading tracking-tighter">DM</span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-heading font-black text-white tracking-widest uppercase">
                    RESIDENCES
                  </h2>
                  <div className="flex items-center gap-3 justify-center">
                      <div className="h-[1px] w-8 bg-white/10" />
                      <p className="text-[10px] text-white/30 uppercase font-black tracking-[0.5em]">Interactive Presentation</p>
                      <div className="h-[1px] w-8 bg-white/10" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <div className="border-[10px] md:border-[16px] border-gold min-h-screen overflow-x-hidden relative flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Hero />
            <PropertyOverview />
            <STPAnalysis />
            <MarketingMix />
            <PurchaseProcess />
            <IssuesAndSolutions />
            <MarketAnalysis />
            <PresentationAccess />
            <Conclusion />
          </main>

          <footer className="py-16 bg-[#0a0a0a] border-t border-white/5 px-12 mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-gold flex items-center justify-center rounded-sm">
                    <span className="text-black font-extrabold text-sm font-heading tracking-tighter">DM</span>
                  </div>
                  <h4 className="text-xl font-heading font-black text-white tracking-tighter uppercase">RESIDENCES</h4>
                </div>
                <p className="text-[11px] uppercase font-black tracking-widest text-white/20">EER2253 Principles & Practice of Marketing &copy; 2026</p>
              </div>
              <div className="h-[1px] md:h-16 w-full md:w-[1px] bg-white/5" />
              <div className="text-center md:text-right space-y-2">
                <p className="text-[10px] uppercase tracking-widest font-black text-white/10 uppercase">Strategic Reference Portfolio</p>
                <div className="flex flex-col gap-1">
                    <p className="text-xs font-black text-white/40 uppercase tracking-tighter">Adam Malik • Student ID: KL-2253-090</p>
                    <p className="text-[9px] text-gold/30 font-black uppercase tracking-widest">Property Marketing Assignment</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
