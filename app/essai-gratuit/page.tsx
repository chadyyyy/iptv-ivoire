import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { WHATSAPP_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: "Essai Gratuit IPTV 24h — Côte d'Ivoire | Testez Sans Engagement",
  description: "Testez notre service IPTV gratuitement pendant 24h en Côte d'Ivoire. Aucun paiement requis. +22 000 chaînes HD. Activation immédiate via WhatsApp.",
}

export default function EssaiGratuitPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section geo-pattern" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎁</div>
            <span className="section-label">Offre Spéciale</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', marginBottom: '1.25rem' }}>
              Essai Gratuit <span className="gradient-text">24 heures</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>
              Testez notre service IPTV sans engagement ni paiement. Accès complet à +22 000 chaînes HD/4K pendant 24h. Demandez votre essai gratuit via WhatsApp.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
              {['✅ Sans paiement', '⚡ Activation immédiate', '📺 +22 000 chaînes', '🚫 Sans engagement'].map(b => (
                <span key={b} className="badge badge-green">{b}</span>
              ))}
            </div>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="trial-whatsapp-cta" className="btn-whatsapp pulse-glow" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
              📱 Demander mon Essai Gratuit
            </a>

            <p style={{ marginTop: '1rem', color: '#6B7280', fontSize: '0.85rem' }}>
              Réponse en moins de 5 minutes · Support en Français · 24h/7j
            </p>

            <div className="card" style={{ maxWidth: '500px', margin: '3rem auto 0', textAlign: 'left' }}>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem', fontSize: '1.1rem' }}>Comment obtenir votre essai ?</h2>
              {[
                "Cliquez sur « Demander mon Essai Gratuit » ci-dessus",
                "Envoyez un message WhatsApp à notre équipe",
                "Indiquez votre appareil (Smart TV, Android, iPhone, PC)",
                "Recevez vos codes d'accès gratuits en quelques minutes",
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ background: 'rgba(249,115,22,0.2)', color: '#F97316', borderRadius: '50%', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '0.8rem', flexShrink: 0 }}>{i+1}</span>
                  <span style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.6 }}>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
