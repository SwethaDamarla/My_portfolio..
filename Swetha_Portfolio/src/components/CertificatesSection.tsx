
import { ScrollAnimation } from "./ScrollAnimation";
import { ExternalLink } from "lucide-react";

export function CertificatesSection() {
  const certificates = [
    {
      title: "Red Hat Certified Enterprise Application Developer",
      date: "November 2024",
      description: [
        "Mastered the Enterprise Application development through Java.",
        "Acquired foundational insights into Network and Web Security, enhancing overall digital competence."
      ],
      link: "https://onedrive.live.com/"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      date: "April 2024",
      description: [
        "Gained foundational knowledge of AWS cloud services, architecture, and best practices.",
        "Developed an understanding of cloud security, identity management, and compliance.",
        "Learned AWS pricing models, deployment strategies, and management tools for cloud solutions."
      ],
      link: "https://onedrive.live.com/"
    }
  ];
  
  return (
    <section id="certificates" className="py-20 px-4 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto max-w-4xl">
        <ScrollAnimation>
          <h2 className="section-title">Certificates</h2>
        </ScrollAnimation>
        
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {certificates.map((certificate, index) => (
            <ScrollAnimation key={index}>
              <div className="project-card h-full flex flex-col group hover:bg-gradient-to-br hover:from-lavender/10 hover:to-pink/10 card-hover-effect">
                <div className="flex-grow">
                  <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">{certificate.title}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{certificate.date}</p>
                  
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    {certificate.description.map((point, i) => (
                      <li key={i} className="text-sm animate-reveal-up" style={{animationDelay: `${i * 0.1 + 0.2}s`}}>{point}</li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href={certificate.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline mt-4 group-hover:scale-105 transition-transform"
                >
                  <ExternalLink className="h-4 w-4 animate-pulse-glow" />
                  View Certificate
                </a>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
