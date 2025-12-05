import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const funFacts = [
  "The Indian Constitution is the longest written constitution in the world with 448 articles and 12 schedules.",
  "Dr. B.R. Ambedkar is known as the 'Father of the Indian Constitution' and chaired the Drafting Committee.",
  "The Constitution was handwritten and calligraphed in both Hindi and English - no typing was used!",
  "It took 2 years, 11 months and 18 days to complete the Constitution.",
  "The original Constitution is preserved in helium-filled cases in the Parliament Library.",
  "India's Constitution borrowed features from about 10 different countries.",
  "January 26 was chosen as Republic Day because on this day in 1930, the Indian National Congress declared Purna Swaraj.",
  "The Preamble was inspired by the American Constitution but declares India as a 'Sovereign Socialist Secular Democratic Republic'.",
  "The Constitution originally had 395 articles and 8 schedules.",
  "Fundamental Duties were added by the 42nd Amendment in 1976.",
  "Article 21 - Right to Life is considered the most important fundamental right.",
  "The Constitution can be amended by Parliament under Article 368.",
  "There are currently 6 Fundamental Rights guaranteed to Indian citizens.",
  "The Directive Principles of State Policy are inspired by the Irish Constitution.",
  "Every citizen has 11 Fundamental Duties listed in Part IVA of the Constitution.",
];

export function FunFactCard() {
  const [currentFact, setCurrentFact] = useState(() => 
    funFacts[Math.floor(Math.random() * funFacts.length)]
  );

  const getNewFact = () => {
    let newFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    while (newFact === currentFact && funFacts.length > 1) {
      newFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    }
    setCurrentFact(newFact);
  };

  return (
    <Card className="bg-gradient-to-br from-gold/10 via-card to-saffron/10 border-gold/20 shadow-soft">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="flex items-center gap-2 text-lg font-serif">
          <Lightbulb className="w-5 h-5 text-gold" />
          Fun Fact of the Day
        </CardTitle>
        <Button variant="ghost" size="icon" onClick={getNewFact} className="hover:bg-gold/10">
          <RefreshCw className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <p className="text-lg leading-relaxed text-foreground">{currentFact}</p>
      </CardContent>
    </Card>
  );
}
