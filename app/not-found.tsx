import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FileQuestion, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="geo-pattern" style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 1.5rem',
      }}>
        <div style={{
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(8px)',
          padding: '3.5rem 2rem',
          borderRadius: '1.5rem',
          border: '1px solid var(--color-border)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
        }}>
          <div style={{
            background: 'rgba(249, 115, 22, 0.1)',
            padding: '1.5rem',
            borderRadius: '50%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-primary)',
          }}>
            <FileQuestion size={48} />
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 2.75rem)',
            fontWeight: 800,
            color: 'var(--color-text)',
            margin: 0,
            fontFamily: 'Outfit, sans-serif',
          }}>
            Erreur 404
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6,
            margin: 0,
          }}>
            Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            width: '100%',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '1rem',
          }}>
            <Link href="/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', width: 'auto', textDecoration: 'none' }}>
              <Home size={18} />
              Retourner à l&apos;accueil
            </Link>
            <Link href="/abonnement-iptv-cote-divoire" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', width: 'auto', textDecoration: 'none' }}>
              Voir nos offres
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
