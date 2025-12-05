import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { learningTopics } from "@/data/learningData";
import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Learning = () => {
  const [speaking, setSpeaking] = useState<string | null>(null);

  const speakText = (text: string, id: string) => {
    if ('speechSynthesis' in window) {
      // Stop any current speech
      window.speechSynthesis.cancel();
      
      if (speaking === id) {
        setSpeaking(null);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.onend = () => setSpeaking(null);
      utterance.onerror = () => setSpeaking(null);
      
      window.speechSynthesis.speak(utterance);
      setSpeaking(id);
    } else {
      toast.error("Text-to-speech not supported in your browser");
    }
  };

  const getFullText = (topic: typeof learningTopics[0]) => {
    return topic.content.map(section => 
      `${section.heading}. ${section.points.join('. ')}`
    ).join('. ');
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            📚 Learn the Constitution
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Easy-to-understand summaries of key constitutional concepts. 
            Click the speaker icon to listen!
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {learningTopics.map((topic) => (
            <Card key={topic.id} className="overflow-hidden">
              <CardHeader className="bg-gradient-card">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{topic.icon}</span>
                    <div>
                      <CardTitle className="text-xl">{topic.title}</CardTitle>
                      <CardDescription className="mt-1">{topic.description}</CardDescription>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => speakText(getFullText(topic), topic.id)}
                    className="shrink-0"
                  >
                    {speaking === topic.id ? (
                      <VolumeX className="w-5 h-5 text-primary" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <Accordion type="single" collapsible className="w-full">
                  {topic.content.map((section, index) => (
                    <AccordionItem key={index} value={`section-${index}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {section.heading}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {section.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex gap-2 text-muted-foreground">
                              <span className="text-primary shrink-0">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Learning;
