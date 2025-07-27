import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Climate from '@/components/sections/climate';

export default function ClimatePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Climate />
      </main>
      <Footer />
    </div>
  );
}
