import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { WHATSAPP_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: "Chaînes IPTV Côte d'Ivoire — RTI, beIN Sports, Chaînes Africaines",
  description: "+22 000 chaînes IPTV disponibles en Côte d'Ivoire. RTI 1, RTI 2, La 3, beIN Sports, Canal+, chaînes françaises, africaines et internationales en HD/4K.",
}

const categories = [
  { emoji: '🇨🇮', name: 'Chaînes Ivoiriennes', count: '15+', channels: ['RTI 1', 'RTI 2', 'La 3', 'NCI', 'Life TV', 'Canal 2 CI', 'A+', 'CanalSat CI'] },
  { emoji: '🌍', name: 'Chaînes Africaines', count: '50+', channels: ['RTS (Sénégal)', 'ORTM (Mali)', 'RTB (Burkina)', 'Canal 2 (Cameroun)', 'RTNC (Congo)', 'TV5 Monde Afrique', 'Africa 24', 'Canal+ Afrique'] },
  { emoji: '⚽', name: 'Sport', count: '80+', channels: ['beIN Sports 1', 'beIN Sports 2', 'Canal+ Sport', 'Eurosport 1 & 2', 'RMC Sport', 'DAZN', 'Sky Sports', 'ESPN'] },
  { emoji: '🎬', name: 'Cinéma & VOD', count: '120 000+', channels: ['Ciné+ Premier', 'OCS Action', 'TCM Cinéma', 'Paramount+', 'Netflix CI', 'Disney+', 'Amazon Prime', 'HBO'] },
  { emoji: '📺', name: 'Chaînes Françaises', count: '50+', channels: ['TF1', 'France 2', 'France 3', 'France 5', 'M6', 'Arte', 'W9', 'TMC', 'TFX', 'C8', 'CNews', 'BFMTV'] },
  { emoji: '🌐', name: 'Internationales', count: '22 000+', channels: ['BBC World', 'CNN International', 'Al Jazeera', 'Sky News Arabia', 'MBC', 'Nile TV', 'ART', 'TRT World'] },
  { emoji: '🎮', name: 'Kids & Famille', count: '30+', channels: ['Disney Channel', 'Cartoon Network', 'Nickelodeon', 'Canal+ Family', 'Gulli', 'TiJi', 'Tiji', 'Piwi+'] },
  { emoji: '🏆', name: 'Coupe du Monde 2026', count: '64 matchs', channels: ['TF1', 'France 2', 'beIN Sports', 'Canal+ Sport', 'RTI 2', 'BBC', 'ITV', 'Telemundo'] },
]

export default function ChainesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section geo-pattern">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-label">Catalogue</span>
              <h1 className="section-title" style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3rem)' }}>
                +22 000 Chaînes <span className="gradient-text">HD & 4K</span>
              </h1>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Des chaînes ivoiriennes, africaines, françaises et internationales. Tout en HD et 4K avec VOD illimitée.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {categories.map(cat => (
                <div key={cat.name} className="card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '2rem' }}>{cat.emoji}</span>
                    <div>
                      <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, color: 'var(--color-text)', fontSize: '1rem' }}>{cat.name}</h2>
                      <span style={{ color: '#F97316', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.82rem' }}>{cat.count}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {cat.channels.map(ch => (
                      <span key={ch} style={{
                        background: 'var(--color-surface-2)', border: '1px solid var(--color-border)',
                        padding: '0.25rem 0.6rem', borderRadius: '0.4rem',
                        color: '#9CA3AF', fontSize: '0.75rem',
                        fontFamily: 'Outfit, sans-serif', fontWeight: 600,
                      }}>{ch}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="chaines-cta" className="btn-primary" style={{ marginRight: '1rem' }}>
                📱 Activer mon abonnement
              </a>
              <Link href="/abonnement" className="btn-secondary">Voir les tarifs</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
