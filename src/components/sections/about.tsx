import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="md:col-span-2">
            <Card className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://placehold.co/600x800/708090/ffffff"
                alt="Portrait of the practitioner"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
                data-ai-hint="man portrait"
              />
            </Card>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-4xl md:text-5xl font-headline text-primary mb-4">
              The Diplomat-Intellectual in the 21st Century
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
              <p>
                This is an interactive exploration of the career of Adrien Abecassis, a career diplomat and policy advisor with over 15 years of experience at the highest levels of government.
              </p>
              <p>
                It traces his journey from the center of French power to the forefront of global governance, navigating the complex interplay of diplomacy, academia, and policy innovation.
              </p>
              <p>
                His current focus is on pioneering digital and climate governance, architecting new frameworks for a world disrupted by technology and planetary-scale risks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
