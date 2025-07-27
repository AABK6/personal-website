import { ArrowDown } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Landing() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-foreground bg-cover bg-center" style={{backgroundImage: "url('https://placehold.co/1920x1080/fff7e6/ff8c00?text=.')"}} data-ai-hint="abstract orange">
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-4 z-10">
            <h1 className="text-5xl md:text-7xl font-headline mb-6 text-primary animate-fade-in-down">
                Field Notes / The Abecassis Lab
            </h1>
            <div className="max-w-3xl mx-auto animate-fade-in-up">
                <div className="text-lg md:text-xl text-foreground/80 space-y-4">
                    <p>
                        I started as a French diplomat, but that plan got complicated. The reality involved a long detour through the Élysée Palace as a political advisor, followed by transatlantic tours as a Harvard fellow, a climate policy geek, and a student of global development finance. Along the way, I also fell down the rabbit hole of AI, learning to both code applications and architect governance frameworks for them.
                    </p>
                    <p>
                        What I’ve learned is that our biggest problems have little respect for job descriptions or institutional silos. They are messy, interconnected, and demand we move between worlds that don't always speak the same language.
                    </p>
                    <p>
                        This website is my attempt to build a switchboard for that cross-disciplinary work. It is also, quite literally, a lab: a project where I code and test things, so please pardon the occasional digital dust.
                    </p>
                </div>
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