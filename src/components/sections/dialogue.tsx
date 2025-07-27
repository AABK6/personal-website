import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const readingList = [
    {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        category: "Cognitive Science",
        image: "https://placehold.co/400x500/708090/ffffff",
        hint: "brain illustration"
    },
    {
        title: "The Age of Surveillance Capitalism",
        author: "Shoshana Zuboff",
        category: "Digital Society",
        image: "https://placehold.co/400x500/cc6633/ffffff",
        hint: "security camera"
    },
    {
        title: "The Uninhabitable Earth",
        author: "David Wallace-Wells",
        category: "Climate Change",
        image: "https://placehold.co/400x500/afeeee/708090",
        hint: "wildfire forest"
    },
    {
        title: "How Democracies Die",
        author: "Steven Levitsky & Daniel Ziblatt",
        category: "Political Science",
        image: "https://placehold.co/400x500/ffdb58/708090",
        hint: "government building"
    }
]

export default function Dialogue() {
  return (
    <section id="dialogue" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-headline text-primary mb-4">The Dialogue</h2>
            <p className="text-lg text-muted-foreground">
            A curated reading list of works that have shaped and challenged my thinking on these critical topics.
            </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {readingList.map((item) => (
                <Card key={item.title} className="flex flex-col group overflow-hidden">
                    <CardHeader className="p-0">
                       <div className="overflow-hidden">
                        <Image src={item.image} alt={`Book cover of ${item.title}`} width={400} height={500} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={item.hint}/>
                       </div>
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                        <Badge variant="secondary" className="mb-2">{item.category}</Badge>
                        <CardTitle className="text-xl font-headline mb-1">{item.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">by {item.author}</p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                        <Link href="#" className="text-sm font-bold text-primary hover:text-accent group-hover:text-accent transition-colors flex items-center">
                            Read More <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </CardFooter>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
