import { motion } from 'framer-motion'
import {
  MapPin, MessageSquare, Cpu, FileCheck, Dumbbell,
  TrendingUp, UserCheck, AlertOctagon
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MapPin,
    color: 'bg-blue-500',
    bg: 'bg-blue-50',
    title: 'Sélection de la zone',
    desc: 'Vous sélectionnez la zone douloureuse sur un schéma corporel interactif : cou, dos, épaule, genou, cheville…',
  },
  {
    number: '02',
    icon: MessageSquare,
    color: 'bg-indigo-500',
    bg: 'bg-indigo-50',
    title: 'Description libre',
    desc: 'Vous décrivez vos symptômes en langage naturel, comme vous le feriez avec un professionnel. Intensité, contexte, déclencheur, antécédents.',
  },
  {
    number: '03',
    icon: Cpu,
    color: 'bg-teal-500',
    bg: 'bg-teal-50',
    title: 'Analyse assistée par IA',
    desc: 'Medicare analyse les informations en combinant des règles médicales et un moteur IA. La décision est explicable et traçable.',
  },
  {
    number: '04',
    icon: AlertOctagon,
    color: 'bg-red-400',
    bg: 'bg-red-50',
    title: 'Détection des red flags',
    desc: 'Le système identifie les signaux d\'alerte : fièvre associée, déficit neurologique, troubles sensitifs. En cas de red flag, vous êtes immédiatement réorienté.',
    highlighted: true,
  },
  {
    number: '05',
    icon: FileCheck,
    color: 'bg-green-500',
    bg: 'bg-green-50',
    title: 'Résultat & hypothèses',
    desc: 'Medicare retourne un niveau de gravité, des hypothèses de pathologies classées et une orientation claire : dans le cadre ou hors cadre.',
  },
  {
    number: '06',
    icon: Dumbbell,
    color: 'bg-amber-500',
    bg: 'bg-amber-50',
    title: 'Protocole d\'auto-soin',
    desc: 'Si l\'auto-soin est pertinent, vous accédez à un protocole progressif et à une séance d\'exercices guidés adaptée à votre situation.',
  },
  {
    number: '07',
    icon: TrendingUp,
    color: 'bg-purple-500',
    bg: 'bg-purple-50',
    title: 'Suivi de l\'évolution',
    desc: 'Vous renseignez votre ressenti après chaque séance. Medicare suit votre évolution et adapte les recommandations en conséquence.',
  },
  {
    number: '08',
    icon: UserCheck,
    color: 'bg-slate-600',
    bg: 'bg-slate-50',
    title: 'Relai vers le professionnel',
    desc: 'Si la situation évolue mal ou dépasse le cadre de l\'auto-soin, Medicare recommande une consultation et facilite la transmission au kiné.',
  },
]

export default function Workflow() {
  return (
    <section id="workflow" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-medicare-teal mb-3">
            Parcours patient
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            De la douleur à l&apos;action,{' '}
            <span className="text-gradient">étape par étape</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Un flux pensé pour être simple, guidé et rassurant.
            Pas de jargon, pas d&apos;incertitude inutile — juste une progression logique
            vers la bonne décision.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`relative rounded-2xl p-5 border card-hover ${
                  step.highlighted
                    ? 'bg-red-50 border-red-200'
                    : 'bg-slate-50 border-slate-100'
                }`}
              >
                {/* Step number */}
                <span className="absolute top-4 right-4 text-xs font-bold text-slate-300">
                  {step.number}
                </span>

                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl ${step.color} flex items-center justify-center mb-4 shadow-sm`}>
                  <Icon size={18} className="text-white" />
                </div>

                <h3 className="text-sm font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>

                {step.highlighted && (
                  <div className="mt-3 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs text-red-500 font-semibold">Sécurité prioritaire</span>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Visual flow line hint */}
        <div className="hidden lg:flex items-center justify-center mt-8 gap-2">
          {steps.map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${
                i === 3 ? 'bg-red-400' : 'bg-medicare-blue/40'
              }`} />
              {i < steps.length - 1 && (
                <div className="w-8 h-0.5 bg-slate-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
