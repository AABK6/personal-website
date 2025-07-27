'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const keyRoles = [
    {
      title: "Presidential Advisor",
      period: "2012-2017",
      description: "Served at the center of French power, advising President Hollande on European affairs, policy, and strategy, and playing a key role in shaping France's EU policies."
    },
    {
      title: "Transatlantic Scholar",
      period: "2017-2021",
      description: "Pivoted to academia with fellowships at Harvard and UCLA, researching populism, digital rights, and the governance of emerging technologies like AI and climate interventions."
    },
    {
      title: "Global Policy Leader",
      period: "2021-Present",
      description: "Leads policy at the Paris Peace Forum, incubating initiatives on climate, cyberspace, and AI. Appointed Deputy Special Envoy for the 2023 Summit for a New Global Financing Pact."
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
                        <h4 className="font-bold font-headline text-xl mb-2 text-primary">Pioneering Digital & Climate Governance</h4>
                        <p className="text-foreground/80">
                           A central theme is the critical need to adapt democratic governance for a world disrupted by technology and planetary-scale risks. The work argues for new frameworks for digital rights, AI governance ("AI constitutionalism"), and confronting climate overshoot through integrated strategies. This is demonstrated through incubating initiatives like "Digital Rights in Society" and co-founding NGOs to bridge the North-South digital divide.
                        </p>
                    </div>
                     <div>
                        <h4 className="font-bold font-headline text-xl mb-2 text-primary">Reforming Global Finance</h4>
                        <p className="text-foreground/80">
                           As Deputy Special Envoy for the Summit for a New Global Financing Pact, he played a key behind-the-scenes role in its success. The summit was a high-profile milestone in international efforts to find consensus on debt relief, climate finance, and support for vulnerable countries, ensuring civil society voices from the Global South were heard.
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
