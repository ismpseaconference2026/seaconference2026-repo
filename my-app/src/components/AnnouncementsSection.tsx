import { announcementsList } from "@/lib/conference";
import RegistrationDropdown from "@/components/RegistrationDropdown";

const announcementItemClassName =
  "rounded-2xl bg-white p-6 shadow-lg border-l-4 border-yellow-400";
const registerDropdownButtonClassName =
  "flex cursor-pointer list-none items-center gap-2 rounded-xl border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-200";
const registerDropdownPanelClassName =
  "absolute left-0 top-[calc(100%+0.75rem)] z-50 flex w-max min-w-[12rem] flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl";
const thailandRegistrationClassName =
  "rounded-xl bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300";
const internationalRegistrationClassName =
  "rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600";

export default function AnnouncementsSection() {
  return (
    <section id="announcements" className="py-16 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-950 text-center mb-8">Announcements</h2>

        <div className="space-y-4">
          {announcementsList.map((announcement, index) => (
            <div
              key={index}
              className={`${announcementItemClassName} ${
                index === 0 ? "border-yellow-500 ring-2 ring-yellow-200" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-slate-950">{announcement.title}</h3>
                    {index === 0 && (
                      <span className="rounded-full bg-yellow-300 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-900">
                        Latest
                      </span>
                    )}
                  </div>
                  <div className="mt-2 space-y-2 text-slate-700 leading-relaxed">
                    {announcement.message
                      .split("\n")
                      .filter((line) => line.trim().length > 0)
                      .map((line, lineIndex) => (
                        <p key={lineIndex}>{line}</p>
                      ))}
                  </div>
                  {announcement.title === "Registration Reminder" && (
                    <div className="mt-4 inline-block">
                      <RegistrationDropdown
                        buttonClassName={registerDropdownButtonClassName}
                        panelClassName={registerDropdownPanelClassName}
                        thailandClassName={thailandRegistrationClassName}
                        internationalClassName={internationalRegistrationClassName}
                        groupClass="group"
                        wrapperClassName="relative"
                        ariaLabel={{
                          thailand: "Register for the Thailand conference",
                          international: "Register for international attendees",
                        }}
                      />
                    </div>
                  )}
                  {announcement.cta && (
                    <a
                      href={announcement.cta.href}
                      className="inline-block mt-4 rounded-xl border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200 cursor-pointer"
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
