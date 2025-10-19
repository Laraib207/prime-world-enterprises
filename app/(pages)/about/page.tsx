import Link from 'next/link'

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="container">
        <div className="text-center mb-20">
          <h1 className="mb-6">About Prime World Enterprises</h1>
          <p className="text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            A decade of excellence in home appliance and automotive service solutions, trusted by thousands of satisfied customers across the region.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-20">
          <div className="glass-card">
            <h2 className="mb-6">Our Story</h2>
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                Founded in 2015, Prime World Enterprises started with a simple mission: to provide reliable, professional, and affordable repair services for essential home appliances and vehicles. What began as a small team of three passionate technicians has grown into a full-service enterprise with over 50 certified professionals.
              </p>
              <p>
                Over the past decade, we have served more than 10,000 satisfied customers, completing over 25,000 successful service calls. Our commitment to quality, transparency, and customer satisfaction has made us the most trusted name in the industry.
              </p>
              <p>
                Today, we operate 24/7 with state-of-the-art diagnostic equipment, genuine spare parts inventory, and a fleet of fully-equipped service vehicles. Our technicians undergo continuous training to stay updated with the latest technology and repair techniques.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-20 max-w-6xl mx-auto">
          <div className="glass-card">
            <div className="text-5xl mb-6">🎯</div>
            <h3 className="text-3xl mb-6">Our Mission</h3>
            <p className="text-text-secondary text-lg leading-relaxed">
              To deliver exceptional repair and maintenance services that exceed customer expectations through technical excellence, transparent pricing, and uncompromising quality standards. We aim to be the first choice for every household service needs.
            </p>
          </div>

          <div className="glass-card">
            <div className="text-5xl mb-6">🚀</div>
            <h3 className="text-3xl mb-6">Our Vision</h3>
            <p className="text-text-secondary text-lg leading-relaxed">
              To become the region most trusted and innovative service provider, setting industry benchmarks for quality, reliability, and customer care. We envision a future where every home has access to professional, affordable maintenance solutions.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="mb-6">Our Core Values</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              These principles guide every decision we make and every service we deliver
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass-card text-center hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl mb-4">Excellence</h3>
              <p className="text-text-secondary leading-relaxed">
                We strive for perfection in every repair, using only genuine parts and industry-best practices.
              </p>
            </div>

            <div className="glass-card text-center hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl mb-4">Integrity</h3>
              <p className="text-text-secondary leading-relaxed">
                Transparent pricing, honest diagnostics, and ethical business practices in every interaction.
              </p>
            </div>

            <div className="glass-card text-center hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">💙</div>
              <h3 className="text-2xl mb-4">Customer First</h3>
              <p className="text-text-secondary leading-relaxed">
                Your satisfaction is our priority. We go above and beyond to ensure exceptional service experience.
              </p>
            </div>

            <div className="glass-card text-center hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-2xl mb-4">Innovation</h3>
              <p className="text-text-secondary leading-relaxed">
                Continuously upgrading our tools, techniques, and training to deliver modern solutions.
              </p>
            </div>

            <div className="glass-card text-center hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl mb-4">Speed</h3>
              <p className="text-text-secondary leading-relaxed">
                Fast response times, efficient repairs, and minimal downtime for your convenience.
              </p>
            </div>

            <div className="glass-card text-center hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-2xl mb-4">Reliability</h3>
              <p className="text-text-secondary leading-relaxed">
                Consistent quality, dependable service, and long-lasting repairs you can trust.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card max-w-5xl mx-auto mb-20">
          <h2 className="mb-8 text-center">What Makes Us Different?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-4 text-secondary">🎓 Certified Professionals</h3>
              <p className="text-text-secondary leading-relaxed">
                All our technicians are manufacturer-certified and undergo rigorous training programs to handle complex repairs across all brands.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4 text-secondary">🔧 Advanced Equipment</h3>
              <p className="text-text-secondary leading-relaxed">
                We invest in the latest diagnostic tools and repair equipment to ensure accurate problem identification and efficient solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4 text-secondary">📦 Genuine Parts</h3>
              <p className="text-text-secondary leading-relaxed">
                We maintain an extensive inventory of authentic spare parts from authorized distributors, ensuring quality and longevity.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4 text-secondary">🛡️ Extended Warranty</h3>
              <p className="text-text-secondary leading-relaxed">
                Every repair comes with a 90-day service warranty, giving you complete peace of mind and protection.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4 text-secondary">💳 Flexible Payment</h3>
              <p className="text-text-secondary leading-relaxed">
                Multiple payment options including cash, cards, UPI, and EMI facilities for your convenience.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4 text-secondary">🌐 Digital Service</h3>
              <p className="text-text-secondary leading-relaxed">
                Book appointments online, track technician arrival, and receive digital invoices through our streamlined system.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <div className="glass-card text-center">
            <div className="text-5xl font-bold gradient-text mb-3">10+</div>
            <p className="text-text-secondary text-lg">Years in Business</p>
          </div>
          <div className="glass-card text-center">
            <div className="text-5xl font-bold gradient-text mb-3">50+</div>
            <p className="text-text-secondary text-lg">Expert Technicians</p>
          </div>
          <div className="glass-card text-center">
            <div className="text-5xl font-bold gradient-text mb-3">10k+</div>
            <p className="text-text-secondary text-lg">Happy Customers</p>
          </div>
          <div className="glass-card text-center">
            <div className="text-5xl font-bold gradient-text mb-3">25k+</div>
            <p className="text-text-secondary text-lg">Services Completed</p>
          </div>
        </div>

        <div className="text-center glass-card max-w-4xl mx-auto">
          <h3 className="text-3xl mb-6">Experience the Difference</h3>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Prime World Enterprises for all their service needs.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/contact" className="btn btn-primary text-lg px-10 py-4">
              Get Started Today
            </Link>
            <Link href="/services" className="btn btn-secondary text-lg px-10 py-4">
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
