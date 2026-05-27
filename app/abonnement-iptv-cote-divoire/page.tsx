import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { WHATSAPP_URL } from '@/lib/seo'
import { getProductSchema } from '@/lib/schema'

import { Trophy, Star, ShieldCheck, Tv, Film, PlayCircle, Smartphone, MessageCircle, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: "Abonnement IPTV Côte d'Ivoire | Coupe du Monde 2026 dès 2 500 FCFA",
  description: "Découvrez le meilleur abonnement IPTV en Côte d'Ivoire. Regardez la Coupe du Monde 2026 avec +22 000 chaînes. Paiement Orange Money, Wave. Activation rapide.",
}

const plans = [
  { name: '1 Mois', price: '2 500', perMonth: '2 500 FCFA', total: '2 500 FCFA', badge: null, emoji: <Star size={40} color="#9CA3AF" />, schemaPrice: '2500', payment: 'Orange Money', color: '#9CA3AF', freeMonth: false },
  { name: '3 Mois', price: '2 000', perMonth: '2 000 FCFA/mois', total: '6 000 FCFA', badge: 'PLUS POPULAIRE', emoji: <ShieldCheck size={40} color="#F97316" />, schemaPrice: '6000', payment: 'Wave', color: '#F97316', freeMonth: false },
  { name: '12 Mois', price: '1 500', perMonth: '1 500 FCFA/mois', total: '18 000 FCFA', badge: 'MEILLEUR PRIX', emoji: <Trophy size={40} color="#F59E0B" />, schemaPrice: '18000', payment: 'MTN MoMo', color: '#F59E0B', freeMonth: true },
]

const features = [
  { icon: <Tv size={28} color="#F97316" />, title: '+22 000 chaînes', desc: 'HD et 4K disponibles' },
  { icon: <Film size={28} color="#F97316" />, title: '120 000+ films VOD', desc: 'Films et séries en streaming' },
  { icon: <PlayCircle size={28} color="#F97316" />, title: 'Chaînes ivoiriennes', desc: 'RTI 1, RTI 2, La 3, NCI...' },
  { icon: <Trophy size={28} color="#F97316" />, title: 'Sport en direct', desc: 'beIN Sports, Canal+ Sport...' },
  { icon: <Smartphone size={28} color="#F97316" />, title: '5 appareils simultanés', desc: 'Smart TV, mobile, PC...' },
  { icon: <MessageCircle size={28} color="#F97316" />, title: 'Support 24/7', desc: 'WhatsApp en Français' },
  { icon: <Trophy size={28} color="#F59E0B" fill="#F59E0B" />, title: 'Coupe du Monde 2026', desc: 'Tous les 64 matchs' },
  { icon: <Zap size={28} color="#F97316" />, title: 'Activation en 5 min', desc: "Dès réception du paiement" },
]

export default function AbonnementPage() {
  return (
    <>
      {plans.map((p, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getProductSchema({ name: `IPTV Ivoire — ${p.name}`, price: p.schemaPrice, description: `Abonnement IPTV ${p.name} — ${p.perMonth}` })) }} />
      ))}
      <Header />
      <main>
        <section className="section geo-pattern">
          <div className="container" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label">Tarifs</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              Abonnements IPTV en <span className="gradient-text">FCFA</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Tous les prix en Francs CFA. Paiement immédiat par mobile money. Activation garantie en 5 minutes.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '960px', margin: '0 auto' }}>
            {plans.map((plan, i) => (
              <div key={plan.name} className="card" style={{ position: 'relative', border: i === 1 ? '2px solid rgba(249,115,22,0.5)' : undefined, background: i === 1 ? 'rgba(249,115,22,0.04)' : undefined }}>
                {plan.badge && (
                  <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: i === 2 ? 'linear-gradient(135deg, #F59E0B, #D97706)' : 'linear-gradient(135deg, #F97316, #EA580C)', color: 'var(--color-text)', fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.08em', padding: '0.3rem 1rem', borderRadius: '999px', whiteSpace: 'nowrap' }}>{plan.badge}</div>
                )}
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{plan.emoji}</div>
                  <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>{plan.name}</h2>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '2.75rem', color: '#F97316', lineHeight: 1 }}>
                    {plan.total.replace(' FCFA', '')} <span style={{ fontSize: '1rem', fontWeight: 600, color: '#9CA3AF' }}>FCFA</span>
                  </div>
                  {plan.name !== '1 Mois' && <div style={{ fontSize: '0.9rem', color: '#6B7280', marginTop: '0.4rem' }}>soit <strong style={{ color: '#9CA3AF' }}>{plan.price} FCFA</strong> / mois</div>}
                  {plan.freeMonth && (
                    <div style={{ marginTop: '0.75rem', background: 'rgba(34,197,94,0.1)', color: '#16A34A', padding: '0.35rem 0.75rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 800, display: 'inline-block' }}>
                      + 1 MOIS GRATUIT
                    </div>
                  )}
                </div>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id={`abonnement-cta-${i}`} className={i === 1 ? 'btn-primary' : 'btn-secondary'} style={{ width: '100%', justifyContent: 'center', textAlign: 'center', marginBottom: '0.5rem' }}>
                  Payer via {plan.payment}
                </a>
                <p style={{ textAlign: 'center', color: '#6B7280', fontSize: '0.75rem' }}>Activation dans les 5 minutes</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <h2 className="section-title">Tout est inclus dans chaque abonnement</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {features.map(f => (
                <div key={f.title} className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '48px', height: '48px', background: 'var(--color-surface-2)', borderRadius: '12px', flexShrink: 0 }}>{f.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.25rem' }}>{f.title}</div>
                    <div style={{ color: '#6B7280', fontSize: '0.82rem' }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--color-bg)', borderTop: '1px solid var(--color-border)', paddingBottom: '4rem' }}>
          <div className="container" style={{ maxWidth: '850px', margin: '0 auto' }}>
            
            <div className="prose" style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '2.2rem', color: 'var(--color-text)', marginBottom: '1.5rem', textAlign: 'center' }}>
                Le Meilleur Abonnement IPTV en Côte d&apos;Ivoire
              </h2>
              
              <p style={{ marginBottom: '2rem', fontSize: '1.05rem', textAlign: 'center' }}>
                À la recherche d&apos;un <strong>abonnement IPTV en Côte d&apos;Ivoire</strong> fiable, sans coupure et à petit prix ? IPTV Ivoire est la solution numéro 1 pour regarder la télévision par internet. Que vous soyez à Abidjan, Bouaké, San-Pédro ou Yamoussoukro, profitez d&apos;une qualité d&apos;image exceptionnelle en HD et 4K.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                <div className="card" style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.75rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Trophy size={20} color="#F97316" /> Coupe du Monde 2026 en IPTV
                  </h3>
                  <p style={{ fontSize: '0.95rem', marginBottom: 0, color: 'var(--color-text-muted)' }}>
                    Ne manquez aucun match des Éléphants ! Notre abonnement IPTV inclut toutes les chaînes sportives (beIN Sports, Canal+ Sport, NCI) pour vivre la <Link href="/blog/cote-divoire-coupe-du-monde-2026-streaming" style={{ color: '#F97316', textDecoration: 'underline' }}><strong>Coupe du Monde 2026 en direct</strong></Link> depuis votre salon sans payer des fortunes.
                  </p>
                </div>
                <div className="card" style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.75rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Smartphone size={20} color="#F97316" /> Paiement Orange Money & Wave
                  </h3>
                  <p style={{ fontSize: '0.95rem', marginBottom: 0, color: 'var(--color-text-muted)' }}>
                    Nous avons simplifié l&apos;achat en Afrique de l&apos;Ouest. Payez votre abonnement IPTV facilement, en FCFA, et en toute sécurité via <Link href="/blog/iptv-orange-money-wave-cote-divoire" style={{ color: '#F97316', textDecoration: 'underline' }}><strong>Orange Money, Wave, MTN MoMo ou Moov Money</strong></Link>.
                  </p>
                </div>
              </div>

              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.8rem', color: 'var(--color-text)', marginBottom: '2rem', textAlign: 'center' }}>
                Questions Fréquentes (FAQ)
              </h2>
              
              <div style={{ marginBottom: '1.5rem', background: 'var(--color-surface-2)', padding: '1.25rem', borderRadius: '12px' }}>
                <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>En combien de temps mon abonnement IPTV est-il activé ?</h4>
                <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--color-text-muted)' }}>L&apos;activation est immédiate. Après votre paiement via Orange Money ou Wave, vous recevez vos identifiants (lien m3u, Xtream Codes) sur WhatsApp en moins de 5 minutes.</p>
              </div>

              <div style={{ marginBottom: '1.5rem', background: 'var(--color-surface-2)', padding: '1.25rem', borderRadius: '12px' }}>
                <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Quels sont les appareils compatibles ?</h4>
                <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--color-text-muted)' }}>Notre abonnement fonctionne sur tous les supports : Smart TV (Samsung, LG), Android TV, Apple TV, smartphones (iOS/Android), tablettes, et ordinateurs (PC/Mac) via l&apos;application <Link href="/blog/comment-installer-iptv-smarters-pro" style={{ color: '#F97316', textDecoration: 'underline' }}>IPTV Smarters Pro</Link> par exemple.</p>
              </div>
              
              <div style={{ marginBottom: '1.5rem', background: 'var(--color-surface-2)', padding: '1.25rem', borderRadius: '12px', borderLeft: '4px solid #16A34A' }}>
                <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Comment obtenir le mois gratuit ?</h4>
                <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--color-text-muted)' }}>C&apos;est très simple ! En choisissant notre <strong>abonnement IPTV 12 mois à 18 000 FCFA</strong>, nous vous offrons automatiquement 1 mois supplémentaire. Vous profitez donc de 13 mois de télévision sans interruption au meilleur prix de la Côte d&apos;Ivoire.</p>
              </div>

            </div>
          </div>
        </section>

        <section className="section" style={{ textAlign: 'center' }}>
          <div className="container">
            <h2 className="section-title">Des questions ?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>Notre équipe répond sur WhatsApp 24h/24.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp pulse-glow" style={{ fontSize: '1.1rem' }}>
              Contacter sur WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
