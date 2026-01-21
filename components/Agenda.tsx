export default function Agenda() {
  const schedule = [
    {
      time: "9:00 AM - 9:30 AM",
      title: "Registration & Welcome Coffee",
      description: "Check-in and networking with attendees",
    },
    {
      time: "9:30 AM - 10:30 AM",
      title: "Opening Keynote",
      description: "Setting the stage for innovation and growth",
    },
    {
      time: "10:30 AM - 12:00 PM",
      title: "Round Table Discussion",
      description: "Interactive session with industry leaders",
    },
    {
      time: "12:00 PM - 1:00 PM",
      title: "Networking Lunch",
      description: "Enjoy a catered meal while connecting with peers",
    },
    {
      time: "1:00 PM - 2:30 PM",
      title: "Panel Discussion",
      description: "Expert insights on emerging trends",
    },
    {
      time: "2:30 PM - 3:00 PM",
      title: "Closing Remarks & Q&A",
      description: "Final thoughts and open discussion",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Event Agenda
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            A full day of insights, discussions, and networking
          </p>
          <div className="space-y-6">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <div className="md:w-48 flex-shrink-0">
                  <p className="text-blue-600 font-bold text-lg">{item.time}</p>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
