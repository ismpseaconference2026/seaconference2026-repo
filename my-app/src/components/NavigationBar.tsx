import Image from "next/image";
import RegistrationButtons from "@/components/RegistrationButtons";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#schedule", label: "Schedule" },
  { href: "#travel-checklist", label: "Travel Checklist" },
];

const dividerClassName = "hidden h-5 w-px bg-slate-300 lg:block";
const menuLinkClassName =
  "text-left text-sm font-semibold text-black transition hover:text-slate-700";
const mobileMenuLinkClassName =
  "rounded-xl px-3 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-50";
const thailandRegistrationClassName =
  "rounded-xl border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200";
const internationalRegistrationClassName =
  "rounded-xl bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300";
const mobileMenuButtonClassName =
  "flex cursor-pointer list-none items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm transition hover:border-amber-300 hover:bg-amber-50";
const mobileMenuPanelClassName =
  "absolute right-0 top-[calc(100%+0.75rem)] z-50 flex w-[min(20rem,calc(100vw-2rem))] flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl";

function NavDivider() {
  return <div aria-hidden="true" className={dividerClassName} />;
}

export default function NavigationBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <a
          href="https://www.internationalmentorship.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3"
        >
          <Image
            src="/ISMP_logo_blacktext.png"
            alt="ISMP logo"
            width={120}
            height={40}
            className="h-auto w-auto"
          />
        </a>

        <details className="relative lg:hidden">
          <summary className={mobileMenuButtonClassName}>
            <span>Menu</span>
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </summary>

          <div className={mobileMenuPanelClassName}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={mobileMenuLinkClassName}>
                {item.label}
              </a>
            ))}
            <div className="my-1 h-px bg-slate-200" aria-hidden="true" />
            <RegistrationButtons
              classNameByAudience={{
                thailand: thailandRegistrationClassName,
                international: internationalRegistrationClassName,
              }}
              containerClassName="flex flex-col gap-2"
            />
          </div>
        </details>

        <div className="hidden flex-wrap items-center justify-end gap-4 lg:flex">
          <NavDivider />

          {navItems.map((item) => (
            <div key={item.href} className="contents">
              <a href={item.href} className={menuLinkClassName}>
                {item.label}
              </a>
              <NavDivider />
            </div>
          ))}
        </div>

        <RegistrationButtons
          classNameByAudience={{
            thailand: thailandRegistrationClassName,
            international: internationalRegistrationClassName,
          }}
          containerClassName="hidden flex-1 flex-wrap items-center justify-end gap-3 lg:flex"
        />
      </div>
    </header>
  );
}
