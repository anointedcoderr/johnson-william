export type Attorney = {
  slug: string;
  name: string;
  credentials: string;
  title: string;
  image: string;
  imageAlt: string;
  practiceFocus: string[];
  education: string[];
  admissions: string[];
  memberships?: string[];
  bio: string[];
  highlights?: string[];
};

export const attorneys: Attorney[] = [
  {
    slug: "william-c-johnson-jr",
    name: "William C. Johnson, Jr.",
    credentials: "Esq., MBA, LL.M",
    title: "Principal Attorney",
    image: "/images/attorneys/william-johnson-jr.png",
    imageAlt: "Portrait of William C. Johnson, Jr.",
    practiceFocus: [
      "Consumer Protection",
      "Civil Rights",
      "Bankruptcy",
      "Real Estate and Mortgage",
      "Predatory Lending",
      "Mortgage Foreclosure Defense",
    ],
    education: [
      "LL.M in Taxation, Villanova University School of Law",
      "J.D./MBA, North Carolina Central University",
      "School of Business, North Carolina Central University",
      "Bachelor of Business Administration in Marketing, Howard University",
    ],
    admissions: [
      "State and federal courts, District of Columbia",
      "State and federal courts, Maryland",
      "United States District Court, District of Maryland",
      "United States District Court, District of Columbia",
      "United States Tax Court",
      "United States Supreme Court",
    ],
    memberships: [
      "NAACP",
      "National Urban League",
      "National Bar Association",
      "American Bar Association",
      "American Association for Justice",
      "District of Columbia Bar Association",
      "J. Franklyn Bourne Bar Association",
      "Washington Bar Association",
    ],
    bio: [
      "William C. Johnson, Jr. is a graduate of Howard University, North Carolina Central University School of Business, North Carolina Central University School of Law, and Villanova University School of Law. He received his LL.M in Taxation where his concentration focused upon the taxation of financial instruments. He received his J.D./MBA from North Carolina Central University, where he was the first recipient of the dual degree from the University. He served as the Law School Student Bar Association President. He is also an alumnus of Howard University, where he received a Bachelor in Business Administration in Marketing. He is admitted to practice law before state and federal courts in the District of Columbia and Maryland, the United States District Courts in the State of Maryland and for the District of Columbia, the United States Tax Court, and the United States Supreme Court. Mr. Johnson has been in private practice for almost eighteen years.",
      "Mr. Johnson focuses his practice in the area of Consumer Protection and Civil Rights. The Consumer Protection focus has created a strong background in the area of Bankruptcy, Real Estate, and Mortgage related transactions. His Civil Rights practice focuses upon balancing the inequities prevalent in today's society. His successful approach of dealing with \"Objective v. Subjective Racism\" has garnered wide acceptance in exposing and eradicating discriminatory bias. His Predatory Lending and Mortgage Foreclosure Defense practice has led to the creation of a unique and innovative approach to attaining relief for consumers. Mr. Johnson is the managing member of Johnson Financial Products, LLC, where he creates mortgage products dedicated to resolving the foreclosure problem inherent in the utilization of subprime and toxic mortgages.",
      "Mr. Johnson is a member of the NAACP, the National Urban League, the National Bar Association, the American Bar Association, the American Association for Justice, the District of Columbia Bar Association, the J. Franklyn Bourne Bar Association, and the Washington Bar Association. He is a regular speaker at the Legal Lines. Mr. Johnson has been a reference point as to the impact of foreclosures on African Americans and has contributed to such publications as Black Enterprise. He has also appeared on various radio programs such as the Eric Michael Dyson Radio Show and Law Talk with Ethel Mitchell to discuss predatory lending and mortgage foreclosure defense.",
    ],
    highlights: [
      "First recipient of the J.D./MBA dual degree at North Carolina Central University",
      "Former Law School Student Bar Association President",
      "Admitted to practice before the United States Supreme Court",
      "Featured in Black Enterprise and on national radio programs",
    ],
  },
  {
    slug: "william-c-johnson-iii",
    name: "William C. Johnson, III",
    credentials: "Esq.",
    title: "Associate Attorney",
    image: "/images/attorneys/william-johnson-iii.avif",
    imageAlt: "Portrait of William C. Johnson, III",
    practiceFocus: ["Civil Litigation", "Criminal Litigation"],
    education: [
      "J.D., North Carolina Central University School of Law",
      "Bachelor of Business Administration in Finance, Howard University",
    ],
    admissions: [
      "State and federal courts, Maryland",
      "Maryland Bar, admitted 2016",
    ],
    bio: [
      "William C. Johnson, III is a graduate of Howard University and North Carolina Central University School of Law. He received his J.D. from North Carolina Central University School of Law. He is also an alumnus of Howard University, where he received a Bachelor in Business Administration in Finance. He is admitted to practice law before state and federal courts in the State of Maryland. Mr. Johnson was admitted to the Maryland bar in 2016.",
      "Mr. Johnson focuses his practice in the area of Civil and Criminal Litigation.",
    ],
  },
];
