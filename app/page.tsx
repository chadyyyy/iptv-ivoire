import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { WHATSAPP_URL } from '@/lib/seo'
import { getFAQSchema, getProductSchema, getHowToSchema, getReviewSchema } from '@/lib/schema'
import { Trophy, Star, MessageCircle, Tv, Film, Smartphone, Monitor, ShieldCheck, Play, Globe, Gamepad2, Laptop, HardDrive, Target, CreditCard, PlayCircle, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: "IPTV Côte d'Ivoire — +22 000 Chaînes dès 2 500 FCFA | Orange Money & Wave",
  description: "Meilleur abonnement IPTV en Côte d'Ivoire. +22 000 chaînes HD/4K, VOD illimitée. Paiement Orange Money, Wave, MTN. Activation immédiate. Essai gratuit 24h.",
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
    answer: "Notre abonnement 3 mois à 2 000 FCFA/mois est le plus populaire à Abidjan. Il offre le meilleur rapport qualité-prix avec +22 000 chaînes HD/4K, la VOD illimitée et un support WhatsApp 24/7.",
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
    answer: "Nos abonnements démarrent à 2 500 FCFA par mois (1 mois), 2 000 FCFA/mois (3 mois), ou 1 500 FCFA/mois pour 12 mois. Paiement via Orange Money, Wave, MTN MoMo ou Moov Money.",
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
  { name: "Koné A.", city: "Abidjan", text: "Je paye avec Wave, reçois mes codes sur WhatsApp et je regarde tout sur ma Smart TV. Parfait !", stars: 5 },
  { name: "Diallo M.", city: "Bouaké", text: "Meilleur service IPTV en Côte d'Ivoire. Toutes les chaînes en HD, même RTI et Canal+. Je recommande !", stars: 5 },
  { name: "Yao F.", city: "Yamoussoukro", text: "Abonnement 12 mois à 1 500 FCFA/mois, ça coûte moins qu'un mois de Canal+. Qualité excellente !", stars: 5 },
  { name: "Touré B.", city: "Abidjan (Cocody)", text: "Activation en 3 minutes via Orange Money. Service impeccable, support très réactif sur WhatsApp.", stars: 5 },
  { name: "N'Dri C.", city: "Daloa", text: "Je regarde beIN Sports, toutes les chaînes françaises et les chaînes ivoiriennes sans aucun problème.", stars: 5 },
  { name: "Bamba S.", city: "San-Pédro", text: "Parfait pour regarder la Coupe du Monde 2026 avec les Éléphants de Côte d'Ivoire !", stars: 5 },
]

const plans = [
  {
    name: '1 Mois',
    price: '2 500',
    perMonth: '2 500 FCFA',
    total: '2 500 FCFA',
    badge: null,
    emoji: <Star size={32} color="#F97316" />,
    schemaPrice: '2500',
    payment: 'Orange Money',
    freeMonth: false,
    features: ['+22 000 chaînes HD/4K', 'VOD illimitée (120 000+ films)', 'Chaînes ivoiriennes (RTI 1, RTI 2, La 3)', 'Support WhatsApp 24/7', 'Activation en 5 minutes', 'Jusqu\'à 5 appareils simultanés'],
  },
  {
    name: '3 Mois',
    price: '2 000',
    perMonth: '2 000 FCFA/mois',
    total: '6 000 FCFA',
    badge: 'POPULAIRE',
    emoji: <ShieldCheck size={32} color="#F97316" />,
    schemaPrice: '6000',
    payment: 'Wave',
    freeMonth: false,
    features: ['+22 000 chaînes HD/4K', 'VOD illimitée (120 000+ films)', 'Chaînes ivoiriennes (RTI 1, RTI 2, La 3)', 'Support WhatsApp 24/7 prioritaire', 'Activation en 5 minutes', 'Jusqu\'à 5 appareils simultanés'],
  },
  {
    name: '12 Mois',
    price: '1 500',
    perMonth: '1 500 FCFA/mois',
    total: '18 000 FCFA',
    badge: 'MEILLEUR PRIX',
    emoji: <Trophy size={32} color="#F97316" />,
    schemaPrice: '18000',
    payment: 'MTN MoMo',
    freeMonth: true,
    features: ['+22 000 chaînes HD/4K', 'VOD illimitée (120 000+ films)', 'Chaînes ivoiriennes (RTI 1, RTI 2, La 3)', 'Support WhatsApp VIP 24/7', 'Activation en 5 minutes', 'Jusqu\'à 5 appareils simultanés'],
  },
]

const channelCategories = [
  { emoji: <PlayCircle size={32} color="#F97316" />, name: 'Chaînes Ivoiriennes', count: '15+', desc: 'RTI 1, RTI 2, La 3, NCI...' },
  { emoji: <Globe size={32} color="#F97316" />, name: 'Chaînes Africaines', count: '50+', desc: 'Sénégal, Mali, Cameroun...' },
  { emoji: <Trophy size={32} color="#F97316" />, name: 'Sport', count: '80+', desc: 'beIN Sports, Canal+ Sport, Eurosport...' },
  { emoji: <Film size={32} color="#F97316" />, name: 'Cinéma & VOD', count: '120 000+', desc: 'Films et séries en streaming' },
  { emoji: <Tv size={32} color="#F97316" />, name: 'Chaînes Françaises', count: '50+', desc: 'TF1, M6, France 2, Arte...' },
  { emoji: <Globe size={32} color="#F97316" />, name: 'Internationales', count: '22 000+', desc: 'USA, UK, Turquie, Espagne...' },
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
  const reviewSchema = getReviewSchema()
  const productSchemas = plans.map(p => getProductSchema({
    name: `IPTV Ivoire — Abonnement ${p.name}`,
    price: p.schemaPrice,
    description: `Abonnement IPTV ${p.name} — ${p.perMonth} — +22 000 chaînes HD/4K en Côte d'Ivoire`,
  }))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
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
              <span className="badge badge-gold">4.9/5 — 3 000+ clients</span>
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
              <span className="gradient-text">+22 000 Chaînes</span>{' '}
              dès{' '}
              <span style={{ color: '#F97316' }}>2 500 FCFA</span>
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: '#9CA3AF',
              maxWidth: '650px',
              margin: '0 auto 2rem',
              lineHeight: 1.7,
            }}>
              Regardez votre télé sur Smart TV, Android, iPhone et PC.<br />
              Paiement <strong style={{ color: '#F97316' }}>Orange Money</strong> &amp; <strong style={{ color: '#25D366' }}>Wave</strong>. Activation immédiate.
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
                { value: '22 000+', label: 'Chaînes' },
                { value: '120 000+', label: 'Films VOD' },
                { value: '3 000+', label: 'Clients CI' },
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
              'Plus de 3 000 clients en Côte d\'Ivoire',
              'Noté 4.9/5 sur WhatsApp',
              'Support 24/7 en Français',
              'Activation en moins de 5 minutes',
              'Paiement Orange Money & Wave',
              'Regardez la Coupe du Monde 2026',
              '+22 000 chaînes HD/4K',
              '120 000+ films en VOD',
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

        {/* ─── PRICING ─── */}
        <section className="section" id="abonnements">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-label">Tarifs</span>
              <h2 className="section-title">Choisissez votre forfait IPTV</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Tous les prix en <strong style={{ color: '#F97316' }}>FCFA</strong>. Paiement via mobile money. Activation immédiate.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              maxWidth: '960px',
              margin: '0 auto',
            }}>
              {plans.map((plan, i) => (
                <div key={plan.name} className="card" style={{
                  position: 'relative',
                  border: i === 1 ? '2px solid rgba(249,115,22,0.5)' : undefined,
                  background: i === 1 ? 'rgba(249,115,22,0.05)' : undefined,
                }}>
                  {plan.badge && (
                    <div style={{
                      position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                      background: i === 2 ? 'linear-gradient(135deg, #F59E0B, #D97706)' : 'linear-gradient(135deg, #F97316, #EA580C)',
                      color: 'var(--color-text)', fontFamily: 'Outfit, sans-serif', fontWeight: 800,
                      fontSize: '0.7rem', letterSpacing: '0.08em',
                      padding: '0.3rem 1rem', borderRadius: '999px',
                      whiteSpace: 'nowrap',
                    }}>
                      {plan.badge}
                    </div>
                  )}

                  <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>{plan.emoji}</div>
                    <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>{plan.name}</h3>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '2.5rem', color: '#F97316', lineHeight: 1 }}>
                      {plan.total.replace(' FCFA', '')} <span style={{ fontSize: '1rem', fontWeight: 600, color: '#9CA3AF' }}>FCFA</span>
                    </div>
                    {plan.name !== '1 Mois' && (
                      <div style={{ fontSize: '0.9rem', color: '#6B7280', marginTop: '0.4rem' }}>soit <strong style={{ color: '#9CA3AF' }}>{plan.price} FCFA</strong> / mois</div>
                    )}
                    {plan.freeMonth && (
                      <div style={{ marginTop: '0.75rem', background: 'rgba(34,197,94,0.1)', color: '#16A34A', padding: '0.35rem 0.75rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 800, display: 'inline-block' }}>
                        + 1 MOIS GRATUIT
                      </div>
                    )}
                  </div>

                  <ul style={{ listStyle: 'none', marginBottom: '1.75rem' }}>
                    {plan.features.map(f => (
                      <li key={f} style={{
                        display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
                        padding: '0.45rem 0',
                        borderBottom: '1px solid var(--color-border)',
                        color: '#9CA3AF', fontSize: '0.875rem',
                      }}>
                        <span style={{ color: '#4ADE80', flexShrink: 0, marginTop: '0.1rem' }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                    id={`plan-cta-${plan.name.toLowerCase().replace(' ', '-')}`}
                    className={i === 1 ? 'btn-primary' : 'btn-secondary'}
                    style={{ width: '100%', textAlign: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                    Payer via {plan.payment}
                  </a>
                  
                  <div style={{ textAlign: 'center' }}>
                    <Link href="/abonnement-iptv-cote-divoire" className="nav-link" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                      Voir tous les détails →
                    </Link>
                  </div>
                </div>
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

            <Link href="/installation" style={{
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
              <Link href="/chaines" className="btn-secondary" style={{ display: 'inline-flex' }}>
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
                { step: '01', icon: <Target size={28} color="#F97316" />, title: 'Choisissez votre forfait', desc: 'Sélectionnez 1 mois (2 500 FCFA), 3 mois (2 000 FCFA/mois) ou 12 mois (1 500 FCFA/mois).' },
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
              <p style={{ color: '#6B7280', fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>4.9/5 basé sur +3 000 avis</p>
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
              <Link href="/faq" style={{ color: '#F97316', textDecoration: 'none', fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                Voir toutes les questions →
              </Link>
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
