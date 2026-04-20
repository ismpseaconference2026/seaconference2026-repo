import type { ConferenceSchedule } from "@/lib/conference";

interface ScheduleSectionProps {
  schedules: ConferenceSchedule;
  activeDay: string;
  onDayChange: (day: string) => void;
}

export default function ScheduleSection({ schedules, activeDay, onDayChange }: ScheduleSectionProps) {
  return (
    <section id="schedule" className="py-8 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-950 text-center mb-4">Conference Schedule</h2>

        <div className="flex justify-center gap-4 mb-12">
          {Object.entries(schedules).map(([key, value]) => (
            <button
              key={key}
              onClick={() => onDayChange(key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all cursor-pointer ${
                activeDay === key
                  ? "bg-yellow-500 text-slate-950 shadow-lg"
                  : "bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              {value.date.split(" - ")[0]}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="bg-yellow-100 px-6 py-4">
            <h3 className="text-xl font-semibold text-slate-950">{schedules[activeDay].date}</h3>
          </div>
          <div className="divide-y divide-slate-200">
            {schedules[activeDay].events.map((event, index) => (
              <div key={index} className="px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 hover:bg-slate-50 transition-colors">
                <div className="sm:w-24 text-yellow-600 font-semibold">{event.time}</div>
                <div className="flex-1">
                  <h4 className="font-medium text-slate-950">{event.title}</h4>
                </div>
                <div className="text-slate-500 text-sm flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
