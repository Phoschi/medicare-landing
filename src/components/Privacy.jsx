import { motion } from 'framer-motion'
import { HardDrive, UserX, FileDown, FileUp, Lock, Smartphone } from 'lucide-react'

const privacyPoints = [
  {
    icon: HardDrive,
    title: 'Local-first',
    desc: 'Vos données de santé restent sur votre appareil par défaut. Pas de cloud obligatoire, pas de synchronisation non désirée.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: UserX,
    title: 'Mode anonyme',
    desc: 'Medicare peut fonctionner sans compte, sans email, sans identifiant. Votre santé vous appartient.',
    color: 'text-slate-600',
    bg: 'bg-slate-100',
  },
  {
    icon: FileDown,
    title: 'Export complet',
    desc: 'Exportez l\'intégralité de votre historique à tout moment, dans un format lisible et portable.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: FileUp,
    title: 'Import sur nouvel appareil',
    desc: 'Changez de téléphone ou de navigateur sans perdre vos données. Importez votre export en un geste.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
  {
    icon: Lock,
    title: 'Données sensibles protégées',
    desc: 'Les informations de santé sont par nature sensibles. Medicare les traite avec la même rigueur.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: Smartphone,
    title: 'Fonctionne hors connexion',
    desc: 'L\'application patient est pensée pour fonctionner même sans connexion internet permanente.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
  },
]

export default function Privacy() {
  return (
    <section id="confidentialite" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-medicare-teal mb-3">
            Confidentialité
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Vos données de santé restent{' '}
            <span className="text-gradient">les vôtres</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Dans un domaine aussi sensible que la santé, la confiance n'est pas optionnelle.
            Elle est primordiale et demande une rigueur technique : stockage local, mode anonyme,
            Export total et contrôle permanent. Vos données sont précieuses, alors on se doit d'être au niveau
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {privacyPoints.map(({ icon: Icon, title, desc, color, bg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex gap-4 card-hover"
            >
              <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center shrink-0`}>
                <Icon size={18} className={color} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">{title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badge strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 bg-gradient-to-r from-medicare-blue-light via-teal-50 to-green-50 border border-slate-200 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center gap-4"
        >
          <div className="w-12 h-12 bg-medicare-blue rounded-xl flex items-center justify-center shrink-0 shadow-sm">
            <Lock size={22} className="text-white" />
          </div>
          <div>
            <p className="font-bold text-slate-900 text-sm mb-0.5">
              Approche local-first &amp; sobriété des données
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Medicare est conçu dès le départ pour minimiser la collecte de données.
              Vous n&apos;avez pas besoin de créer un compte pour utiliser l&apos;application.
              Vos analyses peuvent rester entièrement sur votre appareil.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
