
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
                Hi, I'm Muhammad Salman, a Software Engineer with a background in Computer Science, 
                passionate about software development and computer vision. I love working on projects 
                that challenge me and allow me to build scalable, efficient systems. Throughout my 
                academic journey, I've had the opportunity to dive deep into programming, and I'm 
                excited to apply my knowledge to real-world problems.
              </p>
              <p>
                I enjoy tackling challenges that allow me to grow and contribute to meaningful projects. 
                I've worked on a range of projects, from web apps to deepfake video detection systems, 
                and I'm always looking for ways to improve and learn new technologies. I thrive in 
                environments that encourage creativity and collaboration, and I'm eager to contribute 
                to innovative teams that make a difference.
              </p>
              <p>
                In addition to my hands-on work, I've authored several research papers in the field 
                of computer vision, and they are currently in the publication pipeline. These experiences 
                have further sharpened my analytical skills and deepened my understanding of AI and 
                machine learning.
              </p>
              <p>
                When I'm not coding, I enjoy exploring the latest in cloud computing, automation, and AI. 
                Let's connect – I'd love to chat about tech, innovation, or any new opportunities. 
                Feel free to check out my portfolio in the Projects section below, or visit me 
                on github@recluzegeek.
              </p>
            </div>
            
            <div className="mt-8">
              <Button 
                asChild 
                className="bg-sky-500 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
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
