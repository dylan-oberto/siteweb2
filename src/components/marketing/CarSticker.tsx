import React, { useRef } from 'react';
import { Droplets, Sparkles, Phone, CheckCircle, Download } from 'lucide-react';
import { contactInfo } from '../../utils/contactInfo';
import html2canvas from 'html2canvas';

const CarSticker = () => {
  const stickerRef = useRef<HTMLDivElement>(null);
  
  const handleDownload = async () => {
    if (!stickerRef.current) return;
    
    try {
      // Afficher un message de chargement
      const downloadBtn = document.getElementById('download-btn');
      if (downloadBtn) {
        downloadBtn.textContent = 'Génération en cours...';
        downloadBtn.setAttribute('disabled', 'true');
      }
      
      // Capturer le sticker en tant qu'image
      const canvas = await html2canvas(stickerRef.current, {
        scale: 3, // Haute résolution
        backgroundColor: null, // Fond transparent
        logging: false,
        useCORS: true
      });
      
      // Créer un lien de téléchargement
      const link = document.createElement('a');
      link.download = 'OC-Clean-Sticker-Vehicule.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
      
      // Restaurer le texte du bouton
      if (downloadBtn) {
        downloadBtn.textContent = 'Télécharger en haute définition';
        downloadBtn.removeAttribute('disabled');
      }
    } catch (error) {
      console.error('Erreur lors de la génération du sticker:', error);
      alert('Une erreur est survenue lors de la génération du sticker. Veuillez réessayer.');
      
      // Restaurer le texte du bouton en cas d'erreur
      const downloadBtn = document.getElementById('download-btn');
      if (downloadBtn) {
        downloadBtn.textContent = 'Télécharger en haute définition';
        downloadBtn.removeAttribute('disabled');
      }
    }
  };
  
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="relative aspect-[3/2] bg-transparent">
        {/* Conteneur principal avec forme personnalisée */}
        <div ref={stickerRef} className="absolute inset-0 overflow-hidden">
          {/* Fond avec forme dynamique */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-400/90" style={{
            borderRadius: '60px 30px 60px 30px'
          }}>
            {/* Éléments décoratifs */}
            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-white/10 rounded-full -mr-[20%] -mt-[20%]" />
            <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-blue-300/10 rounded-full -ml-[15%] -mb-[15%]" />
            
            {/* Motifs décoratifs supplémentaires */}
            <div className="absolute top-[20%] left-[10%] w-[5%] h-[5%] bg-white/20 rounded-full" />
            <div className="absolute bottom-[30%] right-[15%] w-[8%] h-[8%] bg-white/15 rounded-full" />
            <div className="absolute top-[60%] left-[20%] w-[4%] h-[4%] bg-white/10 rounded-full" />
          </div>

          {/* Contenu principal */}
          <div className="relative h-full flex flex-col justify-between p-[5%] text-white">
            {/* Logo en haut - TAILLE RÉDUITE */}
            <div className="flex items-center justify-center mb-[2%]">
              <div className="relative">
                <Droplets className="w-[15vw] h-auto text-white" />
                <Sparkles className="absolute -top-[15%] -right-[15%] w-[40%] h-auto text-green-300" />
              </div>
              <div className="ml-[3%]">
                <h1 className="text-[9vw] font-extrabold tracking-tight text-white leading-none">
                  OC'Clean
                </h1>
                <p className="text-[2.5vw] font-medium text-blue-100 tracking-wider">
                  PROPRETÉ & EXCELLENCE
                </p>
              </div>
            </div>

            {/* Services au centre - TAILLE RÉDUITE */}
            <div className="flex justify-center mt-[2%] mb-[3%]">
              <div className="grid grid-cols-2 gap-x-[8%] gap-y-[3%]">
                <div className="flex items-center space-x-[2%] bg-white/10 px-[3%] py-[1.5%] rounded-full">
                  <CheckCircle className="w-[2vw] h-auto text-green-300" />
                  <span className="text-[2.8vw] font-semibold">Nettoyage Auto</span>
                </div>
                <div className="flex items-center space-x-[2%] bg-white/10 px-[3%] py-[1.5%] rounded-full">
                  <CheckCircle className="w-[2vw] h-auto text-green-300" />
                  <span className="text-[2.8vw] font-semibold">Nettoyage Vitres</span>
                </div>
                <div className="flex items-center space-x-[2%] bg-white/10 px-[3%] py-[1.5%] rounded-full">
                  <CheckCircle className="w-[2vw] h-auto text-green-300" />
                  <span className="text-[2.8vw] font-semibold">Entretien Bureaux</span>
                </div>
                <div className="flex items-center space-x-[2%] bg-white/10 px-[3%] py-[1.5%] rounded-full">
                  <CheckCircle className="w-[2vw] h-auto text-green-300" />
                  <span className="text-[2.8vw] font-semibold">Nettoyage Textile</span>
                </div>
              </div>
            </div>

            {/* Téléphone - TAILLE AJUSTÉE */}
            <div className="bg-blue-700/80 py-[1.5%] rounded-full flex items-center justify-center mb-[2%]">
              <Phone className="w-[3vw] h-auto text-white mr-[2%]" />
              <span className="text-[5vw] font-bold text-white">{contactInfo.phone}</span>
            </div>
            
            {/* Badge supplémentaire */}
            <div className="absolute top-[5%] right-[5%] bg-green-500/80 text-white px-[2.5%] py-[1%] rounded-full transform rotate-12">
              <span className="text-[2vw] font-bold">Service à la Personne</span>
            </div>
          </div>
        </div>

        {/* Instructions de dimensions et résolution */}
        <div className="absolute -bottom-8 left-0 right-0 text-center text-sm text-gray-500">
          Format haute définition: 900x600mm • Résolution: 150 pixels/pouce
        </div>
      </div>
      
      {/* Bouton de téléchargement (fonctionnel) */}
      <div className="mt-12 text-center">
        <button 
          id="download-btn"
          onClick={handleDownload}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center mx-auto"
        >
          <Download className="h-5 w-5 mr-2" />
          Télécharger en haute définition
        </button>
        <p className="text-sm text-gray-500 mt-2">
          Le fichier sera généré au format PNG haute résolution
        </p>
      </div>
    </div>
  );
};

export default CarSticker;