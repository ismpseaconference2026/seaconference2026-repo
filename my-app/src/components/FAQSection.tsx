"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import RegistrationDropdown from "@/components/RegistrationDropdown";

// Types
type ContentItem = string | { type: "button"; text: string; href: string };
type FAQItem = {
  question: string;
  content: string | ContentItem[];
  showVenueButton?: boolean;
  showTdacButton?: boolean;
};

// Styling Constants - FAQ
const summaryClassName =
  "flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl bg-white p-6 text-left shadow-lg transition hover:bg-slate-50";
const panelClassName = "mt-4 rounded-2xl bg-white p-6 shadow-lg text-slate-700 leading-relaxed";
const ctaButtonClassName =
  "inline-block rounded-xl border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200";

// Styling Constants - Registration Dropdown
const registerDropdownButtonClassName =
  "flex cursor-pointer list-none items-center gap-2 rounded-xl border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-200";
const registerDropdownPanelClassName =
  "absolute left-0 top-[calc(100%+0.75rem)] z-50 flex w-max min-w-[12rem] flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl";
const thailandRegistrationClassName =
  "rounded-xl bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300";
const internationalRegistrationClassName =
  "rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600";

// FAQ Data
const faqList: FAQItem[] = [
  {
    question: "When is the SEA Conference 2026?",
    content: "The conference will be held from Thursday, April 23 to Sunday, April 26, 2026 in Bangkok, Thailand.",
  },
  {
    question: "Where is the conference venue?",
    content: "The conference will be held at The Grace Amphawa located in Samut Songkhram province, approximately 1 hour from Bangkok.",
    showVenueButton: true,
  },
  {
    question: "What should I bring to the conference?",
    content: [
      "Please refer to our Travel Checklist section which includes essentials like a valid passport, Bible, water bottle, appropriate clothing, and other helpful items for the conference. ",
      { type: "button", text: "View Travel Checklist", href: "#travel-checklist" },
    ],
  },
  {
    question: "Is there accommodation provided?",
    content: "Yes, accommodation is provided at The Grace Amphawa. For international travelers, you may need to fill out the Thai Customs Declaration (TDAC) form with the venue information.",
    showVenueButton: true,
    showTdacButton: true,
  },
  {
    question: "What is the registration process?",
    content: "We have separate registration forms for Thailand-based and international participants. You can find the registration links below:",
  },
  {
    question: "Do I need a visa to attend?",
    content: "Visa requirements depend on your nationality and country of residence. Please check with the Thai embassy or consulate in your country for the most current visa requirements.",
  },
];

// Helper Functions
const renderContent = (content: string | ContentItem[]) => {
  if (typeof content === "string") {
    return <>{content}</>;
  }

  return (
    <>
      {content.map((item, index) => {
        if (typeof item === "string") {
          return <span key={index}>{item}</span>;
        }
        if (item.type === "button") {
          return (
            <div key={index} className="mt-6 border-t border-slate-200 pt-4">
              <a href={item.href} className={ctaButtonClassName}>
                {item.text}
              </a>
            </div>
          );
        }
      })}
    </>
  );
};

// Sub-Components
function FAQItemButtons({
  faq,
  onVenueClick,
}: {
  faq: FAQItem;
  onVenueClick: () => void;
}) {
  return (
    <>
      {faq.showTdacButton && (
        <div className="mt-6 border-t border-slate-200 pt-4">
          <a href="#tdac-info" className={ctaButtonClassName}>
            View TDAC Information
          </a>
        </div>
      )}
      {faq.showVenueButton && (
        <div className={faq.showTdacButton ? "mt-3" : "mt-6 border-t border-slate-200 pt-4"}>
          <button onClick={onVenueClick} className={`${ctaButtonClassName} cursor-pointer`}>
            Learn More
          </button>
        </div>
      )}
      {faq.question === "What is the registration process?" && (
        <div className="mt-6 border-t border-slate-200 pt-4">
          <RegistrationDropdown
            buttonClassName={registerDropdownButtonClassName}
            panelClassName={registerDropdownPanelClassName}
            thailandClassName={thailandRegistrationClassName}
            internationalClassName={internationalRegistrationClassName}
            groupClass="group/register"
            wrapperClassName="relative inline-block"
            ariaLabel={{
              thailand: "Register for the Thailand conference",
              international: "Register for international attendees",
            }}
          />
        </div>
      )}
    </>
  );
}

// Main Component
export default function FAQSection() {
  const [venueModalOpen, setVenueModalOpen] = useState(false);

  return (
    <>
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
                  <div>{renderContent(faq.content)}</div>
                  <FAQItemButtons faq={faq} onVenueClick={() => setVenueModalOpen(true)} />
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={venueModalOpen}
        onClose={() => setVenueModalOpen(false)}
        title="The Grace Amphawa"
        imageUrl="/the_grace_amphawa.jpeg"
        imageAlt="The Grace Amphawa"
        description="Our conference venue located in Samut Songkhram province, approximately 1 hour from Bangkok. Experience the beautiful riverside setting for our April 23-26 conference."
        ctaButton={{
          text: "View on Google Maps",
          href: "https://maps.app.goo.gl/QRExM3U9soUWpNMc8",
        }}
      />
    </>
  );
}
