import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Landing from '@/components/sections/landing';
import PressReview from '@/components/sections/press-review';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, SlidersHorizontal } from 'lucide-react';

const labRules = [
    { text: "Poke around. Pick a room—the animations will politely guide you in." },
    { text: "Crave sources? Toggle the “show footnotes” switch." },
    { text: "Spot an error? Reply or DM; the lab runs on peer-review and gentle sarcasm." },
    { text: "Fork the code. Snippets are MIT-licensed unless my lawyer panics." },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Landing />

        <section id="why-it-exists" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
                  <p>
                    I’ve spent two decades shuttling between presidential palaces, UN halls, university librairies and hack-day basements. The one constant: I learn faster when I write things down and break them. This is my public notebook for this process.
                  </p>
                  <p className="text-sm italic text-muted-foreground pt-4">
                    <strong>A small disclaimer:</strong> this site is a perpetual beta. Things may flicker, break, or contradict last week’s post. That’s research. The views are my own; the bugs belong to the repo.
                  </p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="inquiry-lines" className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-headline text-primary mb-4">The Main Lines of Inquiry</h2>
                        <p className="text-lg text-foreground/80">
                            Over the years, a few core obsessions have emerged from the noise. These are the recurring challenges where I focus most of my 'lab work.' Each lives in its own microwebsite—a dedicated room in the lab.
                        </p>
                    </div>

                    <ul className="list-none space-y-4">
                        <li className="pl-5 space-y-1 border-l-4 border-primary/20">
                            <h3 className="font-headline text-2xl text-primary">The AI Dilemma</h3>
                            <p className="text-lg text-foreground/80">Governance experiments for algorithms that refuse to stay in their sandbox.</p>
                        </li>
                        <li className="pl-5 space-y-1 border-l-4 border-primary/20">
                            <h3 className="font-headline text-2xl text-primary">Beyond 1.5°</h3>
                            <p className="text-lg text-foreground/80">Climate overshoot scenarios, minus the wishful thinking.</p>
                        </li>
                        <li className="pl-5 space-y-1 border-l-4 border-primary/20">
                            <h3 className="font-headline text-2xl text-primary">Future of Democracy</h3>
                            <p className="text-lg text-foreground/80">Democratic plumbing for an attention-splintered century.</p>
                        </li>
                    </ul>
                     <p className="text-lg text-foreground/80 mt-8 text-center">
                        You'll also find other <strong className="font-headline">Dispatches</strong> scattered about—trip reports, prototypes, and stray thoughts from the other fields I've worked in.
                    </p>
                    <p className="text-center text-muted-foreground italic mt-4 text-sm">
                      New focuses and microsites will open as curiosity (and insomnia) dictate.
                    </p>
                </div>
            </div>
        </section>

        <section id="lab-rules" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-headline text-primary mb-6 text-center">Lab Rules</h2>
              <ul className="space-y-4">
                {labRules.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                    <span className="text-lg text-foreground/80">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <PressReview />
      </main>
      <Footer />
    </div>
  );
}
