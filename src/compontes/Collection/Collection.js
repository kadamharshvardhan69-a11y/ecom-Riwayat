import products from "../Data/Product";
import "./Collection.css";
import { useNavigate } from "react-router-dom";

function Collection() {
  const navigate = useNavigate();

  return (
    <section className="collection" id="collection">
      <h2>Our Saree Collection</h2>

      <div className="grid">
        {products.map(item => (
          <div
            className="card"
            key={item.id}
            onClick={() => navigate(`/Product/${item.id}`)}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Rs.{item.price.toLocaleString("en-IN")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Collection;
