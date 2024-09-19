import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BenefitSection from "@/Containers/Home/BenefitSection";
import CardsSection from "@/Containers/Home/CardsSection";
import DataSection from "@/Containers/Home/DataSection";
import HeroSection from "@/Containers/Home/HeroSection";
import ImageSection from "@/Containers/Home/ImageSection";
import LastSection from "@/Containers/Home/LastSection";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <Header />
      <main className="lg:px-20 max-sm:px-20">
        {/*Sections*/}
        <HeroSection />
        <DataSection />
        <ImageSection />
        <CardsSection />
        <BenefitSection />
        <LastSection />
      </main>
      <Footer />
    </div>
  );
}
