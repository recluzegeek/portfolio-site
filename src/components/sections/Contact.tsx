
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Github, Linkedin, Mail, MessageSquare, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const ContactInfo = () => (
  <div className="space-y-8 h-full">
    <div>
      <SectionHeading 
        title="Get In Touch" 
        centered={false}
      />
      <p className="text-base text-muted-foreground mb-8 max-w-md">
        I'm open to new opportunities, collaborations, or discussions on software engineering, 
        computer vision, and AI. Feel free to reach out!
      </p>
    </div>
    
    <div className="space-y-6">
      <Card>
        <CardContent className="p-4 flex items-center">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Email</p>
            <a href="mailto:recluzegeek@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              recluzegeek@gmail.com
            </a>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4 flex items-center">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
            <Github className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">GitHub</p>
            <a 
              href="https://github.com/recluzegeek" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              github.com/recluzegeek
            </a>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4 flex items-center">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
            <Linkedin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">LinkedIn</p>
            <a 
              href="https://linkedin.com/recluzegeek" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              linkedin.com/in/recluzegeek
            </a>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4 flex items-center">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
            <MessageSquare className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Response Time</p>
            <p className="text-sm text-muted-foreground">Usually within 24-48 hours</p>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message..."
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full min-h-32"
        />
      </div>
      
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>Processing...</>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2 animate-fade-up">
            <ContactInfo />
          </div>
          
          <div className="w-full lg:w-1/2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-heading font-medium mb-6">Send a Message</h3>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
