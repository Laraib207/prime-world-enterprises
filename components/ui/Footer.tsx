import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark-light border-t border-white/10">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center font-bold text-xl">
                PW
              </div>
              <h3 className="text-xl font-bold gradient-text">Prime World</h3>
            </div>
            <p className="text-text-secondary leading-relaxed mb-6">
              Your trusted partner for AC, Cooler, Car, and Refrigerator services. Professional solutions delivered with care.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                <span>📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                <span>📸</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                <span>🐦</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-text-secondary hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-text-secondary hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-text-secondary hover:text-secondary transition-colors">Our Services</Link></li>
              <li><Link href="/contact" className="text-text-secondary hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-secondary">Our Services</h4>
            <ul className="space-y-3 text-text-secondary">
              <li>❄️ AC Repair & Service</li>
              <li>🌬️ Cooler Maintenance</li>
              <li>🚗 Car AC Service</li>
              <li>🧊 Refrigerator Repair</li>
              <li>⚡ Emergency Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-secondary">Contact Us</h4>
            <ul className="space-y-4 text-text-secondary">
              <li className="flex items-start gap-3">
                <span>📞</span>
                <div>
                  <a href="tel:+919999999999" className="hover:text-secondary transition-colors">+91-9999-999-999</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span>📧</span>
                <div>
                  <a href="mailto:info@primeworldenterprises.com" className="hover:text-secondary transition-colors break-all">info@primeworldenterprises.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span>💬</span>
                <div>
                  <span>WhatsApp Available</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span>⏰</span>
                <div>
                  <span className="text-secondary font-semibold">Open 24/7</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-text-secondary">
          <p className="mb-2">&copy; 2025 Prime World Enterprises. All rights reserved.</p>
          <p className="text-sm">Door-to-Door Service • 24/7 Availability • Trusted by 10,000+ Customers</p>
        </div>
      </div>
    </footer>
  )
}
