
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const advantages = [
    "Data-driven strategies for measurable results",
    "Tailored solutions for your unique business needs",
    "Dedicated team of marketing specialists",
    "Transparent reporting and communication",
    "Continuous optimization for maximum ROI",
    "Integrated approach across all digital channels"
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="bg-zenbuzz-purple/10 absolute top-0 left-0 w-full h-full -translate-x-4 translate-y-4 rounded-lg"></div>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt="Our Team"
            className="w-full h-auto rounded-lg shadow-lg relative z-10"
          />
        </div>
        
        <div>
          <h2 className="section-title">About ZenBuzz Media</h2>
          <p className="text-gray-600 mb-6">
            We are a team of passionate digital marketers dedicated to helping businesses thrive in the digital landscape. With our strategic approach and innovative solutions, we've helped numerous clients achieve their marketing goals.
          </p>
          <p className="text-gray-600 mb-8">
            Founded in 2015, ZenBuzz Media has grown into a full-service digital marketing agency with expertise across all digital channels. Our mission is to deliver measurable results that drive growth for our clients.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="text-zenbuzz-purple mt-1 h-5 w-5 flex-shrink-0" />
                <span className="text-gray-700">{advantage}</span>
              </div>
            ))}
          </div>
          
          <Button className="bg-zenbuzz-purple hover:bg-zenbuzz-darkPurple">
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
