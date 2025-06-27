
import { ScrollAnimation } from "./ScrollAnimation";
import { Github } from "lucide-react";
import { Button } from "./ui/button";

export function ProjectsSection() {
  const projects = [
    {
      title: "Hospital Management System",
      description: "A comprehensive system for managing hospital operations using Python and PostgreSQL.",
      points: [
        "Designed a Hospital Management System using Python with PostgreSQL as the backend.",
        "Implemented CRUD operations for managing patient records, doctor details, and appointments.",
        "Developed a structured database in PostgreSQL for efficient data storage and retrieval."
      ],
      tags: ["Python", "PostgreSQL", "Database Design", "CRUD Operations"],
      github: "https://github.com/"
    },
    {
      title: "Tribal Handicrafts Management System",
      description: "A full-stack web application for managing tribal handicrafts inventory and sales.",
      points: [
        "Designed a full-stack web application for managing tribal handicrafts using Java and MySQL.",
        "Implemented CRUD operations for product listings, orders, and user management.",
        "Developed a basic front-end interface, with plans for further UI enhancements.",
        "Built a secure backend to handle data storage and retrieval."
      ],
      tags: ["Java", "MySQL", "Full Stack", "Web Development"],
      github: "https://github.com/"
    }
  ];
  
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto max-w-4xl">
        <ScrollAnimation>
          <h2 className="section-title">Projects</h2>
        </ScrollAnimation>
        
        <div className="mt-10 space-y-10">
          {projects.map((project, index) => (
            <ScrollAnimation key={index}>
              <div className="project-card group transition-all duration-500 hover:bg-gradient-to-br hover:from-lavender/10 hover:to-pink/10 card-hover-effect">
                <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <ul className="list-disc list-inside space-y-2 mb-6">
                  {project.points.map((point, i) => (
                    <li key={i} className="text-sm animate-reveal-up" style={{animationDelay: `${i * 0.1 + 0.2}s`}}>{point}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={tag} className="skill-tag animate-float" style={{animationDelay: `${i * 0.1}s`}}>{tag}</span>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground group-hover:scale-105 transition-transform"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 animate-slide-in-left" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
