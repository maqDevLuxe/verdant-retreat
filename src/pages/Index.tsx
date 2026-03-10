/* ============================================
   Homepage — Eco-Luxury Resort
   14 sections as specified
   ============================================ */

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Leaf, Droplets, Sun, Wind, Recycle, TreePine, Heart,
  Mountain, Utensils, Sparkles, Star, ArrowRight, Play,
  Award, ShieldCheck, Globe, Users, CalendarDays, Quote
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

import heroImg from "@/assets/hero-resort.jpg";
import villa1 from "@/assets/villa-1.jpg";
import villa2 from "@/assets/villa-2.jpg";
import villa3 from "@/assets/villa-3.jpg";
import spaImg from "@/assets/spa.jpg";
import diningImg from "@/assets/dining.jpg";
import experienceImg from "@/assets/experience.jpg";
import galleryImg from "@/assets/nature-gallery.jpg";
import philosophyImg from "@/assets/philosophy.jpg";

/* ---- Counter Hook ---- */
const useCounter = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = end / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
};

/* ================================================================
   SECTION COMPONENTS
   ================================================================ */

/* --- 1. Hero Section --- */
const HeroSection = () => (
  <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Verdania Eco Resort aerial view at golden hour"
        className="w-full h-full object-cover animate-ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/40 via-forest/20 to-forest/60" />
    </div>
    <div className="relative z-10 text-center px-6 max-w-4xl">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="inline-block font-body text-xs tracking-[0.4em] uppercase text-sage-light mb-6"
      >
        Eco-Luxury Retreat · Costa Rica
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-[1.05] mb-6"
      >
        Where Luxury Meets
        <br />
        <span className="italic font-medium">Wilderness</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="font-body text-lg md:text-xl text-cream/80 max-w-xl mx-auto mb-10 leading-relaxed"
      >
        Immerse yourself in the pristine beauty of the tropical highlands.
        Sustainable luxury, redefined.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link
          to="/booking"
          className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-body text-sm tracking-widest uppercase font-bold hover:bg-primary/90 transition-all"
        >
          Book Your Escape
        </Link>
        <Link
          to="/villas"
          className="border border-cream/40 text-cream px-8 py-4 rounded-full font-body text-sm tracking-widest uppercase hover:bg-cream/10 transition-all"
        >
          Explore Villas
        </Link>
      </motion.div>
    </div>
    {/* Scroll indicator */}
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center"
    >
      <div className="w-1 h-2 bg-cream/60 rounded-full mt-2" />
    </motion.div>
  </section>
);

/* --- 2. Affiliations/Awards --- */
const AffiliationsSection = () => (
  <section className="bg-card py-12 border-y border-border">
    <div className="max-w-6xl mx-auto px-6">
      <AnimatedSection>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-50">
          {[
            { icon: Award, name: "World Luxury Awards" },
            { icon: ShieldCheck, name: "Green Globe Certified" },
            { icon: Globe, name: "National Geographic" },
            { icon: Star, name: "Condé Nast Traveler" },
            { icon: Leaf, name: "Rainforest Alliance" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-foreground/60">
              <item.icon className="w-6 h-6" />
              <span className="font-body text-xs tracking-widest uppercase font-bold">{item.name}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* --- 3. Sustainable Amenities --- */
const AmenitiesSection = () => {
  const amenities = [
    { icon: Droplets, title: "Rainwater Harvesting", desc: "100% of water sourced from natural rainfall and mountain springs" },
    { icon: Sun, title: "Solar Powered", desc: "Full solar array providing clean energy to the entire resort" },
    { icon: Wind, title: "Natural Ventilation", desc: "Bioclimatic design eliminating the need for air conditioning" },
    { icon: Recycle, title: "Zero Waste", desc: "Comprehensive recycling and composting programs on-site" },
    { icon: TreePine, title: "Reforestation", desc: "5,000+ native trees planted annually across our grounds" },
    { icon: Leaf, title: "Organic Gardens", desc: "Farm-to-table organic ingredients from our on-site gardens" },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            label="Sustainability"
            title="Living in Harmony with Nature"
            subtitle="Every element of Verdania is designed to minimize our footprint while maximizing your comfort."
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-sage-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- 4. Resort Philosophy --- */
const PhilosophySection = () => (
  <section className="section-padding bg-muted">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <AnimatedSection>
          <div className="relative">
            <img
              src={philosophyImg}
              alt="Meditation overlooking tropical valley"
              className="rounded-3xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full organic-blob hidden lg:block" />
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Our Philosophy</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-6">
            A Sanctuary Built on Reverence for the Earth
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            Verdania was born from a simple belief: that true luxury is found not in excess,
            but in the profound connection between human comfort and natural beauty. Every villa,
            every path, every meal is a celebration of the land that sustains us.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Our commitment extends beyond sustainability — we actively regenerate the ecosystems
            we inhabit, partnering with local communities to protect endangered species and
            preserve ancestral traditions.
          </p>
          <Link
            to="/experiences"
            className="inline-flex items-center gap-2 font-body text-sm tracking-wider uppercase font-bold text-primary hover:gap-4 transition-all"
          >
            Discover Our Story <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

/* --- 5. Eco-Impact Metrics --- */
const MetricsSection = () => {
  const metrics = [
    { value: 98, suffix: "%", label: "Carbon Neutral Operations" },
    { value: 5000, suffix: "+", label: "Native Trees Planted" },
    { value: 120, suffix: "", label: "Local Families Supported" },
    { value: 850, suffix: "", label: "Acres of Protected Forest" },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={galleryImg} alt="Resort grounds" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest/85" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            label="Our Impact"
            title="Measurable Change"
            subtitle="Sustainability isn't a promise — it's our daily practice."
            light
          />
        </AnimatedSection>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => {
            const { count, ref } = useCounter(m.value);
            return (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div ref={ref} className="text-center">
                  <span className="font-display text-5xl md:text-6xl font-bold text-cream">
                    {count.toLocaleString()}{m.suffix}
                  </span>
                  <p className="font-body text-sm text-cream/60 mt-3 tracking-wide uppercase">{m.label}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* --- 6. Wellness & Spa --- */
const WellnessSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <AnimatedSection delay={0.1}>
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Wellness & Spa</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-6">
            Restore Your Body, Renew Your Spirit
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Our open-air spa sanctuary draws from ancient healing traditions, using locally sourced
            botanicals and volcanic minerals. Surrender to therapies designed to harmonize body
            and nature — from canopy-level yoga to mineral spring hydrotherapy.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {["Rainforest Massage", "Volcanic Mud Therapy", "Forest Bathing", "Sound Healing"].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-body text-sm text-foreground">{s}</span>
              </div>
            ))}
          </div>
          <Link
            to="/experiences"
            className="inline-flex items-center gap-2 font-body text-sm tracking-wider uppercase font-bold text-primary hover:gap-4 transition-all"
          >
            View All Treatments <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
        <AnimatedSection>
          <img
            src={spaImg}
            alt="Luxury spa treatment room with candles"
            className="rounded-3xl w-full h-[500px] object-cover"
          />
        </AnimatedSection>
      </div>
    </div>
  </section>
);

/* --- 7. Featured Luxury Villas --- */
const VillasSection = () => {
  const villas = [
    { img: villa1, name: "Canopy Treehouse", beds: "2 Bedrooms", price: "From $850/night", tag: "Most Popular" },
    { img: villa2, name: "Lakeside Pavilion", beds: "1 Bedroom", price: "From $650/night", tag: "Romantic" },
    { img: villa3, name: "Garden Estate", beds: "3 Bedrooms", price: "From $1,200/night", tag: "Family" },
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            label="Accommodations"
            title="Luxury Villas & Suites"
            subtitle="Each villa is a private sanctuary, crafted from sustainable materials and immersed in the canopy."
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {villas.map((v, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <Link to="/villas" className="group block">
                <div className="relative rounded-2xl overflow-hidden h-[400px]">
                  <img
                    src={v.img}
                    alt={v.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="image-overlay" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full font-body text-xs tracking-wider uppercase font-bold">
                      {v.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-display text-2xl font-semibold text-cream mb-1">{v.name}</h3>
                    <p className="font-body text-sm text-cream/70 mb-2">{v.beds}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-body text-sm font-bold text-gold">{v.price}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-cream text-sm flex items-center gap-1">
                        View Details <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.3}>
          <div className="text-center mt-12">
            <Link
              to="/villas"
              className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3 rounded-full font-body text-sm tracking-wider uppercase font-bold hover:bg-primary hover:text-primary-foreground transition-all"
            >
              View All Villas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

/* --- 8. Immersive Nature Gallery/Video Banner --- */
const GalleryBanner = () => (
  <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={experienceImg} alt="Canopy walkway in tropical forest" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-forest/50" />
    </div>
    <AnimatedSection className="relative z-10 text-center px-6">
      <button className="w-20 h-20 rounded-full border-2 border-cream/60 flex items-center justify-center mx-auto mb-6 hover:bg-cream/10 transition-all group">
        <Play className="w-8 h-8 text-cream ml-1 group-hover:scale-110 transition-transform" />
      </button>
      <h2 className="font-display text-3xl md:text-5xl font-semibold text-cream mb-4">
        Experience the Untamed Beauty
      </h2>
      <p className="font-body text-cream/70 text-lg">
        Take a virtual tour through our 850 acres of protected rainforest
      </p>
    </AnimatedSection>
  </section>
);

/* --- 9. Fun Facts/Counters --- */
const FunFactsSection = () => {
  const facts = [
    { value: 850, suffix: "", label: "Acres of Forest", icon: TreePine },
    { value: 200, suffix: "+", label: "Bird Species", icon: Wind },
    { value: 12, suffix: "", label: "Natural Springs", icon: Droplets },
    { value: 365, suffix: "", label: "Days of Green", icon: Leaf },
  ];

  return (
    <section className="section-padding bg-sage-light">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((f, i) => {
            const { count, ref } = useCounter(f.value);
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div ref={ref} className="text-center">
                  <f.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <span className="font-display text-4xl md:text-5xl font-bold text-foreground">
                    {count.toLocaleString()}{f.suffix}
                  </span>
                  <p className="font-body text-sm text-muted-foreground mt-2 tracking-wide">{f.label}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* --- 10. Journal/Experiences Blog --- */
const JournalSection = () => {
  const posts = [
    { title: "A Guide to Forest Bathing at Verdania", category: "Wellness", date: "Feb 2026", img: philosophyImg },
    { title: "Farm-to-Table: Our Organic Kitchen Journey", category: "Dining", date: "Jan 2026", img: diningImg },
    { title: "Conservation Stories: The Scarlet Macaw Revival", category: "Wildlife", date: "Dec 2025", img: experienceImg },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            label="Journal"
            title="Stories from the Canopy"
            subtitle="Insights, adventures, and tales from our eco-luxury retreat."
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <article className="group cursor-pointer">
                <div className="rounded-2xl overflow-hidden h-[250px] mb-5">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-body text-xs tracking-wider uppercase text-primary font-bold">{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="font-body text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- 11. Local Culture & Dining --- */
const CultureDiningSection = () => (
  <section className="section-padding bg-muted">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <AnimatedSection>
          <img
            src={diningImg}
            alt="Farm-to-table dining at Verdania"
            className="rounded-3xl w-full h-[450px] object-cover"
          />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Culture & Dining</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-6">
            Savor the Flavors of the Highlands
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            Our chef-curated dining experiences celebrate Costa Rica's rich culinary heritage,
            using ingredients harvested daily from our organic gardens and sourced from local
            farming cooperatives.
          </p>
          <div className="space-y-4 mb-8">
            {[
              { icon: Utensils, text: "Three signature restaurants with farm-to-table menus" },
              { icon: Mountain, text: "Sunset cocktails at our canopy lounge bar" },
              { icon: Heart, text: "Traditional cooking classes with local artisans" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

/* --- 12. Guest Reviews --- */
const ReviewsSection = () => {
  const reviews = [
    { name: "Isabella M.", location: "London, UK", text: "An otherworldly experience. Waking up in the treehouse to the sound of howler monkeys and mist rolling through the valley — it changed something in me. Verdania is not a resort, it's a revelation.", rating: 5 },
    { name: "James & Aiko", location: "Tokyo, Japan", text: "The attention to sustainability without compromising luxury is remarkable. Every detail, from the bamboo architecture to the volcanic spa treatments, felt intentional and extraordinary.", rating: 5 },
    { name: "Rafael C.", location: "São Paulo, Brazil", text: "Three visits and counting. The staff remembers every preference, the food is unbelievable, and the feeling of being completely immersed in nature while surrounded by comfort is unmatched.", rating: 5 },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            label="Testimonials"
            title="Words from Our Guests"
            subtitle="Every stay at Verdania becomes a story worth sharing."
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="bg-card rounded-2xl p-8 border border-border h-full flex flex-col">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="font-body text-sm text-foreground leading-relaxed mb-6 flex-1 italic">
                  "{r.text}"
                </p>
                <div>
                  <p className="font-display text-base font-semibold text-foreground">{r.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{r.location}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- 13. Booking CTA --- */
const BookingCTA = () => (
  <section className="relative py-28 overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Resort at golden hour" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-forest/75" />
    </div>
    <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
      <AnimatedSection>
        <span className="font-body text-xs tracking-[0.4em] uppercase text-sage-light mb-4 block">Begin Your Journey</span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
          Your Sanctuary Awaits
        </h2>
        <p className="font-body text-lg text-cream/70 mb-10 leading-relaxed">
          Reserve your private eco-luxury experience. Limited availability ensures
          an intimate, undisturbed connection with nature.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/booking"
            className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-body text-sm tracking-widest uppercase font-bold hover:bg-primary/90 transition-all"
          >
            Reserve Now
          </Link>
          <a
            href="mailto:hello@verdania.eco"
            className="border border-cream/40 text-cream px-10 py-4 rounded-full font-body text-sm tracking-widest uppercase hover:bg-cream/10 transition-all"
          >
            Contact Us
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ================================================================
   HOMEPAGE ASSEMBLY
   ================================================================ */

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AffiliationsSection />
      <AmenitiesSection />
      <PhilosophySection />
      <MetricsSection />
      <WellnessSection />
      <VillasSection />
      <GalleryBanner />
      <FunFactsSection />
      <JournalSection />
      <CultureDiningSection />
      <ReviewsSection />
      <BookingCTA />
      <Footer />
    </main>
  );
};

export default Index;
