import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Star, Award, Heart, CheckCircle2, MessageCircle, X, History, Building2, Handshake, MessageSquare, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  icon: any;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: 1956,
    title: 'Betriebsgründung',
    description: 'Gründung der Tischlerei durch Hermann Einetter',
    icon: Building2
  },
  {
    year: 1986,
    title: 'Erste Übergabe',
    description: 'Betriebsübergabe an Helmuth Einetter',
    icon: Handshake
  },
  {
    year: 2007,
    title: 'Spezialisierung',
    description: 'Fokus auf Fenster, Türen und Sonnenschutz inkl. Montage',
    icon: History
  },
  {
    year: 2023,
    title: 'Neue Generation',
    description: 'Gründung der Tischlerei Einetter OG und Übergabe an Elias und Tobias Einetter',
    icon: Users
  }
];

function TimelineEvent({ event, index }: { event: TimelineEvent; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex items-center mb-12 last:mb-0"
    >
      <div className={`flex-1 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
        <div className="bg-white rounded-xl shadow-lg p-6 relative">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
            <event.icon className="w-4 h-4 text-white" />
          </div>
          <div className="ml-4">
            <div className="text-2xl font-bold text-primary-600 mb-2">{event.year}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
            <p className="text-gray-600">{event.description}</p>
          </div>
        </div>
      </div>
      <div className={`w-1/2 ${index % 2 === 0 ? 'order-2' : 'order-1'}`} />
    </motion.div>
  );
}

export default function WerSindWir() {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Unser Familienbetrieb – Tradition trifft Moderne",
      content: "Unser Familienbetrieb wird inzwischen in dritter Generation geführt. Die Firmenchefs Elias Einetter und Tobias Einetter stehen für Kontinuität, Innovation und höchste Qualität. Mit Leidenschaft und Fachkompetenz setzen wir die Tradition unserer Familie fort und entwickeln sie stetig weiter.",
      image: "https://i.ibb.co/fVSyjfxf/TobiEli.png",
      imageAlt: "Elias Einetter und Tobias Einetter",
      icon: Users,
      type: 'image'
    },
    {
      title: "Unser Markenzeichen: Perfekte Beratung und sorgfältige Montage",
      content: "Unser Markenzeichen ist die perfekte fachliche und persönliche Beratung. Wir nehmen uns Zeit, um Ihre individuellen Wünsche und Bedürfnisse zu verstehen und gemeinsam mit Ihnen die optimale Lösung zu finden. Dabei setzen wir auf modernste Technologien und hochwertige Materialien, die höchsten Ansprüchen gerecht werden.\n\nDie sorgfältige Montage sämtlicher Produkte durch unser hochqualifiziertes Montagepersonal garantiert, dass jedes Projekt mit größter Präzision und Sorgfalt umgesetzt wird. Ob Fenster, Türen, Sonnenschutz oder individuelle Sonderlösungen – wir stehen für handwerkliche Perfektion und langjährige Erfahrung.",
      icon: Award,
      type: 'text'
    },
    {
      title: "Kundenzufriedenheit ist unser Antrieb",
      content: "Die absolute Kundenzufriedenheit steht für uns an erster Stelle. Dies wird uns von unseren oft jahrzehntelangen Kunden immer wieder bestätigt. Wir bauen nicht nur Produkte, sondern auch langfristige Beziehungen zu unseren Kunden auf. Ihr Vertrauen ist unser größtes Kompliment.",
      icon: Heart,
      type: 'text'
    },
    {
      title: 'Unser Motto: "Geht nit, gibt\'s nit!"',
      content: "Unter diesem Motto erfüllen wir Ihre Wünsche und Wohnträume in höchster Qualität. Egal, ob Neubau, Sanierung oder individuelle Sonderlösungen – wir finden immer eine Lösung, die zu Ihnen passt. Unser Ziel ist es, nicht nur Ihre Erwartungen zu erfüllen, sondern sie zu übertreffen.",
      icon: Star,
      type: 'text'
    },
    {
      title: "Was macht uns aus?",
      content: [
        { label: "Tradition", value: "Familienbetrieb seit drei Generationen: Tradition, Erfahrung und Innovation vereint" },
        { label: "Beratung", value: "Persönliche Beratung: Individuelle Lösungen für Ihre Bedürfnisse" },
        { label: "Montage", value: "Hochqualifiziertes Montagepersonal: Präzision und Sorgfalt vom ersten bis zum letzten Schritt" },
        { label: "Zufriedenheit", value: "Langjährige Kundenzufriedenheit: Bewährt und empfohlen seit Jahrzehnten" },
        { label: "Motto", value: 'Motto "Geht nit, gibt\'s nit!": Kein Wunsch ist uns zu groß oder zu klein' }
      ],
      icon: CheckCircle2,
      type: 'list'
    },
    {
      title: "Kontaktieren Sie uns!",
      content: "Lassen Sie sich von unserem Team persönlich beraten und entdecken Sie, wie wir Ihre Wohnträume in die Realität umsetzen können. Wir freuen uns auf Sie!",
      icon: MessageCircle,
      type: 'text',
      hasButton: true
    }
  ];

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    // Warte kurz, bis die Hauptseite geladen ist
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <div className="pt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-primary-50"
        >
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative inline-block mb-6"
              >
                <div className="relative">
                  <h1 className="text-5xl font-bold text-primary-900 relative z-10">
                    Wer sind wir
                  </h1>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="absolute bottom-0 left-0 h-3 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200 -z-10"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="absolute -right-12 -top-6 text-primary-200"
                  >
                    <History className="w-12 h-12" />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <div ref={ref} className="space-y-8 max-w-4xl mx-auto">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <div className="flex items-center mb-6">
                    <section.icon className="w-6 h-6 text-primary-600 mr-3" />
                    <h2 className="text-2xl font-bold text-primary-900 group cursor-default">
                      <span className="inline-block transform transition-transform group-hover:scale-105">
                        {section.title}
                      </span>
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-700">
                    {section.type === 'list' ? (
                      <dl className="space-y-4">
                        {section.content.map((item, i) => (
                          <div key={i} className="flex flex-col sm:flex-row sm:gap-4">
                            <dt className="font-semibold text-gray-900 min-w-[180px]">{item.label}:</dt>
                            <dd className="text-gray-700">{item.value}</dd>
                          </div>
                        ))}
                      </dl>
                    ) : section.type === 'image' ? (
                      <div className="space-y-6">
                        <p className="leading-relaxed">{section.content}</p>
                        <motion.div
                          className="relative aspect-[16/9] overflow-hidden rounded-lg cursor-pointer"
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setIsImageFullscreen(true)}
                        >
                          <img
                            src={section.image}
                            alt={section.imageAlt}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity duration-300" />
                        </motion.div>
                      </div>
                    ) : (
                      section.content.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="mb-4 leading-relaxed">
                          {paragraph}
                        </p>
                      ))
                    )}
                    {section.hasButton && (
                      <div className="mt-8">
                        <a
                          href="/#contact"
                          onClick={handleContactClick}
                          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                        >
                          <span>Kontaktieren Sie uns</span>
                          <ChevronRight className="w-5 h-5 ml-2" />
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isImageFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={() => setIsImageFullscreen(false)}
          >
            <motion.button
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={() => setIsImageFullscreen(false)}
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={sections[0].image}
                alt={sections[0].imageAlt}
                className="w-full h-full object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}