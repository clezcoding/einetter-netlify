import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Award, PenTool as Tool, Heart } from 'lucide-react';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const features = [
    {
      icon: Clock,
      title: 'Erfahrung',
      description: 'Über sechs Jahrzehnte Expertise in der Fenster- und Türenbranche'
    },
    {
      icon: Award,
      title: 'Qualität',
      description: 'Hochwertige Materialien und präzise Verarbeitung für maximale Langlebigkeit'
    },
    {
      icon: Tool,
      title: 'Expertise',
      description: 'Professionelle Beratung und maßgeschneiderte Lösungen für Ihr Zuhause'
    },
    {
      icon: Heart,
      title: 'Service',
      description: 'Persönliche Betreuung und zuverlässiger Kundenservice von Anfang an'
    }
  ];

  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-900 mb-6">Über uns</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir sind ein Familienunternehmen in dritter Generation, das seit 1956 für Qualität und Zuverlässigkeit steht. Mit unserer langjährigen Erfahrung und Expertise bieten wir Ihnen hochwertige Fenster, Türen und Beschattungslösungen. Die Verbindung von traditionellem Handwerk und modernster Technologie zeichnet uns aus. Unser engagiertes Team setzt sich täglich dafür ein, Ihre individuellen Wünsche mit höchster Präzision und Sorgfalt umzusetzen. Dabei stehen Innovation, Nachhaltigkeit und Ihre Zufriedenheit im Mittelpunkt unseres Handelns.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center p-6"
            >
              <feature.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}