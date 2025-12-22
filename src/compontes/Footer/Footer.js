import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <h2>Riwayat</h2>
          <p>Crafted with tradition, styled for today.</p>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Pinterest</a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Riwayat | Crafted with tradition</p>
      </div>
    </footer>
  );
}

export default Footer;
