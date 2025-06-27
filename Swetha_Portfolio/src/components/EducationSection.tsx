
import { ScrollAnimation } from "./ScrollAnimation";

export function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "K L University",
      location: "Vijayawada",
      period: "2022 – 2026",
      grade: "GPA: 9.09/10.00",
    },
    {
      degree: "Intermediate Education",
      institution: "Vignana Bharathi Junior College",
      location: "Chirala",
      period: "2020 - 2022",
      grade: "Board of Intermediate Education (Marks: 795/1000)",
    },
    {
      degree: "Secondary Education",
      institution: "St. Ann's School",
      location: "Chirala",
      period: "2019-2020",
      grade: "Indian Council of Secondary Education (Marks: 395/600)",
    },
  ];
  
  return (
    <section id="education" className="py-20 px-4 bg-accent/20">
      <div className="container mx-auto max-w-4xl">
        <ScrollAnimation>
          <h2 className="section-title">Education</h2>
        </ScrollAnimation>
        
        <div className="mt-12">
          {education.map((item, index) => (
            <ScrollAnimation 
              key={index} 
              className={`timeline-item ${index === education.length - 1 ? "" : "mb-8"}`}
            >
              <div className="relative">
                <div className="absolute -left-10 -top-2 w-4 h-4 rounded-full bg-lavender animate-pulse-glow"></div>
              </div>
              <h3 className="font-serif text-xl font-bold">{item.degree}</h3>
              <p className="text-lg text-primary font-medium">{item.institution}</p>
              <div className="flex flex-col sm:flex-row sm:justify-between text-sm mt-1">
                <p className="text-muted-foreground">{item.location}</p>
                <p className="text-muted-foreground">{item.period}</p>
              </div>
              <p className="mt-1 font-medium">{item.grade}</p>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
