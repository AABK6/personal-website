import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const choices = [
  {
      title: "The Reality of Overshoot",
      description: "For decades, the global goal was to limit warming to 1.5°C. Evidence now suggests we will overshoot this target, forcing us to confront a world of amplified climate impacts.",
  },
  {
      title: "The Commission's Work",
      description: "An independent body of experts and leaders tasked with exploring pathways to minimize the risks of a warming world, focusing on sunlight reflection and carbon removal.",
  },
  {
      title: "Difficult Choices Ahead",
      description: "There are no easy answers. We must weigh the potential benefits and risks of emerging technologies against the certain dangers of unchecked climate change.",
  }
]

export default function Climate() {
  return (
    <>
      <div className="parallax-bg" style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }} data-ai-hint="earth space">
        <div className="container mx-auto px-4 py-32 md:py-48 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-headline mb-4 drop-shadow-lg">Beyond 1.5 Degrees</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
            Climate overshoot is no longer a distant possibility, but an impending reality. The work of the Climate Overshoot Commission confronts the difficult choices humanity must now make.
          </p>
        </div>
      </div>
      
      <div className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                {choices.map((choice) => (
                    <Card key={choice.title} className="overflow-hidden flex flex-col group shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 bg-white/80 backdrop-blur-sm">
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
      </div>

      <div className="parallax-bg" style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }} data-ai-hint="forest canopy"></div>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-headline text-blue-800 mb-4">A Global Challenge</h3>
          <p className="text-lg text-green-800/80 max-w-3xl mx-auto">
            Addressing climate change requires a multi-faceted approach, from technological innovation and policy reform to a fundamental shift in our relationship with the planet. The path forward is complex, but not impossible.
          </p>
        </div>
      </section>

      <div className="parallax-bg" style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }} data-ai-hint="melting glacier"></div>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl md:text-4xl font-headline text-blue-800 mb-4">Our Collective Responsibility</h3>
            <p className="text-lg text-green-800/80 max-w-3xl mx-auto">
                Every fraction of a degree matters. The choices we make today will determine the world we leave for future generations. It is a legacy we must shape with wisdom, courage, and a shared sense of purpose.
            </p>
        </div>
      </section>
    </>
  );
}
