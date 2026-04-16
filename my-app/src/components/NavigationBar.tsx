import Image from "next/image";
import { registrationLinks } from "@/lib/conference";

export default function NavigationBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
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

        <div className="hidden sm:flex items-center gap-3">
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
