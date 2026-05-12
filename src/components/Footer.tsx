import React from "react";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center group">
              <div className="w-48 h-16">
                <img src="/logo.png" alt="ITTA Logo" className="w-full h-full object-contain" />
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              ITTA – International Trading Training Academy is a premier institution dedicated to providing professional financial market education and practical trading mentorship.
            </p>
            <div className="flex items-center gap-4">
              {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:border-primary hover:text-primary transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Courses", "Student Portal", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={
                      link === "Home" 
                        ? "/" 
                        : link === "About Us" 
                          ? "/about-us" 
                          : `/${link.toLowerCase().replace(" ", "-")}`
                    }
                    className="text-white/60 text-sm hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">Popular Courses</h4>
            <ul className="space-y-4">
              {["Forex Trading Masterclass", "Stock Market Program", "Crypto Trading", "Technical Analysis"].map(
                (course) => (
                  <li key={course}>
                    <Link href="/courses" className="text-white/60 text-sm hover:text-primary transition-colors">
                      {course}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-white/60 text-sm">
                  1st Floor, Relcon Plaza, Opposite LIC, Pattom, Thiruvananthapuram, Kerala
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-white/60 text-sm">+91 7907409671</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-white/60 text-sm">ittaacademy03@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} ITTA – International Trading Training Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/40 text-xs hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 text-xs hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
