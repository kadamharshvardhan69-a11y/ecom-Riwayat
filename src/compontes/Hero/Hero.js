import "./Hero.css";

function Hero() {

  const scrollToCollection = () => {
    const section = document.getElementById("collection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Elegance That Speaks Tradition</h1>
        <p>Explore timeless saree collections inspired by heritage</p>

        <button onClick={scrollToCollection}>
          Explore Collection
        </button>
      </div>
    </section>
  );
}

export default Hero;
