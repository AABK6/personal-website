'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const keyRoles = [
    {
      title: "Presidential Advisor",
      period: "2012-2017",
      description: "Served at the center of power as a key advisor, managing bilateral European affairs during critical moments and shaping policy through analysis of public opinion."
    },
    {
      title: "Transatlantic Scholar",
      period: "2017-2021",
      description: "Pivoted to academia with fellowships at leading institutions, focusing research on populism, digital rights, and the governance of emerging technologies."
    },
    {
      title: "Global Policy Leader",
      period: "2021-Present",
      description: "Leads the policy department of a major global incubator for governance solutions, developing initiatives on climate, cyberspace, AI, and global health."
    }
]

export default function KeyContributions() {
  return (
    <section id="contributions" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-headline text-primary mb-4">
            A Deeper Dive
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore the core themes and significant roles that have defined a career dedicated to tackling complex global challenges.
          </p>
        </div>
        
        <Tabs defaultValue="roles" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="roles">Key Roles</TabsTrigger>
            <TabsTrigger value="ideas">Core Ideas</TabsTrigger>
          </TabsList>
          
          <TabsContent value="roles">
            <div className="grid md:grid-cols-3 gap-8">
              {keyRoles.map(role => (
                <Card key={role.title}>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl text-primary">{role.title}</CardTitle>
                    <p className="text-sm font-medium text-muted-foreground">{role.period}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{role.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ideas">
             <Card>
                <CardContent className="p-6">
                 <div className="space-y-6">
                    <div>
                        <h4 className="font-bold font-headline text-xl mb-2 text-primary">Adapting Governance for a New Era</h4>
                        <p className="text-foreground/80">
                           A central theme is the critical need to adapt democratic governance for a world disrupted by technology and planetary-scale risks. The work argues for new frameworks for digital rights, AI governance ("AI constitutionalism"), and confronting climate overshoot through integrated strategies.
                        </p>
                    </div>
                     <div>
                        <h4 className="font-bold font-headline text-xl mb-2 text-primary">From Dialogue to Action</h4>
                        <p className="text-foreground/80">
                           Emphasis is placed on translating high-level dialogue into concrete action. This is demonstrated through the incubation of initiatives like "Digital Rights in Society," the co-founding of NGOs, and developing public engagement tools like the "Human in the Loop" AI simulation to make abstract principles tangible.
                        </p>
                    </div>
                 </div>
                </CardContent>
             </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
