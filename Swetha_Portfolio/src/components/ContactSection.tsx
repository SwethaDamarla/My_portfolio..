
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";

export function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "swethapriya2804@gmail.com",
      href: "mailto:swethapriya2804@gmail.com"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Placement Email",
      value: "2200030297cseh@gmail.com",
      href: "mailto:2200030297cseh@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 8328402567",
      href: "tel:+918328402567"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Chirala, Andhra Pradesh, India",
      href: "#"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "Swetha Priya Damarla",
      href: "https://www.linkedin.com/in/swetha-priya-damarla-087a492b2"
    }
  ];
  
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <ScrollAnimation>
          <h2 className="section-title">Get In Touch</h2>
        </ScrollAnimation>
        
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <ScrollAnimation>
            <div className="bg-white dark:bg-accent/20 rounded-lg p-6 shadow-sm card-hover-effect">
              <h3 className="font-serif text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : ""}
                    className="flex items-start gap-4 hover:text-primary transition-colors group animate-slide-in-left"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="mt-1 text-primary group-hover:scale-125 transition-transform">{item.icon}</div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation>
            <div className="bg-gradient-to-br from-lavender/20 to-pink/20 rounded-lg p-6 shadow-sm h-full flex flex-col justify-center card-hover-effect">
              <h3 className="font-serif text-xl font-bold mb-4 animate-pulse-glow">Let's Connect</h3>
              <p className="mb-6 animate-reveal-up">
                Thank you for visiting my portfolio! I'm always open to new opportunities, collaborations, or just a friendly chat about technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:swethapriya2804@gmail.com" 
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-md text-center hover:opacity-90 transition-opacity hover:scale-105 transform duration-200"
                >
                  Send Email
                </a>
                <a 
                  href="https://www.linkedin.com/in/swetha-priya-damarla-087a492b2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#0077b5] text-white px-6 py-3 rounded-md text-center hover:opacity-90 transition-opacity hover:scale-105 transform duration-200 flex items-center justify-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
