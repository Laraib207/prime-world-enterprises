import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-secondary/20 border border-secondary/50 rounded-full text-secondary font-semibold backdrop-blur-sm">
              <span className="text-2xl">⚡</span>
              <span>Available 24/7 - Emergency Services Ready</span>
            </div>
            
            <h1 className="mb-6 leading-tight" style={{animation: 'fadeIn 1s ease-out'}}>
              Prime World Enterprises
            </h1>
            
            <p className="text-2xl md:text-3xl mb-4 font-semibold text-white" style={{animation: 'fadeIn 1s ease-out 0.2s both'}}>
              Your Trusted Partner for Complete Home & Automotive Solutions
            </p>

            <p className="text-lg md:text-xl mb-10 text-text-secondary max-w-3xl mx-auto" style={{animation: 'fadeIn 1s ease-out 0.3s both'}}>
              Expert repair and maintenance services for AC, Coolers, Refrigerators, and Cars. Professional technicians at your doorstep within 30 minutes.
            </p>

            <div className="flex flex-wrap gap-6 justify-center mb-16" style={{animation: 'fadeIn 1s ease-out 0.4s both'}}>
              <Link href="/contact" className="btn btn-primary text-lg px-10 py-5 shadow-lg">
                📞 Book Service Now
              </Link>
              <Link href="/services" className="btn btn-secondary text-lg px-10 py-5">
                Explore Services →
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-3 gap-8 mt-20">
              <div className="glass-card text-center transform hover:scale-105 transition-transform">
                <div className="text-6xl mb-4">🔧</div>
                <div className="text-5xl font-bold gradient-text mb-3">10+</div>
                <p className="text-text-secondary text-lg">Years Experience</p>
              </div>
              <div className="glass-card text-center transform hover:scale-105 transition-transform">
                <div className="text-6xl mb-4">👨‍🔧</div>
                <div className="text-5xl font-bold gradient-text mb-3">50+</div>
                <p className="text-text-secondary text-lg">Expert Technicians</p>
              </div>
              <div className="glass-card text-center transform hover:scale-105 transition-transform">
                <div className="text-6xl mb-4">⭐</div>
                <div className="text-5xl font-bold gradient-text mb-3">10k+</div>
                <p className="text-text-secondary text-lg">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-dark-light/50">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="mb-6">Complete Service Solutions</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              From air conditioning to automotive care, we deliver excellence across all service categories with certified professionals and genuine parts.
            </p>
          </div>

          <div className="grid grid-2 gap-10">
            {/* AC Services */}
            <div className="glass-card group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-7xl group-hover:scale-110 transition-transform">❄️</div>
                <div>
                  <h3 className="text-3xl mb-2">Air Conditioning</h3>
                  <p className="text-secondary font-semibold">Split, Window & Cassette AC</p>
                </div>
              </div>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                Professional installation, repair, and maintenance for all AC brands. Gas refilling, compressor replacement, and complete diagnostic services.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-text-secondary">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  Installation & Setup
                </div>
                <div className="flex items-center text-text-secondary">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  Gas Filling
                </div>
                <div className="flex items-center text-text-secondary">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  Deep Cleaning
                </div>
                <div className="flex items-center text-text-secondary">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  Emergency Repair
                </div>
              </div>
              <Link href="/services" className="text-secondary font-bold hover:text-primary transition-colors flex items-center gap-2">
                Learn More <span>→</span>
              </Link>
            </div>

            {/* Cooler Services */}
            <div className="glass-card group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-7xl group-hover:scale-110 transition-transform">🌬️</div>
                <div>
                  <h3 className="text-3xl mb-2">Cooler Solutions</h3>
                  <p className="text-secondary font-semibold">Desert & Tower Coolers</p>
                </div>
              </div>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                Complete cooler servicing including motor repair, pump replacement, deep cleaning, and seasonal maintenance for optimal cooling performance.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-text-secondary">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  Motor Repair
                </div>
                <div className="flex items-center text-text-secondary">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  Pump Replacement
                </div>
                <div className="flex items-center text-text-secondary">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  Deep Cleaning
                </div>
                <div className="flex items-center text-text-secondary">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  Pad Replacement
                </div>
              </div>
              <Link href="/services" className="text-secondary font-bold hover:text-primary transition-colors flex items-center gap-2">
                Learn More <span>→</span>
              </Link>
            </div>

            {/* Car Services */}
            <div className="glass-card group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-7xl group-hover:scale-110 transition-transform">🚗</div>
                <div>
                  <h3 className="text-3xl mb-2">Automotive Care</h3>
                  <p className="text-secondary font-semibold">Complete Car Services</p>
                </div>
              </div>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                Expert car AC repair, electrical diagnostics, and mechanical services. We service all makes and models with advanced diagnostic equipment.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-text-secondary">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  AC Repair
                </div>
                <div className="flex items-center text-text-secondary">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  Electrical Work
                </div>
                <div className="flex items-center text-text-secondary">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  Diagnostics
                </div>
                <div className="flex items-center text-text-secondary">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  General Service
                </div>
              </div>
              <Link href="/services" className="text-secondary font-bold hover:text-primary transition-colors flex items-center gap-2">
                Learn More <span>→</span>
              </Link>
            </div>

            {/* Refrigerator Services */}
            <div className="glass-card group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-7xl group-hover:scale-110 transition-transform">🧊</div>
                <div>
                  <h3 className="text-3xl mb-2">Refrigeration</h3>
                  <p className="text-secondary font-semibold">Fridge & Deep Freezer</p>
                </div>
              </div>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                Fast and reliable refrigerator repair services. From cooling issues to compressor failures, we fix it all with genuine spare parts.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-text-secondary">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  Cooling Issues
                </div>
                <div className="flex items-center text-text-secondary">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  Gas Refill
                </div>
                <div className="flex items-center text-text-secondary">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  Compressor Fix
                </div>
                <div className="flex items-center text-text-secondary">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  Thermostat Repair
                </div>
              </div>
              <Link href="/services" className="text-secondary font-bold hover:text-primary transition-colors flex items-center gap-2">
                Learn More <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="mb-6">Why Prime World Enterprises?</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We combine technical expertise, customer-first approach, and cutting-edge tools to deliver unmatched service quality.
            </p>
          </div>

          <div className="grid grid-3 gap-8">
            <div className="glass-card text-center hover:scale-105 transition-transform">
              <div className="text-6xl mb-6">🏠</div>
              <h3 className="text-2xl mb-4">Doorstep Service</h3>
              <p className="text-text-secondary leading-relaxed">
                We come to your location with all necessary tools and equipment. No need to transport heavy appliances.
              </p>
            </div>

            <div className="glass-card text-center hover:scale-105 transition-transform">
              <div className="text-6xl mb-6">⏰</div>
              <h3 className="text-2xl mb-4">24/7 Availability</h3>
              <p className="text-text-secondary leading-relaxed">
                Round-the-clock emergency service. Call us anytime, any day. We're always ready to help you.
              </p>
            </div>

            <div className="glass-card text-center hover:scale-105 transition-transform">
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-2xl mb-4">30-Min Response</h3>
              <p className="text-text-secondary leading-relaxed">
                Quick response time guaranteed. Our technicians reach you within 30 minutes in emergency situations.
              </p>
            </div>

            <div className="glass-card text-center hover:scale-105 transition-transform">
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-2xl mb-4">Transparent Pricing</h3>
              <p className="text-text-secondary leading-relaxed">
                No hidden charges. Get detailed quotations before work begins. Affordable rates with premium quality.
              </p>
            </div>

            <div className="glass-card text-center hover:scale-105 transition-transform">
              <div className="text-6xl mb-6">🎓</div>
              <h3 className="text-2xl mb-4">Certified Experts</h3>
              <p className="text-text-secondary leading-relaxed">
                Highly trained and certified technicians with 10+ years of experience in the industry.
              </p>
            </div>

            <div className="glass-card text-center hover:scale-105 transition-transform">
              <div className="text-6xl mb-6">✅</div>
              <h3 className="text-2xl mb-4">Quality Guarantee</h3>
              <p className="text-text-secondary leading-relaxed">
                90-day service warranty on all repairs. We stand behind our work with complete confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="section bg-dark-light/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6">We Service All Major Brands</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              From premium to budget brands, our technicians are trained to handle them all
            </p>
          </div>

          <div className="glass-card max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4">
                <p className="text-lg font-semibold text-text-secondary">LG • Samsung • Sony</p>
              </div>
              <div className="p-4">
                <p className="text-lg font-semibold text-text-secondary">Voltas • Daikin • Carrier</p>
              </div>
              <div className="p-4">
                <p className="text-lg font-semibold text-text-secondary">Whirlpool • Godrej • Haier</p>
              </div>
              <div className="p-4">
                <p className="text-lg font-semibold text-text-secondary">Blue Star • Hitachi • Panasonic</p>
              </div>
              <div className="p-4">
                <p className="text-lg font-semibold text-text-secondary">Maruti • Hyundai • Tata</p>
              </div>
              <div className="p-4">
                <p className="text-lg font-semibold text-text-secondary">Honda • Toyota • Mahindra</p>
              </div>
              <div className="p-4">
                <p className="text-lg font-semibold text-text-secondary">Bosch • IFB • Samsung</p>
              </div>
              <div className="p-4">
                <p className="text-lg font-semibold text-secondary">& Many More →</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgydjMwem0wIDMwaC0yVjMwaDJ2MzB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        
        <div className="container relative z-10 text-center">
          <h2 className="text-white mb-6 text-4xl md:text-5xl">Need Immediate Assistance?</h2>
          <p className="text-2xl text-white/95 mb-10 max-w-3xl mx-auto font-semibold">
            Get expert technicians at your doorstep within 30 minutes
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center mb-12">
            <a href="tel:+919999999999" className="btn bg-white text-primary hover:bg-white/90 text-xl px-12 py-6 font-bold shadow-2xl">
              📞 Call: +91-9999-999-999
            </a>
            <Link href="/contact" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-xl px-12 py-6 font-bold">
              Request Callback
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-white">
            <div className="flex flex-col items-center gap-3">
              <span className="text-4xl">📧</span>
              <span className="text-lg">info@primeworldenterprises.com</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="text-4xl">💬</span>
              <span className="text-lg">WhatsApp: +91-9999-999-999</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="text-4xl">🕐</span>
              <span className="text-lg">Open 24/7 - All Days</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
