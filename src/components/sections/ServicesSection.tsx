
import { BarChart3, Globe, PenTool, Search, Share2, Smartphone } from 'lucide-react';

const servicesData = [
  {
    icon: <Globe className="h-10 w-10 text-zenbuzz-purple" />,
    title: "Web Development",
    description: "Custom websites built with modern technologies that drive engagement and conversions."
  },
  {
    icon: <Search className="h-10 w-10 text-zenbuzz-purple" />,
    title: "SEO Optimization",
    description: "Strategic SEO to improve visibility, search rankings, and organic traffic."
  },
  {
    icon: <Share2 className="h-10 w-10 text-zenbuzz-purple" />,
    title: "Social Media Marketing",
    description: "Engaging social strategies to build brand awareness and community engagement."
  },
  {
    icon: <PenTool className="h-10 w-10 text-zenbuzz-purple" />,
    title: "Content Creation",
    description: "Compelling content that tells your brand story and resonates with your audience."
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-zenbuzz-purple" />,
    title: "Analytics & Reporting",
    description: "Data-driven insights to measure performance and optimize marketing strategies."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-zenbuzz-purple" />,
    title: "Mobile Marketing",
    description: "Targeted mobile strategies to reach customers on their preferred devices."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title mx-auto">Our Services</h2>
          <p className="text-gray-600 mt-6">
            We provide comprehensive digital marketing solutions designed to help your business grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="service-card group"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-zenbuzz-purple transition-colors">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
