import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-secondary/20 border border-secondary/50 rounded-full text-secondary font-semibold backdrop-blur-sm animate-fadeIn">
            <span className="text-2xl">⚡</span>
            <span>Available 24/7 - Emergency Services Ready</span>
          </div>
          
          <h1 className="mb-6 leading-tight text-5xl md:text-7xl" style={{animation: 'fadeIn 1s ease-out'}}>
            Prime World Enterprises
          </h1>
          
          <p className="text-2xl md:text-3xl mb-4 font-semibold text-white" style={{animation: 'fadeIn 1s ease-out 0.2s both'}}>
            Your Trusted Partner for Complete Home & Automotive Solutions
          </p>

          <p className="text-lg md:text-xl mb-10 text-text-secondary max-w-3xl mx-auto leading-relaxed" style={{animation: 'fadeIn 1s ease-out 0.3s both'}}>
            Expert repair and maintenance services for AC, Coolers, Refrigerators, and Cars. Professional technicians at your doorstep within 30 minutes.
          </p>

          <div className="flex flex-wrap gap-6 justify-center mb-16" style={{animation: 'fadeIn 1s ease-out 0.4s both'}}>
            <Link href="/contact" className="btn btn-primary text-lg px-10 py-5 shadow-2xl transform hover:scale-105">
              📞 Book Service Now
            </Link>
            <Link href="/services" className="btn btn-secondary text-lg px-10 py-5 transform hover:scale-105">
              Explore Services →
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="glass-card text-center transform hover:scale-105 transition-all cursor-pointer">
              <div className="text-6xl mb-4">🔧</div>
              <div className="text-5xl font-bold gradient-text mb-3">10+</div>
              <p className="text-text-secondary text-lg">Years Experience</p>
            </div>
            <div className="glass-card text-center transform hover:scale-105 transition-all cursor-pointer">
              <div className="text-6xl mb-4">👨‍🔧</div>
              <div className="text-5xl font-bold gradient-text mb-3">50+</div>
              <p className="text-text-secondary text-lg">Expert Technicians</p>
            </div>
            <div className="glass-card text-center transform hover:scale-105 transition-all cursor-pointer">
              <div className="text-6xl mb-4">⭐</div>
              <div className="text-5xl font-bold gradient-text mb-3">10k+</div>
              <p className="text-text-secondary text-lg">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
