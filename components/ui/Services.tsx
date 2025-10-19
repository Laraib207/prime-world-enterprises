import Link from 'next/link'

const services = [
  {
    icon: '❄️',
    title: 'Air Conditioning',
    subtitle: 'Split, Window & Cassette AC',
    description: 'Professional installation, repair, and maintenance for all AC brands. Gas refilling, compressor replacement, and complete diagnostic services.',
    features: ['Installation & Setup', 'Gas Filling', 'Deep Cleaning', 'Emergency Repair']
  },
  {
    icon: '🌬️',
    title: 'Cooler Solutions',
    subtitle: 'Desert & Tower Coolers',
    description: 'Complete cooler servicing including motor repair, pump replacement, deep cleaning, and seasonal maintenance for optimal cooling performance.',
    features: ['Motor Repair', 'Pump Replacement', 'Deep Cleaning', 'Pad Replacement']
  },
  {
    icon: '🚗',
    title: 'Automotive Care',
    subtitle: 'Complete Car Services',
    description: 'Expert car AC repair, electrical diagnostics, and mechanical services. We service all makes and models with advanced diagnostic equipment.',
    features: ['AC Repair', 'Electrical Work', 'Diagnostics', 'General Service']
  },
  {
    icon: '🧊',
    title: 'Refrigeration',
    subtitle: 'Fridge & Deep Freezer',
    description: 'Fast and reliable refrigerator repair services. From cooling issues to compressor failures, we fix it all with genuine spare parts.',
    features: ['Cooling Issues', 'Gas Refill', 'Compressor Fix', 'Thermostat Repair']
  }
]

export default function Services() {
  return (
    <section className="section bg-dark-light/50">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="mb-6">Complete Service Solutions</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            From air conditioning to automotive care, we deliver excellence across all service categories with certified professionals and genuine parts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card group cursor-pointer transform hover:scale-105 transition-all duration-300"
              style={{animation: `fadeIn 0.8s ease-out ${index * 0.15}s both`}}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-7xl group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-3xl mb-2">{service.title}</h3>
                  <p className="text-secondary font-semibold text-lg">{service.subtitle}</p>
                </div>
              </div>
              
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                {service.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-text-secondary">
                    <span className="text-secondary mr-3 text-xl">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
              
              <Link href="/services" className="text-secondary font-bold text-lg hover:text-primary transition-colors flex items-center gap-2 group-hover:gap-4">
                Learn More <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
