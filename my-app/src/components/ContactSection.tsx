import { contactInfo } from "@/lib/conference";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-slate-950">Contact Us</h2>
          <p className="mt-4 text-lg text-slate-600">Have questions? Get in touch with our team.</p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 shadow-lg text-center">
          <a
            href={`mailto:${contactInfo.email}?cc=${contactInfo.cc}&subject=${encodeURIComponent(contactInfo.subject)}`}
            className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-8 py-3 text-base font-semibold text-slate-950 transition hover:bg-yellow-300"
          >
            Send Email
          </a>
          <p className="mt-4 text-sm text-slate-600">
            Email: <span className="font-semibold">{contactInfo.email}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
