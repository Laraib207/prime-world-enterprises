const features = [
  {
    icon: '🏠',
    title: 'Doorstep Service',
    description: 'We come to your location with all necessary tools and equipment. No need to transport heavy appliances.'
  },
  {
    icon: '⏰',
    title: '24/7 Availability',
    description: 'Round-the-clock emergency service. Call us anytime, any day. We are always ready to help you.'
  },
  {
    icon: '⚡',
    title: '30-Min Response',
    description: 'Quick response time guaranteed. Our technicians reach you within 30 minutes in emergency situations.'
  },
  {
    icon: '💰',
    title: 'Transparent Pricing',
    description: 'No hidden charges. Get detailed quotations before work begins. Affordable rates with premium quality.'
  },
  {
    icon: '🎓',
    title: 'Certified Experts',
    description: 'Highly trained and certified technicians with 10+ years of experience in the industry.'
  },
  {
    icon: '✅',
    title: 'Quality Guarantee',
    description: '90-day service warranty on all repairs. We stand behind our work with complete confidence.'
  }
]

export default function Features() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="mb-6">Why Prime World Enterprises?</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We combine technical expertise, customer-first approach, and cutting-edge tools to deliver unmatched service quality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card text-center hover:scale-105 transition-all cursor-pointer"
              style={{animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`}}
            >
              <div className="text-6xl mb-6 inline-block transform hover:rotate-12 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl mb-4">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
