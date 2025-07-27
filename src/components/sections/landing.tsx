import { ArrowDown } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Landing() {
  return (
    <section id="home" className="relative h-[calc(100vh-5rem)] flex items-center justify-center text-center text-foreground bg-cover bg-center" style={{backgroundImage: "url('https://placehold.co/1920x1080/fff7e6/ff8c00?text=.')"}} data-ai-hint="abstract orange">
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-4 z-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline mb-4 text-primary animate-fade-in-down">
            Practitioner's Notebook
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80 mb-8 animate-fade-in-up">
            An exploration of society's most pressing challenges—from the AI revolution to climate overshoot and the future of democracy.
            </p>
            <Link href="/ai" passHref>
                <Button size="lg" variant="default" className="animate-fade-in-up animation-delay-300">
                    Begin Exploring
                    <ArrowDown className="ml-2 h-5 w-5"/>
                </Button>
            </Link>
        </div>
    </section>
  );
}