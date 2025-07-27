import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Landing from '@/components/sections/landing';
import PressReview from '@/components/sections/press-review';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle } from 'lucide-react';

const labArtifacts = [
  { title: "Field Note", description: "A short, slightly opinionated essay—citations included, egg-on-face risk accepted." },
  { title: "Prototype", description: "Tiny React gadgets, policy simulators, or data visualisations you can poke at." },
  { title: "Dispatch", description: "Trip reports from conferences, negotiations, and corridors where the coffee is bad but the gossip is excellent." },
  { title: "Press Review", description: "One external link a day—no commentary, no doomscrolling penalty." },
  { title: "Timeline CV", description: "Scrollable highlights and low-lights; PDFs for the archivists." },
];

const labUsage = [
    { text: "Pick a room—the animations will politely guide you in." },
    { text: "Toggle the “show footnotes” switch if you crave sources." },
    { text: "Fork the code snippets (MIT-licensed unless my lawyer panics)." },
    { text: "Reply or DM when you spot errors; the lab runs on peer-review and gentle sarcasm." },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Landing />

        <section id="why-it-exists" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-headline text-primary mb-6">Why this exists</h2>
              <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
                  <p>
                    I’ve spent two decades shuttling between presidential palaces, UN halls, and hack-day basements. The one constant: I learn faster when I write things down and break them. Field Notes / The Abecassis Lab is my public notebook—equal parts notebook, observatory, and crash-test site for ideas about:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>The AI Dilemma</strong> – governance experiments for algorithms that refuse to stay in their sandbox.</li>
                    <li><strong>Beyond 1.5°</strong> – climate overshoot scenarios, minus the wishful thinking.</li>
                    <li><strong>Future of Democracy</strong> – democratic plumbing for an attention-splintered century.</li>
                  </ul>
                  <p>
                    Each theme lives in its own microwebsite, complete with bespoke visuals and the occasional rogue slider. New “rooms” will open as curiosity (and insomnia) dictate.
                  </p>
              </div>
            </div>
          </div>
        </section>

        <section id="what-you-will-find" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-headline text-primary mb-4">What you’ll find inside</h2>
            </div>
            <div className="max-w-4xl mx-auto">
                <Card>
                    <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            {labArtifacts.map((artifact, index) => (
                                <div key={index} className="flex flex-col">
                                    <h4 className="font-headline text-xl text-foreground font-bold">{artifact.title}</h4>
                                    <p className="text-muted-foreground">{artifact.description}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
          </div>
        </section>

        <section id="how-to-use" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-headline text-primary mb-6">How to use the lab</h2>
              <ul className="space-y-4">
                {labUsage.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                    <span className="text-lg text-foreground/80">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Separator className="my-8 bg-border" />
              <div>
                  <h4 className="font-headline text-xl text-primary mb-2">A small disclaimer</h4>
                  <p className="text-foreground/80 italic">
                    This site is a perpetual beta. Things may flicker, break, or contradict last week’s post. That’s research. The views are my own; the bugs belong to the repo.
                  </p>
              </div>
            </div>
          </div>
        </section>

        <PressReview />
      </main>
      <Footer />
    </div>
  );
}
