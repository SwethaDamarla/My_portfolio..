
import { ScrollAnimation } from "./ScrollAnimation";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "Java", "Python"],
    },
    {
      title: "Full Stack Development",
      skills: ["Python Full Stack", "Java Full Stack"],
    },
    {
      title: "Frontend Technologies",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Database",
      skills: ["MySQL", "PostgreSQL"],
    },
  ];
  
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <ScrollAnimation>
          <h2 className="section-title">Technical Skills</h2>
        </ScrollAnimation>
        
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {skillCategories.map((category, index) => (
            <ScrollAnimation key={index}>
              <div className="bg-white dark:bg-accent/20 rounded-lg p-6 shadow-sm h-full card-hover-effect group hover:bg-gradient-to-br hover:from-lavender/10 hover:to-pink/10">
                <h3 className="font-serif text-xl font-semibold mb-4 group-hover:text-primary transition-colors">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={skill} 
                      className="skill-tag animate-float" 
                      style={{animationDelay: `${(index * 0.1) + (i * 0.05)}s`}}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
