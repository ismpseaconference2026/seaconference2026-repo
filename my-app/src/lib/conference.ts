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

export const videoPromo = {
  src: "/promoVideo.mp4",
  poster: "/ISMP_conference_promo_poster.jpeg",
};

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
      { time: "08:00", title: "Breakfast", location: "Breakfast Hall" },
      { time: "09:00", title: "Orientation", location: "Conference Hall" },
      { time: "10:00", title: "Kaeng Krachan Outing", location: "Kaeng Krachan National Park" },
      { time: "12:30", title: "Lunch", location: "Kaeng Krachan National Park" },
      { time: "15:00", title: "Explore Amphawa Floating Market", location: "Amphawa Floating Market" },
      { time: "17:00", title: "Dinner", location: "Amphawa Floating Market" },
    ],
  },
  day3: {
    date: "Day 3 - Saturday - April 25, 2026",
    events: [
      { time: "07:00", title: "Breakfast", location: "Breakfast Hall" },
      { time: "08:00", title: "Plenary Session 1", location: "Conference Hall" },
      { time: "12:00", title: "Lunch", location: "Conference Hall" },
      { time: "14:00", title: "Workshop Session 1", location: "Conference Hall" },
      { time: "15:00", title: "Workshop Session 2", location: "Conference Hall" },
      { time: "16:30", title: "Dinner", location: "Conference Hall" },
      { time: "17:30", title: "Plenary Session 2", location: "Conference Hall" },
    ],
  },
  day4: {
    date: "Day 4 - Sunday - April 26, 2026",
    events: [
      { time: "07:00", title: "Check-Out", location: "Conference Hall" },
      { time: "07:00", title: "Breakfast", location: "Breakfast Hall" },
      { time: "08:00", title: "Workshop Session 3", location: "Conference Hall" },
      { time: "09:00", title: "Plenary Session 3", location: "Conference Hall" },
      { time: "11:00", title: "Lunch", location: "Conference Hall" },
      { time: "12:00", title: "Plenary Session 4", location: "Conference Hall" },
      { time: "15:30", title: "Departure and Travel", location: "The Grace Amphawa" },
      { time: "18:00", title: "Dinner", location: "Samut Sakhon" },
    ],
  },
};

export const packingList = [
  "Valid Passport",
  "Bible",
  "Water bottle",
  "Extra cash¹",
  "Shower slippers",
  "Sports clothes and shoes",
  "Clothes for 3 days and 3 nights²",
  "Pajamas",
  "Hat",
  "Sunscreen",
  "Bug spray",
];

export const packingFootnotes = [
  "฿250-300 for dinner and market shopping should be enough.",
  "No tight-fitting, low-cut, sleeveless, or crop-top shirts; bottoms must be longer than mid-thigh.",
];

export const tdacInfo = {
  title: "International Travelers - Thai Customs Declaration (TDAC)",
  requirement: "Fill out TDAC form for customs declaration",
  details: [
    { label: "Purpose of Travel", value: "CONVENTION" },
    { label: "Type of Accommodation", value: "HOTEL" },
    { label: "Province", value: "SAMUT SONGKHRAM" },
    { label: "Address", value: "THE GRACE AMPHAWA, 26 TAMBON BAN PROK, MUEANG SAMUT SONGKHRAM 75000" },
  ],
};

export const canvaInfo = {
  title: "Canva Slides Assignment",
  requirement: "Create slides from our Canva template and submit to the form",
  canvaTemplateLink: "https://canva.link/ene1ruv1b9lm0wu",
  formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfNGG8qZ99zKcxfoex8ZpfBMRhSfZWLhwTnY8T4ZMUj23r7FQ/viewform", 
  instructions: [
    "Visit the Canva template link and make a copy of the template to your own Canva account",
    "Fill out the slides with your information and creativity",
    "Download your completed slides as a PDF and upload to the form",
  ],
};

export const workshopInfo = {
  title: "Workshop Signups",
  requirement: "Sign up for workshops during the conference by filling out the form",
  workshopGoogleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLScMPDo2_Iqh9s_T0wvvNrIcXNw_lnCfEHoJhT2ITK8-TczRAg/viewform"
}

export const contactInfo = {
  email: "ismpthailand@gmail.com",
  cc: "aj@internationalmentorship.org",
  subject: "SEA Conference 2026 Inquiry",
};

export const socialLinks = {
  instagram: "https://www.instagram.com/ismp_seacon/",
  spotify: "https://open.spotify.com/playlist/0rGDwChR3pzIJ61FuZdKXC?si=78c65d333ca24ce1",
};

export const announcementsList = [
  {
    title: "Workshops Sign Up Form",
    message: "Sign ups for conference workshops are now open. Please fill out the form to indicate which workshops you would like to attend.",
    date: "April 22, 2026",
    cta: {
      text: "View Form",
      href: workshopInfo.workshopGoogleFormLink,
    },
  },
  {
    title: "Travel Information Update",
    message: "International travelers: travel information between the conference and the Thailand airport has been communicated to your mentors. Please reach out to your mentors if you have any questions.\nThailand attendees: travel information to and from the conference has been communicated through the LINE group. Please reach out to a mentor if you are not in the LINE group.",
    date: "April 22, 2026",
  },
  {
    title: "Canva Slides Assignment",
    message: "Please complete the Canva slides assignment as part of your conference preparation. Fill out the template with your information, download it as a PDF, and upload it to the form. This is a required pre-conference submission.",
    cta: {
      text: "View Assignment",
      href: "#canva-assignment",
    },
    date: "April 20, 2026",
  },
  {
    title: "Registration Reminder",
    message: "Don't forget to register for the conference! We have separate registration forms for Thailand-based and international participants. Please complete your registration as soon as possible.",
    date: "April 19, 2026",
  },
  {
    title: "Welcome to SEA Conference 2026",
    message: "We are excited to welcome you to the ISMP Southeast Asian Conference 2026! The conference will be held at The Grace Amphawa in Bangkok, Thailand from April 23-26.",
    date: "April 19, 2026",
  },
];
