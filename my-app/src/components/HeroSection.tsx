import {
  conferenceDates,
  conferenceLocation,
} from "@/lib/conference";
import RegistrationDropdown from "@/components/RegistrationDropdown";

const registerDropdownButtonClassName =
  "flex cursor-pointer list-none items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/50 hover:bg-white/20";
const registerDropdownPanelClassName =
  "absolute left-1/2 top-[calc(100%+0.75rem)] z-50 flex w-[min(20rem,calc(100vw-2rem))] -translate-x-1/2 flex-col gap-2 rounded-2xl border border-white/30 bg-white/95 p-3 shadow-xl backdrop-blur-sm";
const thailandRegistrationClassName =
  "rounded-xl border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200";
const internationalRegistrationClassName =
  "rounded-xl bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300";

function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url('/kaeng_krachan_dam.jpeg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.28),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.12),_transparent_28%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/30 to-transparent" aria-hidden="true" />
      <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-[-6rem] right-[-3rem] h-80 w-80 rounded-full bg-amber-200/10 blur-3xl" aria-hidden="true" />
    </>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950">
      <HeroBackground />

      <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-4xl items-center px-4 py-16 text-center sm:px-6 sm:py-20">
        <div className="w-full">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-amber-100 backdrop-blur-sm">
            {conferenceDates} • {conferenceLocation}
          </div>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Southeast Asia
            <span className="mt-2 block bg-gradient-to-r from-yellow-300 via-amber-200 to-white bg-clip-text text-transparent">
              Conference 2026
            </span>
          </h1>

          <div className="relative mt-8 flex justify-center">
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

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-amber-200/80">
            What To Expect
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-xl leading-8 text-slate-100 sm:text-2xl">
            Grow in faith, ask honest questions, and build friendships with students from across Southeast Asia.
          </p>
        </div>
      </div>

      <a
        href="#schedule"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to schedule"
      >
        <svg className="h-6 w-6 text-amber-200/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
}
