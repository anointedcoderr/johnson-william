export const firm = {
  firmName: "The Johnson Law Group, LLC",
  shortName: "Johnson Law Group",
  lawyerName: "Lead Attorney",
  attorneyTitle: "Principal Attorney",
  tagline: "Trusted legal guidance when the outcome matters.",
  phone: "(301) 477-3450",
  email: "info@johnsonlg.law",
  address: {
    line1: "6305 Ivy Lane",
    line2: "Suite 630",
    city: "Greenbelt, MD",
    postal: "20770",
  },
  jurisdiction: "Maryland",
  officeHours: [
    { day: "Monday to Friday", hours: "9:00 AM to 6:00 PM" },
    { day: "Saturday", hours: "By appointment" },
    { day: "Sunday", hours: "Closed" },
  ],
  consultationType: ["In person", "Virtual", "Telephone"],
  socialLinks: {
    linkedin: "#",
  },
  rssCredit: {
    label: "Website built by RSS World Network",
    email: "info@rssworldnet.work",
    whatsapp: "https://wa.me/+2349014870002",
  },
} as const;

export type Firm = typeof firm;
