
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-purple-50 overflow-hidden">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Strategic <span className="gradient-text">Digital Marketing</span> Solutions
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-lg">
            Elevate your brand's digital presence with our innovative marketing strategies tailored for measurable growth and engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-zenbuzz-purple hover:bg-zenbuzz-darkPurple text-white px-8 py-6 text-lg">
              Get Started
            </Button>
            <Button variant="outline" className="border-zenbuzz-purple text-zenbuzz-purple hover:bg-zenbuzz-purple/10 group px-8 py-6 text-lg">
              <span>Our Services</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 animate-fade-in-right">
          <div className="relative">
            <div className="bg-zenbuzz-purple/20 rounded-full w-72 h-72 md:w-96 md:h-96 absolute top-0 right-0 -translate-y-1/4 translate-x-1/4"></div>
            <div className="bg-zenbuzz-lightPurple/20 rounded-full w-64 h-64 absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4"></div>
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Digital Marketing"
              className="rounded-2xl shadow-xl w-full h-auto max-w-md mx-auto relative z-10 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
