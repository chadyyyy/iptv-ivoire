import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { WHATSAPP_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: "Paiement IPTV Orange Money, Wave, MTN — Côte d'Ivoire",
  description: "Payez votre abonnement IPTV avec Orange Money, Wave, MTN MoMo ou Moov Money en Côte d'Ivoire. Instructions étape par étape. Activation immédiate.",
}

const methods = [
  {
    name: 'Orange Money',
    icon: '🟠',
    color: '#FF6B00',
    steps: [
      "Contactez-nous sur WhatsApp et indiquez votre forfait choisi",
      "Nous vous communiquons le numéro Orange Money destinataire",
      "Composez *144# ou ouvrez votre appli Orange Money",
      "Sélectionnez « Transfert d'argent » et entrez le numéro reçu",
      "Entrez le montant exact (2 500, 6 000 ou 18 000 FCFA)",
      "Confirmez avec votre code PIN Orange Money",
      "Envoyez la capture d'écran de confirmation sur WhatsApp",
      "Recevez vos codes d'accès IPTV en moins de 5 minutes !",
    ],
  },
  {
    name: 'Wave',
    icon: '🌊',
    color: '#00B4FF',
    steps: [
      "Contactez-nous sur WhatsApp et indiquez votre forfait choisi",
      "Nous vous communiquons le numéro Wave destinataire",
      "Ouvrez votre application Wave sur votre smartphone",
      "Appuyez sur « Envoyer de l'argent »",
      "Entrez le numéro Wave et le montant exact",
      "Confirmez votre code PIN Wave",
      "Envoyez la confirmation sur WhatsApp",
      "Activation de votre IPTV en moins de 5 minutes !",
    ],
  },
  {
    name: 'MTN MoMo',
    icon: '📱',
    color: '#FFD700',
    steps: [
      "Contactez-nous sur WhatsApp avec votre forfait choisi",
      "Nous vous envoyons le numéro MTN MoMo",
      "Composez *133# ou ouvrez l'application MTN MoMo",
      "Choisissez « Transfert » et saisissez le numéro",
      "Confirmez le montant et votre PIN",
      "Envoyez la capture d'écran sur WhatsApp",
      "Codes d'accès reçus en moins de 5 minutes",
    ],
  },
]

export default function PaiementPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section geo-pattern">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-label">Paiement</span>
              <h1 className="section-title" style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3rem)' }}>
                Paiement <span className="gradient-text">Mobile Money</span>
              </h1>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Payez votre abonnement IPTV en 2 minutes depuis votre téléphone. Nous acceptons Orange Money, Wave, MTN MoMo et Moov Money.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {methods.map(method => (
                <div key={method.name} className="card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '2.5rem' }}>{method.icon}</span>
                    <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, color: 'var(--color-text)', fontSize: '1.4rem' }}>{method.name}</h2>
                  </div>
                  <ol style={{ listStyle: 'none' }}>
                    {method.steps.map((step, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                        <span style={{ background: 'rgba(249,115,22,0.15)', color: '#F97316', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '0.82rem', flexShrink: 0, marginTop: '0.1rem' }}>{i+1}</span>
                        <span style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.65 }}>{step}</span>
                      </li>
                    ))}
                  </ol>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id={`payment-${method.name.toLowerCase().replace(' ', '-')}-cta`} className="btn-primary" style={{ marginTop: '0.5rem' }}>
                    📱 Payer via {method.name}
                  </a>
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
