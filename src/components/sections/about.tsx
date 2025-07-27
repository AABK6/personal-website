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
              About the Practitioner
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
              <p>
                With a background spanning public policy, technology, and international affairs, my work is driven by a single question: how can we build more resilient, equitable, and prosperous societies in the 21st century?
              </p>
              <p>
                This notebook is a living repository of my research, analysis, and reflections on the critical challenges of our time. It's a space for untangling complexity, exploring difficult trade-offs, and charting potential paths forward.
              </p>
              <p>
                My current focus is on the intersection of artificial intelligence, climate change, and democratic governance. I believe these three domains will fundamentally shape the human experience for generations to come, and that navigating them successfully requires a multidisciplinary, evidence-based, and deeply humanistic approach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
