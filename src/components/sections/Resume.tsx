import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Briefcase, GraduationCap, Award, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useState } from "react";

const Resume = () => {
  // State for expanded items in experience section
  const [expandedExperiences, setExpandedExperiences] = useState<number[]>([]);

  const toggleExperienceExpand = (index: number) => {
    setExpandedExperiences(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };
  
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "GIFT University",
      location: "Gujranwala, Pakistan",
      period: "2021 - 2025",
      description: "Graduated with Gold Medal and 3.85 CGPA. Focused on software engineering principles, algorithms, and computer vision."
    }
  ];

  const experience = [
    {
      position: "Jr. Software Developer",
      company: "Cedar Technologies",
      location: "On Site",
      period: "January 2024 - August 2024",
      description: [
        "Designed and developed a desktop application for employee monitoring using Electron and Python, improving workflow tracking by 35%.",
        "Built and deployed a web application integrated with the desktop monitoring tool, supporting 200+ concurrent users.",
        "Created API endpoints to integrate the desktop and web platforms, enabling seamless secure communication.",
        "Implemented token-based authentication shielding 12 critical API endpoints, mitigating potential breaches by 60%.",
        "Set up and configured GitHub Actions to automate CI/CD pipelines, reducing deployment time by 80%.",
        "Conducted code reviews, ensuring best practices were followed, resulting in a 15% improvement in overall code efficiency."
      ]
    },
    {
      position: "Technical Research Writer",
      company: "Freelance",
      location: "Remote",
      period: "December 2021 - February 2022",
      description: [
        "Researched and wrote several articles on emerging technology trends, with a particular focus on the decentralization movement and Web3 technology."
      ]
    }
  ];

  const certifications = [
    {
      title: "Practical Computer Vision with PyTorch",
      issuer: "Hasso Plattner Institute",
      date: "2025",
      credential_id: "ximit-zidyb-bucen-rivep-defyf",
      credential_url: "https://open.hpi.de/verify/ximit-zidyb-bucen-rivep-defyf",
      description: "Covered core CV topics including CNNs, Transformers, Mask R-CNN, CLIP, and diffusion models. Hands-on training with PyTorch, data augmentation, transfer learning, and tools like Weights & Biases and FiftyOne."
    },
    {
      title: "AI Agents Fundamentals",
      issuer: "Huggingface",
      date: "2025",
      credential_id: "recluzegeek",
      credential_url: "https://huggingface.co/datasets/agents-course/certificates/resolve/main/certificates/recluzegeek/2025-05-20.png",
      description: "Introductory course on building and deploying autonomous AI agents using modern agentic frameworks like Smolagents, LangGraph, and LlamaIndex."
    },
    {
      title: "Continuous Delivery and GitOps using ArgoCD",
      issuer: "Akuity - The GitOps Platform for Kubernetes",
      date: "2025",
      credential_id: "c99dbce0-04d2-40a8-9bdf-1b674c551582  ",
      credential_url: "https://www.credential.net/c99dbce0-04d2-40a8-9bdf-1b674c551582",
      description: "Practical certification covering GitOps principles, ArgoCD workflows, continuous delivery pipelines, and Kubernetes-native deployments."
    }
  ];

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Resume" 
          description="My educational background, work experience, and certifications."
          centered={true}
        />
        <div className="text-center mb-12">
        <Button asChild size="lg" variant="default" className="bg-sky-600 hover:bg-sky-700 dark:bg-sky-700 dark:hover:bg-sky-800 text-white">
            <a href="uploads/cc2bd8f09bb88b5dd20f9b432631b8ca.pdf" download className="inline-flex items-center">
              <Download className="mr-2 h-4 w-4" />
              Download Resume (PDF)
            </a>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-16">
          {/* Education Section */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 mr-3 text-primary" />
               <h3 className="text-2xl font-heading font-bold">Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((item, index) => (
                <Card 
                  key={index} 
                  className="animate-fade-up bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-medium">{item.degree}</h4>
                        <p className="text-muted-foreground">{item.institution}, {item.location}</p>
                      </div>
                      <span className="mt-2 md:mt-0 self-start inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm whitespace-nowrap max-w-full">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Experience Section */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="h-6 w-6 mr-3 text-primary" />
              <h3 className="text-2xl font-heading font-bold">Experience</h3>
            </div>
            
            <div className="space-y-8">
              {experience.map((item, index) => (
                <Card key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-medium">{item.position}</h4>
                        <p className="text-muted-foreground">{item.company}, {item.location}</p>
                      </div>
                      <span className="mt-2 md:mt-0 self-start inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm whitespace-nowrap max-w-full">
                        {item.period}
                      </span>
                    </div>
                    {Array.isArray(item.description) ? (
                      <div className="text-sm">
                        {item.description.length > 2 ? (
                          <>
                            <ul className="list-disc list-inside space-y-2">
                              {(expandedExperiences.includes(index) ? item.description : item.description.slice(0, 2)).map((bullet, idx) => (
                                <li key={idx}>{bullet}</li>
                              ))}
                            </ul>
                            {item.description.length > 2 && (
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="mt-2 text-primary flex items-center"
                                onClick={() => toggleExperienceExpand(index)}
                              >
                                {expandedExperiences.includes(index) ? (
                                  <>
                                    Show Less <ChevronUp className="ml-1 h-4 w-4" />
                                  </>
                                ) : (
                                  <>
                                    Read More <ChevronDown className="ml-1 h-4 w-4" />
                                  </>
                                )}
                              </Button>
                            )}
                          </>
                        ) : (
                          <ul className="list-disc list-inside space-y-2">
                            {item.description.map((bullet, idx) => (
                              <li key={idx}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <p className="text-sm">{item.description}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Certifications Section */}
        <div className="mt-16">
          <div className="flex items-center mb-8">
            <Award className="h-6 w-6 mr-3 text-primary" />
            <h3 className="text-2xl font-heading font-bold">Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((item, index) => (
              <Card 
                key={index} 
                className="animate-fade-up" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-medium">{item.title}</h4>
                      <div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="bg-sky-600 hover:bg-sky-700 dark:bg-sky-700 dark:hover:bg-sky-800 text-white hover:text-white transition-all duration-300 group/btn"
                        asChild
                      >
                        <a 
                          href={item.credential_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          View Credential
                          <ExternalLink className="h-3 w-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="font-medium min-w-20">Issued by:</span> 
                      <span className="text-foreground">{item.issuer}</span>
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="font-medium min-w-20">Credential ID:</span>
                      <span className="text-foreground font-mono text-xs">{item.credential_id}</span>
                    </p>
                    <p className="text-sm border-t border-border/50 pt-3 mt-3">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;