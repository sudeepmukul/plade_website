import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found. Return to the PLADE homepage.',
};

export default function NotFound() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '2rem',
        background: 'var(--bg)',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(6rem, 20vw, 14rem)',
          lineHeight: 1,
          color: 'var(--accent)',
          opacity: 0.15,
          marginBottom: '-1rem',
        }}
      >
        404
      </div>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          letterSpacing: '0.04em',
          color: 'var(--text)',
          marginBottom: '1rem',
        }}
      >
        TARGET NOT FOUND
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '1rem',
          color: 'var(--muted)',
          maxWidth: '400px',
          lineHeight: 1.6,
          marginBottom: '2rem',
        }}
      >
        The code you were looking for doesn&apos;t exist. Head back to the main arena.
      </p>
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '0.9rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--bg)',
          background: 'var(--accent)',
          padding: '1rem 2.2rem',
          textDecoration: 'none',
          clipPath: 'polygon(14px 0%, 100% 0%, calc(100% - 14px) 100%, 0% 100%)',
        }}
      >
        Return to PLADE
      </Link>
    </main>
  );
}
