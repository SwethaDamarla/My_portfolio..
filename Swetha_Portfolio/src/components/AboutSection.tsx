import { ScrollAnimation } from "./ScrollAnimation";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 animate-fade-in-down">
            About Me
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <ScrollAnimation>
            <div className="flex justify-center">
              <img
                src="profile.jpg"
                alt="Swetha Priya Damarla"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/20 shadow-lg transition-transform duration-300 hover:scale-105 animate-fade-in"
              />
            </div>
          </ScrollAnimation>

          {/* Text and Details */}
          <ScrollAnimation className="space-y-6">
            <p className="text-lg font-medium animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              I'm D Swetha Priya, a CSE student at KLU
            </p>
            <p className="text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Currently pursuing my B.Tech degree with a CGPA of 9.09/10.00, I specialize in full-stack development using Python and Java. I enjoy building applications that solve real-world problems and provide elegant user experiences. When I'm not coding, you'll find me listening to music and exploring new technologies to enhance my skills. I'm particularly interested in web development and database management.
            </p>

            {/* Personal Details */}
            <div className="bg-accent/10 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in-right" style={{ animationDelay: "0.6s" }}>
              <h3 className="font-serif text-xl font-bold mb-4">Personal Details</h3>
              <div className="space-y-3">
                {[
                  { label: "Full Name", value: "Damarla Swetha Priya" },
                  { label: "Location", value: "Chirala" },
                  { label: "Email", value: "swethapriya2804@gmail.com", href: "mailto:swethapriya2804@gmail.com" },
                  { label: "Placement Email", value: "2200030297cseh@gmail.com", href: "mailto:2200030297cseh@gmail.com" },
                  { label: "Phone", value: "+91 8328402567", href: "tel:+918328402567" },
                  { label: "LinkedIn", value: "View Profile", href: "https://www.linkedin.com/in/swetha-priya-damarla-087a492b2", target: "_blank", rel: "noopener noreferrer" },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center animate-fade-in-up"
                    style={{ animationDelay: `${0.2 * (index + 1)}s` }}
                  >
                    <span className="font-medium text-sm md:text-base">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="text-primary hover:underline text-sm md:text-base" target={item.target} rel={item.rel}>
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm md:text-base">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Hobbies & Interests */}
        <ScrollAnimation className="mt-12">
          <div className="bg-accent/10 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in-up">
            <h3 className="font-serif text-xl font-bold mb-4">Hobbies & Interests</h3>
            <div className="flex flex-wrap gap-3">
              {["Listening to Music", "Problem Solving", "Web Development", "Database Design", "Learning New Technologies"].map((hobby, index) => (
                <span
                  key={hobby}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm transition-transform duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}