import React, { useState } from 'react';
import { PDFDownloadLink, Document, Page, View, Text, StyleSheet, Image } from '@react-pdf/renderer';
import { Mail, Download, Send } from 'lucide-react';
import { contactInfo } from '../../utils/contactInfo';

// Définition des styles pour le PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 10,
    width: '151mm',
    height: '213mm',
  },
  header: {
    backgroundColor: '#2563eb',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  logoContainer: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 4,
  },
  logo: {
    width: 50,
    height: 30,
    objectFit: 'contain',
  },
  headerCenter: {
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  headerSubtitle: {
    color: 'white',
    fontSize: 8,
  },
  section: {
    margin: 5,
    padding: 5,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceItem: {
    width: '30%',
    marginBottom: 8,
    padding: 5,
    backgroundColor: '#f8fafc',
    borderRadius: 4,
  },
  serviceTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  serviceFeature: {
    fontSize: 8,
    marginBottom: 2,
  },
  contactSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  contactItem: {
    width: '30%',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#eff6ff',
    borderRadius: 4,
  },
  contactTitle: {
    fontSize: 9,
    fontWeight: 'bold',
  },
  contactText: {
    fontSize: 8,
    textAlign: 'center',
  },
  offerSection: {
    backgroundColor: '#2563eb',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#93c5fd',
    borderRadius: 4,
  },
  offerTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  offerText: {
    color: 'white',
    fontSize: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 8,
    color: '#f8fafc',
    backgroundColor: '#111827',
    padding: 5,
  },
});

// Définition du document PDF
const FlyerPDF = () => (
  <Document>
    <Page size={[151 * 2.83, 213 * 2.83]} style={styles.page}>
      {/* En-tête */}
      <View style={styles.header}>
        {/* Logo CESU à gauche */}
        <View style={styles.logoContainer}>
          <Image 
            src="https://i.ibb.co/gLJQtKB/cesu-logo.png"
            style={styles.logo}
          />
        </View>
        
        {/* Logo OC'Clean au centre */}
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>OC'Clean</Text>
          <Text style={styles.headerSubtitle}>PROPRETÉ & EXCELLENCE</Text>
        </View>
        
        {/* Logo SAP à droite */}
        <View style={styles.logoContainer}>
          <Image 
            src="https://i.ibb.co/0pNgq1t/sap-logo.png"
            style={styles.logo}
          />
        </View>
      </View>

      {/* Services */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nos Services</Text>
        <View style={styles.servicesGrid}>
          {[
            {
              title: "Nettoyage Auto",
              features: ["Intérieur & Extérieur", "Protection céramique"]
            },
            {
              title: "Nettoyage Vitres",
              features: ["Particuliers & Pro", "Grandes hauteurs"]
            },
            {
              title: "Entretien Bureaux",
              features: ["Nettoyage quotidien", "Désinfection"]
            },
            {
              title: "Entretien Immeubles",
              features: ["Parties communes", "Vitrerie"]
            },
            {
              title: "Nettoyage Textile",
              features: ["Canapés & Tapis", "Matelas"]
            },
            {
              title: "Nettoyage Piscines",
              features: ["Entretien régulier", "Traitement eau"]
            }
          ].map((service, index) => (
            <View key={index} style={styles.serviceItem}>
              <Text style={styles.serviceTitle}>{service.title}</Text>
              {service.features.map((feature, idx) => (
                <Text key={idx} style={styles.serviceFeature}>• {feature}</Text>
              ))}
            </View>
          ))}
        </View>
      </View>

      {/* Contact */}
      <View style={styles.contactSection}>
        <View style={styles.contactItem}>
          <Text style={styles.contactTitle}>Téléphone</Text>
          <Text style={styles.contactText}>{contactInfo.phone}</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactTitle}>Email</Text>
          <Text style={styles.contactText}>{contactInfo.email}</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactTitle}>Adresse</Text>
          <Text style={styles.contactText}>{contactInfo.address}</Text>
        </View>
      </View>

      {/* Offre Spéciale - Directement après les contacts */}
      <View style={styles.offerSection}>
        <Text style={styles.offerTitle}>OFFRE SPÉCIALE -20%</Text>
        <Text style={styles.offerText}>Sur votre première prestation • Sur présentation de ce flyer</Text>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        Entreprise agréée Services à la Personne • SIRET: 93961336000014
      </Text>
    </Page>
  </Document>
);

// Composant pour l'export du flyer
const FlyerExport = () => {
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    // Simulation d'envoi d'email (dans une application réelle, ceci serait remplacé par un appel API)
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setEmail('');
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Exporter le Flyer</h2>
      
      <div className="mb-8">
        <PDFDownloadLink 
          document={<FlyerPDF />} 
          fileName="OC_Clean_Flyer.pdf"
          className="w-full bg-blue-600 text-white flex items-center justify-center py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          {({ blob, url, loading, error }) => 
            loading ? 
              'Préparation du document...' : 
              <div className="flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Télécharger le flyer PDF
              </div>
          }
        </PDFDownloadLink>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Format exact: 151mm x 213mm
        </p>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Envoyer par email</h3>
        
        <form onSubmit={handleSendEmail}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Adresse email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="exemple@email.com"
              required
            />
          </div>
          
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          
          <button
            type="submit"
            disabled={isSending || isSent}
            className={`w-full flex items-center justify-center py-3 px-4 rounded-lg transition duration-300 ${
              isSent 
                ? 'bg-green-600 text-white' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isSending ? (
              'Envoi en cours...'
            ) : isSent ? (
              <div className="flex items-center">
                <span className="mr-2">✓</span> Flyer envoyé avec succès
              </div>
            ) : (
              <div className="flex items-center">
                <Send className="w-5 h-5 mr-2" />
                Envoyer le flyer
              </div>
            )}
          </button>
        </form>
        
        {isSent && (
          <p className="text-green-600 text-sm mt-4 text-center">
            Le flyer a été envoyé avec succès !
          </p>
        )}
      </div>
    </div>
  );
};

export default FlyerExport;