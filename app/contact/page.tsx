import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { WHATSAPP_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: "Contact IPTV Ivoire — WhatsApp 24/7 | Côte d'Ivoire",
  description: "Contactez IPTV Ivoire via WhatsApp pour activer votre abonnement, obtenir de l'aide ou poser vos questions. Réponse en moins de 5 minutes.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section geo-pattern" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📱</div>
            <span className="section-label">Contact</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              Contactez-nous sur <span style={{ color: '#25D366' }}>WhatsApp</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto 2.5rem' }}>
              Notre équipe est disponible 24h/24, 7j/7. Réponse garantie en moins de 5 minutes en Français.
            </p>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="contact-whatsapp-cta" className="btn-whatsapp pulse-glow" style={{ fontSize: '1.2rem', padding: '1.1rem 3rem' }}>
              📱 Ouvrir WhatsApp
            </a>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', maxWidth: '600px', margin: '3rem auto 0' }}>
              {[
                { icon: '⚡', title: 'Réponse rapide', desc: 'Moins de 5 minutes' },
                { icon: '🇫🇷', title: 'En Français', desc: 'Support dans votre langue' },
                { icon: '🕐', title: 'Disponible 24/7', desc: "Tous les jours de l'année" },
                { icon: '✅', title: 'Activation rapide', desc: "Dès réception du paiement" },
              ].map(item => (
                <div key={item.title} className="card" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.25rem' }}>{item.title}</div>
                  <div style={{ color: '#6B7280', fontSize: '0.82rem' }}>{item.desc}</div>
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
