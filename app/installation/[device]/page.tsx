import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { WHATSAPP_URL } from '@/lib/seo'

const deviceGuides: Record<string, {
  name: string; emoji: string; description: string
  steps: { title: string; details: string }[]
}> = {
  'smart-tv': {
    name: 'Smart TV (Samsung & LG)',
    emoji: '📺',
    description: "Guide d'installation IPTV sur Smart TV Samsung et LG en Côte d'Ivoire.",
    steps: [
      { title: "Téléchargez l'application", details: "Sur Samsung : ouvrez Smart Hub → Applications → cherchez « IPTV Smarters » et installez. Sur LG : Content Store → cherchez « IPTV Smarters Pro »." },
      { title: "Ouvrez l'application", details: "Lancez IPTV Smarters Pro depuis le menu applications de votre TV." },
      { title: "Sélectionnez 'Login with Xtream Codes API'", details: "Choisissez cette option dans l'écran de connexion." },
      { title: "Entrez vos identifiants", details: "Saisissez l'URL du serveur, le nom d'utilisateur et le mot de passe que vous avez reçus sur WhatsApp après votre abonnement." },
      { title: "Chargement des chaînes", details: "L'application charge automatiquement les +22 000 chaînes. Cela prend 1 à 2 minutes selon votre connexion." },
      { title: "Profitez !", details: "Naviguez dans les catégories : Chaînes Ivoiriennes, Sport, Cinéma, etc. Bonne télévision !" },
    ],
  },
  'android': {
    name: 'Android / TV Box',
    emoji: '🤖',
    description: "Guide d'installation IPTV sur Android TV Box, téléphone ou tablette Android.",
    steps: [
      { title: "Ouvrez le Play Store", details: "Sur votre appareil Android, ouvrez le Google Play Store." },
      { title: "Installez IPTV Smarters Pro", details: "Recherchez « IPTV Smarters Pro » et installez l'application (gratuite)." },
      { title: "Lancez l'application", details: "Ouvrez IPTV Smarters Pro et acceptez les conditions d'utilisation." },
      { title: "Connectez-vous avec vos identifiants", details: "Sélectionnez « Login with Xtream Codes API » et entrez l'URL, le nom d'utilisateur et le mot de passe reçus sur WhatsApp." },
      { title: "Chargement de la liste", details: "Les chaînes se chargent automatiquement. Attendez 1-2 minutes." },
      { title: "Regardez !", details: "Profitez des +22 000 chaînes HD et 4K, et de la VOD avec 120 000+ films." },
    ],
  },
  'iphone': {
    name: 'iPhone / iPad (iOS)',
    emoji: '🍎',
    description: "Guide d'installation IPTV sur iPhone et iPad en Côte d'Ivoire.",
    steps: [
      { title: "Ouvrez l'App Store", details: "Sur votre iPhone ou iPad, ouvrez l'App Store d'Apple." },
      { title: "Téléchargez IPTV Smarters Pro", details: "Recherchez « IPTV Smarters Pro » et téléchargez l'application (gratuite)." },
      { title: "Accordez les permissions", details: "Autorisez l'accès au réseau local si demandé." },
      { title: "Connectez-vous", details: "Sélectionnez « Login with Xtream Codes » et entrez vos identifiants reçus par WhatsApp." },
      { title: "Chargez vos chaînes", details: "La liste des chaînes se charge en 1-2 minutes." },
      { title: "Profitez en HD !", details: "Regardez vos chaînes préférées en HD sur votre iPhone ou iPad partout en Côte d'Ivoire." },
    ],
  },
  'pc': {
    name: 'PC / Mac',
    emoji: '💻',
    description: "Guide d'installation IPTV sur PC Windows ou Mac en Côte d'Ivoire.",
    steps: [
      { title: "Téléchargez VLC ou IPTV Smarters", details: "Sur PC Windows : téléchargez IPTV Smarters sur le Microsoft Store. Sur Mac : utilisez IINA ou VLC." },
      { title: "Alternative : Navigateur web", details: "Vous pouvez aussi utiliser notre lecteur web directement depuis votre navigateur (Chrome, Firefox, Safari)." },
      { title: "Importez la liste M3U", details: "Entrez l'URL M3U que nous vous envoyons via WhatsApp dans le lecteur de votre choix." },
      { title: "Ou utilisez Xtream Codes", details: "Dans IPTV Smarters pour Windows, sélectionnez « Login with Xtream Codes » et entrez vos identifiants." },
      { title: "Chargez et profitez", details: "La liste des +22 000 chaînes se charge automatiquement. Regardez en plein écran !" },
    ],
  },
  'iptv-smarters-pro': {
    name: 'IPTV Smarters Pro',
    emoji: '▶️',
    description: "Guide de configuration IPTV Smarters Pro — le meilleur lecteur IPTV en Côte d'Ivoire.",
    steps: [
      { title: "Téléchargez IPTV Smarters Pro", details: "Disponible sur Play Store (Android), App Store (iOS) et Microsoft Store (Windows). Recherchez « IPTV Smarters Pro »." },
      { title: "Ouvrez l'application", details: "Lancez l'application et acceptez les conditions." },
      { title: "Choisissez votre méthode de connexion", details: "Sélectionnez « Login with Xtream Codes API » — c'est la méthode recommandée." },
      { title: "Entrez l'URL du serveur", details: "Collez l'URL que nous vous envoyons via WhatsApp (ex: http://serveur.iptvivoire.com:8080)." },
      { title: "Entrez vos identifiants", details: "Copiez-collez le nom d'utilisateur et le mot de passe reçus sur WhatsApp." },
      { title: "Cliquez sur Connexion", details: "Les chaînes se chargent en 1-2 minutes selon votre connexion internet." },
      { title: "Naviguez dans les catégories", details: "Retrouvez vos chaînes par catégorie : Ivoiriennes, Africaines, Sport, Cinéma, Françaises, etc." },
      { title: "Astuce buffering", details: "Si vous rencontrez des saccades, activez le cache dans les paramètres : Préférences → Buffer → 5000ms." },
    ],
  },
}

type Props = { params: Promise<{ device: string }> }

export async function generateStaticParams() {
  return Object.keys(deviceGuides).map(device => ({ device }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { device } = await params
  const guide = deviceGuides[device]
  if (!guide) return {}
  return {
    title: `Installation IPTV sur ${guide.name} — Côte d'Ivoire`,
    description: guide.description,
  }
}

export default async function DeviceGuidePage({ params }: Props) {
  const { device } = await params
  const guide = deviceGuides[device]
  if (!guide) notFound()

  return (
    <>
      <Header />
      <main>
        <section className="section geo-pattern">
          <div className="container" style={{ maxWidth: '760px' }}>
            <div style={{ marginBottom: '2rem' }}>
              <span className="section-label">Guide Installation</span>
              <div style={{ fontSize: '3rem', margin: '1rem 0 0.5rem' }}>{guide.emoji}</div>
              <h1 className="section-title" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)' }}>
                IPTV sur <span className="gradient-text">{guide.name}</span>
              </h1>
              <p className="section-subtitle">{guide.description}</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {guide.steps.map((step, i) => (
                <div key={i} className="card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: 44, height: 44, flexShrink: 0,
                    background: 'linear-gradient(135deg, rgba(249,115,22,0.2), rgba(249,115,22,0.05))',
                    border: '2px solid rgba(249,115,22,0.3)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Outfit, sans-serif', fontWeight: 900, color: '#F97316', fontSize: '1rem',
                  }}>{i+1}</div>
                  <div>
                    <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--color-text)', fontSize: '1rem', marginBottom: '0.4rem' }}>{step.title}</h2>
                    <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.7 }}>{step.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{ marginTop: '2rem', textAlign: 'center', background: 'rgba(249,115,22,0.05)', border: '1px solid rgba(249,115,22,0.2)' }}>
              <p style={{ color: '#9CA3AF', marginBottom: '1rem', fontSize: '0.95rem' }}>
                Besoin d&apos;aide pour l&apos;installation ? Notre équipe est disponible 24h/24 sur WhatsApp.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id={`install-${device}-cta`} className="btn-whatsapp">
                📱 Aide sur WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
