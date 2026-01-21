export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-brand-navy via-blue-900 to-brand-blue min-h-[600px] md:min-h-[700px] flex items-center text-white overflow-hidden">
      {/* Background decoration circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-brand-cyan/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Event Info */}
          <div className="space-y-6">
            {/* Large S Logo Circle */}
            <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-brand-cyan to-blue-500 rounded-full shadow-2xl mb-4">
              <span className="text-4xl md:text-6xl font-bold text-white">S</span>
            </div>

            <div>
              <p className="text-brand-cyan text-sm md:text-base font-semibold mb-2 uppercase tracking-wide">
                Exclusive Event
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Dallas Round Table
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-6">
                Join industry leaders for an exclusive discussion on innovation and growth
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-blue-200 text-xs">Date</p>
                  <p className="font-semibold">March 15, 2024</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-blue-200 text-xs">Time</p>
                  <p className="font-semibold">9:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-blue-200 text-xs">Location</p>
                  <p className="font-semibold">Dallas, TX</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#rsvp"
                className="inline-block bg-brand-cyan text-brand-navy px-8 py-4 rounded-lg font-bold hover:bg-cyan-400 transition-all shadow-lg hover:shadow-xl hover:scale-105 text-lg"
              >
                Register Now →
              </a>
            </div>
          </div>

          {/* Right side - Can add an image or keep empty for minimalist look */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative graphic - you can replace with actual image */}
              <div className="aspect-square bg-gradient-to-br from-brand-cyan/10 to-purple-500/10 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">💡</div>
                  <p className="text-xl font-semibold">Innovation</p>
                  <p className="text-lg font-semibold">Leadership</p>
                  <p className="text-lg font-semibold">Growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
