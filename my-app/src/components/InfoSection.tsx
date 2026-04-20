"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Modal from "@/components/Modal";

type InfoCard = {
  title: string;
  description: string;
  icon: ReactNode;
  details?: {
    imageUrl: string;
    mapsLink: string;
  };
};

const iconClassName = "h-7 w-7 text-yellow-500";
const ctaButtonClassName =
  "inline-block rounded-xl border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200 cursor-pointer";

const infoCards: InfoCard[] = [
  {
    title: "Nature",
    description:
      "Spend a day in Kaeng Krachan National Park and enjoy one of Thailand's most beautiful outdoor settings.",
    icon: (
      <svg className={iconClassName} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3a7 7 0 00-7 7c0 3.5 2.5 6.4 5.8 6.9L10 21h4l.2-4.1c3.3-.5 5.8-3.4 5.8-6.9a7 7 0 00-7-7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 21h6" />
      </svg>
    ),
    details: {
      imageUrl: "/kaeng_krachan_dam.jpeg",
      mapsLink: "https://maps.app.goo.gl/fTgSFhksWvACmvHW6",
    },
  },
  {
    title: "Faith",
    description:
      "Hear the gospel, study the Bible, ask honest questions, and grow in your walk with God.",
    icon: (
      <svg className={iconClassName} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Workshops",
    description:
      "Join practical workshops and conversations designed to build character, leadership, and everyday life skills.",
    icon: (
      <svg className={iconClassName} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l8-4V6l-8-4-8 4v10l8 4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12l8-4M12 12L4 8m8 4v8" />
      </svg>
    ),
  },
];

export default function InfoSection() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const natureCard = infoCards.find((card) => card.title === "Nature");
  const isNatureModalOpen = selectedCard === "Nature" && natureCard?.details;

  return (
    <>
      <section className="bg-slate-50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {infoCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[1.75rem] border border-slate-200/80 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-50 ring-1 ring-yellow-100">
                  {card.icon}
                </div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Focus Area
                </p>
                <p className="mb-3 text-2xl font-semibold text-slate-950">{card.title}</p>
                <p className="text-lg leading-8 text-slate-600">{card.description}</p>
                {card.details && (
                  <button
                    onClick={() => setSelectedCard(card.title)}
                    className={`${ctaButtonClassName} mt-6`}
                  >
                    Learn More
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {isNatureModalOpen && natureCard?.details && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedCard(null)}
          title="Kaeng Krachan National Park"
          imageUrl={natureCard.details.imageUrl}
          imageAlt="Kaeng Krachan National Park"
          description="Experience one of Thailand's most beautiful natural landscapes during Day 2 of the conference."
          ctaButton={{
            text: "View on Google Maps",
            href: natureCard.details.mapsLink,
          }}
        />
      )}
    </>
  );
}
