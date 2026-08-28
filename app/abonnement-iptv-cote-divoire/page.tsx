'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { WHATSAPP_URL } from '@/lib/seo'
import { Tv, Film, PlayCircle, Trophy, Smartphone, MessageCircle, Zap, ShieldCheck } from 'lucide-react'
import { getProductSchema, getBreadcrumbSchema } from '@/lib/schema'

const plans = [
  {
    id: 'plan-2m',
    name: 'Offre Découverte — 2 mois',
    originalPrice: '7 800',
    promoPrice: '5 900',
    perMonth: '2 950 FCFA/mois',
    badge: null,
    badgeBg: '',
    promoLabel: '-24% · Essentiel',
    promoColor: '#F97316',
    subtitle: 'idéal pour tester',
    payment: 'Orange Money',
    paymentColor: '#FF6900',
    featured: false,
    schemaPrice: '5900',
    features: [
      '⚽️ Championnats Européens',
      '📺 Canal+ / beIN Sports',
      '🇨🇮 Chaînes Ivoiriennes',
      '🎥 HD/4K sans coupure',
      '⚡ Activation en 5 minutes',
    ],
  },
  {
    id: 'plan-3m',
    name: 'Offre Standard — 3 mois',
    originalPrice: '11 700',
    promoPrice: '7 900',
    perMonth: '2 633 FCFA/mois',
    badge: 'Populaire',
    badgeBg: 'linear-gradient(135deg, #F97316, #EA580C)',
    promoLabel: '-32% · Le plus populaire',
    promoColor: '#F97316',
    subtitle: 'soit 2 633 FCFA/mois',
    payment: 'Wave',
    paymentColor: '#1B9AF5',
    featured: true,
    schemaPrice: '7900',
    features: [
      '⚽️ Tous les Sports en direct',
      '📺 Toutes les chaînes Premium',
      '🎬 VOD + Séries Netflix',
      '🎥 HD/4K sans coupure',
      '📡 22 840 chaînes incluses',
      '💬 Support WhatsApp VIP',
    ],
  },
  {
    id: 'plan-annual',
    name: 'Offre Annuelle',
    originalPrice: '35 900',
    promoPrice: '24 900',
    perMonth: '2 075 FCFA/mois · 13 mois',
    badge: 'Meilleur prix',
    badgeBg: 'linear-gradient(135deg, #0EA5E9, #0284C7)',
    promoLabel: '-30% · +1 mois offert',
    promoColor: '#0EA5E9',
    subtitle: 'soit 2 075 FCFA/mois',
    payment: 'Wave / OM',
    paymentColor: '#FFCC00',
    featured: false,
    schemaPrice: '24900',
    features: [
      '📅 Tout inclus · 13 mois',
      '🏆 Tous les événements',
      '📡 22 840 chaînes',
      '🎬 VOD 124 580 films',
      '💬 Support VIP WhatsApp',
    ],
  },
]

const features = [
  { icon: <Tv size={26} color="#F97316" />, title: '22 840 chaînes en direct', desc: 'HD et 4K avec Stream-Stable™' },
  { icon: <Film size={26} color="#F97316" />, title: '124 580 films & séries', desc: 'Bibliothèque VOD mise à jour' },
  { icon: <PlayCircle size={26} color="#F97316" />, title: 'Chaînes ivoiriennes', desc: 'RTI 1, RTI 2, La 3, NCI...' },
  { icon: <Trophy size={26} color="#F97316" />, title: 'Sport en direct', desc: 'beIN Sports, Canal+ Sport...' },
  { icon: <Smartphone size={26} color="#F97316" />, title: 'Multi-écrans', desc: 'Smart TV, mobile, PC, Box...' },
  { icon: <MessageCircle size={26} color="#F97316" />, title: 'Support 24/7', desc: 'Assistance WhatsApp rapide' },
  { icon: <ShieldCheck size={26} color="#F97316" />, title: 'Anti-coupure', desc: 'Serveurs premium ultra-stables' },
  { icon: <Zap size={26} color="#F97316" />, title: 'Activation en 5 min', desc: 'Dès réception du paiement' },
]

export default function AbonnementCoteDivoirePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://iptvivoire.com' },
    { name: 'Abonnement IPTV Côte d\'Ivoire', url: 'https://iptvivoire.com/abonnement-iptv-cote-divoire' },
  ])

  const productSchemas = plans.map(p => getProductSchema({
    name: `IPTV Ivoire — ${p.name}`,
    price: p.schemaPrice,
    description: `${p.name} — ${p.promoPrice} FCFA. Abonnement IPTV premium en Côte d'Ivoire avec 22 840 chaînes.`,
  }))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {productSchemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <Header />
      <main>
        {/* ─── HERO SECTION ─── */}
        <section style={{
          padding: '5rem 1.5rem 4rem',
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--color-bg)',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
        }}>
          <div style={{
            position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
            width: '700px', height: '700px',
            background: 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: '900px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <span className="badge badge-primary">Côte d&apos;Ivoire</span>
              <span className="badge badge-green">Wave & Orange Money</span>
            </div>

            <h1 style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'var(--color-text)',
              marginBottom: '1.5rem',
              lineHeight: 1.15,
            }}>
              Le Meilleur Abonnement <span className="gradient-text">IPTV en Côte d&apos;Ivoire</span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
              color: '#9CA3AF',
              maxWidth: '700px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.6,
            }}>
              Profitez de +22 000 chaînes en 4K (Sport, Cinéma, Documentaires) et 124 000 films VOD. 
              Activation instantanée en 5 minutes. Fini les coupures !
            </p>

            <a href="#tarifs" className="btn-primary pulse-glow" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
              Voir les Tarifs (dès 5 900 FCFA) ↓
            </a>
          </div>
        </section>

        {/* ─── PRICING SECTION ─── */}
        <section id="tarifs" style={{ background: '#0F172A', padding: '5rem 1.5rem' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                Nos Abonnements IPTV
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem' }}>Paiement rapide et sécurisé depuis votre téléphone</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
              {plans.map((plan) => (
                <div key={plan.id} style={{
                  position: 'relative',
                  background: plan.featured ? 'linear-gradient(145deg, #1E293B, #0F172A)' : 'rgba(255,255,255,0.03)',
                  border: plan.featured ? '2px solid rgba(249,115,22,0.5)' : '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '20px',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  {plan.badge && (
                    <div style={{
                      position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)',
                      background: plan.badgeBg, color: '#fff', fontFamily: 'Outfit, sans-serif', fontWeight: 800,
                      fontSize: '0.8rem', padding: '0.4rem 1.25rem', borderRadius: '999px', whiteSpace: 'nowrap',
                      boxShadow: '0 4px 12px rgba(249,115,22,0.25)'
                    }}>
                      {plan.badge}
                    </div>
                  )}

                  <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem', textAlign: 'center' }}>
                    {plan.name}
                  </h3>
                  
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', textDecoration: 'line-through', textAlign: 'center', marginBottom: '0.25rem' }}>
                    {plan.originalPrice} FCFA
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '3rem', color: '#FFFFFF', lineHeight: 1 }}>{plan.promoPrice}</span>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 600, fontSize: '1.1rem' }}>FCFA</span>
                  </div>

                  <div style={{ color: plan.promoColor, fontSize: '0.9rem', fontWeight: 600, textAlign: 'center', marginBottom: '2rem' }}>
                    {plan.promoLabel}
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                    {plan.features.map((f, i) => (
                      <li key={i} style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ color: '#22C55E', fontSize: '1.1rem' }}>✓</span>{f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`${WHATSAPP_URL}&text=${encodeURIComponent(`Bonjour ! Je veux activer l'${plan.name} à ${plan.promoPrice} FCFA.`)}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'block', textAlign: 'center', padding: '1rem', borderRadius: '12px',
                      fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.05rem', textDecoration: 'none',
                      background: plan.featured ? 'linear-gradient(135deg, #F97316, #EA580C)' : 'rgba(255,255,255,0.1)',
                      color: '#FFFFFF', transition: 'all 0.2s ease',
                    }}>
                    Activer avec {plan.payment}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURES GRID ─── */}
        <section style={{ padding: '5rem 1.5rem', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--color-text)' }}>
                Pourquoi choisir IPTV Ivoire ?
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
              {features.map((f, i) => (
                <div key={i} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ background: 'rgba(249,115,22,0.1)', padding: '0.75rem', borderRadius: '12px' }}>
                    {f.icon}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-text)', marginBottom: '0.25rem' }}>{f.title}</h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SEO CONTENT ─── */}
        <section style={{ padding: '3rem 1.5rem', background: 'var(--color-surface-2)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-text)', marginBottom: '1rem' }}>
              IPTV Côte d&apos;Ivoire — Le Fournisseur N°1 à Abidjan
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Vous cherchez le <strong>meilleur abonnement IPTV en Côte d&apos;Ivoire</strong> ? IPTV Ivoire vous propose un service premium sans coupure, parfaitement adapté à la connexion internet ivoirienne (Fibre, 4G Orange, MTN, Moov).
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Que vous soyez à la recherche du meilleur <strong>prix IPTV Abidjan</strong>, ou d&apos;un <strong>fournisseur IPTV Abidjan</strong> fiable, nous sommes la référence. Avec nos abonnements (2 mois, 3 mois ou 12 mois), vous transformez votre écran en cinéma. L&apos;installation de la <strong>télé IP</strong> se fait en 5 minutes.
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li><strong>Activation facile :</strong> Compatible Smart TV, Android, iPhone, PC et toute <strong>box IPTV Abidjan</strong>.</li>
              <li><strong>Paiement local :</strong> Réglez votre <strong>abonnement IPTV 12 mois</strong> ou 3 mois directement via Wave ou Orange Money en FCFA.</li>
              <li><strong>Qualité :</strong> +22 000 chaînes (Sport, VOD, chaînes locales) en HD/4K.</li>
            </ul>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/prix-iptv-abidjan" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', background: 'rgba(249,115,22,0.1)', color: '#F97316', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
                Consulter tous nos Prix IPTV Abidjan →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
