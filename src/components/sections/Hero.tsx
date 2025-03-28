
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen pt-24 pb-16 flex flex-col justify-center"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-3/5 mb-10 md:mb-0 animate-fade-up">
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
              Muhammad Salman
            </h1>
            <h2 className="text-xl md:text-2xl font-heading text-muted-foreground mb-6">
              Software Engineer | Computer Vision Enthusiast
            </h2>
            <p className="text-lg max-w-lg mb-8">
              Passionate about crafting innovative solutions at the intersection of 
              software engineering, artificial intelligence, and computer vision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#contact">Let's Connect</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects">View My Work</a>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 animate-fade-in-delayed flex justify-center">
            <div className="relative rounded-full w-64 h-64 md:w-80 md:h-80 overflow-hidden border-4 border-primary/20">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4E03AQH85pHhjnZoig/profile-displayphoto-shrink_800_800/B4EZVMWiFjG0Ak-/0/1740742731116?e=1750291200&v=beta&t=bFrpnxtTzFM8zIHSQiHXAEtqjrdTUptHDYCOz4eowWE"
                alt="Muhammad Salman" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a 
            href="#about" 
            className="flex flex-col items-center text-sm font-medium text-muted-foreground"
          >
            <span className="mb-2">Scroll Down</span>
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
