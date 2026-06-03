import { motion } from 'framer-motion'
import { ArrowRight, Shield, Brain, Users } from 'lucide-react'

const badges = [
  { icon: Shield, label: 'Red flags détectés' },
  { icon: Brain, label: 'IA explicable' },
  { icon: Users, label: 'Lien patient–kiné' },
]

const useCases = [
  '"Je me suis bloqué le cou au réveil."',
  '"Mal au dos depuis 3 jours, je ne sais pas si je dois consulter."',
  '"Mon genou a claqué après un appui au sport."',
  '"Douleur d\'épaule qui revient à chaque séance."',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-medicare-teal/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-medicare-blue/20 rounded-full blur-[100px]" />
      </div>

      {/* Grid lines overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-medicare-teal animate-pulse" />
              <span className="text-white/80 text-sm font-medium">
                Santé musculo-squelettique digitale
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Comprendre votre douleur.{' '}
              <span className="text-gradient-light">Agir en confiance.</span>
            </h1>

            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
              Medicare vous aide à qualifier une douleur musculo-squelettique,
              à identifier les situations rassurantes, à détecter les signaux
              d&apos;alerte et à trouver la bonne orientation —{' '}
              <strong className="text-white/90 font-medium">
                auto-soin ou consultation.
              </strong>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 bg-medicare-teal hover:bg-teal-600 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-teal-500/30 transition-all hover:shadow-teal-500/50 hover:-translate-y-0.5"
              >
                Découvrir l&apos;application
                <ArrowRight size={18} />
              </a>
              <a
                href="#workflow"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-6 py-3.5 rounded-xl transition-all"
              >
                Voir comment ça marche
              </a>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-lg px-3 py-1.5"
                >
                  <Icon size={14} className="text-medicare-teal" />
                  <span className="text-white/70 text-xs font-medium">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column — App mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="mx-auto w-72 bg-slate-900 rounded-[2.5rem] border-4 border-slate-700 shadow-2xl shadow-black/50 overflow-hidden">
                {/* Status bar */}
                <div className="bg-slate-800 h-8 flex items-center justify-between px-6">
                  <span className="text-white/40 text-xs">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-white/40 rounded-full" />
                    <div className="w-1 h-1 bg-white/40 rounded-full" />
                    <div className="w-1 h-1 bg-white/40 rounded-full" />
                  </div>
                </div>

                {/* App content */}
                <div className="bg-slate-50 min-h-[500px] p-4 space-y-3">
                  {/* Header app */}
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-xs text-slate-500">Bonjour Thomas</p>
                      <p className="text-sm font-bold text-slate-900">Nouvelle analyse</p>
                    </div>
                    <div className="w-8 h-8 bg-medicare-blue rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">T</span>
                    </div>
                  </div>

                  {/* Body selection card */}
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                    <p className="text-xs text-slate-500 mb-2 font-medium">Zone douloureuse</p>
                    <div className="flex justify-center">
                      {/* Simplified body SVG */}
                      <svg viewBox="0 0 80 140" className="h-28 w-auto" fill="none">
                        {/* Head */}
                        <circle cx="40" cy="16" r="12" fill="#dbeafe" stroke="#1e4db7" strokeWidth="1.5" />
                        {/* Neck */}
                        <rect x="36" y="27" width="8" height="8" rx="2" fill="#dbeafe" stroke="#1e4db7" strokeWidth="1" />
                        {/* Torso */}
                        <rect x="26" y="34" width="28" height="36" rx="4" fill="#dbeafe" stroke="#1e4db7" strokeWidth="1.5" />
                        {/* Left arm */}
                        <rect x="12" y="34" width="12" height="28" rx="4" fill="#dbeafe" stroke="#1e4db7" strokeWidth="1" />
                        {/* Right arm */}
                        <rect x="56" y="34" width="12" height="28" rx="4" fill="#dbeafe" stroke="#1e4db7" strokeWidth="1" />
                        {/* Left leg */}
                        <rect x="26" y="72" width="12" height="40" rx="4" fill="#dbeafe" stroke="#1e4db7" strokeWidth="1.5" />
                        {/* Right leg */}
                        <rect x="42" y="72" width="12" height="40" rx="4" fill="#dbeafe" stroke="#1e4db7" strokeWidth="1.5" />
                        {/* Highlight lower back */}
                        <rect x="26" y="60" width="28" height="12" rx="3" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" opacity="0.8" />
                        <circle cx="40" cy="66" r="3" fill="#d97706" />
                      </svg>
                    </div>
                    <p className="text-center text-xs text-amber-600 font-medium mt-1">Bas du dos sélectionné</p>
                  </div>

                  {/* Analysis result card */}
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <p className="text-xs font-semibold text-slate-700">Résultat de l&apos;analyse</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-600">Hypothèse principale</span>
                        <span className="text-xs font-semibold text-medicare-blue">Lumbago</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-600">Niveau de gravité</span>
                        <span className="text-xs font-semibold text-green-600">Modéré</span>
                      </div>
                      <div className="bg-green-50 rounded-lg px-3 py-2 border border-green-100">
                        <p className="text-xs text-green-700 font-medium">✓ Auto-soin possible</p>
                      </div>
                    </div>
                  </div>

                  {/* Protocol card */}
                  <div className="bg-medicare-blue rounded-2xl p-4 text-white">
                    <p className="text-xs font-semibold mb-1">Protocole suggéré</p>
                    <p className="text-xs opacity-80">Repos relatif · Chaleur · Mobilisation douce</p>
                    <div className="flex items-center gap-1 mt-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                      <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <div className="w-1/3 h-full bg-white/80 rounded-full" />
                      </div>
                      <span className="text-xs opacity-60">Jour 2/7</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-8 top-24 bg-white rounded-2xl p-3 shadow-xl border border-slate-100 w-40"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <Shield size={14} className="text-red-500" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-800">Red flags</p>
                    <p className="text-[10px] text-slate-500">Aucun détecté</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -right-6 bottom-32 bg-white rounded-2xl p-3 shadow-xl border border-slate-100 w-44"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center">
                    <Users size={14} className="text-medicare-teal" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-800">Session kiné</p>
                    <p className="text-[10px] text-slate-500">Connecté en direct</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-1">
                  <div className="flex-1 h-1 bg-medicare-teal rounded-full" />
                  <div className="flex-1 h-1 bg-medicare-teal/50 rounded-full" />
                  <div className="flex-1 h-1 bg-slate-200 rounded-full" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Use cases scroll ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 border-t border-white/10 pt-8"
        >
          <p className="text-white/40 text-xs text-center mb-4 uppercase tracking-widest">
            Situations du quotidien
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {useCases.map((uc) => (
              <span
                key={uc}
                className="bg-white/10 border border-white/15 text-white/60 text-xs px-3 py-1.5 rounded-full italic"
              >
                {uc}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L1440 80L1440 30C1200 70 900 10 720 30C540 50 240 0 0 30L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
