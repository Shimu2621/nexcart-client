"use client";

import { ScrollToTop } from "@/components/common/ScrollToTop";

import { AboutUsSection } from "@/components/Sections/AboutUsSection";
import { BasicServicesSection } from "@/components/Sections/BasicServicesSection";
import CategoriesSection from "@/components/Sections/CategoriesSection";
// import CategoryFlex from "@/components/Sections/CategoryFlex";
import { ContactUsSection } from "@/components/Sections/ContactUsSection";
import { FeaturedProducts } from "@/components/Sections/FeaturedProduct";
import HeroSection from "@/components/Sections/HeroSection";
// import { HeroSection } from "@/components/Sections/HeroSection";
import { NewsletterSection } from "@/components/Sections/NewsletterSection";
// import { ServicesSection } from "@/components/Sections/ServicesSection";
// import { StatsSection } from "@/components/Sections/StatsSection";
import { TestimonialSection } from "@/components/Sections/TestimonialSection";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* <CategoryFlex /> */}
      {/* <HeroSection /> */}
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <AboutUsSection />
      <BasicServicesSection />
      {/* <ServicesSection /> */}
      {/* <StatsSection /> */}
      <NewsletterSection />
      <TestimonialSection />
      {/* <BlogSection /> */}
      <ContactUsSection />
      <ScrollToTop />
    </div>
  );
}
