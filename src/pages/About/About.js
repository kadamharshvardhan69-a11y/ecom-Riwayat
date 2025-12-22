import "./About.css";

function About() {
  return (
    <div className="about-container">
      
      {/* Page Header */}
      <div className="about-header">
        <h1>About</h1>
        <p>
          <span>Home</span> &gt; <strong>About</strong>
        </p>
      </div>

      {/* About Content */}
      <div className="about-content">
        <p>
          <strong>Riwayat</strong> is one of the world's leading
          ecommerce brands and is internationally recognized for celebrating
          the essence of classic worldwide cool-looking style.
        </p>

        <div className="about-info">
          <p>
            <strong>Address:</strong> X8R7+FQV, State Bank Colony, Ratnagiri, Maharashtra 415639
          </p>

          <p>
            <strong>Contact No:</strong> +91 9876543210
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.6599447857566!2d73.311913773896!3d16.99126921409818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea0d005a46c48f%3A0x44681e820bc3271d!2sRiwayat!5e0!3m2!1sen!2sin!4v1766123078060!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default About;
