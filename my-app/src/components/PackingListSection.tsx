import { packingFootnotes, packingList } from "@/lib/conference";

const summaryClassName =
  "flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl bg-white p-6 text-left shadow-lg transition hover:bg-slate-50";
const panelClassName = "mt-4 rounded-2xl bg-white p-8 shadow-lg";

export default function PackingListSection() {
  return (
    <section id="packing-list" className="py-16 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-950 text-center mb-4">Packing List</h2>

        <details className="group">
          <summary className={summaryClassName}>
            <div>
              <p className="text-lg font-semibold text-slate-950">What to bring</p>
              <p className="mt-1 text-sm text-slate-500">
                {packingList.length} essentials for the conference
              </p>
            </div>
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
            <div className="flex flex-col gap-4">
              {packingList.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="mt-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-slate-200 pt-4 text-sm text-slate-500 space-y-3">
              {packingFootnotes.map((note, index) => (
                <p key={index}>
                  <span className="font-semibold">[{index + 1}]</span> {note}
                </p>
              ))}
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
