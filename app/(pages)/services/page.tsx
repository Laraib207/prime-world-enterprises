import Link from 'next/link'

const allServices = [
  {
    category: 'AC Services',
    icon: '❄️',
    items: [
      'Split AC Installation',
      'Window AC Repair',
      'Gas Filling & Leak Detection',
      'AC Deep Cleaning',
      'Compressor Replacement',
      'PCB Repair',
      'Regular Maintenance'
    ]
  },
  {
    category: 'Cooler Services',
    icon: '🌬️',
    items: [
      'Desert Cooler Service',
      'Tower Cooler Repair',
      'Motor Replacement',
      'Water Pump Repair',
      'Pad Replacement',
      'Deep Cleaning',
      'Installation'
    ]
  },
  {
    category: 'Car Services',
    icon: '🚗',
    items: [
      'Car AC Repair',
      'AC Gas Filling',
      'Compressor Service',
      'Electrical Issues',
      'Cooling Problems',
      'Diagnostics',
      'Maintenance'
    ]
  },
  {
    category: 'Freeze Services',
    icon: '🧊',
    items: [
      'Refrigerator Repair',
      'Deep Freezer Service',
      'Gas Refilling',
      'Cooling Issues',
      'Compressor Repair',
      'Thermostat Replacement',
      'Door Seal Repair'
    ]
  }
]

export default function Services() {
  return (
    <div className="pt-32 pb-16">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="mb-4">Our Services</h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            सम्पूर्ण सर्विस समाधान - सभी ब्रांड्स के लिए
          </p>
        </div>

        <div className="grid grid-2 gap-8 max-w-5xl mx-auto">
          {allServices.map((service, index) => (
            <div key={index} className="glass-card">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">{service.icon}</span>
                <h2 className="text-2xl">{service.category}</h2>
              </div>
              
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-text-secondary">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="mt-6 inline-block text-secondary font-semibold hover:text-primary transition-colors">
                Book Service →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center glass-card max-w-3xl mx-auto">
          <h3 className="mb-4">🛠️ All Brands Supported</h3>
          <p className="text-text-secondary mb-4">
            हम सभी प्रमुख ब्रांड्स की सर्विस करते हैं: LG, Samsung, Whirlpool, Voltas, Daikin, Carrier, Blue Star, Godrej, Haier, और अन्य सभी।
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get Quote Now
          </Link>
        </div>
      </div>
    </div>
  )
}
