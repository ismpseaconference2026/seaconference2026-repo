"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import VideoPromoSection from "@/components/VideoPromoSection";
import ScheduleSection from "@/components/ScheduleSection";
import PackingListSection from "@/components/PackingListSection";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import { registrationLinks, schedules } from "@/lib/conference";

export default function Home() {
  const [isInThailand] = useState<boolean | null>(null);
  const [activeDay, setActiveDay] = useState("day1");

  const handleSignUp = (inThailand: boolean) => {
    window.open(
      inThailand ? registrationLinks.thailand : registrationLinks.international,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <NavigationBar />
      <HeroSection isInThailand={isInThailand} onSignUp={handleSignUp} />
      <InfoSection />
      <VideoPromoSection />
      <ScheduleSection schedules={schedules} activeDay={activeDay} onDayChange={setActiveDay} />
      <PackingListSection />
      <Footer />
    </main>
  );
}
