/* ============================================
   Villas Page — All villa listings
   ============================================ */

import { Link } from "react-router-dom";
import { ArrowRight, Bed, Bath, Maximize, Leaf, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

import villa1 from "@/assets/villa-1.jpg";
import villa2 from "@/assets/villa-2.jpg";
import villa3 from "@/assets/villa-3.jpg";
import heroImg from "@/assets/hero-resort.jpg";

const villas = [
  {
    img: villa1,
    name: "Canopy Treehouse",
    desc: "Elevated among the treetops, this stunning two-bedroom villa features floor-to-ceiling glass, a private plunge pool, and panoramic forest views.",
    beds: 2, baths: 2, size: "180 m²", guests: 4,
    price: "$850", tag: "Most Popular",
    features: ["Private Plunge Pool", "360° Forest Views", "Outdoor Shower", "Butler Service"],
  },
  {
    img: villa2,
    name: "Lakeside Pavilion",
    desc: "A romantic overwater retreat on our pristine lake, crafted from bamboo and local hardwoods. Wake to the gentle sounds of water and birdsong.",
    beds: 1, baths: 1, size: "120 m²", guests: 2,
    price: "$650", tag: "Romantic Escape",
    features: ["Overwater Deck", "Kayak Access", "Sunrise Views", "In-Room Dining"],
  },
  {
    img: villa3,
    name: "Garden Estate",
    desc: "Our most spacious villa, perfect for families. A three-bedroom sanctuary with private gardens, outdoor bathtub, and direct trail access.",
    beds: 3, baths: 3, size: "280 m²", guests: 6,
    price: "$1,200", tag: "Family",
    features: ["Private Garden", "Outdoor Bathtub", "Kids' Program", "Chef's Kitchen"],
  },
  {
    img: villa1,
    name: "Horizon Suite",
    desc: "Perched on the ridge with uninterrupted mountain vistas, this suite blends minimalist design with maximum luxury and natural light.",
    beds: 1, baths: 1, size: "95 m²", guests: 2,
    price: "$550", tag: "New",
    features: ["Mountain Views", "Rain Shower", "Yoga Deck", "Minibar"],
  },
  {
    img: villa2,
    name: "Cloud Villa",
    desc: "Above the clouds at our highest elevation, this exclusive villa offers complete seclusion with a heated infinity pool and private chef option.",
    beds: 2, baths: 2, size: "200 m²", guests: 4,
    price: "$1,500", tag: "Ultra Luxury",
    features: ["Heated Infinity Pool", "Private Chef", "Telescope", "Helicopter Pad"],
  },
  {
    img: villa3,
    name: "Riverside Bungalow",
    desc: "Nestled beside a crystalline mountain stream, this charming bungalow is the perfect blend of rustic warmth and refined comfort.",
    beds: 1, baths: 1, size: "110 m²", guests: 2,
    price: "$500", tag: "Nature Lover",
    features: ["Riverside Deck", "Fire Pit", "Hammock Garden", "Bird Watching"],
  },
];

const VillasPage = () => (
  <main>
    <Navbar />

    {/* Hero */}
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Verdania Resort" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest/60" />
      </div>
      <div className="relative z-10 text-center px-6">
        <span className="font-body text-xs tracking-[0.4em] uppercase text-sage-light mb-4 block">Accommodations</span>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-cream">Our Villas</h1>
        <p className="font-body text-lg text-cream/70 mt-4 max-w-lg mx-auto">
          Each villa is a unique sanctuary, designed to immerse you in nature's embrace.
        </p>
      </div>
    </section>

    {/* Villa Grid */}
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-20">
          {villas.map((v, i) => (
            <AnimatedSection key={i}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative rounded-2xl overflow-hidden h-[400px]">
                    <img src={v.img} alt={v.name} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full font-body text-xs tracking-wider uppercase font-bold">
                        {v.tag}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
                  <h2 className="font-display text-3xl font-semibold text-foreground mb-4">{v.name}</h2>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">{v.desc}</p>
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="flex flex-col items-center gap-1 p-3 bg-muted rounded-xl">
                      <Bed className="w-4 h-4 text-primary" />
                      <span className="font-body text-xs text-muted-foreground">{v.beds} Bed{v.beds > 1 ? "s" : ""}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 p-3 bg-muted rounded-xl">
                      <Bath className="w-4 h-4 text-primary" />
                      <span className="font-body text-xs text-muted-foreground">{v.baths} Bath{v.baths > 1 ? "s" : ""}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 p-3 bg-muted rounded-xl">
                      <Maximize className="w-4 h-4 text-primary" />
                      <span className="font-body text-xs text-muted-foreground">{v.size}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 p-3 bg-muted rounded-xl">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="font-body text-xs text-muted-foreground">{v.guests} Guests</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {v.features.map((f) => (
                      <span key={f} className="flex items-center gap-1 bg-sage-light text-foreground px-3 py-1.5 rounded-full font-body text-xs">
                        <Leaf className="w-3 h-3 text-primary" /> {f}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-display text-2xl font-bold text-foreground">{v.price}</span>
                      <span className="font-body text-sm text-muted-foreground"> / night</span>
                    </div>
                    <Link
                      to="/booking"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-body text-sm tracking-wider uppercase font-bold hover:bg-primary/90 transition-all"
                    >
                      Book Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </main>
);

export default VillasPage;
