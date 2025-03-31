
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import NeuralNetworkBackground from "@/components/NeuralNetworkBackground";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen pt-24 pb-16 flex flex-col justify-center relative"
    >
      <NeuralNetworkBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-10 animate-fade-up text-white">
            <p className="text-primary-foreground font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 text-white">
              Muhammad Salman
            </h1>
            <h2 className="text-xl md:text-2xl font-heading text-primary-foreground mb-6">
              Software Engineer | Computer Vision Enthusiast
            </h2>
            <p className="text-lg max-w-lg mx-auto mb-8 text-gray-300">
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
          className="flex flex-col items-center text-sm font-medium text-white/70"
        >
          <span className="mb-2">Scroll Down</span>
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

