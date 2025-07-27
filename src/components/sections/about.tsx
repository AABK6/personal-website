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
              A Brief History of My Inbox
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
              <p>
                My career began in the French diplomatic corps, which is a formal way of saying I learned how to manage budgets and write memos. A detour through a think tank led, somewhat unexpectedly, to the Élysée Palace, where for five years I served as an advisor to President François Hollande. My role was a mix of European affairs, political strategy, and trying to make sense of polling data.
              </p>
              <p>
                After leaving government in 2017, I traded the short-term pressures of Paris for the longer-term perspective of academia, with fellowships at Harvard and UCLA. There, my focus shifted from the immediate crises of a nation-state to the slower, more systemic challenges facing the global community, particularly in climate and technology governance.
              </p>
              <p>
                Today, I lead policy initiatives at the Paris Peace Forum, where we try to build platforms for cooperation on these very issues. It's a role that combines the practicality of my time in government with the analytical rigor of my years in research. You could say my inbox is just as full, but the subject lines have gotten a bit more existential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
