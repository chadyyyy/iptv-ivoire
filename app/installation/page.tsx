import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Installation IPTV — Guide Complet Smart TV, Android, iPhone, PC | Côte d'Ivoire",
  description: "Guides d'installation IPTV pour Smart TV Samsung/LG, Android TV Box, iPhone, Android, PC et Amazon Fire TV en Côte d'Ivoire.",
}

const devices = [
  { slug: 'smart-tv', emoji: '📺', name: 'Smart TV', desc: 'Samsung, LG, Hisense, TCL', time: '5 min' },
  { slug: 'android', emoji: '🤖', name: 'Android / TV Box', desc: 'Téléphone, tablette, box Android', time: '3 min' },
  { slug: 'iphone', emoji: '🍎', name: 'iPhone / iPad', desc: 'iOS 14 et versions récentes', time: '5 min' },
  { slug: 'pc', emoji: '💻', name: 'PC / Mac', desc: 'Windows, macOS, navigateur web', time: '2 min' },
  { slug: 'iptv-smarters-pro', emoji: '▶️', name: 'IPTV Smarters Pro', desc: "Meilleur lecteur IPTV universel", time: '5 min' },
]

export default function InstallationPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section geo-pattern">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-label">Installation</span>
              <h1 className="section-title" style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3rem)' }}>
                Guides d&apos;Installation <span className="gradient-text">IPTV</span>
              </h1>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Configuration en moins de 5 minutes sur tous vos appareils. Guides illustrés étape par étape.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {devices.map(d => (
                <Link key={d.slug} href={`/installation/${d.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ cursor: 'pointer', height: '100%' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{d.emoji}</div>
                    <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, color: 'var(--color-text)', fontSize: '1.15rem', marginBottom: '0.4rem' }}>{d.name}</h2>
                    <p style={{ color: '#6B7280', fontSize: '0.85rem', marginBottom: '0.75rem' }}>{d.desc}</p>
                    <span style={{ color: '#4ADE80', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.8rem' }}>⏱ {d.time}</span>
                    <div style={{ marginTop: '1rem', color: '#F97316', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.85rem' }}>
                      Voir le guide →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
