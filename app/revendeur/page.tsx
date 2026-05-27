import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { WHATSAPP_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: "Revendeur IPTV Côte d'Ivoire — Devenez Partenaire IPTV Ivoire",
  description: "Devenez revendeur IPTV en Côte d'Ivoire. Marges attractives, panneau de gestion, support dédié. Abonnements IPTV en gros pour revente en FCFA.",
}

const benefits = [
  { icon: '💰', title: 'Marges attractives', desc: 'Jusqu\'à 40% de marge sur chaque vente. Plus vous vendez, plus vous gagnez.' },
  { icon: '🖥️', title: 'Panneau revendeur', desc: 'Interface de gestion complète pour créer et gérer vos clients facilement.' },
  { icon: '📦', title: 'Crédits en gros', desc: 'Achetez des crédits en gros à prix réduit et revendez au tarif de votre choix.' },
  { icon: '💬', title: 'Support prioritaire', desc: 'Canal WhatsApp dédié aux revendeurs. Réponse en moins de 2 minutes.' },
  { icon: '📊', title: 'Sans limite de clients', desc: 'Gérez autant de clients que vous voulez. Aucune limite imposée.' },
  { icon: '🚀', title: 'Démarrage rapide', desc: 'Activez votre compte revendeur en 24h et commencez à vendre immédiatement.' },
]

export default function RevendeurPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section geo-pattern">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-label">Partenariat</span>
              <h1 className="section-title" style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3rem)' }}>
                Devenez <span className="gradient-text">Revendeur IPTV</span>
              </h1>
              <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>
                Rejoignez notre réseau de revendeurs en Côte d&apos;Ivoire et Afrique de l&apos;Ouest. Gagnez de l&apos;argent en revendant des abonnements IPTV avec des marges attractives.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="reseller-cta" className="btn-primary pulse-glow" style={{ fontSize: '1.05rem' }}>
                📱 Devenir Revendeur sur WhatsApp
              </a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
              {benefits.map(b => (
                <div key={b.title} className="card">
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{b.icon}</div>
                  <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--color-text)', fontSize: '1rem', marginBottom: '0.4rem' }}>{b.title}</h2>
                  <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.65 }}>{b.desc}</p>
                </div>
              ))}
            </div>

            <div className="card" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', background: 'rgba(249,115,22,0.05)', border: '1px solid rgba(249,115,22,0.2)' }}>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, color: 'var(--color-text)', fontSize: '1.4rem', marginBottom: '0.75rem' }}>
                Prêt à démarrer ?
              </h2>
              <p style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Envoyez un message WhatsApp avec l&apos;objet &quot;REVENDEUR&quot; et nous vous contacterons dans les 24h avec tous les détails.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="reseller-bottom-cta" className="btn-whatsapp">
                📱 Demander les infos revendeur
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
