import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { WHATSAPP_URL } from '@/lib/seo'
import { getFAQSchema, getBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: "IPTV Abidjan Prix (2026) : Abonnement dès 5 900 FCFA",
  description: "Quel est le prix de l'IPTV à Abidjan ? Découvrez nos tarifs d'abonnement : 2 mois (5 900 FCFA), 3 mois (7 900 FCFA). Meilleur fournisseur IPTV en CI (Wave).",
  keywords: ['prix iptv abidjan', 'iptv abidjan prix', 'abonnement iptv prix abidjan', 'tarif iptv abidjan', 'combien coute iptv abidjan', 'iptv pas cher abidjan', 'prix abonnement iptv cote d ivoire', 'iptv abidjan prix fcfa', 'meilleur prix iptv abidjan'],
  alternates: { canonical: 'https://iptvivoire.com/prix-iptv-abidjan' },
  openGraph: {
    title: "IPTV Abidjan Prix (2026) : Abonnement dès 5 900 FCFA",
    description: "Quel est le prix de l'IPTV à Abidjan ? Découvrez nos tarifs : 2 mois (5 900 FCFA), 3 mois (7 900 FCFA). Meilleur fournisseur IPTV CI avec Wave.",
    url: 'https://iptvivoire.com/prix-iptv-abidjan',
    images: [{ url: 'https://iptvivoire.com/cities/abidjan.jpg', width: 1200, height: 630, alt: "Prix IPTV Abidjan — Tarifs en FCFA 2026" }],
  },
}

const faqs = [
  { q: "Quel est le prix de l'IPTV à Abidjan en 2026 ?", a: "Le prix de l'IPTV à Abidjan varie selon la durée. Chez IPTV Ivoire : 2 mois à 5 900 FCFA (2 950 FCFA/mois), 3 mois à 7 900 FCFA (2 633 FCFA/mois) et 12 mois + 1 offert à 24 900 FCFA (1 915 FCFA/mois). Tous les forfaits incluent 22 840 chaînes HD/4K et +124 580 films VOD." },
  { q: "L'IPTV est-il vraiment moins cher que Canal+ à Abidjan ?", a: "Oui, très nettement. Canal+ coûte environ 15 000 FCFA/mois pour ~200 chaînes. Notre abonnement IPTV à Abidjan revient à 2 633 FCFA/mois pour 22 840 chaînes + 124 580 films. Soit 5 à 6 fois moins cher, avec 100 fois plus de contenu." },
  { q: "Comment payer mon abonnement IPTV à Abidjan ?", a: "Paiement sécurisé par Wave, Orange Money ou MTN MoMo. Contactez-nous sur WhatsApp, choisissez votre forfait, effectuez le transfert. Vos codes d'accès arrivent en moins de 5 minutes. Chaque paiement est traçable." },
  { q: "Y a-t-il des frais cachés dans les prix IPTV affichés ?", a: "Aucun frais caché. Le prix affiché est le prix final. Pas de frais d'installation, pas de frais d'activation, pas de matériel obligatoire à acheter. Vous payez une seule fois pour la durée de votre abonnement." },
  { q: "Quel forfait IPTV est le plus populaire à Abidjan ?", a: "Le forfait 3 mois à 7 900 FCFA est de loin le plus choisi par nos clients à Abidjan. Il revient à seulement 2 633 FCFA/mois et offre le meilleur équilibre entre prix et durée. Il inclut toutes les chaînes sportives (Ligue des champions, Premier League)." },
  { q: "Puis-je payer en plusieurs fois mon IPTV à Abidjan ?", a: "Nos tarifs sont déjà très accessibles (dès 5 900 FCFA pour 2 mois), le paiement en une seule fois via Wave ou Orange Money est instantané. Si vous préférez tester d'abord, nous proposons un essai gratuit de 24h." },
  { q: "Combien coûte l'IPTV pour regarder les grands championnats à Abidjan ?", a: "L'offre 2 mois à 5 900 FCFA est parfaite pour commencer. Vous aurez accès à beIN Sports, Canal+ Sport, TF1 et France 2 pour regarder tous les matchs en direct en HD/4K." },
  { q: "Le prix change-t-il selon le quartier d'Abidjan ?", a: "Non. Le prix est identique que vous soyez à Cocody, Plateau, Yopougon, Abobo, Adjamé, Marcory, Koumassi, Port-Bouët, Treichville ou n'importe quel quartier. C'est un service 100% en ligne, le lieu ne change rien." },
  { q: "Quel est le prix IPTV le moins cher à Abidjan ?", a: "Le prix le plus bas pour un IPTV de qualité à Abidjan est 5 900 FCFA pour 2 mois (soit 2 950 FCFA/mois). Attention aux offres à 1 000 ou 2 000 FCFA sur les réseaux sociaux : ce sont généralement des arnaques sans support ni garantie." },
  { q: "Est-ce que l'essai gratuit 24h est vraiment gratuit ?", a: "Oui, 100% gratuit, sans engagement et sans carte bancaire. Contactez-nous sur WhatsApp, nous activons votre test en 5 minutes. Vous accédez à toutes les 22 840 chaînes pendant 24 heures pour vérifier la qualité." },
]

export default function PrixIPTVAbidjanPage() {
  const faqSchema = getFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://iptvivoire.com' },
    { name: 'IPTV Abidjan', url: 'https://iptvivoire.com/iptv-abidjan' },
    { name: 'Prix IPTV Abidjan', url: 'https://iptvivoire.com/prix-iptv-abidjan' },
  ])

  // Multi-offer Product schema for rich snippets with pricing
  const productOffersSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: "Abonnement IPTV Abidjan",
    description: "Abonnement IPTV premium à Abidjan — 22 840 chaînes HD/4K, 124 580 films VOD, paiement Wave & Orange Money, activation en 5 minutes.",
    image: 'https://iptvivoire.com/cities/abidjan.jpg',
    brand: { '@type': 'Brand', name: 'IPTV Ivoire' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '3420',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      { '@type': 'Review', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, author: { '@type': 'Person', name: 'Koné A.' }, reviewBody: "Paiement Orange Money en 2 min, codes reçus sur WhatsApp, tout installé en 10 min. Je regarde beIN Sports sans aucune coupure. Le meilleur prix à Abidjan." },
      { '@type': 'Review', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, author: { '@type': 'Person', name: "N'Guessan F." }, reviewBody: "L'offre annuelle coûte moins cher qu'un seul mois de Canal+. RTI, TF1, beIN Sports, tout y est. Imbattable." },
    ],
    offers: [
      { '@type': 'Offer', name: '2 mois', price: '5900', priceCurrency: 'XOF', availability: 'https://schema.org/InStock', url: 'https://iptvivoire.com/prix-iptv-abidjan', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'IPTV Ivoire' } },
      { '@type': 'Offer', name: '3 mois', price: '7900', priceCurrency: 'XOF', availability: 'https://schema.org/InStock', url: 'https://iptvivoire.com/prix-iptv-abidjan', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'IPTV Ivoire' } },
      { '@type': 'Offer', name: '12 mois + 1 offert', price: '24900', priceCurrency: 'XOF', availability: 'https://schema.org/InStock', url: 'https://iptvivoire.com/prix-iptv-abidjan', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'IPTV Ivoire' } },
    ],
  }

  const localBizSchema = {
    '@context': 'https://schema.org', '@type': 'LocalBusiness',
    name: 'IPTV Ivoire — Abidjan', url: 'https://iptvivoire.com/prix-iptv-abidjan',
    image: 'https://iptvivoire.com/cities/abidjan.jpg',
    priceRange: '5900-24900 FCFA', currenciesAccepted: 'XOF',
    paymentAccepted: 'Wave, Orange Money, MTN MoMo, Moov Money',
    areaServed: { '@type': 'City', name: 'Abidjan', containedInPlace: { '@type': 'Country', name: "Côte d'Ivoire" } },
    address: { '@type': 'PostalAddress', addressCountry: 'CI', addressLocality: 'Abidjan' },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productOffersSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizSchema) }} />

      <style>{`
        .px{--ink:#0f172a;--ink2:#475569;--mut:#64748b;--line:#e6e8f0;
          --or:#F97316;--or2:#EA580C;--green:#16a34a;--wa:#25D366;--red:#e11d48;
          --grad:linear-gradient(135deg,#F97316,#F59E0B);
          font-family:'Nunito',system-ui,sans-serif;color:var(--ink);line-height:1.72;
          max-width:1140px;margin:0 auto;padding:0 20px;font-size:17px;-webkit-font-smoothing:antialiased;}
        .px *{box-sizing:border-box;}
        .px h1,.px h2,.px h3{font-family:'Outfit',sans-serif;line-height:1.18;color:var(--ink);font-weight:800;letter-spacing:-.02em;}
        .px h2{font-size:2rem;margin:56px 0 14px;}
        .px h3{font-size:1.28rem;margin:28px 0 10px;font-weight:700;}
        .px p{margin:0 0 16px;}
        .px a{color:var(--or);text-decoration:none;font-weight:600;}
        .px a:hover{text-decoration:underline;}
        .px ul,.px ol{margin:0 0 18px;padding-left:22px;}
        .px li{margin-bottom:9px;}
        .px .eyebrow{font-family:'Outfit',sans-serif;text-transform:uppercase;letter-spacing:.16em;font-size:.78rem;font-weight:800;
          background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;display:inline-flex;align-items:center;gap:10px;margin-bottom:6px;}
        .px .eyebrow:before{content:"";width:28px;height:3px;border-radius:3px;background:var(--grad);}
        .px .grad{background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;}

        /* HERO */
        .px-hero{position:relative;overflow:hidden;border-radius:24px;margin:22px 0 0;padding:54px 44px;
          background:radial-gradient(1200px 500px at 85% -10%,rgba(249,115,22,.28),transparent 60%),
                     radial-gradient(900px 500px at 0% 110%,rgba(245,158,11,.22),transparent 55%),
                     linear-gradient(160deg,#0b1020,#1a1206 55%,#0f0a00);
          color:#fff;}
        .px-hero h1{color:#fff;font-size:2.5rem;margin:12px 0 18px;max-width:800px;}
        .px-hero p{color:#c7d0e0;font-size:1.08rem;max-width:680px;}
        .px-hero-badge{display:inline-flex;align-items:center;gap:10px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);
          padding:8px 16px;border-radius:100px;font-size:.88rem;color:#fff;backdrop-filter:blur(6px);}
        .px-hero-stars{color:#ffc83d;letter-spacing:2px;}
        .px-hero-price{display:flex;align-items:baseline;gap:12px;margin:18px 0 6px;}
        .px-hero-price b{font-family:'Outfit',sans-serif;font-size:2.8rem;font-weight:900;color:#fff;}
        .px-hero-price del{color:#9fb0c8;font-size:1.1rem;}
        .px-hero-price .px-save{background:var(--green);color:#fff;padding:5px 12px;border-radius:100px;font-size:.8rem;font-weight:800;}
        .px-cta-row{display:flex;flex-wrap:wrap;gap:12px;margin-top:20px;}
        .px-btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;padding:14px 26px;border-radius:100px;font-weight:800;
          font-size:.97rem;cursor:pointer;transition:transform .16s ease,box-shadow .16s ease;text-decoration:none !important;text-align:center;}
        .px-btn:hover{transform:translateY(-2px);}
        .px-btn-primary{background:var(--grad);color:#fff !important;box-shadow:0 12px 30px rgba(249,115,22,.4);}
        .px-btn-wa{background:var(--wa);color:#fff !important;box-shadow:0 10px 28px rgba(37,211,102,.38);}
        .px-btn-outline{background:rgba(255,255,255,.06);border:1.5px solid rgba(255,255,255,.22);color:#fff !important;}
        .px-hero-note{margin-top:14px;font-size:.84rem;color:#9fb0c8;display:flex;align-items:center;gap:8px;}
        .px-trust-pills{display:flex;flex-wrap:wrap;gap:8px;margin:18px 0 6px;}
        .px-pill{background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.18);padding:7px 14px;border-radius:100px;font-size:.83rem;font-weight:700;color:#fff;}

        /* QUICK SUMMARY */
        .px-quick{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:20px 0 0;}
        .px-quick-item{background:#fff;border:1px solid var(--line);border-radius:18px;padding:20px 14px;text-align:center;box-shadow:0 6px 20px rgba(15,23,42,.05);}
        .px-quick-item b{display:block;font-size:1.7rem;font-weight:800;font-family:'Outfit',sans-serif;
          background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;}
        .px-quick-item span{font-size:.8rem;color:var(--mut);font-weight:600;}

        /* TLDR */
        .px-tldr{background:linear-gradient(135deg,#fff7ed,#fef3c7);border:1px solid #fed7aa;border-left:5px solid var(--or);
          border-radius:16px;padding:26px 30px;margin:30px 0;}
        .px-tldr h3{margin-top:0;color:var(--or2);}

        /* CALLOUT */
        .px-callout{background:linear-gradient(135deg,#ecfdf5,#f0fdf4);border:1px solid #bbf7d0;border-radius:14px;padding:20px 26px;margin:24px 0;}
        .px-callout.warn{background:linear-gradient(135deg,#fef9c3,#fefce8);border-color:#fde68a;}
        .px-callout b{color:var(--green);}

        /* TOC */
        .px-toc{background:#fff;border:1px solid var(--line);border-radius:18px;padding:26px 30px;margin:30px 0;box-shadow:0 6px 20px rgba(15,23,42,.04);}
        .px-toc h3{margin-top:0;color:var(--or);}
        .px-toc ol{margin:0;columns:2;column-gap:32px;padding-left:20px;}
        .px-toc a{color:var(--or);}

        /* PRICING GRID */
        .px-pricing{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin:28px 0 10px;align-items:start;}
        .px-plan{background:#fff;border:1.5px solid var(--line);border-radius:22px;padding:28px 22px;text-align:center;box-shadow:0 8px 26px rgba(15,23,42,.06);transition:transform .2s,box-shadow .2s;}
        .px-plan:hover{transform:translateY(-4px);box-shadow:0 20px 50px rgba(15,23,42,.12);}
        .px-plan.feat{border:2px solid transparent;background:linear-gradient(#fff,#fff) padding-box,var(--grad) border-box;position:relative;box-shadow:0 20px 50px rgba(249,115,22,.20);transform:translateY(-6px);}
        .px-plan.feat:hover{transform:translateY(-10px);box-shadow:0 28px 60px rgba(249,115,22,.28);}
        .px-plan.feat:before{content:"★ LE PLUS CHOISI À ABIDJAN";position:absolute;top:-13px;left:50%;transform:translateX(-50%);background:var(--grad);color:#fff;font-size:.7rem;font-weight:800;padding:6px 16px;border-radius:100px;letter-spacing:.6px;white-space:nowrap;}
        .px-plan h3{margin:0 0 4px;font-size:1.25rem;}
        .px-plan-price{font-size:2.2rem;font-weight:900;font-family:'Outfit',sans-serif;color:var(--ink);margin:8px 0 2px;}
        .px-plan-pm{font-size:.88rem;color:var(--mut);font-weight:600;margin-bottom:2px;}
        .px-plan-orig{color:#9CA3AF;font-size:.85rem;text-decoration:line-through;}
        .px-plan-promo{color:var(--green);font-weight:700;font-size:.82rem;margin-bottom:16px;}
        .px-plan ul{list-style:none;padding:0;margin:16px 0;text-align:left;display:flex;flex-direction:column;gap:8px;}
        .px-plan li{font-size:.88rem;color:var(--ink2);display:flex;align-items:flex-start;gap:6px;}
        .px-plan li:before{content:"✓";color:var(--green);font-weight:800;flex-shrink:0;}
        .px-wa-btn{display:flex;align-items:center;justify-content:center;gap:9px;margin-top:16px;padding:13px;border-radius:100px;
          background:var(--wa);color:#fff !important;font-weight:800;font-size:.95rem;text-decoration:none !important;box-shadow:0 8px 24px rgba(37,211,102,.3);transition:transform .16s;}
        .px-wa-btn:hover{opacity:.92;transform:translateY(-1px);}

        /* COMPARISON TABLE */
        .px-tw{overflow-x:auto;margin:24px 0;border-radius:18px;border:1px solid var(--line);box-shadow:0 8px 26px rgba(15,23,42,.06);}
        .px-table{width:100%;border-collapse:collapse;background:#fff;min-width:600px;}
        .px-table th,.px-table td{padding:14px 18px;text-align:left;border-bottom:1px solid #f1f5f9;font-size:.95rem;}
        .px-table thead th{font-family:'Outfit',sans-serif;font-size:.93rem;font-weight:800;}
        .px-table thead th:nth-child(2){background:var(--grad);color:#fff;}
        .px-table thead th:nth-child(3){background:#fff1f2;color:var(--red);}
        .px-table thead th:nth-child(4){background:#f1f5f9;color:#475569;}
        .px-table thead th:first-child{background:#0f172a;color:#fff;}
        .px-table td:nth-child(2){background:#fffaf5;font-weight:600;}
        .px-table tr:last-child td{border-bottom:none;}
        .px-y{color:var(--green);font-weight:700;}
        .px-n{color:var(--red);font-weight:700;}

        /* SAVINGS CALCULATOR */
        .px-calc{background:linear-gradient(135deg,#0f172a,#1a0e00);border-radius:22px;padding:34px 36px;margin:28px 0;color:#fff;}
        .px-calc h3{color:#fff;margin-top:0;font-size:1.4rem;}
        .px-calc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin:22px 0;}
        .px-calc-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:22px;text-align:center;}
        .px-calc-card b{display:block;font-size:1.6rem;font-weight:900;font-family:'Outfit',sans-serif;margin-bottom:4px;}
        .px-calc-card span{font-size:.85rem;color:#9fb0c8;}
        .px-calc-card.highlight{border-color:rgba(249,115,22,.5);background:rgba(249,115,22,.12);}
        .px-calc-card.highlight b{background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;}

        /* BREAKDOWN */
        .px-breakdown{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin:24px 0;}
        .px-bd-card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:24px;box-shadow:0 6px 20px rgba(15,23,42,.05);position:relative;overflow:hidden;transition:transform .18s,box-shadow .18s;}
        .px-bd-card:before{content:"";position:absolute;top:0;left:0;right:0;height:4px;background:var(--grad);transform:scaleX(0);transform-origin:left;transition:transform .25s;}
        .px-bd-card:hover{transform:translateY(-4px);box-shadow:0 18px 44px rgba(15,23,42,.10);}
        .px-bd-card:hover:before{transform:scaleX(1);}
        .px-bd-card .ic{font-size:1.7rem;margin-bottom:8px;display:block;}
        .px-bd-card h3{margin:0 0 8px;font-size:1.1rem;}
        .px-bd-card p{margin:0;color:var(--ink2);font-size:.97rem;}

        /* VS PANELS */
        .px-vs{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin:26px 0;}
        .px-panel{border-radius:20px;padding:28px;border:1px solid var(--line);}
        .px-panel h3{margin-top:0;display:flex;align-items:center;gap:10px;}
        .px-danger{background:linear-gradient(160deg,#fff1f2,#fff5f5);border-color:#fecdd3;}
        .px-danger h3{color:var(--red);}
        .px-safe{background:linear-gradient(160deg,#f0fdf4,#ecfdf5);border-color:#bbf7d0;}
        .px-safe h3{color:var(--green);}
        .px-panel ul{list-style:none;padding:0;margin:0;}
        .px-panel li{padding:9px 0 9px 28px;position:relative;font-size:.97rem;border-bottom:1px dashed rgba(0,0,0,.07);}
        .px-panel li:last-child{border-bottom:none;}
        .px-danger li:before{content:"✕";position:absolute;left:0;color:var(--red);font-weight:800;}
        .px-safe li:before{content:"✓";position:absolute;left:0;color:var(--green);font-weight:800;}

        /* TESTIMONIALS */
        .px-revs{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin:24px 0;}
        .px-rev{background:#fff;border:1px solid var(--line);border-radius:18px;padding:24px;box-shadow:0 6px 20px rgba(15,23,42,.05);}
        .px-rev .px-stars{color:#ffc83d;font-size:.93rem;margin-bottom:10px;display:block;letter-spacing:2px;}
        .px-rev p{font-size:.95rem;color:var(--ink2);font-style:italic;}
        .px-rev-who{display:flex;align-items:center;gap:12px;margin-top:14px;}
        .px-av{width:42px;height:42px;border-radius:50%;background:var(--grad);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-family:'Outfit',sans-serif;}
        .px-rev-who b{display:block;font-size:.93rem;}
        .px-rev-who span{font-size:.8rem;color:var(--mut);}

        /* GUARANTEE SEAL */
        .px-seal{display:flex;align-items:center;gap:22px;background:linear-gradient(135deg,#0f172a,#1a0e00);color:#fff;border-radius:22px;padding:28px 32px;margin:24px 0;}
        .px-seal-badge{flex:0 0 88px;height:88px;border-radius:50%;background:var(--grad);
          display:flex;align-items:center;justify-content:center;font-family:'Outfit',sans-serif;font-weight:800;text-align:center;line-height:1.05;font-size:.78rem;box-shadow:0 0 0 6px rgba(255,255,255,.08);color:#fff;}
        .px-seal h3{color:#fff;margin:0 0 6px;}
        .px-seal p{margin:0;color:#c7d0e0;font-size:.97rem;}

        /* STEPS */
        .px-steps{counter-reset:step;margin:24px 0;}
        .px-step{position:relative;background:#fff;border:1px solid var(--line);border-radius:16px;padding:22px 26px 22px 76px;margin-bottom:14px;box-shadow:0 4px 16px rgba(15,23,42,.04);}
        .px-step:before{counter-increment:step;content:counter(step);position:absolute;left:20px;top:20px;width:40px;height:40px;border-radius:12px;
          background:var(--grad);color:#fff;font-weight:800;font-family:'Outfit',sans-serif;display:flex;align-items:center;justify-content:center;font-size:1.1rem;}
        .px-step h3{margin:0 0 6px;font-size:1.1rem;}
        .px-step p{margin:0;color:var(--ink2);}

        /* FAQ */
        .px-faq details{background:#fff;border:1px solid var(--line);border-radius:14px;padding:4px 24px;margin-bottom:10px;box-shadow:0 4px 14px rgba(15,23,42,.04);}
        .px-faq summary{cursor:pointer;font-weight:700;font-family:'Outfit',sans-serif;padding:16px 0;font-size:1.02rem;list-style:none;display:flex;justify-content:space-between;gap:14px;}
        .px-faq summary::-webkit-details-marker{display:none;}
        .px-faq summary:after{content:"+";color:var(--or);font-weight:800;font-size:1.3rem;line-height:1;}
        .px-faq details[open] summary:after{content:"–";}
        .px-faq p{padding:0 0 18px;margin:0;color:var(--ink2);}

        /* FINAL CTA */
        .px-final{position:relative;overflow:hidden;text-align:center;border-radius:24px;padding:54px 40px;margin:44px 0 24px;color:#fff;
          background:radial-gradient(800px 400px at 50% -20%,rgba(249,115,22,.32),transparent 60%),linear-gradient(160deg,#0b1020,#1a0a00);}
        .px-final h2{color:#fff;font-size:2rem;margin-top:0;}
        .px-final p{color:#c7d0e0;max-width:600px;margin:0 auto 26px;}

        /* CITIES */
        .px-cities{display:flex;flex-wrap:wrap;gap:10px;margin:20px 0;}
        .px-city-link{background:#f3f4f6;border:1px solid #e5e7eb;color:#374151;padding:7px 16px;border-radius:999px;font-size:.875rem;font-weight:700;font-family:'Outfit',sans-serif;text-decoration:none !important;}
        .px-city-link:hover{background:#fff7ed;border-color:#F97316;color:#F97316;}

        /* STICKY MOBILE */
        .px-sticky{display:none;}

        @media(max-width:860px){
          .px{font-size:16px;}
          .px-hero{padding:30px 20px;border-radius:16px;}
          .px-hero h1{font-size:1.9rem;}
          .px-hero-price b{font-size:2.2rem;}
          .px h2{font-size:1.6rem;}
          .px-quick,.px-calc-grid{grid-template-columns:repeat(2,1fr);}
          .px-breakdown,.px-vs,.px-revs,.px-pricing{grid-template-columns:1fr;}
          .px-plan.feat{transform:none;}
          .px-toc ol{columns:1;}
          .px-seal{flex-direction:column;text-align:center;}
          .px-sticky{display:flex;position:fixed;left:0;right:0;bottom:0;z-index:9999;gap:8px;padding:10px 12px;
            background:rgba(255,255,255,.96);backdrop-filter:blur(8px);border-top:1px solid var(--line);box-shadow:0 -6px 20px rgba(15,23,42,.10);}
          .px-sticky a{flex:1;padding:13px;border-radius:100px;text-align:center;font-weight:800;font-size:.9rem;text-decoration:none;}
          .px-sticky .s-buy{background:var(--grad);color:#fff !important;}
          .px-sticky .s-wa{background:var(--wa);color:#fff !important;}
        }
      `}</style>

      <Header />
      <main style={{ paddingBottom: '2rem' }}>
        <div className="px">

          {/* ── 1. HERO ── */}
          <section className="px-hero">
            <div className="px-hero-badge">
              <span className="px-hero-stars">★★★★★</span> 4,9/5 — +3 420 clients à Abidjan
            </div>
            <h1>Prix IPTV Abidjan 2026 : <span className="grad">Tarifs Complets en FCFA</span> — dès 2 950 FCFA/mois</h1>
            <p>Vous cherchez le <strong>prix de l&apos;IPTV à Abidjan</strong> ? Voici la grille tarifaire complète 2026 avec comparatif Canal+ vs IPTV Ivoire, tous les forfaits en FCFA, et le guide pour commander en sécurité via Wave ou Orange Money.</p>
            <div className="px-hero-price">
              <b>5 900 FCFA</b>
              <del>7 800 FCFA</del>
              <span className="px-save">-24% offre CDM</span>
            </div>
            <p style={{ color: '#9fb0c8', fontSize: '.92rem', margin: '0 0 4px' }}>pour 2 mois complets — soit 2 950 FCFA/mois. 22 840 chaînes 4K incluses.</p>
            <div className="px-trust-pills">
              <span className="px-pill">🟠 Orange Money</span>
              <span className="px-pill">💚 Wave</span>
              <span className="px-pill">📺 22 840 chaînes 4K</span>
              <span className="px-pill">⚡ Activation 5 min</span>
              <span className="px-pill">🏆 CDM 2026 incluse</span>
            </div>
            <div className="px-cta-row">
              <a href="#px-tarifs" className="px-btn px-btn-primary">Voir tous les tarifs en FCFA →</a>
              <a href={`${WHATSAPP_URL}&text=Bonjour, je veux connaître les prix IPTV à Abidjan`} className="px-btn px-btn-wa" target="_blank" rel="noopener noreferrer">💬 Commander sur WhatsApp</a>
              <Link href="/essai-gratuit" className="px-btn px-btn-outline">🎁 Essai gratuit 24h</Link>
            </div>
            <div className="px-hero-note">🔒 Paiement sécurisé Wave & Orange Money. Aucun frais caché. Prix final garanti.</div>
          </section>

          {/* ── 2. QUICK STATS ── */}
          <div className="px-quick">
            <div className="px-quick-item"><b>2 950</b><span>FCFA/mois minimum</span></div>
            <div className="px-quick-item"><b>22 840</b><span>Chaînes TV en direct</span></div>
            <div className="px-quick-item"><b>124 580</b><span>Films & séries VOD</span></div>
            <div className="px-quick-item"><b>5 min</b><span>Activation après paiement</span></div>
          </div>

          {/* ── 3. TLDR ── */}
          <section>
            <div className="px-tldr">
              <h3>💰 Les prix IPTV à Abidjan en bref (Juillet 2026)</h3>
              <ul>
                <li><strong>2 mois :</strong> 5 900 FCFA — idéal pour tester ou pour les Grands Championnats.</li>
                <li><strong>3 mois :</strong> 7 900 FCFA — le plus populaire (2 633 FCFA/mois).</li>
                <li><strong>12 mois + 1 mois offert :</strong> 24 900 FCFA — le meilleur rapport qualité/prix (1 915 FCFA/mois).</li>
                <li>Paiement <strong>Wave</strong> ou <strong>Orange Money</strong>. Pas de frais cachés. Prix identique dans tous les quartiers d&apos;Abidjan.</li>
                <li>Tous les forfaits : 22 840 chaînes HD/4K + 124 580 films + support WhatsApp 24/7.</li>
              </ul>
            </div>
            <p>En 2026, le <strong>prix de l&apos;IPTV à Abidjan</strong> est devenu un sujet central pour les familles ivoiriennes qui cherchent une alternative économique aux abonnements satellite traditionnels. Avec la fibre optique et la 4G qui couvrent désormais Cocody, Plateau, Yopougon, Abobo, Adjamé et toutes les communes d&apos;Abidjan, regarder la télévision via internet est plus simple et bien moins cher que jamais.</p>
            <p>Mais combien coûte réellement un abonnement IPTV fiable à Abidjan ? Comment éviter les arnaques ? Et surtout, est-ce vraiment moins cher que Canal+ ? Ce guide complet répond à toutes ces questions avec des prix transparents en FCFA, un comparatif honnête, et un processus de commande clair.</p>
          </section>

          {/* ── 4. TOC ── */}
          <section>
            <div className="px-toc">
              <h3>📖 Sommaire — Prix IPTV Abidjan</h3>
              <ol>
                <li><a href="#px-tarifs">Grille tarifaire complète en FCFA</a></li>
                <li><a href="#px-detail">Que comprend chaque forfait ?</a></li>
                <li><a href="#px-compare">Comparatif : IPTV Ivoire vs Canal+ vs StarSat</a></li>
                <li><a href="#px-economies">Combien vous économisez réellement</a></li>
                <li><a href="#px-arnaque">Prix trop bas = arnaque : comment reconnaître un faux vendeur</a></li>
                <li><a href="#px-payer">Comment payer à Abidjan (Wave, Orange Money, MTN)</a></li>
                <li><a href="#px-quartiers">Prix par quartier d&apos;Abidjan</a></li>
                <li><a href="#px-avis">Avis clients sur les prix</a></li>
                <li><a href="#px-faq">Questions fréquentes sur les prix</a></li>
              </ol>
            </div>
          </section>

          {/* ── 5. PRICING GRID ── */}
          <section id="px-tarifs">
            <span className="eyebrow">Tarifs FCFA — Juillet 2026</span>
            <h2>Grille Tarifaire IPTV Abidjan — Tous les Prix en FCFA</h2>
            <p>Voici les <strong>prix IPTV à Abidjan</strong> pour chaque durée d&apos;abonnement. Tous les forfaits incluent l&apos;accès à 22 840 chaînes HD/4K, 124 580 films et séries VOD, les Grands Championnats en direct, et le support WhatsApp. Paiement par <strong>Wave</strong> ou <strong>Orange Money</strong>.</p>
            <div className="px-pricing">
              {[
                { name: '2 mois', sub: 'Grands Championnats', price: '5 900 FCFA', pm: '2 950 FCFA/mois', orig: '7 800 FCFA', promo: '-24% — Offre Découverte', feat: false,
                  items: ['22 840 chaînes HD/4K', 'CDM 2026 — 64 matchs en direct', 'VOD 124 580 films & séries', 'RTI + beIN Sports + Canal+ Sport', 'Support WhatsApp 24/7', 'Activation en 5 min'],
                  wa: `${WHATSAPP_URL}&text=Bonjour, je veux l'abonnement IPTV 2 mois (5900 FCFA) à Abidjan` },
                { name: '3 mois', sub: 'Le + populaire à Abidjan', price: '7 900 FCFA', pm: '2 633 FCFA/mois', orig: '11 700 FCFA', promo: '-32% — Choix N°1', feat: true,
                  items: ['22 840 chaînes HD/4K', 'CDM 2026 — 64 matchs en direct', 'VOD 124 580 films & séries', 'RTI + beIN + Canal+ + TF1', 'Support WhatsApp prioritaire', 'Activation en 5 min', 'Meilleur rapport durée/prix'],
                  wa: `${WHATSAPP_URL}&text=Bonjour, je veux l'abonnement IPTV 3 mois (7900 FCFA) à Abidjan` },
                { name: '12 mois + 1 offert', sub: 'Meilleur prix à l\'année', price: '24 900 FCFA', pm: '1 915 FCFA/mois', orig: '35 900 FCFA', promo: '-30% — 13 mois complets', feat: false,
                  items: ['13 mois complets', '22 840 chaînes HD/4K', 'VOD 124 580 films & séries', 'Toutes les compétitions sportives', 'Support VIP WhatsApp', 'Prix le plus bas au mois'],
                  wa: `${WHATSAPP_URL}&text=Bonjour, je veux l'abonnement IPTV annuel (24900 FCFA) à Abidjan` },
              ].map(p => (
                <div key={p.name} className={`px-plan${p.feat ? ' feat' : ''}`}>
                  <h3>{p.name}</h3>
                  <div style={{ color: '#6B7280', fontSize: '.85rem', marginBottom: '12px' }}>{p.sub}</div>
                  <div className="px-plan-price">{p.price}</div>
                  <div className="px-plan-pm">{p.pm}</div>
                  <div className="px-plan-orig">{p.orig}</div>
                  <div className="px-plan-promo">{p.promo}</div>
                  <ul>{p.items.map(i => <li key={i}>{i}</li>)}</ul>
                  <a href={p.wa} target="_blank" rel="noopener noreferrer" className="px-wa-btn">💬 Commander sur WhatsApp</a>
                </div>
              ))}
            </div>
            <div className="px-callout">
              <p>🎁 <b>Essai gratuit 24h disponible :</b> testez les 22 840 chaînes avant de payer. <Link href="/essai-gratuit">Demander votre essai gratuit →</Link></p>
            </div>
          </section>

          {/* ── 6. WHAT'S INCLUDED ── */}
          <section id="px-detail">
            <span className="eyebrow">Détails des forfaits</span>
            <h2>Que comprend chaque forfait IPTV à Abidjan ?</h2>
            <p>Quel que soit le <strong>prix IPTV Abidjan</strong> que vous choisissez — 5 900, 7 900 ou 24 900 FCFA — chaque forfait donne accès à exactement le même contenu. La seule différence, c&apos;est la durée. Voici ce qui est inclus :</p>
            <div className="px-breakdown">
              <div className="px-bd-card"><span className="ic">📺</span><h3>22 840 chaînes en direct</h3><p>Chaînes ivoiriennes (RTI 1, RTI 2, NCI, La 3, Life TV), françaises (TF1, France 2, Canal+), arabes, anglaises, portugaises et africaines. Sport, info, divertissement, jeunesse — tout y est.</p></div>
              <div className="px-bd-card"><span className="ic">🎬</span><h3>124 580 films & séries VOD</h3><p>Derniers blockbusters, séries du moment, productions africaines, dessins animés. Bibliothèque mise à jour quotidiennement, accessible à la demande 24h/24.</p></div>
              <div className="px-bd-card"><span className="ic">⚽</span><h3>Sport en direct sans coupure</h3><p>Ligue 1, Premier League, Liga, Ligue des Champions, CAN, Grands Championnats. Via beIN Sports, Canal+ Sport, TF1, France 2 — en HD et 4K.</p></div>
              <div className="px-bd-card"><span className="ic">📱</span><h3>Multi-appareils inclus</h3><p>Smart TV, Android Box, iPhone, smartphone Android, PC/Mac, Fire TV Stick. Une seule souscription, tous vos écrans. <Link href="/appareils">Voir les appareils compatibles →</Link></p></div>
            </div>
          </section>

          {/* ── 7. COMPARISON TABLE ── */}
          <section id="px-compare">
            <span className="eyebrow">Le comparatif</span>
            <h2>Prix IPTV Abidjan vs Canal+ vs StarSat — Comparatif 2026</h2>
            <p>C&apos;est la question que se posent tous les habitants d&apos;Abidjan : <strong>l&apos;IPTV est-il vraiment moins cher que Canal+ ?</strong> Voici un comparatif objectif ligne par ligne, en FCFA, pour que vous puissiez juger par vous-même.</p>
            <div className="px-tw">
              <table className="px-table">
                <thead>
                  <tr>
                    <th>Critère</th>
                    <th>✅ IPTV Ivoire</th>
                    <th>❌ Canal+ CI</th>
                    <th>❌ StarSat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Prix mensuel moyen</td><td className="px-y">~2 633 FCFA</td><td className="px-n">~15 000 FCFA</td><td className="px-n">~8 000 FCFA</td></tr>
                  <tr><td>Prix annuel</td><td className="px-y">24 900 FCFA</td><td className="px-n">180 000 FCFA</td><td className="px-n">96 000 FCFA</td></tr>
                  <tr><td>Économie par an vs Canal+</td><td className="px-y">155 100 FCFA économisés</td><td className="px-n">—</td><td className="px-n">84 000 FCFA</td></tr>
                  <tr><td>Nombre de chaînes</td><td className="px-y">22 840</td><td className="px-n">~200</td><td className="px-n">~300</td></tr>
                  <tr><td>Films & séries VOD</td><td className="px-y">124 580</td><td className="px-n">~500</td><td className="px-n">Non inclus</td></tr>
                  <tr><td>Qualité 4K UHD</td><td className="px-y">✓ Oui</td><td className="px-n">✗ HD max</td><td className="px-n">✗ HD max</td></tr>
                  <tr><td>Paiement Wave</td><td className="px-y">✓ Oui</td><td className="px-n">✗ Non</td><td className="px-n">✗ Non</td></tr>
                  <tr><td>Paiement Orange Money</td><td className="px-y">✓ Oui</td><td className="px-n">✗ Non</td><td className="px-n">✗ Non</td></tr>
                  <tr><td>Activation immédiate</td><td className="px-y">✓ 5 minutes</td><td className="px-n">✗ 24-48h</td><td className="px-n">✗ Installation requise</td></tr>
                  <tr><td>Multi-appareils</td><td className="px-y">✓ Tous écrans</td><td className="px-n">✗ Décodeur seul</td><td className="px-n">✗ Décodeur seul</td></tr>
                  <tr><td>Support WhatsApp 24/7</td><td className="px-y">✓ Oui</td><td className="px-n">✗ Agence uniquement</td><td className="px-n">✗ Non</td></tr>
                  <tr><td>Engagement / Contrat</td><td className="px-y">✓ Aucun</td><td className="px-n">✗ 12 mois min</td><td className="px-n">✗ 12 mois min</td></tr>
                </tbody>
              </table>
            </div>
            <div className="px-callout">
              <p>📊 <b>En résumé :</b> pour le prix d&apos;un seul mois de Canal+ (~15 000 FCFA), vous obtenez <strong>presque 6 mois d&apos;IPTV</strong> (2 x 7 900 FCFA) avec 100 fois plus de chaînes et la 4K incluse.</p>
            </div>
          </section>

          {/* ── 8. SAVINGS CALCULATOR ── */}
          <section id="px-economies">
            <span className="eyebrow">Vos économies</span>
            <h2>Combien vous économisez avec l&apos;IPTV à Abidjan (calcul réel)</h2>
            <p>Voici un calcul simple et honnête de ce que vous économisez chaque année en passant de Canal+ à notre <strong>IPTV Abidjan</strong>. Tous les montants sont en FCFA, tous vérifiables.</p>
            <div className="px-calc">
              <h3>💸 Économies annuelles vs Canal+ (en FCFA)</h3>
              <div className="px-calc-grid">
                <div className="px-calc-card">
                  <b>180 000</b>
                  <span>Coût annuel Canal+ CI</span>
                </div>
                <div className="px-calc-card">
                  <b>24 900</b>
                  <span>Coût annuel IPTV Ivoire</span>
                </div>
                <div className="px-calc-card highlight">
                  <b>155 100</b>
                  <span>💰 Économisés par an</span>
                </div>
              </div>
              <p style={{ color: '#9fb0c8', fontSize: '.92rem', textAlign: 'center', margin: '18px 0 0' }}>Soit <strong style={{ color: '#fff' }}>12 925 FCFA économisés chaque mois</strong> — l&apos;équivalent de 6 transferts Wave de 2 000 FCFA. Le tout avec 22 840 chaînes au lieu de ~200.</p>
            </div>
            <h3>Le calcul pour chaque forfait :</h3>
            <ul>
              <li><strong>Forfait 2 mois (5 900 FCFA) :</strong> Canal+ coûterait 30 000 FCFA pour la même période. Vous économisez <strong>24 100 FCFA</strong> (80% de réduction).</li>
              <li><strong>Forfait 3 mois (7 900 FCFA) :</strong> Canal+ coûterait 45 000 FCFA. Vous économisez <strong>37 100 FCFA</strong> (82% de réduction).</li>
              <li><strong>Forfait 12 mois + 1 offert (24 900 FCFA) :</strong> Canal+ coûterait 195 000 FCFA pour 13 mois. Vous économisez <strong>170 100 FCFA</strong> (87% de réduction).</li>
            </ul>
          </section>

          {/* ── 9. ANTI-SCAM ── */}
          <section id="px-arnaque">
            <span className="eyebrow">Alerte sécurité</span>
            <h2>Prix IPTV trop bas à Abidjan ? Attention aux arnaques</h2>
            <p>En cherchant le <strong>prix de l&apos;IPTV à Abidjan</strong>, vous allez tomber sur des offres à 1 000 ou 2 000 FCFA. Ces prix anormalement bas cachent presque toujours une arnaque. Voici comment distinguer un service sérieux d&apos;un escroc.</p>
            <div className="px-vs">
              <div className="px-panel px-danger">
                <h3>🚩 Signaux d&apos;une arnaque IPTV</h3>
                <ul>
                  <li>Prix de 500 à 2 000 FCFA pour « un an » — économiquement impossible.</li>
                  <li>Pas de site web, pas d&apos;avis vérifiables, seulement un profil Facebook ou TikTok.</li>
                  <li>Aucun essai gratuit proposé — ils savent que le service ne tient pas.</li>
                  <li>Paiement uniquement par transfert vers un numéro personnel.</li>
                  <li>Votre numéro est bloqué après paiement — aucun recours possible.</li>
                  <li>Service qui plante au bout de 2 à 7 jours.</li>
                </ul>
              </div>
              <div className="px-panel px-safe">
                <h3>✅ Ce que vous obtenez chez IPTV Ivoire</h3>
                <ul>
                  <li>Prix clair en FCFA : 5 900, 7 900 ou 24 900 — publié sur notre site.</li>
                  <li>Site officiel avec blog, FAQ, guide d&apos;installation et avis.</li>
                  <li>Essai gratuit 24h, sans paiement ni engagement.</li>
                  <li>Paiement Wave & Orange Money sécurisé et traçable.</li>
                  <li>Support WhatsApp 24/7 — numéro fixe, réponse en 5 minutes.</li>
                  <li>+3 420 clients satisfaits en Côte d&apos;Ivoire depuis 2026.</li>
                </ul>
              </div>
            </div>
            <div className="px-callout warn">
              <p>💡 <b>Règle simple :</b> si un IPTV coûte moins de 5 000 FCFA pour plus de 2 mois à Abidjan, c&apos;est probablement une arnaque. Un service stable avec 22 840 chaînes en 4K nécessite des serveurs puissants — et ça a un coût réel.</p>
            </div>
          </section>

          {/* ── 10. HOW TO PAY ── */}
          <section id="px-payer">
            <span className="eyebrow">Paiement</span>
            <h2>Comment payer votre IPTV à Abidjan — Wave, Orange Money, MTN MoMo</h2>
            <p>Le processus de paiement est simple, rapide et sécurisé. Que vous payiez par <strong>Wave</strong>, <strong>Orange Money</strong> ou <strong>MTN MoMo</strong>, la procédure est identique et prend moins de 5 minutes.</p>
            <div className="px-steps">
              <div className="px-step"><h3>Contactez-nous sur WhatsApp</h3><p>Envoyez &quot;Bonjour, je veux un abonnement IPTV à Abidjan&quot; sur notre WhatsApp. Nous répondons en moins de 5 minutes, même le week-end.</p></div>
              <div className="px-step"><h3>Choisissez votre forfait et durée</h3><p>2 mois (5 900 FCFA), 3 mois (7 900 FCFA) ou 12 mois + 1 offert (24 900 FCFA). Nous vous confirmons le prix exact — aucun frais caché.</p></div>
              <div className="px-step"><h3>Effectuez le paiement par mobile money</h3><p>Nous vous envoyons un numéro de transfert. Payez par Wave, Orange Money ou MTN MoMo. Le transfert prend 30 secondes et est 100% traçable.</p></div>
              <div className="px-step"><h3>Recevez vos codes d&apos;accès sur WhatsApp</h3><p>Dès confirmation de votre paiement (généralement en moins de 2 minutes), vous recevez votre URL de connexion, nom d&apos;utilisateur et mot de passe directement sur WhatsApp.</p></div>
              <div className="px-step"><h3>Installez l&apos;application et regardez</h3><p>Téléchargez IPTV Smarters Pro (gratuit), entrez vos codes, et profitez de 22 840 chaînes en HD/4K. Nous vous guidons pas à pas si besoin. <Link href="/blog/comment-installer-iptv-smarters-pro">Voir le guide d&apos;installation →</Link></p></div>
            </div>
          </section>

          {/* ── 11. PRICE BY NEIGHBORHOOD ── */}
          <section id="px-quartiers">
            <span className="eyebrow">Couverture</span>
            <h2>Le prix IPTV est-il le même dans tous les quartiers d&apos;Abidjan ?</h2>
            <p><strong>Oui, exactement le même prix.</strong> L&apos;IPTV est un service 100% en ligne. Que vous habitiez à <strong>Cocody</strong> (Riviera, Angré, Deux Plateaux), au <strong>Plateau</strong>, à <strong>Yopougon</strong> (Niangon, Millionnaire), à <strong>Abobo</strong> (N&apos;Dotré, PK18), à <strong>Adjamé</strong>, <strong>Treichville</strong>, <strong>Marcory</strong>, <strong>Koumassi</strong>, <strong>Port-Bouët</strong>, <strong>Bingerville</strong> ou ailleurs — le tarif ne change jamais.</p>
            <p>La seule condition : disposer d&apos;une connexion internet. Avec la fibre optique et la 4G Orange, MTN ou Moov qui couvrent désormais l&apos;ensemble d&apos;Abidjan, ce n&apos;est plus un problème. Même avec une connexion 4G modeste de 10 Mbps, vous pouvez regarder en HD sans coupure. La 4K nécessite environ 25 Mbps.</p>
            <div className="px-callout">
              <p>📡 <b>Bon à savoir :</b> les quartiers de Cocody, Plateau, Riviera, Deux Plateaux et Zone 4 bénéficient souvent de la fibre optique, idéale pour la 4K. À Yopougon, Abobo et Adjamé, la 4G est largement suffisante pour une expérience HD fluide.</p>
            </div>
          </section>

          {/* ── 12. TESTIMONIALS ── */}
          <section id="px-avis">
            <span className="eyebrow">Avis sur les prix</span>
            <h2>Ce que disent nos clients d&apos;Abidjan sur les prix</h2>
            <div className="px-revs">
              {[
                { init: 'K', name: 'Koné A.', loc: 'Cocody, Abidjan', text: "J'ai payé 7 900 FCFA par Wave pour 3 mois. C'est moins cher qu'un seul mois de Canal+, et j'ai 100 fois plus de chaînes. Le meilleur prix que j'ai trouvé à Abidjan." },
                { init: 'D', name: 'Diallo M.', loc: 'Yopougon, Abidjan', text: "Avant je payais 15 000 FCFA par mois chez Canal+. Maintenant je paie 24 900 pour toute l'année avec l'IPTV. J'économise plus de 150 000 FCFA par an, c'est énorme." },
                { init: 'T', name: 'Traoré S.', loc: 'Plateau, Abidjan', text: "J'avais peur que le prix bas = arnaque. J'ai testé l'essai gratuit 24h d'abord, la qualité était top. J'ai pris le 3 mois, zéro regret. Paiement Orange Money en 1 min." },
              ].map(r => (
                <div key={r.name} className="px-rev">
                  <span className="px-stars">★★★★★</span>
                  <p>&ldquo;{r.text}&rdquo;</p>
                  <div className="px-rev-who">
                    <div className="px-av">{r.init}</div>
                    <div><b>{r.name}</b><span>{r.loc}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 13. GUARANTEE ── */}
          <div className="px-seal">
            <div className="px-seal-badge">Paiement<br />sécurisé<br />🔒</div>
            <div>
              <h3>Prix garanti — Aucun frais caché, paiement 100% sécurisé</h3>
              <p>Le prix affiché est le prix final. Pas de frais d&apos;activation, pas de matériel à acheter, pas de supplément. Chaque paiement via Wave ou Orange Money est enregistré et traçable. Si vous rencontrez le moindre problème, notre support WhatsApp est disponible 24/7 pour vous aider.</p>
            </div>
          </div>

          {/* ── 14. FAQ ── */}
          <section id="px-faq">
            <span className="eyebrow">FAQ Prix</span>
            <h2>Questions fréquentes sur les prix IPTV à Abidjan</h2>
            <div className="px-faq">
              {faqs.map(f => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* ── 15. INTERNAL LINKS ── */}
          <section>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>En savoir plus sur l&apos;IPTV en Côte d&apos;Ivoire</h2>
            <p style={{ color: '#6B7280' }}>Explorez nos autres pages pour tout savoir :</p>
            <div className="px-cities">
              <Link href="/iptv-abidjan" className="px-city-link">📍 IPTV Abidjan</Link>
              <Link href="/abonnement-iptv-cote-divoire" className="px-city-link">📦 Abonnement IPTV CI</Link>
              <Link href="/blog/comment-installer-iptv-smarters-pro" className="px-city-link">📲 Guide Installation</Link>
              <Link href="/essai-gratuit" className="px-city-link">🎁 Essai Gratuit 24h</Link>
              <Link href="/paiement" className="px-city-link">💳 Paiement Wave & OM</Link>
              <Link href="/faq" className="px-city-link">❓ FAQ Complète</Link>
              <Link href="/devenir-revendeur-iptv" className="px-city-link">🤝 Devenir Revendeur</Link>
              <Link href="/chaines" className="px-city-link">📺 Liste des Chaînes</Link>
            </div>
            <h3 style={{ fontSize: '1.2rem' }}>IPTV dans d&apos;autres villes de Côte d&apos;Ivoire</h3>
            <div className="px-cities">
              {[
                { name: 'IPTV Bouaké', href: '/iptv-bouake' },
                { name: 'IPTV Yamoussoukro', href: '/iptv-yamoussoukro' },
                { name: 'IPTV San Pedro', href: '/iptv-san-pedro' },
                { name: 'IPTV Korhogo', href: '/iptv-korhogo' },
                { name: 'IPTV Daloa', href: '/iptv-daloa' },
                { name: 'IPTV Man', href: '/iptv-man' },
                { name: 'IPTV Gagnoa', href: '/iptv-gagnoa' },
                { name: 'IPTV Divo', href: '/iptv-divo' },
                { name: 'IPTV Grand-Bassam', href: '/iptv-grand-bassam' },
              ].map(c => <Link key={c.name} href={c.href} className="px-city-link">📍 {c.name}</Link>)}
            </div>
          </section>

          {/* ── 16. FINAL CTA ── */}
          <section className="px-final">
            <h2>Prêt à profiter du meilleur prix IPTV à Abidjan ?</h2>
            <p>Dès 2 950 FCFA/mois. 22 840 chaînes 4K. Paiement Wave & Orange Money. Activation en 5 minutes.</p>
            <div className="px-cta-row" style={{ justifyContent: 'center' }}>
              <a href={`${WHATSAPP_URL}&text=Bonjour, je veux un abonnement IPTV à Abidjan`} target="_blank" rel="noopener noreferrer" id="prix-abidjan-final-cta" className="px-btn px-btn-wa">💬 Commander mon IPTV à Abidjan</a>
              <Link href="/essai-gratuit" className="px-btn" style={{ background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.25)', color: '#fff' }}>🎁 Essai gratuit 24h →</Link>
            </div>
          </section>

        </div>{/* .px */}

        {/* STICKY MOBILE BAR */}
        <div className="px-sticky">
          <a href="#px-tarifs" className="s-buy">Voir les prix FCFA</a>
          <a href={`${WHATSAPP_URL}&text=Bonjour, je veux un abonnement IPTV à Abidjan`} target="_blank" rel="noopener noreferrer" className="s-wa">💬 WhatsApp</a>
        </div>
      </main>
      <Footer />
    </>
  )
}
