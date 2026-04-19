import { faqList } from "@/lib/conference";

const summaryClassName =
  "flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl bg-white p-6 text-left shadow-lg transition hover:bg-slate-50";
const panelClassName = "mt-4 rounded-2xl bg-white p-6 shadow-lg text-slate-700 leading-relaxed";

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-slate-950">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-slate-600">Find answers to common questions about the conference.</p>
        </div>

        <div className="space-y-4">
          {faqList.map((faq, index) => (
            <details key={index} className="group">
              <summary className={summaryClassName}>
                <p className="text-lg font-semibold text-slate-950">{faq.question}</p>
                <svg
                  className="h-5 w-5 text-slate-500 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <div className={panelClassName}>
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
