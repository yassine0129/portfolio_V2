import { Menu, X, Github, Linkedin, Facebook, Instagram, Mail, Phone, ExternalLink, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThreeScene } from './components/ThreeScene';
import { AnimatedText } from './components/AnimatedText';
import { Timeline } from './components/Timeline';
import { SkillCard } from './components/SkillCard';
import { CertificationCard } from './components/CertificationCard';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const experienceItems = [
    {
      date: 'Avr - Juin 2024',
      title: 'FORNET',
      subtitle: 'Stage',
      location: 'Rabat, Maroc',
      description: 'Développement front-end sur des portails internet. Création de pages conformes aux standards W3C depuis Adobe XD. Optimisation responsive et performance Pagespeed.',
      color: 'bg-blue-600',
    },
    {
      date: 'Juin - Août 2023',
      title: 'ZOUITINA CAR',
      subtitle: 'Stage',
      location: 'Rabat, Maroc',
      description: 'Gestion de location de voitures. Rédaction des spécifications fonctionnelles, estimation des coûts, développement Full Stack.',
      color: 'bg-blue-600',
    },
    {
      date: 'Juillet 2021',
      title: 'FORCINET',
      subtitle: 'Stage',
      location: 'Rabat, Maroc',
      description: 'Étude de refonte du site web bachelier.ma. Élaboration d\'un cahier des charges et planning.',
      color: 'bg-blue-600',
    },
  ];

  const educationItems = [
    {
      date: '2024 - Aujourd\'hui',
      title: 'Université Sorbonne Paris-Nord',
      subtitle: 'Master Informatique',
      location: 'Paris, France',
      description: '1ère Année Master Informatique. Formation avancée en informatique avec focus sur les systèmes et réseaux.',
      color: 'bg-blue-600',
    },
    {
      date: '2023 - 2024',
      title: 'Université Picardie Jules Verne',
      subtitle: 'Licence Informatique',
      location: 'Amiens, France',
      description: '3ème Année Licence Informatique. Étude approfondie des concepts fondamentaux et avancés.',
      color: 'bg-blue-600',
    },
    {
      date: '2022 - 2023',
      title: 'EMSI',
      subtitle: 'Cycle d\'Ingénierie',
      location: 'Rabat, Maroc',
      description: '1ère Année Cycle d\'Ingénierie Informatique et Réseaux. Formation généraliste en informatique.',
      color: 'bg-blue-600',
    },
    {
      date: '2020 - 2022',
      title: 'EMSI',
      subtitle: 'Classe Préparatoire',
      location: 'Rabat, Maroc',
      description: '2 Années Préparatoires. Fondations mathématiques et scientifiques.',
      color: 'bg-blue-600',
    },
  ];


const skills = [
  // ------------------------------
  // 🔵 Compétences Développeur Web
  // ------------------------------
  { name: 'Python', color: 'from-yellow-400 to-blue-500' },
  { name: 'C/C++', color: 'from-blue-600 to-blue-800' },
  { name: 'HTML', color: 'from-orange-500 to-red-600' },
  { name: 'CSS', color: 'from-blue-400 to-blue-600' },
  { name: 'JavaScript', color: 'from-yellow-300 to-yellow-500' },
  { name: 'PHP', color: 'from-violet-600 to-blue-700' },
  { name: 'Symfony', color: 'from-gray-800 to-gray-900' },
  { name: 'Bootstrap', color: 'from-violet-500 to-violet-700' },
  { name: 'SQL/PLSQL', color: 'from-blue-500 to-blue-700' },
  { name: 'XML', color: 'from-orange-400 to-orange-600' },
  { name: 'SCRUM', color: 'from-green-500 to-green-700' },
  { name: 'Arduino', color: 'from-teal-500 to-cyan-600' },

  // Web modernes
  { name: 'React', color: 'from-cyan-400 to-blue-500' },
  { name: 'Node.js', color: 'from-green-500 to-green-700' },
  { name: 'Express.js', color: 'from-gray-700 to-gray-900' },
  { name: 'TailwindCSS', color: 'from-sky-400 to-sky-600' },
  { name: 'TypeScript', color: 'from-blue-500 to-blue-700' },
  { name: 'Git/GitHub', color: 'from-gray-600 to-gray-800' },
  { name: 'REST API', color: 'from-indigo-500 to-indigo-700' },
  { name: 'Figma', color: 'from-purple-500 to-purple-700' },
  { name: 'Responsive Design', color: 'from-rose-400 to-rose-600' },

  // ------------------------------
  // Compétences Data Engineering
  // ------------------------------
  { name: 'Oracle', color: 'from-red-500 to-red-700' },
  { name: 'Talend', color: 'from-green-500 to-green-700' },
  { name: 'Power BI', color: 'from-yellow-500 to-yellow-700' },
];


  const certifications = [
    { title: 'Programming for Everybody', issuer: 'Python - University of Michigan', color: 'from-yellow-400 to-yellow-600' },
    { title: 'Python Data Structures', issuer: 'Python - University of Michigan', color: 'from-yellow-400 to-yellow-600' },
    { title: 'Using Python to Access Web Data', issuer: 'Python - University of Michigan', color: 'from-yellow-400 to-yellow-600' },
    { title: 'Using Databases with Python', issuer: 'Python - University of Michigan', color: 'from-yellow-400 to-yellow-600' },
    { title: 'Capstone: Retrieving, Processing, and Visualizing Data', issuer: 'Python - University of Michigan', color: 'from-yellow-400 to-yellow-600' },
    { title: 'Modeling Software Systems using UML', issuer: 'Software Engineering - HKUST', color: 'from-red-400 to-red-600' },
    { title: 'Software Design and Project Management', issuer: 'Software Engineering - HKUST', color: 'from-red-400 to-red-600' },
    { title: 'Implementation and Testing', issuer: 'Software Engineering - HKUST', color: 'from-red-400 to-red-600' },
    { title: 'Unix System Basics', issuer: 'Codio', color: 'from-gray-700 to-gray-900' },
    { title: 'CCNA: Introduction to Networks', issuer: 'Cisco', color: 'from-blue-600 to-blue-800' },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 shadow-lg border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold"
                animate={{ rotateY: scrollY * 0.1 }}
              >
                YR
              </motion.div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Yassine RAHALI Portfolio</span>
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {['À propos', 'Expérience', 'Compétences', 'Certifications', 'Contact'].map((item, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/[àé]/g, 'a').split(' ')[0])}
                  className="text-gray-300 hover:text-blue-400 transition-colors font-medium relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-blue-500/20 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/90 border-t border-blue-500/20"
            >
              <div className="px-4 py-4 space-y-3">
                {['À propos', 'Expérience', 'Compétences', 'Certifications', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(/[àé]/g, 'a').split(' ')[0])}
                    className="block w-full text-left px-4 py-2 text-gray-300 hover:text-blue-400 rounded-lg hover:bg-blue-500/10"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-16">
        <section id="about" className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <ThreeScene />
          </div>

          <div className="relative z-10 min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto w-full">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div
                    className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/50"
                    whileHover={{ borderColor: '#0ea5e9', boxShadow: '0 0 20px rgba(14, 165, 233, 0.3)' }}
                  >
                    Développeur Web
                  </motion.div>

                  <AnimatedText
                    text="Bonjour, je suis Yassine RAHALI"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                    delay={0.2}
                  />

                  <motion.p
                    className="text-xl text-gray-300 leading-relaxed max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    Étudiant en Master 2 Exploration Informatique des Données et Décisionnel à l'Université Sorbonne Paris-Nord. Passionné par la technologie, je recherche un Stage de fin détudes.
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <motion.a
                      href="https://drive.google.com/file/d/1scqgbsp1w4nPG6wFfSdCfEDyIDz3oWvw/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium shadow-lg"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Télécharger CV
                      <ExternalLink size={18} />
                    </motion.a>
                    <motion.a
                      href="https://github.com/yassine0129"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg font-medium border border-gray-700 shadow-lg"
                      whileHover={{ scale: 1.05, borderColor: '#0ea5e9', boxShadow: '0 0 30px rgba(14, 165, 233, 0.3)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      Voir Projets
                    </motion.a>
                  </motion.div>

                  <motion.div
                    className="flex gap-4 pt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    {[
                      { href: 'https://www.linkedin.com/in/yassine-rahali-5165bb2b3/', icon: Linkedin },
                      { href: 'https://github.com/yassine0129', icon: Github },
                      { href: 'https://www.facebook.com/yassine.rahali.77/?locale=fr_FR', icon: Facebook },
                      { href: 'https://www.instagram.com/yassine.rahali/', icon: Instagram },
                    ].map((social, idx) => (
                      <motion.a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
                        whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(14, 165, 233, 0.4)' }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <social.icon size={24} className="text-blue-400" />
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div
                  className="hidden lg:block"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <motion.div
                    className="relative"
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-30" />
                    <motion.div
                      className="relative bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-3xl p-8 border border-blue-500/30 backdrop-blur-xl"
                      whileHover={{ borderColor: 'rgba(6, 182, 212, 0.6)' }}
                    >
                      <motion.div
                        className="aspect-square bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-8xl font-bold"
                        animate={{ rotateZ: [0, 2, -2, 0] }}
                        transition={{ duration: 6, repeat: Infinity }}
                      >
                        YR
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>

              <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown size={32} className="text-blue-400" />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 border-t border-blue-500/20">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Expérience & Formation
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12">
              <Timeline items={experienceItems} title="Expérience" />
              <Timeline items={educationItems} title="Formation" />
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-blue-500/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">Compétences Techniques</h2>
              <p className="text-gray-400 text-lg">Technologies et outils que je maîtrise</p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
              {skills.map((skill, idx) => (
                <SkillCard key={idx} name={skill.name} color={skill.color} delay={idx * 0.05} />
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-900/50 rounded-xl p-8 border border-blue-500/30 backdrop-blur-xl"
              >
                <h3 className="text-2xl font-bold text-blue-400 mb-6">Langues</h3>
                <div className="space-y-4">
                  {['Français', 'Anglais', 'Arabe'].map((lang, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <motion.div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded" />
                      <span className="text-gray-300 font-medium">{lang}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-xl p-8 border border-blue-500/50 backdrop-blur-xl"
              >
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Recherche De Stage</h3>
                <p className="text-gray-300 leading-relaxed">
 Étudiant en Master 2 en informatique, je recherche un stage de 6 mois (dès mars 2026)
 pour mettre mes compétences en développement au service de projets innovants. Curieux
 et investi, j'aime relever des défis techniques et progresser au sein d'une équipe ambitieuse.                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 border-t border-blue-500/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">Certifications</h2>
              <p className="text-gray-400 text-lg">Formations et certifications complétées</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, idx) => (
                <CertificationCard
                  key={idx}
                  title={cert.title}
                  issuer={cert.issuer}
                  index={idx}
                  color={cert.color}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-blue-500/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Restons en contact
            </motion.h2>

            <motion.p
              className="text-gray-300 mb-12 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              N'hésitez pas à me contacter pour toute opportunité ou collaboration
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {[
                { href: 'mailto:ahmed.yassine.rahali@gmail.com', icon: Mail, label: 'Email', value: 'ahmed.yassine.rahali@gmail.com' },
                { href: 'tel:+33621353290', icon: Phone, label: 'Téléphone', value: '+33 6 21 35 32 90' },
              ].map((contact, idx) => (
                <motion.a
                  key={idx}
                  href={contact.href}
                  className="flex items-center gap-4 bg-gray-900/50 border border-blue-500/30 p-6 rounded-xl backdrop-blur-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ borderColor: 'rgba(6, 182, 212, 0.6)', boxShadow: '0 0 30px rgba(6, 182, 212, 0.2)' }}
                >
                  <motion.div
                    className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <contact.icon size={24} />
                  </motion.div>
                  <div className="text-left">
                    <p className="text-sm text-gray-400">{contact.label}</p>
                    <p className="font-semibold text-gray-300">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="flex justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[
                { href: 'https://www.linkedin.com/in/yassine-rahali-5165bb2b3/', icon: Linkedin },
                { href: 'https://github.com/yassine0129', icon: Github },
                { href: 'https://www.facebook.com/yassine.rahali.77/?locale=fr_FR', icon: Facebook },
                { href: 'https://www.instagram.com/yassine.rahali/', icon: Instagram },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-900/50 border border-blue-500/30 rounded-lg"
                  whileHover={{ scale: 1.1, borderColor: 'rgba(6, 182, 212, 0.6)', boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={28} className="text-blue-400" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        <footer className="bg-black border-t border-blue-500/20 text-gray-400 py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              © 2024 - Yassine RAHALI. Tous droits réservés
            </motion.p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;