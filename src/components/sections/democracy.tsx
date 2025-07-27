import { Landmark, Fingerprint, Globe } from "lucide-react";

export default function Democracy() {
  return (
    <section id="democracy" className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-headline text-cyan-300 mb-4">The Future of Democracy</h2>
                <p className="text-lg text-slate-300/80">
                In an era of resurgent populism, digital disruption, and challenged sovereignty, how must democratic principles adapt to not only survive, but thrive?
                </p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-lg p-8 md:p-12 border border-slate-700 shadow-2xl shadow-cyan-500/10">
                <div className="space-y-10">
                    <div className="flex items-start gap-6">
                        <div className="text-cyan-400 pt-1"><Landmark className="h-8 w-8"/></div>
                        <div>
                            <h3 className="text-xl font-bold font-headline mb-2 text-cyan-300">The New Populism</h3>
                            <p className="text-slate-300">A wave of anti-establishment sentiment is reshaping political landscapes worldwide. It challenges traditional institutions and forces a re-examination of who holds power and for whom they speak. Understanding its roots is the first step toward a more resilient democratic future.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6">
                         <div className="text-cyan-400 pt-1"><Fingerprint className="h-8 w-8"/></div>
                        <div>
                            <h3 className="text-xl font-bold font-headline mb-2 text-cyan-300">Digital Rights & Sovereignty</h3>
                            <p className="text-slate-300">The digital realm is the new public square, battlefield, and marketplace. Protecting individual rights to privacy and expression while asserting national sovereignty against the influence of tech giants and foreign actors is the central struggle of our time.</p>
                        </div>
                    </div>
                    <blockquote className="border-l-4 border-cyan-400 pl-6 py-2 my-8 italic text-lg text-slate-200">
                    "Democracy is not a destination, but a constant process of negotiation, adaptation, and reaffirmation of core values in the face of new realities."
                    </blockquote>
                    <div className="flex items-start gap-6">
                        <div className="text-cyan-400 pt-1"><Globe className="h-8 w-8"/></div>
                        <div>
                            <h3 className="text-xl font-bold font-headline mb-2 text-cyan-300">A Forward-Looking Argument</h3>
                            <p className="text-slate-300">We cannot retreat into old paradigms. The future requires a reimagined social contract—one that is digitally native, fiercely protective of individual liberty, and capable of fostering collective action on a global scale. It's a call for a more agile, transparent, and participatory form of governance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
