import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Erklärung zur Informationspflicht
          </h3>
          
          <p className="text-center mb-6">
            <strong className="text-xl">Datenschutzerklärung</strong>
          </p>
          
          <p className="mb-6">
            In folgender Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung
            im Rahmen unserer Webseite. Wir erheben und verarbeiten personenbezogene Daten nur auf Grundlage der gesetzlichen
            Bestimmungen (Datenschutzgrundverordnung, Telekommunikationsgesetz 2003).
          </p>
          
          <p className="mb-6">
            Sobald Sie als Benutzer auf unsere Webseite zugreifen oder diese besuchen wird Ihre IP-Adresse, Beginn sowie Beginn und Ende der Sitzung erfasst. Dies ist
            technisch bedingt und stellt somit ein berechtigtes Interesse iSv Art 6 Abs 1 lit f DSGVO.
          </p>
          
          <h5 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Kontakt mit uns</h5>
          <p className="mb-6">
            Wenn Sie uns, entweder über unser Kontaktformular auf unserer Webseite, oder per Email kontaktieren,
            dann werden die von Ihnen an uns übermittelten Daten zwecks Bearbeitung Ihrer Anfrage oder für den Fall von weiteren
            Anschlussfragen für sechs Monate bei uns gespeichert. Es erfolgt, ohne Ihre Einwilligung, keine Weitergabe Ihrer übermittelten Daten.
          </p>
          
          <h5 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Cookies</h5>
          <p className="mb-6">
            Unsere Website verwendet so genannte Cookies.
            Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden.
            Sie richten keinen Schaden an. Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten.
            Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns,
            Ihren Browser beim nächsten Besuch wiederzuerkennen.
            Wenn Sie dies nicht wünschen, so können Sie Ihren Browser so einrichten, dass er Sie über das Setzen von
            Cookies informiert und Sie dies nur im Einzelfall erlauben.
            Bei der Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt sein.
          </p>
          
          <h5 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Google Maps</h5>
          <p className="mb-4">
            Unsere Website verwendet Funktionen des Webkartendienstes "Google Maps".
            Der Dienstanbieter dieser Funktion ist:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>
              Google Ireland Limited Gordon House, Barrow Street Dublin 4. Ireland.
              Tel: +353 1 543 1000
            </li>
          </ul>
          
          <p className="mb-6">
            Im Zuge der Nutzung von Google Maps ist es notwendig Ihre IP-Adresse zu
            speichern und zu verarbeiten. Google überträgt in
            der Regel an einen Server in den USA und speichert die Daten dort. Die Verarbeitung geschieht durch den
            Diensteanbieter (oben genannt), der Betreiber dieser Homepage hat keinen
            Einfluss auf die Übertragung der Daten.
          </p>
          
          <p className="mb-6">
            Die Datenverarbeitung erfolgt auf Basis der gesetzlichen Bestimmungen des §
            96 Abs 3 TKG sowie des Art 6 Abs 1 lit f (berechtigtes Interesse) der
            DSGVO. Die Nutzung von Google Maps erhöht die Auffindbarkeit der Orte,
            welche auf unserer Webseite bereitgestellt werden.
          </p>
          
          <p className="mb-6">
            Weitere Informationen über den Umgang mit Nutzerdaten des Diensteanbieters
            "Google" können Sie der Datenschutzerklärung entnehmen:
          </p>
          
          <p className="mb-6">
            <a href="https://policies.google.com/privacy?hl=de" className="text-primary-600 hover:text-primary-700">
              https://policies.google.com/privacy?hl=de
            </a>
          </p>
          
          <p className="mb-6">
            Google verarbeitet die Daten auch in den USA, hat sich jedoch dem
            EU-US Privacy-Shield unterworfen.
          </p>
          
          <p className="mb-6">
            <a href="https://www.privacyshield.gov/EU-US-Framework" className="text-primary-600 hover:text-primary-700">
              https://www.privacyshield.gov/EU-US-Framework
            </a>
          </p>
          
          <h5 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Google Fonts</h5>
          <p className="mb-4">
            Unsere Website verwendet Schriftarten von "Google Fonts". Der
            Dienstanbieter dieser Funktion ist:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>
              Google Ireland Limited Gordon House, Barrow Street Dublin 4. Ireland
            </li>
          </ul>
          
          <p className="mb-6">
            Tel: +353 1 543 1000
          </p>
          
          <p className="mb-6">
            Beim Aufrufen dieser Webseite lädt Ihr Browser Schriftarten und speichert
            diese in den Cache. Da Sie, als Besucher der Webseite, Daten des
            Dienstanbieters empfangen kann Google unter Umständen Cookies auf Ihrem
            Rechner setzen oder analysieren.
          </p>
          
          <p className="mb-6">
            Die Nutzung von "Google-Fonts" dient der Optimierung unserer Dienstleistung
            und der einheitlichen Darstellung von Inhalten. Dies stellt ein
            berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
          </p>
          
          <p className="mb-4">
            Weitere Informationen zu Google Fonts erhalten Sie unter folgendem Link:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>
              <a href="https://developers.google.com/fonts/faq" className="text-primary-600 hover:text-primary-700">
                https://developers.google.com/fonts/faq
              </a>
            </li>
          </ul>
          
          <p className="mb-4">
            Weitere Informationen über den Umgang mit Nutzerdaten von Google können Sie
            der Datenschutzerklärung entnehmen:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>
              <a href="https://policies.google.com/privacy?hl=de" className="text-primary-600 hover:text-primary-700">
                https://policies.google.com/privacy?hl=de
              </a>
            </li>
          </ul>
          
          <p className="mb-6">
            Google verarbeitet die Daten auch in den USA, hat sich jedoch dem
            EU-US Privacy-Shield unterworfen.
          </p>
          
          <p className="mb-6">
            <a href="https://www.privacyshield.gov/EU-US-Framework" className="text-primary-600 hover:text-primary-700">
              https://www.privacyshield.gov/EU-US-Framework
            </a>
          </p>
          
          <h5 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Server-Log Files</h5>
          <p className="mb-4">
            Diese Webseite und der damit verbundene Provider erhebt im Zuge der
            Webseitennutzung automatisch Informationen im Rahmen sogenannter
            "Server-Log Files". Dies betrifft insbesondere:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>IP-Adresse oder Hostname</li>
            <li>den verwendeten Browser</li>
            <li>Aufenthaltsdauer auf der Webseite sowie Datum und Uhrzeit</li>
            <li>aufgerufene Seiten der Webseite</li>
            <li>Spracheinstellungen und Betriebssystem</li>
            <li>"Leaving-Page" (auf welcher URL hat der Benutzer die Webseite verlassen)</li>
            <li>ISP (Internet Service Provider)</li>
          </ul>
          
          <p className="mb-6">
            Diese erhobenen Informationen werden nicht personenbezogen verarbeitet oder
            mit personenbezogenen Daten in Verbindung gebracht.
          </p>
          
          <p className="mb-6">
            Der Webseitenbetreiber behält es sich vor, im Falle von Bekanntwerden
            rechtswidriger Tätigkeiten, diese Daten auszuwerten oder zu überprüfen.
          </p>
          
          <h5 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Ihre Rechte als Betroffener</h5>
          <p className="mb-4">
            Sie als Betroffener haben bezüglich Ihrer Daten, welche bei uns gespeichert sind grundsätzlich ein Recht auf:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Auskunft</li>
            <li>Löschung der Daten</li>
            <li>Berichtigung der Daten</li>
            <li>Übertragbarkeit der Daten</li>
            <li>Wiederruf und Widerspruch zur Datenverarbeitung</li>
            <li>Einschränkung</li>
          </ul>
          
          <p className="mb-6">
            Wenn sie vermuten, dass im Zuge der Verarbeitung Ihrer Daten Verstöße gegen das Datenschutzrecht passiert sind,
            so haben Sie die Möglichkeit sich bei uns (office@einetter.at) oder der Datenschutzbehörde zu beschweren.
          </p>
          
          <h5 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Sie erreichen uns unter folgenden Kontaktdaten:</h5>
          <p className="mb-6">
            <b>Webseitenbetreiber:</b> Tischlerei Einetter OG<br />
            <b>Telefonnummer:</b> 04715391<br />
            <b>Email:</b> office@einetter.at
          </p>
          
          <p className="text-sm text-gray-500 mt-8">
            Quelle: <b><a href="https://www.fairesrecht.at/kostenlos-datenschutzerklaerung-erstellen-generator.php" className="text-primary-600 hover:text-primary-700">Datenschutzgenerator Österreich DSGVO</a></b>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 