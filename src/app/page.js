import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BenefitSection from "@/Containers/BenefitSection";
import CardsSection from "@/Containers/CardsSection";
import DataSection from "@/Containers/DataSection";
import HeroSection from "@/Containers/HeroSection";
import ImageSection from "@/Containers/ImageSection";
import LastSection from "@/Containers/LastSection";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <Header />
      <main className=" px-20">
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
