import { motion } from 'framer-motion'
import { Compass, BookOpen, ArrowUpRight, RefreshCw } from 'lucide-react'

const pillars = [
  {
    icon: BookOpen,
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    title: 'Comprendre',
    desc: 'Medicare vous aide à nommer votre douleur, à la situer, à la contextualiser et à comprendre ce qu\'elle peut signifier — sans jargon médical inutile.',
  },
  {
    icon: Compass,
    color: 'from-teal-500 to-teal-600',
    bg: 'bg-teal-50',
    title: 'Orienter',
    desc: 'L\'analyse distingue les situations compatibles avec de l\'auto-soin des situations qui nécessitent une consultation ou une prise en charge plus rapide.',
  },
  {
    icon: RefreshCw,
    color: 'from-green-500 to-green-600',
    bg: 'bg-green-50',
    title: 'Accompagner',
    desc: 'Quand l\'auto-soin est pertinent, Medicare propose un protocole progressif et structuré : repos, chaleur ou froid, mobilisation douce, renforcement progressif.',
  },
  {
    icon: ArrowUpRight,
    color: 'from-purple-500 to-purple-600',
    bg: 'bg-purple-50',
    title: 'Relier',
    desc: 'Si votre situation sort du cadre ou demande un suivi professionnel, Medicare facilite la transition vers un kiné via une session partagée en temps réel.',
  },
]

export default function Solution() {
  return (
    <section id="solution" className="py-20 bg-section-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-medicare-teal mb-3">
            La solution
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Une première couche d&apos;accompagnement{' '}
            <span className="text-gradient">claire et responsable</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Medicare n&apos;est pas une application qui veut remplacer les soignants.
            C&apos;est un outil d&apos;aide à la décision pensé pour les douleurs musculo-squelettiques,
            avec une logique de prudence clinique et une analyse explicable.
          </p>
        </motion.div>

        {/* Central image + cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map(({ icon: Icon, color, bg, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm card-hover"
            >
              <div className={`w-12 h-12 rounded-2xl ${bg} flex items-center justify-center mb-4`}>
                <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-sm`}>
                  <Icon size={16} className="text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 bg-medicare-blue/5 border border-medicare-blue/20 rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-medicare-blue mt-1 shrink-0" />
          <p className="text-sm text-slate-600 leading-relaxed">
            <strong className="text-slate-800 font-semibold">Medicare n&apos;est pas un diagnostic médical.</strong>{' '}
            C&apos;est un outil d&apos;aide à la décision qui propose des hypothèses, un cadre de lecture
            et une orientation adaptée. Il ne remplace ni un médecin, ni un kiné, ni une consultation clinique.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
