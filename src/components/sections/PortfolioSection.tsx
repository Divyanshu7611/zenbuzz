
import { ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: "E-commerce Redesign",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    description: "Complete redesign of an e-commerce platform resulting in 40% increase in conversion rate."
  },
  {
    title: "Brand Identity Campaign",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    description: "Comprehensive social media campaign that increased brand awareness by 65%."
  },
  {
    title: "SEO Performance Boost",
    category: "SEO Optimization",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    description: "Strategic SEO optimization resulting in 200% increase in organic traffic over 6 months."
  },
  {
    title: "Content Marketing Strategy",
    category: "Content Creation",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    description: "Developed content strategy that generated 50% more leads through educational content."
  },
  {
    title: "Mobile App Launch",
    category: "Mobile Marketing",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    description: "Successful app launch campaign achieving 100K downloads in first month."
  },
  {
    title: "Analytics Dashboard",
    category: "Analytics & Reporting",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    description: "Custom analytics solution providing real-time insights on marketing performance."
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title mx-auto">Our Portfolio</h2>
          <p className="text-gray-600 mt-6">
            Explore our successful projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className="group overflow-hidden rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-zenbuzz-purple/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href="#" className="text-white flex items-center gap-2 bg-black/30 py-2 px-4 rounded-full">
                    <span>View Project</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-zenbuzz-purple font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
