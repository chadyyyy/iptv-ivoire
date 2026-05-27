'use client'

import Link from 'next/link'
import Image from 'next/image'
import { WHATSAPP_URL } from '@/lib/seo'

const footerLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/abonnement', label: 'Abonnement' },
  { href: '/chaines', label: 'Chaînes' },
  { href: '/installation', label: 'Installation' },
  { href: '/paiement', label: 'Paiement' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
  { href: '/revendeur', label: 'Revendeur' },
  { href: '/essai-gratuit', label: 'Essai Gratuit' },
]

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--color-surface)',
      borderTop: '1px solid var(--color-border)',
      padding: '3.5rem 1.5rem 2rem',
    }}>
      <div className="container">
        {/* Top row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
          marginBottom: '2.5rem',
        }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{
                width: 36, height: 36,
                background: 'linear-gradient(135deg, #F97316, #EA580C)',
                borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 900, fontSize: '0.95rem', color: 'white',
              }}>IV</div>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.05rem', color: 'var(--color-text)' }}>
                IPTV <span style={{ color: '#F97316' }}>Ivoire</span>
              </span>
            </Link>
            <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              Le service IPTV de référence en Côte d&apos;Ivoire. +22 000 chaînes HD/4K, paiement Orange Money et Wave.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ fontSize: '0.85rem', padding: '0.6rem 1rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '0.25rem' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Links */}
          <div>
            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--color-text)', fontSize: '0.95rem', marginBottom: '1rem' }}>Pages</h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {footerLinks.slice(0, 5).map(link => (
                <Link key={link.href} href={link.href} style={{ textDecoration: 'none', color: 'var(--color-text-dim)', fontSize: '0.875rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = '#F97316'}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--color-text-dim)'}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--color-text)', fontSize: '0.95rem', marginBottom: '1rem' }}>Services</h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {footerLinks.slice(5).map(link => (
                <Link key={link.href} href={link.href} style={{ textDecoration: 'none', color: 'var(--color-text-dim)', fontSize: '0.875rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = '#F97316'}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--color-text-dim)'}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Payment */}
          <div>
            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--color-text)', fontSize: '0.95rem', marginBottom: '1rem' }}>Paiement accepté</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {[
                { name: 'Orange Money', img: '/payments/orange.png' },
                { name: 'Wave', img: '/payments/wave.png' },
                { name: 'MTN MoMo', img: '/payments/mtn.png' },
                { name: 'Moov Money', img: '/payments/moov.png' }
              ].map(p => (
                <span key={p.name} style={{
                  background: 'var(--color-surface-2)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '0.5rem',
                  padding: '0.35rem 0.65rem',
                  fontSize: '0.78rem',
                  color: 'var(--color-text-muted)',
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <Image src={p.img} alt={p.name} width={16} height={16} style={{ objectFit: 'contain', borderRadius: '4px' }} />
                  {p.name}
                </span>
              ))}
            </div>

            <div style={{ marginTop: '1.25rem' }}>
              <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--color-text)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>Zones desservies</h3>
              <p style={{ color: 'var(--color-text-dim)', fontSize: '0.8rem', lineHeight: 1.7 }}>
                Abidjan · Yamoussoukro · Bouaké · Daloa · San-Pédro · Korhogo
              </p>
            </div>
          </div>
        </div>

        <div className="divider" style={{ marginBottom: '1.5rem' }} />

        {/* Bottom */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <p style={{ color: 'var(--color-text-dim)', fontSize: '0.8rem' }}>
            © 2026 IPTV Ivoire — Abidjan, Côte d&apos;Ivoire. Tous droits réservés.
          </p>
          <p style={{ color: 'var(--color-text-dim)', fontSize: '0.8rem' }}>
            Service disponible 24h/24 · 7j/7 · Support WhatsApp
          </p>
        </div>
      </div>
    </footer>
  )
}
