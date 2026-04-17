export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div>
        <div className="footer-logo">PL<span>A</span>DE</div>
        <div className="footer-copy">
          Built at CMR College of Engineering &amp; Technology &nbsp;·&nbsp; SIP Project {currentYear}
        </div>
      </div>
      <nav className="footer-links" aria-label="Footer navigation">
        <a href="#features">Features</a>
        <a href="#how-it-works">Gameplay</a>
        <a href="#tech">Tech</a>
        <a href="#download">Download</a>
      </nav>
    </footer>
  );
}
