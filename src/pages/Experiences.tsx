/* ============================================
   Experiences Page — Activities & wellness
   ============================================ */

import { Link } from "react-router-dom";
import { ArrowRight, Clock, MapPin, TreePine, Heart, Mountain, Utensils, Compass, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

import experienceImg from "@/assets/experience.jpg";
import spaImg from "@/assets/spa.jpg";
import diningImg from "@/assets/dining.jpg";
import philosophyImg from "@/assets/philosophy.jpg";
import galleryImg from "@/assets/nature-gallery.jpg";

const experiences = [
  {
    img: experienceImg,
    category: "Adventure",
    title: "Canopy Walkway & Zipline",
    desc: "Traverse 500 meters of suspended bridges through the forest canopy, followed by an exhilarating zipline descent.",
    duration: "3 hours",
    location: "Forest Reserve",
    icon: Compass,
  },
  {
    img: spaImg,
    category: "Wellness",
    title: "Volcanic Spa Ritual",
    desc: "A full-body treatment using volcanic mud, mineral springs, and botanical essences from our organic garden.",
    duration: "2 hours",
    location: "Spa Sanctuary",
    icon: Sparkles,
  },
  {
    img: diningImg,
    category: "Culinary",
    title: "Farm-to-Table Masterclass",
    desc: "Join our head chef to harvest organic ingredients and prepare a multi-course meal with local flavors.",
    duration: "4 hours",
    location: "Organic Kitchen",
    icon: Utensils,
  },
  {
    img: philosophyImg,
    category: "Mindfulness",
    title: "Sunrise Forest Meditation",
    desc: "Begin your day with a guided meditation on our panoramic deck, watching the mist lift from the valley below.",
    duration: "1.5 hours",
    location: "Horizon Deck",
    icon: Heart,
  },
  {
    img: galleryImg,
    category: "Nature",
    title: "Guided Birdwatching Tour",
    desc: "Explore our trails with expert naturalist guides and discover 200+ bird species including the Resplendent Quetzal.",
    duration: "3 hours",
    location: "Forest Trails",
    icon: TreePine,
  },
  {
    img: experienceImg,
    category: "Adventure",
    title: "Waterfall Hike & Swim",
    desc: "Trek through primary forest to hidden waterfalls and swim in crystal-clear natural pools.",
    duration: "5 hours",
    location: "Mountain Reserve",
    icon: Mountain,
  },
];

const ExperiencesPage = () => (
  <main>
    <Navbar />

    {/* Hero */}
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
      <div className="absolute inset-0">
        <img src={experienceImg} alt="Canopy walkway" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest/60" />
      </div>
      <div className="relative z-10 text-center px-6">
        <span className="font-body text-xs tracking-[0.4em] uppercase text-sage-light mb-4 block">Activities & Wellness</span>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-cream">Experiences</h1>
        <p className="font-body text-lg text-cream/70 mt-4 max-w-lg mx-auto">
          Curated adventures that awaken your senses and connect you with nature.
        </p>
      </div>
    </section>

    {/* Experiences Grid */}
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            label="Discover"
            title="Unforgettable Moments"
            subtitle="From heart-pumping adventures to soul-soothing wellness rituals."
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-500 group h-full flex flex-col">
                <div className="relative h-[250px] overflow-hidden">
                  <img
                    src={exp.img}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full font-body text-xs tracking-wider uppercase font-bold">
                      {exp.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 mb-3 text-muted-foreground">
                    <span className="flex items-center gap-1 font-body text-xs">
                      <Clock className="w-3 h-3" /> {exp.duration}
                    </span>
                    <span className="flex items-center gap-1 font-body text-xs">
                      <MapPin className="w-3 h-3" /> {exp.location}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{exp.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">{exp.desc}</p>
                  <Link
                    to="/booking"
                    className="inline-flex items-center gap-2 font-body text-sm tracking-wider uppercase font-bold text-primary mt-5 hover:gap-4 transition-all"
                  >
                    Book Experience <ArrowRight className="w-4 h-4" />
                  </Link>
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

export default ExperiencesPage;
