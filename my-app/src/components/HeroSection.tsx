import { conferenceDates, conferenceLocation } from "@/lib/conference";

interface HeroSectionProps {
  isInThailand: boolean | null;
  onSignUp: (inThailand: boolean) => void;
}

export default function HeroSection({ onSignUp }: HeroSectionProps) {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-white" />
      <div
        className="absolute inset-0 bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/kaeng_krachan_dam.jpeg')", backgroundSize: '200rem' }}
      />
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-2 bg-yellow-100 backdrop-blur-sm rounded-full text-yellow-700 text-sm font-medium mb-6">
          {conferenceDates} • {conferenceLocation}
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-950 mb-6 tracking-tight">
          ISMP Southeast Asia Conference
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-300">
            2026
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onSignUp(true)}
            className="px-8 py-4 bg-yellow-500 text-slate-950 font-semibold rounded-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg"
          >
            Register (Thailand)
          </button>
          <button
            onClick={() => onSignUp(false)}
            className="px-8 py-4 bg-white border-2 border-yellow-300 text-yellow-700 font-semibold rounded-lg hover:bg-yellow-50 transition-all transform hover:scale-105 shadow-sm"
          >
            Register (International)
          </button>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-yellow-500/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
