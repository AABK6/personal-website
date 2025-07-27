import { BrainCircuit, Users, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "../ui/button";

const concepts = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "Algorithmic Bias",
    description: "AI systems learn from data. If the data reflects existing societal biases, the AI will learn and perpetuate them. We must build for fairness.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Societal Impact",
    description: "From job displacement to autonomous weaponry, the integration of AI raises profound ethical questions about the future we want to create.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Data Privacy",
    description: "In an AI-driven world, personal data is the most valuable commodity. Ensuring its security and ethical use is paramount for a free society.",
  },
];


export default function AiDilemma() {
  return (
    <section id="ai" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-headline text-primary mb-4">The AI Dilemma</h2>
            <p className="text-lg text-muted-foreground">
                Artificial intelligence promises a new frontier of progress, but it also presents complex societal challenges. How do we navigate this powerful technology responsibly?
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {concepts.map((concept) => (
            <Card key={concept.title} className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                {concept.icon}
                <CardTitle className="mt-4">{concept.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{concept.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-background overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
                <div className="p-8 md:p-12">
                    <h3 className="font-headline text-3xl text-primary mb-4">Human in the Loop</h3>
                    <CardDescription className="text-base mb-6">
                    A critical safeguard in AI is maintaining human oversight. This simulation illustrates how human judgment can intervene to correct or guide AI decisions, preventing errors and ensuring ethical outcomes.
                    </CardDescription>
                    <Button>Run Simulation</Button>
                </div>
                <div className="bg-muted h-full p-8 md:p-12 flex items-center justify-center">
                    <p className="text-foreground/60 italic">Simulation placeholder: An interactive element will demonstrate AI decision-making with human intervention points.</p>
                </div>
            </div>
        </Card>
      </div>
    </section>
  );
}
