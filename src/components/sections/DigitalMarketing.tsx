import { Fingerprint, Target, Activity, BarChart } from 'lucide-react';

const cardData = [
  {
    icon: <Fingerprint size={32} className="text-white" />,
    title: 'Authenticity and Trust',
    description:
      "In today's digital age, authenticity and trust are the cornerstones of successful brand relationships.",
  },
  {
    icon: <Target size={32} className="text-white" />,
    title: 'Targeted Reach',
    description:
      'Targeted reach is a crucial component of modern marketing strategies, ensuring that your message reaches the right audience.',
  },
  {
    icon: <Activity size={32} className="text-white" />,
    title: 'High Engagement',
    description:
      'High engagement is the lifeblood of successful marketing campaigns, reflecting the level of interaction.',
  },
  {
    icon: <BarChart size={32} className="text-white" />,
    title: 'Measurable Results',
    description:
      'In today’s digital age, authenticity and trust have become the cornerstones of successful brand relationships.',
  },
];

const WhyDigitalMarketing = () => {
  return (
    <section className="px-6 py-12 bg-zenbuzz-purple text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl font-medium mb-2">Welcome to Zenbuzz 🚀</h2>
        <h1 className="text-3xl md:text-5xl font-bold mb-10">Why Digital Marketing For Growth?</h1>
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/static/Why-Zenbuzz.jpg"
              alt="Digital marketing"
              width={600}
              height={600}
              className="rounded-lg w-full h-auto object-cover lg:h-[580px] lg:w-[580px]"
            />
          </div>

          {/* Right Cards */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 border border-white rounded-xl backdrop-blur-md bg-white/10 hover:bg-white/20 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="shrink-0">{card.icon}</div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-1">{card.title}</h3>
                  <p className="text-sm md:text-base text-white/90">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDigitalMarketing;
