
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-zenbuzz-purple to-zenbuzz-lightPurple opacity-90 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80')] bg-cover bg-center opacity-10 z-[-1]"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to Transform Your Digital Presence?</h2>
          <p className="text-white/80 text-lg mb-8">
            Partner with ZenBuzz Media for innovative digital marketing solutions that drive results. Get in touch today to start your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-zenbuzz-purple hover:bg-gray-100 text-lg">
              Schedule a Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg">
              View Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
