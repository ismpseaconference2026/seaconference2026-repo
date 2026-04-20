import { announcementsList } from "@/lib/conference";
import RegistrationButtons from "@/components/RegistrationButtons";

const announcementItemClassName =
  "rounded-2xl bg-white p-6 shadow-lg border-l-4 border-yellow-400";
const registerDropdownButtonClassName =
  "flex cursor-pointer list-none items-center gap-2 rounded-xl border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-200";
const registerDropdownPanelClassName =
  "absolute left-0 top-[calc(100%+0.75rem)] z-50 flex w-max min-w-[12rem] flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl";
const thailandRegistrationClassName =
  "rounded-xl border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200";
const internationalRegistrationClassName =
  "rounded-xl bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300";

export default function AnnouncementsSection() {
  return (
    <section id="announcements" className="py-16 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-950 text-center mb-8">Announcements</h2>

        <div className="space-y-4">
          {announcementsList.map((announcement, index) => (
            <div key={index} className={announcementItemClassName}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-950">{announcement.title}</h3>
                  <p className="mt-2 text-slate-700 leading-relaxed">{announcement.message}</p>
                  {announcement.title === "Registration Reminder" && (
                    <details className="group relative mt-4 inline-block">
                      <summary className={registerDropdownButtonClassName}>
                        <span>Register</span>
                        <svg
                          className="h-4 w-4 transition-transform group-open:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" />
                        </svg>
                      </summary>

                      <div className={registerDropdownPanelClassName}>
                        <RegistrationButtons
                          classNameByAudience={{
                            thailand: thailandRegistrationClassName,
                            international: internationalRegistrationClassName,
                          }}
                          containerClassName="flex flex-col gap-2"
                          ariaLabelByAudience={{
                            thailand: "Register for the Thailand conference",
                            international: "Register for international attendees",
                          }}
                        />
                      </div>
                    </details>
                  )}
                  {announcement.cta && (
                    <a
                      href={announcement.cta.href}
                      className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                    >
                      {announcement.cta.text}
                    </a>
                  )}
                  {announcement.date && (
                    <p className="mt-3 text-sm text-slate-500">{announcement.date}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
