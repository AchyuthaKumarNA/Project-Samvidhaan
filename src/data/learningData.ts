export interface LearningTopic {
  id: string;
  title: string;
  icon: string;
  description: string;
  content: LearningSection[];
}

export interface LearningSection {
  heading: string;
  points: string[];
}

export const learningTopics: LearningTopic[] = [
  {
    id: "preamble",
    title: "The Preamble",
    icon: "📜",
    description: "The introduction to our Constitution that defines India's ideals",
    content: [
      {
        heading: "What is the Preamble?",
        points: [
          "The Preamble is the introduction to the Indian Constitution",
          "It declares India as a Sovereign, Socialist, Secular, Democratic Republic",
          "It promises Justice, Liberty, Equality, and Fraternity to all citizens",
          "It was adopted on November 26, 1949"
        ]
      },
      {
        heading: "Key Terms Explained",
        points: [
          "Sovereign: India is supreme and not controlled by any external power",
          "Socialist: The state works towards reducing inequality and providing welfare",
          "Secular: All religions are treated equally; no state religion",
          "Democratic: Government is elected by the people",
          "Republic: The head of state (President) is elected, not hereditary"
        ]
      },
      {
        heading: "The Promise to Citizens",
        points: [
          "Justice: Social, economic, and political fairness for all",
          "Liberty: Freedom of thought, expression, belief, faith, and worship",
          "Equality: Equal status and opportunities for everyone",
          "Fraternity: Brotherhood that ensures dignity of individuals and unity of the nation"
        ]
      }
    ]
  },
  {
    id: "fundamental-rights",
    title: "Fundamental Rights",
    icon: "⚖️",
    description: "The 6 basic rights guaranteed to every Indian citizen",
    content: [
      {
        heading: "Right to Equality (Articles 14-18)",
        points: [
          "Article 14: Equality before law and equal protection of laws",
          "Article 15: Prohibition of discrimination on grounds of religion, race, caste, sex, or place of birth",
          "Article 16: Equality of opportunity in public employment",
          "Article 17: Abolition of untouchability",
          "Article 18: Abolition of titles (except military and academic)"
        ]
      },
      {
        heading: "Right to Freedom (Articles 19-22)",
        points: [
          "Article 19: Six freedoms - speech, assembly, association, movement, residence, profession",
          "Article 20: Protection against conviction for offenses",
          "Article 21: Protection of life and personal liberty",
          "Article 21A: Right to free and compulsory education (6-14 years)",
          "Article 22: Protection against arrest and detention"
        ]
      },
      {
        heading: "Right Against Exploitation (Articles 23-24)",
        points: [
          "Article 23: Prohibition of human trafficking and forced labor",
          "Article 24: Prohibition of child labor in factories, mines, and hazardous employment"
        ]
      },
      {
        heading: "Right to Freedom of Religion (Articles 25-28)",
        points: [
          "Article 25: Freedom of conscience and free profession, practice, and propagation of religion",
          "Article 26: Freedom to manage religious affairs",
          "Article 27: Freedom from payment of taxes for promotion of any religion",
          "Article 28: Freedom from religious instruction in state-funded educational institutions"
        ]
      },
      {
        heading: "Cultural & Educational Rights (Articles 29-30)",
        points: [
          "Article 29: Protection of interests of minorities",
          "Article 30: Right of minorities to establish and administer educational institutions"
        ]
      },
      {
        heading: "Right to Constitutional Remedies (Article 32)",
        points: [
          "Article 32: Right to move the Supreme Court for enforcement of Fundamental Rights",
          "Dr. Ambedkar called this the 'heart and soul' of the Constitution",
          "Five types of writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto"
        ]
      }
    ]
  },
  {
    id: "fundamental-duties",
    title: "Fundamental Duties",
    icon: "🤝",
    description: "The 11 duties every citizen should follow",
    content: [
      {
        heading: "Introduction",
        points: [
          "Added by the 42nd Amendment in 1976 based on Swaran Singh Committee recommendations",
          "Listed in Article 51A under Part IVA of the Constitution",
          "Originally 10 duties, the 11th was added by 86th Amendment in 2002",
          "These are non-justiciable (cannot be enforced by courts) but morally binding"
        ]
      },
      {
        heading: "The 11 Fundamental Duties",
        points: [
          "1. Abide by the Constitution and respect the National Flag and National Anthem",
          "2. Cherish and follow the noble ideals that inspired our national struggle for freedom",
          "3. Uphold and protect the sovereignty, unity, and integrity of India",
          "4. Defend the country and render national service when called upon",
          "5. Promote harmony and the spirit of common brotherhood, renounce practices derogatory to women",
          "6. Value and preserve the rich heritage of our composite culture",
          "7. Protect and improve the natural environment including forests, lakes, rivers, and wildlife",
          "8. Develop scientific temper, humanism, and spirit of inquiry and reform",
          "9. Safeguard public property and abjure violence",
          "10. Strive towards excellence in all spheres of individual and collective activity",
          "11. Provide opportunities for education to children between 6-14 years (added in 2002)"
        ]
      }
    ]
  },
  {
    id: "directive-principles",
    title: "Directive Principles",
    icon: "🎯",
    description: "Guidelines for the government to make policies",
    content: [
      {
        heading: "What are DPSPs?",
        points: [
          "Directive Principles of State Policy are guidelines for governance",
          "Found in Part IV (Articles 36-51) of the Constitution",
          "Inspired by the Irish Constitution",
          "Non-justiciable but fundamental in governance",
          "Aim to establish a welfare state"
        ]
      },
      {
        heading: "Socialist Principles",
        points: [
          "Adequate means of livelihood for all citizens",
          "Fair distribution of wealth and resources",
          "Equal pay for equal work for both men and women",
          "Protection of workers' health and strength",
          "Protection of children from exploitation"
        ]
      },
      {
        heading: "Gandhian Principles",
        points: [
          "Organization of village panchayats",
          "Promotion of cottage industries",
          "Prohibition of intoxicating drinks and drugs",
          "Preservation and improvement of breeds of cattle",
          "Protection of monuments and places of national importance"
        ]
      },
      {
        heading: "Liberal-Intellectual Principles",
        points: [
          "Uniform civil code throughout India",
          "Free and compulsory education for children",
          "Separation of judiciary from executive",
          "Promotion of international peace and security"
        ]
      }
    ]
  },
  {
    id: "womens-rights",
    title: "Women's Rights",
    icon: "👩",
    description: "Constitutional protections for women in India",
    content: [
      {
        heading: "Constitutional Provisions",
        points: [
          "Article 14: Equality before law applies equally to women",
          "Article 15(1): Prohibits discrimination on grounds of sex",
          "Article 15(3): Allows state to make special provisions for women",
          "Article 16: Equal opportunity in public employment",
          "Article 39(a): Equal right to adequate means of livelihood",
          "Article 39(d): Equal pay for equal work"
        ]
      },
      {
        heading: "Key Laws for Women's Protection",
        points: [
          "Protection of Women from Domestic Violence Act, 2005",
          "Sexual Harassment of Women at Workplace Act, 2013 (Vishakha Guidelines)",
          "Dowry Prohibition Act, 1961",
          "Maternity Benefit Act, 1961",
          "The Criminal Law (Amendment) Act, 2013 (Nirbhaya Act)"
        ]
      },
      {
        heading: "Landmark Judgments",
        points: [
          "Vishakha vs State of Rajasthan (1997): Guidelines against workplace sexual harassment",
          "Shayara Bano vs Union of India (2017): Triple Talaq declared unconstitutional",
          "Joseph Shine vs Union of India (2018): Adultery law struck down as unconstitutional",
          "Secretary, Ministry of Defence vs Babita Puniya (2020): Permanent commission for women in Army"
        ]
      }
    ]
  },
  {
    id: "emergency-provisions",
    title: "Emergency Provisions",
    icon: "🚨",
    description: "Understanding when and how emergencies are declared",
    content: [
      {
        heading: "Types of Emergency",
        points: [
          "National Emergency (Article 352): Due to war, external aggression, or armed rebellion",
          "State Emergency/President's Rule (Article 356): Failure of constitutional machinery in states",
          "Financial Emergency (Article 360): Threat to financial stability of India"
        ]
      },
      {
        heading: "National Emergency (Article 352)",
        points: [
          "Can be proclaimed by President on written advice of Cabinet",
          "Must be approved by Parliament within one month",
          "Continues for 6 months, can be extended with Parliament approval",
          "Fundamental Rights under Article 19 are automatically suspended",
          "Has been declared 3 times: 1962 (China war), 1971 (Pakistan war), 1975 (internal disturbance)"
        ]
      },
      {
        heading: "44th Amendment Safeguards",
        points: [
          "Changed 'internal disturbance' to 'armed rebellion'",
          "President can only proclaim emergency on written advice of Cabinet",
          "Article 20 and 21 cannot be suspended even during emergency",
          "Proclamation can be reviewed by courts"
        ]
      }
    ]
  }
];
