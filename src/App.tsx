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
  UserCheck
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
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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
    { name: 'Market Analysis', href: '#market' },
    { name: 'Buyer Journey', href: '#journey' },
    { name: 'Digital Strategy', href: '#digital' },
    { name: 'Conclusion', href: '#conclusion' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-8 py-6",
      isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/10 py-5" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-end">
        <div className="flex flex-col">
          <span className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-1 drop-shadow-sm">EER2253 – Marketing Principles</span>
          <a href="#home" className="text-3xl font-heading font-black text-white tracking-tighter leading-none">
            DUA M <span className="text-gold">RESIDENCES</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8 items-center mb-1">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white mb-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-gold/20 flex flex-col p-6 gap-4 lg:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-white/90 hover:text-gold transition-colors"
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
      {/* Background Image with Dark Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1528605248644-14dd04cb11c7?auto=format&fit=crop&q=80&w=2670" 
          alt="Kuala Lumpur Night Skyline" 
          className="w-full h-full object-cover scale-105 animate-subtle-zoom opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_100%)]"></div>
        <div className="absolute inset-0 bg-pattern-grid opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-12"
        >
          <div className="flex flex-col gap-2 border-l-2 border-gold pl-6">
            <span className="text-gold text-xs font-black tracking-[0.4em] uppercase">Section 01: Hero Presentation</span>
            <h1 className="text-6xl md:text-8xl font-heading font-black text-white leading-[0.9] tracking-tighter">
              MODERN URBAN<br />LIVING IN <span className="text-gold">KL</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-white/50 max-w-xl font-medium tracking-wide leading-relaxed">
            Experience the pinnacle of luxury in Bukit Bintang. A premium serviced residence designed for the modern elite.
          </p>

          <div className="flex flex-col md:flex-row gap-6 pt-4">
            <a href="#property" className="group px-8 py-3 bg-gold text-black font-black uppercase tracking-widest text-xs rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(197,160,89,0.4)] text-center">
              Explore Property
            </a>
            <a href="#stp" className="px-8 py-3 border border-white/20 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-white/10 transition-all text-center">
              Marketing Strategy
            </a>
          </div>

          <div className="pt-20 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-1">
              <p className="text-white/30 text-[10px] uppercase tracking-widest font-black">Presenter</p>
              <p className="text-white text-xs font-bold font-heading">[Adam Malik Placeholder]</p>
            </div>
            <div className="space-y-1">
              <p className="text-white/30 text-[10px] uppercase tracking-widest font-black">Student ID</p>
              <p className="text-white text-xs font-bold font-heading">[KL-2253-090 Placeholder]</p>
            </div>
            <div className="col-span-2 space-y-1">
              <p className="text-white/30 text-[10px] uppercase tracking-widest font-black">Course</p>
              <p className="text-white text-xs font-bold font-heading">Diploma in Real Estate Agency</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 right-8 text-white/20 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.5em] font-black rotate-90 mb-8 origin-right">Scroll</span>
          <div className="w-[1px] h-12 bg-white/20" />
        </motion.div>
      </div>
    </section>
  );
};

const SectionHeader = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-16 space-y-6 flex flex-col">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <div className="flex items-center gap-4">
        <div className="h-[2px] w-12 bg-gold" />
        <h2 className={cn("text-3xl md:text-5xl font-heading font-black uppercase tracking-tighter", light ? "text-white" : "text-black")}>
          {title}
        </h2>
      </div>
      {subtitle && <p className={cn("text-lg font-medium tracking-tight max-w-3xl", light ? "text-white/50" : "text-gray-500")}>{subtitle}</p>}
    </motion.div>
  </div>
);

const PropertyOverview = () => {
  const specs = [
    { icon: MapPin, label: "Location", value: "Bukit Bintang" },
    { icon: Maximize2, label: "Size", value: "850 – 1,200 sqft" },
    { icon: BedDouble, label: "Units", value: "2 – 3 Bedrooms" },
  ];

  return (
    <section id="property" className="py-24 bg-white px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Property Overview" subtitle="Defined by elegance, designed for the future." />
        
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-8 md:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-12 group"
          >
            <div className="order-2 md:order-1 space-y-8 flex-1">
              <div className="px-5 py-2 border border-gold rounded-full inline-block text-[10px] text-gold font-black uppercase tracking-[0.2em]">Exquisite Residence</div>
              <h3 className="text-4xl md:text-6xl font-heading font-black leading-tight tracking-tighter">
                THE PINNACLE<br /> OF <span className="text-gold">URBAN STYLE</span>
              </h3>
              <p className="text-white/40 max-w-md font-medium text-sm leading-relaxed">
                Experience luxury redefined in Bukit Bintang. Our serviced residences combine high-end aesthetic with strategic connectivity.
              </p>
              
              <div className="flex gap-10 items-center border-t border-white/10 pt-8">
                {specs.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <span className="text-[9px] text-white/30 uppercase tracking-widest font-black">{item.label}</span>
                    <span className="text-sm font-black font-heading">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 md:order-2 flex-shrink-0 w-full md:w-1/2 aspect-video overflow-hidden rounded-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=2670" 
                alt="Luxury Infinity Pool with city view" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Sub-features grid */}
          {[
            { icon: Dumbbell, title: "Sky Gym", text: "Elite fitness studio with KL views." },
            { icon: Waves, title: "Infinite Pool", titleColor: "text-gold", text: "Relax at the heart of the city." },
            { icon: ShieldCheck, title: "24H Security", text: "Multi-tier safety for your peace." }
          ].map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="lg:col-span-4 bg-gray-50 rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-black text-gold flex items-center justify-center mb-6">
                <feat.icon size={24} />
              </div>
              <h4 className={cn("text-xl font-heading font-black uppercase mb-2", feat.titleColor || "text-black")}>{feat.title}</h4>
              <p className="text-sm text-gray-500 font-medium">{feat.text}</p>
            </motion.div>
          ))}
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
        "Young Professionals searching for urban convenience",
        "Middle-class families seeking quality living space",
        "Local & International property investors"
      ]
    },
    {
      title: "Targeting",
      icon: Target,
      points: [
        "Age Range: 25 – 40 years old",
        "Working adults in KL CBD & financial districts",
        "First-time homebuyers with lifestyle aspirations"
      ]
    },
    {
      title: "Positioning",
      icon: Compass,
      points: [
        "Modern urban lifestyle with premium facilities",
        "Strategic price-to-location value proposition",
        "Strong rental yields and investment potential"
      ]
    }
  ];

  return (
    <section id="stp" className="py-24 bg-[#0a0a0a] px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-gold opacity-5"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full -mr-96 -mt-96"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader title="STP Analysis" subtitle="Segmentation, Targeting, and Positioning framework." light />
        
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-10 rounded-3xl group hover:border-gold/30 transition-all duration-500"
            >
              <div className="flex flex-col gap-8 h-full">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Section 03: Strategy</span>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gold border border-white/5 group-hover:bg-gold group-hover:text-black transition-all">
                    <card.icon size={24} />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl font-heading font-black text-white uppercase tracking-tighter">{card.title}</h3>
                  <div className="h-[2px] w-8 bg-gold group-hover:w-16 transition-all" />
                </div>

                <div className="space-y-5">
                  {card.points.map((point, pIdx) => (
                    <div key={pIdx} className="p-4 bg-white/5 border-l-2 border-white/10 group-hover:border-gold rounded-r-xl transition-all">
                      <p className="text-xs text-white/50 font-bold leading-relaxed">{point}</p>
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
    <section id="7ps" className="py-24 bg-white px-8 relative">
      <div className="absolute inset-0 bg-gray-50/50 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader title="7Ps Marketing Mix" subtitle="A comprehensive strategy for market dominance." />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {psData.map((p, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={cn(
                "bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 group hover:border-gold/50 transition-all duration-500",
                idx === 0 ? "lg:col-span-2" : ""
              )}
            >
              <div className="flex flex-col h-full gap-8">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-heading font-black text-gold uppercase tracking-tighter">{p.title}</h3>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/30 group-hover:text-gold transition-colors">
                    <p.icon size={20} />
                  </div>
                </div>
                
                <p className="text-white/40 font-medium text-[11px] leading-relaxed">
                  {p.content}
                </p>

                <div className="space-y-2 mt-auto">
                  {p.details.map((detail, dIdx) => (
                    <div key={dIdx} className="p-3 bg-white/5 border border-white/5 rounded-lg text-[9px] font-bold uppercase tracking-widest text-white/30 group-hover:text-white transition-colors">
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

const MarketAnalysis = () => {
  return (
    <section id="market" className="py-24 bg-white px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Market Analysis" subtitle="Data-driven positioning and competitive pricing strategy." />
        
        <div className="grid lg:grid-cols-3 gap-4 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a] p-10 rounded-2xl border border-white/5 flex flex-col justify-between h-[280px] group hover:border-gold/30 transition-all"
          >
            <div className="flex justify-between items-start">
              <p className="text-white/30 text-[10px] uppercase tracking-widest font-black">Metric 01</p>
              <BarChart3 className="text-gold opacity-20 group-hover:opacity-100 transition-opacity" size={24} />
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-2">Price Range</p>
              <h4 className="text-4xl text-white font-heading font-black tracking-tighter">RM450k – 600k</h4>
            </div>
            <div className="pt-6 border-t border-white/5">
              <p className="text-gold text-[10px] font-black uppercase tracking-widest">Mid-market Luxury Sweet Spot</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#0a0a0a] p-10 rounded-2xl border border-gold/20 flex flex-col justify-between h-[280px] group hover:bg-gold/5 transition-all"
          >
            <div className="flex justify-between items-start">
              <p className="text-white/30 text-[10px] uppercase tracking-widest font-black">Metric 02</p>
              <TrendingUp className="text-gold" size={24} />
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-2">Recommended Price</p>
              <h4 className="text-4xl text-white font-heading font-black tracking-tighter">RM470 – 490 <span className="text-lg opacity-30">psf</span></h4>
            </div>
            <div className="pt-6 border-t border-white/5">
              <p className="text-gold text-[10px] font-black uppercase tracking-widest">Aggressive Competitive Entry</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#0a0a0a] p-10 rounded-2xl border border-white/5 flex flex-col justify-between h-[280px] group hover:border-gold/30 transition-all"
          >
            <div className="flex justify-between items-start">
              <p className="text-white/30 text-[10px] uppercase tracking-widest font-black">Metric 03</p>
              <div className="text-gold text-2xl font-black">+42%</div>
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-2">Project Yield</p>
              <h4 className="text-4xl text-white font-heading font-black tracking-tighter">5.8 – 6.5%</h4>
            </div>
            <div className="pt-6 border-t border-white/5">
              <p className="text-gold text-[10px] font-black uppercase tracking-widest">Projected Annual Return</p>
            </div>
          </motion.div>
        </div>

        <div className="bg-[#0a0a0a] rounded-[2rem] p-8 md:p-16 border border-white/5 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
            <div className="space-y-4">
              <div className="px-5 py-2 border border-gold/30 rounded-full inline-block text-[9px] text-gold font-black uppercase tracking-[0.2em]">Financial Intelligence</div>
              <h3 className="text-3xl md:text-5xl font-heading font-black tracking-tighter">PRICING COMPARISON</h3>
              <p className="text-white/30 font-medium max-w-sm text-sm">Target vs. Local Market Competitors analysis based on Q1 2026 data.</p>
            </div>
          </div>

          <div className="h-[400px] w-full mt-10">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cmaData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#ffffff50', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#ffffff30', fontSize: 10 }}
                  tickFormatter={(val) => `RM ${(val / 1000)}k`}
                />
                <Tooltip 
                  cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                  contentStyle={{ backgroundColor: '#111', border: '1px solid #C5A05930', borderRadius: '16px', padding: '16px' }}
                  itemStyle={{ color: '#C5A059', fontWeight: 900, textTransform: 'uppercase', fontSize: '10px' }}
                  labelStyle={{ color: '#fff', marginBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', fontWeight: 900, fontSize: '12px' }}
                />
                <Bar dataKey="price" radius={[4, 4, 0, 0]} barSize={50}>
                  {cmaData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.name === 'Dua M Residences' ? '#C5A059' : '#ffffff20'} />
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

const ConsumerBehaviour = () => {
  const steps = [
    { 
      title: "Search", 
      desc: "Digital awareness.", 
      icon: Search 
    },
    { 
      title: "Evaluate", 
      desc: "Comparative ROI.", 
      icon: BarChart3 
    },
    { 
      title: "Aspire", 
      desc: "Emotional fit.", 
      icon: BookOpen 
    },
    { 
      title: "Decide", 
      desc: "Logical closure.", 
      icon: UserCheck 
    },
    { 
      title: "Advocacy", 
      desc: "Social proof.", 
      icon: Users 
    },
  ];

  return (
    <section id="journey" className="py-24 bg-[#0a0a0a] px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Buyer Journey" subtitle="Mapping the psychological path to ownership." light />
        
        <div className="relative pt-12">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-[110px] left-0 w-full h-[1px] bg-white/5" />
          
          <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold group-hover:text-black text-white/50">
                  <step.icon size={20} />
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-black text-gold/30 group-hover:text-white uppercase tracking-[0.3em] transition-colors">
                    Phase {idx + 1}
                  </div>
                </div>
                
                <div className="mt-8 space-y-2">
                  <h3 className="text-sm font-heading font-black text-white uppercase tracking-widest">{step.title}</h3>
                  <p className="text-white/30 font-medium text-[10px] uppercase tracking-tighter max-w-[120px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const DigitalStrategy = () => {
  const strategies = [
    { name: "Facebook Ads", icon: Facebook, color: "text-blue-400" },
    { name: "Instagram Reels", icon: Instagram, color: "text-pink-400" },
    { name: "TikTok Content", icon: Search, color: "text-white" },
    { name: "SEO Rank", icon: TrendingUp, color: "text-green-400" },
    { name: "Email Funnel", icon: Mail, color: "text-yellow-400" },
    { name: "iProperty/Guru", icon: Building2, color: "text-red-400" },
  ];

  return (
    <section id="digital" className="py-24 bg-white px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Digital Strategy" subtitle="Dominating the landscape with high-impact visuals." />
        
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-12 grid lg:grid-cols-2 gap-12 items-center bg-[#0a0a0a] rounded-[2.5rem] p-8 md:p-16 text-white border border-white/5 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -mr-64 -mt-64" />
            
            <div className="space-y-10 relative z-10">
              <div className="space-y-4">
                <div className="px-5 py-2 border border-gold/30 rounded-full inline-block text-[10px] text-gold font-black uppercase tracking-[0.2em]">Social Influence</div>
                <h3 className="text-4xl md:text-6xl font-heading font-black tracking-tighter leading-tight uppercase">
                  Data-Driven<br />Engagement
                </h3>
                <p className="text-white/30 font-medium max-w-md text-sm leading-relaxed">
                  Leveraging precision targeting and viral storytelling to ensure consistent brand recall among high-intent buyers.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {strategies.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-gold/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/30 group-hover:bg-gold group-hover:text-black transition-all">
                      <item.icon size={18} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50 group-hover:text-white">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/10 overflow-hidden group p-1 shadow-2xl">
                <div className="w-full h-full bg-black rounded-[1.4rem] overflow-hidden relative">
                   <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2670" alt="Modern interior marketing shot" className="w-full h-full object-cover opacity-60" />
                   <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 p-8 flex flex-col justify-end">
                      <div className="flex justify-between items-end">
                        <div className="space-y-2">
                          <div className="px-3 py-1 bg-gold text-black text-[9px] font-black rounded-full inline-block">AD PERFORMANCE</div>
                          <div className="text-3xl font-heading font-black">2.4M+</div>
                          <div className="text-[10px] text-white/40 uppercase font-black tracking-widest">Monthly Impressions</div>
                        </div>
                        <div className="text-right">
                          <div className="text-gold text-2xl font-black">+127%</div>
                          <div className="text-[10px] text-white/40 uppercase font-black tracking-widest">Engagement</div>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Conclusion = () => {
  return (
    <section id="conclusion" className="relative min-h-[80vh] flex items-center justify-center py-24 px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1595171708811-6677f4e85741?auto=format&fit=crop&q=80&w=2670" 
          alt="Aerial view of Kuala Lumpur at sunset" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/20"></div>
        <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="px-6 py-2 border border-gold rounded-full inline-block">
              <span className="text-gold text-xs uppercase tracking-[0.5em] font-black">Strategic Conclusion</span>
            </div>
            
            <h2 className="text-4xl md:text-7xl font-heading font-black text-white leading-[0.9] tracking-tighter uppercase">
              Strong Future<br />
              <span className="text-gold">Growth</span> Asset
            </h2>

            <div className="space-y-6 max-w-md">
              <div className="p-6 bg-white/5 border-l-2 border-gold rounded-r-xl">
                 <h4 className="text-gold text-xs font-black uppercase tracking-widest mb-1">Final Verdict</h4>
                 <p className="text-white/40 text-xs font-medium leading-relaxed uppercase tracking-tighter">Prime location proximity ensures consistent appreciation and high retention from urban markets.</p>
              </div>
              <div className="p-6 bg-white/5 border-l-2 border-white/20 rounded-r-xl">
                 <h4 className="text-white/80 text-xs font-black uppercase tracking-widest mb-1">Marketing Synergy</h4>
                 <p className="text-white/40 text-xs font-medium leading-relaxed uppercase tracking-tighter tracking-tighter">Omnichannel digital execution guarantees top-of-mind brand recall and rapid sales conversions.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gold rounded-[2.5rem] p-10 md:p-16 text-black flex flex-col justify-between h-full min-h-[450px]"
          >
            <div className="space-y-8">
              <h3 className="text-6xl font-heading font-black tracking-tighter leading-none uppercase">Thank<br />You</h3>
              <div className="w-16 h-2 bg-black rounded-full" />
            </div>

            <div className="space-y-8 mt-12">
              <div className="flex gap-8 items-center border-b border-black/10 pb-8">
                <div className="w-24 h-24 bg-black rounded-2xl flex items-center justify-center p-2">
                   <div className="w-full h-full border border-dashed border-white/20 flex items-center justify-center text-[6px] text-white/40 font-black uppercase">QR CODE</div>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase font-black tracking-widest opacity-60">Scan for Presentation</p>
                  <p className="text-lg font-black font-heading leading-tight uppercase tracking-tighter">Digital Dossier<br />Available Now</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-[9px] uppercase font-black tracking-[0.2em] opacity-60 mb-1">Presenter</p>
                  <p className="text-xs font-black uppercase tracking-tighter font-heading">Adam Malik</p>
                </div>
                <div>
                  <p className="text-[9px] uppercase font-black tracking-[0.2em] opacity-60 mb-1">ID Code</p>
                  <p className="text-xs font-black uppercase tracking-tighter font-heading">KL-2253-090</p>
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
            className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="space-y-4 flex flex-col items-center"
            >
              <div className="w-12 h-12 border-t-2 border-gold rounded-full animate-spin mb-4" />
              <h2 className="text-2xl font-heading font-black text-white tracking-widest uppercase">
                DUA M <span className="text-gold">RESIDENCES</span>
              </h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <div className="border-[12px] border-gold min-h-screen overflow-x-hidden relative">
          <Navbar />
          <Hero />
          <PropertyOverview />
          <STPAnalysis />
          <MarketingMix />
          <MarketAnalysis />
          <ConsumerBehaviour />
          <DigitalStrategy />
          <Conclusion />

          <footer className="py-12 bg-[#0a0a0a] border-t border-white/5 px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-col items-center md:items-start">
                <h4 className="text-lg font-heading font-black text-white tracking-tighter mb-1">DUA M <span className="text-gold">RESIDENCES</span></h4>
                <p className="text-[10px] uppercase font-black tracking-widest text-white/30">Academic Marketing Presentation &copy; 2026</p>
              </div>
              <div className="h-[1px] md:h-12 w-full md:w-[1px] bg-white/5" />
              <div className="text-center md:text-right">
                <p className="text-[9px] uppercase tracking-widest font-black text-white/20">Designed for EER2253</p>
                <p className="text-xs font-bold text-white/50">Adam Malik • KL-2253-090</p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
