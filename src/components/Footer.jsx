import { Activity } from 'lucide-react'

const links = {
  Produit: ['Comment ça marche', 'Fonctionnalités', 'Pour les patients', 'Pour les kinés'],
  Légal: ['Mentions légales', 'Politique de confidentialité', 'Conditions d\'utilisation'],
  Contact: ['Nous contacter', 'Demander une démo', 'Presse'],
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-medicare-blue to-medicare-teal rounded-lg flex items-center justify-center">
                <Activity className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg">Medicare</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Comprendre sa douleur musculo-squelettique.
              Agir en confiance. Être orienté vers le bon niveau de prise en charge.
            </p>
            <div className="inline-flex items-center gap-2 bg-medicare-teal/20 border border-medicare-teal/30 rounded-lg px-3 py-1.5">
              <span className="w-1.5 h-1.5 bg-medicare-teal rounded-full animate-pulse" />
              <span className="text-xs text-medicare-teal font-medium">Santé digitale musculo-squelettique</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
                {category}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2025 Medicare — Tous droits réservés
          </p>
          <p className="text-white/25 text-xs text-center sm:text-right max-w-md leading-relaxed">
            Medicare est un outil d&apos;aide à la décision en santé. Il ne remplace pas une consultation
            médicale ni un diagnostic professionnel. En cas de doute, consultez un professionnel de santé.
          </p>
        </div>
      </div>
    </footer>
  )
}
