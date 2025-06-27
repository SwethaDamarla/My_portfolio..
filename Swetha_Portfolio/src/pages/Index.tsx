
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { ResumeSection } from "@/components/ResumeSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { smoothScroll, initScrollAnimations } from "@/utils/animationUtils";

const Index = () => {
  useEffect(() => {
    // Initialize smooth scrolling for anchor links
    smoothScroll();
    
    // Initialize scroll animations
    const cleanup = initScrollAnimations();
    
    // Add scroll-smooth class to html
    document.documentElement.classList.add('scroll-smooth');
    
    return () => {
      cleanup();
      document.documentElement.classList.remove('scroll-smooth');
    };
  }, []);
  
  return (
    <div className="relative">
      {/* Background gradient elements */}
      <div className="fixed top-0 left-0 w-60 h-60 bg-lavender/20 rounded-full blur-3xl -z-10"></div>
      <div className="fixed top-1/3 right-0 w-80 h-80 bg-pink/20 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-0 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl -z-10"></div>
      
      <ThemeToggle />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
