
import { Button } from "@/components/ui/button";
import { Link, Section } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillBadge } from "@/components/ui/skill-badge";

const About = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "Java", "JavaScript", "PHP", "C++", "SQL"]
    },
    {
      category: "Frameworks",
      items: ["Laravel", "FastAPI", "Vue.js", "React", "PyTorch"]
    },
    {
      category: "Fields",
      items: ["ML & DL", "Computer Vision", "Cloud Computing", "API Development"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Vagrant", "Docker" ,"Linux"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-1/2 animate-fade-up">
            <SectionHeading 
              title="About Me" 
              centered={false}
            />
            
            <div className="space-y-4 text-base">
              <p>I’m a Software Engineer with a Computer Science background, passionate about software development and computer vision. I love tackling challenging projects that allow me to build scalable systems and apply my programming knowledge to real-world problems. My experience spans from web apps to deepfake detection, and I’m always eager to learn and grow in new technologies.</p>
              
              <p>In addition to my hands-on work, I’ve authored several research papers in computer vision, deepening my understanding of AI and machine learning. Outside of coding, I explore cloud computing, automation, and AI. Let’s connect – I’d love to discuss tech and innovation!</p>
            </div>
            
            <div className="mt-8">
            <Button asChild size="lg" variant="default" className="bg-sky-600 hover:bg-sky-700 dark:bg-sky-700 dark:hover:bg-sky-800 text-white">
                <a href="#resume" className="inline-flex items-center">
                  <Link className="mr-2 h-4 w-4" />
                  View My Resume
                </a>
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-heading font-bold mb-6">My Skills</h3>
            
            <div className="space-y-6">
              {skills.map((skillGroup, groupIndex) => (
                <div key={skillGroup.category} className="animate-fade-up" style={{ animationDelay: `${0.2 + (groupIndex * 0.1)}s` }}>
                  <h4 className="text-lg font-medium mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <SkillBadge key={skill} name={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
