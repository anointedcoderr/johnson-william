export type Resource = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  date: string;
  body: string[];
};

export const resources: Resource[] = [
  {
    slug: "what-to-bring-first-consultation",
    title: "What to Bring to Your First Legal Consultation",
    category: "Preparation",
    readTime: "4 minute read",
    excerpt:
      "A careful first conversation depends on the right documents and a clear summary of events. Here is what to gather before you arrive.",
    date: "Spring 2026",
    body: [
      "A first consultation is most useful when both sides come prepared. The lawyer needs facts, dates, and documents. The client needs clear answers, options, and a realistic plan.",
      "Bring a written summary of events with dates, the names of people involved, and any deadlines you are aware of. Include the documents that relate to the matter such as letters, contracts, court papers, financial records, and identification.",
      "If there has been correspondence with another party, bring the full exchange. Partial information often leads to incomplete advice. Where documents are large, organise them by date or topic so they can be reviewed quickly.",
      "Finally, write down the questions you want answered. A short list at the start of the meeting keeps the conversation focused and ensures nothing important is missed.",
    ],
  },
  {
    slug: "when-should-you-contact-a-lawyer",
    title: "When Should You Contact a Lawyer",
    category: "Guidance",
    readTime: "5 minute read",
    excerpt:
      "Reaching out early is often the difference between an avoidable problem and a manageable one. Here are signs that the time is now.",
    date: "Spring 2026",
    body: [
      "Many legal matters become harder the longer they wait. Documents are signed, statements are given, and deadlines pass. Reaching out early protects options.",
      "Speak with a lawyer when a letter arrives demanding action, when you are asked to sign a meaningful document, when a relationship or partnership begins to break down, or when you are approached by an authority.",
      "It is also wise to reach out before major life changes. Marriage, separation, a new child, the purchase of property, the launch of a business, or the loss of a loved one all bring legal questions.",
      "A short conversation early on often prevents a long matter later.",
    ],
  },
  {
    slug: "how-to-prepare-for-a-legal-matter",
    title: "How to Prepare for a Legal Matter",
    category: "Preparation",
    readTime: "6 minute read",
    excerpt:
      "Calm preparation makes the legal process clearer and easier to manage. A simple system goes a long way.",
    date: "Spring 2026",
    body: [
      "Start with a single folder or file for the matter, paper or digital. Keep every relevant document inside it, named by date and topic.",
      "Write a simple timeline that begins with the earliest relevant event. Add to it as you remember details or as new events occur. A clear timeline is one of the most valuable tools a lawyer receives.",
      "Note all conversations that relate to the matter, with date, time, who was present, and what was said. Save messages and emails in their original form.",
      "Avoid sharing details widely. The fewer people who know the details, the better the matter can be managed and protected.",
    ],
  },
  {
    slug: "why-clear-documentation-matters",
    title: "Why Clear Documentation Matters",
    category: "Practice",
    readTime: "4 minute read",
    excerpt:
      "Documents shape outcomes. Careful records, signed where required, often decide what a court or counterparty will accept.",
    date: "Spring 2026",
    body: [
      "When facts are in dispute, documents speak loudest. Written agreements, signed acknowledgements, dated letters, and saved messages create a record that does not change with memory.",
      "Verbal agreements are sometimes enforceable but are far harder to prove. Where a matter is important, write it down, share it with the other side, and keep the response.",
      "Where signatures are required, take care that the right people sign in the right places. A small slip can delay a closing, a court filing, or a registration.",
      "Good documentation is not paperwork for its own sake. It is the quiet foundation of every strong legal position.",
    ],
  },
  {
    slug: "common-mistakes-before-speaking-to-a-lawyer",
    title: "Common Mistakes People Make Before Speaking to a Lawyer",
    category: "Guidance",
    readTime: "5 minute read",
    excerpt:
      "A few avoidable steps protect options and avoid long delays. Here are the most common mistakes to watch out for.",
    date: "Spring 2026",
    body: [
      "Signing documents without a careful review. Once signed, many documents are difficult to undo. A short review beforehand is usually inexpensive and often essential.",
      "Sending strong messages in anger. Words sent in the heat of a moment often appear later in a court file. A pause and a calm response protect long term interests.",
      "Discussing the matter widely. The more people who know, the more chances there are for the wrong details to spread. Keep the circle small.",
      "Delaying. Many matters have deadlines, formal or practical. Acting early preserves the most options.",
    ],
  },
];

export function getResource(slug: string) {
  return resources.find((r) => r.slug === slug);
}
