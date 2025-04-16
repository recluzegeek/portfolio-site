import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const Resume = () => {
  const education = [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "GIFT University",
      location: "Gujranwala, Pakistan",
      period: "2021 - 2025",
      description: "Graduated with Gold Medal and 3.85 CGPA. Focused on software engineering principles, algorithms, and artificial intelligence."
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
      title: "Deep Learning Specialization",
      issuer: "Coursera",
      date: "2024",
      description: "Comprehensive program covering neural networks, improving deep neural networks, structuring machine learning projects, CNNs, and sequence models."
    },
    {
      title: "Linux Foundation Certified System Administrator (LFCS)",
      issuer: "Linux Foundation",
      date: "2023",
      description: "Professional certification demonstrating proficiency in administering Linux servers, covering system installation, user management, networking, and security to ensure efficient and secure Linux-based environments."
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
          <Button asChild className="hover-lift">
            <a href="lovable-uploads/cc2bd8f09bb88b5dd20f9b432631b8ca.pdf" download className="inline-flex items-center">
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
                      <span className="mt-2 md:mt-0 inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
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
                      <span className="mt-2 md:mt-0 inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {item.period}
                      </span>
                    </div>
                    {Array.isArray(item.description) ? (
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        {item.description.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
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
              <Card key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-medium">{item.title}</h4>
                    <span className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-xs">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Issued by: {item.issuer}</p>
                  <p className="text-sm">{item.description}</p>
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
