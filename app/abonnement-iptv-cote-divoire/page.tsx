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

const faqs = [
  {
    q: "L'IPTV fonctionne-t-il bien avec la 4G Orange, MTN ou Moov en Côte d'Ivoire ?",
    a: "Oui, nos serveurs sont optimisés pour la bande passante locale. Une connexion 4G standard (ou partage de connexion) suffit largement pour profiter du sport en HD sans aucun freeze. Notre technologie anti-coupure adapte dynamiquement le flux à votre débit réel."
  },
  {
    q: "Comment se passe le paiement avec Wave ou Orange Money ?",
    a: "C'est très simple, instantané et 100% sécurisé. Vous nous contactez sur WhatsApp en choisissant votre offre, vous effectuez le dépôt via votre application Wave ou Orange Money, et notre équipe technique active votre compte dans les 5 minutes qui suivent avec vos identifiants personnels."
  },
  {
    q: "Est-ce que je peux regarder la CAN, la Ligue des Champions et les films récents ?",
    a: "Absolument. L'abonnement inclut l'intégralité des bouquets sportifs mondiaux (Canal+, beIN), les chaînes ivoiriennes locales (RTI 1, RTI 2, NCI, La 3), ainsi qu'une bibliothèque VOD mise à jour quotidiennement avec les dernières séries Netflix, Prime Vidéo et les sorties cinéma."
  },
  {
    q: "Faut-il acheter un boîtier spécial ou un décodeur ?",
    a: "Pas obligatoirement ! Si vous avez une Smart TV (Samsung, LG, ou Android TV), un smartphone, ou un ordinateur, l'application suffit (Hot Player, Smarters Pro, SmartOne). Si vous avez une télévision classique non connectée, un simple boîtier Android TV ou Amazon Firestick suffira pour la transformer."
  }
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {productSchemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
              <span className="badge badge-green">Paiement Wave & Orange Money</span>
            </div>

            <h1 style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'var(--color-text)',
              marginBottom: '1.25rem',
              lineHeight: 1.15,
            }}>
              L&apos;Abonnement IPTV N°1 <span className="gradient-text">en Côte d&apos;Ivoire</span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.05rem, 2.5vw, 1.2rem)',
              color: 'var(--color-text-dim)',
              maxWidth: '800px',
              margin: '0 auto 1.5rem',
              lineHeight: 1.7,
            }}>
              Rejoignez plus de <strong>5 400 Ivoiriens</strong> qui ont déjà remplacé leur décodeur classique. 
              Profitez de vos matchs et séries en 4K sans coupure. Compatible instantanément avec vos applications préférées : 
              <strong style={{ color: 'var(--color-text)' }}> Hot Player, SmartOne, IPTV Smarters Pro, ou TiviMate</strong> sur Smart TV, mobile et PC.
            </p>

            <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#F59E0B', fontSize: '1.2rem' }}>★★★★★</span>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>4.9/5 basé sur +3000 avis clients</span>
            </div>

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

        {/* ─── FAQ SECTION ─── */}
        <section style={{ padding: '5rem 1.5rem', background: 'var(--color-surface)' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--color-text)', marginBottom: '1rem' }}>
                Questions Fréquentes
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
                Tout ce que vous devez savoir avant de rejoindre IPTV Ivoire.
              </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map((faq, i) => (
                <details key={i} style={{ 
                  background: 'var(--color-surface-2)', 
                  border: '1px solid var(--color-border)', 
                  borderRadius: '12px',
                  padding: '1.25rem',
                  cursor: 'pointer'
                }}>
                  <summary style={{ 
                    fontFamily: 'Outfit, sans-serif', 
                    fontWeight: 700, 
                    fontSize: '1.05rem', 
                    color: 'var(--color-text)',
                    listStyle: 'none',
                  }}>
                    {faq.q}
                  </summary>
                  <p style={{ 
                    marginTop: '1rem', 
                    color: 'var(--color-text-muted)', 
                    lineHeight: 1.7,
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--color-border)'
                  }}>
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SEO CONTENT (HUMANIZED & HELPFUL) ─── */}
        <section style={{ padding: '4rem 1.5rem', background: 'var(--color-bg)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-text-dim)', fontSize: '1rem', lineHeight: 1.8 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-text)', marginBottom: '1.5rem' }}>
              Pourquoi nous faire confiance pour votre télévision en Côte d&apos;Ivoire ?
            </h2>
            
            <p style={{ marginBottom: '1.5rem' }}>
              À Abidjan comme à l&apos;intérieur du pays, suivre ses équipes de football préférées ou profiter de films en famille le week-end est devenu un véritable luxe. Cumuler les décodeurs traditionnels et les multiples plateformes de streaming représente un budget mensuel que beaucoup ne souhaitent plus assumer. C&apos;est exactement pour répondre à ce besoin que nous avons structuré <strong>IPTV Ivoire</strong>.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              Notre philosophie est simple : vous offrir l&apos;expérience télévisuelle la plus complète et la plus fiable du marché, à un prix juste et transparent. Nous savons que la connexion internet locale (qu&apos;il s&apos;agisse de la Fibre, ou d&apos;une connexion 4G Orange, MTN, Moov) peut parfois fluctuer. C&apos;est la raison pour laquelle nous n&apos;utilisons que des serveurs équipés de technologies anti-coupure capables d&apos;adapter le flux vidéo à votre débit réel. Fini les matchs qui gèlent à la dernière minute.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              De plus, nous avons voulu rendre l&apos;accès à la télévision premium aussi simple que l&apos;envoi d&apos;un message. L&apos;activation se fait sans engagement caché ni prélèvement automatique : vous choisissez votre durée, vous réglez par mobile money localement (Wave ou Orange Money), et notre équipe d&apos;assistance technique vous guide pas-à-pas sur WhatsApp pour installer l&apos;application sur votre écran.
            </p>

            <p style={{ marginBottom: '2rem' }}>
              Notre plus grande fierté aujourd&apos;hui, c&apos;est la fidélité de nos abonnés ivoiriens. Si vous cherchez un service sérieux, stable dans le temps, et avec un service client qui vous répond réellement en cas de besoin, vous êtes au bon endroit.
            </p>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/installation" style={{ display: 'inline-block', padding: '0.85rem 1.75rem', background: 'rgba(249,115,22,0.1)', color: '#F97316', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, transition: 'all 0.2s' }}>
                Consulter notre guide d&apos;installation →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
