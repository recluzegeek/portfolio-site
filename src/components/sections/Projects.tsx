
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Info } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useQuery } from "@tanstack/react-query";
import { fetchOgImage } from "@/utils/fetchOgImage";

const Projects = () => {
  const projects = [
    {
      title: "DeepScan Web",
      description: "A comprehensive web application leveraging deep learning algorithms to detect potential deepfake video content, providing robust authentication and user management features.",
      technologies: ["Laravel", "PHP", "Deep Learning", "MySQL", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1633419461186-7d41ca960f82?q=80&w=800&auto=format&fit=crop",
      githubUrl: "https://github.com/recluzegeek/deepscan-web",
      deployed: false
    },
    {
      title: "DeepScan API",
      description: "High-performance FastAPI-based inference API powering the DeepScan Platform ecosystem, handling real-time video analysis and deepfake detection requests.",
      technologies: ["Python", "FastAPI", "Machine Learning", "Docker", "REST API"],
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop",
      githubUrl: "https://github.com/recluzegeek/deepscan-api",
      deployed: true
    },
    {
      title: "JKeyLogger",
      description: "An educational Java application implementing advanced data structures to capture and analyze keyboard inputs using JNativeHook, demonstrating practical applications of DSA concepts.",
      technologies: ["Java", "JNativeHook", "Data Structures", "OOP"],
      image: "/placeholder.svg",
      githubUrl: "https://github.com/recluzegeek/JKeylogger",
      deployed: false
    },
    {
      title: "Airline Reservation System",
      description: "A comprehensive Java-based flight booking system showcasing advanced OOP principles through features like user management, flight scheduling, and booking operations.",
      technologies: ["Java", "OOP", "JDBC", "MySQL"],
      image: "/placeholder.svg",
      githubUrl: "https://github.com/recluzegeek/AirLineReservationSystem",
      deployed: false
    },
    {
      title: "Black Ash Food Ordering",
      description: "A modern web-based restaurant management system offering seamless food ordering, real-time order tracking, and comprehensive admin controls for menu and order management.",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      image: "/placeholder.svg",
      githubUrl: "https://github.com/recluzegeek/BlackAshFoodOrederingSystem",
      deployed: true
    },
    {
      title: "Smart VPN Proxy",
      description: "A streamlined platform for hosting and managing OpenVPN configuration files, simplifying the process of VPN deployment and configuration distribution.",
      technologies: ["Networking", "OpenVPN", "Web Development"],
      image: "/placeholder.svg",
      githubUrl: "https://github.com/recluzegeek/smart-vpn-proxy",
      deployed: true
    },
    {
      title: "MiniMax Python GUI",
      description: "An interactive visualization tool for the MiniMax algorithm with Alpha-Beta pruning, providing insights into AI decision-making processes through a graphical interface.",
      technologies: ["Python", "AI", "GUI", "Algorithms"],
      image: "/placeholder.svg",
      githubUrl: "https://github.com/recluzegeek/MiniMaxPythonGUI",
      deployed: false
    },
    {
      title: "DeepScan Extension",
      description: "A browser extension component of the DeepScan ecosystem, enabling users to analyze videos for potential deepfake content directly from their web browser.",
      technologies: ["JavaScript", "Browser Extension", "API Integration"],
      image: "/placeholder.svg",
      githubUrl: "https://github.com/recluzegeek/deepscan-extension",
      deployed: true
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
              <div className="relative aspect-video bg-muted flex items-center justify-center overflow-hidden">
                <img 
                  src={ogImageResults[index].data || project.image} 
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
                <Button asChild variant="outline" size="sm" className="bg-sky-400/10 hover:bg-sky-400/20 text-sky-500">
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
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="sm" variant="secondary" className="inline-flex items-center">
                          <Info className="mr-2 h-4 w-4" />
                          Run Locally
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>This project needs to be run locally. Check the README file in the GitHub repository for setup instructions.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild variant="outline" className="bg-sky-400 hover:bg-sky-500 text-white">
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
