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
    { name: 'Specialist', href: '#specialist' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-8 py-4",
      isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-gold text-[9px] font-bold tracking-[0.3em] uppercase mb-0.5 drop-shadow-sm">Nadia Nasir – Real Estate Specialist</span>
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
  const [appUrl, setAppUrl] = useState('');
  useEffect(() => { setAppUrl(window.location.href); }, []);

  return (
    <section id="home" className="cinematic-section relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 text-center">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 0.6 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://i.postimg.cc/Y9vgMwf6/a3ad45e66ec9d0127bc2878b0ca55637.jpg" 
          alt="Luxury Property Background" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/75 transition-all duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_90%)]" />
        <div className="absolute inset-0 bg-gold/5 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 flex-1"
          >
            <div className="flex flex-col gap-2 border-l-2 border-gold pl-6">
              <span className="text-gold text-xs font-black tracking-[0.4em] uppercase">Section 01: Hero Presentation</span>
              <h1 className="text-[clamp(3.5rem,15vw,10rem)] font-heading font-black text-white leading-[0.8] tracking-tighter uppercase gold-glow">
                Dua M<br />Residences
              </h1>
            </div>
            
            <div className="space-y-4">
               <h2 className="text-lg md:text-[clamp(1.25rem,4vw,2.5rem)] text-white/70 max-w-2xl font-bold font-heading uppercase tracking-tighter leading-tight">
                  Modern Urban Living in Kuala Lumpur
               </h2>
               <p className="text-gold font-black uppercase tracking-[0.2em] text-xs">Professional Real Estate Marketing Portfolio</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 pt-4">
              <a href="#property" className="group px-12 py-5 bg-gold text-black font-black uppercase tracking-widest text-[11px] rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(197,160,89,0.5)] text-center">
                Explore Property
              </a>
              <a href="#stp" className="px-12 py-5 border border-white/20 text-white font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-white/10 transition-all text-center">
                Marketing Strategy
              </a>
              <a href="#interactive" className="group flex items-center justify-center gap-3 px-8 py-5 border border-gold/40 text-gold font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-gold/5 transition-all md:hidden">
                <Smartphone size={14} />
                <span>Scan to View</span>
              </a>
            </div>

            <div className="pt-16 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-1">
                <p className="text-white/30 text-[11px] uppercase tracking-widest font-black">Professional</p>
                <p className="text-white text-base font-black font-heading uppercase">Nadia Nasir</p>
              </div>
              <div className="space-y-1">
                <p className="text-white/30 text-[11px] uppercase tracking-widest font-black">Student ID</p>
                <p className="text-white text-base font-black font-heading uppercase">DREA26022</p>
              </div>
              <div className="col-span-2 space-y-1">
                <p className="text-white/30 text-[11px] uppercase tracking-widest font-black">Presentation Venue</p>
                <p className="text-white text-base font-black font-heading uppercase">Bukit Bintang CBD Contextual Analysis</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden lg:block relative group h-fit"
          >
            <div className="absolute -inset-4 bg-gold/20 blur-xl rounded-2xl group-hover:bg-gold/30 transition-all duration-500"></div>
            <div className="relative bg-white p-6 rounded-2xl shadow-2xl border-4 border-black group-hover:scale-105 transition-transform">
              {appUrl && <QRCodeCanvas value={appUrl} size={150} level="H" className="rounded-lg" />}
            </div>
            <div className="absolute top-full left-0 right-0 pt-4 text-center">
               <p className="text-[10px] text-gold font-black uppercase tracking-widest">Scan for Interactive View</p>
            </div>
          </motion.div>
        </div>

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

const Section = ({ children, id, className, light = false, bgImage }: { children: React.ReactNode, id?: string, className?: string, light?: boolean, bgImage?: string }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 50, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: false, amount: 0.05, margin: "0px" }}
    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    className={cn(
      "cinematic-section relative min-h-screen flex flex-col justify-center py-12 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden",
      !bgImage && (light ? "bg-[#0a0a0a]" : "bg-white"),
      className
    )}
    style={bgImage ? {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    } : {}}
  >
    {bgImage && (
      <>
        <div className="absolute inset-0 z-0 bg-[#0a0a0a]/85 transition-all duration-1000" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.9)_100%)] pointer-events-none" />
        <div className="absolute inset-0 z-0 bg-gold/5 mix-blend-overlay pointer-events-none" />
      </>
    )}
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
      {!bgImage && (
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2 }}
          className={cn(
            "absolute inset-0 bg-patterns",
            light ? "invert" : ""
          )}
        />
      )}
    </div>
    <div className="relative z-10 max-w-7xl mx-auto w-full">
      {children}
    </div>
  </motion.section>
);

const SectionHeader = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-8 md:mb-16 space-y-4 md:space-y-6 flex flex-col">
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      viewport={{ once: false }}
      className="space-y-4 md:space-y-6"
    >
      <div className="flex items-center gap-4 md:gap-6">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[2px] bg-gold shadow-[0_0_10px_rgba(197,160,89,0.5)] hidden sm:block w-16" 
        />
        <h2 className={cn(
          "text-[clamp(2.5rem,8vw,6rem)] font-heading font-black uppercase tracking-tighter leading-[0.9] gold-glow", 
          light ? "text-white" : "text-black"
        )}>
          {title}
        </h2>
      </div>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={cn(
            "text-sm md:text-[clamp(1rem,1.5vw,1.25rem)] font-medium tracking-tight max-w-4xl leading-relaxed uppercase tracking-tighter", 
            light ? "text-white/60" : "text-gray-500"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  </div>
);

function clamp(min: number, max: number) {
  return `clamp(${min}px, 4vw, ${max}px)`;
}

const PropertyOverview = () => {
  const [appUrl, setAppUrl] = useState('');

  useEffect(() => {
    setAppUrl(window.location.href);
  }, []);

  const specs = [
    { icon: MapPin, label: "Location", value: "Bukit Bintang" },
    { icon: Maximize2, label: "Area", value: "850 – 1,200 sqft" },
    { icon: BedDouble, label: "Layout", value: "2 – 3 Bedrooms" },
  ];

  return (
    <Section id="property">
      <SectionHeader title="Property Details" subtitle="High-demand serviced residences in Kuala Lumpur's strategic heart." />
      
      <div className="grid lg:grid-cols-12 gap-12 items-stretch">
        <div className="lg:col-span-12 rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-8 md:p-16 lg:p-20 text-white flex flex-col lg:flex-row justify-between items-center gap-12 md:gap-16 group shadow-[0_40px_100px_rgba(0,0,0,0.2)] border border-white/5 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(197,160,89,0.1)_0%,transparent_60%)] pointer-events-none" />
          
          <div className="order-2 lg:order-1 space-y-8 md:space-y-12 flex-1 relative z-10">
            <div className="px-6 md:px-8 py-2 md:py-3 border border-gold/40 rounded-full inline-block text-[10px] md:text-[12px] text-gold font-black uppercase tracking-[0.25em] shadow-[0_0_20px_rgba(197,160,89,0.15)]">Section 02: Overview</div>
            <h3 className="text-[clamp(2.5rem,8vw,5rem)] font-heading font-black leading-[0.9] tracking-tighter uppercase gold-glow">
              Modern<br /> <span className="text-gold">Urban Living</span>
            </h3>
            <p className="text-white/50 max-w-lg font-medium text-sm md:text-lg leading-relaxed uppercase tracking-tighter">
              Designed for the high-performing professional. Strategic Bukit Bintang proximity ensures consistent rental yield and asset appreciation.
            </p>
            
            <div className="flex flex-wrap gap-8 md:gap-12 items-center border-t border-white/10 pt-8 md:pt-12">
              {specs.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1 md:gap-2">
                  <span className="text-[10px] md:text-[11px] text-white/30 uppercase tracking-widest font-black">{item.label}</span>
                  <span className="text-base md:text-lg font-black font-heading uppercase text-white/90">{item.value}</span>
                </div>
              ))}
              <div className="hidden sm:flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 shadow-inner group/qr">
                 <div className="bg-white p-1 rounded-lg">
                    {appUrl && <QRCodeCanvas value={appUrl} size={48} level="H" />}
                 </div>
                 <div className="space-y-1">
                    <p className="text-[9px] text-gold font-black uppercase tracking-widest">Interactive</p>
                    <p className="text-[10px] text-white/50 uppercase font-black">Scan to explore</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex-shrink-0 w-full lg:w-[50%] aspect-[16/10] overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
            <motion.img 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2670" 
              alt="Luxury condo interior view" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Sub-features grid */}
        <div className="lg:col-span-12 grid md:grid-cols-3 gap-8">
          {[
            { icon: Dumbbell, title: "Elite Sky Gym", text: "High-spec fitness studio with direct CBD vistas." },
            { icon: Waves, title: "INFINITY POOL", text: "Relax at the heart of the city." },
            { icon: ShieldCheck, title: "Security 24/7", text: "Multi-tier high-tech surveillance and on-site guards." }
          ].map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gray-50 rounded-[2.5rem] border border-gray-100 p-12 hover:bg-white hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)] card-glow-gold transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0a0a0a] text-gold flex items-center justify-center mb-10 transition-all group-hover:rotate-6 group-hover:scale-110 shadow-lg">
                <feat.icon size={26} />
              </div>
              <h4 className="text-2xl font-heading font-black uppercase mb-4 text-black tracking-tighter">{feat.title}</h4>
              <p className="text-base text-gray-500 font-bold uppercase tracking-tighter leading-relaxed">{feat.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
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
    <Section id="stp" light bgImage="https://i.postimg.cc/0NWmTNm8/fade5940f133021dbef95b09bfe90d58.jpg">
      <SectionHeader title="STP Analysis" subtitle="Framework for market segmentation, targeting, and refined positioning." light />
      
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: idx * 0.2 }}
            className="bg-black/40 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] group hover:border-gold/40 hover:bg-black/60 transition-all duration-700 card-glow-gold"
          >
            <div className="flex flex-col gap-8 md:gap-12 h-full">
              <div className="flex justify-between items-start">
                <span className="text-[10px] md:text-[12px] font-black text-white/20 uppercase tracking-widest">Section 03</span>
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center text-gold border border-white/10 group-hover:bg-gold group-hover:text-black transition-all group-hover:scale-110 shadow-lg">
                  <card.icon size={22} />
                </div>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tighter leading-none group-hover:text-gold transition-colors">{card.title}</h3>
                <div className="h-0.5 w-10 md:w-12 bg-gold/50 group-hover:w-20 group-hover:bg-gold transition-all duration-700" />
              </div>

              <div className="space-y-4 md:space-y-5">
                {card.points.map((point, pIdx) => (
                  <motion.div 
                    key={pIdx} 
                    whileHover={{ x: 10 }}
                    className="p-4 md:p-6 bg-white/5 backdrop-blur-sm border-l-2 border-white/10 group-hover:border-gold rounded-r-xl md:rounded-r-2xl transition-all"
                  >
                    <p className="text-xs md:text-sm text-white/50 font-black uppercase tracking-tighter leading-relaxed group-hover:text-white/80 transition-colors">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const MarketingMix = () => {
  return (
    <Section id="7ps" bgImage="https://i.postimg.cc/xCBmdFtk/ab9818f2cdb3f2453e1c964f203f6616.jpg">
      <SectionHeader title="Marketing Mix" subtitle="The 7Ps strategic framework for property success." light />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {psData.map((p, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className={cn(
              "bg-black/60 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-white/10 group hover:border-gold/60 transition-all duration-700 card-glow-gold shadow-2xl",
              idx === 0 ? "lg:col-span-2" : ""
            )}
          >
            <div className="flex flex-col h-full gap-8 md:gap-10">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl md:text-3xl font-heading font-black text-gold uppercase tracking-tighter leading-none gold-glow">{p.title}</h3>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center text-white/30 group-hover:text-gold transition-colors">
                  <p.icon size={20} />
                </div>
              </div>
              
              <p className="text-white/70 font-medium text-sm md:text-base leading-relaxed uppercase tracking-tighter">
                {p.content}
              </p>

              <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
                {p.details.map((detail, dIdx) => (
                  <div key={dIdx} className="px-3 md:px-5 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg md:rounded-xl text-[9px] md:text-[11px] font-black uppercase tracking-[0.05em] text-white/50 group-hover:text-white transition-colors">
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const PurchaseProcess = () => {
  return (
    <Section id="purchase" light className="border-y border-white/5">
      <SectionHeader title="Sales Process" subtitle="Transparent 8-step journey from inquiry to final handover." light />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {purchaseSteps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="bg-white/3 border border-white/5 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] group hover:border-gold/40 transition-all duration-700 card-glow-gold"
            >
               <div className="space-y-8 md:space-y-10">
                 <div className="flex justify-between items-start">
                   <div className="text-gold font-black font-heading text-4xl md:text-5xl opacity-10">0{step.step}</div>
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center text-gold group-hover:rotate-12 transition-all shadow-lg border border-white/5">
                     <step.icon size={20} />
                   </div>
                 </div>
                 <div className="space-y-3 md:space-y-4">
                   <h4 className="text-lg md:text-xl font-heading font-black text-white uppercase tracking-widest leading-none">{step.title}</h4>
                   <p className="text-[11px] md:text-[12px] text-white/50 font-medium leading-relaxed uppercase tracking-tighter">
                     {step.desc}
                   </p>
                 </div>
               </div>
            </motion.div>
          ))}
      </div>
    </Section>
  );
};

const MarketAnalysis = () => {
  return (
    <Section id="market">
      <SectionHeader title="Market Analysis" subtitle="Data-driven intelligence for professional pricing & positioning." />
      
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {[
          { metric: "Metric 01", label: "Price Range", value: "RM450k – 600k", note: "Mid-market Luxury Sweet Spot", icon: BarChart3 },
          { metric: "Metric 02", label: "Recommended Price", value: "RM470 – 490 psf", note: "Aggressive Competitive Entry", icon: TrendingUp },
          { metric: "Metric 03", label: "Project Yield", value: "5.8 – 6.5%", note: "Projected Annual Return", icon: Target }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: idx * 0.2 }}
            className="bg-[#0a0a0a] p-10 md:p-16 rounded-[2rem] md:rounded-[3rem] border border-white/5 flex flex-col justify-between h-[280px] md:h-[360px] group hover:border-gold/60 transition-all duration-700 shadow-2xl card-glow-gold"
          >
            <div className="flex justify-between items-start">
              <p className="text-white/20 text-[10px] md:text-[12px] uppercase tracking-widest font-black">{item.metric}</p>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center text-gold opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all">
                <item.icon size={20} />
              </div>
            </div>
            <div className="space-y-2 md:space-y-4">
              <p className="text-white/40 text-[11px] md:text-[13px] uppercase tracking-widest font-black">{item.label}</p>
              <h4 className="text-3xl md:text-5xl text-white font-heading font-black tracking-tighter uppercase leading-none gold-glow">{item.value}</h4>
            </div>
            <div className="pt-6 md:pt-10 border-t border-white/5">
              <p className="text-gold text-[10px] md:text-[12px] font-black uppercase tracking-[0.25em]">{item.note}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-[#0a0a0a] rounded-[2rem] md:rounded-[4rem] p-8 md:p-16 lg:p-24 border border-white/5 text-white overflow-hidden relative shadow-[0_60px_120px_rgba(0,0,0,0.4)]">
        <div className="absolute top-0 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-gold/5 blur-[80px] md:blur-[120px] rounded-full -mr-32 -mt-32 animate-pulse"></div>
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-12 md:mb-16 gap-8 lg:gap-12 relative z-10">
          <div className="space-y-6 md:space-y-8">
            <div className="px-6 md:px-8 py-2 md:py-3 border border-gold/30 rounded-full inline-block text-[10px] md:text-[11px] text-gold font-black uppercase tracking-[0.25em] shadow-[0_0_30px_rgba(197,160,89,0.1)]">Financial Intelligence</div>
            <h3 className="text-[clamp(2.5rem,8vw,5rem)] font-heading font-black tracking-tighter uppercase leading-[0.9] gold-glow">Competitive<br />Positioning</h3>
            <p className="text-white/30 font-medium max-w-md text-sm md:text-base leading-relaxed uppercase tracking-tighter">Target vs. Local Market Competitors analysis based on Q1 2026 data.</p>
          </div>
          <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] text-left lg:text-right shadow-xl">
             <p className="text-[10px] md:text-[11px] text-gold font-black uppercase tracking-widest mb-1 md:mb-2">Status</p>
             <p className="text-xl md:text-2xl font-heading font-black text-white uppercase tracking-tighter">Verified Data</p>
          </div>
        </div>

        <div className="h-[300px] md:h-[450px] w-full mt-8 md:mt-12 relative z-10">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={cmaData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff08" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#ffffff40', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em' }}
                dy={20}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#ffffff20', fontSize: 11 }}
                tickFormatter={(val) => `RM ${(val / 1000)}k`}
              />
              <Tooltip 
                cursor={{ fill: 'rgba(255, 255, 255, 0.04)' }}
                contentStyle={{ backgroundColor: '#000', border: '1px solid #C5A05940', borderRadius: '24px', padding: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
                itemStyle={{ color: '#C5A059', fontWeight: 900, textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.05em' }}
                labelStyle={{ color: '#fff', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px', fontWeight: 900, fontSize: '14px', textTransform: 'uppercase' }}
              />
              <Bar dataKey="price" radius={[8, 8, 0, 0]} barSize={60}>
                {cmaData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.name === 'Dua M Residences' ? '#C5A059' : '#ffffff15'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Section>
  );
};

const IssuesAndSolutions = () => {
  return (
    <Section id="issues" bgImage="https://i.postimg.cc/7Ls7FL7w/c370afd625d12dcf253e56150efb8300.jpg">
      <div className="grid lg:grid-cols-2 gap-24">
        {/* Issues */}
        <div className="flex flex-col">
          <SectionHeader title="Issues Faced" subtitle="Analyzing market constraints and buyer cycle friction points." light />
          <div className="grid sm:grid-cols-2 gap-6">
            {issues.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="p-8 md:p-10 bg-black/60 backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-[3rem] flex flex-col gap-6 md:gap-8 group hover:bg-black transition-all duration-1000 card-glow-gold shadow-2xl"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all group-hover:scale-110 shadow-md border border-white/5">
                  <item.icon size={22} md:size={24} />
                </div>
                <div className="space-y-2 md:space-y-3">
                  <h5 className="text-lg md:text-xl font-black uppercase text-white group-hover:text-gold transition-colors tracking-tight leading-none group-hover:gold-glow">{item.title}</h5>
                  <p className="text-[11px] md:text-sm text-white/40 group-hover:text-white/60 uppercase font-bold tracking-tight leading-relaxed transition-colors">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div className="flex flex-col">
          <SectionHeader title="Strategic Solutions" subtitle="Interventions designed for rapid market penetration." light />
          <div className="grid sm:grid-cols-2 gap-6">
            {solutions.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="p-8 md:p-10 bg-gold/90 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] flex flex-col gap-6 md:gap-8 group hover:bg-black transition-all duration-1000 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <item.icon size={60} md:size={80} />
                </div>
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-black flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all group-hover:scale-110 shadow-lg relative z-10">
                  <item.icon size={22} md:size={24} />
                </div>
                <div className="space-y-2 md:space-y-3 relative z-10">
                  <h5 className="text-lg md:text-xl font-black uppercase text-black group-hover:text-white transition-colors tracking-tight leading-none group-hover:gold-glow">{item.title}</h5>
                  <p className="text-[11px] md:text-sm text-black/70 group-hover:text-white/40 transition-colors uppercase font-bold tracking-tight leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

const PresentationAccess = () => {
  const [appUrl, setAppUrl] = useState('');

  useEffect(() => {
    setAppUrl(window.location.href);
  }, []);

  return (
    <Section id="interactive" light>
      <div className="flex flex-col items-center text-center space-y-20">
        <SectionHeader title="Interactive Access" subtitle="Scan to access the full marketing dossier instantly." light />
        
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
           className="relative p-1 md:p-2 bg-gold rounded-[2.5rem] md:rounded-[4.5rem] shadow-[0_0_150px_rgba(197,160,89,0.3)] w-full max-w-2xl"
        >
           <div className="bg-[#0a0a0a] p-10 md:p-24 lg:p-32 rounded-[2.2rem] md:rounded-[4.2rem] flex flex-col items-center gap-10 md:gap-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05)_0%,transparent_70%)]" />
              
              <div className="relative group z-10">
                 <div className="absolute -inset-8 md:-inset-12 bg-gold/20 blur-2xl md:blur-3xl rounded-full animate-pulse transition-all group-hover:bg-gold/30"></div>
                 <div className="relative p-6 md:p-12 bg-white rounded-[2rem] md:rounded-[4rem] border-[10px] md:border-[20px] border-black shadow-[0_40px_80px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-1000 ease-out">
                    {appUrl && (
                      <QRCodeCanvas 
                        value={appUrl} 
                        size={window.innerWidth < 768 ? 160 : 320} 
                        level="H" 
                        includeMargin={false}
                        className="rounded-xl md:rounded-3xl"
                      />
                    )}
                 </div>
              </div>

              <div className="space-y-6 md:space-y-12 text-center max-w-xl relative z-10">
                 <div className="flex justify-center gap-6 md:gap-10">
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}><Smartphone className="text-gold" size={24} /></motion.div>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}><Monitor className="text-white/20" size={24} /></motion.div>
                 </div>
                 <h3 className="text-2xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter leading-[0.9] gold-glow">
                    Scan to view interactive<br />Marketing presentation
                 </h3>
                 <div className="py-3 md:py-6 px-6 md:px-10 bg-white/5 border border-white/5 rounded-2xl md:rounded-3xl flex items-center justify-center gap-3 md:gap-4 shadow-inner">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-gold animate-ping" />
                    <p className="text-[9px] md:text-[12px] text-white/50 font-black uppercase tracking-[0.5em] font-heading">
                      Ready for instant review
                    </p>
                 </div>
              </div>
              <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.5em] leading-relaxed opacity-60 relative z-10">
                 Best viewed on desktop or modern mobile browsers<br />Optimized for projector presentation walkthrough
              </p>
           </div>
        </motion.div>
      </div>
    </Section>
  );
};

const SpecialistProfile = () => {
  return (
    <Section id="specialist" className="bg-white">
      <div className="bg-[#0a0a0a] rounded-[2rem] md:rounded-[4rem] p-8 md:p-20 lg:p-32 text-white flex flex-col lg:flex-row items-center gap-12 md:gap-24 overflow-hidden relative shadow-[0_80px_160px_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(197,160,89,0.15)_0%,transparent_60%)]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gold/5 blur-[80px] md:blur-[120px] rounded-full -mr-32 md:-mr-64 -mb-32 md:-mb-64"></div>
        
        <div className="relative z-10 space-y-8 md:space-y-12 flex-1 text-center lg:text-left">
          <div className="px-6 md:px-8 py-2 md:py-3 border border-gold/40 rounded-full inline-block text-[10px] md:text-[11px] text-gold font-black uppercase tracking-[0.3em] shadow-[0_0_30px_rgba(197,160,89,0.1)]">Section 10: Contact Specialist</div>
          <h2 className="text-4xl md:text-7xl lg:text-9xl font-heading font-black tracking-tighter uppercase leading-[0.9] gold-glow">
            Nadia<br />
            <span className="text-gold">Nasir</span>
          </h2>
          <div className="space-y-4 md:space-y-6">
            <p className="text-lg md:text-2xl lg:text-4xl font-heading font-bold text-white/90 uppercase tracking-tighter leading-tight">DREA26022 • KLCC & Cyberjaya Specialist</p>
            <p className="text-sm md:text-xl font-medium text-white/40 max-w-xl mx-auto lg:mx-0 leading-relaxed uppercase tracking-tighter">
              "Turning Dreams into Addresses. Professional in local real estate, dedicated to finding your perfect home or business space."
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4 md:pt-6">
             <motion.a 
                whileHover={{ scale: 1.05 }}
                href="mailto:nazreenanadia.n@gmail.com" 
                className="flex items-center gap-3 md:gap-4 px-8 md:px-12 py-4 md:py-6 bg-white text-black rounded-full font-black uppercase tracking-wider text-[10px] md:text-[12px] hover:bg-gold transition-all shadow-xl"
             >
                <Mail size={16} />
                nazreenanadia.n@gmail.com
             </motion.a>
          </div>
        </div>

        <div className="relative z-10 w-full lg:w-[35%] aspect-[3/4] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden bg-white/5 border border-white/10 flex flex-col items-center justify-center p-8 md:p-12 text-center group shadow-inner">
           <div className="w-20 h-20 md:w-28 md:h-28 bg-gold rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center mb-6 md:mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-[0_20px_40px_rgba(197,160,89,0.3)]">
              <UserCheck size={40} md:size={56} className="text-black" />
           </div>
           <p className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] mb-2 md:mb-4 text-white/20">Certified Professional</p>
           <p className="text-2xl md:text-4xl font-heading font-black text-white uppercase tracking-tighter leading-none gold-glow">DREA26022</p>
           <div className="mt-8 md:mt-12 h-1 w-10 md:w-12 bg-gold/30 rounded-full" />
        </div>
      </div>
    </Section>
  );
};

const Conclusion = () => {
  return (
    <Section id="conclusion" className="bg-[#0a0a0a] min-h-screen">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.2, opacity: 0.3 }}
          whileInView={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 3 }}
          src="https://images.unsplash.com/photo-1595171708811-6677f4e85741?auto=format&fit=crop&q=80&w=2670" 
          alt="Aerial view of Kuala Lumpur at sunset" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]/40"></div>
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-16">
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="px-10 py-4 border border-gold rounded-full inline-block bg-white/5 backdrop-blur-xl"
            >
              <span className="text-gold text-sm uppercase tracking-[0.6em] font-black shadow-glow-gold">Conclusion</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-[clamp(4rem,10vw,10rem)] font-heading font-black text-white leading-[0.8] tracking-tighter uppercase gold-glow">
              Dua M<br />Success<span className="text-gold"> Story</span>
            </h2>

            <div className="space-y-6 md:space-y-10 max-w-xl">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="p-6 md:p-10 bg-white/5 border-l-4 border-gold rounded-r-[2rem] md:rounded-r-[3rem] shadow-2xl backdrop-blur-sm"
              >
                 <h4 className="text-gold text-xs md:text-sm font-black uppercase tracking-widest mb-2 md:mb-4">Final Asset Verdict</h4>
                 <p className="text-white/50 text-[11px] md:text-[13px] font-black leading-relaxed uppercase tracking-widest">Prime location proximity ensures consistent appreciation and high market retention in the long term.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="p-6 md:p-10 bg-white/5 border-l-4 border-white/20 rounded-r-[2rem] md:rounded-r-[3rem] backdrop-blur-sm"
              >
                 <h4 className="text-white/80 text-xs md:text-sm font-black uppercase tracking-widest mb-2 md:mb-4">Marketing Synergy</h4>
                 <p className="text-white/50 text-[11px] md:text-[13px] font-black leading-relaxed uppercase tracking-widest">Omnichannel digital execution guarantees top-of-mind brand recall and rapid sales conversions.</p>
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, rotateY: 30, x: 100 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            transition={{ duration: 1.5, type: "spring" }}
            className="bg-gold rounded-[3rem] md:rounded-[5rem] p-10 md:p-20 lg:p-32 text-black flex flex-col justify-between h-full min-h-[500px] md:min-h-[650px] shadow-[0_80px_160px_rgba(0,0,0,0.6)] relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-12 md:p-24 opacity-10 pointer-events-none">
                <TrendingUp size={120} md:size={240} className="w-32 md:w-60" />
             </div>

            <div className="space-y-6 md:space-y-10 relative z-10">
              <h3 className="text-7xl md:text-[10rem] lg:text-[14rem] font-heading font-black tracking-tighter leading-[0.8] uppercase -ml-1 md:-ml-4">Thank<br />You</h3>
              <div className="w-20 md:w-40 h-3 md:h-5 bg-black rounded-full" />
              <p className="text-[10px] md:text-base font-black uppercase tracking-[0.4em] opacity-40">End of Presentation Dossier</p>
            </div>

            <div className="space-y-8 md:space-y-16 mt-12 md:mt-20 relative z-10">
              <div className="flex gap-6 md:gap-12 items-center border-b border-black/15 pb-8 md:pb-16 text-left">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-black rounded-[1.5rem] md:rounded-3xl flex items-center justify-center shadow-xl shrink-0">
                    <p className="text-gold text-xl md:text-3xl font-black font-heading">#1</p>
                </div>
                <div className="space-y-1 md:space-y-2 overflow-hidden">
                  <p className="text-[10px] md:text-sm uppercase font-black tracking-widest opacity-60">Property Specialist</p>
                  <p className="text-lg md:text-4xl font-black font-heading leading-tight uppercase tracking-tighter truncate">Nadia Nasir • DREA26022</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-left">
                <div>
                  <p className="text-[10px] md:text-[12px] uppercase font-black tracking-[0.3em] opacity-60 mb-2 md:mb-3">Expertise Area</p>
                  <p className="text-base md:text-xl font-black uppercase tracking-tighter font-heading">Luxury Real Estate Marketing & Asset Selection</p>
                </div>
                <div className="md:text-right flex flex-col md:items-end">
                  <p className="text-[10px] md:text-[12px] uppercase font-black tracking-[0.3em] opacity-60 mb-2 md:mb-3">Portfolio Ref</p>
                  <p className="text-base md:text-xl font-black uppercase tracking-tighter font-heading">DUA-M-PRESENT-2026</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

// --- Main App ---

export default function App() {
  const [loading, setLoading] = useState(true);
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard navigation for scroll snapping
  useEffect(() => {
    if (loading) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const sections = Array.from(container.querySelectorAll('.cinematic-section')) as HTMLElement[];
      const activeIndex = sections.findIndex(section => {
        const rect = section.getBoundingClientRect();
        return rect.top >= -50 && rect.top <= 50;
      });

      if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        const nextIndex = Math.min(activeIndex + 1, sections.length - 1);
        sections[nextIndex]?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = Math.max(activeIndex - 1, 0);
        sections[prevIndex]?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [loading]);

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
        <div 
          ref={containerRef}
          tabIndex={0}
          className="cinematic-container outline-none border-[6px] md:border-[16px] border-gold min-h-screen relative flex flex-col"
        >
          <Navbar />
          <Hero />
          <PropertyOverview />
          <STPAnalysis />
          <MarketingMix />
          <PurchaseProcess />
          <IssuesAndSolutions />
          <MarketAnalysis />
          <PresentationAccess />
          <SpecialistProfile />
          <Conclusion />

          <footer className="cinematic-section py-24 bg-[#0a0a0a] border-t border-white/5 px-12 mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-gold flex items-center justify-center rounded-sm">
                    <span className="text-black font-extrabold text-sm font-heading tracking-tighter">DM</span>
                  </div>
                  <h4 className="text-xl font-heading font-black text-white tracking-tighter uppercase">RESIDENCES</h4>
                </div>
                <p className="text-[11px] uppercase font-black tracking-widest text-white/20">Real Estate Marketing Specialist &copy; 2026</p>
              </div>
              <div className="h-[1px] md:h-16 w-full md:w-[1px] bg-white/5" />
              <div className="text-center md:text-right space-y-2">
                <p className="text-[10px] uppercase tracking-widest font-black text-white/10 uppercase">Strategic Reference Portfolio</p>
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-black text-white/60 uppercase tracking-tighter">Nadia Nasir • DREA26022</p>
                    <p className="text-[10px] text-gold/40 font-black uppercase tracking-widest">Real Estate Specialist Portfolio</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
