import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { WHATSAPP_URL } from '@/lib/seo'
import { getFAQSchema, getBreadcrumbSchema, getProductSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: "Devenir Revendeur IPTV Afrique 2026 — Panel IPTV pas cher",
  description: "Créez votre propre business IPTV en Afrique. Panel revendeur IPTV dès 50€, pack 120 crédits + 12 offerts à 200€ (131 000 FCFA). Wave & Orange Money.",
  keywords: [
    'revendeur iptv', 'revendeur iptv afrique', 'panel revendeur iptv',
    'devenir revendeur iptv', 'credit iptv en gros', 'fournisseur iptv afrique',
    'revendeur iptv cote d\'ivoire', 'revendeur iptv senegal', 'panel iptv pas cher'
  ],
  alternates: { canonical: 'https://iptvivoire.com/devenir-revendeur-iptv' },
  openGraph: {
    title: "Panel Revendeur IPTV Afrique 2026 — Marges jusqu'à 300%",
    description: "Lancez votre activité de revente IPTV en Côte d'Ivoire, Sénégal et Afrique de l'Ouest. Packs de crédits en gros, panel autonome, support 24/7.",
    url: 'https://iptvivoire.com/devenir-revendeur-iptv',
    images: [{ url: 'https://iptvivoire.com/og/default.jpg', width: 1200, height: 630, alt: "Panel Revendeur IPTV Afrique" }],
  },
}

const faqs = [
  { q: "Qu'est-ce qu'un crédit IPTV et comment fonctionne la tarification ?", a: "Un crédit représente l'équivalent d'un abonnement de 12 mois pour un client. Pour les abonnements plus courts, le panel déduit moins de crédits (ex: 0.1 crédit pour un test de 24h gratuit, 0.25 crédit pour 1 mois, 0.5 crédit pour 6 mois). Vous achetez les crédits en gros à bas prix et fixez vous-même votre prix de vente final." },
  { q: "Comment fonctionne le panel revendeur ?", a: "Une fois votre commande de pack de crédits validée, nous créons vos accès à un panel de gestion IPTV privé. Depuis cette interface, vous êtes 100% autonome : vous pouvez créer des codes d'accès (Xtream Codes, M3U) pour vos clients, renouveler des abonnements, ou générer des tests gratuits de 24 heures sans avoir besoin de nous contacter." },
  { q: "Puis-je générer des tests gratuits pour mes prospects ?", a: "Oui. Votre panel vous permet de générer des tests gratuits de 24 heures pour vos clients potentiels afin qu'ils testent la qualité avant d'acheter. Ces tests sont gratuits et ne vous coûtent aucun crédit." },
  { q: "Quels sont les modes de paiement acceptés pour recharger mes crédits ?", a: "Pour simplifier la vie des revendeurs en Afrique, nous acceptons les paiements via Wave, Orange Money, MTN MoMo, Moov Money, virement bancaire et crypto-monnaies. Les recharges de crédits sur votre panel sont créditées sous 5 à 15 minutes." },
  { q: "Est-il possible de personnaliser le DNS ou de créer des sous-revendeurs ?", a: "Oui, à partir du Pack Professionnel (120 crédits), nous pouvons configurer votre propre DNS personnalisé pour masquer la source de vos flux. De plus, notre panel prend en charge la création de comptes sous-revendeurs (sub-resellers) si vous souhaitez vendre des crédits à d'autres partenaires." },
  { q: "Quelle assistance technique offrez-vous aux revendeurs ?", a: "Nous offrons un support VIP prioritaire via un groupe WhatsApp dédié disponible 24/7. Nous vous formons gratuitement à l'utilisation du panel, à la configuration des DNS et aux techniques d'installation sur tous les types d'appareils." },
]

export default function RevendeurPage() {
  const faqSchema = getFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://iptvivoire.com' },
    { name: 'Devenir Revendeur IPTV', url: 'https://iptvivoire.com/devenir-revendeur-iptv' },
  ])
  const productSchema = getProductSchema({
    name: 'Pack Professionnel Revendeur IPTV — 120 crédits + 12 offerts',
    price: '131000',
    description: "Devenez revendeur IPTV avec notre pack professionnel. 120 crédits + 12 gratuits pour 200€ (131 000 FCFA). Panel de gestion complet inclus.",
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <style>{`
        .rev-page{--bg-dark:#090d16;--panel-bg:#111827;--border-color:#1f2937;--text-muted:#9ca3af;--primary:#f97316;--primary-hover:#ea580c;--wa:#25d366;
          font-family:'Nunito',system-ui,sans-serif;color:#e5e7eb;line-height:1.7;max-width:1140px;margin:0 auto;padding:0 20px;font-size:16px;}
        .rev-page *{box-sizing:border-box;}
        .rev-page h1,.rev-page h2,.rev-page h3{font-family:'Outfit',sans-serif;font-weight:800;color:#fff;letter-spacing:-.02em;}
        
        /* HERO */
        .rev-hero{text-align:center;padding:70px 20px 40px;position:relative;}
        .rev-hero h1{font-size:clamp(2.2rem, 6vw, 3.5rem);margin:12px 0 20px;line-height:1.15;}
        .rev-hero p{font-size:1.15rem;color:var(--text-muted);max-width:700px;margin:0 auto 30px;}
        .rev-badge{background:rgba(249,115,22,0.1);border:1px solid rgba(249,115,22,0.3);color:var(--primary);
          padding:6px 16px;border-radius:100px;font-family:'Outfit',sans-serif;font-weight:700;font-size:0.85rem;text-transform:uppercase;letter-spacing:1px;display:inline-block;}

        /* STATS / TRUST BAND */
        .rev-trust{background:var(--panel-bg);border:1px solid var(--border-color);border-radius:24px;padding:30px;margin:40px 0;
          display:grid;grid-template-columns:repeat(4,1fr);gap:20px;text-align:center;}
        .rev-trust-cell b{font-size:2rem;font-family:'Outfit',sans-serif;color:#fff;display:block;margin-bottom:4px;}
        .rev-trust-cell span{font-size:0.85rem;color:var(--text-muted);font-weight:600;text-transform:uppercase;letter-spacing:0.5px;}

        /* B2B ADVANTAGES */
        .rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin:50px 0;}
        .rev-card{background:var(--panel-bg);border:1px solid var(--border-color);border-radius:20px;padding:24px;
          transition:transform 0.2s,border-color 0.2s;}
        .rev-card:hover{transform:translateY(-4px);border-color:rgba(249,115,22,0.5);}
        .rev-card-icon{font-size:2rem;margin-bottom:12px;display:block;}
        .rev-card h3{font-size:1.15rem;margin:0 0 8px;}
        .rev-card p{font-size:0.9rem;color:var(--text-muted);margin:0;}

        /* ROI BLOCK */
        .roi-block{background:radial-gradient(ellipse at top right,rgba(249,115,22,0.15),transparent 60%),var(--panel-bg);
          border:2px solid var(--border-color);border-radius:24px;padding:40px;margin:50px 0;display:grid;grid-template-columns:1.2fr 0.8fr;gap:40px;align-items:center;}
        .roi-text h2{font-size:1.85rem;margin:0 0 14px;}
        .roi-text p{color:var(--text-muted);margin-bottom:20px;}
        .roi-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:12px;}
        .roi-list li{position:relative;padding-left:26px;font-size:0.95rem;}
        .roi-list li:before{content:"✓";color:var(--primary);position:absolute;left:0;font-weight:bold;}
        .roi-math{background:rgba(0,0,0,0.3);border:1px solid var(--border-color);border-radius:18px;padding:26px;text-align:center;}
        .roi-math-val{font-size:2.8rem;font-weight:900;color:var(--primary);font-family:'Outfit',sans-serif;line-height:1;}
        .roi-math-lbl{font-size:0.8rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px;margin-top:6px;display:block;}

        /* PRICING */
        .pricing-section{padding:40px 0;}
        .pricing-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;align-items:stretch;margin-top:30px;}
        .price-card{background:var(--panel-bg);border:1.5px solid var(--border-color);border-radius:22px;padding:30px 20px;
          text-align:center;display:flex;flex-direction:column;justify-content:space-between;position:relative;}
        .price-card.featured{border-color:var(--primary);box-shadow:0 15px 40px rgba(249,115,22,0.12);transform:scale(1.03);}
        .price-card.featured .ribbon{background:var(--primary);color:#fff;font-size:0.75rem;font-weight:800;
          padding:4px 16px;border-radius:100px;position:absolute;top:-13px;left:50%;transform:translateX(-50%);letter-spacing:0.5px;white-space:nowrap;}
        .price-card h3{margin:0 0 10px;font-size:1.3rem;}
        .price-qty{font-size:0.9rem;color:var(--text-muted);margin-bottom:14px;}
        .price-val{font-size:2rem;font-weight:900;color:#fff;font-family:'Outfit',sans-serif;margin-bottom:4px;}
        .price-unit{font-size:0.8rem;color:var(--text-muted);margin-bottom:18px;display:block;}
        .price-features{list-style:none;padding:0;margin:18px 0;text-align:left;display:flex;flex-direction:column;gap:10px;font-size:0.85rem;}
        .price-features li{display:flex;align-items:flex-start;gap:6px;}
        .price-features li:before{content:"✓";color:var(--primary);font-weight:bold;flex-shrink:0;}
        .pricing-cta{background:var(--wa);color:#fff;text-decoration:none;font-weight:800;font-size:0.9rem;
          padding:12px;border-radius:100px;display:flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 8px 20px rgba(37,211,102,0.2);margin-top:auto;}
        .pricing-cta:hover{opacity:0.95;}

        /* STEPS */
        .steps-section{margin:60px 0;}
        .steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}
        .step-item{background:var(--panel-bg);border:1px solid var(--border-color);border-radius:20px;padding:26px;position:relative;}
        .step-num{position:absolute;top:-18px;left:24px;width:36px;height:36px;border-radius:10px;
          background:var(--primary);color:#fff;font-weight:800;font-family:'Outfit',sans-serif;display:flex;align-items:center;justify-content:center;font-size:1.05rem;}
        .step-item h3{font-size:1.1rem;margin:10px 0 8px;}
        .step-item p{font-size:0.88rem;color:var(--text-muted);margin:0;}

        /* FAQ */
        .faq-section{margin:60px 0;}
        .faq-grid{display:flex;flex-direction:column;gap:12px;margin-top:30px;}
        .faq-grid details{background:var(--panel-bg);border:1px solid var(--border-color);border-radius:14px;padding:4px 20px;}
        .faq-grid summary{cursor:pointer;font-weight:700;font-family:'Outfit',sans-serif;padding:16px 0;display:flex;justify-content:space-between;gap:14px;}
        .faq-grid summary::-webkit-details-marker{display:none;}
        .faq-grid summary:after{content:"+";color:var(--primary);font-weight:bold;font-size:1.2rem;}
        .faq-grid details[open] summary:after{content:"–";}
        .faq-grid p{padding:0 0 16px;margin:0;color:var(--text-muted);font-size:0.95rem;}

        /* FINAL CTA */
        .final-cta{background:linear-gradient(135deg,rgba(249,115,22,0.1),transparent),var(--panel-bg);
          border:2px solid var(--border-color);border-radius:24px;padding:50px 30px;text-align:center;margin:60px 0 20px;}
        .final-cta h2{font-size:2rem;margin:0 0 12px;}
        .final-cta p{color:var(--text-muted);max-width:600px;margin:0 auto 28px;}
        .final-cta .btn-large{display:inline-flex;align-items:center;gap:10px;padding:15px 35px;border-radius:100px;
          background:var(--primary);color:#fff;font-weight:800;font-size:1.05rem;text-decoration:none;box-shadow:0 12px 30px rgba(249,115,22,0.3);}
        .final-cta .btn-large:hover{background:var(--primary-hover);transform:translateY(-1px);}

        @media(max-width:960px){
          .rev-trust{grid-template-columns:repeat(2,1fr);}
          .rev-grid,.pricing-grid,.steps-grid{grid-template-columns:repeat(2,1fr);}
          .roi-block{grid-template-columns:1fr;}
        }
        @media(max-width:640px){
          .rev-trust,.rev-grid,.pricing-grid,.steps-grid{grid-template-columns:1fr;}
          .price-card.featured{transform:none;margin:10px 0;}
          .roi-block{padding:24px;}
        }
      `}</style>

      <Header />
      <main style={{ backgroundColor: '#090d16', paddingBottom: '3rem' }}>
        <div className="rev-page">

          {/* ── HERO ── */}
          <section className="rev-hero">
            <span className="rev-badge">⚡ Opportunité B2B Afrique 2026</span>
            <h1>Devenez Revendeur IPTV et Créez Votre Propre Business</h1>
            <p>Lancez-vous avec le fournisseur IPTV numéro 1 en Afrique Francophone. Achetez vos crédits en gros, gérez vos clients de manière 100% autonome, et générez des revenus stables.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
              <a href={`${WHATSAPP_URL}&text=Bonjour, je souhaite obtenir les informations de revendeur`} className="btn-whatsapp" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1rem', padding: '12px 28px' }}>
                📱 Démarrer sur WhatsApp (Test Gratuit)
              </a>
            </div>
          </section>

          {/* ── TRUST BAND ── */}
          <section className="rev-trust">
            <div className="rev-trust-cell"><b>99,98 %</b><span>Disponibilité Serveur</span></div>
            <div className="rev-trust-cell"><b>3 420 +</b><span>Clients Actifs</span></div>
            <div className="rev-trust-cell"><b>5 Minutes</b><span>Recharge Crédits</span></div>
            <div className="rev-trust-cell"><b>x15 ROI</b><span>Marge Bénéficiaire</span></div>
          </section>

          {/* ── BENEFITS ── */}
          <section>
            <div style={{ textAlign: 'center', margin: '40px 0 20px' }}>
              <span className="rev-badge">Les Avantages</span>
              <h2 style={{ fontSize: '1.85rem' }}>Pourquoi choisir notre Panel Revendeur ?</h2>
            </div>
            <div className="rev-grid">
              <div className="rev-card"><span className="rev-card-icon">🖥️</span><h3>Panel de Gestion Autonome</h3><p>Créez, renouvelez ou bloquez les comptes de vos clients en un seul clic sans aucune attente.</p></div>
              <div className="rev-card"><span className="rev-card-icon">⚡</span><h3>Tests Gratuits Illimités</h3><p>Générez des accès de test de 24h gratuits pour convaincre vos prospects sans dépenser vos crédits.</p></div>
              <div className="rev-card"><span className="rev-card-icon">💰</span><h3>Tarifs de Gros FCFA</h3><p>Bénéficiez du prix au crédit le plus bas du marché pour maximiser votre marge commerciale.</p></div>
              <div className="rev-card"><span className="rev-card-icon">📺</span><h3>Contenu Premium 4K</h3><p>Proposez 22 840 chaînes internationales (Canal+, beIN Sports, DSTV) et 124 580 films/séries VOD.</p></div>
              <div className="rev-card"><span className="rev-card-icon">🛡️</span><h3>Branding Personnalisable</h3><p>Configurez votre propre nom de domaine DNS pour masquer notre marque et valoriser la vôtre.</p></div>
              <div className="rev-card"><span className="rev-card-icon">💬</span><h3>Support B2B Dédié 24/7</h3><p>Un conseiller technique WhatsApp répond à toutes vos questions et vous aide en moins de 2 minutes.</p></div>
            </div>
          </section>

          {/* ── ROI MATH BLOCK ── */}
          <section className="roi-block">
            <div className="roi-text">
              <h2>Combien pouvez-vous gagner en revente ?</h2>
              <p>Le business de l&apos;IPTV propose l&apos;une des marges bénéficiaires les plus élevées du marché de la revente numérique. Voici la démonstration financière :</p>
              <ul className="roi-list">
                <li>Vous achetez notre <strong>Pack Professionnel (120 crédits + 12 offerts)</strong> pour <strong>200 € (131 000 FCFA)</strong>.</li>
                <li>Le pack vous donne un total de 132 crédits, équivalent à exactement <strong>11 codes de 1 an</strong> (12 crédits = 1 an d&apos;abonnement).</li>
                <li>Votre coût de revient par abonnement annuel n&apos;est que de <strong>11 900 FCFA (18 €)</strong>.</li>
                <li>Vous revendez chaque abonnement de 12 mois à vos clients à un prix public conseillé de <strong>25 000 FCFA</strong>.</li>
                <li>Votre chiffre d&apos;affaires total généré est de : <strong>11 abonnements × 25 000 FCFA = 275 000 FCFA</strong>.</li>
                <li>Votre bénéfice net s&apos;élève à <strong>+144 000 FCFA</strong> (+110% de bénéfice net) dès votre premier pack !</li>
              </ul>
            </div>
            <div className="roi-math">
              <span className="roi-math-lbl">Marge Bénéficiaire</span>
              <div className="roi-math-val">x2,1 ROI</div>
              <span className="roi-math-lbl">Sur chaque pack professionnel</span>
            </div>
          </section>

          {/* ── PRICING SECTIONS ── */}
          <section id="tarifs-revendeur" className="pricing-section">
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <span className="rev-badge">Nos Tarifs Gros</span>
              <h2 style={{ fontSize: '1.85rem' }}>Achetez vos packs de crédits revendeur</h2>
            </div>
            <div className="pricing-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', maxWidth: '900px', margin: '30px auto 0' }}>
              <div className="price-card">
                <div>
                  <h3>Pack Débutant</h3>
                  <div className="price-qty">60 Crédits inclus</div>
                  <div className="price-val" style={{ fontSize: '2.5rem', fontWeight: '900', margin: '15px 0' }}>100 €</div>
                  <span className="price-unit">~ 65 000 FCFA</span>
                </div>
                <ul className="price-features" style={{ margin: '20px 0' }}>
                  <li><strong>5 Codes de 1 An</strong> inclus (12 crédits = 1 an)</li>
                  <li>Panel de gestion autonome</li>
                  <li>Création de tests gratuits 24h</li>
                  <li>Coût par code de 1 an : 13 000 FCFA</li>
                  <li>Support WhatsApp prioritaire</li>
                </ul>
                <a href={`${WHATSAPP_URL}&text=Bonjour, je souhaite commander le Pack Débutant Revendeur (100 euros - 60 credits)`} className="pricing-cta" target="_blank" rel="noopener noreferrer">💬 Acheter sur WhatsApp</a>
              </div>

              <div className="price-card featured">
                <span className="ribbon">⭐ LE MEILLEUR RAPPORT QUALITÉ/PRIX</span>
                <div>
                  <h3>Pack Professionnel</h3>
                  <div className="price-qty">120 Crédits + 12 Offerts</div>
                  <div className="price-val" style={{ fontSize: '2.5rem', fontWeight: '900', margin: '15px 0' }}>200 €</div>
                  <span className="price-unit">~ 131 000 FCFA</span>
                </div>
                <ul className="price-features" style={{ margin: '20px 0' }}>
                  <li><strong>11 Codes de 1 An</strong> inclus (12 crédits = 1 an)</li>
                  <li>Panel de gestion Avancé</li>
                  <li>Création de tests gratuits 24h</li>
                  <li>Coût par code de 1 an : <strong>11 900 FCFA</strong></li>
                  <li>Support VIP WhatsApp 24/7</li>
                  <li>Création de sous-revendeurs</li>
                  <li>DNS Personnalisé inclus</li>
                </ul>
                <a href={`${WHATSAPP_URL}&text=Bonjour, je souhaite commander le Pack Professionnel Revendeur (200 euros - 120 credits %2B 12 offerts)`} className="pricing-cta" target="_blank" rel="noopener noreferrer">💬 Acheter sur WhatsApp</a>
              </div>

              <div className="price-card">
                <div>
                  <h3>Pack Partenaire</h3>
                  <div className="price-qty">300 Crédits + 36 Offerts</div>
                  <div className="price-val" style={{ fontSize: '2.5rem', fontWeight: '900', margin: '15px 0' }}>450 €</div>
                  <span className="price-unit">~ 295 000 FCFA</span>
                </div>
                <ul className="price-features" style={{ margin: '20px 0' }}>
                  <li><strong>28 Codes de 1 An</strong> inclus (12 crédits = 1 an)</li>
                  <li>Panel de gestion Master</li>
                  <li>Création de tests gratuits 24h</li>
                  <li>Coût par code de 1 an : <strong>10 500 FCFA</strong></li>
                  <li>DNS Personnalisé inclus</li>
                  <li>Sous-revendeurs illimités</li>
                  <li>Support technique dédié 24/7</li>
                </ul>
                <a href={`${WHATSAPP_URL}&text=Bonjour, je souhaite commander le Pack Partenaire Revendeur (450 euros - 300 credits %2B 36 offerts)`} className="pricing-cta" target="_blank" rel="noopener noreferrer">💬 Acheter sur WhatsApp</a>
              </div>
            </div>
          </section>

          {/* ── STEPS ── */}
          <section className="steps-section">
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <span className="rev-badge">Démarrage</span>
              <h2 style={{ fontSize: '1.85rem' }}>Comment démarrer votre business IPTV en 4 étapes</h2>
            </div>
            <div className="steps-grid">
              <div className="step-item">
                <span className="step-num">1</span>
                <h3>Choisissez votre Pack</h3>
                <p>Sélectionnez le pack de crédits qui correspond à votre budget de départ pour créer votre panel.</p>
              </div>
              <div className="step-item">
                <span className="step-num">2</span>
                <h3>Activez votre Panel</h3>
                <p>Après paiement par Wave ou Orange Money, nous configurons vos accès administrateur en 15 minutes.</p>
              </div>
              <div className="step-item">
                <span className="step-num">3</span>
                <h3>Proposez des Tests</h3>
                <p>Générez des codes de tests gratuits de 24h pour vos clients et validez la stabilité sur leurs écrans.</p>
              </div>
              <div className="step-item">
                <span className="step-num">4</span>
                <h3>Encaissez et Validez</h3>
                <p>Recevez les paiements de vos clients, déduisez vos crédits pour activer les comptes et conservez vos marges bénéficiaires.</p>
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="faq-section">
            <div style={{ textAlign: 'center' }}>
              <span className="rev-badge">Des questions ?</span>
              <h2 style={{ fontSize: '1.85rem' }}>FAQ Spéciale Revendeurs IPTV</h2>
            </div>
            <div className="faq-grid">
              {faqs.map(f => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* ── FINAL CTA ── */}
          <section className="final-cta">
            <h2>Prêt à lancer votre business IPTV en Afrique ?</h2>
            <p>Obtenez vos accès à l&apos;interface de gestion et commencez à vendre en moins de 24 heures. Nos experts vous forment gratuitement et vous accompagnent à chaque étape.</p>
            <a href={`${WHATSAPP_URL}&text=Bonjour, je souhaite obtenir les informations de revendeur`} className="btn-large" target="_blank" rel="noopener noreferrer">
              📱 Obtenir mes accès revendeur sur WhatsApp
            </a>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
