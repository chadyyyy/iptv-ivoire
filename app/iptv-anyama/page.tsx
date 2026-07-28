import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { WHATSAPP_URL } from '@/lib/seo'
import { getFAQSchema, getBreadcrumbSchema, getProductSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: "IPTV Anyama 2026 — 4K dès 5 900 FCFA",
  description: "IPTV Anyama : +22 840 chaînes en 4K. Paiement sécurisé Wave & Orange Money, prix en FCFA, activation en 5 min. Fonctionne à Christiankoi, Belle-Ville, Résidentiel.",
  keywords: ['iptv anyama', 'abonnement iptv anyama', 'fournisseur iptv anyama', 'iptv christiankoi', 'iptv residential anyama', 'installateur iptv anyama', 'iptv 4k anyama'],
  alternates: { canonical: 'https://iptvivoire.com/iptv-anyama' },
  openGraph: {
    title: "IPTV Anyama 2026 — 22 840 Chaînes 4K, Wave & Orange Money",
    description: "Le meilleur service IPTV à Anyama. Paiement sécurisé Wave & Orange Money, activation rapide. Christiankoi, Belle-Ville, Résidentiel, Schneider et tous les quartiers.",
    url: 'https://iptvivoire.com/iptv-anyama',
    images: [{ url: 'https://iptvivoire.com/cities/anyama.jpg', width: 1200, height: 630, alt: "IPTV Anyama — Ville et gare d'Anyama" }],
  },
}

const faqs = [
  { q: "L'IPTV fonctionne-t-il bien à Anyama avec la connexion internet mobile ?", a: "Oui, notre service est parfaitement optimisé pour la 4G/5G d'Orange, MTN et Moov à Anyama. Dans les quartiers comme Christiankoi, Résidentiel, et Belle-Ville, le débit is excellent et permet de regarder des chaînes en HD/4K de manière fluide sans interruption." },
  { q: "Comment payer mon abonnement IPTV à Anyama ?", a: "Vous pouvez payer directement via Wave ou Orange Money. C'est rapide, sans frais supplémentaires, et l'activation se fait en 5 minutes après validation sur WhatsApp." },
  { q: "Quelles sont les chaînes ivoiriennes incluses ?", a: "L'abonnement inclut RTI 1, RTI 2, La 3, NCI, Life TV, A+ Ivoire ainsi que toutes les grandes chaînes de la TNT ivoirienne et d'Afrique de l'Ouest." },
  { q: "Est-ce compatible avec les box Android et Smart TV à Anyama ?", a: "Absolument. Notre service est compatible avec les téléviseurs connectés (Samsung, LG, Hisense), Box Android TV, téléphones, ordinateurs et tablettes. Nous vous fournissons un guide complet d'installation sur WhatsApp." },
  { q: "Puis-je regarder les matchs de la Coupe du Monde 2026 ?", a: "Oui. Toutes les chaînes de diffusion internationales (beIN Sports, Canal+, TF1) sont disponibles en qualité 4K Ultra-Stable pour suivre les Éléphants et l'intégralité de la Coupe du Monde." },
  { q: "Quels sont les tarifs de l'IPTV à Anyama ?", a: "Nos forfaits : Offre 2 mois à 5 900 FCFA, 3 mois à 7 900 FCFA, et l'abonnement annuel (13 mois) à seulement 24 900 FCFA." },
  { q: "Est-ce qu'il y a un service client disponible ?", a: "Oui, nous offrons une assistance VIP 24/7 sur WhatsApp. Nos techniciens vous aident à configurer votre appareil à distance en quelques minutes." },
]

export default function IPTVAnyamaPage() {
  const faqSchema = getFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://iptvivoire.com' },
    { name: 'IPTV Anyama', url: 'https://iptvivoire.com/iptv-anyama' },
  ])
  const productSchema = getProductSchema({
    name: 'IPTV Anyama — Abonnement 3 mois',
    price: '7900',
    description: "IPTV Anyama 3 mois à 7 900 FCFA. 22 840 chaînes HD/4K, VOD 124 580 films. Wave & Orange Money. Activation en 5 min.",
  })
  const localBizSchema = {
    '@context': 'https://schema.org', '@type': 'LocalBusiness',
    name: 'IPTV Ivoire — Anyama', url: 'https://iptvivoire.com/iptv-anyama',
    image: 'https://iptvivoire.com/cities/anyama.jpg',
    priceRange: '5900-24900 FCFA', currenciesAccepted: 'XOF',
    paymentAccepted: 'Orange Money, Wave, MTN MoMo, Moov Money',
    areaServed: { '@type': 'City', name: 'Anyama', containedInPlace: { '@type': 'Country', name: "Côte d'Ivoire" } },
    address: { '@type': 'PostalAddress', addressCountry: 'CI', addressLocality: 'Anyama' },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizSchema) }} />

      <style>{`
        .ab{--ink:#0f172a;--ink2:#475569;--mut:#64748b;--line:#e6e8f0;
          --or:#F97316;--or2:#EA580C;--green:#16a34a;--wa:#25D366;--red:#e11d48;
          --grad:linear-gradient(135deg,#F97316,#F59E0B);
          font-family:'Nunito',system-ui,sans-serif;color:var(--ink);line-height:1.72;
          max-width:1140px;margin:0 auto;padding:0 20px;font-size:17px;-webkit-font-smoothing:antialiased;}
        .ab *{box-sizing:border-box;}
        .ab h1,.ab h2,.ab h3{font-family:'Outfit',sans-serif;line-height:1.18;color:var(--ink);font-weight:800;letter-spacing:-.02em;}
        .ab h2{font-size:2rem;margin:56px 0 14px;}
        .ab h3{font-size:1.28rem;margin:28px 0 10px;font-weight:700;}
        .ab p{margin:0 0 16px;}
        .ab a{color:var(--or);text-decoration:none;font-weight:600;}
        .ab a:hover{text-decoration:underline;}
        .ab ul,.ab ol{margin:0 0 18px;padding-left:22px;}
        .ab li{margin-bottom:9px;}
        .ab .eyebrow{font-family:'Outfit',sans-serif;text-transform:uppercase;letter-spacing:.16em;font-size:.78rem;font-weight:800;
          background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;display:inline-flex;align-items:center;gap:10px;margin-bottom:6px;}
        .ab .eyebrow:before{content:"";width:28px;height:3px;border-radius:3px;background:var(--grad);}
        .ab .grad{background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;}

        /* HERO */
        .ab-hero{position:relative;overflow:hidden;border-radius:24px;margin:22px 0 0;padding:54px 44px;
          background:radial-gradient(1200px 500px at 85% -10%,rgba(249,115,22,.28),transparent 60%),
                     radial-gradient(900px 500px at 0% 110%,rgba(245,158,11,.22),transparent 55%),
                     linear-gradient(160deg,#0b1020,#1a1206 55%,#0f0a00);
          color:#fff;display:grid;grid-template-columns:1.1fr .9fr;gap:40px;align-items:center;}
        .ab-hero h1{color:#fff;font-size:2.5rem;margin:8px 0 18px;}
        .ab-hero p{color:#c7d0e0;font-size:1.1rem;max-width:90%;}
        .ab-hero img{width:100%;border-radius:20px;box-shadow:0 30px 70px rgba(0,0,0,.5);}
        .ab-rating{display:inline-flex;align-items:center;gap:10px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);
          padding:8px 16px;border-radius:100px;font-size:.9rem;color:#fff;margin-bottom:14px;backdrop-filter:blur(6px);}
        .ab-stars{color:#ffc83d;letter-spacing:2px;}
        .ab-chips{display:flex;flex-wrap:wrap;gap:8px;margin:18px 0 6px;}
        .ab-chip{background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.18);padding:7px 14px;border-radius:100px;font-size:.83rem;font-weight:700;color:#fff;}
        .ab-cta-row{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px;}
        .ab-btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;padding:14px 26px;border-radius:100px;font-weight:800;
          font-size:.97rem;cursor:pointer;transition:transform .16s ease,box-shadow .16s ease;text-decoration:none !important;text-align:center;}
        .ab-btn:hover{transform:translateY(-2px);}
        .ab-btn-primary{background:var(--grad);color:#fff !important;box-shadow:0 12px 30px rgba(249,115,22,.4);}
        .ab-btn-wa{background:var(--wa);color:#fff !important;box-shadow:0 10px 28px rgba(37,211,102,.38);}

        /* TRUST SEGMENT */
        .ab-trust{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin:40px 0;}
        .ab-trust-card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:22px 18px;text-align:center;
          box-shadow:0 10px 30px rgba(15,23,42,.03);transition:transform .2s ease;}
        .ab-trust-card:hover{transform:translateY(-3px);}
        .ab-trust-card span{display:block;font-size:1.88rem;font-weight:900;color:var(--or);font-family:'Outfit',sans-serif;margin-bottom:4px;}
        .ab-trust-card p{margin:0;font-size:.85rem;color:var(--ink2);font-weight:700;text-transform:uppercase;letter-spacing:.5px;}

        /* PLAN CARDS */
        .ab-plans{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin:40px 0;align-items:stretch;}
        .ab-plan-card{background:#fff;border:1px solid var(--line);border-radius:20px;padding:32px 24px;
          display:flex;flex-direction:column;position:relative;box-shadow:0 15px 45px rgba(15,23,42,.04);transition:transform .22s ease;}
        .ab-plan-card:hover{transform:translateY(-4px);}
        .ab-plan-card.featured{border:2px solid var(--or);box-shadow:0 20px 50px rgba(249,115,22,.12);}
        .ab-plan-card .badge{position:absolute;top:-13px;left:24px;background:var(--grad);color:#fff;
          font-size:.75rem;font-weight:800;padding:4px 14px;border-radius:100px;font-family:'Outfit',sans-serif;}
        .ab-plan-card h3{margin:0 0 4px;font-size:1.35rem;}
        .ab-plan-promo{font-size:.82rem;color:var(--or);font-weight:800;margin-bottom:14px;display:block;}
        .ab-plan-price{display:flex;align-items:baseline;gap:4px;margin-bottom:2px;}
        .ab-plan-price .val{font-size:2.8rem;font-weight:900;color:var(--ink);font-family:'Outfit',sans-serif;}
        .ab-plan-price .unit{font-size:1.15rem;font-weight:800;color:var(--ink2);}
        .ab-plan-orig{font-size:.88rem;color:var(--mut);text-decoration:line-through;margin-bottom:16px;display:block;}
        .ab-plan-features{list-style:none;padding:0;margin:20px 0;display:flex;flex-direction:column;gap:10px;font-size:.9rem;}
        .ab-plan-features li{display:flex;align-items:center;gap:8px;color:var(--ink2);}
        .ab-plan-features li:before{content:"✓";color:var(--green);font-weight:bold;}
        .ab-plan-cta{margin-top:auto;width:100%;text-align:center;}

        /* TESTIMONIALS */
        .ab-testimonials{margin:56px 0;}
        .ab-test-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:24px;}
        .ab-test-card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:24px;box-shadow:0 10px 30px rgba(15,23,42,.02);}
        .ab-test-stars{color:#ffc83d;letter-spacing:1px;display:block;margin-bottom:12px;font-size:.9rem;}
        .ab-test-card p{font-size:.93rem;color:var(--ink2);font-style:italic;margin-bottom:16px;}
        .ab-test-user{display:flex;align-items:center;gap:12px;}
        .ab-test-avatar{width:36px;height:36px;border-radius:50%;background:var(--grad);color:#fff;
          display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.9rem;font-family:'Outfit',sans-serif;}
        .ab-test-meta b{font-size:.88rem;color:var(--ink);display:block;}
        .ab-test-meta span{font-size:.78rem;color:var(--mut);display:block;}

        /* FAQ */
        .ab-faq{display:flex;flex-direction:column;gap:12px;margin-top:24px;}
        .ab-faq details{background:#fff;border:1px solid var(--line);border-radius:14px;padding:4px 20px;}
        .ab-faq summary{cursor:pointer;font-weight:700;font-family:'Outfit',sans-serif;padding:16px 0;display:flex;justify-content:space-between;color:var(--ink);}
        .ab-faq summary::-webkit-details-marker{display:none;}
        .ab-faq summary:after{content:"+";color:var(--or);font-weight:bold;font-size:1.15rem;}
        .ab-faq details[open] summary:after{content:"–";}
        .ab-faq p{padding:0 0 16px;margin:0;color:var(--ink2);font-size:.95rem;}

        /* CITIES CROSS-LINKING */
        .ab-cities{display:flex;flex-wrap:wrap;gap:10px;margin-top:16px;}
        .ab-city-link{background:#fff;border:1px solid var(--line);padding:8px 16px;border-radius:100px;
          font-size:.85rem;color:var(--ink2) !important;font-weight:600;transition:all .15s ease;}
        .ab-city-link:hover{border-color:var(--or);color:var(--or) !important;text-decoration:none;}

        /* FINAL CTA */
        .ab-final{background:linear-gradient(135deg,#0f172a,#1e293b);border-radius:24px;padding:48px 32px;text-align:center;color:#fff;margin:60px 0 20px;}
        .ab-final h2{color:#fff;font-size:2rem;margin:0 0 10px;}
        .ab-final p{color:#94a3b8;max-width:550px;margin:0 auto 24px;font-size:1.02rem;}

        @media(max-width:960px){
          .ab-hero{grid-template-columns:1fr;text-align:center;padding:40px 24px;}
          .ab-hero p{max-width:100%;margin:0 auto 16px;}
          .ab-hero img{max-width:80%;margin:0 auto;}
          .ab-plans{grid-template-columns:1fr;max-width:450px;margin:30px auto;}
          .ab-trust{grid-template-columns:repeat(2,1fr);}
          .ab-test-grid{grid-template-columns:1fr;}
        }
        @media(max-width:640px){
          .ab-hero img{max-width:100%;}
          .ab-trust{grid-template-columns:1fr;}
        }
      `}</style>

      <Header />
      <main style={{ backgroundColor: '#f8fafc', padding: '2rem 0 4rem' }}>
        <div className="ab">

          {/* ── 1. HERO ── */}
          <section className="ab-hero">
            <div>
              <div className="ab-rating">
                <span className="ab-stars">★★★★★</span> 4,9/5 — 3 000 avis clients
              </div>
              <h1>IPTV Anyama : <span className="grad">22 840 Chaînes en 4K</span>, Sans Coupure et Sécurisé (2026)</h1>
              <p>Profitez du meilleur de la télévision par internet à Anyama. Toutes vos chaînes de sport et films préférés en qualité Ultra HD. Activation rapide 100% à distance.</p>
              <div className="ab-chips">
                <span className="ab-chip">Wave Accepté</span>
                <span className="ab-chip">Orange Money</span>
                <span className="ab-chip">Fibre &amp; 4G Stable</span>
              </div>
              <div className="ab-cta-row">
                <a href={`${WHATSAPP_URL}&text=Bonjour, je veux un essai gratuit IPTV Anyama`} target="_blank" rel="noopener noreferrer" className="ab-btn ab-btn-primary">⚡ Essai Gratuit 24h</a>
                <a href={`${WHATSAPP_URL}&text=Bonjour, je veux commander un forfait IPTV Anyama`} target="_blank" rel="noopener noreferrer" className="ab-btn ab-btn-wa">💬 Commander via WhatsApp</a>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image src="/cities/anyama.jpg" alt="IPTV Anyama — Ville d'Anyama et sa gare" width={500} height={333} priority style={{ objectFit: 'cover' }} />
            </div>
          </section>

          {/* ── 2. TRUST SEGMENT ── */}
          <section className="ab-trust">
            <div className="ab-trust-card"><span>22 840</span><p>Chaînes TV</p></div>
            <div className="ab-trust-card"><span>124 580</span><p>Films &amp; Séries VOD</p></div>
            <div className="ab-trust-card"><span>3 420 +</span><p>Clients Satisfaits</p></div>
            <div className="ab-trust-card"><span>99,98 %</span><p>Serveur Stable</p></div>
          </section>

          {/* ── 3. INTRO ── */}
          <section>
            <span className="eyebrow">IPTV Anyama</span>
            <h2>Le leader du streaming IPTV à Anyama et environs</h2>
            <p>Anyama, la célèbre cité de la cola, connaît une transition majeure dans la manière de consommer le divertissement télévisuel. Fini les soucis d&apos;antennes paraboliques perturbées par les intempéries tropicales. Grâce aux connexions fibre et aux réseaux 4G d&apos;Orange, MTN et Moov, la technologie IPTV vous offre une qualité d&apos;image stable en haute définition et en 4K.</p>
            <p>Notre service **Stream-Stable™** avec technologie anti-freeze avancée assure une fluidité totale lors de la retransmission des événements sportifs les plus attendus de l&apos;année, y compris l&apos;intégralité de la Coupe du Monde 2026. Du quartier Christiankoi à Belle-Ville, en passant par le Résidentiel et Schneider, nos clients profitent d&apos;une expérience de visionnage haut de gamme sans aucun ralentissement.</p>
          </section>

          {/* ── 4. CHANNELS BLOCK ── */}
          <section>
            <span className="eyebrow">Les Chaînes</span>
            <h2>Vos bouquets de télévision préférés en un seul endroit</h2>
            <p>Notre abonnement IPTV Anyama regroupe le meilleur du divertissement mondial et africain :</p>
            <ul>
              <li><strong>Chaînes Ivoiriennes en Direct :</strong> Retrouvez vos émissions favorites sur RTI 1, RTI 2, La 3, NCI, Life TV et A+ Ivoire.</li>
              <li><strong>Sports en Ultra HD :</strong> Suivez les plus grands championnats européens et internationaux sur beIN Sports, Canal+ Sport, RMC Sport et Eurosport.</li>
              <li><strong>Divertissement &amp; Cinéma :</strong> Des milliers de chaînes de films, séries, documentaires et programmes jeunesse en français et en anglais.</li>
              <li><strong>VOD Illimitée :</strong> Accès exclusif à une bibliothèque mise à jour chaque semaine avec 124 580 films et séries en français.</li>
            </ul>
          </section>

          {/* ── 5. PRICING CARDS ── */}
          <section id="ab-tarifs">
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <span className="eyebrow">Nos Tarifs</span>
              <h2>Des forfaits adaptés à votre budget</h2>
              <p style={{ color: '#6B7280' }}>Paiement sécurisé par Wave, Orange Money ou MTN MoMo. Pas de frais cachés.</p>
            </div>
            <div className="ab-plans">
              <div className="ab-plan-card">
                <h3>Offre CDM — 2 mois</h3>
                <span className="ab-plan-promo">-24% · Forfait Mondial 2026</span>
                <div className="ab-plan-price">
                  <span className="unit">FCFA</span>
                  <span className="val">5 900</span>
                </div>
                <span className="ab-plan-orig">au lieu de 7 800 FCFA</span>
                <ul className="ab-plan-features">
                  <li>🏆 Coupe du Monde 2026 incluse</li>
                  <li>📡 +22 840 chaînes HD/4K</li>
                  <li>🎥 VOD Films &amp; Séries 124 580</li>
                  <li>⚡ Activation rapide en 5 min</li>
                </ul>
                <div className="ab-plan-cta">
                  <a href={`${WHATSAPP_URL}&text=Bonjour, je veux commander le forfait 2 mois à 5900 FCFA pour Anyama`} target="_blank" rel="noopener noreferrer" className="ab-btn ab-btn-primary" style={{ width: '100%' }}>Commander via WhatsApp</a>
                </div>
              </div>

              <div className="ab-plan-card featured">
                <span className="badge">LE PLUS POPULAIRE</span>
                <h3>Offre CDM — 3 mois</h3>
                <span className="ab-plan-promo">-32% · Idéal pour toute la famille</span>
                <div className="ab-plan-price">
                  <span className="unit">FCFA</span>
                  <span className="val">7 900</span>
                </div>
                <span className="ab-plan-orig">au lieu de 11 700 FCFA</span>
                <ul className="ab-plan-features">
                  <li>🏆 Coupe du Monde 2026 incluse</li>
                  <li>📡 +22 840 chaînes HD/4K</li>
                  <li>🎥 VOD Films &amp; Séries 124 580</li>
                  <li>💬 Support client prioritaire 24h/7</li>
                  <li>⚡ Activation rapide en 5 min</li>
                </ul>
                <div className="ab-plan-cta">
                  <a href={`${WHATSAPP_URL}&text=Bonjour, je veux commander le forfait 3 mois à 7900 FCFA pour Anyama`} target="_blank" rel="noopener noreferrer" className="ab-btn ab-btn-primary" style={{ width: '100%' }}>Commander via WhatsApp</a>
                </div>
              </div>

              <div className="ab-plan-card">
                <h3>Offre Annuelle — 12 mois + 1</h3>
                <span className="ab-plan-promo">-30% · Meilleur rapport qualité/prix</span>
                <div className="ab-plan-price">
                  <span className="unit">FCFA</span>
                  <span className="val">24 900</span>
                </div>
                <span className="ab-plan-orig">au lieu de 35 900 FCFA</span>
                <ul className="ab-plan-features">
                  <li>🎁 1 mois d&apos;abonnement offert</li>
                  <li>📡 +22 840 chaînes HD/4K</li>
                  <li>🎥 VOD Films &amp; Séries 124 580</li>
                  <li>👑 Support VIP WhatsApp 24/7</li>
                  <li>⚡ Activation rapide en 5 min</li>
                </ul>
                <div className="ab-plan-cta">
                  <a href={`${WHATSAPP_URL}&text=Bonjour, je veux commander le forfait annuel à 24900 FCFA pour Anyama`} target="_blank" rel="noopener noreferrer" className="ab-btn ab-btn-primary" style={{ width: '100%' }}>Commander via WhatsApp</a>
                </div>
              </div>
            </div>
          </section>

          {/* ── 6. HOW TO PAY ── */}
          <section>
            <span className="eyebrow">Comment Payer</span>
            <h2>Paiement mobile simple et 100% sécurisé</h2>
            <p>Pour s&apos;adapter aux besoins de nos clients à Anyama, nous acceptons les principaux réseaux de paiement mobile de Côte d&apos;Ivoire :</p>
            <ol>
              <li><strong>Wave :</strong> Le moyen le plus rapide, sans frais de transfert.</li>
              <li><strong>Orange Money :</strong> Idéal pour les abonnés Orange CI.</li>
              <li><strong>MTN Mobile Money &amp; Moov Money :</strong> Disponibles sur simple demande via WhatsApp.</li>
            </ol>
            <p>Dès votre transfert effectué et validé par notre équipe support, vous recevez vos codes de connexion en moins de 5 minutes avec le guide d&apos;installation adapté à votre téléviseur ou smartphone.</p>
          </section>

          {/* ── 7. TESTIMONIALS ── */}
          <section className="ab-testimonials">
            <span className="eyebrow">Témoignages</span>
            <h2>Ce que disent nos clients à Anyama</h2>
            <div className="ab-test-grid">
              <div className="ab-test-card">
                <span className="ab-test-stars">★★★★★</span>
                <p>&ldquo;Le streaming est super stable sur ma box Android ici à Christiankoi. J&apos;ai pu payer par MTN MoMo sur WhatsApp, et le technicien m&apos;a aidé à tout configurer à distance en 5 minutes. Un service client au top !&rdquo;</p>
                <div className="ab-test-user">
                  <div className="ab-test-avatar">D</div>
                  <div className="ab-test-meta">
                    <b>Diakité O.</b>
                    <span>Christiankoi, Anyama</span>
                  </div>
                </div>
              </div>

              <div className="ab-test-card">
                <span className="ab-test-stars">★★★★★</span>
                <p>&ldquo;L&apos;offre de 3 mois est vraiment pas chère comparée aux abonnements satellites traditionnels en Côte d&apos;Ivoire. Les enfants profitent des dessins animés en HD et moi du foot en 4K sans aucune coupure.&rdquo;</p>
                <div className="ab-test-user">
                  <div className="ab-test-avatar">C</div>
                  <div className="ab-test-meta">
                    <b>Coulibaly S.</b>
                    <span>Résidentiel, Anyama</span>
                  </div>
                </div>
              </div>

              <div className="ab-test-card">
                <span className="ab-test-stars">★★★★★</span>
                <p>&ldquo;Paiement Wave super pratique et sans frais. L&apos;activation a pris moins de 3 minutes. Je regarde RTI 1 et Canal+ en qualité parfaite depuis Belle-Ville. Je recommande vivement IPTV Ivoire.&rdquo;</p>
                <div className="ab-test-user">
                  <div className="ab-test-avatar">K</div>
                  <div className="ab-test-meta">
                    <b>Konan F.</b>
                    <span>Belle-Ville, Anyama</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── 8. FAQ ── */}
          <section id="ab-faq">
            <span className="eyebrow">FAQ</span>
            <h2>Questions fréquentes — IPTV Anyama</h2>
            <div className="ab-faq">
              {faqs.map(f => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* ── 9. OTHER CITIES ── */}
          <section>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>IPTV disponible dans toute la Côte d&apos;Ivoire</h2>
            <p style={{ color: '#6B7280' }}>Notre service couvre toutes les villes du pays — cliquez sur votre ville :</p>
            <div className="ab-cities">
              {[
                { name: 'IPTV Abidjan', href: '/iptv-abidjan' },
                { name: 'IPTV Bouaké', href: '/iptv-bouake' },
                { name: 'IPTV Yamoussoukro', href: '/iptv-yamoussoukro' },
                { name: 'IPTV San Pedro', href: '/iptv-san-pedro' },
                { name: 'IPTV Korhogo', href: '/iptv-korhogo' },
                { name: 'IPTV Daloa', href: '/iptv-daloa' },
                { name: 'IPTV Man', href: '/iptv-man' },
                { name: 'IPTV Gagnoa', href: '/iptv-gagnoa' },
                { name: 'IPTV Divo', href: '/iptv-divo' },
                { name: 'IPTV Anyama', href: '/iptv-anyama' },
                { name: 'IPTV Abengourou', href: '/iptv-abengourou' },
                { name: 'IPTV Grand-Bassam', href: '/iptv-grand-bassam' },
              ].map(c => <Link key={c.name} href={c.href} className="ab-city-link">📍 {c.name}</Link>)}
            </div>
          </section>

          {/* ── 10. FINAL CTA ── */}
          <section className="ab-final">
            <h2>Prêt à regarder l&apos;IPTV à Anyama ?</h2>
            <p>Activation en 5 minutes via WhatsApp. Paiement Wave & Orange Money. 22 840 chaînes dès 5 900 FCFA.</p>
            <div className="ab-cta-row" style={{ justifyContent: 'center' }}>
              <a href={`${WHATSAPP_URL}&text=Bonjour, je veux un abonnement IPTV à Anyama`} target="_blank" rel="noopener noreferrer" id="anyama-final-cta" className="ab-btn ab-btn-wa">💬 Activer mon IPTV à Anyama</a>
              <Link href="/abonnement-iptv-cote-divoire" className="ab-btn" style={{ background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.25)', color: '#fff' }}>Voir tous les abonnements →</Link>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
