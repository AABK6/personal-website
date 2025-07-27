import { ArrowDown } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Landing() {
  return (
    <section id="home" className="relative h-[calc(100vh-5rem)] flex items-center justify-center text-center text-foreground bg-cover bg-center" style={{backgroundImage: "url('https://placehold.co/1920x1080/fff7e6/ff8c00?text=.')"}} data-ai-hint="abstract orange">
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-4 z-10">
            <h1 className="text-5xl md:text-7xl font-headline mb-6 text-primary animate-fade-in-down">
                The Abecassis Lab
            </h1>
            <div className="max-w-3xl mx-auto animate-fade-in-up">
                <p className="text-lg md:text-xl text-foreground/80 space-y-4">
                    My career has taken a few turns—from career diplomat and party politics wonk to academic and climate geek. This website is an attempt to connect those dots. It’s a repository for the side-projects and stray thoughts that don't fit neatly into a single job title.
                    <br />
                    <br />
                    It is also, quite literally, a lab: a project where I code and test things. As such, consider it a permanent work in progress, reflecting a rather eclectic profile.
                </p>
            </div>
            <Link href="#why-it-exists" passHref>
                <Button size="lg" variant="outline" className="mt-8 animate-fade-in-up animation-delay-300">
                    Explore The Lab
                    <ArrowDown className="ml-2 h-5 w-5"/>
                </Button>
            </Link>
            <div className="mt-8 animate-fade-in-up animation-delay-[600ms]">
                <h4 className="font-headline text-xl text-primary mb-2">A small disclaimer</h4>
                <p className="text-foreground/80 italic max-w-2xl mx-auto">
                This site is a perpetual beta. Things may flicker, break, or contradict last week’s post. That’s research. The views are my own; the bugs belong to the repo.
                </p>
            </div>
        </div>
    </section>
  );
}
