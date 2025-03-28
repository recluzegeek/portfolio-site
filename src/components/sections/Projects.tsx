
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const Projects = () => {
  const projects = [
    {
      title: "Deepfake Video Detection Platform",
      description: "A comprehensive platform for detecting deepfake videos, consisting of a web application, browser extension, and API endpoints.",
      technologies: ["Python", "TensorFlow", "FastAPI", "React", "Docker"],
      image: "/placeholder.svg",
      githubUrl: "https://github.com/recluzegeek/deepfake-detection",
      demoUrl: "#"
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product management, user authentication, and payment integration.",
      technologies: ["PHP", "Laravel", "MySQL", "Vue.js", "Bootstrap"],
      image: "/placeholder.svg",
      githubUrl: "https://github.com/recluzegeek/ecommerce-platform",
      demoUrl: "#"
    },
    {
      title: "Real-time Object Detection System",
      description: "A real-time object detection system using computer vision techniques to identify and track objects in video streams.",
      technologies: ["Python", "OpenCV", "PyTorch", "YOLO", "Flask"],
      image: "/placeholder.svg",
      githubUrl: "https://github.com/recluzegeek/object-detection",
      demoUrl: "#"
    },
    {
      title: "Personal Task Manager",
      description: "A responsive web application for managing personal tasks with features like categorization, priorities, and notifications.",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
      image: "/placeholder.svg",
      githubUrl: "https://github.com/recluzegeek/task-manager",
      demoUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="My Projects" 
          description="Here are some of my key projects that showcase my skills and expertise in software development, computer vision, and machine learning."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-lift overflow-hidden border border-border/50 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="h-48 bg-muted flex items-center justify-center overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-medium">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline" size="sm">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                
                <Button asChild size="sm">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild variant="outline">
            <a 
              href="https://github.com/recluzegeek" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Github className="mr-2 h-4 w-4" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
