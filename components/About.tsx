export default function About() {
  const topics = [
    {
      icon: "💡",
      title: "Innovation Strategies",
      description: "Discover cutting-edge approaches to drive innovation in your organization"
    },
    {
      icon: "🚀",
      title: "Digital Transformation",
      description: "Learn how to successfully navigate digital transformation initiatives"
    },
    {
      icon: "👥",
      title: "Leadership Excellence",
      description: "Develop leadership skills that inspire teams and drive results"
    },
    {
      icon: "📊",
      title: "Data-Driven Decisions",
      description: "Leverage analytics and insights to make strategic business decisions"
    },
    {
      icon: "🤝",
      title: "Strategic Partnerships",
      description: "Build meaningful connections that accelerate business growth"
    },
    {
      icon: "🎯",
      title: "Market Trends",
      description: "Stay ahead with insights on emerging trends and opportunities"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-900">
            What You&apos;ll Learn
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Gain insights and knowledge from industry experts on topics that matter most
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-100 hover:border-brand-cyan"
              >
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {topic.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-brand-blue to-brand-navy text-white p-8 md:p-12 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Why Attend This Event?
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  Join us for an exclusive opportunity to connect with industry leaders,
                  expand your professional network, and gain actionable insights that you
                  can implement immediately in your organization.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-brand-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Interactive round table discussions</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-brand-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Networking with industry peers</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-brand-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Catered meals and refreshments</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-brand-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Exclusive resources and materials</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
