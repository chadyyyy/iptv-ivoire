import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { WHATSAPP_URL } from '@/lib/seo'
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/schema'
import { getAllSlugs, getPostBySlug } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import Image from 'next/image'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `https://iptvivoire.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ['IPTV Ivoire'],
      images: [{ url: post.image, width: 1200, height: 630 }],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const schema = getArticleSchema(post)
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://iptvivoire.com' },
    { name: 'Blog', url: 'https://iptvivoire.com/blog' },
    { name: post.title, url: `https://iptvivoire.com/blog/${post.slug}` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        <article>
          {/* Header */}
          <section className="section geo-pattern" style={{ paddingBottom: '2rem' }}>
            <div className="container" style={{ maxWidth: '760px' }}>
              {/* Visible Breadcrumb Nav — required by RankMath & Google */}
              <nav aria-label="Fil d'Ariane" style={{ marginBottom: '1.25rem' }}>
                <ol style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', listStyle: 'none', padding: 0, margin: 0, flexWrap: 'wrap' }}>
                  <li>
                    <Link href="/" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.8rem', fontFamily: 'Outfit, sans-serif' }}>
                      Accueil
                    </Link>
                  </li>
                  <li style={{ color: '#6B7280', fontSize: '0.8rem' }}>›</li>
                  <li>
                    <Link href="/blog" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.8rem', fontFamily: 'Outfit, sans-serif' }}>
                      Blog
                    </Link>
                  </li>
                  <li style={{ color: '#6B7280', fontSize: '0.8rem' }}>›</li>
                  <li>
                    <span style={{ color: '#F97316', fontSize: '0.8rem', fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>
                      {post.category}
                    </span>
                  </li>
                </ol>
              </nav>
              <span className="badge badge-primary" style={{ marginBottom: '1rem' }}>{post.category}</span>
              <h1 style={{
                fontFamily: 'Outfit, sans-serif', fontWeight: 900,
                fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
                color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '1rem',
              }}>{post.title}</h1>
              <p style={{ color: '#9CA3AF', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{post.description}</p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: 32, height: 32, background: 'linear-gradient(135deg, #F97316, #EA580C)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Outfit, sans-serif', fontWeight: 800, color: 'var(--color-text)', fontSize: '0.75rem' }}>IV</div>
                  <span style={{ color: '#9CA3AF', fontSize: '0.85rem', fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>IPTV Ivoire</span>
                </div>
                <span style={{ color: '#6B7280', fontSize: '0.82rem' }}>
                  {new Date(post.publishedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
                <span style={{ color: '#6B7280', fontSize: '0.82rem' }}>⏱ {post.readingTime}</span>
              </div>
              
              <div style={{ marginTop: '2.5rem', borderRadius: '1rem', overflow: 'hidden', border: '1px solid var(--color-border)', position: 'relative', width: '100%', aspectRatio: '16/9' }}>
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                  priority 
                />
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="section" style={{ paddingTop: '2.5rem' }}>
            <div className="container" style={{ maxWidth: '760px' }}>
              <div className="prose">
                <MDXRemote 
                  source={post.content} 
                  options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
                />
              </div>

              {/* CTA after article */}
              <div className="card" style={{ marginTop: '3rem', textAlign: 'center', background: 'rgba(249,115,22,0.05)', border: '1px solid rgba(249,115,22,0.2)' }}>
                <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, color: 'var(--color-text)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>
                  Prêt à activer votre IPTV ?
                </h2>
                <p style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                  Paiement Orange Money &amp; Wave · Activation en 5 minutes
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id={`blog-${slug}-cta`} className="btn-whatsapp">
                    📱 Activer via WhatsApp
                  </a>
                  <Link href="/abonnement-iptv-cote-divoire" className="btn-secondary">Voir les tarifs</Link>
                </div>
              </div>

              {/* Internal links — SEO keyword-rich anchors */}
              <nav aria-label="Articles connexes" style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'var(--color-surface-2)', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, color: 'var(--color-text)', fontSize: '1rem', marginBottom: '1rem' }}>
                  À lire aussi
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <li>
                    <Link href="/abonnement-iptv-cote-divoire" style={{ color: '#F97316', textDecoration: 'none', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                      → Abonnement IPTV Côte d&apos;Ivoire — Offre Grands Championnats
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/cote-divoire-coupe-du-monde-2026-streaming" style={{ color: '#F97316', textDecoration: 'none', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                      → Regarder les Grands Championnats en IPTV en Côte d&apos;Ivoire
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/comment-installer-iptv-smarters-pro" style={{ color: '#F97316', textDecoration: 'none', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                      → Comment installer IPTV Smarters Pro (Guide complet)
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/iptv-orange-money-wave-cote-divoire" style={{ color: '#F97316', textDecoration: 'none', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                      → Payer son IPTV par Orange Money et Wave en Côte d&apos;Ivoire
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Tags */}
              {post.keywords.length > 0 && (
                <div style={{ marginTop: '2rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {post.keywords.map(kw => (
                      <span key={kw} style={{
                        background: 'var(--color-surface-2)', border: '1px solid var(--color-border)',
                        padding: '0.25rem 0.6rem', borderRadius: '0.4rem',
                        color: '#6B7280', fontSize: '0.75rem',
                        fontFamily: 'Outfit, sans-serif',
                      }}>{kw}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
