export type ScheduleEvent = {
  time: string;
  title: string;
  location: string;
};

export type ScheduleDay = {
  date: string;
  events: ScheduleEvent[];
};

export type ConferenceSchedule = Record<string, ScheduleDay>;

export const conferenceDates = "Thursday April 23 - Sunday April 26";
export const conferenceLocation = "Bangkok, Thailand";

export const registrationLinks = {
  thailand: "https://docs.google.com/forms/d/e/1FAIpQLSepAU0XP41ak7J53_-2-dUW_EXvZ4LoREgJPMGjvZ1MrzBuew/viewform",
  international: "https://docs.google.com/forms/d/e/1FAIpQLSf-J7l4OzvbPmbhnaiY-32Brrt2SUHMkxS7ljNA3VrZptQmfQ/viewform",
};

export const registrationOptions = [
  {
    href: registrationLinks.thailand,
    label: "Register (Thailand)",
    audience: "thailand",
  },
  {
    href: registrationLinks.international,
    label: "Register (International)",
    audience: "international",
  },
] as const;

export const schedules: ConferenceSchedule = {
  day1: {
    date: "Day 1 - Thursday - April 23, 2026",
    events: [
      { time: "19:00", title: "Arrival in Thailand", location: "Airports" },
      { time: "21:00", title: "Welcome and Registration", location: "The Grace Amphawa" },
    ],
  },
  day2: {
    date: "Day 2 - Friday - April 24, 2026",
    events: [
      { time: "07:00", title: "Breakfast", location: "Dining Hall" },
      { time: "08:00", title: "Orientation", location: "Conference Hall" },
      { time: "09:00", title: "Kaeng Krachan Outing", location: "Kaeng Krachan National Park" },
      { time: "12:00", title: "Lunch", location: "Kaeng Krachan National Park" },
      { time: "15:00", title: "Explore Amphawa Floating Market", location: "Amphawa Floating Market" },
      { time: "17:00", title: "Dinner", location: "Amphawa Floating Market" },
    ],
  },
  day3: {
    date: "Day 3 - Saturday - April 25, 2026",
    events: [
      { time: "07:00", title: "Breakfast", location: "Dining Hall" },
      { time: "08:00", title: "Plenary Session 1", location: "Assembly Hall" },
      { time: "11:00", title: "Lunch", location: "Dining Hall" },
      { time: "13:30", title: "Workshop Session 1", location: "Various Rooms" },
      { time: "14:30", title: "Workshop Session 2", location: "Dining Hall" },
      { time: "15:30", title: "Activities", location: "Assembly Hall" },
      { time: "18:00", title: "Dinner", location: "Dining Hall" },
      { time: "19:00", title: "Plenary Session 2", location: "Assembly Hall" },
    ],
  },
  day4: {
    date: "Day 4 - Sunday - April 26, 2026",
    events: [
      { time: "08:00", title: "Check-Out", location: "Dining Hall" },
      { time: "08:30", title: "Breakfast", location: "Dining Hall" },
      { time: "09:00", title: "Workshop Session 3", location: "Assembly Hall" },
      { time: "10:00", title: "Plenary Session 3", location: "Assembly Hall" },
      { time: "12:00", title: "Lunch", location: "Dining Hall" },
      { time: "13:00", title: "Closing Session", location: "Assembly Hall" },
      { time: "15:00", title: "Departure and Travel", location: "The Grace Amphawa" },
    ],
  },
};

export const packingList = [
  "Valid Passport",
  "Notebook",
  "Pen",
  "Bible",
  "Water bottle",
  "Extra cash¹",
  "Shower slippers",
  "Sports clothes and shoes",
  "Clothes for 3 days and 2 nights²",
  "Pajamas",
  "Hat",
  "Sunscreen",
  "Bug spray",
];

export const packingFootnotes = [
  "250-300 baht for dinner and market shopping should be enough.",
  "No tight-fitting, low-cut, sleeveless, or crop-top shirts; bottoms must be longer than mid-thigh.",
];
