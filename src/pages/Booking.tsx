/* ============================================
   Booking Page — Reservation form
   ============================================ */

import { useState } from "react";
import { CalendarDays, Users, Leaf, Phone, Mail, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

import heroImg from "@/assets/hero-resort.jpg";

const villaOptions = [
  "Canopy Treehouse — $850/night",
  "Lakeside Pavilion — $650/night",
  "Garden Estate — $1,200/night",
  "Horizon Suite — $550/night",
  "Cloud Villa — $1,500/night",
  "Riverside Bungalow — $500/night",
];

const BookingPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Verdania Resort" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-forest/65" />
        </div>
        <div className="relative z-10 text-center px-6">
          <span className="font-body text-xs tracking-[0.4em] uppercase text-sage-light mb-4 block">Reservations</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-cream">Book Your Stay</h1>
          <p className="font-body text-lg text-cream/70 mt-4 max-w-lg mx-auto">
            Begin your eco-luxury escape. Our team will confirm your reservation within 24 hours.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-10 h-10 text-primary" />
                </div>
                <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
                  Reservation Request Received
                </h2>
                <p className="font-body text-muted-foreground text-lg max-w-md mx-auto">
                  Thank you for choosing Verdania. Our concierge team will reach out within 24 hours
                  to confirm your eco-luxury escape.
                </p>
              </div>
            ) : (
              <div className="bg-card rounded-3xl border border-border p-8 md:p-12">
                <div className="text-center mb-10">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-2">Reservation Inquiry</h2>
                  <p className="font-body text-sm text-muted-foreground">
                    Fill out the form below and our concierge will handle the rest.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2 block">First Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Last Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  {/* Contact Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="email"
                          required
                          className="w-full bg-background border border-border rounded-xl pl-11 pr-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Phone</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="tel"
                          className="w-full bg-background border border-border rounded-xl pl-11 pr-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Villa Selection */}
                  <div>
                    <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Preferred Villa</label>
                    <select
                      required
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all appearance-none"
                    >
                      <option value="">Select a villa...</option>
                      {villaOptions.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>

                  {/* Dates & Guests Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Check-in</label>
                      <div className="relative">
                        <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="date"
                          required
                          className="w-full bg-background border border-border rounded-xl pl-11 pr-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Check-out</label>
                      <div className="relative">
                        <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="date"
                          required
                          className="w-full bg-background border border-border rounded-xl pl-11 pr-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Guests</label>
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <select
                          required
                          className="w-full bg-background border border-border rounded-xl pl-11 pr-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all appearance-none"
                        >
                          {[1, 2, 3, 4, 5, 6].map((n) => (
                            <option key={n} value={n}>{n} Guest{n > 1 ? "s" : ""}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Special Requests</label>
                    <textarea
                      rows={4}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                      placeholder="Dietary requirements, celebrations, accessibility needs..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-4 rounded-full font-body text-sm tracking-widest uppercase font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                  >
                    Submit Reservation <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="font-body text-xs text-center text-muted-foreground">
                    No payment required now. Our concierge will contact you to finalize your booking.
                  </p>
                </form>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BookingPage;
