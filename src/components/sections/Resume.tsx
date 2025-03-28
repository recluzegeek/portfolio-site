
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const Resume = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University Example",
      location: "City, Country",
      period: "2021 - 2023",
      description: "Specialized in Artificial Intelligence and Computer Vision. Research focus on deepfake detection and machine learning algorithms."
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "University Example",
      location: "City, Country",
      period: "2017 - 2021",
      description: "Graduated with honors. Final project: Development of an automated system for image classification using CNNs."
    }
  ];

  const experience = [
    {
      position: "Software Engineering Intern",
      company: "Tech Company Example",
      location: "City, Country",
      period: "Summer 2022",
      description: "Developed and implemented computer vision algorithms for product detection and classification. Worked with Python, OpenCV, and TensorFlow."
    },
    {
      position: "Research Assistant",
      company: "AI Research Lab",
      location: "University Example",
      period: "2021 - 2023",
      description: "Conducted research on computer vision applications in medical imaging. Developed and tested deep learning models for image segmentation and classification."
    },
    {
      position: "Web Developer",
      company: "Web Solutions Example",
      location: "Remote",
      period: "2019 - 2021",
      description: "Designed and developed responsive web applications using modern front-end frameworks and back-end technologies."
    }
  ];

  const certifications = [
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera",
      date: "2022",
      description: "Comprehensive program covering neural networks, improving deep neural networks, structuring machine learning projects, CNNs, and sequence models."
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2021",
      description: "Professional certification demonstrating proficiency in using TensorFlow to solve deep learning and ML problems."
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
            <a href="#" download className="inline-flex items-center">
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
                <Card key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
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
                    <p className="text-sm">{item.description}</p>
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
