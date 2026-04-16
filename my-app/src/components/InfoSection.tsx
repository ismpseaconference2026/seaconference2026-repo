const infoCards = [
  {
    title: "Nature",
    description: "Visit Kaeng Krachan National Park, the largest national park in Thailand.",
  },
  {
    title: "Faith",
    description: "Explore Christianity, read and study the Bible, and grow in your faith.",
  },
  {
    title: "Workshops",
    description: "Participate in character-building workshops and develop life skills.",
  },
];

export default function InfoSection() {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-950 text-center mb-4">About the Conference</h2>
        <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
          Come and grow in your Christian faith or learn more about Christianity, and build friendships with students from across Southeast Asia. 
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {infoCards.map((card) => (
            <div key={card.title} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow hover:bg-slate-50">
              <div className="w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center mb-6">
                {card.title === "Workshops" ? (
                  <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l8-4V6l-8-4-8 4v10l8 4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12l8-4M12 12L4 8m8 4v8" />
                  </svg>
                ) : card.title === "Faith" ? (
                  <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                ) : (
                  <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3a7 7 0 00-7 7c0 3.5 2.5 6.4 5.8 6.9L10 21h4l.2-4.1c3.3-.5 5.8-3.4 5.8-6.9a7 7 0 00-7-7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 21h6" />
                  </svg>
                )}
              </div>
              <h3 className="text-xl font-semibold text-slate-950 mb-3">{card.title}</h3>
              <p className="text-slate-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
