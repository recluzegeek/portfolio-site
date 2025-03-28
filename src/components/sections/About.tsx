
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillBadge } from "@/components/ui/skill-badge";

const About = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "PHP", "C++", "SQL"]
    },
    {
      category: "Frameworks",
      items: ["Laravel", "FastAPI", "Vue.js", "React", "TensorFlow", "PyTorch"]
    },
    {
      category: "Technologies",
      items: ["Machine Learning", "Computer Vision", "Cloud Computing", "Docker", "API Development"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VSCode", "Jupyter Notebook", "Linux"]
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
              <p>
                I'm a dedicated Software Engineer with a strong focus on Computer Vision, AI, and Machine Learning. 
                My journey in technology is driven by a passion for solving complex problems and creating innovative solutions 
                that bridge the gap between theoretical concepts and practical applications.
              </p>
              <p>
                Having specialized in computer vision, I've developed a keen interest in creating systems that can interpret 
                and analyze visual data with human-like precision. My work ranges from developing web applications to 
                implementing sophisticated algorithms for image and video processing.
              </p>
              <p>
                I believe in the power of continuous learning and staying abreast of the latest technological advancements. 
                This approach has helped me build versatile skills across multiple domains of software engineering and AI.
              </p>
            </div>
            
            <div className="mt-8">
              <Button asChild variant="outline" className="hover-lift">
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
