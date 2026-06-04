import { motion } from 'framer-motion'
import {
  ScanLine, Type, BrainCircuit, ShieldAlert, Navigation2,
  FlaskConical, Activity, BarChart3, History, Download, User
} from 'lucide-react'

const features = [
  {
    icon: ScanLine,
    title: 'Sélection anatomique',
    desc: 'Schéma corporel interactif pour localiser précisément la zone douloureuse.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: Type,
    title: 'Description en langage naturel',
    desc: 'Exprimez vos symptômes librement, comme vous parleriez à un professionnel.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
  },
  {
    icon: BrainCircuit,
    title: 'Analyse IA explicable',
    desc: 'Hypothèses classées, décision argumentée, signaux tracés. Pas une boîte noire.',
    color: 'text-teal-500',
    bg: 'bg-teal-50',
  },
  {
    icon: ShieldAlert,
    title: 'Détection de red flags',
    desc: 'Fièvre, déficit neurologique, troubles sensitifs : les signaux critiques ne passent pas inaperçus.',
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    icon: Navigation2,
    title: 'Orientation claire',
    desc: 'Auto-soin possible ou consultation recommandée : Medicare tranche et explique pourquoi.',
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
  {
    icon: FlaskConical,
    title: 'Protocoles d\'auto-soin',
    desc: 'Repos relatif, chaleur ou froid, mobilisation douce, renforcement progressif, gestes adaptés.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    icon: Activity,
    title: 'Séances & suivi du ressenti',
    desc: 'Exercices guidés, suivi de l\'évolution dans le temps et adaptation des recommandations.',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
  {
    icon: BarChart3,
    title: 'Historique des analyses',
    desc: 'Consultez l\'ensemble de vos assessments passés, leur évolution et vos protocoles suivis.',
    color: 'text-slate-500',
    bg: 'bg-slate-100',
  },
  {
    icon: User,
    title: 'Profil santé',
    desc: 'Antécédents, sport pratiqué, métier, traitements en cours : le contexte pour une analyse plus précise.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50',
  },
  {
    icon: History,
    title: 'Conservation locale',
    desc: 'Vos données restent sur votre appareil, sans cloud obligatoire, sans compte requis.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: Download,
    title: 'Export & import des données',
    desc: 'Exportez votre historique, importez-le sur un autre appareil ou partagez-le avec votre professionnel.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
]

export default function Features() {
  return (
    <section id="fonctionnalites" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-medicare-teal mb-3">
            Fonctionnalités
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Tout ce dont vous avez besoin,{' '}
            <span className="text-gradient">et rien de superflu</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Medicare est conçu pour être précis, utile et sobre. Chaque fonctionnalité
            répond à un besoin réel du parcours patient ou professionnel.
          </p>
        </motion.div>

        {/* Covered conditions banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border border-slate-200 p-5 mb-10 flex flex-wrap gap-2 items-center"
        >
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide mr-2">
            Situations couvertes :
          </span>
          {[
            'Torticolis', 'Lumbago', 'Tendinite', 'Névralgie du bras',
            'Pubalgie', 'Entorse', 'Ligaments croisés',
            'Douleur cervicale', 'Épaule', 'Genou', 'Cheville',
          ].map((condition) => (
            <span
              key={condition}
              className="bg-medicare-blue-light text-medicare-blue text-xs font-medium px-3 py-1 rounded-full"
            >
              {condition}
            </span>
          ))}
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map(({ icon: Icon, title, desc, color, bg, highlight }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`bg-white rounded-2xl p-5 border card-hover ${
                highlight
                  ? 'border-medicare-teal/40 shadow-sm shadow-teal-100'
                  : 'border-slate-100'
              }`}
            >
              <div className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center mb-3`}>
                <Icon size={17} className={color} />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">{title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              {highlight && (
                <div className="mt-3">
                  <span className="text-[10px] font-semibold text-medicare-teal uppercase tracking-wide">
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
