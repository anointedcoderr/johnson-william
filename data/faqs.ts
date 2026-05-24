export type FAQ = { q: string; a: string };

export const faqGroups: { title: string; items: FAQ[] }[] = [
  {
    title: "Consultation",
    items: [
      {
        q: "Is my consultation confidential?",
        a: "Yes. Consultations are private. Information shared with the firm is treated with discretion and held in confidence as the law allows.",
      },
      {
        q: "Do you offer virtual consultations?",
        a: "Yes. Consultations can be held in person, by telephone, or by secure video, depending on what works best for the client.",
      },
      {
        q: "Will contacting the firm create a lawyer client relationship?",
        a: "Initial contact does not by itself create a lawyer client relationship. A formal relationship begins after a conflict check and a signed retainer.",
      },
    ],
  },
  {
    title: "Fees and Process",
    items: [
      {
        q: "How much does a consultation cost?",
        a: "Consultation fees vary by matter. Costs are explained clearly before any appointment so there are no surprises.",
      },
      {
        q: "How long will my case take?",
        a: "Timelines depend on the type of matter, the court schedule, and how prepared each side is. A realistic timeline is shared after the first review.",
      },
    ],
  },
  {
    title: "Confidentiality",
    items: [
      {
        q: "Who will see the information I share?",
        a: "Only members of the firm working on your matter. Information is not shared outside the firm without permission, except where the law requires it.",
      },
    ],
  },
  {
    title: "Documents",
    items: [
      {
        q: "What documents should I bring?",
        a: "Bring anything related to the matter such as letters, contracts, court documents, identification, and a written summary of events with dates where possible.",
      },
    ],
  },
  {
    title: "Communication",
    items: [
      {
        q: "Can you help with urgent matters?",
        a: "Yes. Urgent matters are prioritised based on deadlines, court dates, and the nature of the issue.",
      },
      {
        q: "How will I receive updates?",
        a: "Clients are updated by email, telephone, or in person as the matter progresses. Significant developments are communicated promptly.",
      },
    ],
  },
];

export const homeFaqs: FAQ[] = [
  {
    q: "Is my consultation confidential?",
    a: "Yes. Consultations are private. Information shared with the firm is treated with discretion and held in confidence as the law allows.",
  },
  {
    q: "What should I bring to my first consultation?",
    a: "Anything related to the matter such as letters, contracts, court documents, identification, and a short written summary of events.",
  },
  {
    q: "Do you offer virtual consultations?",
    a: "Yes. Consultations can be held in person, by telephone, or by secure video.",
  },
  {
    q: "How long does a legal matter usually take?",
    a: "It depends on the type of matter and the steps involved. A realistic timeline is shared after the first review.",
  },
  {
    q: "What happens after I contact the firm?",
    a: "We arrange a private conversation to understand the matter, then outline the options and a clear next step.",
  },
];
