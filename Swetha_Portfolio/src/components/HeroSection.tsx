import { ArrowDown } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <ScrollAnimation>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 relative inline-block">
            Hello, I'm <span className="gradient-text animate-pulse-glow">Swetha Priya Damarla</span>
            <div className="absolute -bottom-4 -right-8 w-24 h-24 bg-accent rounded-full -z-10 opacity-60 animate-float"></div>
            <div className="absolute -top-4 -left-8 w-16 h-16 bg-lavender/30 rounded-full -z-10 opacity-60 animate-float" style={{ animationDelay: "1s" }}></div>
          </h1>
        </ScrollAnimation>

        <ScrollAnimation className="delay-300">
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto animate-typing">
            A Computer Science Engineering student in Data Science
          </p>
        </ScrollAnimation>

        <ScrollAnimation className="mt-8 delay-500">
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:opacity-90 transition-all hover:scale-105 transform duration-300 animate-pulse-glow"
          >
            Explore My Work
            <ArrowDown className="h-4 w-4 animate-bounce-light" />
          </a>
        </ScrollAnimation>
      </div>
    </section>
  );
}