
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MessageSquare, MapPin, ExternalLink } from "lucide-react";

const ContactInfo = () => (
  <div className="space-y-8 h-full">
    <div>
      <SectionHeading 
        title="Get In Touch" 
        description="I'm open to new opportunities, collaborations, or discussions on software engineering, computer vision, and AI."
        centered={true}
      />
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <Card className="hover-lift transition-all duration-300">
        <CardContent className="p-6 flex items-center">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-5">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-base font-medium mb-1">Email</p>
            <a 
              href="mailto:recluzegeek@gmail.com" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
            >
              recluzegeek@gmail.com
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </CardContent>
      </Card>
      
      <Card className="hover-lift transition-all duration-300">
        <CardContent className="p-6 flex items-center">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-5">
            <Github className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-base font-medium mb-1">GitHub</p>
            <a 
              href="https://github.com/recluzegeek" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
            >
              github.com/recluzegeek
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </CardContent>
      </Card>
      
      <Card className="hover-lift transition-all duration-300">
        <CardContent className="p-6 flex items-center">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-5">
            <Linkedin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-base font-medium mb-1">LinkedIn</p>
            <a 
              href="https://linkedin.com/in/recluzegeek" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
            >
              linkedin.com/in/recluzegeek
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </CardContent>
      </Card>
      
      <Card className="hover-lift transition-all duration-300">
        <CardContent className="p-6 flex items-center">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-5">
            <MessageSquare className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-base font-medium mb-1">Response Time</p>
            <p className="text-sm text-muted-foreground">Usually within 24-48 hours</p>
          </div>
        </CardContent>
      </Card>
    </div>

    <div className="text-center mt-10 pt-6">
      <p className="text-muted-foreground mb-6">Let's connect and discuss how we can work together!</p>
      <div className="flex justify-center space-x-4">
        <Button variant="outline" size="lg" className="rounded-full" asChild>
          <a href="mailto:recluzegeek@gmail.com">
            <Mail className="mr-2 h-4 w-4" />
            Email Me
          </a>
        </Button>
        <Button variant="outline" size="lg" className="rounded-full" asChild>
          <a href="https://linkedin.com/in/recluzegeek" target="_blank" rel="noopener noreferrer">
            <Linkedin className="mr-2 h-4 w-4" />
            Connect
          </a>
        </Button>
      </div>
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <ContactInfo />
      </div>
    </section>
  );
};

export default Contact;