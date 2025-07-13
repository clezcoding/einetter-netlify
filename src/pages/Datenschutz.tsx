import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Star, Mail, AlertTriangle } from 'lucide-react';

export default function Datenschutz() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: 'Kontakt mit uns',
      content: 'Wenn Sie uns, entweder über unser Kontaktformular auf unserer Webseite, oder per Email kontaktieren, dann werden die von Ihnen an uns übermittelten Daten zwecks Bearbeitung Ihrer Anfrage oder für den Fall von weiteren Anschlussfragen für sechs Monate bei uns gespeichert. Es erfolgt, ohne Ihre Einwilligung, keine Weitergabe Ihrer übermittelten Daten.',
    },
    {
      title: 'Cookies',
      content: 'Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen. Wenn Sie dies nicht wünschen, so können Sie Ihren Browser so einrichten, dass er Sie über das Setzen von Cookies informiert und Sie dies nur im Einzelfall erlauben. Bei der Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt sein.',
    },
    {
      title: 'Google Fonts',
      content: `Unsere Website verwendet Schriftarten von "Google Fonts". Der Dienstanbieter dieser Funktion ist:

Google Ireland Limited Gordon House, Barrow Street Dublin 4. Irland
Tel: +353 1 543 1000

Beim Aufrufen dieser Webseite lädt Ihr Browser Schriftarten und speichert diese in den Cache. Da Sie, als Besucher der Webseite, Daten des Dienstanbieters empfangen kann Google unter Umständen Cookies auf Ihrem Rechner setzen oder analysieren.

Die Nutzung von "Google-Fonts" dient der Optimierung unserer Dienstleistung und der einheitlichen Darstellung von Inhalten. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.`,
      links: [
        {
          text: 'Weitere Informationen zu Google Fonts',
          url: 'https://developers.google.com/fonts/faq',
        },
        {
          text: 'Google Datenschutzerklärung',
          url: 'https://policies.google.com/privacy?hl=de',
        },
        {
          text: 'EU-US Privacy-Shield',
          url: 'https://www.privacyshield.gov/EU-US-Framework',
        },
      ],
    },
    {
      title: 'Server-Log Files',
      content: `Diese Webseite und der damit verbundene Provider erhebt im Zuge der Webseitennutzung automatisch Informationen im Rahmen sogenannter "Server-Log Files". Dies betrifft insbesondere:

• IP-Adresse oder Hostname
• den verwendeten Browser
• Aufenthaltsdauer auf der Webseite sowie Datum und Uhrzeit
• aufgerufene Seiten der Webseite
• Spracheinstellungen und Betriebssystem
• "Leaving-Page" (auf welcher URL hat der Benutzer die Webseite verlassen)
• ISP (Internet Service Provider)

Diese erhobenen Informationen werden nicht personenbezogen verarbeitet oder mit personenbezogenen Daten in Verbindung gebracht.

Der Webseitenbetreiber behält es sich vor, im Falle von Bekanntwerden rechtswidriger Tätigkeiten, diese Daten auszuwerten oder zu überprüfen.`,
    },
    {
      title: 'Ihre Rechte als Betroffener',
      content: `Sie als Betroffener haben bezüglich Ihrer Daten, welche bei uns gespeichert sind grundsätzlich ein Recht auf:

• Auskunft
• Löschung der Daten
• Berichtigung der Daten
• Übertragbarkeit der Daten
• Wiederruf und Widerspruch zur Datenverarbeitung
• Einschränkung

Wenn sie vermuten, dass im Zuge der Verarbeitung Ihrer Daten Verstöße gegen das Datenschutzrecht passiert sind, so haben Sie die Möglichkeit sich bei uns (office@einetter.at) oder der Datenschutzbehörde zu beschweren.`,
    },
    {
      title: 'Haftungsausschluss',
      content: `Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der Webseitenbetreiber (von einetter.at, Tischlerei Einetter OG) keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Sollten Sie dennoch auf ausgehende Links aufmerksam werden, welche auf eine Webseite mit rechtswidriger Tätigkeit/Information verweisen, ersuchen wir um dementsprechenden Hinweis (office@einetter.at), um diesen nach § 17 Abs. 2 ECG umgehend zu entfernen.

Die Urheberrechte Dritter werden vom Betreiber mit bestmöglicher Sorgfalt beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis an (office@einetter.at). Bei Bekanntwerden derartiger Rechtsverletzungen werden wir den betroffenen Inhalt umgehend entfernen.`,
      icon: AlertTriangle,
    },
  ];

  return (
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
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-6xl font-bold text-primary-600 whitespace-nowrap"
                >
                  Datenschutz
                </motion.span>
                <h1 className="text-5xl font-bold text-primary-900 relative z-10">
                  Datenschutzerklärung
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
                  <Shield className="w-12 h-12" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary-500"></div>
                <p className="text-xl text-gray-700 leading-relaxed">
                  In folgender Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Webseite. Wir erheben und verarbeiten personenbezogene Daten nur auf Grundlage der gesetzlichen Bestimmungen (Datenschutzgrundverordnung, Telekommunikationsgesetz 2003).
                </p>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -right-4 -top-4 w-12 h-12 text-primary-200 transform rotate-12"
                >
                  <Star className="w-full h-full" />
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
                <h2 className="text-2xl font-bold text-primary-900 mb-4 group cursor-default">
                  <span className="inline-block transform transition-transform group-hover:scale-105">
                    {section.title}
                  </span>
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  {section.content.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="mb-4">
                      {paragraph.startsWith('•') ? (
                        <ul className="list-disc pl-4">
                          {paragraph.split('\n').map((item, j) => (
                            <li key={j} className="mb-2">{item.replace('• ', '')}</li>
                          ))}
                        </ul>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
                  {section.links && (
                    <div className="mt-4 space-y-2">
                      {section.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-primary-600 hover:text-primary-700 underline"
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: sections.length * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-primary-900 mb-4">Kontaktdaten</h2>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <p className="text-gray-700">
                    <strong>Webseitenbetreiber:</strong> Tischlerei Einetter OG<br />
                    <strong>Telefonnummer:</strong> +43 4715391<br />
                    <strong>Email:</strong> office@einetter.at
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: (sections.length + 1) * 0.1 }}
              className="text-center text-sm text-gray-600 mt-8"
            >
              <a
                href="https://www.fairesrecht.at/kostenlos-datenschutzerklaerung-erstellen-generator.php"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-600 underline"
              >
                Quelle: Datenschutzgenerator Österreich DSGVO
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}