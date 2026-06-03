import { motion } from 'framer-motion'
import { HelpCircle, SearchX, AlertTriangle, Clock } from 'lucide-react'

const pains = [
  {
    icon: HelpCircle,
    color: 'bg-amber-50 text-amber-600 border-amber-200',
    quote: '"J\'ai mal au bas du dos depuis 2 jours. Je dois aller chez le médecin ou j\'attends ?"',
    label: 'Doute sur la conduite à tenir',
  },
  {
    icon: SearchX,
    color: 'bg-red-50 text-red-500 border-red-200',
    quote: '"J\'ai cherché sur internet… Entre les forums et les articles, impossible de savoir si ma douleur est grave ou non."',
    label: 'Infos contradictoires en ligne',
  },
  {
    icon: AlertTriangle,
    color: 'bg-orange-50 text-orange-500 border-orange-200',
    quote: '"J\'ai mal à l\'épaule depuis des semaines mais je me suis dit que ça passerait tout seul."',
    label: 'Signal d\'alerte sous-estimé',
  },
  {
    icon: Clock,
    color: 'bg-blue-50 text-blue-500 border-blue-200',
    quote: '"Je voulais prendre rendez-vous chez le kiné mais j\'avais peur que ce ne soit pas justifié pour une simple douleur."',
    label: 'Hésitation avant de consulter',
  },
]

export default function Problem() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-medicare-teal mb-3">
            Le problème
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Vous avez mal. Vous ne savez pas quoi faire.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Beaucoup de personnes vivent avec une douleur musculo-squelettique sans savoir
            si elle est bénigne, si elles peuvent agir seules, ni à quel moment consulter.
            Résultat : de l&apos;inquiétude inutile, des consultations évitables ou, à l&apos;inverse,
            des signaux d&apos;alerte ignorés.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pains.map(({ icon: Icon, color, quote, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${color}`}>
                <Icon size={20} />
              </div>
              <p className="text-slate-600 text-sm leading-relaxed italic flex-1">{quote}</p>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{label}</span>
            </motion.div>
          ))}
        </div>

        {/* Divider with arrow */}
        <div className="flex flex-col items-center mt-14 gap-2">
          <p className="text-slate-400 text-sm">
            Medicare est conçu exactement pour ces moments-là.
          </p>
          <div className="w-0.5 h-8 bg-gradient-to-b from-medicare-teal to-transparent rounded-full" />
        </div>
      </div>
    </section>
  )
}
