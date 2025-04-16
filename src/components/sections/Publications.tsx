
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, ExternalLink, Info } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Publications = () => {
  const publications = [
    {
      title: "AWARE-NET: Adaptive Weighted Average for Robust Ensemble Network in Deepfake Detection",
      venue: "International Conference on Energy, Power, Environment, Control and Computing (ICEPECC 2025)",
      date: "Feb 2025",
      abstract: "This paper introduces a hierarchical approach to deepfake detection, combining multiple instances of three CNN models (Xception, Res2Net101, EfficientNet-B7) with a learnable weighting mechanism to dynamically merge their predictions. The method enhances detection accuracy across diverse datasets, achieving a 99.22% AUC on FF++ and 100.00% AUC on CelebDF-v2, while reducing false positives by 15% compared to state-of-the-art methods.",
      link: "https://www.researchgate.net/publication/389171866_AWARE-NET_Adaptive_Weighted_Averaging_for_Robust_Ensemble_Network_in_Deepfake_Detection",
      status: "Waiting for Proceedings to Publish"
    },
    {
      title: "Analyzing Frequency Domain Features and Machine Learning Approaches for Deepfake Detection",
      venue: "IEEE Access",
      date: "April 2025",
      abstract: "This study investigates the use of machine learning classifiers with mathematical transformations as frequency-domain feature extractors for efficient deepfake detection. Unlike traditional computationally intensive methods, our approach leverages Discrete Fourier Transform (DFT), Discrete Cosine Transform (DCT), and Wavelet Transform (both individually and in combinations) as feature extractors. These features are processed with machine learning classifiers, enabling quicker and more scalable detection without the heavy computational cost of traditional methods, leading to both speed and increased generalization, making it a promising solution for real-time, large-scale deepfake detection.",
      link: null,
      status: "Under Review"
    },
    {
      title: "Convolutional Neural Networks and Transformer-Based Deepfake Detection: A Comparative Analysis",
      venue: "Not Yet Decided",
      date: "Expected July 2025",
      abstract: "This study evaluates various transfer learning approaches applied to medical image classification tasks. We analyze performance across different medical imaging modalities including X-rays, MRIs, and CT scans, and propose optimization strategies that improve diagnostic accuracy by up to 12% while reducing annotation requirements by 35%.",
      link: null,
      status: "Final Stages"
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
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center text-xs text-muted-foreground italic">
                          <Info className="mr-2 h-4 w-4" />
                          Paper will be available upon publication
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>This paper is currently under review and will be available once published.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
        <Button asChild variant="outline" size="lg" className="bg-card text-card-foreground border-2 border-primary/20 dark:border-primary/30 hover:border-primary/20 hover:bg-accent/80 shadow-sm dark:shadow-primary/">
            <a 
              href="https://scholar.google.com/citations?user=_-ClV0AAAAAJ" 
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
