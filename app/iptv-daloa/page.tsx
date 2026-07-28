import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { WHATSAPP_URL } from '@/lib/seo'
import { getFAQSchema, getBreadcrumbSchema, getProductSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: "IPTV Daloa 2026 — 4K dès 5 900 FCFA",
  description: "IPTV Daloa : +22 840 chaînes en 4K. Paiement sécurisé Wave & Orange Money, prix en FCFA, activation en 5 min. Fonctionne à Tazibouo, Gbeuliville, Marais.",
  keywords: ['iptv daloa', 'abonnement iptv daloa', 'fournisseur iptv daloa', 'iptv tazibouo daloa', 'iptv gbeuliville', 'installateur iptv daloa', 'iptv 4k daloa'],
  alternates: { canonical: 'https://iptvivoire.com/iptv-daloa' },
  openGraph: {
    title: "IPTV Daloa 2026 — 22 840 Chaînes 4K, Wave & Orange Money",
    description: "Le meilleur service IPTV à Daloa. Paiement sécurisé Wave & Orange Money, activation rapide. Tazibouo, Gbeuliville, Marais, Lobia et tous les quartiers.",
    url: 'https://iptvivoire.com/iptv-daloa',
    images: [{ url: 'https://iptvivoire.com/cities/daloa.jpg', width: 1200, height: 630, alt: "IPTV Daloa — Ville de Daloa" }],
  },
}

const faqs = [
  { q: "L'IPTV fonctionne-t-il bien à Daloa avec la fibre et la 4G ?", a: "Oui, notre service est optimisé pour les réseaux 4G/5G Orange CI, MTN et Moov à Daloa. Une vitesse de 10 Mbps suffit pour la HD et 25 Mbps pour la 4K. Des secteurs comme Tazibouo, Lobia, Huberson et Orly bénéficient d'une excellente réception." },
  { q: "Comment payer mon IPTV à Daloa ?", a: "Contactez-nous sur WhatsApp, indiquez le forfait de votre choix, puis réglez en quelques secondes par Wave, Orange Money ou MTN MoMo. Votre compte est activé sous 5 minutes." },
  { q: "L'IPTV est-il disponible dans tous les quartiers de Daloa ?", a: "Oui, notre couverture s'étend sur tout Daloa : Tazibouo, Gbeuliville, Marais, Lobia, Garage, Huberson, Orly, Kennedy, etc." },
  { q: "Puis-je regarder RTI 1 et RTI 2 depuis Daloa ?", a: "Absolument. Notre abonnement inclut toutes les chaînes locales de Côte d'Ivoire (RTI 1, RTI 2, La 3, NCI, Life TV, A+ Ivoire) ainsi que les bouquets internationaux comme beIN Sports et Canal+." },
  { q: "Sur quels appareils puis-je utiliser mon IPTV à Daloa ?", a: "Le service est compatible avec les Smart TV (Samsung, LG, Sony, Hisense), Box Android, smartphones (Android & iOS), tablettes et ordinateurs. Nous vous guidons pas à pas pour l'installation sur WhatsApp." },
  { q: "Quel abonnement IPTV choisir à Daloa pour la Coupe du Monde ?", a: "L'offre 2 mois à 5 900 FCFA couvre toute la durée du tournoi (jusqu'au 19 juillet). Pour un meilleur prix à long terme, l'offre 3 mois à 7 900 FCFA est la plus populaire à Daloa (soit 2 633 FCFA/mois)." },
  { q: "Quelle connexion internet est requise à Daloa ?", a: "Une simple connexion internet stable (Fibre, Box 4G ou Mobile) de 10 Mbps suffit pour de la HD fluide, et 25 Mbps pour le flux 4K." },
]

export default function IPTVDaloaPage() {
  const faqSchema = getFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://iptvivoire.com' },
    { name: 'IPTV Daloa', url: 'https://iptvivoire.com/iptv-daloa' },
  ])
  const productSchema = getProductSchema({
    name: 'IPTV Daloa — Abonnement 3 mois',
    price: '7900',
    description: "IPTV Daloa 3 mois à 7 900 FCFA. 22 840 chaînes HD/4K, VOD 124 580 films. Wave & Orange Money. Activation en 5 min.",
  })
  const localBizSchema = {
    '@context': 'https://schema.org', '@type': 'LocalBusiness',
    name: 'IPTV Ivoire — Daloa', url: 'https://iptvivoire.com/iptv-daloa',
    image: 'https://iptvivoire.com/cities/daloa.jpg',
    priceRange: '5900-24900 FCFA', currenciesAccepted: 'XOF',
    paymentAccepted: 'Orange Money, Wave, MTN MoMo, Moov Money',
    areaServed: { '@type': 'City', name: 'Daloa', containedInPlace: { '@type': 'Country', name: "Côte d'Ivoire" } },
    address: { '@type': 'PostalAddress', addressCountry: 'CI', addressLocality: 'Daloa' },
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
        .ab-hero-note{margin-top:14px;font-size:.84rem;color:#9fb0c8;display:flex;align-items:center;gap:8px;}

        /* TRUST BAND */
        .ab-trust{background:#fff;border:1px solid var(--line);border-radius:20px;padding:8px;
          box-shadow:0 14px 40px rgba(15,23,42,.07);margin:18px 0;position:relative;}
        .ab-trust:before{content:"";position:absolute;top:0;left:26px;right:26px;height:4px;border-radius:0 0 6px 6px;
          background:linear-gradient(90deg,#F97316 0 33%,#fff 33% 66%,#138a3a 66% 100%);}
        .ab-trust-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;}
        .ab-trust-cell{display:flex;align-items:center;gap:12px;padding:18px 14px;border-radius:14px;transition:background .15s;}
        .ab-trust-cell:hover{background:#f8fafc;}
        .ab-trust-ico{flex:0 0 42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;background:#fff7ed;}
        .ab-trust-cell b{display:block;font-size:.96rem;color:var(--ink);font-family:'Outfit',sans-serif;}
        .ab-trust-cell span{font-size:.8rem;color:var(--mut);}

        /* STATS */
        .ab-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:24px 0 8px;}
        .ab-stat{background:#fff;border:1px solid var(--line);border-radius:18px;padding:20px 14px;text-align:center;box-shadow:0 6px 20px rgba(15,23,42,.05);}
        .ab-stat b{display:block;font-size:1.7rem;font-weight:800;font-family:'Outfit',sans-serif;
          background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;}
        .ab-stat span{font-size:.8rem;color:var(--mut);font-weight:600;}

        /* TLDR */
        .ab-tldr{background:linear-gradient(135deg,#fff7ed,#fef3c7);border:1px solid #fed7aa;border-left:5px solid var(--or);
          border-radius:16px;padding:26px 30px;margin:30px 0;}
        .ab-tldr h3{margin-top:0;color:var(--or2);}

        /* CALLOUT */
        .ab-callout{background:linear-gradient(135deg,#ecfdf5,#f0fdf4);border:1px solid #bbf7d0;border-radius:14px;padding:20px 26px;margin:24px 0;}
        .ab-callout.warn{background:linear-gradient(135deg,#fef9c3,#fefce8);border-color:#fde68a;}
        .ab-callout b{color:var(--green);}

        /* TOC */
        .ab-toc{background:#fff;border:1px solid var(--line);border-radius:18px;padding:26px 30px;margin:30px 0;box-shadow:0 6px 20px rgba(15,23,42,.04);}
        .ab-toc h3{margin-top:0;color:var(--or);}
        .ab-toc ol{margin:0;columns:2;column-gap:32px;padding-left:20px;}
        .ab-toc a{color:var(--or);}

        /* CARDS 2-col */
        .ab-cards{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin:24px 0;}
        .ab-card{position:relative;background:#fff;border:1px solid var(--line);border-radius:18px;padding:24px;
          box-shadow:0 6px 20px rgba(15,23,42,.05);transition:transform .18s,box-shadow .18s;overflow:hidden;}
        .ab-card:before{content:"";position:absolute;top:0;left:0;right:0;height:4px;background:var(--grad);transform:scaleX(0);transform-origin:left;transition:transform .25s;}
        .ab-card:hover{transform:translateY(-4px);box-shadow:0 18px 44px rgba(15,23,42,.10);}
        .ab-card:hover:before{transform:scaleX(1);}
        .ab-card .ic{font-size:1.7rem;margin-bottom:8px;display:block;}
        .ab-card h3{margin:0 0 8px;font-size:1.1rem;}
        .ab-card p{margin:0;color:var(--ink2);font-size:.97rem;}

        /* VS PANELS */
        .ab-vs{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin:26px 0;}
        .ab-panel{border-radius:20px;padding:28px;border:1px solid var(--line);}
        .ab-panel h3{margin-top:0;display:flex;align-items:center;gap:10px;}
        .ab-danger{background:linear-gradient(160deg,#fff1f2,#fff5f5);border-color:#fecdd3;}
        .ab-danger h3{color:var(--red);}
        .ab-safe{background:linear-gradient(160deg,#f0fdf4,#ecfdf5);border-color:#bbf7d0;}
        .ab-safe h3{color:var(--green);}
        .ab-panel ul{list-style:none;padding:0;margin:0;}
        .ab-panel li{padding:9px 0 9px 28px;position:relative;font-size:.97rem;border-bottom:1px dashed rgba(0,0,0,.07);}
        .ab-panel li:last-child{border-bottom:none;}
        .ab-danger li:before{content:"✕";position:absolute;left:0;color:var(--red);font-weight:800;}
        .ab-safe li:before{content:"✓";position:absolute;left:0;color:var(--green);font-weight:800;}

        /* STEPS */
        .ab-steps{counter-reset:step;margin:24px 0;}
        .ab-step{position:relative;background:#fff;border:1px solid var(--line);border-radius:16px;padding:22px 26px 22px 76px;margin-bottom:14px;box-shadow:0 4px 16px rgba(15,23,42,.04);}
        .ab-step:before{counter-increment:step;content:counter(step);position:absolute;left:20px;top:20px;width:40px;height:40px;border-radius:12px;
          background:var(--grad);color:#fff;font-weight:800;font-family:'Outfit',sans-serif;display:flex;align-items:center;justify-content:center;font-size:1.1rem;}
        .ab-step h3{margin:0 0 6px;font-size:1.1rem;}
        .ab-step p{margin:0;color:var(--ink2);}

        /* TABLE */
        .ab-tw{overflow-x:auto;margin:24px 0;border-radius:18px;border:1px solid var(--line);box-shadow:0 8px 26px rgba(15,23,42,.06);}
        .ab-table{width:100%;border-collapse:collapse;background:#fff;min-width:520px;}
        .ab-table th,.ab-table td{padding:14px 18px;text-align:left;border-bottom:1px solid #f1f5f9;font-size:.95rem;}
        .ab-table thead th{font-family:'Outfit',sans-serif;font-size:.93rem;font-weight:800;}
        .ab-table thead th:nth-child(2){background:var(--grad);color:#fff;}
        .ab-table thead th:nth-child(3){background:#fff1f2;color:var(--red);}
        .ab-table thead th:first-child{background:#0f172a;color:#fff;}
        .ab-table td:nth-child(2){background:#fffaf5;font-weight:600;}
        .ab-table tr:last-child td{border-bottom:none;}
        .ab-y{color:var(--green);font-weight:700;}
        .ab-n{color:var(--red);font-weight:700;}

        /* TESTIMONIALS */
        .ab-revs{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin:24px 0;}
        .ab-rev{background:#fff;border:1px solid var(--line);border-radius:18px;padding:24px;box-shadow:0 6px 20px rgba(15,23,42,.05);}
        .ab-rev .ab-stars{font-size:.93rem;margin-bottom:10px;display:block;}
        .ab-rev p{font-size:.95rem;color:var(--ink2);font-style:italic;}
        .ab-rev-who{display:flex;align-items:center;gap:12px;margin-top:14px;}
        .ab-av{width:42px;height:42px;border-radius:50%;background:var(--grad);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-family:'Outfit',sans-serif;}
        .ab-rev-who b{display:block;font-size:.93rem;}
        .ab-rev-who span{font-size:.8rem;color:var(--mut);}

        /* PRICING */
        .ab-pricing{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin:28px 0 10px;align-items:start;}
        .ab-plan{background:#fff;border:1.5px solid var(--line);border-radius:22px;padding:28px 22px;text-align:center;box-shadow:0 8px 26px rgba(15,23,42,.06);}
        .ab-plan.feat{border:2px solid transparent;background:linear-gradient(#fff,#fff) padding-box,var(--grad) border-box;position:relative;box-shadow:0 20px 50px rgba(249,115,22,.20);transform:translateY(-6px);}
        .ab-plan.feat:before{content:"★ LE PLUS CHOISI";position:absolute;top:-13px;left:50%;transform:translateX(-50%);background:var(--grad);color:#fff;font-size:.7rem;font-weight:800;padding:6px 16px;border-radius:100px;letter-spacing:.6px;white-space:nowrap;}
        .ab-plan h3{margin:0 0 4px;font-size:1.25rem;}
        .ab-plan-price{font-size:2.2rem;font-weight:900;font-family:'Outfit',sans-serif;color:var(--ink);margin:8px 0 2px;}
        .ab-plan-orig{color:#9CA3AF;font-size:.85rem;text-decoration:line-through;}
        .ab-plan-promo{color:var(--green);font-weight:700;font-size:.82rem;margin-bottom:16px;}
        .ab-plan ul{list-style:none;padding:0;margin:16px 0;text-align:left;display:flex;flex-direction:column;gap:8px;}
        .ab-plan li{font-size:.88rem;color:var(--ink2);display:flex;align-items:flex-start;gap:6px;}
        .ab-plan li:before{content:"✓";color:var(--green);font-weight:800;flex-shrink:0;}
        .ab-wa-btn{display:flex;align-items:center;justify-content:center;gap:9px;margin-top:16px;padding:13px;border-radius:100px;
          background:var(--wa);color:#fff !important;font-weight:800;font-size:.95rem;text-decoration:none !important;box-shadow:0 8px 24px rgba(37,211,102,.3);}
        .ab-wa-btn:hover{opacity:.92;transform:translateY(-1px);}

        /* GUARANTEE SEAL */
        .ab-seal{display:flex;align-items:center;gap:22px;background:linear-gradient(135deg,#0f172a,#1a0e00);color:#fff;border-radius:22px;padding:28px 32px;margin:24px 0;}
        .ab-seal-badge{flex:0 0 88px;height:88px;border-radius:50%;background:var(--grad);
          display:flex;align-items:center;justify-content:center;font-family:'Outfit',sans-serif;font-weight:800;text-align:center;line-height:1.05;font-size:.78rem;box-shadow:0 0 0 6px rgba(255,255,255,.08);color:#fff;}
        .ab-seal h3{color:#fff;margin:0 0 6px;}
        .ab-seal p{margin:0;color:#c7d0e0;font-size:.97rem;}

        /* FAQ */
        .ab-faq details{background:#fff;border:1px solid var(--line);border-radius:14px;padding:4px 24px;margin-bottom:10px;box-shadow:0 4px 14px rgba(15,23,42,.04);}
        .ab-faq summary{cursor:pointer;font-weight:700;font-family:'Outfit',sans-serif;padding:16px 0;font-size:1.02rem;list-style:none;display:flex;justify-content:space-between;gap:14px;}
        .ab-faq summary::-webkit-details-marker{display:none;}
        .ab-faq summary:after{content:"+";color:var(--or);font-weight:800;font-size:1.3rem;line-height:1;}
        .ab-faq details[open] summary:after{content:"–";}
        .ab-faq p{padding:0 0 18px;margin:0;color:var(--ink2);}

        /* FINAL CTA */
        .ab-final{position:relative;overflow:hidden;text-align:center;border-radius:24px;padding:54px 40px;margin:44px 0 24px;color:#fff;
          background:radial-gradient(800px 400px at 50% -20%,rgba(249,115,22,.32),transparent 60%),linear-gradient(160deg,#0b1020,#1a0a00);}
        .ab-final h2{color:#fff;font-size:2rem;margin-top:0;}
        .ab-final p{color:#c7d0e0;max-width:600px;margin:0 auto 26px;}

        /* STICKY MOBILE */
        .ab-sticky{display:none;}

        /* CITIES LINKS */
        .ab-cities{display:flex;flex-wrap:wrap;gap:10px;margin:20px 0;}
        .ab-city-link{background:#f3f4f6;border:1px solid #e5e7eb;color:#374151;padding:7px 16px;border-radius:999px;font-size:.875rem;font-weight:700;font-family:'Outfit',sans-serif;text-decoration:none !important;}
        .ab-city-link:hover{background:#fff7ed;border-color:#F97316;color:#F97316;}

        @media(max-width:860px){
          .ab{font-size:16px;}
          .ab-hero{grid-template-columns:1fr;padding:30px 20px;border-radius:16px;}
          .ab-hero h1{font-size:1.9rem;}
          .ab-hero img{display:none;}
          .ab h2{font-size:1.6rem;}
          .ab-trust-grid,.ab-stats{grid-template-columns:repeat(2,1fr);}
          .ab-cards,.ab-vs,.ab-revs,.ab-pricing{grid-template-columns:1fr;}
          .ab-plan.feat{transform:none;}
          .ab-toc ol{columns:1;}
          .ab-seal{flex-direction:column;text-align:center;}
          .ab-sticky{display:flex;position:fixed;left:0;right:0;bottom:0;z-index:9999;gap:8px;padding:10px 12px;
            background:rgba(255,255,255,.96);backdrop-filter:blur(8px);border-top:1px solid var(--line);box-shadow:0 -6px 20px rgba(15,23,42,.10);}
          .ab-sticky a{flex:1;padding:13px;border-radius:100px;text-align:center;font-weight:800;font-size:.9rem;text-decoration:none;}
          .ab-sticky .s-buy{background:var(--grad);color:#fff !important;}
          .ab-sticky .s-wa{background:var(--wa);color:#fff !important;}
        }
      `}</style>

      <Header />
      <main style={{ paddingBottom: '2rem' }}>
        <div className="ab">

          {/* ── 1. HERO ── */}
          <section className="ab-hero">
            <div>
              <div className="ab-rating">
                <span className="ab-stars">★★★★★</span> 4,9/5 — Service N°1 à Daloa
              </div>
              <h1>IPTV Daloa : <span className="grad">22 840 Chaînes en 4K</span>, Sans Coupure et Sécurisé (2026)</h1>
              <p>Marre des coupures en plein match ? Découvrez l&apos;<strong>IPTV Daloa</strong> de référence : paiement sécurisé Wave & Orange Money, activation immédiate et support WhatsApp 24/7.</p>
              <div className="ab-chips">
                <span className="ab-chip">⚡ Stream-Stable™ (Anti-Freeze)</span>
                <span className="ab-chip">📺 4K UHD</span>
                <span className="ab-chip">💚 Wave</span>
                <span className="ab-chip">🟠 Orange Money</span>
                <span className="ab-chip">🏆 Coupe du Monde 2026</span>
              </div>
              <div className="ab-cta-row">
                <a href="#ab-tarifs" className="ab-btn ab-btn-primary">Voir les prix en FCFA →</a>
                <a href={`${WHATSAPP_URL}&text=Bonjour, je veux un abonnement IPTV à Daloa`} className="ab-btn ab-btn-wa" target="_blank" rel="noopener noreferrer">💬 Commander sur WhatsApp</a>
              </div>
              <div className="ab-hero-note">🔒 Paiement sécurisé Wave & Orange Money — activation en 5 minutes.</div>
            </div>
            <div style={{ position: 'relative' }}>
              <Image src="/cities/daloa.jpg" alt="IPTV Daloa — Ville de Daloa" width={540} height={360} style={{ width: '100%', borderRadius: '20px', boxShadow: '0 30px 70px rgba(0,0,0,.5)' }} priority />
            </div>
          </section>

          {/* ── 2. TRUST BAND ── */}
          <section className="ab-trust">
            <div className="ab-trust-grid">
              <div className="ab-trust-cell"><div className="ab-trust-ico">🟢</div><div><b>Wave & Orange Money</b><span>Paiement local sécurisé</span></div></div>
              <div className="ab-trust-cell"><div className="ab-trust-ico">⚡</div><div><b>Activation en 5 min</b><span>Codes reçus sur WhatsApp</span></div></div>
              <div className="ab-trust-cell"><div className="ab-trust-ico">👥</div><div><b>3 420 clients CI</b><span>À Daloa et partout en CI</span></div></div>
              <div className="ab-trust-cell"><div className="ab-trust-ico">💬</div><div><b>Support 24/7</b><span>En français sur WhatsApp</span></div></div>
            </div>
          </section>

          {/* ── 3. STATS ── */}
          <div className="ab-stats">
            <div className="ab-stat"><b>22 840</b><span>Chaînes TV en direct</span></div>
            <div className="ab-stat"><b>124 580</b><span>Films & séries VOD</span></div>
            <div className="ab-stat"><b>99,98 %</b><span>Disponibilité serveur</span></div>
            <div className="ab-stat"><b>4,9/5</b><span>Note de nos clients</span></div>
          </div>

          {/* ── 4. TLDR ── */}
          <section>
            <div className="ab-tldr">
              <h3>📌 L&apos;essentiel en bref</h3>
              <ul>
                <li>L&apos;<strong>IPTV à Daloa</strong> donne accès à 22 840 chaînes et 124 580 films via internet, sans parabole.</li>
                <li>Paiement sécurisé par <strong>Wave</strong>, <strong>Orange Money</strong> ou MTN MoMo — vos codes arrivent sous 5 minutes.</li>
                <li>Tarifs clairs en <strong>FCFA</strong> : dès 5 900 FCFA pour 2 mois, sans frais cachés.</li>
                <li>Compatible Smart TV, Android Box, téléphones et ordinateurs — installation gratuite guidée sur WhatsApp.</li>
                <li>Disponible dans <strong>tous les quartiers de Daloa</strong> : Tazibouo, Gbeuliville, Marais, Lobia, Orly, etc.</li>
              </ul>
            </div>
            <p>Daloa, grand carrefour commercial du Centre-Ouest de la Côte d&apos;Ivoire et chef-lieu de la région du Haut-Sassandra, jouit aujourd&apos;hui d&apos;un réseau internet mobile et fixe performant. Avec l&apos;extension de la 4G d&apos;Orange, MTN et Moov, la télévision par internet s&apos;impose comme la solution moderne pour s&apos;abonner sans contraintes. Notre abonnement <strong>IPTV Daloa</strong> regroupe toutes les chaînes sportives, cinématographiques et locales au meilleur prix du marché, avec une simplicité d&apos;utilisation absolue.</p>
            <p>Découvrez ci-dessous comment configurer votre abonnement, éviter les offres frauduleuses et commander votre forfait en toute sécurité.</p>
          </section>

          {/* ── 5. TOC ── */}
          <section>
            <div className="ab-toc">
              <h3>📖 Sommaire</h3>
              <ol>
                <li><a href="#ab-quoi">Qu&apos;est-ce que l&apos;IPTV à Daloa ?</a></li>
                <li><a href="#ab-pourquoi">Pourquoi l&apos;IPTV séduit à Daloa</a></li>
                <li><a href="#ab-contenus">Que pouvez-vous regarder ?</a></li>
                <li><a href="#ab-arnaque">Attention aux arnaques IPTV</a></li>
                <li><a href="#ab-compare">Comparatif : IPTV Ivoire vs autres</a></li>
                <li><a href="#ab-install">Installation en 5 étapes</a></li>
                <li><a href="#ab-appareils">Appareils compatibles</a></li>
                <li><a href="#ab-avis">Avis de nos clients Daloa</a></li>
                <li><a href="#ab-tarifs">Tarifs en FCFA & paiement</a></li>
                <li><a href="#ab-faq">Questions fréquentes</a></li>
              </ol>
            </div>
          </section>

          {/* ── 6. WHAT IS IPTV ── */}
          <section id="ab-quoi">
            <span className="eyebrow">Comprendre</span>
            <h2>Qu&apos;est-ce que l&apos;IPTV et comment ça marche à Daloa ?</h2>
            <p>L&apos;IPTV est la réception de la télévision par le réseau internet. Finies les coupures d&apos;antenne pendant les orages fréquents. Vous n&apos;avez besoin d&apos;aucun décodeur physique encombrant : une simple application installée sur votre télévision ou votre smartphone suffit à charger toutes les chaînes en direct et les vidéos à la demande.</p>
            <div className="ab-callout warn">
              <p>💡 <b>Vitesse requise :</b> 10 Mbps pour un flux HD et 25 Mbps pour la 4K. Les connexions mobiles 4G et fibres à Daloa sont parfaitement adaptées.</p>
            </div>
            <h3>L&apos;IPTV Daloa, secteur par secteur</h3>
            <p>Notre couverture s&apos;étend sur tous les secteurs de Daloa : <strong>Tazibouo</strong> (notamment autour de l&apos;université), <strong>Gbeuliville</strong>, <strong>Marais</strong>, <strong>Lobia</strong>, <strong>Garage</strong>, <strong>Huberson</strong>, <strong>Orly</strong> et <strong>Kennedy</strong>.</p>
          </section>

          {/* ── 7. WHY IPTV ── */}
          <section id="ab-pourquoi">
            <span className="eyebrow">Les avantages</span>
            <h2>Pourquoi l&apos;IPTV séduit autant les habitants de Daloa</h2>
            <div className="ab-cards">
              <div className="ab-card"><span className="ic">⚽</span><h3>Tout le sport en direct</h3><p>Ligue 1, Premier League, Liga, Champions League, et tous les matchs de la Coupe du Monde 2026 en direct HD/4K.</p></div>
              <div className="ab-card"><span className="ic">🇨🇮</span><h3>Toutes les chaînes ivoiriennes</h3><p>RTI 1, RTI 2, La 3, NCI, Life TV, A+ Ivoire en excellente qualité d&apos;image.</p></div>
              <div className="ab-card"><span className="ic">🎬</span><h3>VOD de 124 580 titres</h3><p>Accès illimité à une immense bibliothèque de films et séries récents mis à jour chaque semaine.</p></div>
              <div className="ab-card"><span className="ic">💰</span><h3>Économique & sans parabole</h3><p>Abonnement à partir de 2 950 FCFA/mois, sans frais d&apos;installation ni décodeur satellite obligatoire.</p></div>
            </div>
          </section>

          {/* ── 8. CONTENT ── */}
          <section id="ab-contenus">
            <span className="eyebrow">Le catalogue</span>
            <h2>Que pouvez-vous regarder avec l&apos;IPTV à Daloa ?</h2>
            <h3>Direct Sport & Divertissement</h3>
            <ul>
              <li>Tous les grands championnats européens et coupes africaines.</li>
              <li>Coupe du Monde 2026 : diffusion des 64 matchs via beIN Sports et TF1.</li>
              <li>Bouquets français, africains, arabes et internationaux complets.</li>
              <li>Chaînes jeunesse (Disney, Nickelodeon) et documentaires.</li>
            </ul>
          </section>

          {/* ── 9. ANTI-ARNAQUE ── */}
          <section id="ab-arnaque">
            <span className="eyebrow">Sécurité</span>
            <h2>Évitez les fraudes IPTV à Daloa</h2>
            <div className="ab-vs">
              <div className="ab-panel ab-danger">
                <h3>🚩 Signaux de fraude</h3>
                <ul>
                  <li>Prix trop bas (ex: 2 000 FCFA par an).</li>
                  <li>Aucun support après paiement.</li>
                  <li>Absence de site internet officiel de confiance.</li>
                </ul>
              </div>
              <div className="ab-panel ab-safe">
                <h3>✅ IPTV Ivoire de confiance</h3>
                <ul>
                  <li>Paiement sécurisé Wave & Orange Money.</li>
                  <li>Support WhatsApp francophone réactif sous 5 min.</li>
                  <li>Accompagnement à l&apos;installation inclus.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── 10. COMPARISON TABLE ── */}
          <section id="ab-compare">
            <span className="eyebrow">Comparatif</span>
            <h2>IPTV Ivoire vs Satellite à Daloa</h2>
            <div className="ab-tw">
              <table className="ab-table">
                <thead>
                  <tr>
                    <th>Critère</th>
                    <th>✅ IPTV Ivoire</th>
                    <th>❌ Canal+ CI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Prix mensuel (FCFA)</td><td className="ab-y">~2 950 FCFA</td><td className="ab-n">~15 000 FCFA</td></tr>
                  <tr><td>Nombre de chaînes</td><td className="ab-y">22 840</td><td className="ab-n">~200</td></tr>
                  <tr><td>Qualité 4K UHD</td><td className="ab-y">✓ Oui</td><td className="ab-n">✗ Non</td></tr>
                  <tr><td>Paiement Wave</td><td className="ab-y">✓ Oui</td><td className="ab-n">✗ Non</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── 11. INSTALLATION ── */}
          <section id="ab-install">
            <span className="eyebrow">Mise en route</span>
            <h2>Comment s&apos;abonner à Daloa en 5 étapes</h2>
            <div className="ab-steps">
              <div className="ab-step"><h3>Choisissez votre forfait</h3><p>Sélectionnez 2 mois (5 900 FCFA), 3 mois (7 900 FCFA) ou 12 mois (24 900 FCFA).</p></div>
              <div className="ab-step"><h3>Contactez-nous sur WhatsApp</h3><p>Envoyez un message et notre équipe vous répondra sous 5 minutes.</p></div>
              <div className="ab-step"><h3>Payez par Wave ou OM</h3><p>Le paiement mobile money s&apos;effectue de manière sécurisée en 30 secondes.</p></div>
              <div className="ab-step"><h3>Recevez vos accès</h3><p>Vos codes Xtream Codes et lien M3U vous sont envoyés par WhatsApp.</p></div>
              <div className="ab-step"><h3>Installez et profitez</h3><p>Entrez vos codes dans IPTV Smarters Pro et profitez de vos programmes. Notre support est là pour vous aider.</p></div>
            </div>
          </section>

          {/* ── 12. DEVICES ── */}
          <section id="ab-appareils">
            <span className="eyebrow">Appareils</span>
            <h2>Appareils compatibles à Daloa</h2>
            <p>Notre service fonctionne sur : Smart TV, Android Box TV, Fire Stick, Smartphones Android/iOS, Tablettes et PC/Mac.</p>
          </section>

          {/* ── 13. TESTIMONIALS ── */}
          <section id="ab-avis">
            <span className="eyebrow">Avis</span>
            <h2>Ce que disent nos clients à Daloa</h2>
            <div className="ab-revs">
              {[
                { init: 'Z', name: 'Zadi S.', loc: 'Tazibouo, Daloa', stars: '★★★★★', text: "J'utilise l'abonnement depuis 3 mois à Tazibouo avec ma box Android. Zéro coupure pendant la CAN et les matchs d'Europe. Je recommande !" },
                { init: 'B', name: 'Bamba Y.', loc: 'Lobia, Daloa', stars: '★★★★★', text: "Paiement super pratique avec Wave. Service client réactif, ils m'ont installé l'application à distance en quelques minutes." },
                { init: 'G', name: 'Gondo E.', loc: 'Orly, Daloa', stars: '★★★★★', text: "Très bon catalogue de films en français, mes enfants adorent les chaînes de dessins animés et moi le foot." },
              ].map(r => (
                <div key={r.name} className="ab-rev">
                  <span className="ab-stars">{r.stars}</span>
                  <p>&ldquo;{r.text}&rdquo;</p>
                  <div className="ab-rev-who">
                    <div className="ab-av">{r.init}</div>
                    <div><b>{r.name}</b><span>{r.loc}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 14. PRICING ── */}
          <section id="ab-tarifs">
            <span className="eyebrow">Tarifs</span>
            <h2>Choisissez votre abonnement IPTV Daloa</h2>
            <div className="ab-pricing">
              {[
                { name: '2 mois', sub: 'Coupe du Monde 2026', price: '5 900 FCFA', orig: '7 800 FCFA', promo: '-24% — Offre CDM', feat: false,
                  items: ['Matchs CDM 2026', '22 840 chaînes HD/4K', 'RTI + beIN Sports + TF1', 'VOD 124 580 films', 'Activation en 5 min'],
                  wa: `${WHATSAPP_URL}&text=Bonjour, je veux l'abonnement IPTV 2 mois (5900 FCFA) à Daloa` },
                { name: '3 mois', sub: 'Le plus populaire à Daloa', price: '7 900 FCFA', orig: '11 700 FCFA', promo: '-32% — Le + choisi', feat: true,
                  items: ['Matchs CDM 2026', '22 840 chaînes HD/4K', 'RTI + beIN Sports + TF1', 'VOD 124 580 films', 'Support prioritaire', 'Activation en 5 min'],
                  wa: `${WHATSAPP_URL}&text=Bonjour, je veux l'abonnement IPTV 3 mois (7900 FCFA) à Daloa` },
                { name: '12 mois + 1 offert', sub: 'Meilleur rapport qualité/prix', price: '24 900 FCFA', orig: '35 900 FCFA', promo: '-30% — 13 mois complets', feat: false,
                  items: ['13 mois complets', '22 840 chaînes HD/4K', 'VOD 124 580 films', 'Support VIP WhatsApp', 'Meilleur prix à l\'année'],
                  wa: `${WHATSAPP_URL}&text=Bonjour, je veux l'abonnement IPTV annuel (24900 FCFA) à Daloa` },
              ].map(p => (
                <div key={p.name} className={`ab-plan${p.feat ? ' feat' : ''}`}>
                  <h3>{p.name}</h3>
                  <div style={{ color: '#6B7280', fontSize: '.85rem', marginBottom: '12px' }}>{p.sub}</div>
                  <div className="ab-plan-price">{p.price}</div>
                  <div className="ab-plan-orig">{p.orig}</div>
                  <div className="ab-plan-promo">{p.promo}</div>
                  <ul>{p.items.map(i => <li key={i}>{i}</li>)}</ul>
                  <a href={p.wa} target="_blank" rel="noopener noreferrer" className="ab-wa-btn">💬 Commander sur WhatsApp</a>
                </div>
              ))}
            </div>

            <div className="ab-seal" style={{ marginTop: '2rem' }}>
              <div className="ab-seal-badge">Paiement<br />sécurisé<br />🔒</div>
              <div>
                <h3>Paiement 100% sécurisé via Wave & Orange Money</h3>
                <p>Transferts traçables et sécurisés. Les accès de votre abonnement vous sont envoyés par message WhatsApp sous 5 minutes.</p>
              </div>
            </div>
          </section>

          {/* ── 15. FAQ ── */}
          <section id="ab-faq">
            <span className="eyebrow">FAQ</span>
            <h2>Questions fréquentes — IPTV Daloa</h2>
            <div className="ab-faq">
              {faqs.map(f => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* ── 16. OTHER CITIES ── */}
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

          {/* ── 17. FINAL CTA ── */}
          <section className="ab-final">
            <h2>Prêt à regarder l&apos;IPTV à Daloa ?</h2>
            <p>Activation en 5 minutes via WhatsApp. Paiement Wave & Orange Money. 22 840 chaînes dès 5 900 FCFA.</p>
            <div className="ab-cta-row" style={{ justifyContent: 'center' }}>
              <a href={`${WHATSAPP_URL}&text=Bonjour, je veux un abonnement IPTV à Daloa`} target="_blank" rel="noopener noreferrer" id="daloa-final-cta" className="ab-btn ab-btn-wa">💬 Activer mon IPTV à Daloa</a>
              <Link href="/abonnement-iptv-cote-divoire" className="ab-btn" style={{ background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.25)', color: '#fff' }}>Voir tous les abonnements →</Link>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
