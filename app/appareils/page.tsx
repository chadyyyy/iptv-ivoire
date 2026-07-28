import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { WHATSAPP_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: "Appareils IPTV : Smart TV, Android, iPhone",
  description: "Compatibilité IPTV : Smart TV Samsung/LG, Android TV Box, iPhone, iPad, Android, PC Windows/Mac. Un abonnement, 5 appareils simultanés.",
}

const devices = [
  { emoji: '📺', name: 'Smart TV', brands: ['Samsung Tizen', 'LG WebOS', 'Hisense VIDAA', 'TCL Roku TV', 'Philips Android TV'], slug: 'smart-tv' },
  { emoji: '📦', name: 'Android TV Box', brands: ['Xiaomi MI Box', 'NVIDIA Shield', 'Amazon Fire TV', 'Formuler Z8 Pro', 'Mag 522W3'], slug: 'android' },
  { emoji: '🍎', name: 'iPhone / iPad', brands: ['iPhone 11 et +', 'iPad (tous)', 'iPhone SE 2ème gen+', 'iOS 14 minimum'], slug: 'iphone' },
  { emoji: '🤖', name: 'Téléphone Android', brands: ['Samsung Galaxy', 'Tecno', 'Infinix', 'Itel', 'Huawei'], slug: 'android' },
  { emoji: '💻', name: 'PC / Mac', brands: ['Windows 10/11', 'macOS 11+', 'Ubuntu Linux', 'Chromebook (via Chrome)'], slug: 'pc' },
  { emoji: '🔥', name: 'Amazon Fire TV', brands: ['Fire Stick 4K', 'Fire TV Cube', 'Fire TV Stick Lite', 'Fire Stick (2e gen+)'], slug: 'android' },
]

export default function AppareilsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section geo-pattern">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-label">Compatibilité</span>
              <h1 className="section-title" style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3rem)' }}>
                Appareils <span className="gradient-text">Compatibles</span>
              </h1>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Un seul abonnement fonctionne sur <strong style={{ color: '#F97316' }}>5 appareils simultanément</strong>. Regardez IPTV partout en Côte d&apos;Ivoire.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
              {devices.map(d => (
                <div key={d.name} className="card">
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{d.emoji}</div>
                  <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, color: 'var(--color-text)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>{d.name}</h2>
                  <ul style={{ listStyle: 'none' }}>
                    {d.brands.map(b => (
                      <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.3rem 0', color: '#9CA3AF', fontSize: '0.82rem' }}>
                        <span style={{ color: '#4ADE80', flexShrink: 0 }}>✓</span> {b}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/installation/${d.slug}`} style={{ display: 'block', marginTop: '1rem', color: '#F97316', textDecoration: 'none', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.82rem' }}>
                    Guide d&apos;installation →
                  </Link>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="appareils-cta" className="btn-primary" style={{ marginRight: '1rem' }}>
                📱 Activer maintenant
              </a>
              <Link href="/installation" className="btn-secondary">Tous les guides</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
