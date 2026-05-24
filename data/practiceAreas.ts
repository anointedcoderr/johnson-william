export type PracticeArea = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  headline: string;
  intro: string;
  whoFor: string[];
  problemsHandled: string[];
  howWeHelp: string[];
  process: { step: string; detail: string }[];
  faqs: { q: string; a: string }[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "family-law",
    title: "Family Law",
    shortTitle: "Family Law",
    summary:
      "Sensitive guidance through divorce, custody, support, and separation, with careful attention to long term outcomes.",
    headline: "Family Law Guidance With Clarity and Care",
    intro:
      "Family legal matters touch every part of life. The firm works closely with each client to understand the situation, protect what is important, and reach a resolution that supports the road ahead.",
    whoFor: [
      "Spouses considering separation or divorce",
      "Parents navigating custody and parenting time",
      "Individuals seeking spousal or child support",
      "Families dividing property or finalising agreements",
    ],
    problemsHandled: [
      "Divorce and separation",
      "Child custody and parenting time",
      "Child support and spousal support",
      "Property division and matrimonial assets",
      "Separation agreements",
      "Post resolution variations",
    ],
    howWeHelp: [
      "Confidential review of your situation",
      "Honest assessment of options and risk",
      "Preparation of clear, careful documentation",
      "Negotiation focused on workable outcomes",
      "Representation in court when needed",
    ],
    process: [
      { step: "Consultation", detail: "Discuss the facts and goals in a private setting." },
      { step: "Review", detail: "Examine documents, finances, and parenting details." },
      { step: "Strategy", detail: "Outline a realistic path with timelines and costs." },
      { step: "Action", detail: "Negotiate, draft, or appear in court as required." },
    ],
    faqs: [
      {
        q: "How long does a typical family matter take?",
        a: "It depends on cooperation between parties and court schedules. Most matters are resolved over several months, with some moving faster through negotiation.",
      },
      {
        q: "Will my matter need to go to court?",
        a: "Many family matters resolve through negotiation or mediation. Court is used when it is the best route to protect a client's interests.",
      },
    ],
  },
  {
    slug: "immigration-law",
    title: "Immigration Law",
    shortTitle: "Immigration Law",
    summary:
      "Careful preparation for visas, residence, sponsorship, and work authorisation matters that shape your future.",
    headline: "Clear Immigration Support for Important Life Decisions",
    intro:
      "Immigration decisions affect families, careers, and futures. The firm focuses on accurate applications, complete documentation, and steady communication throughout each step.",
    whoFor: [
      "Individuals applying for visas or permits",
      "Families sponsoring relatives",
      "Professionals relocating for work",
      "Students preparing study applications",
    ],
    problemsHandled: [
      "Visa applications",
      "Permanent residence",
      "Family sponsorship",
      "Work permits",
      "Study permits",
      "Immigration appeals where applicable",
    ],
    howWeHelp: [
      "Eligibility review and route selection",
      "Document preparation and verification",
      "Application submission and follow up",
      "Response to requests for further information",
      "Representation in appeals where available",
    ],
    process: [
      { step: "Eligibility", detail: "Confirm available routes and key requirements." },
      { step: "Documents", detail: "Gather and review supporting materials." },
      { step: "Submission", detail: "File the application with full preparation." },
      { step: "Outcome", detail: "Respond to requests and pursue appeals when needed." },
    ],
    faqs: [
      {
        q: "Can you help if my application was already refused?",
        a: "In many cases, yes. A careful review of the refusal letter and your file is the first step.",
      },
      {
        q: "Do you assist with urgent immigration matters?",
        a: "Yes. Time sensitive matters are prioritised based on filing deadlines and travel needs.",
      },
    ],
  },
  {
    slug: "criminal-defence",
    title: "Criminal Defence",
    shortTitle: "Criminal Defence",
    summary:
      "Composed, strategic defence when liberty, reputation, and future opportunities are on the line.",
    headline: "Strategic Defence When Your Rights and Future Are at Stake",
    intro:
      "A criminal charge changes everything. Calm preparation, careful review of the evidence, and steady representation often make the difference between a difficult outcome and a manageable one.",
    whoFor: [
      "Individuals facing charges",
      "Clients awaiting bail decisions",
      "Those preparing for trial",
      "Anyone seeking advice on rights at arrest or interview",
    ],
    problemsHandled: [
      "Charges review and assessment",
      "Bail support and release plans",
      "Court preparation",
      "Negotiation with prosecution",
      "Trial representation",
      "Protection of constitutional and procedural rights",
    ],
    howWeHelp: [
      "Confidential review of the file and disclosure",
      "Clear explanation of charges, options, and risk",
      "Strategy for negotiation or trial",
      "Steady presence at every appearance",
      "Careful protection of your record where possible",
    ],
    process: [
      { step: "Intake", detail: "Discuss what happened and what was said." },
      { step: "Disclosure", detail: "Obtain and review the prosecution file." },
      { step: "Strategy", detail: "Identify defences and resolution options." },
      { step: "Representation", detail: "Appear, negotiate, and advocate at every stage." },
    ],
    faqs: [
      {
        q: "Should I speak to the police on my own first?",
        a: "It is wise to speak with a lawyer before giving any statement. What is said early can shape the rest of the matter.",
      },
      {
        q: "Will the matter become public?",
        a: "Court records are generally public, but careful handling can reduce exposure and protect privacy where the law allows.",
      },
    ],
  },
  {
    slug: "real-estate-law",
    title: "Real Estate Law",
    shortTitle: "Real Estate Law",
    summary:
      "Reliable legal support for purchases, sales, leases, closings, and property disputes of every size.",
    headline: "Legal Support for Property Transactions and Disputes",
    intro:
      "Property matters involve significant value and detailed documents. The firm reviews carefully, closes properly, and protects clients from avoidable risks.",
    whoFor: [
      "Buyers and sellers of residential property",
      "Commercial investors and landlords",
      "Tenants reviewing significant leases",
      "Owners facing title or boundary issues",
    ],
    problemsHandled: [
      "Purchase and sale agreements",
      "Closing support",
      "Title review",
      "Lease matters",
      "Property disputes",
      "Mortgage documentation",
    ],
    howWeHelp: [
      "Contract review before signing",
      "Title and registry checks",
      "Coordination with lenders and agents",
      "Document preparation and execution",
      "Representation in property related disputes",
    ],
    process: [
      { step: "Review", detail: "Examine the contract and key conditions." },
      { step: "Diligence", detail: "Check title, encumbrances, and obligations." },
      { step: "Closing", detail: "Coordinate signing, funds, and registration." },
      { step: "After", detail: "Hold records and assist with any post closing matters." },
    ],
    faqs: [
      {
        q: "When should I bring a lawyer into the deal?",
        a: "As early as possible. A short review before signing often prevents bigger problems later.",
      },
      {
        q: "Do you handle commercial as well as residential matters?",
        a: "Yes. Both are handled with the same careful attention to documents and timing.",
      },
    ],
  },
  {
    slug: "business-law",
    title: "Business Law",
    shortTitle: "Business Law",
    summary:
      "Practical legal support for founders, owners, and growing companies navigating contracts, formation, and disputes.",
    headline: "Practical Legal Guidance for Businesses and Entrepreneurs",
    intro:
      "Sound legal foundations protect what a business is building. The firm assists with formation, contracts, and the everyday decisions that shape long term stability.",
    whoFor: [
      "Founders preparing to incorporate",
      "Owners drafting or reviewing contracts",
      "Partners structuring or restructuring ownership",
      "Companies facing commercial disputes",
    ],
    problemsHandled: [
      "Contracts and agreements",
      "Business formation and structure",
      "Shareholder and partnership agreements",
      "Commercial disputes",
      "Compliance basics",
      "Transaction support",
    ],
    howWeHelp: [
      "Plain language review of obligations",
      "Drafting that fits the actual business",
      "Negotiation with counterparties",
      "Risk identification before signing",
      "Steady advice as the business grows",
    ],
    process: [
      { step: "Discovery", detail: "Understand the business, parties, and goals." },
      { step: "Drafting", detail: "Prepare or review documents with care." },
      { step: "Negotiation", detail: "Refine terms to fit the deal." },
      { step: "Execution", detail: "Sign, file, and record as required." },
    ],
    faqs: [
      {
        q: "Do I need a formal agreement with my partner?",
        a: "A written agreement protects both sides and prevents avoidable disputes. It is one of the most useful documents a partnership can have.",
      },
      {
        q: "Can you review contracts sent by another party?",
        a: "Yes. Many engagements begin with a focused review of a document already on the table.",
      },
    ],
  },
  {
    slug: "estate-planning",
    title: "Estate Planning",
    shortTitle: "Estate Planning",
    summary:
      "Thoughtful planning for wills, trusts, and the protection of family and assets across the long term.",
    headline: "Protect Your Wishes, Your Family, and Your Future",
    intro:
      "A well prepared estate plan brings clarity to loved ones and protects what has been built. The firm prepares documents that reflect each client's values and circumstances.",
    whoFor: [
      "Adults preparing a first will",
      "Parents planning for children",
      "Families updating older documents",
      "Executors managing an estate",
    ],
    problemsHandled: [
      "Wills",
      "Trusts",
      "Powers of attorney",
      "Estate administration",
      "Probate guidance",
      "Family planning matters",
    ],
    howWeHelp: [
      "Private conversation about wishes and family",
      "Review of assets and beneficiaries",
      "Drafting clear, lawful documents",
      "Guidance for executors and trustees",
      "Updates as circumstances change",
    ],
    process: [
      { step: "Conversation", detail: "Understand wishes, family, and assets." },
      { step: "Plan", detail: "Outline the documents that fit." },
      { step: "Draft", detail: "Prepare wills, powers, and trust documents." },
      { step: "Signing", detail: "Witness and store the executed documents." },
    ],
    faqs: [
      {
        q: "How often should I update my will?",
        a: "After major life events such as marriage, separation, a new child, a death in the family, or significant changes in assets.",
      },
      {
        q: "What is a power of attorney for and why do I need one?",
        a: "It allows a trusted person to act on your behalf if you cannot. It is one of the most overlooked but important documents.",
      },
    ],
  },
];

export function getPracticeArea(slug: string) {
  return practiceAreas.find((p) => p.slug === slug);
}
