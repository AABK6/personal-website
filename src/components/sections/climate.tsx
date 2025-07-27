import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const choices = [
    {
        title: "The Reality of Overshoot",
        description: "For decades, the global goal was to limit warming to 1.5°C. Evidence now suggests we will overshoot this target, forcing us to confront a world of amplified climate impacts.",
        image: "https://placehold.co/600x400/228b22/ffffff",
        hint: "drought cracked"
    },
    {
        title: "The Commission's Work",
        description: "An independent body of experts and leaders tasked with exploring pathways to minimize the risks of a warming world, focusing on sunlight reflection and carbon removal.",
        image: "https://placehold.co/600x400/4682b4/ffffff",
        hint: "conference meeting"
    },
    {
        title: "Difficult Choices Ahead",
        description: "There are no easy answers. We must weigh the potential benefits and risks of emerging technologies against the certain dangers of unchecked climate change.",
        image: "https://placehold.co/600x400/87ceeb/ffffff",
        hint: "crossroads sign"
    }
]

export default function Climate() {
  return (
    <section id="climate" className="py-16 md:py-24 bg-gradient-to-b from-blue-100 via-green-100 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-headline text-blue-800 mb-4">Beyond 1.5 Degrees</h2>
            <p className="text-lg text-green-800/80">
            Climate overshoot is no longer a distant possibility, but an impending reality. The work of the Climate Overshoot Commission confronts the difficult choices humanity must now make.
            </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {choices.map((choice) => (
                <Card key={choice.title} className="overflow-hidden flex flex-col group shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-white/50 bg-white/50 backdrop-blur-sm">
                    <div className="overflow-hidden">
                        <Image src={choice.image} alt={choice.title} width={600} height={400} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={choice.hint}/>
                    </div>
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl text-blue-900">{choice.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-green-900/80">{choice.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>

      </div>
    </section>
  );
}
