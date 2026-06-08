import { motion } from 'framer-motion'
import { ArrowRight, Smartphone, LayoutDashboard } from 'lucide-react'

export default function CTAFinal() {
  return (
    <section id="cta" className="py-20 bg-section-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-medicare-blue-light border border-medicare-blue/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-medicare-blue" />
            <span className="text-medicare-blue text-sm font-medium">
              Disponible dès maintenant
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6 leading-[1.1]">
            Prêt à mieux comprendre
            <br />
            <span className="text-gradient">votre douleur ?</span>
          </h2>

          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed mb-10">
            Testez Medicare dès aujourd&apos;hui. Décrivez une douleur, obtenez une orientation
            claire, accédez à un protocole adapté, ou connectez-vous à votre kiné en direct.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-medicare-blue hover:bg-medicare-blue-dark text-white font-semibold px-7 py-4 rounded-xl shadow-lg shadow-medicare-blue/30 transition-all hover:shadow-medicare-blue/50 hover:-translate-y-0.5 text-base"
            >
              <Smartphone size={18} />
              Accéder à l&apos;application
              <ArrowRight size={16} />
            </a>
            <a
              href="https://dashboard.medicare.new-webtech.com/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-7 py-4 rounded-xl border border-slate-200 shadow-sm transition-all hover:-translate-y-0.5 text-base"
            >
              <LayoutDashboard size={18} className="text-medicare-teal" />
              Dashboard kiné
            </a>
          </div>

          {/* Reassurance items */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            {[
              'Sans compte requis',
              'Données locales par défaut',
              'Accès gratuit à l\'essentiel',
              'Disponible sur mobile et web',
            ].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-medicare-teal" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
