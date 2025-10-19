export default function Contact() {
  return (
    <div className="pt-32 pb-20">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="mb-6">Get In Touch</h1>
          <p className="text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            We are here to help 24/7. Reach out through any channel and our team will respond within minutes.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="glass-card">
            <h2 className="mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-6 group">
                <div className="text-5xl group-hover:scale-110 transition-transform">📞</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-secondary">Phone Numbers</h3>
                  <a href="tel:+919999999999" className="block text-lg text-text-secondary hover:text-secondary transition-colors mb-2">
                    +91-9999-999-999 (Primary)
                  </a>
                  <a href="tel:+918888888888" className="block text-lg text-text-secondary hover:text-secondary transition-colors mb-2">
                    +91-8888-888-888 (Support)
                  </a>
                  <p className="text-sm text-text-secondary mt-2">Available 24/7 for emergencies</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6 group">
                <div className="text-5xl group-hover:scale-110 transition-transform">📧</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-secondary">Email Address</h3>
                  <a href="mailto:info@primeworldenterprises.com" className="block text-lg text-text-secondary hover:text-secondary transition-colors mb-2">
                    info@primeworldenterprises.com
                  </a>
                  <a href="mailto:support@primeworldenterprises.com" className="block text-lg text-text-secondary hover:text-secondary transition-colors mb-2">
                    support@primeworldenterprises.com
                  </a>
                  <p className="text-sm text-text-secondary mt-2">Response within 2 hours</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-6 group">
                <div className="text-5xl group-hover:scale-110 transition-transform">💬</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-secondary">WhatsApp</h3>
                  <a href="https://wa.me/919999999999" className="block text-lg text-text-secondary hover:text-secondary transition-colors mb-2">
                    +91-9999-999-999
                  </a>
                  <p className="text-sm text-text-secondary mt-2">Click to chat instantly</p>
                  <a href="https://wa.me/919999999999" className="inline-block mt-3 px-6 py-3 bg-secondary/20 border border-secondary/50 rounded-full text-secondary font-semibold hover:bg-secondary hover:text-dark transition-all">
                    Start WhatsApp Chat →
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-6 group">
                <div className="text-5xl group-hover:scale-110 transition-transform">⏰</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-secondary">Service Hours</h3>
                  <p className="text-lg text-text-secondary mb-2">Open 24 Hours - 7 Days a Week</p>
                  <p className="text-lg text-secondary font-semibold">No Holidays • Always Available</p>
                  <p className="text-sm text-text-secondary mt-2">Emergency services available anytime</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-6 group">
                <div className="text-5xl group-hover:scale-110 transition-transform">📍</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-secondary">Service Area</h3>
                  <p className="text-lg text-text-secondary mb-2">Serving All Major Cities</p>
                  <p className="text-sm text-text-secondary">Door-to-door service across residential and commercial areas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card">
            <h2 className="mb-8">Request Service</h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-3 text-text-secondary">Full Name *</label>
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  className="w-full px-6 py-4 bg-dark border border-white/20 rounded-xl focus:border-secondary outline-none transition-colors text-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-text-secondary">Phone Number *</label>
                <input 
                  type="tel" 
                  placeholder="+91-XXXXX-XXXXX"
                  className="w-full px-6 py-4 bg-dark border border-white/20 rounded-xl focus:border-secondary outline-none transition-colors text-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-text-secondary">Email Address</label>
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="w-full px-6 py-4 bg-dark border border-white/20 rounded-xl focus:border-secondary outline-none transition-colors text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-text-secondary">Service Type *</label>
                <select className="w-full px-6 py-4 bg-dark border border-white/20 rounded-xl focus:border-secondary outline-none transition-colors text-lg" required>
                  <option value="">Select a service</option>
                  <option value="ac">Air Conditioning</option>
                  <option value="cooler">Cooler Service</option>
                  <option value="car">Car Service</option>
                  <option value="refrigerator">Refrigerator</option>
                  <option value="emergency">Emergency Repair</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-text-secondary">Preferred Date & Time</label>
                <input 
                  type="datetime-local" 
                  className="w-full px-6 py-4 bg-dark border border-white/20 rounded-xl focus:border-secondary outline-none transition-colors text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-text-secondary">Address</label>
                <textarea 
                  rows={3}
                  placeholder="Enter your complete address"
                  className="w-full px-6 py-4 bg-dark border border-white/20 rounded-xl focus:border-secondary outline-none transition-colors resize-none text-lg"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-text-secondary">Problem Description *</label>
                <textarea
                  rows={4}
                  placeholder="Describe the issue you are facing..."
                  className="w-full px-6 py-4 bg-dark border border-white/20 rounded-xl focus:border-secondary outline-none transition-colors resize-none text-lg"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full text-lg py-4">
                📞 Request Callback
              </button>

              <p className="text-sm text-text-secondary text-center">
                Our team will contact you within 10 minutes
              </p>
            </form>
          </div>
        </div>

        {/* Emergency Section */}
        <div className="glass-card max-w-5xl mx-auto mb-20 bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-secondary/50">
          <div className="text-center">
            <div className="text-6xl mb-6">🚨</div>
            <h3 className="text-3xl mb-6">Emergency Service Available</h3>
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Facing a critical breakdown? Our emergency response team is ready 24/7. We reach you within 30 minutes for urgent repairs.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="tel:+919999999999" className="btn btn-primary text-xl px-12 py-5 font-bold">
                🚨 Emergency Call: +91-9999-999-999
              </a>
            </div>
          </div>
        </div>

        {/* Why Contact Us */}
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="glass-card text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold mb-2">Fast Response</h3>
            <p className="text-text-secondary text-sm">Call back within 10 minutes</p>
          </div>
          <div className="glass-card text-center">
            <div className="text-4xl mb-4">💯</div>
            <h3 className="text-lg font-semibold mb-2">Free Quotes</h3>
            <p className="text-text-secondary text-sm">No obligation estimates</p>
          </div>
          <div className="glass-card text-center">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-lg font-semibold mb-2">Same Day Service</h3>
            <p className="text-text-secondary text-sm">Available for urgent needs</p>
          </div>
          <div className="glass-card text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold mb-2">Expert Advice</h3>
            <p className="text-text-secondary text-sm">Professional consultation</p>
          </div>
        </div>
      </div>
    </div>
  )
}
