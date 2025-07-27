import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PressReview() {
  return (
    <section id="press-review" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-headline mb-4 text-primary">
          Press Review
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          One external link a day—no commentary, no doomscrolling penalty.
        </p>
        <Link href="https://studio--reviewflow-nrciu.us-central1.hosted.app/" target="_blank" rel="noopener noreferrer" passHref>
          <Button size="lg" variant="default">
            See Today's Link
          </Button>
        </Link>
      </div>
    </section>
  );
}
