import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BenefitSection from "@/Containers/AboutUs/BenefitsSection";
import ChooseUsSection from "@/Containers/AboutUs/ChooseUsSection";
import DetailSection from "@/Containers/AboutUs/DetailSection";
import HeroSection from "@/Containers/AboutUs/HeroSection";
import InfoCardSection from "@/Containers/AboutUs/InfoCardSection";
import LastSection from "@/Containers/AboutUs/LastSection";
import StorySection from "@/Containers/AboutUs/StorySection";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center mx-auto section-container">
        <main>
          {/*---Sections----*/}
          <div className="">
            <HeroSection />
            <InfoCardSection />
            <DetailSection />
            <BenefitSection />
            <ChooseUsSection />
            <StorySection />
            <LastSection />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
