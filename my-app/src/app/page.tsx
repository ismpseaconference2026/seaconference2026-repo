"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import VideoPromoSection from "@/components/VideoPromoSection";
import ScheduleSection from "@/components/ScheduleSection";
import TravelChecklistSection from "@/components/PackingListSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import { schedules } from "@/lib/conference";

export default function Home() {
  const [activeDay, setActiveDay] = useState("day1");

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <NavigationBar />
      <HeroSection />
      <InfoSection />
      <VideoPromoSection />
      <ScheduleSection schedules={schedules} activeDay={activeDay} onDayChange={setActiveDay} />
      <TravelChecklistSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
