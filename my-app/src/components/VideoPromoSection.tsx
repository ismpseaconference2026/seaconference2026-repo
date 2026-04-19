import { videoPromo } from "@/lib/conference";

export default function VideoPromoSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-slate-950">Promotional Video</h2>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-xl mx-auto max-w-4xl">
          <video
            src={videoPromo.src}
            poster={videoPromo.poster}
            controls
            playsInline
            className="w-full h-[min(60vh,480px)] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
