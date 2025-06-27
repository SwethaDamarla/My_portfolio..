import { ScrollAnimation } from "./ScrollAnimation";
import { FileDown } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 px-4 bg-accent/20">
      <div className="container mx-auto max-w-4xl text-center">
        <ScrollAnimation>
          <h2 className="section-title mx-auto">Resume</h2>
        </ScrollAnimation>

        <ScrollAnimation className="mt-8">
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Download my resume to get a comprehensive overview of my skills, education, and professional experiences.
          </p>

          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-lavender to-pink blur-md opacity-70 group-hover:opacity-100 transition-opacity rounded-md animate-pulse-glow"></div>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="Swetha priya....resume.docx"
                  className="relative inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md hover:opacity-90 transition-all font-medium hover:scale-105 transform duration-300"
                  download
                >
                  <FileDown className="h-5 w-5" />
                  Download Resume
                </a>
              </TooltipTrigger>
              <TooltipContent>
                Click to download my resume
              </TooltipContent>
            </Tooltip>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}