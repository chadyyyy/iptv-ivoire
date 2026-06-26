import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { WHATSAPP_URL } from '@/lib/seo'
import { getFAQSchema, getProductSchema, getHowToSchema, getBreadcrumbSchema } from '@/lib/schema'
import { Trophy, Star, MessageCircle, Tv, Film, Smartphone, Monitor, ShieldCheck, Play, Globe, Gamepad2, Laptop, HardDrive, Target, CreditCard, PlayCircle, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: "IPTV Côte d'Ivoire — 22 840 Chaînes en 4K dès 5 900 FCFA | Wave & Orange Money",
  description: "Meilleur abonnement IPTV en Côte d'Ivoire. 22 840 chaînes HD/4K, 124 580 VOD. Paiement sécurisé Wave & Orange Money. Activation immédiate en 5 min. Essai gratuit 24h.",
  keywords: ['iptv cote divoire', 'iptv coupe du monde 2026', 'abonnement iptv fcfa', 'wave iptv', 'orange money iptv', 'iptv abidjan'],
  alternates: {
    canonical: 'https://iptvivoire.com',
  },
}

const faqs = [
  {
    question: "Comment payer un abonnement IPTV avec Orange Money en Côte d'Ivoire ?",
    answer: "Pour payer votre abonnement IPTV avec Orange Money, contactez-nous sur WhatsApp et indiquez votre forfait choisi. Nous vous envoyons le numéro Orange Money pour effectuer le transfert. L'activation se fait dans les 5 minutes après confirmation du paiement.",
  },
  {
    question: "IPTV Smarters Pro — comment configurer en Côte d'Ivoire ?",
    answer: "Téléchargez IPTV Smarters Pro sur votre appareil (Android ou iOS), puis entrez l'URL, le nom d'utilisateur et le mot de passe que nous vous envoyons via WhatsApp après votre abonnement. La configuration prend moins de 2 minutes.",
  },
  {
    question: "Quel est le meilleur abonnement IPTV à Abidjan ?",
    answer: "Notre offre 3 mois à 7 900 FCFA (soit 2 633 FCFA/mois) est la plus populaire à Abidjan. Elle inclut +22 000 chaînes HD/4K, la VOD illimitée et un support WhatsApp 24/7.",
  },
  {
    question: "Puis-je regarder la Coupe du Monde 2026 sur IPTV ?",
    answer: "Oui, tous les matchs de la Coupe du Monde 2026 (11 juin – 19 juillet) sont disponibles sur notre service IPTV via beIN Sports, Canal+ Sport, et TF1. La Côte d'Ivoire est qualifiée — ne manquez aucun match !",
  },
  {
    question: "L'IPTV fonctionne-t-il avec la 4G Orange en Côte d'Ivoire ?",
    answer: "Oui, notre service est optimisé pour les réseaux 4G Orange, MTN et Moov en Côte d'Ivoire. Une connexion de 10 Mbps minimum est recommandée pour la qualité HD, et 25 Mbps pour la 4K.",
  },
  {
    question: "Combien coûte un abonnement IPTV en Côte d'Ivoire ?",
    answer: "Nos abonnements : 2 mois à 5 900 FCFA, 3 mois à 7 900 FCFA, ou offre annuelle à 24 900 FCFA (13 mois). Paiement via Orange Money, Wave, MTN MoMo ou Moov Money.",
  },
  {
    question: "L'IPTV est-il légal en Côte d'Ivoire ?",
    answer: "L'IPTV est une technologie légale de streaming vidéo par internet. IPTV Ivoire opère en conformité avec les lois ivoiriennes en vigueur. Nous vous recommandons de n'utiliser que des services légaux et fiables.",
  },
  {
    question: "Puis-je regarder RTI 1 et RTI 2 sur IPTV ?",
    answer: "Oui, nos chaînes incluent RTI 1, RTI 2, La 3, NCI, Life TV et toutes les principales chaînes ivoiriennes. Vous bénéficiez aussi de +50 chaînes africaines en plus des chaînes internationales.",
  },
]

const testimonials = [
  { name: "Koné A.", city: "Abidjan", text: "J'ai pris l'offre 3 mois, paiement Wave en 2 min, codes reçus sur WhatsApp. Impeccable !", stars: 5 },
  { name: "Diallo M.", city: "Bouaké", text: "Meilleur service IPTV en Côte d'Ivoire. Toutes les chaînes en HD, même RTI et Canal+. Je recommande !", stars: 5 },
  { name: "Yao F.", city: "Yamoussoukro", text: "L'offre annuelle, ça coûte moins qu'un trimestre de Canal+. Qualité excellente !", stars: 5 },
  { name: "Touré B.", city: "Abidjan (Cocody)", text: "Activation en 3 minutes via Orange Money. Service impeccable, support très réactif sur WhatsApp.", stars: 5 },
  { name: "N'Dri C.", city: "Daloa", text: "Je regarde beIN Sports, toutes les chaînes françaises et les chaînes ivoiriennes sans aucun problème.", stars: 5 },
  { name: "Bamba S.", city: "San-Pédro", text: "Parfait pour voir tous les matchs des Éléphants en Coupe du Monde ! Qualité au top.", stars: 5 },
]

const plans = [
  {
    id: 'cdm-2m',
    name: 'Offre CDM — 2 mois',
    originalPrice: '7 800',
    promoPrice: '5 900',
    perMonth: '2 950 FCFA/mois',
    badge: null,
    badgeBg: '',
    promoLabel: '-24% · Offre CDM 2026',
    emoji: <Star size={32} color="#F97316" />,
    schemaPrice: '5900',
    payment: 'Orange Money',
    features: ['🏆 Tous les matchs CDM 2026', '📺 BeIN Sports + TF1 + France 2', '🇨🇮 Les Éléphants en direct', '🎥 HD/4K sans coupure', '⚡ Activation en 5 minutes'],
    featured: false,
  },
  {
    id: 'cdm-3m',
    name: 'Offre CDM — 3 mois',
    originalPrice: '11 700',
    promoPrice: '7 900',
    perMonth: '2 633 FCFA/mois',
    badge: 'Mondial 2026',
    badgeBg: 'linear-gradient(135deg, #F97316, #EA580C)',
    promoLabel: '-32% · Le plus populaire',
    emoji: <ShieldCheck size={32} color="#F97316" />,
    schemaPrice: '7900',
    payment: 'Wave',
    features: ['🏆 Tous les matchs CDM 2026', '📺 BeIN Sports + TF1 + France 2', '🇨🇮 Les Éléphants en direct', '🎥 HD/4K sans coupure', '📡 22 840 chaînes incluses', '💬 Support WhatsApp prioritaire'],
    featured: true,
  },
  {
    id: 'cdm-annual',
    name: 'Offre Annuelle + CDM',
    originalPrice: '35 900',
    promoPrice: '24 900',
    perMonth: '2 075 FCFA/mois · 13 mois',
    badge: 'Meilleur prix',
    badgeBg: 'linear-gradient(135deg, #0EA5E9, #0284C7)',
    promoLabel: '-30% · +1 mois offert',
    emoji: <Trophy size={32} color="#F97316" />,
    schemaPrice: '24900',
    payment: 'Wave / OM',
    features: ['📅 Tout inclus · 13 mois', '🏆 CDM 2026 complet', '📡 22 840 chaînes', '🎬 VOD 124 580 films', '💬 Support VIP WhatsApp'],
    featured: false,
  },
]

const channelCategories = [
  { emoji: <PlayCircle size={32} color="#F97316" />, name: 'Chaînes Ivoiriennes', count: '15+', desc: 'RTI 1, RTI 2, La 3, NCI...' },
  { emoji: <Globe size={32} color="#F97316" />, name: 'Chaînes Africaines', count: '50+', desc: 'Sénégal, Mali, Cameroun...' },
  { emoji: <Trophy size={32} color="#F97316" />, name: 'Sport', count: '80+', desc: 'beIN Sports, Canal+ Sport, Eurosport...' },
  { emoji: <Film size={32} color="#F97316" />, name: 'Cinéma & VOD', count: '124 580', desc: 'Films et séries en streaming' },
  { emoji: <Tv size={32} color="#F97316" />, name: 'Chaînes Françaises', count: '50+', desc: 'TF1, M6, France 2, Arte...' },
  { emoji: <Globe size={32} color="#F97316" />, name: 'Internationales', count: '22 840', desc: 'USA, UK, Turquie, Espagne...' },
  { emoji: <Trophy size={32} color="#F97316" />, name: 'Coupe du Monde 2026', count: '64 matchs', desc: 'Tous les matchs en direct !' },
  { emoji: <Gamepad2 size={32} color="#F97316" />, name: 'Kids & Famille', count: '30+', desc: 'Disney, Cartoon Network...' },
]

const devices = [
  { emoji: <Tv size={36} color="#9CA3AF" />, name: 'Smart TV' },
  { emoji: <HardDrive size={36} color="#9CA3AF" />, name: 'Android TV Box' },
  { emoji: <Smartphone size={36} color="#9CA3AF" />, name: 'iPhone / iPad' },
  { emoji: <Smartphone size={36} color="#9CA3AF" />, name: 'Android' },
  { emoji: <Laptop size={36} color="#9CA3AF" />, name: 'PC / Mac' },
  { emoji: <Monitor size={36} color="#9CA3AF" />, name: 'Amazon Fire TV' },
]

export default function HomePage() {
  const faqSchema = getFAQSchema(faqs)
  const howToSchema = getHowToSchema()
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://iptvivoire.com' },
  ])
  const productSchemas = plans.map(p => getProductSchema({
    name: `IPTV Ivoire — ${p.name}`,
    price: p.schemaPrice,
    description: `${p.name} — ${p.promoPrice} FCFA (au lieu de ${p.originalPrice} FCFA) — 22 840 chaînes HD/4K en Côte d'Ivoire`,
  }))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {productSchemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <Header />
      <main>
        {/* ─── HERO ─── */}
        <section className="geo-pattern" style={{
          padding: '5rem 1.5rem 4rem',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
        }}>
          {/* Radial glow */}
          <div style={{
            position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
            width: '700px', height: '700px',
            background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
            {/* Badges */}
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <span className="badge badge-primary">Coupe du Monde 2026</span>
              <span className="badge badge-green">Activation immédiate</span>
              <span className="badge badge-gold">4.9/5 — 3 420 clients</span>
            </div>

            <h1 style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 5.5vw, 3.75rem)',
              color: 'var(--color-text)',
              marginBottom: '1.25rem',
              lineHeight: 1.15,
            }}>
              IPTV Côte d&apos;Ivoire<br />
              <span className="gradient-text">22 840 Chaînes en 4K</span>{' '}
              dès{' '}
              <span style={{ color: '#F97316' }}>5 900 FCFA</span>
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: '#9CA3AF',
              maxWidth: '650px',
              margin: '0 auto 2rem',
              lineHeight: 1.7,
            }}>
              IPTV #1 à Abidjan et en Côte d&apos;Ivoire. Regardez la télé sur Smart TV, Android, iPhone et PC.<br />
              Paiement sécurisé <strong style={{ color: '#25D366' }}>Wave</strong> &amp; <strong style={{ color: '#F97316' }}>Orange Money</strong>. Activation immédiate.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="hero-cta-trial" className="btn-whatsapp pulse-glow" style={{ fontSize: '1.05rem', padding: '1rem 2rem' }}>
                Essai Gratuit 24h →
              </a>
              <Link href="/abonnement-iptv-cote-divoire" id="hero-cta-pricing" className="btn-secondary" style={{ fontSize: '1.05rem', padding: '1rem 2rem' }}>
                Voir les Abonnements
              </Link>
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              {[
                { label: 'Orange Money', img: '/payments/orange.png' },
                { label: 'Wave', img: '/payments/wave.png' },
                { label: 'MTN MoMo', img: '/payments/mtn.png' },
                { label: 'Moov Money', img: '/payments/moov.png' },
                { label: 'Activation < 5 min' },
              ].map(t => (
                <span key={t.label} style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  background: 'var(--color-surface-2)',
                  border: '1px solid var(--color-border-light)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '999px',
                  fontSize: '0.82rem',
                  color: 'var(--color-text-muted)',
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 600,
                }}>
                  {t.img ? (
                    <Image src={t.img} alt={t.label} width={16} height={16} style={{ objectFit: 'contain', borderRadius: '4px' }} />
                  ) : (
                    <Zap size={16} color="#F97316" />
                  )}
                  {t.label}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem',
              marginTop: '3rem',
              padding: '1.5rem 2rem',
              background: 'var(--color-surface-2)',
              border: '1px solid var(--color-border)',
              borderRadius: '1.25rem',
              maxWidth: '600px',
              margin: '3rem auto 0',
            }}>
              {[
                { value: '22 840', label: 'Chaînes' },
                { value: '124 580', label: 'Films VOD' },
                { value: '3 420+', label: 'Clients CI' },
                { value: '24/7', label: 'Support' },
              ].map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.6rem', color: '#F97316' }}>{s.value}</div>
                  <div style={{ fontSize: '0.8rem', color: '#6B7280', fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TICKER ─── */}
        <section style={{ background: 'rgba(249,115,22,0.08)', borderTop: '1px solid rgba(249,115,22,0.15)', borderBottom: '1px solid rgba(249,115,22,0.15)', padding: '0.85rem 0', overflow: 'hidden' }}>
          <div className="ticker-track">
            {Array(4).fill([
              'Plus de 3 420 clients satisfaits en Côte d\'Ivoire',
              'Noté 4.9/5 sur WhatsApp',
              'Support 24/7 en Français',
              'Technologie Stream-Stable™ anti-coupures',
              'Paiement sécurisé Wave & Orange Money',
              'Regardez la Coupe du Monde 2026',
              '22 840 chaînes en direct HD/4K',
              '124 580 films & séries en VOD',
            ]).flat().map((item, i) => (
              <span key={i} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0 2.5rem',
                color: '#F97316',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                fontSize: '0.875rem',
                whiteSpace: 'nowrap',
              }}>
                {item}
                <span style={{ color: 'rgba(249,115,22,0.4)', marginLeft: '0.5rem' }}>•</span>
              </span>
            ))}
          </div>
        </section>

        {/* ─── WORLD CUP 2026 ─── */}
        <section style={{
          background: 'linear-gradient(135deg, rgba(22,163,74,0.15) 0%, rgba(249,115,22,0.1) 50%, rgba(22,163,74,0.15) 100%)',
          border: '1px solid rgba(22,163,74,0.2)',
          margin: '0',
          padding: '3rem 1.5rem',
        }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{
              fontFamily: 'Outfit, sans-serif', fontWeight: 900,
              fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)',
              color: 'var(--color-text)', marginBottom: '0.75rem',
            }}>
              Coupe du Monde 2026 — Regardez tous les matchs<br />
              <span className="gradient-text-green">de la Côte d&apos;Ivoire en IPTV</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1rem', marginBottom: '1.5rem' }}>
              11 Juin – 19 Juillet 2026 · 64 matchs · Les Éléphants sont qualifiés
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
              {['beIN Sports 1 & 2', 'Canal+ Sport', 'TF1', 'France 2', 'RTI 2'].map(ch => (
                <span key={ch} style={{
                  background: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.3)',
                  padding: '0.35rem 0.85rem', borderRadius: '999px',
                  color: '#4ADE80', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.82rem',
                }}>{ch}</span>
              ))}
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="worldcup-cta" className="btn-primary pulse-glow" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
              Activer mon abonnement avant le coup d&apos;envoi →
            </a>
          </div>
        </section>

        {/* ─── PRICING CDM ─── */}
        <section id="abonnements" style={{ background: '#0F172A', padding: '4rem 1.5rem' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <span style={{ color: 'rgba(249,115,22,0.8)', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>🏆 Offre Spéciale Coupe du Monde 2026</span>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', color: '#FFFFFF', marginBottom: '0.5rem' }}>Choisissez votre forfait IPTV</h2>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Outfit, sans-serif', fontSize: '0.95rem' }}>Prix en FCFA · Paiement mobile money · Activation en 5 minutes</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', maxWidth: '1050px', margin: '0 auto' }}>
              {plans.map((plan) => (
                <div key={plan.id} style={{
                  position: 'relative',
                  background: plan.featured ? 'linear-gradient(145deg, #1E293B, #0F172A)' : 'rgba(255,255,255,0.04)',
                  border: plan.featured ? '2px solid rgba(249,115,22,0.6)' : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  padding: '2rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: plan.featured ? '0 0 40px rgba(249,115,22,0.15)' : 'none',
                }}>
                  {plan.badge && (
                    <div style={{ position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', background: plan.badgeBg, color: '#fff', fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '0.72rem', letterSpacing: '0.05em', padding: '0.3rem 1rem', borderRadius: '999px', whiteSpace: 'nowrap' }}>
                      {plan.badge}
                    </div>
                  )}

                  <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>{plan.name}</h3>

                  <div style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Outfit, sans-serif', fontSize: '0.9rem', textDecoration: 'line-through', marginBottom: '0.2rem' }}>
                    {plan.originalPrice} FCFA
                  </div>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '0.25rem' }}>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(2.2rem, 5vw, 3rem)', color: '#FFFFFF', lineHeight: 1 }}>{plan.promoPrice}</span>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '1rem' }}>FCFA</span>
                  </div>

                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', fontFamily: 'Outfit, sans-serif', marginBottom: '0.85rem' }}>{plan.perMonth}</div>

                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.3)', color: '#FB923C', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.72rem', padding: '0.25rem 0.65rem', borderRadius: '999px', marginBottom: '1.25rem', width: 'fit-content' }}>
                    ⏱ {plan.promoLabel}
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', flex: 1 }}>
                    {plan.features.map((f) => (
                      <li key={f} style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Outfit, sans-serif', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: '#22C55E', flexShrink: 0 }}>✓</span>{f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`${WHATSAPP_URL}&text=${encodeURIComponent(`Bonjour ! Je veux activer l'offre CDM "${plan.name}" à ${plan.promoPrice} FCFA. Merci !`)}`}
                    target="_blank" rel="noopener noreferrer"
                    id={`plan-cta-${plan.id}`}
                    style={{ display: 'block', textAlign: 'center', padding: '0.85rem 1rem', borderRadius: '10px', fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '0.95rem', textDecoration: 'none', background: plan.featured ? 'linear-gradient(135deg, #F97316, #EA580C)' : 'rgba(255,255,255,0.07)', color: plan.featured ? '#FFFFFF' : 'rgba(255,255,255,0.85)', border: plan.featured ? 'none' : '1px solid rgba(255,255,255,0.15)', marginBottom: '0.75rem' }}>
                    Activer via {plan.payment}
                  </a>

                  <div style={{ textAlign: 'center' }}>
                    <Link href="/abonnement-iptv-cote-divoire" style={{ fontSize: '0.8rem', fontWeight: 700, color: 'rgba(249,115,22,0.7)', textDecoration: 'none', fontFamily: 'Outfit, sans-serif' }}>
                      Voir tous les détails →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginTop: '2.5rem' }}>
              {['✅ Paiement sécurisé', '⚡ Activation en 5 min', '💬 Support WhatsApp 24/7', '🔄 Sans engagement'].map(t => (
                <span key={t} style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Outfit, sans-serif', fontSize: '0.8rem' }}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PAYMENT METHODS ─── */}
        <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="section-label">Paiement</span>
            <h2 className="section-title">Paiement facile avec votre mobile</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 2.5rem' }}>
              Payez directement depuis votre téléphone en 2 minutes. Vous recevez vos codes d&apos;accès sur WhatsApp immédiatement après le paiement.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '1rem',
              maxWidth: '800px',
              margin: '0 auto 2.5rem',
            }}>
              {[
                { name: 'Orange Money', tag: 'Recommandé', img: '/payments/orange.png' },
                { name: 'Wave', tag: 'Populaire', img: '/payments/wave.png' },
                { name: 'MTN MoMo', tag: 'Disponible', img: '/payments/mtn.png' },
                { name: 'Moov Money', tag: 'Disponible', img: '/payments/moov.png' },
              ].map(pm => (
                <div key={pm.name} className="card" style={{ textAlign: 'center', padding: '1.25rem 1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.6rem' }}>
                    <Image src={pm.img} alt={pm.name} width={48} height={48} style={{ objectFit: 'contain', borderRadius: '8px' }} />
                  </div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--color-text)', fontSize: '0.9rem', marginBottom: '0.35rem' }}>{pm.name}</div>
                  <div style={{ fontSize: '0.72rem', color: '#4ADE80', fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>{pm.tag}</div>
                </div>
              ))}
            </div>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="payment-cta" className="btn-primary">
              Payer maintenant via WhatsApp
            </a>
          </div>
        </section>

        {/* ─── DEVICES ─── */}
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="section-label">Compatibilité</span>
            <h2 className="section-title">Compatible avec tous vos appareils</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 2.5rem' }}>
              Un seul abonnement, jusqu&apos;à <strong style={{ color: '#F97316' }}>5 appareils simultanés</strong>
            </p>

            <div style={{
              display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem',
              maxWidth: '700px', margin: '0 auto',
            }}>
              {devices.map(d => (
                <div key={d.name} className="card" style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem',
                  padding: '1.25rem 1.5rem', minWidth: '100px',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>{d.emoji}</div>
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: '#9CA3AF', fontSize: '0.8rem', textAlign: 'center' }}>{d.name}</span>
                </div>
              ))}
            </div>

            <Link href="/blog/comment-installer-iptv-smarters-pro" style={{
              display: 'inline-block', marginTop: '2rem',
              color: '#F97316', textDecoration: 'none',
              fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.9rem',
              borderBottom: '1px solid rgba(249,115,22,0.4)', paddingBottom: '2px',
              transition: 'border-color 0.2s',
            }}>
              Voir tous les guides d&apos;installation →
            </Link>
          </div>
        </section>

        {/* ─── CHANNELS ─── */}
        <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="section-label">Chaînes</span>
              <h2 className="section-title">+22 000 chaînes pour tous les goûts</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Des chaînes ivoiriennes aux chaînes internationales, tout est disponible en HD et 4K.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
            }}>
              {channelCategories.map(cat => (
                <div key={cat.name} className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.25rem' }}>
                  <div style={{ flexShrink: 0, marginTop: '2px' }}>{cat.emoji}</div>
                  <div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--color-text)', fontSize: '0.95rem' }}>{cat.name}</div>
                    <div style={{ color: '#F97316', fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '0.85rem' }}>{cat.count}</div>
                    <div style={{ color: '#6B7280', fontSize: '0.78rem', marginTop: '0.2rem' }}>{cat.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/blog/iptv-abidjan-guide-complet" className="btn-secondary" style={{ display: 'inline-flex' }}>
                Voir la liste complète des chaînes →
              </Link>
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-label">Simple & Rapide</span>
              <h2 className="section-title">Comment ça marche ?</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Commencez à regarder en moins de 5 minutes.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              maxWidth: '900px',
              margin: '0 auto',
              position: 'relative',
            }}>
              {[
                { step: '01', icon: <Target size={28} color="#F97316" />, title: 'Choisissez votre forfait CDM', desc: 'Offre 2 mois à 5 900 FCFA, 3 mois à 7 900 FCFA, ou annuel à 24 900 FCFA. Tous les matchs inclus !' },
                { step: '02', icon: <CreditCard size={28} color="#F97316" />, title: 'Payez par mobile money', desc: 'Orange Money, Wave ou MTN MoMo en 2 minutes depuis votre téléphone.' },
                { step: '03', icon: <Play size={28} color="#F97316" />, title: 'Regardez immédiatement', desc: "Codes d'accès reçus sur WhatsApp dans les 5 minutes. Profitez de +22 000 chaînes !" },
              ].map(step => (
                <div key={step.step} style={{ textAlign: 'center', padding: '1.5rem' }}>
                  <div style={{
                    width: 64, height: 64,
                    background: 'linear-gradient(135deg, rgba(249,115,22,0.2), rgba(249,115,22,0.05))',
                    border: '2px solid rgba(249,115,22,0.3)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 1rem',
                  }}>
                    {step.icon}
                  </div>
                  <div style={{
                    fontFamily: 'Outfit, sans-serif', fontWeight: 900,
                    fontSize: '0.75rem', color: 'rgba(249,115,22,0.5)',
                    letterSpacing: '0.1em', marginBottom: '0.5rem',
                  }}>ÉTAPE {step.step}</div>
                  <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: '0.75rem' }}>{step.title}</h3>
                  <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="how-it-works-cta" className="btn-primary">
                📱 Commencer maintenant
              </a>
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="section-label">Avis clients</span>
              <h2 className="section-title">Ce que disent nos clients</h2>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '0.5rem' }}>
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={24} color="#F59E0B" fill="#F59E0B" />)}
              </div>
              <p style={{ color: '#6B7280', fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>4.9/5 basé sur 3 420 avis</p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}>
              {testimonials.map((t, i) => (
                <div key={i} className="card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '2px', marginBottom: '0.75rem' }}>
                    {Array.from({ length: t.stars }).map((_, idx) => (
                      <Star key={idx} size={16} color="#F59E0B" fill="#F59E0B" />
                    ))}
                  </div>
                  <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem', fontStyle: 'italic' }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div style={{
                      width: 36, height: 36,
                      background: 'linear-gradient(135deg, #F97316, #EA580C)',
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'Outfit, sans-serif', fontWeight: 800, color: 'var(--color-text)', fontSize: '0.9rem',
                    }}>
                      {t.name[0]}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--color-text)', fontSize: '0.85rem' }}>{t.name}</div>
                      <div style={{ color: '#6B7280', fontSize: '0.75rem' }}>{t.city}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="section-label">FAQ</span>
              <h2 className="section-title">Questions fréquentes</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Tout ce que vous devez savoir sur l&apos;IPTV en Côte d&apos;Ivoire.
              </p>
            </div>

            <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {faqs.map((faq, i) => (
                <details key={i} className="faq-item">
                  <summary>{faq.question}</summary>
                  <div className="faq-answer">{faq.answer}</div>
                </details>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/blog/meilleur-abonnement-iptv-cote-divoire-2026" style={{ color: '#F97316', textDecoration: 'none', fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                Voir toutes les questions →
              </Link>
            </div>
          </div>
        </section>

        {/* ─── CITIES HUB ─── */}
        <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="section-label">Couverture Locale</span>
            <h2 className="section-title">IPTV disponible dans toute la Côte d&apos;Ivoire</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 2.5rem' }}>
              Bénéficiez d&apos;une diffusion stable 4K et d&apos;un support de proximité dans votre ville. Sélectionnez votre ville pour voir l&apos;offre locale :
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem',
              maxWidth: '850px',
              margin: '0 auto',
            }}>
              {[
                { name: 'Abidjan', href: '/iptv-abidjan' },
                { name: 'Bouaké', href: '/iptv-bouake' },
                { name: 'Yamoussoukro', href: '/iptv-yamoussoukro' },
              ].map(city => (
                <Link key={city.name} href={city.href} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'var(--color-surface-2)',
                  border: '1px solid var(--color-border)',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '999px',
                  color: 'var(--color-text)',
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, background-color 0.2s',
                }}
                className="city-badge-link"
                >
                  📍 IPTV {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section className="section" style={{
          background: 'linear-gradient(135deg, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.08) 100%)',
          borderTop: '1px solid rgba(249,115,22,0.2)',
        }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--color-text)', marginBottom: '1rem' }}>
              Commencez à regarder maintenant
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.05rem', marginBottom: '2rem' }}>
              Disponible 24h/24 · Réponse en moins de 5 minutes · Essai gratuit 24h
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="final-cta" className="btn-whatsapp pulse-glow" style={{ fontSize: '1.15rem', padding: '1.1rem 2.5rem' }}>
              Activer via WhatsApp
            </a>
            <div style={{ marginTop: '1.25rem', color: '#6B7280', fontSize: '0.85rem' }}>
              Orange Money · Wave · MTN MoMo · Moov Money
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
