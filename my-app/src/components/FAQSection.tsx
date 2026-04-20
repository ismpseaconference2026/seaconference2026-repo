import { faqList } from "@/lib/conference";
import RegistrationButtons from "@/components/RegistrationButtons";

const summaryClassName =
  "flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl bg-white p-6 text-left shadow-lg transition hover:bg-slate-50";
const panelClassName = "mt-4 rounded-2xl bg-white p-6 shadow-lg text-slate-700 leading-relaxed";
const registerDropdownButtonClassName =
  "flex cursor-pointer list-none items-center gap-2 rounded-xl border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-200";
const registerDropdownPanelClassName =
  "absolute left-0 top-[calc(100%+0.75rem)] z-50 flex w-max min-w-[12rem] flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl";
const thailandRegistrationClassName =
  "rounded-xl border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200";
const internationalRegistrationClassName =
  "rounded-xl bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300";

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-950 text-center mb-8">Frequently Asked Questions</h2>

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
                {faq.question === "What is the registration process?" && (
                  <div className="mt-6 border-t border-slate-200 pt-4">
                    <p className="text-slate-700 font-semibold mb-3">Ready to register? Choose an option from the dropdown:</p>
                    <details className="group/register relative inline-block">
                      <summary className={registerDropdownButtonClassName}>
                        <span>Register</span>
                        <svg
                          className="h-4 w-4 transition-transform group-open/register:rotate-180"
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
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
