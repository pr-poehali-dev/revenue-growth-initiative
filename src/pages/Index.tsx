import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { AdvantagesSection } from "@/components/AdvantagesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { CasesSection } from "@/components/CasesSection";
import { QuizSection } from "@/components/QuizSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <AdvantagesSection />
      <ProductsSection />
      <CasesSection />
      <QuizSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
