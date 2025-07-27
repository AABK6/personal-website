import { Button } from "@/components/ui/button";

export default function PressReview() {
  return (
    <section id="press-review" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-headline mb-4">
          Daily Press Review
        </h2>
        <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
          “515 headlines digested so you don’t have to (I already lost sleep).”
        </p>
        <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
          Get the caffeine-free summary
        </Button>
      </div>
    </section>
  );
}
