import { Landmark, Fingerprint, Globe } from "lucide-react";
import { Card } from "../ui/card";

export default function Democracy() {
  return (
    <section id="democracy" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-4xl md:text-5xl font-headline text-primary mb-4">The Future of Democracy</h2>
                <p className="text-lg text-muted-foreground">
                In an era of resurgent populism, digital disruption, and challenged sovereignty, how must democratic principles adapt to not only survive, but thrive?
                </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
                <Card className="p-8 md:p-12 bg-background">
                    <div className="space-y-8">
                        <div className="flex items-start gap-6">
                            <div className="text-primary pt-1"><Landmark className="h-8 w-8"/></div>
                            <div>
                                <h3 className="text-xl font-bold font-headline mb-2">The New Populism</h3>
                                <p className="text-muted-foreground">A wave of anti-establishment sentiment is reshaping political landscapes worldwide. It challenges traditional institutions and forces a re-examination of who holds power and for whom they speak. Understanding its roots is the first step toward a more resilient democratic future.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6">
                             <div className="text-primary pt-1"><Fingerprint className="h-8 w-8"/></div>
                            <div>
                                <h3 className="text-xl font-bold font-headline mb-2">Digital Rights & Sovereignty</h3>
                                <p className="text-muted-foreground">The digital realm is the new public square, battlefield, and marketplace. Protecting individual rights to privacy and expression while asserting national sovereignty against the influence of tech giants and foreign actors is the central struggle of our time.</p>
                            </div>
                        </div>
                        <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 italic text-lg text-foreground">
                        "Democracy is not a destination, but a constant process of negotiation, adaptation, and reaffirmation of core values in the face of new realities."
                        </blockquote>
                        <div className="flex items-start gap-6">
                            <div className="text-primary pt-1"><Globe className="h-8 w-8"/></div>
                            <div>
                                <h3 className="text-xl font-bold font-headline mb-2">A Forward-Looking Argument</h3>
                                <p className="text-muted-foreground">We cannot retreat into old paradigms. The future requires a reimagined social contract—one that is digitally native, fiercely protective of individual liberty, and capable of fostering collective action on a global scale. It's a call for a more agile, transparent, and participatory form of governance.</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </section>
  );
}
