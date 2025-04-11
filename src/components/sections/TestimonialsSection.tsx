
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonialsData = [
  {
    name: "Priya Sharma",
    position: "CEO, TechInnovate",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    quote: "ZenBuzz Media transformed our digital presence completely. Their strategic approach to SEO and content marketing doubled our organic traffic in just three months. Highly recommended!",
    rating: 5
  },
  {
    name: "Vikram Mehta",
    position: "Marketing Director, Retail Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    quote: "Working with the ZenBuzz team has been a game-changer for our brand. Their social media management increased our engagement by 70% and helped us connect with our target audience effectively.",
    rating: 5
  },
  {
    name: "Ananya Patel",
    position: "Founder, Wellness Hub",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80",
    quote: "The website ZenBuzz designed for us perfectly captures our brand essence. The user experience is exceptional, and we've seen a significant increase in conversions since the launch.",
    rating: 5
  },
  {
    name: "Raj Malhotra",
    position: "Operations Manager, E-commerce Plus",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    quote: "Their data-driven approach to digital marketing has delivered exceptional ROI for our e-commerce business. The analytics reporting is thorough and has helped us make informed decisions.",
    rating: 4
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current === testimonialsData.length - 1 ? 0 : current + 1));
  }, []);
  
  const prevSlide = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? testimonialsData.length - 1 : current - 1));
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [nextSlide]);
  
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-zenbuzz-purple/5 to-zenbuzz-lightPurple/10">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title mx-auto">Client Testimonials</h2>
          <p className="text-gray-600 mt-6">
            Hear from our clients about their experience working with ZenBuzz Media.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="mt-4">
                      <p className="font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-10 bg-white rounded-full p-2 shadow-md hover:bg-zenbuzz-purple hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-10 bg-white rounded-full p-2 shadow-md hover:bg-zenbuzz-purple hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-zenbuzz-purple' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
