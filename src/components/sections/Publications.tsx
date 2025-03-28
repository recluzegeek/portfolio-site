
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const Publications = () => {
  const publications = [
    {
      title: "Enhancing Deepfake Detection: A Novel Approach Using Convolutional Neural Networks",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
      date: "June 2023",
      abstract: "This paper presents a novel approach to deepfake detection using convolutional neural networks combined with attention mechanisms. We demonstrate improved accuracy in identifying manipulated videos across diverse datasets.",
      link: "#",
      status: "Published"
    },
    {
      title: "Real-time Object Recognition in Resource-Constrained Environments",
      venue: "International Journal of Computer Vision",
      date: "October 2023",
      abstract: "We propose an efficient object recognition system designed to work in resource-constrained environments. Our approach achieves comparable accuracy to state-of-the-art models while requiring significantly less computational power.",
      link: "#",
      status: "Published"
    },
    {
      title: "A Comparative Analysis of Transfer Learning Techniques for Medical Image Classification",
      venue: "Medical Image Analysis",
      date: "Expected March 2024",
      abstract: "This study evaluates various transfer learning approaches applied to medical image classification tasks. We analyze performance across different medical imaging modalities and propose optimization strategies.",
      link: null,
      status: "Under Review"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Publications" 
          description="My research contributions in computer vision, artificial intelligence, and machine learning."
          centered={true}
        />
        
        <div className="space-y-6">
          {publications.map((publication, index) => (
            <Card key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="text-xl">{publication.title}</CardTitle>
                <CardDescription className="flex flex-wrap items-center gap-2 mt-1">
                  <BookOpen className="h-4 w-4" />
                  <span>{publication.venue}</span>
                  <span className="mx-2">•</span>
                  <Calendar className="h-4 w-4" />
                  <span>{publication.date}</span>
                  <span className="mx-2">•</span>
                  <span className={publication.status === "Published" ? "text-green-500" : "text-amber-500"}>
                    {publication.status}
                  </span>
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-muted-foreground">{publication.abstract}</p>
              </CardContent>
              
              <CardFooter>
                {publication.link ? (
                  <Button asChild variant="outline" size="sm">
                    <a 
                      href={publication.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Paper
                    </a>
                  </Button>
                ) : (
                  <span className="text-xs text-muted-foreground italic">
                    Paper will be available upon publication
                  </span>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild variant="outline">
            <a 
              href="https://scholar.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              View on Google Scholar
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Publications;
