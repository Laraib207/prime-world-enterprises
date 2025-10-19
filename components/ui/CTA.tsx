import Link from 'next/link'

export default function CTA() {
  return (
    <section className="section bg-gradient-to-r from-primary via-secondary to-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgydjMwem0wIDMwaC0yVjMwaDJ2MzB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="container relative z-10 text-center">
        <h2 className="text-white mb-6 text-4xl md:text-5xl font-bold">Need Immediate Assistance?</h2>
        <p className="text-2xl text-white/95 mb-10 max-w-3xl mx-auto font-semibold leading-relaxed">
          Get expert technicians at your doorstep within 30 minutes. Professional service you can trust.
        </p>
        
        <div className="flex flex-wrap gap-6 justify-center mb-12">
          <a href="tel:+919999999999" className="btn bg-white text-primary hover:bg-white/90 text-xl px-12 py-6 font-bold shadow-2xl transform hover:scale-105 transition-all">
            📞 Call: +91-9999-999-999
          </a>
          <Link href="/contact" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-xl px-12 py-6 font-bold transform hover:scale-105 transition-all">
            Request Callback
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-white">
          <div className="flex flex-col items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
            <span className="text-5xl">📧</span>
            <span className="text-lg font-semibold">info@primeworldenterprises.com</span>
          </div>
          <div className="flex flex-col items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
            <span className="text-5xl">💬</span>
            <span className="text-lg font-semibold">WhatsApp: +91-9999-999-999</span>
          </div>
          <div className="flex flex-col items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
            <span className="text-5xl">🕐</span>
            <span className="text-lg font-semibold">Open 24/7 - All Days</span>
          </div>
        </div>
      </div>
    </section>
  )
}
