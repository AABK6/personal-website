'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const timelineEvents = [
  {
    date: '2008',
    title: 'Graduate Studies in Public Policy',
    description:
      'Focused on economic development and international relations, laying the groundwork for a career in public service.',
    sector: 'Academia & Research',
  },
  {
    date: '2012',
    title: 'Technology Policy Advisor',
    description:
      'Advised government agencies on the implications of emerging technologies, from broadband access to data privacy.',
    sector: 'State & National Politics',
  },
  {
    date: '2017',
    title: 'Founded a Civic Tech Startup',
    description:
      'Launched an initiative to improve citizen engagement and government transparency through digital platforms.',
    sector: 'Global Governance & NGOs',
  },
  {
    date: '2021',
    title: 'Senior Fellow, Global Affairs Institute',
    description:
      'Researched and wrote on the intersection of technology and geopolitics, focusing on AI and digital sovereignty.',
    sector: 'Academia & Research',
  },
  {
    date: 'Present',
    title: 'Independent Analyst & Writer',
    description:
      'Engaged in full-time research and writing, culminating in the work presented in this notebook.',
    sector: 'Academia & Research',
  },
];

const careerFocusData = [
  { name: 'State & National Politics', value: 1, color: 'hsl(var(--chart-1))' },
  { name: 'Academia & Research', value: 3, color: 'hsl(var(--chart-2))' },
  { name: 'Global Governance & NGOs', value: 1, color: 'hsl(var(--chart-3))' },
];

export default function Biography() {
  const [selectedEvent, setSelectedEvent] = useState<(typeof timelineEvents)[0] | null>(null);

  return (
    <>
      <section id="biography" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-headline text-primary mb-4">
              Career Trajectory
            </h2>
            <p className="text-lg text-muted-foreground">
              This section provides a visual and interactive overview of the practitioner's path. The timeline highlights key roles, while the chart summarizes the focus across different sectors. Click an event for details.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2 relative">
              <div className="absolute left-1/2 md:left-4 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 md:translate-x-0"></div>
              {timelineEvents.map((event, index) => (
                <div
                  key={event.title}
                  onClick={() => setSelectedEvent(event)}
                  className={`relative mb-8 pl-8 md:pl-12 cursor-pointer group`}
                >
                    <div className="absolute left-1/2 md:left-4 top-2 -translate-x-1/2 -translate-y-1/2 md:translate-x-0">
                        <div className="h-4 w-4 rounded-full bg-primary ring-4 ring-background group-hover:ring-accent transition-all"></div>
                    </div>
                    <div className="pl-4">
                        <p className="text-sm font-bold text-primary mb-1">{event.date}</p>
                        <h3 className="font-headline text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                            {event.title}
                        </h3>
                        <p className="text-muted-foreground mt-1 text-sm">{event.description.substring(0, 80)}...</p>
                    </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={careerFocusData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={120}
                      innerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      strokeWidth={3}
                      stroke="hsl(var(--background))"
                    >
                      {careerFocusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            background: "hsl(var(--background))",
                            borderColor: "hsl(var(--border))",
                            borderRadius: "var(--radius)",
                            color: "hsl(var(--foreground))"
                        }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-2">Distribution of Career Focus</p>
            </div>
          </div>
        </div>
      </section>
      
      <Dialog open={!!selectedEvent} onOpenChange={(isOpen) => !isOpen && setSelectedEvent(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="font-headline text-2xl text-primary">{selectedEvent?.title}</DialogTitle>
            <p className="text-sm text-muted-foreground font-bold">{selectedEvent?.date}</p>
          </DialogHeader>
          <DialogDescription className="py-4 text-foreground">
           {selectedEvent?.description}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
}
