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
  alternates: {
    canonical: 'https://iptvivoire.com/blog',
  },
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

            {/* SEO content section for word count */}
            <div style={{ marginTop: '4rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
              <div className="divider" style={{ marginBottom: '2.5rem' }} />
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.6rem', color: 'var(--color-text)', marginBottom: '1rem', textAlign: 'center' }}>
                Blog IPTV Côte d&apos;Ivoire — Guides et Ressources
              </h2>
              <div style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.8 }}>
                <p style={{ marginBottom: '1rem' }}>
                  Bienvenue sur le blog d&apos;<strong>IPTV Ivoire</strong>, votre source d&apos;informations complète sur l&apos;<strong>IPTV en Côte d&apos;Ivoire</strong>. Retrouvez ici nos guides détaillés pour installer et configurer votre service IPTV sur tous vos appareils : <Link href="/installation/smart-tv" style={{ color: '#F97316' }}>Smart TV Samsung et LG</Link>, <Link href="/installation/android" style={{ color: '#F97316' }}>Android TV Box</Link>, <Link href="/installation/iphone" style={{ color: '#F97316' }}>iPhone et iPad</Link>, et <Link href="/installation/pc" style={{ color: '#F97316' }}>ordinateur PC/Mac</Link>.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  Découvrez nos <strong>comparatifs IPTV</strong> pour choisir le meilleur abonnement selon vos besoins : qualité 4K, nombre de chaînes, prix en FCFA, et méthodes de paiement (<Link href="/blog/iptv-orange-money-wave-cote-divoire" style={{ color: '#F97316' }}>Orange Money, Wave, MTN MoMo</Link>). Nous publions également des guides sur les événements sportifs comme la <strong>Coupe du Monde 2026</strong>, avec des instructions pour regarder tous les matchs des Éléphants en direct depuis Abidjan.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  Que vous soyez à <Link href="/iptv-abidjan" style={{ color: '#F97316' }}>Abidjan</Link>, <Link href="/iptv-bouake" style={{ color: '#F97316' }}>Bouaké</Link>, <Link href="/iptv-yamoussoukro" style={{ color: '#F97316' }}>Yamoussoukro</Link> ou ailleurs en Côte d&apos;Ivoire, nos articles vous aident à profiter pleinement de votre <strong>abonnement IPTV</strong> avec plus de 22 840 chaînes HD/4K et 124 580 contenus VOD. Consultez nos <Link href="/prix-iptv-abidjan" style={{ color: '#F97316' }}>tarifs complets en FCFA</Link> pour choisir l&apos;offre adaptée à votre budget.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
