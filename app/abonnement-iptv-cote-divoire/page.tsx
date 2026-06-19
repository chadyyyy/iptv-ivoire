'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { WHATSAPP_URL } from '@/lib/seo'
import { Tv, Film, PlayCircle, Trophy, Smartphone, MessageCircle, Zap, ShieldCheck, Star, Clock } from 'lucide-react'

// World Cup runs June 11 - July 19, 2026
const WORLD_CUP_END = new Date('2026-07-19T23:59:00')

const promoPlans = [
  {
    id: 'cdm-2m',
    name: 'Offre Coupe du Monde — 2 mois',
    originalPrice: '7 800',
    promoPrice: '5 900',
    perMonth: '2 950 FCFA/mois',
    badge: null,
    badgeBg: '',
    promoLabel: '-24% · Offre CDM 2026',
    promoColor: '#F97316',
    subtitle: 'couvre tout le tournoi',
    payment: 'Orange Money',
    paymentColor: '#FF6900',
    featured: false,
    schemaPrice: '5900',
    features: [
      '🏆 Tous les matchs CDM 2026',
      '📺 BeIN Sports + TF1 + France 2',
      '🇨🇮 Les Éléphants en direct',
      '🎥 HD/4K sans coupure',
      '⚡ Activation en 5 minutes',
    ],
  },
  {
    id: 'cdm-3m',
    name: 'Offre Coupe du Monde — 3 mois',
    originalPrice: '11 700',
    promoPrice: '7 900',
    perMonth: '2 633 FCFA/mois',
    badge: 'Mondial 2026',
    badgeBg: 'linear-gradient(135deg, #F97316, #EA580C)',
    promoLabel: '-32% · Le plus populaire',
    promoColor: '#F97316',
    subtitle: 'soit 2 633 FCFA/mois',
    payment: 'Wave',
    paymentColor: '#1B9AF5',
    featured: true,
    schemaPrice: '7900',
    features: [
      '🏆 Tous les matchs CDM 2026',
      '📺 BeIN Sports + TF1 + France 2',
      '🇨🇮 Les Éléphants en direct',
      '🎥 HD/4K sans coupure',
      '📡 +22 000 chaînes incluses',
      '💬 Support WhatsApp prioritaire',
    ],
  },
  {
    id: 'cdm-annual',
    name: 'Offre annuelle + CDM',
    originalPrice: '35 900',
    promoPrice: '24 900',
    perMonth: '2 075 FCFA/mois · 13 mois',
    badge: 'Meilleur prix',
    badgeBg: 'linear-gradient(135deg, #0EA5E9, #0284C7)',
    promoLabel: '-30% · +1 mois offert',
    promoColor: '#0EA5E9',
    subtitle: 'soit 2 075 FCFA/mois · 13 mois',
    payment: 'MTN MoMo',
    paymentColor: '#FFCC00',
    featured: false,
    schemaPrice: '24900',
    features: [
      '📅 Tout inclus · 13 mois',
      '🏆 CDM 2026 complet',
      '📡 +22 000 chaînes',
      '🎬 VOD 120 000+ films',
      '💬 Support VIP WhatsApp',
    ],
  },
]

const features = [
  { icon: <Tv size={26} color="#F97316" />, title: '+22 000 chaînes', desc: 'HD et 4K disponibles' },
  { icon: <Film size={26} color="#F97316" />, title: '120 000+ films VOD', desc: 'Films et séries en streaming' },
  { icon: <PlayCircle size={26} color="#F97316" />, title: 'Chaînes ivoiriennes', desc: 'RTI 1, RTI 2, La 3, NCI...' },
  { icon: <Trophy size={26} color="#F97316" />, title: 'Sport en direct', desc: 'beIN Sports, Canal+ Sport...' },
  { icon: <Smartphone size={26} color="#F97316" />, title: '5 appareils simultanés', desc: 'Smart TV, mobile, PC...' },
  { icon: <MessageCircle size={26} color="#F97316" />, title: 'Support 24/7', desc: 'WhatsApp en Français' },
  { icon: <Trophy size={26} color="#F59E0B" />, title: 'Coupe du Monde 2026', desc: 'Tous les 64 matchs' },
  { icon: <Zap size={26} color="#F97316" />, title: 'Activation en 5 min', desc: 'Dès réception du paiement' },
]

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: false })

  useEffect(() => {
    function calc() {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }); return }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
        expired: false,
      })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [target])

  return timeLeft
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div style={{ textAlign: 'center', minWidth: '64px' }}>
      <div style={{
        background: 'rgba(0,0,0,0.4)',
        border: '1px solid rgba(249,115,22,0.4)',
        borderRadius: '10px',
        padding: '0.6rem 0.75rem',
        fontFamily: 'Outfit, sans-serif',
        fontWeight: 900,
        fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
        color: '#FFFFFF',
        lineHeight: 1,
        minWidth: '60px',
        display: 'inline-block',
      }}>
        {String(value).padStart(2, '0')}
      </div>
      <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem', fontFamily: 'Outfit, sans-serif', marginTop: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        {label}
      </div>
    </div>
  )
}

export default function AbonnementPage() {
  const countdown = useCountdown(WORLD_CUP_END)

  const whatsappMsg = (plan: typeof promoPlans[0]) =>
    `${WHATSAPP_URL}&text=${encodeURIComponent(`Bonjour ! Je veux activer l'offre CDM 2026 "${plan.name}" à ${plan.promoPrice} FCFA. Merci !`)}`

  return (
    <>
      <Header />
      <main>
        {/* ── HERO BANNER CDM ── */}
        <section style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%)',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '3rem',
          paddingBottom: '3rem',
        }}>
          {/* Animated glow blobs */}
          <div style={{ position: 'absolute', top: '-80px', left: '-80px', width: '320px', height: '320px', background: 'radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '280px', height: '280px', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

          <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            {/* Trophy + flag */}
            <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🏆🇨🇮</div>

            <div style={{ display: 'inline-block', background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.4)', borderRadius: '999px', padding: '0.35rem 1.1rem', marginBottom: '1rem' }}>
              <span style={{ color: '#FB923C', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.06em' }}>
                🏆 OFFRE SPÉCIALE COUPE DU MONDE 2026
              </span>
            </div>

            <h1 style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(1.8rem, 5vw, 3rem)',
              color: '#FFFFFF',
              lineHeight: 1.15,
              marginBottom: '0.5rem',
            }}>
              Regardez les{' '}
              <span style={{ background: 'linear-gradient(90deg, #F97316, #FBBF24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Éléphants
              </span>
              {' '}en Coupe du Monde
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Outfit, sans-serif', fontSize: '1rem', marginBottom: '2rem' }}>
              11 juin → 19 juillet 2026 · Côte d&apos;Ivoire qualifiée · Offre valable pendant le Mondial
            </p>

            {/* COUNTDOWN */}
            {!countdown.expired ? (
              <div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Outfit, sans-serif', fontSize: '0.8rem', marginBottom: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  ⏱ Fin du Mondial dans
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  <CountdownBox value={countdown.days} label="jours" />
                  <div style={{ color: '#F97316', fontSize: '2rem', fontWeight: 900, lineHeight: '1', paddingTop: '0.45rem' }}>:</div>
                  <CountdownBox value={countdown.hours} label="heures" />
                  <div style={{ color: '#F97316', fontSize: '2rem', fontWeight: 900, lineHeight: '1', paddingTop: '0.45rem' }}>:</div>
                  <CountdownBox value={countdown.minutes} label="minutes" />
                  <div style={{ color: '#F97316', fontSize: '2rem', fontWeight: 900, lineHeight: '1', paddingTop: '0.45rem' }}>:</div>
                  <CountdownBox value={countdown.seconds} label="secondes" />
                </div>
              </div>
            ) : (
              <div style={{ color: '#9CA3AF', fontFamily: 'Outfit, sans-serif' }}>La promo est terminée — prix standard disponibles ci-dessous.</div>
            )}
          </div>
        </section>

        {/* ── PRICING ── */}
        <section style={{ background: '#0F172A', padding: '3rem 1.5rem' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '0.75rem' }}>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Outfit, sans-serif', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                WORLD CUP PROMO PRICING — ACTIVEZ AVANT LE 11 JUIN
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
              maxWidth: '1050px',
              margin: '0 auto',
            }}>
              {promoPlans.map((plan) => (
                <div key={plan.id} style={{
                  position: 'relative',
                  background: plan.featured
                    ? 'linear-gradient(145deg, #1E293B, #0F172A)'
                    : 'rgba(255,255,255,0.04)',
                  border: plan.featured
                    ? '2px solid rgba(249,115,22,0.6)'
                    : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  padding: '2rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: plan.featured ? '0 0 40px rgba(249,115,22,0.15)' : 'none',
                }}>
                  {/* Badge */}
                  {plan.badge && (
                    <div style={{
                      position: 'absolute',
                      top: '-13px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: plan.badgeBg,
                      color: '#fff',
                      fontFamily: 'Outfit, sans-serif',
                      fontWeight: 800,
                      fontSize: '0.72rem',
                      letterSpacing: '0.05em',
                      padding: '0.3rem 1rem',
                      borderRadius: '999px',
                      whiteSpace: 'nowrap',
                    }}>{plan.badge}</div>
                  )}

                  {/* Name */}
                  <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>
                    {plan.name}
                  </h2>

                  {/* Original price crossed out */}
                  <div style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Outfit, sans-serif', fontSize: '0.9rem', textDecoration: 'line-through', marginBottom: '0.2rem' }}>
                    {plan.originalPrice} FCFA
                  </div>

                  {/* Promo price */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '0.25rem' }}>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(2.4rem, 5vw, 3.2rem)', color: '#FFFFFF', lineHeight: 1 }}>
                      {plan.promoPrice}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '1rem' }}>FCFA</span>
                  </div>

                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', fontFamily: 'Outfit, sans-serif', marginBottom: '1rem' }}>
                    {plan.subtitle}
                  </div>

                  {/* Promo badge */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: 'rgba(249,115,22,0.12)',
                    border: '1px solid rgba(249,115,22,0.3)',
                    color: '#FB923C',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '999px',
                    marginBottom: '1.5rem',
                    width: 'fit-content',
                  }}>
                    <Clock size={12} />
                    {plan.promoLabel}
                  </div>

                  {/* Features */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                    {plan.features.map((f) => (
                      <li key={f} style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Outfit, sans-serif', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: '#22C55E', flexShrink: 0 }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={whatsappMsg(plan)}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`promo-cta-${plan.id}`}
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      fontFamily: 'Outfit, sans-serif',
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      background: plan.featured
                        ? 'linear-gradient(135deg, #F97316, #EA580C)'
                        : 'rgba(255,255,255,0.07)',
                      color: plan.featured ? '#FFFFFF' : 'rgba(255,255,255,0.85)',
                      border: plan.featured ? 'none' : '1px solid rgba(255,255,255,0.15)',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
                  >
                    Activer via {plan.payment}
                  </a>
                </div>
              ))}
            </div>

            {/* Trust row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginTop: '2.5rem' }}>
              {['✅ Paiement sécurisé', '⚡ Activation en 5 min', '💬 Support WhatsApp 24/7', '🔄 Sans engagement'].map(t => (
                <span key={t} style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Outfit, sans-serif', fontSize: '0.82rem' }}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
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

        {/* ── SEO TEXT ── */}
        <section className="section" style={{ background: 'var(--color-bg)', borderTop: '1px solid var(--color-border)', paddingBottom: '4rem' }}>
          <div className="container" style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div className="prose" style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '2rem', color: 'var(--color-text)', marginBottom: '1.5rem', textAlign: 'center' }}>
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
                    Ne manquez aucun match des Éléphants ! Notre abonnement IPTV inclut toutes les chaînes sportives (beIN Sports, Canal+ Sport, NCI) pour vivre la <Link href="/blog/cote-divoire-coupe-du-monde-2026-streaming" style={{ color: '#F97316', textDecoration: 'underline' }}><strong>Coupe du Monde 2026 en direct</strong></Link> depuis votre salon.
                  </p>
                </div>
                <div className="card" style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.75rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Smartphone size={20} color="#F97316" /> Paiement Orange Money &amp; Wave
                  </h3>
                  <p style={{ fontSize: '0.95rem', marginBottom: 0, color: 'var(--color-text-muted)' }}>
                    Payez votre abonnement IPTV facilement, en FCFA, via <Link href="/blog/iptv-orange-money-wave-cote-divoire" style={{ color: '#F97316', textDecoration: 'underline' }}><strong>Orange Money, Wave, MTN MoMo ou Moov Money</strong></Link>.
                  </p>
                </div>
              </div>

              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.8rem', color: 'var(--color-text)', marginBottom: '2rem', textAlign: 'center' }}>
                Questions Fréquentes (FAQ)
              </h2>

              {[
                { q: "En combien de temps mon abonnement IPTV est-il activé ?", a: "L'activation est immédiate. Après votre paiement via Orange Money ou Wave, vous recevez vos identifiants (lien m3u, Xtream Codes) sur WhatsApp en moins de 5 minutes.", hl: false },
                { q: "Quels sont les appareils compatibles ?", a: "Notre abonnement fonctionne sur tous les supports : Smart TV (Samsung, LG), Android TV, Apple TV, smartphones (iOS/Android), tablettes, et ordinateurs (PC/Mac) via l'application IPTV Smarters Pro par exemple.", hl: false },
                { q: "Comment profiter de l'offre Coupe du Monde ?", a: "Choisissez l'offre 2 mois (5 900 FCFA) ou 3 mois (7 900 FCFA) avant le 11 juin 23h59. Contactez-nous sur WhatsApp et indiquez votre forfait. L'activation se fait en 5 minutes, à temps pour le coup d'envoi !", hl: true },
              ].map(({ q, a, hl }) => (
                <div key={q} style={{ marginBottom: '1.5rem', background: 'var(--color-surface-2)', padding: '1.25rem', borderRadius: '12px', borderLeft: hl ? '4px solid #F97316' : undefined }}>
                  <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{q}</h4>
                  <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--color-text-muted)' }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
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
