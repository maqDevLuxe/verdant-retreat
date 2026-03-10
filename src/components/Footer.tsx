/* ============================================
   Footer — Natural, elegant resort footer
   ============================================ */

import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest text-cream">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Leaf className="w-6 h-6 text-sage-light" />
              <span className="font-display text-2xl font-semibold">Verdania</span>
            </div>
            <p className="font-body text-cream/70 text-sm leading-relaxed mb-6">
              Where luxury meets nature. An eco-conscious retreat nestled in pristine tropical forest,
              redefining sustainable hospitality.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-5">Explore</h4>
            <ul className="space-y-3">
              {["Home", "Villas", "Experiences", "Booking"].map((item) => (
                <li key={item}>
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="font-body text-sm text-cream/70 hover:text-cream transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resort */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-5">Resort</h4>
            <ul className="space-y-3">
              {["Wellness & Spa", "Dining", "Sustainability", "Gallery"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-sm text-cream/70 hover:text-cream transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-sage-light flex-shrink-0" />
                <span className="font-body text-sm text-cream/70">Verdania Valley, Tropical Highlands, Costa Rica</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sage-light flex-shrink-0" />
                <span className="font-body text-sm text-cream/70">+506 2222 3333</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sage-light flex-shrink-0" />
                <span className="font-body text-sm text-cream/70">hello@verdania.eco</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-cream/50">
            © 2026 Verdania Eco Resort. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms", "Sitemap"].map((item) => (
              <a key={item} href="#" className="font-body text-xs text-cream/50 hover:text-cream/80 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
