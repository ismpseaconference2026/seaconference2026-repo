import Image from "next/image";
import { registrationLinks } from "@/lib/conference";

const dividerClassName = "hidden h-5 w-px bg-slate-300 sm:block";
const menuLinkClassName =
  "text-left text-sm font-semibold text-black transition hover:text-slate-700";

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
            alt="IMSP logo"
            width={120}
            height={40}
            className="h-auto w-auto"
          />
        </a>

        <NavDivider />

        <div className="flex flex-wrap items-center justify-end gap-4">
          <a href="#home" className={menuLinkClassName}>
            Home
          </a>

          <NavDivider />

          <a href="#schedule" className={menuLinkClassName}>
            Schedule
          </a>

          <NavDivider />

          <a href="#packing-list" className={menuLinkClassName}>
            Packing List
          </a>
        </div>

        <NavDivider />

        <div className="flex flex-1 flex-wrap items-center justify-end gap-3">
          <a
            href={registrationLinks.thailand}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-yellow-500 text-slate-950 text-sm font-semibold hover:bg-yellow-400 transition"
          >
            Register (Thailand)
          </a>
          <a
            href={registrationLinks.international}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-900 text-sm font-semibold hover:bg-slate-50 transition"
          >
            Register (International)
          </a>
        </div>
      </div>
    </header>
  );
}
