export const firm = {
  firmName: "Johnson William Law",
  shortName: "Johnson William",
  lawyerName: "Johnson William",
  attorneyTitle: "Principal Attorney",
  tagline: "Trusted legal guidance when the outcome matters.",
  phone: "+1 (000) 000 0000",
  email: "anointedcoder@gmail.com",
  address: {
    line1: "Office Address Placeholder",
    line2: "Suite Number, Floor",
    city: "City, State",
    postal: "Postal Code",
  },
  jurisdiction: "Jurisdiction Placeholder",
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
