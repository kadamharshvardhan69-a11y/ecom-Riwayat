import React from "react";
import "../styles/saree.css";

const SareeList = ({ sarees }) => {
  return (
    <div className="user-container">
      <h2>Our Saree Collection</h2>

      <div className="grid">
        {sarees.map((s, i) => (
          <div className="card" key={i}>
            <img src={s.preview} alt={s.name} />
            <h3>{s.name}</h3>
            <p>₹{s.price}</p>
            <p>{s.description}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SareeList;
