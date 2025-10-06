import React, { useEffect } from "react";
import { ExternalLink, Server, Info, AlertCircle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Home() {
  useEffect(() => {
    // Load 3CX chat widget
    const script = document.createElement('script');
    script.src = 'https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js';
    script.id = 'tcx-callus-js';
    script.charset = 'utf-8';
    script.defer = true;
    document.body.appendChild(script);

    // Add call-us-selector
    const callUsSelector = document.createElement('call-us-selector');
    callUsSelector.setAttribute('phonesystem-url', 'https://1657.3cx.cloud');
    callUsSelector.setAttribute('party', 'sivq');
    document.body.appendChild(callUsSelector);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
      if (callUsSelector.parentNode) callUsSelector.parentNode.removeChild(callUsSelector);
    };
  }, []);

  const actionCards = [
    {
      title: "Liste de serveurs",
      description: "Rechercher un serveur ERLC inscrit à ce service",
      icon: Server,
      color: "from-blue-600 to-blue-700",
      href: "https://felixcaron512.github.io/SIVQ/Registre%20Server/listservers.html"
    },
    {
      title: "À propos de nous",
      description: "La société d'immatriculation ERLC est dédiée à l'enregistrement et à la gestion des serveurs de jeux. Nous offrons une plateforme sécurisée et fiable pour les propriétaires de serveurs.",
      icon: Info,
      color: "from-indigo-600 to-indigo-700",
      href: "https://felixcaron512.github.io/SIVQ/Ensavoirplus/ensavoirplus.html"
    },
    {
      title: "Support technique",
      description: "Vous avez des difficultés avec l'application SIVQ Portail + ? Des problèmes comme le code d'erreur ERR029 ? Accédez à notre centre d'aide.",
      icon: AlertCircle,
      color: "from-purple-600 to-purple-700",
      href: "https://felixcaron512.github.io/SIVQ/Registre%20d'erreurs/index.html"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-indigo-600/5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pt-24 sm:pb-32">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full" />
                <img 
                  src="https://i.imgur.com/06jbFPA_d.webp?maxwidth=760&fidelity=grand" 
                  alt="Logo ERLC" 
                  className="relative h-24 w-24 sm:h-32 sm:w-32 object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
            >
              Bienvenue à la société
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-2">
                d'immatriculation ERLC
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
            >
              Plateforme dédiée à l'enregistrement et à la gestion des serveurs de jeux ERLC
            </motion.p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10" />
      </motion.div>

      {/* Action Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {actionCards.map((card, index) => (
            <motion.a
              key={index}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10" 
                   style={{ background: `linear-gradient(to right, ${card.color.split(' ')[1]}, ${card.color.split(' ')[2]})` }} />
              
              <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-200/60 group-hover:border-transparent h-full">
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <card.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span className="mr-2">Accéder</span>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 SIVQ — Tous droits réservés.
            </p>
            <p className="text-slate-400 text-sm">
              Conçu par <span className="text-blue-400 font-medium">Félix Caron</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}