import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Democracy from '@/components/sections/democracy';

export default function DemocracyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Democracy />
      </main>
      <Footer />
    </div>
  );
}
