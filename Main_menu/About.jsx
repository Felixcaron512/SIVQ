import React, { useEffect, useState } from "react";
import { Shield, Server, Award, Users, CheckCircle, ArrowRight, Zap, Lock, Headphones, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Load 3CX chat widget
    const script = document.createElement('script');
    script.src = 'https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js';
    script.id = 'tcx-callus-js';
    script.charset = 'utf-8';
    script.defer = true;
    document.body.appendChild(script);

    const callUsSelector = document.createElement('call-us-selector');
    callUsSelector.setAttribute('phonesystem-url', 'https://1657.3cx.cloud');
    callUsSelector.setAttribute('party', 'sivq');
    document.body.appendChild(callUsSelector);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
      if (callUsSelector.parentNode) callUsSelector.parentNode.removeChild(callUsSelector);
    };
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Plateforme sécurisée",
      description: "Système de cryptage avancé pour protéger vos données et vos enregistrements de serveurs"
    },
    {
      icon: Zap,
      title: "Traitement instantané",
      description: "Enregistrement et validation des serveurs en temps réel pour une mise en ligne rapide"
    },
    {
      icon: Headphones,
      title: "Support 24/7",
      description: "Équipe dédiée disponible en tout temps pour répondre à vos questions et résoudre vos problèmes"
    },
    {
      icon: Award,
      title: "Certification officielle",
      description: "Obtenez une certification reconnue pour votre serveur ERLC avec notre système d'accréditation"
    }
  ];

  const programs = [
    {
      title: "Gestion de plaques d'immatriculation",
      description: "Système complet de gestion des plaques virtuelles pour les véhicules dans ERLC",
      features: [
        "Attribution automatique de numéros uniques",
        "Base de données centralisée et sécurisée",
        "Vérification instantanée des plaques",
        "Historique complet des véhicules",
        "Intégration avec les systèmes de jeu"
      ]
    },
    {
      title: "Registre des serveurs",
      description: "Plateforme centralisée pour l'enregistrement et la découverte de serveurs ERLC",
      features: [
        "Listing public de tous les serveurs certifiés",
        "Système de notation et avis communautaires",
        "Statistiques de performance en temps réel",
        "Filtres de recherche avancés",
        "Badges de qualité et de fiabilité"
      ]
    },
    {
      title: "SIVQ Portail +",
      description: "Application de gestion complète pour les administrateurs de serveurs",
      features: [
        "Tableau de bord administratif intuitif",
        "Gestion des utilisateurs et permissions",
        "Rapports et analytics détaillés",
        "Notifications en temps réel",
        "API pour intégrations personnalisées"
      ]
    }
  ];

  const stats = [
    { number: "500+", label: "Serveurs enregistrés" },
    { number: "50K+", label: "Joueurs actifs" },
    { number: "99.9%", label: "Temps de disponibilité" },
    { number: "24/7", label: "Support disponible" }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCA0MmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNMCAyNGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              En savoir plus sur la
              <span className="block mt-2">Société d'immatriculation ERLC</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Leader dans l'enregistrement et la gestion des serveurs de jeux depuis 2025
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent" />
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Notre Mission
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              La Société d'Immatriculation des Véhicules du Québec (SIVQ) est dédiée à l'enregistrement 
              et à la gestion des serveurs de jeux ERLC (Emergency Response: Liberty County). 
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Nous offrons une plateforme sécurisée, fiable et innovante pour les propriétaires de serveurs, 
              leur permettant de gérer efficacement leurs communautés de jeu tout en garantissant 
              l'authenticité et la qualité des expériences offertes aux joueurs.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Notre vision est de devenir la référence incontournable pour tous les serveurs ERLC 
              francophones, en créant un écosystème standardisé et professionnel.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Pourquoi choisir la SIVQ ?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Des solutions complètes et innovantes pour la gestion de votre serveur ERLC
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-200/60 h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Programs Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Nos Programmes et Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Des outils puissants pour optimiser la gestion de votre serveur
            </p>
          </motion.div>

          <div className="space-y-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-3xl shadow-lg p-8 border border-slate-200/60 hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                    <img 
                      src="https://i.imgur.com/06jbFPA_d.webp?maxwidth=760&fidelity=grand" 
                      alt="Icon" 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {program.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {program.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-12 text-center shadow-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Prêt à rejoindre la SIVQ ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Enregistrez votre serveur dès maintenant et bénéficiez de tous nos services professionnels
          </p>
          <Link to={createPageUrl("Home")}>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold">
              Retour à l'accueil
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-slate-400">
              SIVQ — 2025
            </h4>
            <p className="text-sm text-slate-500 mt-2">
              Société d'Immatriculation des Véhicules du Québec
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}