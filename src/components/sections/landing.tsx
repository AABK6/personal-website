import { ArrowDown } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Landing() {
  return (
    <section id="home" className="relative h-[calc(100vh-5rem)] flex items-center justify-center text-center text-foreground bg-cover bg-center" style={{backgroundImage: "url('https://placehold.co/1920x1080/fff7e6/ff8c00?text=.')"}} data-ai-hint="abstract orange">
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-4 z-10">
            <h1 className="text-5xl md:text-7xl font-headline mb-6 text-primary animate-fade-in-down">
                Field Notes / The Abecassis Lab
            </h1>
            <div className="max-w-3xl mx-auto animate-fade-in-up">
                <p className="text-xl md:text-2xl text-foreground/80 mb-4">
                    “I’m Adrien Abecassis—diplomat-turned-tinkerer.”
                </p>
                <p className="text-lg md:text-xl text-foreground/70">
                    When treaties turn vague and PowerPoint turns grey, I open a fresh terminal, sharpen the pencils, and run little experiments on the big questions. Welcome to my lab-slash-field-journal: a place where policy memos share a bench with prototype code, and where failure is logged right next to the findings.
                </p>
            </div>
            <Link href="#why-it-exists" passHref>
                <Button size="lg" variant="outline" className="mt-8 animate-fade-in-up animation-delay-300">
                    Explore The Lab
                    <ArrowDown className="ml-2 h-5 w-5"/>
                </Button>
            </Link>
        </div>
    </section>
  );
}
