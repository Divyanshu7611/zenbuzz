
import { Users, Award, Calendar, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const statsData = [
  {
    icon: <Users className="h-10 w-10 text-white" />,
    count: 250,
    label: "Happy Clients",
  },
  {
    icon: <Award className="h-10 w-10 text-white" />,
    count: 15,
    label: "Industry Awards",
  },
  {
    icon: <Calendar className="h-10 w-10 text-white" />,
    count: 8,
    label: "Years Experience",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-white" />,
    count: 520,
    label: "Projects Delivered",
  },
];

const StatsSection = () => {
  const [animatedStats, setAnimatedStats] = useState(statsData.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('stats');
      if (section && !hasAnimated) {
        const sectionPosition = section.getBoundingClientRect();
        const isVisible = sectionPosition.top < window.innerHeight && sectionPosition.bottom >= 0;
        
        if (isVisible) {
          setHasAnimated(true);
          
          statsData.forEach((stat, index) => {
            let startValue = 0;
            const endValue = stat.count;
            const duration = 2000;
            const increment = Math.ceil(endValue / (duration / 20));
            
            const timer = setInterval(() => {
              startValue += increment;
              if (startValue > endValue) {
                startValue = endValue;
                clearInterval(timer);
              }
              
              setAnimatedStats(prev => {
                const newStats = [...prev];
                newStats[index] = startValue;
                return newStats;
              });
            }, 20);
          });
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);
  
  return (
    <section id="stats" className="py-16 bg-zenbuzz-purple text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 rounded-full p-5 inline-block mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{animatedStats[index]}+</div>
              <div className="text-lg opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
