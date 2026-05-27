'use client'

import Link from 'next/link'
import { useState } from 'react'
import { WHATSAPP_URL } from '@/lib/seo'

const navLinks = [
  { href: '/abonnement-iptv-cote-divoire', label: 'Abonnements' },
  { href: '/chaines', label: 'Chaînes' },
  { href: '/installation', label: 'Installation' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--color-border)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.5rem',
        height: '64px',
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: 36, height: 36,
            background: 'linear-gradient(135deg, #F97316, #EA580C)',
            borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 900, fontSize: '1rem', color: 'white',
            flexShrink: 0,
          }}>IV</div>
          <span style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 800,
            fontSize: '1.1rem',
            color: 'var(--color-text)',
          }}>
            IPTV <span style={{ color: '#F97316' }}>Ivoire</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} style={{
              textDecoration: 'none',
              color: 'var(--color-text-muted)',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 600,
              fontSize: '0.9rem',
              padding: '0.5rem 0.75rem',
              borderRadius: '0.5rem',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              (e.target as HTMLElement).style.color = 'var(--color-primary)'
              ;(e.target as HTMLElement).style.background = 'rgba(249,115,22,0.06)'
            }}
            onMouseLeave={e => {
              (e.target as HTMLElement).style.color = 'var(--color-text-muted)'
              ;(e.target as HTMLElement).style.background = 'transparent'
            }}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Burger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.6rem 1.1rem', fontSize: '0.85rem' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>

          {/* Mobile burger */}
          <button
            id="nav-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--color-text)', padding: '0.25rem',
              display: 'none',
            }}
            className="burger-btn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'var(--color-surface)',
          borderTop: '1px solid var(--color-border)',
          padding: '1rem 1.5rem',
        }}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                textDecoration: 'none',
                color: 'var(--color-text-muted)',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 600,
                fontSize: '1rem',
                padding: '0.75rem 0',
                borderBottom: '1px solid var(--color-border)',
              }}>
              {link.label}
            </Link>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="btn-whatsapp" style={{ marginTop: '1rem', width: '100%' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contacter via WhatsApp
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
