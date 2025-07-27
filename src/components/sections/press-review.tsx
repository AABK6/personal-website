import { Button } from "@/components/ui/button";

export default function PressReview() {
  return (
    <section id="press-review" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-headline mb-4 text-primary">
          Daily Press Review
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          “515 headlines digested so you don’t have to (I already lost sleep).”
        </p>
        <Button size="lg" variant="default">
          Get the caffeine-free summary
        </Button>
      </div>
    </section>
  );
}
