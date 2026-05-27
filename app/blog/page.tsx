import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getAllPosts } from '@/lib/blog'
import { getBreadcrumbSchema } from '@/lib/schema'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Blog IPTV Côte d'Ivoire — Guides, Conseils et Actualités",
  description: "Guides complets sur l'IPTV en Côte d'Ivoire. Installation, paiement Orange Money et Wave, Coupe du Monde 2026, comparatifs et actualités IPTV.",
}

export default function BlogIndexPage() {
  const posts = getAllPosts()
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://iptvivoire.com' },
    { name: 'Blog', url: 'https://iptvivoire.com/blog' },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        <section className="section geo-pattern">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-label">Blog</span>
              <h1 className="section-title">Guides &amp; Actualités IPTV</h1>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Tout savoir sur l&apos;IPTV en Côte d&apos;Ivoire — guides d&apos;installation, conseils, comparatifs et actus.
              </p>
            </div>

            {posts.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#6B7280', padding: '3rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📝</div>
                <p>Les articles arrivent bientôt…</p>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {posts.map(post => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <article className="card" style={{ cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
                      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
                        <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
                      </div>
                      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <div style={{ marginBottom: '0.75rem' }}>
                          <span style={{
                            background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)',
                            color: '#F97316', padding: '0.2rem 0.6rem', borderRadius: '0.4rem',
                            fontSize: '0.72rem', fontFamily: 'Outfit, sans-serif', fontWeight: 700,
                          }}>{post.category}</span>
                          <span style={{ color: '#6B7280', fontSize: '0.72rem', marginLeft: '0.5rem' }}>{post.readingTime}</span>
                        </div>
                        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--color-text)', fontSize: '1rem', marginBottom: '0.6rem', lineHeight: 1.4, flex: 1 }}>{post.title}</h2>
                        <p style={{ color: '#6B7280', fontSize: '0.82rem', lineHeight: 1.65, marginBottom: '1rem' }}>{post.description}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                          <span style={{ color: '#6B7280', fontSize: '0.75rem' }}>{new Date(post.publishedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                          <span style={{ color: '#F97316', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.8rem' }}>Lire →</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
