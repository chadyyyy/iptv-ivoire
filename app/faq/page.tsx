import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { WHATSAPP_URL } from '@/lib/seo'
import { getFAQSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: "FAQ IPTV Côte d'Ivoire : Prix & Paiement",
  description: "Réponses à toutes vos questions sur l'IPTV en Côte d'Ivoire. Orange Money, Wave, installation, chaînes, légalité, Grands Championnats.",
}

const faqs = [
  { q: "Qu'est-ce que l'IPTV ?", a: "L'IPTV (Internet Protocol Television) est un service de télévision diffusé via internet. Il vous permet de regarder +22 000 chaînes HD/4K sur votre Smart TV, smartphone, tablette ou PC, sans antenne ni parabole." },
  { q: "Comment payer un abonnement IPTV avec Orange Money en Côte d'Ivoire ?", a: "Contactez-nous sur WhatsApp, choisissez votre forfait, et nous vous envoyons le numéro Orange Money. Effectuez le transfert via *144# ou l'application Orange Money. Activation en moins de 5 minutes." },
  { q: "IPTV Smarters Pro — comment configurer en Côte d'Ivoire ?", a: "Téléchargez IPTV Smarters Pro (Play Store ou App Store), choisissez 'Login with Xtream Codes API', et entrez l'URL, le nom d'utilisateur et le mot de passe reçus sur WhatsApp. Configuration en 2 minutes." },
  { q: "Quel est le meilleur abonnement IPTV à Abidjan ?", a: "Notre abonnement 3 mois à 2 000 FCFA/mois est le plus populaire. Excellent rapport qualité-prix avec +22 000 chaînes HD/4K, VOD illimitée, et support WhatsApp prioritaire." },
  { q: "Puis-je regarder les Grands Championnats sur IPTV ?", a: "Oui ! Tous les 64 matchs de les Grands Championnats (11 juin – 19 juillet) sont disponibles via beIN Sports, Canal+ Sport, TF1, France 2 et RTI 2. La Côte d'Ivoire est qualifiée !" },
  { q: "L'IPTV fonctionne-t-il avec la 4G Orange en Côte d'Ivoire ?", a: "Oui, notre service est optimisé pour 4G Orange, MTN et Moov. Minimum 10 Mbps pour la HD, 25 Mbps pour la 4K. En wifi, une connexion ADSL de 8 Mbps suffit pour la HD." },
  { q: "Combien coûte un abonnement IPTV en Côte d'Ivoire ?", a: "Nos forfaits : 1 mois à 2 500 FCFA, 3 mois à 6 000 FCFA (2 000 FCFA/mois), 12 mois à 18 000 FCFA (1 500 FCFA/mois). Paiement Orange Money, Wave, MTN MoMo ou Moov Money." },
  { q: "L'IPTV est-il légal en Côte d'Ivoire ?", a: "L'IPTV est une technologie légale de streaming. IPTV Ivoire opère conformément aux lois ivoiriennes. Nous vous recommandons d'utiliser uniquement des services légaux et fiables comme le nôtre." },
  { q: "Puis-je regarder RTI 1 et RTI 2 sur IPTV ?", a: "Oui ! RTI 1, RTI 2, La 3, NCI, Life TV et toutes les chaînes ivoiriennes sont disponibles. Vous bénéficiez aussi de +50 chaînes africaines, les chaînes françaises (TF1, M6, France 2) et internationales." },
  { q: "Sur combien d'appareils puis-je utiliser mon abonnement ?", a: "Un abonnement IPTV Ivoire permet d'utiliser le service sur jusqu'à 5 appareils simultanément : Smart TV, Android TV Box, iPhone, iPad, Android, PC Windows ou Mac." },
  { q: "Combien de temps faut-il pour l'activation après le paiement ?", a: "L'activation se fait en moins de 5 minutes après réception de votre paiement. Vous recevez vos codes d'accès directement sur WhatsApp. Notre équipe est disponible 24h/24, 7j/7." },
  { q: "Y a-t-il un essai gratuit disponible ?", a: "Oui ! Nous proposons un essai gratuit de 24h sans paiement ni engagement. Contactez-nous sur WhatsApp pour en bénéficier et tester notre service avec accès complet." },
]

export default function FAQPage() {
  const schema = getFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main>
        <section className="section geo-pattern">
          <div className="container" style={{ maxWidth: '760px' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-label">FAQ</span>
              <h1 className="section-title">Questions Fréquentes</h1>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Tout ce que vous devez savoir sur l&apos;IPTV en Côte d&apos;Ivoire.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {faqs.map((faq, i) => (
                <details key={i} className="faq-item">
                  <summary>{faq.q}</summary>
                  <div className="faq-answer">{faq.a}</div>
                </details>
              ))}
            </div>

            <div className="card" style={{ marginTop: '2.5rem', textAlign: 'center', background: 'rgba(249,115,22,0.05)', border: '1px solid rgba(249,115,22,0.2)' }}>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.75rem' }}>Votre question n&apos;est pas listée ?</h2>
              <p style={{ color: '#9CA3AF', marginBottom: '1rem', fontSize: '0.9rem' }}>Notre équipe répond sur WhatsApp en moins de 5 minutes, 24h/24.</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="faq-cta" className="btn-whatsapp">
                📱 Poser ma question sur WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
