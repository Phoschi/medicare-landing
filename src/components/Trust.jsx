import { motion } from 'framer-motion'
import { Scale, Eye, GitBranch, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react'

const aiPrinciples = [
  {
    icon: GitBranch,
    title: 'Règles + moteur IA',
    desc: 'L\'analyse combine des règles médicales structurées et un moteur IA. Les deux couches se complètent pour une décision plus fiable.',
  },
  {
    icon: Eye,
    title: 'Décision explicable',
    desc: 'Chaque hypothèse est justifiée. Medicare explique pourquoi elle est proposée, pas seulement ce qu\'elle est.',
  },
  {
    icon: Scale,
    title: 'Signaux tracés',
    desc: 'Les données prises en compte, les signaux détectés et les critères d\'exclusion sont accessibles et auditables.',
  },
  {
    icon: AlertTriangle,
    title: 'Prudence si signal faible',
    desc: 'Quand le signal est trop ambigu ou que la situation sort du cadre, Medicare ne conclut pas, il oriente vers un professionnel.',
  },
]

const doList = [
  'Aide à comprendre',
  'Oriente vers la bonne décision',
  'Accompagne l\'auto-soin',
  'Détecte les situations à risque',
  'Facilite le relai vers le kiné',
  'Explique chaque hypothèse',
]

const dontList = [
  'Ne remplace pas un médecin',
  'Ne pose pas un diagnostic médical',
  'Ne promet pas de guérison',
  'Ne minimise pas les risques',
  'N\'est pas une boîte noire',
  'N\'est pas une app wellness vague',
]

export default function Trust() {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-medicare-blue/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-medicare-teal mb-3">
            Confiance &amp; responsabilité
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Une IA encadrée, explicable{' '}
            <span className="text-gradient-light">et prudente</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Medicare n’a pas vocation à remplacer le jugement médical, ni à apporter une réponse à tout. 
            Notre ambition : réduire les frictions dans le parcours de soin et rendre l’accès aux soins plus simple.
          </p>
        </motion.div>

        {/* AI principles grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {aiPrinciples.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5"
            >
              <div className="w-9 h-9 bg-medicare-teal/20 rounded-xl flex items-center justify-center mb-4">
                <Icon size={17} className="text-medicare-teal" />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
              <p className="text-xs text-white/50 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Do / Don't */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <CheckCircle2 size={18} className="text-medicare-teal" />
              <p className="text-sm font-bold text-white">Ce que Medicare fait</p>
            </div>
            <ul className="space-y-2.5">
              {doList.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-medicare-teal shrink-0" />
                  <span className="text-sm text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <XCircle size={18} className="text-red-400" />
              <p className="text-sm font-bold text-white">Ce que Medicare n&apos;est pas</p>
            </div>
            <ul className="space-y-2.5">
              {dontList.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400/60 shrink-0" />
                  <span className="text-sm text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
