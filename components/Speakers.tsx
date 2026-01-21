export default function Speakers() {
  const speakers = [
    {
      name: "John Anderson",
      title: "Chief Technology Officer",
      company: "Tech Innovations Inc.",
      bio: "Leading digital transformation initiatives with 15+ years of experience in enterprise technology.",
    },
    {
      name: "Sarah Chen",
      title: "VP of Product Strategy",
      company: "Global Solutions Corp",
      bio: "Pioneering product development strategies that drive business growth and customer satisfaction.",
    },
    {
      name: "Michael Rodriguez",
      title: "Director of Innovation",
      company: "Future Systems Ltd",
      bio: "Championing innovation and emerging technologies to solve complex business challenges.",
    },
  ];

  return (
    <section className="py-20 bg-brand-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Meet Our Expert Speakers
          </h2>
          <p className="text-center text-blue-100 mb-12 text-lg max-w-2xl mx-auto">
            Learn from industry leaders who are shaping the future of technology and business
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/15 transition-all hover:scale-105 border border-white/20"
              >
                {/* Speaker Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-brand-cyan/30 to-purple-500/30 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center text-4xl font-bold">
                    {speaker.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-brand-cyan font-semibold mb-1">
                    {speaker.title}
                  </p>
                  <p className="text-blue-200 text-sm mb-4">
                    {speaker.company}
                  </p>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {speaker.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
