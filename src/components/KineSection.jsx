import { motion } from 'framer-motion'
import { QrCode, Wifi, ClipboardCheck, Send, Monitor, Users } from 'lucide-react'

const kineSteps = [
  {
    icon: Monitor,
    title: '1. Le kiné ouvre le dashboard',
    desc: 'Interface web dédiée, accès rapide aux sessions et à l\'historique patient.',
  },
  {
    icon: QrCode,
    title: '2. Génération d\'un QR code de session',
    desc: 'En un clic, un QR code unique est généré pour la consultation en cours.',
  },
  {
    icon: Wifi,
    title: '3. Connexion en temps réel',
    desc: 'Le patient scanne le QR code depuis l\'app. Les données affluent instantanément via WebSocket.',
  },
  {
    icon: ClipboardCheck,
    title: '4. Vision immédiate du contexte',
    desc: 'Zone douloureuse, description, âge, sport, métier, antécédents, résultat de l\'analyse IA.',
  },
  {
    icon: Send,
    title: '5. Avis et plan d\'action',
    desc: 'Le kiné confirme ou ajuste le diagnostic, prescrit des exercices, définit une durée de suivi.',
  },
  {
    icon: Users,
    title: '6. Le patient reçoit en direct',
    desc: 'Le diagnostic kiné s\'affiche instantanément dans l\'application du patient.',
  },
]

const patientBenefits = [
  'Comprendre sa douleur clairement',
  'Savoir quoi faire sans paniquer',
  'Auto-soin guidé et structuré',
  'Passage simple vers le kiné',
  'Garder la main sur ses données',
]

const kineBenefits = [
  'Contexte patient complet à l\'arrivée',
  'Résultat de l\'analyse IA visible',
  'Gain de temps à la consultation',
  'Transmission directe d\'un plan d\'action',
  'Continuité entre analyse et suivi',
]

export default function KineSection() {
  return (
    <section id="professionnels" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-medicare-teal mb-3">
            Patients & Professionnels
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Une passerelle entre{' '}
            <span className="text-gradient">auto-soin et consultation</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Medicare ne s&apos;arrête pas à l&apos;auto-soin. Quand un kiné prend le relai,
            la connexion est instantanée, structurée et sécurisé.
          </p>
        </motion.div>

        {/* Two benefits columns */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {/* Patient side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-medicare-blue-light rounded-3xl p-8 border border-medicare-blue/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-medicare-blue rounded-xl flex items-center justify-center shadow-sm">
                <Users size={18} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-lg">Pour le patient</p>
                <p className="text-sm text-slate-500">Un parcours guidé de bout en bout</p>
              </div>
            </div>
            <ul className="space-y-3">
              {patientBenefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-medicare-blue flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-slate-700 text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Kine side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-teal-50 rounded-3xl p-8 border border-medicare-teal/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-medicare-teal rounded-xl flex items-center justify-center shadow-sm">
                <Monitor size={18} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-lg">Pour le kinésithérapeute</p>
                <p className="text-sm text-slate-500">Dashboard temps réel, consultation enrichie</p>
              </div>
            </div>
            <ul className="space-y-3">
              {kineBenefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-medicare-teal flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-slate-700 text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* QR code flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 rounded-3xl p-8 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-medicare-teal/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Flux QR Code &amp; WebSocket</p>
            <h3 className="text-white text-2xl font-bold mb-8">
              Comment se connecte une session kiné
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {kineSteps.map(({ icon: Icon, title, desc }, i) => (
                <div key={title} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-medicare-teal" />
                    </div>
                    {i < kineSteps.length - 1 && (
                      <div className="w-0.5 flex-1 my-1 bg-white/10 hidden lg:block" />
                    )}
                  </div>
                  <div className="pb-4">
                    <p className="text-white text-sm font-semibold mb-1">{title}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Live badge */}
            <div className="mt-6 inline-flex items-center gap-2 bg-medicare-teal/20 border border-medicare-teal/30 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 bg-medicare-teal rounded-full animate-pulse" />
              <span className="text-medicare-teal text-xs font-semibold">
                Synchronisation patient ↔ kiné en temps réel via WebSocket
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
