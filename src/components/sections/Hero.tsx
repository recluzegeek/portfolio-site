
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen pt-24 pb-16 flex flex-col justify-center relative bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-10 animate-fade-up">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-8 mx-auto border-4 border-white shadow-lg">
              <img 
                src="/lovable-uploads/78b0888d-2956-4867-99b3-0a8419c569a8.png"
                alt="Muhammad Salman" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-primary-foreground font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
              Muhammad Salman
            </h1>
            <h2 className="text-xl md:text-2xl font-heading text-primary-foreground mb-6">
              Software Engineer | Computer Vision Enthusiast
            </h2>
            <p className="text-lg max-w-lg mx-auto mb-8 text-gray-600">
              Passionate about crafting innovative solutions at the intersection of 
              software engineering, artificial intelligence, and computer vision.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="#contact">Let's Connect</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects">View My Work</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a 
          href="#about" 
          className="flex flex-col items-center text-sm font-medium text-gray-600"
        >
          <span className="mb-2">Scroll Down</span>
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
