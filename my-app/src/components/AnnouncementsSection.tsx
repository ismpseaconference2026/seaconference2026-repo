import { announcementsList } from "@/lib/conference";

const announcementItemClassName =
  "rounded-2xl bg-white p-6 shadow-lg border-l-4 border-yellow-400";

export default function AnnouncementsSection() {
  return (
    <section id="announcements" className="py-16 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-slate-950">Announcements</h2>
          <p className="mt-4 text-lg text-slate-600">Latest updates and important information about the conference.</p>
        </div>

        <div className="space-y-4">
          {announcementsList.map((announcement, index) => (
            <div key={index} className={announcementItemClassName}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-950">{announcement.title}</h3>
                  <p className="mt-2 text-slate-700 leading-relaxed">{announcement.message}</p>
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
