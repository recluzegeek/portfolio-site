
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Info } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useQuery } from "@tanstack/react-query";
import { fetchOgImage } from "@/utils/fetchOgImage";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const Projects = () => {
  const projects = [
    {
      title: "Airline Reservation System",
      description: "A comprehensive Java-based flight booking system showcasing advanced OOP principles through features like user management, flight scheduling, and booking operations.",
      technologies: ["Java", "OOP"],
      image: "https://opengraph.githubassets.com/71c1dc30489c8fbc3d0d8296303d69b7bf11c704ca1d217d6b1eff1a1d0baad6/recluzegeek/AirLineReservationSystem",
      githubUrl: "https://github.com/recluzegeek/AirLineReservationSystem",
      deployed: false
    },
    {
      title: "DeepScan Web",
      description: "A comprehensive web application leveraging deep learning algorithms to detect potential deepfake video content, providing robust authentication and user management features.",
      technologies: ["Laravel", "PHP", "Deep Learning", "MariaDB", "Vue.js", "MinIO", "Redis"],
      image: "https://opengraph.githubassets.com/71c1dc30489c8fbc3d0d8296303d69b7bf11c704ca1d217d6b1eff1a1d0baad6/recluzegeek/deepscan-web",
      githubUrl: "https://github.com/recluzegeek/deepscan-web",
      deployed: false
    },
    {
      title: "DeepScan API",
      description: "High-performance FastAPI-based inference API powering the DeepScan Platform ecosystem, handling real-time video analysis and deepfake detection requests.",
      technologies: ["Python", "FastAPI", "Machine Learning", "Docker", "REST API"],
      image: "https://opengraph.githubassets.com/71c1dc30489c8fbc3d0d8296303d69b7bf11c704ca1d217d6b1eff1a1d0baad6/recluzegeek/deepscan-api",
      githubUrl: "https://github.com/recluzegeek/deepscan-api",
      deployed: false
    },
    {
      title: "DeepScan Extension",
      description: "A browser extension component of the DeepScan ecosystem, enabling users to analyze videos for potential deepfake content directly from their web browser.",
      technologies: ["JavaScript", "Browser Extension", "API Integration"],
      image: "https://opengraph.githubassets.com/71c1dc30489c8fbc3d0d8296303d69b7bf11c704ca1d217d6b1eff1a1d0baad6/recluzegeek/deepscan-extension",
      githubUrl: "https://github.com/recluzegeek/deepscan-extension",
      deployed: false
    },
    {
      title: "MiniMax Python GUI",
      description: "An interactive visualization tool for the MiniMax algorithm with Alpha-Beta pruning, providing insights into AI decision-making processes through a graphical interface.",
      technologies: ["Python", "AI", "GUI", "Algorithms"],
      image: "https://opengraph.githubassets.com/71c1dc30489c8fbc3d0d8296303d69b7bf11c704ca1d217d6b1eff1a1d0baad6/recluzegeek/MiniMaxPythonGUI",
      githubUrl: "https://github.com/recluzegeek/MiniMaxPythonGUI",
      deployed: false
    },
    {
      title: "JKeyLogger",
      description: "An educational Java application implementing advanced data structures to capture and analyze keyboard inputs using JNativeHook, demonstrating practical applications of DSA concepts.",
      technologies: ["Java", "JNativeHook", "Data Structures", "OOP"],
      image: "https://opengraph.githubassets.com/71c1dc30489c8fbc3d0d8296303d69b7bf11c704ca1d217d6b1eff1a1d0baad6/recluzegeek/JKeyLogger",
      githubUrl: "https://github.com/recluzegeek/JKeylogger",
      deployed: false
    },
    {
      title: "Black Ash Food Ordering",
      description: "A modern web-based restaurant management system offering seamless food ordering, real-time order tracking, and comprehensive admin controls for menu and order management.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
      image: "https://opengraph.githubassets.com/71c1dc30489c8fbc3d0d8296303d69b7bf11c704ca1d217d6b1eff1a1d0baad6/recluzegeek/BlackAshFoodOrderingSystem",
      githubUrl: "https://github.com/recluzegeek/BlackAshFoodOrderingSystem",
      deployed: false
    },
    {
      title: "Smart VPN Proxy",
      description: "A streamlined platform for hosting and managing OpenVPN configuration files, simplifying the process of VPN deployment and configuration distribution.",
      technologies: ["Networking", "OpenVPN", "Web Development", "Server Management"],
      image: "https://opengraph.githubassets.com/71c1dc30489c8fbc3d0d8296303d69b7bf11c704ca1d217d6b1eff1a1d0baad6/recluzegeek/smart-vpn-proxy",
      githubUrl: "https://github.com/recluzegeek/smart-vpn-proxy",
      deployed: false
    }
  ];

  // Fetch OG images for each project
  const ogImageQueries = projects.map(project => ({
    queryKey: ['ogImage', project.githubUrl],
    queryFn: () => fetchOgImage(project.githubUrl),
    staleTime: Infinity
  }));

  const ogImageResults = ogImageQueries.map(query => useQuery(query));

  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="My Projects" 
          description="A showcase of my technical expertise across various domains including AI, web development, and system design."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover-lift overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 animate-fade-up shadow-md" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative bg-muted flex items-center justify-center overflow-hidden">
                <img 
                  src={ project.image || ogImageResults[index].data} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = project.image || '/placeholder.svg';
                  }}
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-medium">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline" size="sm" className="bg-sky-400/10 hover:bg-sky-400/20 ">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
                
                {project.deployed ? (
                  <Button asChild size="sm" className="bg-sky-400 hover:bg-sky-500 text-white">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                ) : (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button size="sm" variant="secondary" className="inline-flex items-center">
                        <Info className="mr-2 h-4 w-4" />
                        Run Locally
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 p-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Local Setup Required</h4>
                        <p className="text-sm">This project needs to be run locally.</p>
                        <p className="text-sm">Check the README file in the GitHub repository for complete setup instructions.</p>
                      </div>
                    </PopoverContent>
                  </Popover>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
        <Button asChild size="lg" variant="default" className="bg-sky-600 hover:bg-sky-700 dark:bg-sky-700 dark:hover:bg-sky-800 text-white">
        <a 
              href="https://github.com/recluzegeek" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Github className="mr-2 h-4 w-4" />
              View More on GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;