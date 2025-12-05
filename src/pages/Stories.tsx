import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Scale, Shield, Heart, Users } from "lucide-react";

interface Story {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  summary: string;
  fullStory: string;
  constitutionalRelevance: string;
  keyArticles: string[];
  outcome: string;
}

const stories: Story[] = [
  {
    id: "1",
    title: "Vishakha Guidelines - The Beginning of Workplace Safety",
    category: "Women's Safety",
    icon: <Shield className="w-5 h-5" />,
    summary: "How a brutal gang rape case led to landmark guidelines protecting women at workplace.",
    fullStory: `In 1992, Bhanwari Devi, a social worker in Rajasthan, was gang-raped by upper-caste men as punishment for trying to prevent a child marriage. When the local courts failed to deliver justice, women's rights groups filed a PIL in the Supreme Court.

In 1997, the Supreme Court delivered a groundbreaking judgment in Vishakha vs State of Rajasthan. Since there was no law against sexual harassment at workplace, the Court created detailed guidelines to protect women workers. These guidelines remained in force until the Sexual Harassment of Women at Workplace Act was passed in 2013.

This case showed how the Constitution can be used to protect rights even when specific laws don't exist. The Court used Article 14 (equality), Article 19 (right to practice profession), and Article 21 (right to live with dignity) to create these protections.`,
    constitutionalRelevance: "The Court exercised its power under Article 32 to enforce fundamental rights and filled the legislative vacuum by creating binding guidelines.",
    keyArticles: ["Article 14", "Article 19(1)(g)", "Article 21", "Article 32"],
    outcome: "Led to the Sexual Harassment of Women at Workplace Act, 2013"
  },
  {
    id: "2",
    title: "Nirbhaya Case - India's Daughters Deserve Justice",
    category: "Women's Safety",
    icon: <Heart className="w-5 h-5" />,
    summary: "The 2012 Delhi gang rape that changed India's criminal laws forever.",
    fullStory: `On December 16, 2012, a 23-year-old physiotherapy student was brutally gang-raped on a moving bus in Delhi. The horrific crime shocked the nation's conscience and sparked unprecedented protests across India.

The victim, later named 'Nirbhaya' (Fearless) by media, died from her injuries 13 days later. The incident exposed the inadequacy of existing laws to deal with sexual violence.

In response, the government set up the Justice Verma Committee, which submitted its recommendations in just 29 days. The Criminal Law (Amendment) Act, 2013 was passed, which:
- Defined new offenses like stalking, voyeurism, and acid attacks
- Increased punishment for rape
- Made investigation and trial time-bound
- Established fast-track courts for sexual offense cases

Four of the convicts were executed in March 2020, while one died in prison and another was released as a juvenile.`,
    constitutionalRelevance: "The case reaffirmed that the right to live with dignity under Article 21 includes protection from sexual violence.",
    keyArticles: ["Article 21", "Article 14", "Article 15"],
    outcome: "Criminal Law (Amendment) Act, 2013 with stricter punishments"
  },
  {
    id: "3",
    title: "Triple Talaq - A Victory for Muslim Women",
    category: "Religious Rights",
    icon: <Scale className="w-5 h-5" />,
    summary: "How five Muslim women challenged an age-old practice and won.",
    fullStory: `Shayara Bano was married for 15 years when her husband sent her a letter with the words 'talaq, talaq, talaq' - instantly divorcing her without any reason, discussion, or support. This practice of instant triple talaq had devastated millions of Muslim women in India.

Shayara and four other women - Ishrat Jahan, Gulshan Parveen, Aafreen Rehman, and Atiya Sabri - approached the Supreme Court, challenging this practice as unconstitutional.

In August 2017, a five-judge Constitution Bench declared triple talaq unconstitutional. Three judges ruled it violated Article 14 (equality), while two ruled it was against the essential practices of Islam itself.

Following this judgment, the Muslim Women (Protection of Rights on Marriage) Act was passed in 2019, making instant triple talaq a criminal offense punishable with up to three years imprisonment.`,
    constitutionalRelevance: "The Court held that personal laws are subject to fundamental rights and cannot violate the Constitution's guarantee of equality.",
    keyArticles: ["Article 14", "Article 15", "Article 21", "Article 25"],
    outcome: "Muslim Women (Protection of Rights on Marriage) Act, 2019"
  },
  {
    id: "4",
    title: "Right to Privacy - Puttaswamy Case",
    category: "Fundamental Rights",
    icon: <Users className="w-5 h-5" />,
    summary: "A retired judge's fight established privacy as a fundamental right for 1.3 billion Indians.",
    fullStory: `Justice K.S. Puttaswamy, a retired High Court judge, filed a petition challenging the Aadhaar scheme, arguing it violated citizens' privacy. The government claimed that privacy was not a fundamental right in India.

In August 2017, a nine-judge Constitution Bench delivered a unanimous verdict declaring the Right to Privacy as a fundamental right under Article 21. This was the largest Constitution Bench since the Kesavananda Bharati case of 1973.

The judgment overruled two earlier decisions - M.P. Sharma (1954) and Kharak Singh (1962) - which had held that privacy was not a fundamental right. The Court held that privacy is intrinsic to life, liberty, and freedom, and is essential for human dignity.

This landmark judgment has implications for data protection, surveillance, personal choices, bodily autonomy, and much more.`,
    constitutionalRelevance: "Privacy was recognized as an intrinsic part of the right to life and personal liberty under Article 21.",
    keyArticles: ["Article 21", "Article 14", "Article 19"],
    outcome: "Right to Privacy declared a Fundamental Right"
  },
  {
    id: "5",
    title: "Section 377 - Love is Not a Crime",
    category: "LGBTQ+ Rights",
    icon: <Heart className="w-5 h-5" />,
    summary: "How India decriminalized consensual homosexual acts after 157 years.",
    fullStory: `Section 377 of the Indian Penal Code, a colonial-era law from 1861, criminalized 'carnal intercourse against the order of nature.' This was used to prosecute LGBTQ+ individuals in India for over 150 years.

In 2009, the Delhi High Court in Naz Foundation case declared Section 377 unconstitutional. However, in 2013, the Supreme Court reversed this decision in Suresh Kumar Koushal case, recriminalizing homosexuality.

Five years later, in Navtej Singh Johar vs Union of India (2018), a five-judge Constitution Bench unanimously struck down Section 377 as unconstitutional, to the extent it criminalized consensual sex between adults. The Court held that:
- Sexual orientation is a natural phenomenon
- LGBTQ+ persons have a right to dignity and privacy
- The law violated Articles 14, 15, 19, and 21
- History owes an apology to LGBTQ+ community

This judgment was hailed as a victory for human rights and equality worldwide.`,
    constitutionalRelevance: "The Court recognized that constitutional morality must prevail over societal morality, and discrimination based on sexual orientation violates fundamental rights.",
    keyArticles: ["Article 14", "Article 15", "Article 19", "Article 21"],
    outcome: "Section 377 partially struck down; consensual acts decriminalized"
  },
  {
    id: "6",
    title: "Right to Education - Unnikrishnan Case",
    category: "Educational Rights",
    icon: <Users className="w-5 h-5" />,
    summary: "How education became a fundamental right in India.",
    fullStory: `In Unnikrishnan vs State of Andhra Pradesh (1993), the Supreme Court declared that the right to education for children up to 14 years of age is a fundamental right under Article 21.

The Court directed that Article 45 (free and compulsory education for children) should be read with Article 21 (right to life). Education was held to be essential for a meaningful life and human dignity.

Following this judgment, the 86th Constitutional Amendment was passed in 2002, which:
- Added Article 21A making education a fundamental right for children aged 6-14
- Added a Fundamental Duty for parents to provide education to children

The Right of Children to Free and Compulsory Education Act (RTE) was passed in 2009 to implement this right. Under RTE:
- Every child has the right to free education in a neighborhood school
- Private schools must reserve 25% seats for economically weaker sections
- No child can be held back or expelled till completion of elementary education
- No child should be subjected to physical punishment or mental harassment`,
    constitutionalRelevance: "The Court interpreted 'right to life' expansively to include the right to education as essential for meaningful existence.",
    keyArticles: ["Article 21", "Article 21A", "Article 45", "Article 51A(k)"],
    outcome: "Right to Education Act, 2009"
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Women's Safety":
      return "bg-destructive/10 text-destructive border-destructive/20";
    case "Religious Rights":
      return "bg-gold/10 text-gold border-gold/20";
    case "Fundamental Rights":
      return "bg-accent/10 text-accent border-accent/20";
    case "LGBTQ+ Rights":
      return "bg-saffron/10 text-saffron border-saffron/20";
    case "Educational Rights":
      return "bg-green-india/10 text-green-india border-green-india/20";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const Stories = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            📖 Real-Life Stories
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn how the Constitution has protected rights and delivered justice through landmark cases.
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {stories.map((story) => (
            <Card key={story.id} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className={getCategoryColor(story.category)}>
                    {story.icon}
                    <span className="ml-1">{story.category}</span>
                  </Badge>
                </div>
                <CardTitle className="text-xl">{story.title}</CardTitle>
                <CardDescription className="text-base">{story.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="story">
                    <AccordionTrigger>Read Full Story</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-muted-foreground whitespace-pre-line">
                        {story.fullStory}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="relevance">
                    <AccordionTrigger>Constitutional Relevance</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground mb-3">{story.constitutionalRelevance}</p>
                      <div className="flex flex-wrap gap-2">
                        {story.keyArticles.map((article) => (
                          <Badge key={article} variant="secondary">
                            {article}
                          </Badge>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="outcome">
                    <AccordionTrigger>Outcome</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-green-india font-medium">✓ {story.outcome}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Stories;
