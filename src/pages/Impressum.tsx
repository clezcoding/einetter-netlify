import React from 'react';
import { motion } from 'framer-motion';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h4 className="text-2xl font-bold text-gray-900 mb-6">Impressum</h4>
          
          <p className="mb-6">
            <b>Informationen und Offenlegung gemäß §5 (1) ECG, § 25 MedienG, § 63 GewO und § 14 UGB</b>
          </p>
          
          <p className="mb-6">
            <b>Webseitenbetreiber:</b> Tischlerei Einetter OG<br />
            <b>Firmenbuchnummer:</b> FN 606185z <br />
            <b>Firmenbuchgericht: </b> BH Hermagor
          </p>
          
          <p className="mb-6">
            <b>Anschrift:</b> Kötschach 221, 9640 Kötschach Kötschach
          </p>
          
          <p className="mb-6">
            <b>UID-Nr:</b> ATU78834479 <br />
            <b>Gewerbeaufsichtbehörde:</b> BH Hermagor <br />
            <b>Mitgliedschaften: </b>WKO Kärnten
          </p>
          
          <p className="mb-6">
            <b>Kontaktdaten:</b> <br />
            Telefon: 04715391 <br />
            Email: office@einetter.at <br />
          </p>
          
          <p className="mb-6">
            <b>Anwendbare Rechtsvorschrift:</b> www.ris.bka.gv.at <br />
            <b>Berufsbezeichnung:</b> Tischler, verbunden mit Modellbauer; Bootsbauer; Binder; Drechsler; Bildhauer (verbundenes Handwerk), eingeschränkt auf Tischler
          </p>
          
          <p className="mb-6">
            <b>Online Streitbeilegung:</b> Verbraucher, welche in Österreich oder in einem sonstigen Vertragsstaat der ODR-VO niedergelassen sind, haben die Möglichkeit Probleme bezüglich dem entgeltlichen Kauf von Waren oder Dienstleistungen im Rahmen einer Online-Streitbeilegung (nach OS, AStG) zu lösen. Die Europäische Kommission stellt eine Plattform hierfür bereit: <a href="https://ec.europa.eu/consumers/odr" className="text-primary-600 hover:text-primary-700">https://ec.europa.eu/consumers/odr</a>
          </p>
          
          <p className="mb-6">
            <b>Urheberrecht:</b> Die Inhalte dieser Webseite unterliegen, soweit dies rechtlich möglich ist, diversen Schutzrechten (z.B dem Urheberrecht). Jegliche Verwendung/Verbreitung von bereitgestelltem Material, welche urheberrechtlich untersagt ist, bedarf schriftlicher Zustimmung des Webseitenbetreibers.
          </p>
          
          <p className="mb-6">
            <b>Haftungsausschluss:</b> Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der Webseitenbetreiber dieser Webseite keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Sollten Sie dennoch auf ausgehende Links aufmerksam werden, welche auf eine Webseite mit rechtswidriger Tätigkeit/Information verweisen, ersuchen wir um dementsprechenden Hinweis, um diese nach § 17 Abs. 2 ECG umgehend zu entfernen.<br />
            Die Urheberrechte Dritter werden vom Betreiber dieser Webseite mit größter Sorgfalt beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden derartiger Rechtsverletzungen werden wir den betroffenen Inhalt umgehend entfernen.
          </p>
          
          <p className="text-sm text-gray-500 mt-8">
            Quelle: <b><a href="https://www.fairesrecht.at/kostenlos-impressum-erstellen-generator.php" className="text-primary-600 hover:text-primary-700">Impressum Generator Österreich</a></b>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Impressum;