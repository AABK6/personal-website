const timelineEvents = [
    {
      date: "2008",
      title: "Graduate Studies in Public Policy",
      description: "Focused on economic development and international relations, laying the groundwork for a career in public service."
    },
    {
      date: "2012",
      title: "Technology Policy Advisor",
      description: "Advised government agencies on the implications of emerging technologies, from broadband access to data privacy."
    },
    {
      date: "2017",
      title: "Founded a Civic Tech Startup",
      description: "Launched an initiative to improve citizen engagement and government transparency through digital platforms."
    },
    {
      date: "2021",
      title: "Senior Fellow, Global Affairs Institute",
      description: "Researched and wrote on the intersection of technology and geopolitics, focusing on AI and digital sovereignty."
    },
    {
      date: "Present",
      title: "Independent Analyst & Writer",
      description: "Engaged in full-time research and writing, culminating in the work presented in this notebook."
    }
]

export default function Biography() {
  return (
    <section id="biography" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-headline text-primary mb-4">Biography</h2>
            <p className="text-lg text-muted-foreground">
            A brief timeline of a journey through public policy, technology, and the constant search for solutions to complex problems.
            </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
          {timelineEvents.map((event, index) => (
            <div key={event.title} className="relative mb-12">
              <div className="flex items-center">
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'order-2 text-left pl-8'}`}>
                  <h3 className="font-headline text-xl md:text-2xl text-primary">{event.title}</h3>
                  <p className="text-muted-foreground mt-1">{event.description}</p>
                </div>
                <div className="w-px flex-shrink-0 order-1">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative flex items-center justify-center">
                            <div className="h-4 w-4 rounded-full bg-primary ring-4 ring-background"></div>
                            <p className="absolute text-sm font-bold text-primary-foreground bg-primary px-3 py-1 rounded-full whitespace-nowrap" style={index % 2 === 0 ? {right: '3rem'} : {left: '3rem'}}>{event.date}</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
