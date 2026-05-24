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
    slug: "bankruptcy",
    title: "Bankruptcy",
    shortTitle: "Bankruptcy",
    summary:
      "Careful guidance through Chapter 7 and Chapter 13 to protect what is important and reset financial footing.",
    headline: "A Considered Path Through Bankruptcy",
    intro:
      "Bankruptcy can feel overwhelming, but the law provides clear tools to address overwhelming debt, stop collection pressure, and protect essential assets. The firm guides each client through the options with patience and honesty.",
    whoFor: [
      "Individuals struggling with credit card or medical debt",
      "Homeowners facing repossession or wage garnishment",
      "Families seeking a fresh financial start",
      "Small business owners reorganising personal liabilities",
    ],
    problemsHandled: [
      "Chapter 7 liquidation",
      "Chapter 13 repayment plans",
      "Means test review",
      "Creditor harassment protection",
      "Discharge of qualifying debts",
      "Asset and exemption planning",
    ],
    howWeHelp: [
      "Confidential review of income, debts, and assets",
      "Clear explanation of which chapter fits the situation",
      "Preparation of accurate, complete filings",
      "Representation at the meeting of creditors",
      "Steady communication through the discharge",
    ],
    process: [
      { step: "Consultation", detail: "Review the full financial picture in confidence." },
      { step: "Chapter selection", detail: "Identify whether Chapter 7 or Chapter 13 is the better fit." },
      { step: "Filing", detail: "Prepare and submit the petition with full schedules." },
      { step: "Discharge", detail: "Appear at the trustee meeting and pursue final relief." },
    ],
    faqs: [
      {
        q: "Will I lose everything if I file for bankruptcy?",
        a: "Most clients keep essential assets such as a home, a vehicle, retirement accounts, and household items through state and federal exemptions. The strategy is built around what you need to keep.",
      },
      {
        q: "Will bankruptcy stop creditor calls and lawsuits?",
        a: "An automatic stay takes effect the moment the case is filed. Most collection activity stops immediately, including wage garnishments and most lawsuits.",
      },
    ],
  },
  {
    slug: "foreclosure",
    title: "Foreclosure",
    shortTitle: "Foreclosure",
    summary:
      "Steady defence against foreclosure with practical options to protect your home and negotiate with the lender.",
    headline: "Defence and Options When Your Home Is at Risk",
    intro:
      "A foreclosure notice is not the end of the road. There are often more options than homeowners realise. The firm reviews the loan, identifies defences, and explores alternatives that can keep families in their homes or exit the property on better terms.",
    whoFor: [
      "Homeowners who have received a notice of default",
      "Borrowers behind on mortgage payments",
      "Families seeking loan modification or workout options",
      "Owners exploring short sale or deed in lieu",
    ],
    problemsHandled: [
      "Foreclosure defence",
      "Loan modification",
      "Short sale negotiation",
      "Deed in lieu of foreclosure",
      "Mortgage servicer disputes",
      "Stay of foreclosure proceedings",
    ],
    howWeHelp: [
      "Review of the loan, servicing record, and notices",
      "Identification of procedural and substantive defences",
      "Negotiation with the lender or servicer",
      "Coordination with bankruptcy options when appropriate",
      "Court representation where needed",
    ],
    process: [
      { step: "Review", detail: "Examine the loan documents and the notice received." },
      { step: "Strategy", detail: "Outline defences and workout options realistically." },
      { step: "Negotiation", detail: "Engage the lender to pursue the best available outcome." },
      { step: "Resolution", detail: "Finalise a modification, sale, or court resolution." },
    ],
    faqs: [
      {
        q: "How soon should I contact a lawyer after a foreclosure notice?",
        a: "As early as possible. The sooner the file is reviewed, the more options remain available, both with the lender and in court.",
      },
      {
        q: "Can bankruptcy help stop a foreclosure?",
        a: "In many cases, yes. The automatic stay can halt a scheduled sale, giving time to evaluate longer term solutions.",
      },
    ],
  },
  {
    slug: "pharmaceutical-liability",
    title: "Pharmaceutical Liability",
    shortTitle: "Pharmaceutical Liability",
    summary:
      "Representation for individuals harmed by defective drugs, undisclosed side effects, and unsafe medical products.",
    headline: "Accountability for Harm Caused by Unsafe Medications",
    intro:
      "When a medication causes serious harm, the path to accountability is rarely simple. The firm represents individuals and families injured by defective drugs, dangerous side effects, and inadequate warnings, building a careful case against the parties responsible.",
    whoFor: [
      "Patients injured by a prescription or over the counter drug",
      "Families who have lost a loved one to a defective medication",
      "Individuals affected by a recalled drug",
      "Claimants in mass tort or multidistrict litigation",
    ],
    problemsHandled: [
      "Defective drug injury claims",
      "Failure to warn of side effects",
      "Drug recall litigation",
      "Manufacturer negligence",
      "Pharmacy errors",
      "Medical device claims linked to medication",
    ],
    howWeHelp: [
      "Confidential review of medical records and prescriptions",
      "Coordination with medical and pharmacological experts",
      "Preservation of evidence and timely filing",
      "Negotiation with manufacturers and insurers",
      "Representation through trial when needed",
    ],
    process: [
      { step: "Intake", detail: "Gather the medical history and the drugs involved." },
      { step: "Investigation", detail: "Work with experts to establish the link to harm." },
      { step: "Claim", detail: "File suit and pursue discovery against the responsible parties." },
      { step: "Resolution", detail: "Negotiate settlement or proceed to trial as needed." },
    ],
    faqs: [
      {
        q: "Do I have a case if the drug was approved by the FDA?",
        a: "Approval does not block every claim. Manufacturers can still be held responsible for failure to warn, defective design, or marketing fraud.",
      },
      {
        q: "How long do I have to file a pharmaceutical claim?",
        a: "Time limits vary by state and by the nature of the injury. A prompt review is important to preserve evidence and protect deadlines.",
      },
    ],
  },
  {
    slug: "wrongful-death",
    title: "Wrongful Death",
    shortTitle: "Wrongful Death",
    summary:
      "Compassionate, deliberate representation for families pursuing accountability after the loss of a loved one.",
    headline: "Steady Representation After a Life Has Been Taken",
    intro:
      "After a wrongful death, families often face grief, financial pressure, and difficult questions all at once. The firm steps in with patience and care, takes on the legal burden, and pursues the parties responsible with disciplined preparation.",
    whoFor: [
      "Spouses, children, and parents of a deceased loved one",
      "Estates pursuing survival actions",
      "Families navigating insurance and benefit claims",
      "Beneficiaries seeking accountability for negligent or wrongful conduct",
    ],
    problemsHandled: [
      "Wrongful death claims",
      "Survival actions",
      "Negligence and recklessness cases",
      "Insurance and benefit recovery",
      "Lost income and support claims",
      "Pain and suffering damages",
    ],
    howWeHelp: [
      "Private, careful intake with the family",
      "Coordination with investigators and experts",
      "Preservation of records, scenes, and evidence",
      "Negotiation with insurers and counsel",
      "Trial preparation where settlement is not appropriate",
    ],
    process: [
      { step: "Listening", detail: "Begin with a quiet conversation about what happened." },
      { step: "Investigation", detail: "Gather records, photographs, and expert input." },
      { step: "Claim", detail: "File the appropriate wrongful death and survival actions." },
      { step: "Resolution", detail: "Pursue settlement or trial to a careful conclusion." },
    ],
    faqs: [
      {
        q: "Who can bring a wrongful death claim?",
        a: "Generally a spouse, child, or parent, or the personal representative of the estate. The specifics depend on state law and the relationships involved.",
      },
      {
        q: "How long do these cases usually take?",
        a: "Timelines vary widely. Some matters resolve within months. More complex cases can take years. A realistic estimate is given after the first careful review.",
      },
    ],
  },
  {
    slug: "personal-injury",
    title: "Personal Injury",
    shortTitle: "Personal Injury",
    summary:
      "Disciplined representation for clients injured by the negligence of others, with focused attention to recovery.",
    headline: "Representation After a Serious Injury",
    intro:
      "A serious injury changes daily life, finances, and the future. The firm represents clients injured by the carelessness of others, building cases on solid evidence and honest assessments rather than promises.",
    whoFor: [
      "Drivers and passengers injured in motor vehicle accidents",
      "Pedestrians struck by negligent drivers",
      "Individuals injured in slip and fall or premises matters",
      "Workers injured outside the workers compensation system",
    ],
    problemsHandled: [
      "Motor vehicle accidents",
      "Slip and fall and premises liability",
      "Negligent security claims",
      "Dog bite and animal attack claims",
      "Catastrophic injury matters",
      "Insurance bad faith and underpayment",
    ],
    howWeHelp: [
      "Prompt scene preservation and evidence gathering",
      "Coordination with medical providers and experts",
      "Documentation of damages and long term impact",
      "Negotiation with insurers from a position of preparation",
      "Litigation through trial when warranted",
    ],
    process: [
      { step: "Intake", detail: "Understand the incident, the injuries, and the impact." },
      { step: "Investigation", detail: "Secure evidence, records, and expert input." },
      { step: "Demand", detail: "Present a documented claim to the insurer." },
      { step: "Resolution", detail: "Settle on fair terms or move to trial as needed." },
    ],
    faqs: [
      {
        q: "Should I speak to the insurance company on my own?",
        a: "Speak with a lawyer before giving a recorded statement. Early statements often shape what an insurer is willing to pay later.",
      },
      {
        q: "How are fees handled?",
        a: "Personal injury matters are commonly handled on a contingency basis. Fee arrangements are explained in writing before any engagement.",
      },
    ],
  },
  {
    slug: "truck-accidents",
    title: "Truck Accidents",
    shortTitle: "Truck Accidents",
    summary:
      "Focused representation for victims of commercial truck collisions, with attention to federal trucking standards.",
    headline: "Cases That Demand a Careful, Determined Approach",
    intro:
      "Commercial truck collisions cause serious injuries and involve multiple potentially responsible parties. The firm investigates the driver, the carrier, maintenance records, and federal compliance to build a complete claim.",
    whoFor: [
      "Drivers and passengers struck by a commercial truck",
      "Families of those killed in a trucking collision",
      "Pedestrians and cyclists injured by commercial vehicles",
      "Anyone facing pushback from a trucking insurer",
    ],
    problemsHandled: [
      "Tractor trailer collisions",
      "Delivery truck and box truck claims",
      "Driver fatigue and hours of service violations",
      "Improperly loaded or shifting cargo",
      "Maintenance and equipment failure",
      "Carrier and broker liability",
    ],
    howWeHelp: [
      "Rapid preservation of black box and driver log data",
      "Inspection of the vehicle, route, and maintenance records",
      "Review of federal motor carrier compliance",
      "Coordination with reconstruction experts",
      "Pressure on carriers and their insurers to value the claim correctly",
    ],
    process: [
      { step: "Preservation", detail: "Send notices to preserve trucking data and records." },
      { step: "Investigation", detail: "Build the picture from logs, inspections, and witnesses." },
      { step: "Claim", detail: "Pursue every responsible party, not only the driver." },
      { step: "Resolution", detail: "Negotiate or try the case to a final outcome." },
    ],
    faqs: [
      {
        q: "Why is a truck case different from a regular car accident case?",
        a: "Trucking is heavily regulated. Logs, inspections, training records, and federal rules can each become an important part of proving fault.",
      },
      {
        q: "What should I do right after a truck collision?",
        a: "Get medical attention, document the scene and the vehicles if you safely can, and contact a lawyer quickly. Trucking data can be overwritten if not preserved.",
      },
    ],
  },
];

export function getPracticeArea(slug: string) {
  return practiceAreas.find((p) => p.slug === slug);
}
