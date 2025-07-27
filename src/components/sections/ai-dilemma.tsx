import { BrainCircuit, Users, ShieldCheck, Terminal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";

const concepts = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-green-400" />,
    title: "Algorithmic Bias",
    description: "AI systems learn from data. If the data reflects existing societal biases, the AI will learn and perpetuate them. We must build for fairness.",
  },
  {
    icon: <Users className="h-8 w-8 text-green-400" />,
    title: "Societal Impact",
    description: "From job displacement to autonomous weaponry, the integration of AI raises profound ethical questions about the future we want to create.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-green-400" />,
    title: "Data Privacy",
    description: "In an AI-driven world, personal data is the most valuable commodity. Ensuring its security and ethical use is paramount for a free society.",
  },
];


export default function AiDilemma() {
  return (
    <section id="ai" className="py-16 md:py-24 bg-gray-900 text-gray-200 font-code">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-headline text-green-400 mb-4 animate-pulse">The AI Dilemma</h2>
            <p className="text-lg text-green-400/80">
                // Artificial intelligence promises a new frontier of progress, but it also presents complex societal challenges. How do we navigate this powerful technology responsibly?
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {concepts.map((concept) => (
            <Card key={concept.title} className="text-center bg-gray-950 border-green-500/30 text-green-400/90 hover:border-green-500/70 transition-colors duration-300">
              <CardHeader className="items-center">
                {concept.icon}
                <CardTitle className="mt-4 font-bold tracking-widest">{concept.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-green-400/70">{concept.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-black border-green-500/30 overflow-hidden">
            <div className="grid md:grid-cols-2 items-stretch">
                <div className="p-8 md:p-12">
                    <h3 className="font-headline text-3xl text-green-400 mb-4">Human in the Loop</h3>
                    <p className="text-base mb-6 text-green-400/80">
                    A critical safeguard in AI is maintaining human oversight. This simulation illustrates how human judgment can intervene to correct or guide AI decisions, preventing errors and ensuring ethical outcomes.
                    </p>
                    <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
                        <Terminal className="mr-2 h-4 w-4"/>
                        Run Simulation
                    </Button>
                </div>
                <div className="bg-gray-950 h-full p-8 md:p-12 flex items-center justify-center min-h-[200px] md:min-h-full">
                    <p className="text-green-400/60 italic text-sm">&gt; Simulation placeholder: An interactive element will demonstrate AI decision-making with human intervention points. <span className="animate-ping">_</span></p>
                </div>
            </div>
        </Card>
      </div>
    </section>
  );
}
